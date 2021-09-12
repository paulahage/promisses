import { reject } from "q";
import React from "react";

const cidades = [
  { name: "	Belém	", count: 1499641 },
  { name: "	Belo Horizonte	", count: 2521564 },
  { name: "	Brasília	", count: 3055149 },
  { name: "	Campinas	", count: 1213792 },
  { name: "	Campo Grande	", count: 906092 },
  { name: "	Curitiba	", count: 1948626 },
  { name: "	Duque de Caxias	", count: 924624 },
  { name: "	Fortaleza	", count: 2686612 },
  { name: "	Goiânia	", count: 1536097 },
  { name: "	Guarulhos	", count: 1392121 },
  { name: "	Jaboatão dos Guararapes	", count: 706867 },
  { name: "	João Pessoa	", count: 817511 },
  { name: "	Maceió	", count: 1025360 },
  { name: "	Manaus	", count: 2219580 },
  { name: "	Natal	", count: 890480 },
   { name: "	Uberlândia	", count: 699097 },
  { name: "	Nova Iguaçu	", count: 823302 },
  { name: "	Osasco	", count: 699944 },
  { name: "	Porto Alegre	", count: 1488252 },
  { name: "	Recife	", count: 1653461 },
  { name: "	Ribeirão Preto	", count: 711825 },
  { name: "	Rio de Janeiro	", count: 6747815 },
  { name: "	Salvador	", count: 2886698 },
  { name: "	Santo André	", count: 721368 },
  { name: "	São Bernardo do Campo	", count: 844483 },
  { name: "	São Gonçalo	", count: 1091737 },
  { name: "	São José dos Campos	", count: 729737 },
  { name: "	São Luís	", count: 1108975 },
  { name: "	São Paulo	", count: 12325232 },
  { name: "	Teresina	", count: 868075 },
 
];

function App() {
  const [cities, setCities] = React.useState(cidades)
  
  
  function loadCityApi(index, population) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ index, population })
      }, population / 100);
    })
  }

  function loadCityPopulation() {
    console.log("Clicou no Load City population")
    for (let i = 0; i < cities.length; i++){
      console.log("for do item " + i)
      loadCityApi(i, cities[i].count)
        .then((objeto) => {
          cities[objeto.index].countApi = objeto.population
          setCities([...cities])
          console.log("Retorno do item " + objeto.index)
        })
    }
  }

  return (
    <ul class="list-group">
      <li class="badge bg-secondary">
        <button type="button" class="btn btn-secondary" onClick={() => loadCityPopulation()}>
          Load City Population
        </button>
      </li>
      {cities.map((city) => (
        <li class="list-group-item">
          {city.name}
          <span class="badge bg-secondary">{city.countApi}</span>
        </li>
      ))}
    </ul>
  );
}

export default App;
