// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// ********** close links ************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

// nav toggle
navToggle.addEventListener('click', function () {
  const containerHeigth = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;

  if (containerHeigth === 0) {
    linksContainer.style.height = `${linksHeight}px`;
  } else {
    linksContainer.style.height = 0;
  }
});

const navBar = document.getElementById('nav')
// console.log(navBar.getBoundingClientRect().height);

const topLink = document.querySelector('.top-link');
// ********** fixed navbar ************
window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navBar.getBoundingClientRect().height;
  console.log(navHeight)

  if (scrollHeight > navHeight) {
    navBar.classList.add('fixed-nav');
  } else {
    navBar.classList.remove('fixed-nav');
  }

  // show-hide btn to top
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// ********** smooth scroll ************
// select links
