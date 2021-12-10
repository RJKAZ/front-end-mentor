CSS grid is a two dimensional grid based layout system. 

Its somewhat simmilar to flexbox, but flexbox is one-directional flow, Grid and Flexbox in essence compliment each other.

First step to using Grid is set 

display:grid

Columns and Rows you set with grid-template-columns & grid-template-rows

and then you nest the child elements into the grid with grid column and grid row. 

The order doesn't matter since CSS can place them in any order

Grid has its own terminology

1. Grid Container - the element for which display:grid is applied. Its the direct parent of all grid items
2. Grid Item - The children of the grid containe
3. Grid Line - The dividing lines that make up the structure of the grid. They can be either vertical (column) or horizontal (row)
4. Grid Cell - the space between two adjacent rows and the two adjecent column grid lines. Its a single unit of the grid
5. Grid Track - the space between two adjacent grid lines. Think of them as the columns or rows of the grid
6. Grid Area - the total space surrounded by four grid lines. A grid area may be composed of any number of grid cells. 