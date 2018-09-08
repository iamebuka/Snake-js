# Snake js

This is my javascript implementation of the popular snake game. The most important part of the algorithm is the code that handles the movement of the snake, implemented in the ***move*** method. First the snake was implemented as a list(Queue) of cordinates, and the movement is practically poping the last item in the list, increasing the coordinate of the popped item by a fixed value depending on the direction and inserting it into the list from the other end. 

You are also free to add a user interface to this implementation

# code snippet

```javascript

var snakes = new snake()
snakes.init();
snakes.move("up");
snakes.move("left");
console.log("state init", snakes.getState())

```




# Methods

* ***Init***

This is the initialize method, it is the first method to be called once you create a new snake object. it is responsible for generating the initial snake position and the position of the initial food


* ***move***

The move method is responsible for changing the position of the snake. it accepts one of the following options [***up***, ***down***, ***left***, ***right***].

* ***getPoint***

This method returns the current total point accumulated in the game

* ***getState***

This method returns the current state of the game. The state includes any of the following options 
***init***, ***in progress***, ***game over*** .




