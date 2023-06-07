import { useEffect, useState } from 'react';
import type { Racer } from '../../types';

const useRacerData = (): Racer[] => {
  const [racers, setRacers] = useState<Racer[]>([]);

  useEffect(() => {
    fetchRacerData();
  }, []);

  const fetchRacerData = () => {
    fetch('https://ba6gijdps7.execute-api.us-east-1.amazonaws.com/racers')
      .then(async response => await response.json())
      .then(data => {
        setRacers(data.racers);
      })
      .catch(error => {
        console.log('Error fetching racer data:', error);
      });
  };

  return { racers, setRacers };
};

export default useRacerData;
