Ok, so for this project

Lets work on the body first

body {
width: 100vw; - making the body's width take up the whole width of the viewport
height: 100vh; - making the bodys height take up the whole height of the viewport
display: grid; - generates a block level grid
place-items: center; - to center things along both the block and inline direction at once - this does what both Align-items and justify-items does
background-color: hsl(216, 30%, 42%); - to make a default background color for the body.
}

---

1. I need to create a rectangle in the middle of the page that will contain everything.
   - the rectangle needs to be verticle orientation and it has to be centered in the page.
   - So how do I accomplish that in CSS.
   - First I will give the div a class name of container
   - then I will set the width at 350px and the height at 580px - this creates the rectangle shape I want
   - then I give it a background color I want it to take.
   - within this div I will create another grid
   - and place all items in in center
   - I will add a border radius to round the edges of the container
   - and lastly a box-shadow to give it a cool effect

.container {
width: 350px;
height: 580px;
background-color: hsl(215, 50%, 11%);
display: grid;
place-items: center;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

---

2. Now I will create another container within the main container
   - I will call this div with a class name of "inner-container"
   - I will make it 90% the width and 95% the height of the container it is within
   - create a grid within
   - defining the grid columns are 100%
   - manually defining the dimensions of the grid rows?

.inner-container {
width: 90%;
height: 95%;
display: grid;
grid-template-columns: 100%;
grid-template-rows: 55% 10% 10% 12.5% 12.5%;
}

---

3. Now I will create the image, and withint the inner-container div, I will make another div, but this one given a class name of .image-box
   - first I will bring in the backround image by linking to its location
   - using background repeat to make sure the image doesn't repeat
   - using background-size; cover, so it fits the whole div
   - giving it a border radisu to match the outer container

.image-box {
background-image: url(../nft-challenge-newbie/images/image-equilibrium.jpg);
background-repeat: no-repeat;
background-size: cover;
border-radius: 15px;
}

---

---

---

---
