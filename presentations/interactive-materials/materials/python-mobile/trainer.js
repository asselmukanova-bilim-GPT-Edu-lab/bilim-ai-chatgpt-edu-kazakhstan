const lessons = [
  {
    title: ['Айнымалылар', 'Переменные'],
    explanation: ['Айнымалы мәнді сақтайды. Жаңа мән меншіктелсе, бұрынғы мән ауысады.', 'Переменная хранит значение. При новом присваивании старое значение заменяется.'],
    example: 'score = 7\nscore = 9\nprint(score)', output: '9',
    exercise: 'points = 4\npoints = points + 3\nprint(points)', choices: ['4', '7', '3'], correct: 1,
    reason: ['Алдымен 4 + 3 есептеледі. Нәтиже points айнымалысына жазылады.', 'Сначала вычисляется 4 + 3. Результат записывается в переменную points.'],
    hint: ['Екінші жолда points мәні өзгереді.', 'Во второй строке значение points меняется.'],
  },
  {
    title: ['Деректер типтері', 'Типы данных'],
    explanation: ['Бүтін санның типі — int, мәтіннің типі — str, ал True және False мәндерінің типі — bool.', 'У целых чисел тип int, у текста — str, а у значений True и False — bool.'],
    example: 'item = 7\nprint(type(item).__name__)', output: 'int',
    exercise: 'item = "7"\nprint(type(item).__name__)', choices: ['bool', 'int', 'str'], correct: 2,
    reason: ['Тырнақшаға алынған 7 — мәтін, сондықтан оның типі str.', 'Семёрка в кавычках — это текст, поэтому её тип str.'],
    hint: ['7 санының тырнақша ішінде тұрғанына назар аудар.', 'Обрати внимание на кавычки вокруг семёрки.'],
  },
  {
    title: ['Арифметика', 'Арифметика'],
    explanation: ['Python алдымен көбейту мен бөлуді, одан кейін қосу мен азайтуды орындайды. Жақша ретті өзгерте алады.', 'Python выполняет умножение и деление перед сложением и вычитанием. Скобки могут менять этот порядок.'],
    example: 'print((2 + 3) * 4)', output: '20',
    exercise: 'print(2 + 3 * 4)', choices: ['14', '20', '24'], correct: 0,
    reason: ['Алдымен 3 × 4 = 12, содан кейін 2 + 12 = 14.', 'Сначала 3 × 4 = 12, затем 2 + 12 = 14.'],
    hint: ['Жақша жоқ кезде қандай амал бірінші орындалады?', 'Какое действие выполняется первым, если скобок нет?'],
  },
  {
    title: ['Логикалық амалдар', 'Логические операции'],
    explanation: ['and үшін екі шарт та ақиқат болуы керек. or үшін біреуі жеткілікті. not мәнді кері өзгертеді.', 'Для and оба условия должны быть истинными. Для or достаточно одного. Оператор not меняет значение на противоположное.'],
    example: 'print(7 > 3 and 2 == 2)', output: 'True',
    exercise: 'print(7 > 3 and 2 > 5)', choices: ['True', 'False', 'None'], correct: 1,
    reason: ['7 > 3 — ақиқат, ал 2 > 5 — жалған. and нәтижесі — False.', 'Условие 7 > 3 истинно, а 2 > 5 ложно. Итог для and — False.'],
    hint: ['Әр салыстырудың нәтижесін бөлек анықта.', 'Определи результат каждого сравнения отдельно.'],
  },
  {
    title: ['Шарттар', 'Условия'],
    explanation: ['if шарты ақиқат болса, бірінші блок орындалады. Шарт жалған болса, else блогы орындалады.', 'Когда условие if истинно, выполняется первый блок. Если условие ложно, выполняется блок else.'],
    example: 'n = 8\nif n >= 5:\n    print("A")\nelse:\n    print("B")', output: 'A',
    exercise: 'n = 5\nif n > 5:\n    print("A")\nelse:\n    print("B")', choices: ['A', 'A, B', 'B'], correct: 2,
    reason: ['5 саны 5-тен үлкен емес, сондықтан else блогы B шығарады.', 'Пять не больше пяти, поэтому блок else выводит B.'],
    hint: ['> және >= таңбаларының айырмасын еске түсір.', 'Вспомни разницу между > и >=.'],
  },
  {
    title: ['Циклдер', 'Циклы'],
    explanation: ['for әрекетті қайталайды. range(n) нөлден басталып, n санына жетпей тоқтайды.', 'Цикл for повторяет действие. range(n) начинается с нуля и останавливается перед n.'],
    example: 'for i in range(2):\n    print(i)', output: '0\n1',
    exercise: 'for i in range(3):\n    print(i)', choices: ['0, 1, 2', '1, 2, 3', '0, 1, 2, 3'], correct: 0,
    question: ['Сандар қандай ретпен шығады?', 'В каком порядке появятся числа?'],
    reason: ['range(3) мәндері: 0, 1, 2. 3 бұл қатарға кірмейді.', 'range(3) даёт 0, 1, 2. Число 3 в диапазон не входит.'],
    hint: ['Санау 0-ден басталады. Соңғы шек қатарға кіре ме?', 'Счёт начинается с нуля. Входит ли правая граница в диапазон?'],
  },
];

const ui = {
  languages: ['Тілді таңдау', 'Выбор языка'],
  topics: ['Тақырыптар', 'Темы'],
  progressLabel: ['Өтілген тақырыптар', 'Пройдено тем'],
  lessonNumber: ['Сабақ', 'Урок'],
  example: ['Мысал', 'Пример'],
  show: ['Нәтижені көрсету', 'Показать вывод'],
  hide: ['Нәтижені жасыру', 'Скрыть вывод'],
  question: ['Код экранға не шығарады?', 'Что выведет код?'],
  right: ['Дұрыс!', 'Верно!'],
  wrong: ['Қайталап көр.', 'Попробуй ещё раз.'],
  previous: ['← Алдыңғы', '← Назад'],
  next: ['Келесі →', 'Далее →'],
  done: ['Барлық тақырып өтілді.', 'Все темы пройдены.'],
};

const byId = id => document.getElementById(id);
const topics = byId('topics');
const answers = byId('answers');
const languageButtons = [...byId('languages').querySelectorAll('button')];
const responses = lessons.map(() => ({ choice: null, complete: false, showOutput: false }));
const topicButtons = lessons.map((lesson, index) => {
  const button = document.createElement('button');
  const number = document.createElement('span');
  const label = document.createElement('span');
  number.className = 'topic-num';
  number.setAttribute('aria-hidden', 'true');
  button.type = 'button';
  button.className = 'topic';
  button.append(number, label);
  button.addEventListener('click', () => openLesson(index));
  topics.append(button);
  return button;
});

let language = new URLSearchParams(location.search).get('lang') === 'ru' ? 'ru' : 'kk';
let current = 0;
const t = value => value[language === 'ru' ? 1 : 0];

function renderProgress() {
  const completed = responses.filter(response => response.complete).length;
  byId('progress-label').textContent = t(ui.progressLabel);
  byId('progress-count').textContent = completed === lessons.length ? t(ui.done) : `${completed} / ${lessons.length}`;
  byId('progress').max = lessons.length;
  byId('progress').value = completed;
  topicButtons.forEach((button, index) => {
    button.classList.toggle('is-complete', responses[index].complete);
    button.setAttribute('aria-pressed', String(index === current));
    button.firstElementChild.textContent = responses[index].complete ? '✓' : index + 1;
    button.lastElementChild.textContent = t(lessons[index].title);
  });
}

function renderOutput() {
  const visible = responses[current].showOutput;
  byId('example-output').hidden = !visible;
  byId('example-toggle').textContent = t(visible ? ui.hide : ui.show);
  byId('example-toggle').setAttribute('aria-expanded', String(visible));
}

function renderFeedback() {
  const lesson = lessons[current];
  const response = responses[current];
  for (const [index, button] of [...answers.children].entries()) {
    const chosen = index === response.choice;
    button.classList.toggle('right', chosen && response.complete);
    button.classList.toggle('wrong', chosen && !response.complete);
    button.setAttribute('aria-pressed', String(chosen));
    button.disabled = response.complete && !chosen;
  }
  const feedback = byId('feedback');
  feedback.dataset.kind = response.complete ? 'right' : response.choice === null ? '' : 'wrong';
  if (response.choice === null) feedback.textContent = '';
  else if (response.complete) feedback.textContent = `${t(ui.right)} ${t(lesson.reason)}`;
  else feedback.textContent = `${t(ui.wrong)} ${t(lesson.hint)}`;
}

function render() {
  const lesson = lessons[current];
  document.documentElement.lang = language;
  languageButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.lang === language)));
  byId('languages').setAttribute('aria-label', t(ui.languages));
  topics.setAttribute('aria-label', t(ui.topics));
  byId('lesson-title').textContent = t(lesson.title);
  byId('lesson-number').textContent = `${t(ui.lessonNumber)} ${current + 1} / ${lessons.length}`;
  byId('explanation').textContent = t(lesson.explanation);
  byId('example-label').textContent = t(ui.example);
  byId('example-code').textContent = lesson.example;
  byId('example-output').textContent = lesson.output;
  byId('question').textContent = t(lesson.question ?? ui.question);
  byId('exercise-code').textContent = lesson.exercise;
  byId('previous').textContent = t(ui.previous);
  byId('previous').disabled = current === 0;
  byId('next').textContent = t(ui.next);
  byId('next').disabled = current === lessons.length - 1;
  answers.replaceChildren(...lesson.choices.map((choice, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'answer';
    button.textContent = choice;
    button.addEventListener('click', () => {
      if (responses[current].complete) return;
      responses[current].choice = index;
      responses[current].complete = index === lesson.correct;
      renderProgress();
      renderFeedback();
    });
    return button;
  }));
  renderProgress();
  renderOutput();
  renderFeedback();
}

function openLesson(index) {
  current = index;
  render();
  byId('lesson-title').focus();
}

languageButtons.forEach(button => button.addEventListener('click', () => {
  language = button.dataset.lang;
  render();
}));
byId('example-toggle').addEventListener('click', () => {
  responses[current].showOutput = !responses[current].showOutput;
  renderOutput();
});
byId('previous').addEventListener('click', () => openLesson(current - 1));
byId('next').addEventListener('click', () => openLesson(current + 1));
render();
