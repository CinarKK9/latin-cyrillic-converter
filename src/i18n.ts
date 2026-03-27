export type Language = 'en' | 'ru' | 'tr';

type UiCopy = {
  title: string;
  subtitle: string;
  cyrillicPlaceholder: string;
  latinPlaceholder: string;
  convertButton: string;
  motivationIntro: string;
  motivationLinkLabel: string;
  motivationOutro: string;
};

export const uiText: Record<Language, UiCopy> = {
  en: {
    title: 'Cyrillic-Latin Converter',
    subtitle: 'Convert by Typing or Pasting Text',
    cyrillicPlaceholder: 'Cyrillic',
    latinPlaceholder: 'Latin',
    convertButton: 'Convert',
    motivationIntro:
      'Thanks for checking out my project. I built this app because I want to study in Russia and started learning Russian. You can find the source code on',
    motivationLinkLabel: 'GitHub',
    motivationOutro: '.',
  },
  ru: {
    title: 'Конвертер Кириллица-Латиница',
    subtitle: 'Конвертируйте текст при вводе или вставке',
    cyrillicPlaceholder: 'Кириллица',
    latinPlaceholder: 'Латиница',
    convertButton: 'Конвертировать',
    motivationIntro:
      'Спасибо, что заглянули в мой проект. Я сделал это приложение, потому что хочу учиться в России и начал изучать русский язык. Исходный код есть на',
    motivationLinkLabel: 'GitHub',
    motivationOutro: '.',
  },
  tr: {
    title: 'Kiril-Latin Dönüştürücü',
    subtitle: 'Yazı yazarak veya Yapıştırarak Dönüştür',
    cyrillicPlaceholder: 'Kiril',
    latinPlaceholder: 'Latin',
    convertButton: 'Dönüştür',
    motivationIntro:
      'Projemi kullandığın için teşekkür ederim. Bu uygulamayı, Rusya\'da okumak istediğim ve Rusça öğrenmeye başladığım için geliştirdim. Kaynak kodlarına',
    motivationLinkLabel: 'GitHub\'dan',
    motivationOutro: ' ulaşabilirsin.',
  },
};
