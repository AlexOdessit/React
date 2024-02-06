import React from 'react';
import { useEffect } from 'react';
import { useCounter } from '../../hooks/reducer';

const CoordsComponent = () => {
  const { state, setCoords } = useCounter({
    initialCoords: { x: 0, y: 0 },
  });

  const { coords } = state;

  const handleMouseMove = ({ clientX, clientY }) => {
    setCoords({ x: clientX, y: clientY });
  };

  useEffect(() => {
    document.body.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
    };
  }, [setCoords]);

  return (
    <div>
      <h2>
        Mouse Coordinates: ({coords.x}, {coords.y})
      </h2>
    </div>
  );
};

export default CoordsComponent;
