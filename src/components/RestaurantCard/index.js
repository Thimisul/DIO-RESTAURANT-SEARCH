import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Restaurant, RestaurantPhoto, RestaurantInfo, Title, Address } from './styles';

import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = () => (
  <Restaurant>
    <RestaurantInfo>
      <Title>Nome do Restaurante</Title>
      <ReactStars count={5} value={4} ishalf size={24} activeColor="#ffd700" edit={false} />
      <Address>Rua General Carneiro</Address>
    </RestaurantInfo>
    <RestaurantPhoto src={restaurante} alt="Foto do Restaurante" />
  </Restaurant>
);

export default RestaurantCard;
