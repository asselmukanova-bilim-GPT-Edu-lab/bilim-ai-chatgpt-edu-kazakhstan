const seminarSite = 'https://asselmukanova-bilim-gpt-edu-lab.github.io';
const slidesPerFile = 8;

export const presentations = [
  {
    id: 'school',
    title: { ru: 'Семинар для школьных педагогов', kk: 'Мектеп педагогтеріне арналған семинар' },
    source: `${seminarSite}/chatgpt-edu-seminar/teachers/`,
    count: 30
  },
  {
    id: 'regions',
    title: { ru: 'ChatGPT Edu для регионов', kk: 'Өңірлерге арналған ChatGPT Edu' },
    source: `${seminarSite}/chatgpt-edu-webinar/`,
    count: 34
  },
  {
    id: 'humanities',
    title: { ru: 'Семинар для учителей гуманитарных направлений', kk: 'Гуманитарлық пән мұғалімдеріне арналған семинар' },
    source: `${seminarSite}/chatgpt-edu-kazakh-lanq-seminar/`,
    originalLanguage: 'kk',
    count: 16
  },
  {
    id: 'assessment',
    title: { ru: 'Оценивание в 5–11 классах', kk: '5–11-сыныптарда бағалау' },
    source: 'presentations/assessment-5-11/secondary-5-11-kk.html#slide-1',
    originalLanguage: 'kk',
    count: 19
  },
  {
    id: 'interactive',
    title: { ru: 'ChatGPT Edu — интерактивные материалы', kk: 'ChatGPT Edu — интерактивті материалдар' },
    source: 'presentations/interactive-materials/index.html#slide-1',
    languageQuery: true,
    count: 34
  }
];

const copy = {
  ru: { section: 'Методическая поддержка', previous: 'Предыдущий слайд', next: 'Следующий слайд', slide: 'Слайд', of: 'из', open: 'Открыть для демонстрации', loading: 'Загружаем слайд…', missing: 'Слайд временно недоступен' },
  kk: { section: 'Әдістемелік қолдау', previous: 'Алдыңғы слайд', next: 'Келесі слайд', slide: 'Слайд', of: '/', open: 'Көрсету үшін ашу', loading: 'Слайд жүктелуде…', missing: 'Слайд уақытша қолжетімсіз' }
};

const language = () => document.documentElement.lang === 'kk' ? 'kk' : 'ru';

function localText(info, lang) {
  return info?.[lang] || info?.ru || info?.kk || '';
}

const previewFiles = new Map();

async function previewSlide(deck, index, lang) {
  const prefix = `assets/presentations/${deck.id}-${lang}`;
  if (index === 0) return { src: `${prefix}-cover.webp` };
  const path = `${prefix}-${Math.floor(index / slidesPerFile) + 1}.json`;
  if (!previewFiles.has(path)) {
    const request = fetch(path).then(response => {
      if (!response.ok) throw new Error(`Presentation preview returned ${response.status}`);
      return response.json();
    }).catch(error => {
      previewFiles.delete(path);
      throw error;
    });
    previewFiles.set(path, request);
  }
  const slides = await previewFiles.get(path);
  const { image, alt, hash } = slides[index % slidesPerFile];
  if (!image) throw new Error('Presentation slide image is missing');
  return { src: `data:image/webp;base64,${image}`, alt, hash };
}

function create(tag, className, text) {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

function buildCard(deck, deckIndex) {
  let index = 0;
  let pointer = null;
  let loadedLanguage;
  let activeRequest = 0;
  let shownSlide;
  let stageState = 'loading';
  const card = create('article', 'presentation-card video-card');
  const stage = create('div', 'presentation-stage');
  const image = create('img');
  image.loading = 'lazy';
  image.decoding = 'async';
  image.draggable = false;
  const status = create('div', 'presentation-image-status');
  status.setAttribute('role', 'status');
  stage.append(image, status);

  const controls = create('div', 'presentation-controls');
  const previous = create('button', null, '←');
  const next = create('button', null, '→');
  previous.type = next.type = 'button';
  const counter = create('output');
  counter.setAttribute('aria-live', 'polite');
  controls.append(previous, counter, next);

  const information = create('div', 'video-card-copy');
  const heading = create('h3');
  const titleId = 'presentation-title-' + (deckIndex + 1);
  heading.id = titleId;
  card.setAttribute('aria-labelledby', titleId);
  const open = create('a', 'presentation-open');
  open.target = '_blank';
  open.rel = 'noopener noreferrer';
  information.append(heading, open);
  card.append(stage, controls, information);
  stage.tabIndex = 0;
  stage.setAttribute('role', 'group');

  function updateLabels() {
    const lang = language();
    const labels = copy[lang];
    const slideLabel = labels.slide + ' ' + (index + 1) + ' ' + labels.of + ' ' + deck.count;
    heading.textContent = localText(deck.title, lang);
    stage.setAttribute('aria-label', heading.textContent + '. ' + slideLabel);
    image.alt = shownSlide?.alt || heading.textContent + '. ' + slideLabel;
    image.lang = deck.originalLanguage || lang;
    previous.setAttribute('aria-label', labels.previous);
    next.setAttribute('aria-label', labels.next);
    counter.textContent = slideLabel;
    status.textContent = stageState === 'loading' ? labels.loading : labels.missing;
    status.hidden = stageState === 'ready';
    image.hidden = stageState !== 'ready';
    open.textContent = labels.open;
    const destination = new URL(deck.source, document.baseURI);
    if (deck.languageQuery) destination.searchParams.set('lang', lang);
    if (shownSlide?.hash) destination.hash = shownSlide.hash;
    open.href = destination.href;
  }

  async function showSlide(newIndex) {
    index = newIndex;
    loadedLanguage = deck.originalLanguage || language();
    const request = ++activeRequest;
    shownSlide = null;
    stageState = 'loading';
    updateLabels();
    previous.setAttribute('aria-disabled', String(index === 0));
    next.setAttribute('aria-disabled', String(index === deck.count - 1));
    try {
      const slide = await previewSlide(deck, index, loadedLanguage);
      if (request !== activeRequest) return;
      const decoded = new Image();
      decoded.src = slide.src;
      await decoded.decode();
      if (request !== activeRequest) return;
      shownSlide = slide;
      image.src = slide.src;
      stageState = 'ready';
    } catch {
      if (request !== activeRequest) return;
      stageState = 'missing';
    }
    updateLabels();
  }

  function updateLanguage() {
    if ((deck.originalLanguage || language()) !== loadedLanguage) showSlide(index);
    else updateLabels();
  }

  function move(direction) {
    const nextIndex = index + direction;
    if (nextIndex >= 0 && nextIndex < deck.count) showSlide(nextIndex);
  }

  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  card.addEventListener('keydown', event => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
    event.preventDefault();
    move(event.key === 'ArrowLeft' ? -1 : 1);
  });
  stage.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'touch' || !event.isPrimary) return;
    pointer = { id: event.pointerId, x: event.clientX, y: event.clientY };
    stage.setPointerCapture(event.pointerId);
  });
  stage.addEventListener('pointercancel', () => { pointer = null; });
  stage.addEventListener('pointerup', event => {
    if (pointer?.id !== event.pointerId) return;
    const dx = event.clientX - pointer.x;
    const dy = event.clientY - pointer.y;
    pointer = null;
    if (Math.abs(dx) > 36 && Math.abs(dx) > 1.5 * Math.abs(dy)) move(dx < 0 ? 1 : -1);
  });

  showSlide(0);
  return { card, updateLanguage };
}

export function renderPresentations(decks) {
  const shelf = document.getElementById('presentation-shelf');
  const empty = document.getElementById('presentation-empty');
  const cards = decks.map(buildCard);
  shelf.replaceChildren(...cards.map(item => item.card));
  shelf.hidden = cards.length === 0;
  empty.hidden = cards.length > 0;
  return () => cards.forEach(item => item.updateLanguage());
}

const updateCards = renderPresentations(presentations);
function updateLanguage() {
  document.title = copy[language()].section + ' — Bilim AI';
  updateCards();
}
new MutationObserver(updateLanguage).observe(document.documentElement, { attributeFilter: ['lang'] });
updateLanguage();
