import styled from 'styled-components';

import Slider from 'react-slick';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  width: 360px;
  height: 100vh; //100% tela visível
  overflow-y: auto; // se estourar altura de conteúdos cria um scroll
`;

export const Search = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 16px;
`;

export const Logo = styled.img`
  width: 60%;
  align-self: center;
  margin-bottom: 16px;
`;

export const Carousel = styled(Slider)`
  .slick-slide {
    margin-right: 16px;
  }
`;

export const Map = styled.div`
  background-color: red;
  width: 100%;
`;

export const CarouselTitle = styled.h1`
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.text};
  size: 24px; // tamanho da letra
  font-weight: bold; // negrito
  line-height: 29px; // espaçamento de linhas
  margin: 16px 0;
`;
