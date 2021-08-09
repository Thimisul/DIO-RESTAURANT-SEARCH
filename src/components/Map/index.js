import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants';

export const MapContainer = (props) => {
  const dispach = useDispatch();
  const { restaurants } = useSelector((state) => state.restaurants);
  const [map, setMap] = useState(null);
  const { google, query, placeId } = props;

  function getRestaurantById(placeId) {
    const service = new google.maps.places.PlacesService(map);
    dispach(setRestaurant(null));

    const request = {
      placeId,
      fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
    };

    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(place);
        dispach(setRestaurant(place));
      }
    });
  }

  function SearchByQuery(query) {
    const service = new google.maps.places.PlacesService(map);
    dispach(setRestaurants([]));

    const request = {
      location: map.center,
      radius: '200',
      type: ['restaurant'],
      query,
    };

    service.textSearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        dispach(setRestaurants(results));
      }
    });
  }

  function searchNearby(map, center) {
    const service = new google.maps.places.PlacesService(map);
    dispach(setRestaurants([]));

    const request = {
      location: center,
      radius: '20000',
      type: ['restaurant'],
    };

    service.nearbySearch(request, (results, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        console.log(results);
        dispach(setRestaurants(results));
      }
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    searchNearby(map, map.center);
  }

  useEffect(() => {
    if (query) {
      SearchByQuery(query);
    }
  }, [query]);

  useEffect(() => {
    if (placeId) {
      getRestaurantById(placeId);
    }
  }, [placeId]);

  return (
    <Map
      google={google}
      centerAroundCurrentLocation
      onReady={onMapReady}
      onRecenter={onMapReady}
      {...props}>
      {restaurants.map((restaurant) => (
        <Marker
          key={restaurant.place_id}
          name={restaurant.name}
          position={{
            lat: restaurant.geometry.location.lat(),
            lng: restaurant.geometry.location.lng(),
          }}
        />
      ))}
    </Map>
  );
};
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: 'pt-br',
})(MapContainer);
