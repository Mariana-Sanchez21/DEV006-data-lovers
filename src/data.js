import data from './data/lol/lol.js';


 //VISUALIZADOR

const contenedor = document.querySelector('.contenedor'); 

const champion = Object.keys(data.data)

    
 

for(let i = 0; i < champion.length; i++){
  const key = champion[i]


  const name = data.data[key].name;
  const img  = data.data[key].img;
  const blurb = data.data[key].blurb;
  const title = data.data[key].title;
const infoObject = data.data[key].info;

const championCard = document.createElement("div");
championCard.classList.add("champion-card");

  
  for (const subKey in infoObject) {
    if (infoObject.hasOwnProperty(subKey)) {
      const subValue = infoObject[subKey];
      const statElement = document.createElement("p");
      statElement.innerHTML = `${subKey}: ${subValue}`;
      championCard.appendChild(statElement);
      statElement.classList.add("info")
    }

  

}

  const championImgContainer = document.createElement("div");
  championImgContainer.classList.add("champion-img-container");

  const championImg = document.createElement("img");
  championImg.src = img;
  //championImg.setAttribute("src",img)
  championImg.alt = name;
  championImg.classList.add("champion-img");

  // creación h2 para ingresar nombre
  const championName = document.createElement("h2");
  // toma el primer caracter del nombre para que sea en mayuscula y juntarlo con slice para devolver el resto de caracteres.
  championName.textContent = name.charAt(0).toUpperCase() + name.slice(1);
  championName.classList.add("champion-name");

  const championBlurb = document.createElement("p");
  championBlurb.textContent = blurb.charAt(0).toUpperCase() + blurb.slice(1);
  championBlurb.textContent= blurb.replace('<br><br>','   ')
  championBlurb.classList.add("blurb");
  
  
  const championTitle = document.createElement("h4");
  championTitle.textContent = title.charAt(0).toUpperCase() + title.slice(1);
  championTitle.classList.add("title")



  championImgContainer.appendChild(championImg);
  championCard.appendChild(championName);
  championCard.appendChild(championImgContainer);
  contenedor.appendChild(championCard);
  championCard.appendChild(championTitle)
  championCard.appendChild(championBlurb);
 



  }
 
  //ORGANIZADOR

  
  const allChampions = Object.keys(data.data);

const sortBy = (sortOrder) => {
  allChampions.sort((a, b) => sortOrder === 'asc' ? a.localeCompare(b) : b.localeCompare(a));
  contenedor.innerHTML = '';
  allChampions.forEach(key => {
    const champion = data.data[key];
    const { name, img, blurb, title, info } = champion;
    const championCard = document.createElement('div');
    championCard.classList.add('champion-card');
    for (const [subKey, subValue] of Object.entries(info)) {
      const statElement = document.createElement('p');
      statElement.innerHTML = `${subKey}: ${subValue}`;
      statElement.classList.add('info');
      championCard.appendChild(statElement);
    }
    const championImgContainer = document.createElement('div');
    championImgContainer.classList.add('champion-img-container');
    const championImg = document.createElement('img');
    championImg.src = img;
    championImg.alt = name;
    championImg.classList.add('champion-img');
    const championName = document.createElement('h2');
    championName.textContent = name.charAt(0).toUpperCase() + name.slice(1);
    championName.classList.add('champion-name');
    const championBlurb = document.createElement('p');
    championBlurb.textContent = blurb.charAt(0).toUpperCase() + blurb.slice(1);
    championBlurb.textContent = blurb.replace('<br><br>', '   ');
    championBlurb.classList.add('blurb');
    const championTitle = document.createElement('h4');
    championTitle.textContent = title.charAt(0).toUpperCase() + title.slice(1);
    championTitle.classList.add('title');
    championImgContainer.appendChild(championImg);
    championCard.appendChild(championName);
    championCard.appendChild(championImgContainer);
    contenedor.appendChild(championCard);
    championCard.appendChild(championTitle);
    championCard.appendChild(championBlurb);
  });
};

export default sortBy;