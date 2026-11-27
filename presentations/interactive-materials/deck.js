const stage = document.querySelector('main.slide');
const pages = [...stage.querySelectorAll('section[data-page]')];
const menu = document.getElementById('deck-menu');
const viewer = document.getElementById('deck-demo');
const demoFrame = viewer.querySelector('iframe');
const previous = document.getElementById('previous');
const next = document.getElementById('next');
const languageButtons = [...document.querySelectorAll('[data-language]')];
let current = 1;
let language = 'kk';

function translate(value) {
  const key = value.trim().replace(/\s+/g, ' ');
  if (language !== 'ru' || !Object.hasOwn(russianText, key)) return value;
  return value.replace(/\S[\s\S]*\S|\S/, russianText[key]);
}

const localizedText = [];
const localizedAttributes = [];
for (const scope of [document.querySelector('title'), stage, menu, viewer]) {
  const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    const node = walker.currentNode;
    const original = node.nodeValue;
    if (Object.hasOwn(russianText, original.trim().replace(/\s+/g, ' '))) {
      localizedText.push([node, original]);
    }
  }
  for (const element of [scope, ...scope.querySelectorAll('[aria-label], [title], [alt]')]) {
    for (const name of ['aria-label', 'title', 'alt']) {
      if (element.hasAttribute(name)) localizedAttributes.push([element, name, element.getAttribute(name)]);
    }
  }
}

function setLanguage(value) {
  language = value === 'ru' ? 'ru' : 'kk';
  document.documentElement.lang = language;
  for (const [node, original] of localizedText) node.nodeValue = translate(original);
  for (const [element, name, original] of localizedAttributes) {
    element.setAttribute(name, translate(original));
  }
  languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
  fillMenu();
}

function fitStage() {
  const scale = Math.min(innerWidth / 1600, innerHeight / 900);
  stage.style.setProperty('--slide-scale', scale);
  stage.style.transform = `translate(-50%,-50%) scale(${scale})`;
  stage.style.position = 'absolute';
  stage.style.left = '50%';
  stage.style.top = '50%';
}

function showPage(requested, syncHash = true) {
  current = Math.max(1, Math.min(pages.length, requested));
  const active = pages[current - 1];
  pages.forEach(page => { page.hidden = page !== active; });
  stage.classList.toggle('light', current !== 1);
  const counter = String(current).padStart(2, '0');
  document.getElementById('page-number').textContent = counter;
  document.getElementById('page-total').textContent = `/ ${pages.length}`;
  previous.disabled = current === 1;
  next.disabled = current === pages.length;
  if (syncHash) {
    const url = new URL(location.href);
    if (language === 'ru') url.searchParams.set('lang', 'ru');
    else url.searchParams.delete('lang');
    url.hash = `slide-${current}`;
    history.replaceState(null, '', url.href);
  }
}

function readHash() {
  const target = Number(location.hash.match(/^#slide-(\d+)$/)?.[1]) || 1;
  showPage(target, false);
}

function openDemo(button) {
  const title = button.textContent.trim();
  let source = button.dataset.demo;
  if (language === 'ru') {
    if (source === 'materials/assessment-seminar/index-kk.html') {
      source = 'materials/assessment-seminar/index.html';
    } else if (source === 'materials/stem-seminar/stem-chatgpt-edu-kk.html') {
      source = 'materials/stem-seminar/stem-chatgpt-edu.html';
    } else if (source === 'materials/python-mobile/index.html') {
      source += '?lang=ru';
    } else if (source.startsWith('assets/work-mode-power.html?')) {
      source += '&deck-lang=ru';
    } else if (source === 'assets/work-mode-power.html#kz/8') {
      source = 'assets/work-mode-power.html?deck-lang=ru#ru/8';
    }
  }
  document.getElementById('demo-title').textContent = title;
  document.getElementById('demo-external').href = source;
  demoFrame.title = title;
  demoFrame.src = source;
  viewer.showModal();
}

function fillMenu() {
  const list = menu.querySelector('.menu-body');
  list.replaceChildren();
  let previousGroup;
  for (const page of pages) {
    if (page.dataset.group !== previousGroup) {
      const label = document.createElement('h2');
      label.textContent = translate(page.dataset.group);
      list.append(label);
      previousGroup = page.dataset.group;
    }
    const row = document.createElement('button');
    row.type = 'button';
    row.dataset.jump = page.dataset.page;
    row.textContent = `${page.dataset.page.padStart(2, '0')}  ${page.getAttribute('aria-label')}`;
    list.append(row);
  }
}

function toggleFullscreen() {
  if (document.fullscreenElement) {
    void document.exitFullscreen();
  } else {
    document.documentElement.requestFullscreen?.().catch(() => {});
  }
}

previous.addEventListener('click', () => showPage(current - 1));
next.addEventListener('click', () => showPage(current + 1));
languageButtons.forEach(button => button.addEventListener('click', () => {
  setLanguage(button.dataset.language);
  showPage(current);
}));
document.getElementById('toc').addEventListener('click', () => menu.showModal());
document.getElementById('fullscreen').addEventListener('click', toggleFullscreen);
viewer.addEventListener('close', () => demoFrame.removeAttribute('src'));
document.addEventListener('click', event => {
  const button = event.target.closest('[data-jump], [data-demo], [data-close]');
  if (!button) return;
  if (button.hasAttribute('data-close')) button.closest('dialog').close();
  if (button.dataset.demo) openDemo(button);
  if (button.dataset.jump) {
    if (menu.open) menu.close();
    showPage(Number(button.dataset.jump));
  }
});
document.addEventListener('keydown', event => {
  if (menu.open || viewer.open || event.target.isContentEditable) return;
  const commands = {
    ArrowRight: () => showPage(current + 1),
    ArrowLeft: () => showPage(current - 1),
    Home: () => showPage(1),
    End: () => showPage(pages.length),
    f: toggleFullscreen,
    m: () => menu.showModal(),
  };
  const command = commands[event.key] || commands[event.key.toLowerCase()];
  if (command) {
    event.preventDefault();
    command();
  }
});
window.addEventListener('resize', fitStage);
window.addEventListener('hashchange', readHash);
setLanguage(new URLSearchParams(location.search).get('lang'));
fitStage();
readHash();
