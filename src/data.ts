export type Question = {
  id: number,
  img?: string,
  question: string,
  answer: string,
  ansImg?: string;
  type: 'img' | 'text';
};
export const data: Array<Question>  = [
  {
    id: 1,
    question: 'Что за песня? ...cccc', 
    answer: 'Ring my belss, Ring my belss', 
    type: "text"
  },
  {
    id: 2,
    question: 'Чей это ник ЖопаЖопаВКТЛе?',
    answer: 'Лыба',
    type: "text"
  },
  {
    id: 3,
    question: 'Кто напрягается на уроке тариха?',
    answer: 'Монгол',
    type: "text"
  },
  {
    id: 4,
    question: 'Пацаны, Шахтер на каком месте?????',
    answer: '3',
    type: "text"
  },
  {
    id: 5,
    question: 'Что хотел трахнуть Пашка?',
    answer: 'Комп',
    type: "text"
  },
  {
    id: 6,
    question: 'Кто был капитаном Б-шников на 5денвке?',
    answer: 'Чина',
    type: "text"
  },
  {
    id: 7,
    question: 'На кого кончил Мадик на уроке?',
    answer: 'Умит апай',
    type: "text"
  },
  {
    id: 8,
    img: './photos/lyba.png',
    question: 'Угадай лого на кепке',
    answer: 'Windows',
    type: "img"
  },
  {
    id: 9,
    question: 'Как звали Кирила для Бахи?',
    answer: 'Константин',
    type: "text"
  },
  {
    id: 10,
    question: 'Бека: "Дос, ты гей". Что ответил Дос? ',
    answer: 'А кому не нравятся загорелые накаченные мужики ?',
    type: "text"
  },
  {
    id: 11,
    question: 'Дау, у тебя фифа есть?',
    answer: '- Неа, только ПЭС',
    type: "text"
  },
  {
    id: 12,
    question: 'Кто спросил предыдущий вопрос?',
    answer: 'Достан агай',
    type: "text"
  },
  {
    id: 13,
    question: 'Агурси, килка, бапли',
    answer: 'Жасур аби',
    type: "text"
  },
  {
    id: 14,
    question: 'Что ел пачками на завтрак Лыба?',
    answer: 'Дерьмо',
    type: "text"
  },
  {
    id: 15,
    question: '-Та девушка со своим парнем была. Они за углов хавались',
    answer: '- Маневи что-ли?',
    type: "text"
  },
  {
    id: 16,
    question: '-Паша!!! Ты спишь ? ',
    answer: '-Да бл**ь с вами уснешь...',
    type: "text"
  },
  {
    id: 17,
    question: 'Көзің жақсы көреді ма? ',
    answer: 'Иә, мен қазақпын',
    type: "text"
  },
  {
    id: 18,
    question: '"Мынау не сумдык ?!!! Нариман !!! Почему не спишь ?!! Иди сюда !!!" чьи слова? ',
    answer: 'Арыстан аби',
    type: "text"
  },
  {
    id: 19,
    img: './photos/madik&mura_cropped.png',
    question: 'Кого обрезали на фото?',
    answer: 'Мадик и Мура',
    ansImg: './photos/madik&mura.png',
    type: "img"
  },
  {
    id: 20,
    img: './photos/china&nurj_cropped.png',
    question: 'Кого обрезали на фото?',
    answer: 'Чина и Нуржик',
    ansImg: './photos/china&nurj.png',
    type: "img"
  },
  {
    id: 21,
    img: './photos/erzhik&narik_cropped.png',
    question: 'Кого обрезали на фото?',
    answer: '',
    ansImg: './photos/erzhik&narik.png',
    type: "img"
  },
  {
    id: 22,
    img: './photos/zhanik_cropped.png',
    question: 'Кого обрезали на фото?',
    answer: '',
    ansImg: './photos/zhanik.png',
    type: "img"
  },
  {
    id: 23,
    img: './photos/beka&mongol_cropped.png',
    question: 'Кого обрезали на фото?',
    answer: '',
    ansImg: './photos/beka&mongol.png',
    type: "img"
  },
  {
    id: 24,
    img: './photos/nurj&narik_cropped.png',
    question: 'Кого обрезали на фото?',
    answer: '',
    ansImg: './photos/nurj&narik.png',
    type: "img"
  },
  {
    id: 25,
    img: './photos/dau&abi_cropped.png',
    question: 'Кого обрезали на фото?',
    answer: '',
    ansImg: './photos/dau&abi.png',
    type: "img"
  },
  {
    id: 26,
    img: './photos/dimka_cropped.png',
    question: 'Кого обрезали на фото?',
    answer: '',
    ansImg: './photos/dimka.png',
    type: "img"
  },
  {
    id: 27,
    img: './photos/beka_cropped.png',
    question: 'Кого обрезали на фото?',
    answer: '',
    ansImg: './photos/beka.png',
    type: "img"
  },
  {
    id: 28,
    img: './photos/beka&dos_cropped.png',
    question: 'Кого обрезали на фото?',
    answer: '',
    ansImg: './photos/beka&dos.png',
    type: "img"
  },
  {
    id: 29,
    img: './photos/abdul_cropped.png',
    question: 'Кого обрезали на фото?',
    answer: '',
    ansImg: './photos/abdul.png',
    type: "img"
  },
  {
    id: 29,
    img: './photos/abdul_cropped.png',
    question: 'Кого обрезали на фото?',
    answer: '',
    ansImg: './photos/abdul.png',
    type: "img"
  },
  {
    id: 30,
    img: './photos/teacher&beka_cropped.png',
    question: 'Кого обрезали на фото?',
    answer: '',
    ansImg: './photos/teacher&beka.png',
    type: "img"
  },
];