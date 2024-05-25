import React, { useState } from 'react';
import Thumb from './Thumb';

const ThumbsRating = ({ rating, setRating }) => {
  return (
    <div className="flex justify-evenly py-2">
      <Thumb
        type="up"
        selected={rating === 'up'}
        onClick={() => setRating(rating === 'up' ? null : 'up')}
      />
      <Thumb
        type="down"
        selected={rating === 'down'}
        onClick={() => setRating(rating === 'down' ? null : 'down')}
      />
    </div>
  );
};

export default ThumbsRating;
