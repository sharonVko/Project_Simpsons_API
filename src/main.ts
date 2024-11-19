import './style.css'
import { ICharacter} from './contracts/ICharacter';
import { IEpisode } from './contracts/IEpisode';
import { IProduct } from './contracts/IProduct';

const apiCharacter = document.querySelector('#api-character') as HTMLAnchorElement;
const apiProducts = document.querySelector('#api-products') as HTMLAnchorElement;
const apiEpisode = document.querySelector('#api-episode') as HTMLAnchorElement;
console.log("test");

const outputWrapper = document.querySelector('#output-wrapper') as HTMLDivElement;
const BASE_URL = "https://api.sampleapis.com/simpsons"

const CHARACTERS_ROUTE = `${BASE_URL}/characters`

const PRODUCTS_ROUTE = `${BASE_URL}/products`

const EPISODES_ROUTE = `${BASE_URL}/episodes`




//______________________________________________________

// function to fetch characters on a tag click
apiCharacter?.addEventListener('click', async()=> {
  try {
      const response = await fetch(CHARACTERS_ROUTE);
      const data = await response.json() as ICharacter[];
      
      outputWrapper.innerHTML = "";
      console.log(data);
      
      data.forEach((character: ICharacter) => {
        const characterCard = document.createElement('div') as HTMLDivElement;
        characterCard.className = "card"
        characterCard.innerHTML = displayCharacter(character);
        outputWrapper.appendChild(characterCard);
      });
  } catch (error) {
    console.error("fetch failed", error)
  }
});


// function to display in html
function displayCharacter(character: ICharacter): string {
  const resultAsString = `
  <h3>${character.name}</h3>
  <h4>${character.id}</h4>
  <p>${character.gender}</p>`

  return resultAsString;
}


//function to fetch products
apiProducts?.addEventListener('click', async() => {
  try {
    const response = await fetch(PRODUCTS_ROUTE);
    const data = await response.json() as IProduct[];
    outputWrapper.innerHTML = ""
    console.log(data);
    data.forEach((product: IProduct) => {
      const productInfo = document.createElement('div') as HTMLDivElement;
      productInfo.className = "product-info-div";
      productInfo.innerHTML = displayProducts(product);
      outputWrapper.appendChild(productInfo);
    }
    )
  } catch (error) {
    console.error("fetch failed", error)
  }
})

//function to display fetched products

function displayProducts(product: IProduct): string {
  const resultAsString = `
  <h4>${product.name}</h4>
  <p>${product.description}</p>
  <h5>${product.id}</h5>`

  return resultAsString
}

//function to fetch episodes 
apiEpisode?.addEventListener('click', async() => {
  try {
    const response = await fetch(EPISODES_ROUTE);
    const data = await response.json() as IEpisode[];
    outputWrapper.innerHTML = "";
    console.log(data);
    data.forEach((episode: IEpisode) => {
      const episodeInfo = document.createElement('div') as HTMLDivElement;
      episodeInfo.className = "episode-info-div";
      episodeInfo.innerHTML = displayEpisodes(episode);
      outputWrapper.appendChild(episodeInfo);
    })
    
  } catch (error) {
    
  }
})

//function to display episodes & info in html (called in the function above)

function displayEpisodes(episode: IEpisode): string {
    const resultAsString = `
    <h3>${episode.name}</h3>
    <img src="${episode.thumbnailUrl}" alt= "${episode.name}"/>
    <p>${episode.description}</p>
    <h4>${episode.season}</h4>
    <h5>${episode.episode}</h5>
    <p>${episode.airDate}</p>
    <h5>${episode.rating}</h5>`
  
    return resultAsString;
}