/**
 * @file scripts for DOM manipulation
 * @author Dylan Mayor
 */
'use strict';

const blackburnCarouselFiles = [
  'https://stadiumexperience.com/wp-content/uploads/2020/09/BR007_Blackburn_Rovers_v_Fulham2-Resized-scaled.jpg',
  'https://threebestrated.co.uk/images/Royams-Blackburn-UK.jpeg',
  'https://careers.thwaites.co.uk/system/client-new/59/branch/1323/vacancy-header-image/Head_Office_Brewery.jpg?w=900&h=350&mode=crop',
];

/**
 * Generates a new img element
 * @param {string} src source link of the image
 * @return {*} Returns a new img element
 */
function genNewImg(src) {
  const newImg = document.createElement('img');

  newImg.setAttribute('src', src);
  newImg.classList.add('.standard-img');

  return newImg;
}

/**
 * Setups a timer for the passed image object that changes images
 * every __timer__ milliseconds
 * @param {*} imageObj Image DOM objject
 * @param {[]} imgArr Array of images
 * @param {number} timer Time between image changes
 */
function setupImgCarousel(imageObj, imgArr, timer=3_000) {
  const maxLen = imgArr.length - 1;
  let imgIndx = 1;

  console.log(imageObj);
  imageObj.setAttribute('src', imgArr[0]);
  window.setInterval(() => {
    imageObj.setAttribute('src', imgArr[imgIndx]);
    imgIndx = imgIndx < maxLen ? imgIndx + 1 : 0;
  }, timer);
}

window.addEventListener('load', () => {
  const copyrightFooter = document.querySelector('#copyright');
  const headerTwo = document.querySelector('#blackburn-header');
  const specialPlaceArr = document.querySelectorAll('.notable-place');

  headerTwo.innerText += '!!!';

  console.log(copyrightFooter);
  console.log(specialPlaceArr);


  specialPlaceArr.forEach((special) => {
    special.style.color = 'orange';
  });

  specialPlaceArr[1].style.color = 'darkgreen';
  specialPlaceArr[0].innerText = 'Jamboree sandwich at the Jambo-ree';
  // specialPlaceArr[2].remove();

  document.querySelector('#icon').appendChild(
      genNewImg('https://upload.wikimedia.org/wikipedia/en/thumb/0/0f/Blackburn_Rovers.svg/1200px-Blackburn_Rovers.svg.png'),
  );

  document.querySelector('#copyright').innerHTML += new Date().getFullYear();


  setupImgCarousel(
      document.querySelector('#carousel img'), blackburnCarouselFiles,
  );
});

