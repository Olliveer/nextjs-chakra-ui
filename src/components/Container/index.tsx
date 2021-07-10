import React, { ReactNode } from 'react';
import NextLink from 'next/link';
import { DarkModeSwitch } from '../DarkModeSwitch';
import styled from '@emotion/styled';
import { Box, Button, Flex, useColorMode } from '@chakra-ui/react';

type ContainerProps = {
  children: ReactNode;
};

function Container({ children }: ContainerProps) {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: 'white',
    dark: '#171717',
  };

  const navHoverBg = {
    light: 'gray.600',
    dark: 'gray.300',
  };

  const color = {
    light: 'black',
    dark: 'white',
  };

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    backdrop-filter: saturate(180%) blur(20px);
    transition: height 0.5s, line-height 0.5s;
  `;

  return (
    <>
      <StickNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="800px"
        minWidth="356px"
        width="100%"
        bg={bgColor[colorMode]}
        as="nav"
        px={[2, 6, 6]}
        py={2}
        mt={8}
        mb={[0, 0, 8]}
        mx="auto"
      >
        <Box>
          <NextLink href="/">
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
              cursor="pointer"
            >
              Home
            </Button>
          </NextLink>
          <NextLink href="/blog">
            <Button
              as="a"
              variant="ghost"
              p={[1, 2, 4]}
              _hover={{ backgroundColor: navHoverBg[colorMode] }}
              cursor="pointer"
            >
              Blog
            </Button>
          </NextLink>
        </Box>
        <DarkModeSwitch />
      </StickNav>
      <Flex
        as="main"
        justifyContent="column"
        bg={bgColor[colorMode]}
        color={color[colorMode]}
        px={[0, 4, 4]}
        mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  );
}

export { Container };
