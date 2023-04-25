// export const fetchToDoList = async () => {
//   const url = 'https://swapi.dev/api/people/';
//   return fetch(url)
//     .then((response) => response.json())
//     .then((res) => {
//       return res;
//     });
// };

export const fetchToDoList = async () => {
  const url = 'https://swapi.dev/api/people/';
  try {
    const response = await fetch(url);
    const res = await response.json();
    console.log(res);
    if (res && res.results && res.results.length > 0) {
      return res.results.map((item: { name: string }, index: number) => ({
        id: index,
        name: item.name
      }));
    }
  } catch (err) {
    return err;
  }
};
