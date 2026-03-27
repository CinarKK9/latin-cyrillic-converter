import { useState } from 'react';
import { Box, Button, Image, Text } from '@chakra-ui/react';
import type { Language } from '../i18n';

type LanguageSwitcherProps = {
  language: Language;
  onChange: (language: Language) => void;
};

function LanguageSwitcher({ language, onChange }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);

  const languageOptions: Array<{ code: Language; label: string; flag: string }> = [
    { code: 'en', label: 'English', flag: '/flags/gb.svg' },
    { code: 'ru', label: 'Русский', flag: '/flags/ru.svg' },
  ];

  const activeOption = languageOptions.find((option) => option.code === language) ?? languageOptions[0];

  const handleSelect = (selectedLanguage: Language) => {
    onChange(selectedLanguage);
    setIsOpen(false);
  };

  return (
    <Box position={'relative'}>
      <Button
        onClick={() => setIsOpen((previousState) => !previousState)}
        bg={'white'}
        color={'#0039A7'}
        _hover={{ bg: 'gray.100' }}
        _active={{ bg: 'gray.200' }}
        size={'sm'}
        borderRadius={'md'}
        px={3}
        aria-label={'Select language'}
      >
        <Image src={activeOption.flag} alt={activeOption.label} boxSize={'20px'} mr={2} />
        <Text fontWeight={'semibold'}>{activeOption.label}</Text>
        <Text ml={2} fontSize={'xs'} lineHeight={1} color={'#0039A7'}>
          ▾
        </Text>
      </Button>

      {isOpen ? (
        <Box
          position={'absolute'}
          right={0}
          mt={2}
          bg={'white'}
          borderRadius={'md'}
          boxShadow={'lg'}
          borderWidth={'1px'}
          borderColor={'gray.200'}
          minW={'160px'}
          zIndex={20}
          overflow={'hidden'}
        >
          {languageOptions.map((option) => (
            <Button
              key={option.code}
              onClick={() => handleSelect(option.code)}
              variant={'ghost'}
              justifyContent={'flex-start'}
              width={'full'}
              borderRadius={0}
              bg={option.code === language ? 'gray.100' : 'transparent'}
              _hover={{ bg: 'gray.100' }}
            >
              <Image src={option.flag} alt={option.label} boxSize={'18px'} mr={2} />
              <Text>{option.label}</Text>
            </Button>
          ))}
        </Box>
      ) : null}
    </Box>
  );
}

export default LanguageSwitcher;
