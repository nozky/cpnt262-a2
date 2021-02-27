'use strict';

import { images } from '../js/images.mjs'


const imageGallery = document.querySelector('.wrapper .gallery');
imageGallery.innerHTML='';

images.forEach(image => {

  // image container
  const newImageCon = document.createElement("div");
  newImageCon.classList.add("image-container");
  
  const newImg = document.createElement("img");
  newImg.loading='lazy';
  newImg.src = image.pathUrl;
  newImg.width = image.width;
  newImg.height = image.height;

  const newFigcaption = document.createElement("figcaption");
  newFigcaption.innerHTML = image.title;

  const newFigure = document.createElement("figure");
  newFigure.append(newImg,newFigcaption);
  

  newImageCon.appendChild(newFigure);


  // info section
  const newInfoCon = document.createElement('div');
  newInfoCon.classList.add('info');

  const template = `
                    <p><b>ID:</b> ${image.id}</p>
                    <p><b>Description:</b> ${image.desciption}</p>
                    <p><b>More Info: </b><a href="${image.linkUrl}" target="_blank">${image.linkUrl}</a></p>
                    <p><b>Credit:</b> <a href = "${image.creditURL}" target="_blank"> ${image.credit}</a></p>
                   `
  newInfoCon.innerHTML = template
  newImageCon.appendChild(newInfoCon)


  // parent element
  imageGallery.appendChild(newImageCon);


})