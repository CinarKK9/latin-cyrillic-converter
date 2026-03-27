
import { useState } from 'react';
import { Box, Text, Textarea, Link } from '@chakra-ui/react';
import LanguageSwitcher from './components/LanguageSwitcher';
import { uiText, type Language } from './i18n';

const GITHUB_REPOSITORY_URL = 'https://github.com/CinarKK9/latin-cyrillic-converter';

const cyrillicToLatin: Record<string, string> = {
  'а': 'a',
  'б': 'b',
  'в': 'v',
  'г': 'g',
  'д': 'd',
  'е': 'e',
  'ё': 'yo',
  'ж': 'zh',
  'з': 'z',
  'и': 'i',
  'й': 'y',
  'к': 'k',
  'л': 'l',
  'м': 'm',
  'н': 'n',
  'о': 'o',
  'п': 'p',
  'р': 'r',
  'с': 's',
  'т': 't',
  'у': 'u',
  'ф': 'f',
  'х': 'kh',
  'ц': 'ts',
  'ч': 'ch',
  'ш': 'sh',
  'щ': 'shch',
  'ъ': '"',
  'ы': 'y',
  'ь': "'",
  'э': 'e',
  'ю': 'yu',
  'я': 'ya',

  //capital letters
  'А': 'A',
  'Б': 'B',
  'В': 'V',
  'Г': 'G',
  'Д': 'D',
  'Е': 'E',
  'Ё': 'Yo',
  'Ж': 'Zh',
  'З': 'Z',
  'И': 'I',
  'Й': 'Y',
  'К': 'K',
  'Л': 'L',
  'М': 'M',
  'Н': 'N',
  'О': 'O',
  'П': 'P',
  'Р': 'R',
  'С': 'S',
  'Т': 'T',
  'У': 'U',
  'Ф': 'F',
  'Х': 'Kh',
  'Ц': 'Ts',
  'Ч': 'Ch',
  'Ш': 'Sh',
  'Щ': 'Shch',
  'Ъ': '"',
  'Ы': 'Y',
  'Ь': "'",
  'Э': 'E',
  'Ю': 'Yu',
  'Я': 'Ya',
};

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [cyrillicText, setCyrillicText] = useState('');
  const [latinText, setLatinText] = useState('');
  const text = uiText[language];

  const handleCyrillicChange = (value: string) => {
    setCyrillicText(value);
    setLatinText(convertCyrillic(value));
  };

  const handleLatinChange = (value: string) => {
    setLatinText(value);
    setCyrillicText(convertLatin(value));
  };

  return (
    <>
      <Box bg={'#0039A7'} p={4} position={'fixed'} width={'full'}>
        <Box display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
          <Text color={'white'} fontSize={'2xl'} fontWeight={'bold'}>{text.title}</Text>
          <LanguageSwitcher language={language} onChange={setLanguage} />
        </Box>
      </Box>
      <Box height={'vh'} display={'flex'} justifyContent={'center'} alignItems={'center'} px={[8, 16, 32, 64]} flexDir={'column'} pt={'20'}>
        <Text fontWeight={'bold'} fontSize={'4xl'} textAlign={'center'} mb={'16'}>{text.subtitle}</Text>
        <Box display={'flex'} gap={'24'} justifyContent={'space-evenly'} width={'full'} height={'1/2'}>
          <Box width={'1/2'}>
            <Textarea
              placeholder={text.cyrillicPlaceholder}
              height={'11/12'}
              value={cyrillicText}
              onChange={(event) => handleCyrillicChange(event.target.value)}
            />
          </Box>
          <Box width={'1/2'}>
            <Textarea
              placeholder={text.latinPlaceholder}
              height={'11/12'}
              value={latinText}
              onChange={(event) => handleLatinChange(event.target.value)}
            />
          </Box>
        </Box>
        <Text mt={'8'} fontSize={'sm'} color={'gray.600'} textAlign={'center'}>
          {text.motivationIntro}{' '}
          <Link href={GITHUB_REPOSITORY_URL} color={'#0039A7'} fontWeight={'semibold'} textDecoration={'underline'} target={'_blank'} rel={'noopener noreferrer'}>
            {text.motivationLinkLabel}
          </Link>
          {text.motivationOutro}
        </Text>
      </Box>
    </>
  )
}

function convertCyrillic(text: string) {
  let convertedText = '';
  for (let i = 0; i < text.length; i++) {
    convertedText += cyrillicToLatin[text[i]] || text[i];
  }
  return convertedText;
}

const latinToCyrillic: Record<string, string> = {
  shch: 'щ',
  yo: 'ё',
  zh: 'ж',
  kh: 'х',
  ts: 'ц',
  ch: 'ч',
  sh: 'ш',
  yu: 'ю',
  ya: 'я',
  a: 'а',
  b: 'б',
  v: 'в',
  g: 'г',
  d: 'д',
  e: 'е',
  z: 'з',
  i: 'и',
  y: 'й',
  k: 'к',
  l: 'л',
  m: 'м',
  n: 'н',
  o: 'о',
  p: 'п',
  r: 'р',
  s: 'с',
  t: 'т',
  u: 'у',
  f: 'ф',
  '"': 'ъ',
  "'": 'ь',
};

function convertLatin(text: string) {
  let convertedText = '';
  let i = 0;

  while (i < text.length) {
    const remaining = text.slice(i);
    const tryFour = remaining.slice(0, 4);
    const tryTwo = remaining.slice(0, 2);

    let chunk = '';
    if (tryFour && latinToCyrillic[tryFour.toLowerCase()]) {
      chunk = tryFour;
    } else if (tryTwo && latinToCyrillic[tryTwo.toLowerCase()]) {
      chunk = tryTwo;
    } else {
      chunk = remaining.slice(0, 1);
    }

    const mapped = latinToCyrillic[chunk.toLowerCase()];
    if (!mapped) {
      convertedText += chunk;
      i += chunk.length;
      continue;
    }

    convertedText += chunk[0] === chunk[0].toUpperCase() ? mapped.toUpperCase() : mapped;
    i += chunk.length;
  }

  return convertedText;
}

export default App
