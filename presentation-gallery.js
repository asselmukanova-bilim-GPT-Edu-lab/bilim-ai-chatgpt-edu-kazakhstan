// Each deck contains translated title text and an ordered list of slide image URLs.
// Example item: { title: { ru: 'Название', kk: 'Атауы' }, slides: [{ src: 'assets/presentations/slide-01.webp', alt: { ru: 'Описание', kk: 'Сипаттама' } }] }
export const presentations = [];

const copy = {
  ru: { section: 'Методическая поддержка', previous: 'Предыдущий слайд', next: 'Следующий слайд', slide: 'Слайд', of: 'из', missing: 'Слайд временно недоступен' },
  kk: { section: 'Әдістемелік қолдау', previous: 'Алдыңғы слайд', next: 'Келесі слайд', slide: 'Слайд', of: '/', missing: 'Слайд уақытша қолжетімсіз' }
};

const language = () => document.documentElement.lang === 'kk' ? 'kk' : 'ru';

function localText(info, lang) {
  return info?.[lang] || info?.ru || info?.kk || '';
}

function imageUrl(value) {
  try {
    if (typeof value !== 'string' || !value.trim()) return null;
    const url = new URL(value, document.baseURI);
    return url.protocol === 'https:' || (url.protocol === 'http:' && url.origin === location.origin) ? url.href : null;
  } catch {
    return null;
  }
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
  const card = create('article', 'presentation-card video-card');
  const stage = create('div', 'presentation-stage');
  const image = create('img');
  image.loading = 'lazy';
  image.decoding = 'async';
  image.draggable = false;
  const error = create('div', 'presentation-image-error');
  error.hidden = true;
  error.setAttribute('role', 'status');
  stage.append(image, error);

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
  const description = create('p');
  information.append(heading, description);
  card.append(stage, controls, information);
  stage.tabIndex = 0;
  stage.setAttribute('role', 'group');

  function updateLanguage() {
    const lang = language();
    const labels = copy[lang];
    const slideLabel = labels.slide + ' ' + (index + 1) + ' ' + labels.of + ' ' + deck.slides.length;
    heading.textContent = localText(deck.title, lang);
    description.textContent = localText(deck.description, lang);
    description.hidden = !description.textContent;
    stage.setAttribute('aria-label', heading.textContent + '. ' + slideLabel);
    image.alt = localText(deck.slides[index].alt, lang) || heading.textContent + '. ' + slideLabel;
    previous.setAttribute('aria-label', labels.previous);
    next.setAttribute('aria-label', labels.next);
    counter.textContent = slideLabel;
    error.textContent = labels.missing;
  }

  function showSlide(newIndex) {
    index = newIndex;
    error.hidden = true;
    image.hidden = false;
    updateLanguage();
    image.src = deck.slides[index].src;
    previous.setAttribute('aria-disabled', String(index === 0));
    next.setAttribute('aria-disabled', String(index === deck.slides.length - 1));
  }

  function move(direction) {
    const nextIndex = index + direction;
    if (nextIndex >= 0 && nextIndex < deck.slides.length) showSlide(nextIndex);
  }

  image.addEventListener('error', () => {
    image.hidden = true;
    error.hidden = false;
  });
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
  const records = decks.filter(deck => deck?.title && Array.isArray(deck.slides) && deck.slides.length)
    .map(deck => ({
      ...deck,
      slides: deck.slides.map(slide => ({ ...slide, src: imageUrl(slide?.src) })).filter(slide => slide.src)
    }))
    .filter(deck => deck.slides.length);
  const cards = records.map(buildCard);
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
