fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
  .then((res) => res.json())
  .then((data) => {
    const lista = document.getElementById('listaPokemon');
    data.results.forEach(pokemon => {
      fetch(pokemon.url)
        .then((res2) => res2.json())
        .then((pokemonData) => {
                lista.innerHTML += `<li>
                  <h4>${pokemon.name}</h4>
                  <img src="${pokemonData.sprites.front_default}" />
                </li>
                `;
              
         })
    })
  });

async function leerInfoLocal() {
  const resp = await fetch('/data.json');
  const data = await resp.json();
  
  console.log(resp, data)
}

leerInfoLocal()
