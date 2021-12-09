I really need to memorize all this

To use flexbox you need to define a flex container
and then the flex continer doesn't become flexible till you set the display to flex

.flex-continer {
display: flex;
}

Flex Container has properties

---

1. flex Direction - this defines which direction the continer wants to stack the flex items.
   .flex-continer {
   display: flex;
   flex-direction: column;
   }

You can set it to
column - Stacks the flex items vertically from top to bottom
column-reverse - stacks the flex items vertically from botto to top
row - stacks the flex items horizontally from left to right
row-reverse - stacks the flex items horizontally from right to left.

---

2. flex-wrap - this specifies that the flex items will wrap if necessary

.flex-continer {
display: flex;
flex-direction: column;
flex-wrap: wrap;
}

Resizing the page without flex; wrap keeps everything on the same line and resizes it on the same line.
Flex wrap will move things to the next line if they don't fit.

You can set flex-wrap to no-wrap which is the default

flex-wrap can also be set to wrap-reverse which wraps the items in reverse order.

---

3. flex-flow

flex-flow is shorthand for doing both flex-direction and flex wrap

.flex-container {
display: flex;
flex-flow: row wrap;
}

---

4. justify-content - this to align the flex items

.flex-container {
display: flex;
justify-content: center;
}

center is the most common, but you could set it to left or right. You also have the following

flex-start - aligns the flex items at the beginning of the container (this is the default behavior)

flex-end - aligns the flex items at the end of the container

space-around - displays the flex items with space before, between, and after the lines

space-between - displays the flex items with space between the lines.

so space around gives equal spacing all around the container, where as space-between just between the elements.

---

5. align-items - this property is used to align the flex items

.flex-continer {
display: flex;
height: 200px;
align-items: center
}

center - aligns the flex items in the middle of the container

flex-start - aligns the flex items at the top of the container

flex-end - aligns the flex items a the bottom of the container

stretch - stretches the flex items to fill the container (this is the default behavior)

baseline - aligns the items so their baselines align. Like if you have differnet sized items, it will align them to their middle since thats the baseline.

---

6. align-content - is used to align the flex lines (not the items)

.flex-container {
display: flex;
height: 600px;
flex-wrap: wrap;
align-content: space-between;
}

space-between - displays the flex lines with equal space between them

space-around: - displays the flex lines with space before, between, and after them

stretch - stretches the flex lines up the remaining space (this is the default)

center - displays the flex lines in the middle of the container.

flex-start - displays the flex lines at the start of the container

flex-end - displays the flex lines at the end of the container

---

So now...PERFECT CENTERING

set both the justify-content and align-items properties to center, and the flex item will be perfectly centered.

.flex-container {
display: flex;
height: 300px;
justify-content: center;
align-items: center;
}

---

so to sum up

align-content = modifies the behavior the flex wrap property. It is similar to align items but instead of aligning flex items, it aligns flex lines

align-items = aligns the flex items when the items don't use all available space on the cross axis.

display = specifies the type of box used for an html element

flex-direction = specifies the direction of the flexiable items inside a flex container

flex-flow = shorthand property for flex-directon and flex wrap

flex-wrap = specifies whether the flex items should wrap or not, if there is not enough room for them on one flex line

justify-content = horizontally aligns the flex items when the items do not use all available space on the main axis.

---

Left off on CSS Flex Items

https://www.w3schools.com/css/css3_flexbox_items.asp
