import React, { useState, useEffect } from 'react';

interface ICharacter {
  id: number;
  name: string;
  films: string[];
}

const data: ICharacter[] = [
  {
    id: 1,
    name: 'Luke Skywalker',
    films: []
  },
  {
    id: 2,
    name: 'C-3PO',
    films: []
  },
  {
    id: 3,
    name: 'R2-DE',
    films: []
  },
  {
    id: 4,
    name: 'Darth Vader',
    films: []
  },
  {
    id: 5,
    name: 'Leia Organa',
    films: []
  },
  { id: 6, name: 'Owen Lars', films: [] }
];

const PromiseAll = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [selected, setSelected] = useState<ICharacter | undefined>();

  const clickHandler = (id: number) => {
    const foundChar = characters.find((char) => char.id === id);
    setSelected(foundChar);
  };

  const left = characters.map((char) => (
    <div key={char.id} onClick={() => clickHandler(char.id)}>
      {char.name}
    </div>
  ));
  const right = selected ? (
    selected.films.map((film, index) => <div key={index}>{film}</div>)
  ) : (
    <div>Empty</div>
  );

  useEffect(() => {
    const baseUrl = 'https://swapi.dev/api/people/';
    const fetchAll = async () => {
      try {
        const res = await Promise.all(data.map((char) => fetch(baseUrl + char.id)));
        const response = await Promise.all(res.map((item) => item.json()));
        console.log(response);
        if (response && response.length > 0) {
          setCharacters(
            response.map((item, index) => ({
              id: data[index].id,
              name: item.name,
              films: item.films
            }))
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchAll();
  }, [setCharacters]);

  return (
    <div className="PromiseAll">
      <div className="left">{left}</div>
      <div className="right">{right}</div>
    </div>
  );
};

export default PromiseAll;
