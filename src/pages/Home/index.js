import React, { useState } from 'react';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';

import logo from '../../assets/logo.svg';
import restaurant from '../../assets/restaurante-fake.png';

import { Card } from '../../components';

import { Container, Search, Logo, Wrapper, Map, CarouselTitle, Carousel } from './styles';

const Home = () => {
  const [inputValue, setInputValue] = useState('');

  const settings = {
    dots: false, // pontinhos
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do Restaurante" />
          <TextField
            label="Pesquisar Restaurantes"
            outlined
            //  onTrailingIconSelect={() => this.setState({ value: '' })}
            trailingIcon={<MaterialIcon role="button" icon="search" />}>
            <Input value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          </TextField>
          <CarouselTitle>Na Sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurant}> Nome do Restaurante</Card>
            <Card photo={restaurant}> Nome do Restaurante</Card>
            <Card photo={restaurant}> Nome do Restaurante</Card>
            <Card photo={restaurant}> Nome do Restaurante</Card>
            <Card photo={restaurant}> Nome do Restaurante</Card>
            <Card photo={restaurant}> Nome do Restaurante</Card>
            <Card photo={restaurant}> Nome do Restaurante</Card>
            <Card photo={restaurant}> Nome do Restaurante</Card>
            <Card photo={restaurant}> Nome do Restaurante</Card>
            <Card photo={restaurant}> Nome do Restaurante</Card>
            <Card photo={restaurant}> Nome do Restaurante</Card>
          </Carousel>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
