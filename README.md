# _Address Book_

#### _Movie Tickets: Week Four, 28 February 2017_

#### By _**Grace Stuart (gstuart) and Ben Schenkenberger (BenJammen1986)**_

## Description
A webpage (using HTML, CSS, Bootstrap, JavaScript, and jQuery) where a user can select the name of a movie, the time of day that they would like to see the movie and their age. The webpage will let them know how much their movie ticket will cost based on:
1. their age,
2. the movie, and
3. the time of day they want to see the movie.


## Setup/Installation Requirements
1. Clone this repository onto your desktop. This will place the all files and folders in onto your computer.

2. Click on the index.html file in the browser. This will allow you to view the file in your browser. If this does not open in your browser, navigate to project folder via your command line and type "open index.html".


## Know Bugs
No known bugs.

## Technology Used To Create Portfolio
HTML, CSS, Bootstrap, JavaScript, and jQuery.


## Specifications
|Behavior|Input|Output|
|--------|-----|------|
|Program will return movie which user selected|Finding Nemo|Finding Nemo|
|Program returns movie times when a movie is selected|Finding Nemo|10:10am, 12:20pm, 3:10pm, 5:40pm|
|Program will return matinee price if movie starts before 4:30pm|4:10pm|$6.50|
|Program will determine if the movie selected is a 3D movie at the evening price.|Finding Nemo 3D|$12.50|
|Program will determine if the movie selected is a 3D movie at the day price.|Finding Nemo|$9.50|
|Program will apply discount if there is a Senior discount.|Senior Discount Selected|-$2.00|
|Program will apply child pricing if there is a child discount|Child Discount Selected|-$2.00|
|Program will display final movie ticket price based on age, movie, and time of movie start.|Child, Finding Nemo 3D, 2:00pm|$7.50|


## License
*GPL*
Copyright (c) 2017 **_Grace Stuart and Ben Schenkenberger_**
