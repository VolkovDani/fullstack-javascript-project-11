export default {
  translation: {
    meta: {
      lang: 'ru',
      locale: 'ru_RU',
      title: 'RSS Агрегатор - Читать RSS ленты легко и просто',
      description: 'Веб приложение для чтения RSS лент. Просто вводите ссылку на сайт который содержит RSS ленту и начинаете чтение!',
      url: 'https://fullstack-javascript-project-11-liart.vercel.app/',
    },
    main: {
      header: 'RSS Агрегатор',
      description: 'Начните читать RSS сегодня! Это легко, это красиво.',
      example: 'Пример: https://lorem-rss.hexlet.app/feed',
      submit: 'Добавить',
      inputPlaceholder: 'Ссылка RSS',
    },
    feedback: {
      errors: {
        doubleUrl: 'RSS уже существует',
        invalidUrl: 'Ссылка должна быть валидным URL',
        nullValue: 'Не должно быть пустым',
        'Network Error': 'Ошибка сети',
        emptyRss: 'Ресурс не содержит валидный RSS',
      },
      info: {
        urlAdded: 'RSS успешно загружен',
      },
    },
    lists: {
      feeds: 'Фиды',
      posts: 'Посты',
    },
    buttons: {
      posts: 'Просмотр',
    },
    modal: {
      aria: {
        closeBtn: 'Закрыть модальное окно',
        openBtn: 'Открыть RSS ленту',
      },
      closeBtn: 'Закрыть',
      openBtn: 'Читать полностью',
    },
    lng: {
      ru: 'Русский',
      en: 'English',
      jp: '日本語',
    },
  },
};
