import React from 'react';
import ReactStars from 'react-rating-stars-component';
import { Restaurant, RestaurantPhoto, RestaurantInfo, Title, Address } from './styles';

import restaurante from '../../assets/restaurante-fake.png';

const RestaurantCard = ({ restaurant }) => (
  <Restaurant>
    <RestaurantInfo>
      <Title>{restaurant.name}</Title>
      <ReactStars
        count={5}
        value={restaurant.rating}
        ishalf
        size={24}
        activeColor="#ffd700"
        edit={false}
      />
      <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
    </RestaurantInfo>
    <RestaurantPhoto
      src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
      alt="Foto do Restaurante"
    />
  </Restaurant>
);

export default RestaurantCard;
