import React from 'react';
import { FeatureButton, FeatureContianer } from './FeatureElements';
const Feature = () => {
  return (
    <FeatureContianer>
      <h1>Pizza of the day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <FeatureButton>Order Now</FeatureButton>
    </FeatureContianer>
  );
};

export default Feature;
