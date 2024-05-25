import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';

const Thumb = ({ selected, onClick, type }) => {
  const isThumbUp = type === 'up';
  return (
    <div
      className={`flex cursor-pointer text-4xl ${selected ? 'text-green-500' : 'text-gray-400'}`}
      onClick={onClick}
    >
      <FontAwesomeIcon icon={isThumbUp ? faThumbsUp : faThumbsDown} />
    </div>
  );
};

export default Thumb;
