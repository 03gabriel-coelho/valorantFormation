import React, { useEffect, useState, useCallback } from 'react';
import { getAgents } from '../../Api';

function Cards() {
  const [data, setData] = useState([]);
  console.log('***data', data);

  const getAllAgents = useCallback(async () => {
    try {
      const response = await getAgents();
      setData(response);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    getAllAgents();
  }, [getAllAgents]);

  return (
    <p>Cards</p>
  );
}

export default Cards;
