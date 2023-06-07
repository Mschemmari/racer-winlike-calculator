import { useEffect, useState } from 'react';
import type { Racer } from '../../types';

const useRacerData = (): Racer[] => {
  const [racers, setRacers] = useState<Racer[]>([]);

  useEffect(() => {
    fetchRacerData();
  }, []);

  const fetchRacerData = () => {
    fetch('https://ba6gijdps7.execute-api.us-east-1.amazonaws.com/racers')
      .then(response => response.json())
      .then(data => {
        const racerData: Racer[] = data.map((racer: any) => ({
          id: racer.id,
          name: racer.name,
          likelihood: null,
        }));
        setRacers(racerData);
      })
      .catch(error => {
        console.log('Error fetching racer data:', error);
      });
  };

  return racers;
};

export default useRacerData;
