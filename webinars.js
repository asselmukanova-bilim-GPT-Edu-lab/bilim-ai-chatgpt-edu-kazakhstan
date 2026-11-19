const bilimAiVideos = [
  { id: '5bMmc_j6wXA', duration: '1:40', title: 'ChatGPT Edu платформасына BilimClass-тың логин паролімен тіркелу нұсқаулығы' },
  { id: 'NjG2JhWbdAk', duration: '1:00:54', title: 'Ustaz BilimAI Mektep Plugin' },
  { id: 'uvkKeWDAQpk', duration: '4:03', title: 'Ustaz BilimAI Mektep плагинін жүктеу, қолдану туралы нұсқаулық' },
  { id: '0l4ai-hit3k', duration: '6:20', title: '0.1.2 КІРІСПЕ ВЕБИНАР | ChatGPT EDU — Projects: жоба құру және онымен жұмыс істеу' },
  { id: 'MfAhQtbFYKU', duration: '11:21', title: '0.1.1 КІРІСПЕ ВЕБИНАР | Chat және Work режимдерінде жұмыс істеу' },
  { id: 'LVWmFHE15sE', duration: '12:38', title: '0.1 КІРІСПЕ ВЕБИНАР | ChatGPT EDU — Теориялық негіздер' },
  { id: 'umZLUgsoy5A', duration: '1:52', title: 'ChatGPT Edu платформасына тіркелу және интерфейсіндегі жаңашылдықтар' },
  { id: 'lb4aBSL_-i8', duration: '1:36', title: 'ChatGPT Edu tutorial for users on how to login to platform' },
  { id: 'mp2dtKTkycc', duration: '46:15', title: '01 Кіріспе Вебинар: ChatGPT Edu — Балабақша, Мектеп, Колледж' },
  { id: 'N9fwbqm-tn8', duration: '1:08', title: 'Как войти в ChatGPT Edu: пошаговая инструкция для пользователей — Садик, Школа, Колледж' },
  { id: 'Oq0AiuOIh8Y', duration: '1:24', title: 'ChatGPT Edu-ге тіркелу жолы — Балабақша, Мектеп, Колледж' },
  { id: '_B7nXd5o478', duration: '1:36', title: 'Как войти в ChatGPT Edu: пошаговая инструкция для пользователей' },
  { id: 'UtWCJ_vkmeI', duration: '1:36', title: 'ChatGPT Edu қалай кіруге болады: қолданушыларға арналған нұсқаулық' },
  { id: 'ZTuKnwOH9f0', duration: '1:56', title: 'ChatGPT Edu әкімшілеріне арналған нұсқаулық: қолданушыларды қосу (BilimClass)' },
  { id: 'SNgRPeEZQ-A', duration: '1:56', title: 'Инструкция для администраторов ChatGPT Edu: добавление пользователей (BilimClass)' },
  { id: 'dlOJfboC7X8', duration: '6:11', title: 'ChatGPT Edu-ді қолдануда қателіктерден қалай аулақ болуға болады (3-модуль, 2-тақырып)' },
  { id: 'oIw255bxW0k', duration: '3:32', title: 'ChatGPT Edu-ді пайдаланудың этикалық аспектілері (3-модуль, 1-тақырып)' },
  { id: 'ANUXleozKJw', duration: '4:04', title: '«Терең зерттеу» құралын пайдалану (2-модуль, 3-тақырып)' },
  { id: 'QvJEdUs7fds', duration: '3:39', title: 'Білім алушыларға дербестендірілген қолдау көрсету үшін GPT-ді қолдану (2-модуль, 2-тақырып)' },
  { id: '15rhB6K4ovA', duration: '5:00', title: 'Оқу процесінде ChatGPT Edu-ні пайдалану (2-модуль, 1-тақырып)' },
  { id: 'XriDSt8SrFY', duration: '4:25', title: 'ChatGPT Edu интерфейсі және оның функциялары (1-модуль, 2-тақырып)' },
  { id: 'sKLvzgY_Zho', duration: '3:02', title: 'ChatGPT Edu-мен танысу (1-модуль, 1-тақырып)' },
  { id: 'B4yjMFHy9zc', duration: '5:40', title: 'Как избежать ошибок при использовании ChatGPT Edu (Модуль 3, тема 2)' },
  { id: '2m3S0reW0jM', duration: '3:28', title: 'Об ответственности за достоверность данных (Модуль 3, тема 1)' },
  { id: '2YK57fClSrA', duration: '4:10', title: '«Глубокое исследование» для Lesson Study, Action Research и написания статей (Модуль 2, тема 3)' },
  { id: 'dHt8-6Kds0s', duration: '3:38', title: '«GPT-ассистенты» для персонализированной поддержки обучающихся (Модуль 2, тема 2)' },
  { id: 'T9QKc69RhoE', duration: '4:42', title: '«Проекты» для оценивания заданий обучающихся (Модуль 2, тема 1)' },
  { id: 'KN0ly_5klsE', duration: '4:30', title: 'Интерфейс ChatGPT Edu и его функции (Модуль 1, тема 2)' },
  { id: 'YUp8jkBOLVM', duration: '2:43', title: 'Что такое ChatGPT Edu и его отличия от ChatGPT (Модуль 1, тема 1)' },
  { id: 'Uki7k8DDGPQ', duration: 'Shorts', title: 'ChatGPT EDU платформасын телефон арқылы қолдану', short: true }
];

function videoKind(video) {
  if (video.short) return 'Shorts';
  if (/вебинар|webinar|plugin$/iu.test(video.title)) return 'Вебинар';
  if (/нұсқаулық|инструкц|tutorial|тіркелу|кіруге|login|жүктеу/iu.test(video.title)) return 'Инструкция';
  return 'Учебный модуль';
}

const videoGrid = document.querySelector('#video-grid');

if (videoGrid) {
  videoGrid.innerHTML = bilimAiVideos.map((video) => {
    const href = video.short
      ? `https://www.youtube.com/shorts/${video.id}`
      : `https://www.youtube.com/watch?v=${video.id}`;
    return `
      <a class="video-card" href="${href}" target="_blank" rel="noopener noreferrer" aria-label="${video.title}">
        <span class="video-thumbnail">
          <img src="https://i.ytimg.com/vi/${video.id}/hqdefault.jpg" alt="" loading="lazy">
          <span class="video-duration">${video.duration}</span>
          <span class="video-play" aria-hidden="true">▶</span>
        </span>
        <span class="video-card-copy">
          <span class="video-kind">${videoKind(video)}</span>
          <strong>${video.title}</strong>
          <span class="video-link-label">Открыть на YouTube</span>
        </span>
      </a>`;
  }).join('');
}
