import React from 'react';
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { Container } from '../components/Container';
import Head from 'next/head';

function Home() {
  const { colorMode } = useColorMode();

  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  };

  return (
    <Container>
      <Head>
        <title>Home - Chakra UI </title>
      </Head>
      <Stack
        as="main"
        spacing={8}
        justifyContent="center"
        alignItems="flex-start"
        m=" 0 auto 4rem auto"
        maxWidth="700px"
        px={2}
      >
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading mb={2}>Hi, its just a testing</Heading>
          <Text color={colorSecondary[colorMode]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo,
            est repellendus quam possimus dignissimos ipsum numquam libero quia
            blanditiis error vel animi labore quis facilis alias eveniet enim
            optio asperiores.
          </Text>
        </Flex>
      </Stack>
    </Container>
  );
}
export default Home;
