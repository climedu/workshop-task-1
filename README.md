# workshop-task-1
Here is a URL to the webpage for this project: [link]( https://climedu.github.io/workshop-task-1/)

## Task
- Make a p5.js sketch using 2D primitive shapes, loops, and random numbers.
- Write your own functions and make calls to these functions in your code.
- Experiment with at least one new item the p5.js documentation links to an external site.
- Keep notes to document your process and learning clearly.

## Overview
- Moving the rectangle left and right with conditional
- Loop function
- Turn combined shapes into a function
- Learn random positions and heights/size
- Experimenting with the odd and even for changing the colour

## Workshop Notes

Shortcuts: 
- cmd + / to select every lines need "//"

Main 5 founding priciples :
- Variables, conditionals, loops, functions, and objects
- Looking more about variables, conditions then focus on loops and functions. 


### Code Notes (Workshop):
Rectangle (moving right and left) - conditional (If)
- Instead of stuck on the right side, need a command that says if reaching point a do this, point b do this
- Code :
  
<img width="300" alt="Screenshot 2025-01-16 at 5 40 01 PM" src="https://github.com/user-attachments/assets/c5131bb0-03d4-4076-b679-f4bbc1a00030" />

Loop of drawing rectangles, keep drawing until there's a command to say stop.

<img width="300" alt="Screenshot 2025-01-16 at 5 42 04 PM" src="https://github.com/user-attachments/assets/0690fd8e-6aa9-47de-874d-fb0954ccd949" />

<img width="300" alt="Screenshot 2025-01-16 at 5 43 56 PM" src="https://github.com/user-attachments/assets/ba9e0e10-215b-49d0-a59d-a04dfedc2162" />

Making a shape from combinations of geometries. In this case, triangle and rectangle. Make them into a function so that it can be input inside to another function.

<img width="300" alt="Screenshot 2025-01-16 at 5 44 43 PM" src="https://github.com/user-attachments/assets/4c8f10d0-a727-47fd-816d-2bfbb578b861" />

I did some experiments from the existing code, changing a point of the triangle.

<img width="300" alt="Screenshot 2025-01-16 at 5 47 00 PM" src="https://github.com/user-attachments/assets/ef8afe4f-5c64-40c1-986f-3e5cbbe76a9f" />

-  X++ is also  x = x+1

The random lollipops from the workshop code

<img width="300" alt="Screenshot 2025-01-16 at 5 49 49 PM" src="https://github.com/user-attachments/assets/ee28d08c-9b8b-42ce-a2ba-1c0327b06e01" />



## Task Journey
From the lollipop code, I'm experimenting with another shape that I want to develop further. So, the lollipop only has the random heights of the rectangle and position. I want to experiment with a whole image with 2 rectangles and 2 half circles. The 2 rectangles have random heights that go to the opposite y direction. 

<img width="300" alt="Screenshot 2025-01-16 at 5 57 43 PM" src="https://github.com/user-attachments/assets/361ec66c-d5e6-4cc0-bfca-c1cb9fc76954" />

<img width="300" alt="Screenshot 2025-01-16 at 5 53 57 PM" src="https://github.com/user-attachments/assets/eee20db2-6254-4f4b-a831-d12088f35337" />


### Process 2

V.2 (next version) trying to make it in the centre (x line by dividing the heights of the canvas into 2 (y line)), and more tidy, but still having the random heights (make loop).

<img width="300" alt="Screenshot 2025-01-16 at 5 58 35 PM" src="https://github.com/user-attachments/assets/ee78a8fd-0dd9-45da-8c65-f2ac0d735e9e" />

<img width="300" alt="Screenshot 2025-01-16 at 5 59 28 PM" src="https://github.com/user-attachments/assets/dbb9bd4b-76b1-4e49-83a6-fad23cf26217" />

Great, the next development is to make the colours red and green based on odd and even numbers. Trying to find out how to use division. Turned out using % and ==

### Process 3
Making the colours red and green based on odd and even colour
Learning the odd and even from this web :  https://editor.p5js.org/togekisse/sketches/eQ3hatG0f

- Struggle -> don't know how to put the organize since there will be "for" 1 for the geometry set up to add 1 every 50 (

  ```ruby
    for (x=0;  x < width; x += 50){
	    geometry(x, centerY, random(0,200), color("green"));
	  }) and needed another for the odd and even number.
- Asked chat gpt, and came out a code with this difference "
  ```ruby
	  for (let i = 0; i < 9; i++) {
	    let x = i * 50; // Calculate the x position
	    let colorChoice = (i % 2 === 0) ? color("green") : color("red"); // Alternate colors
	    geometry(x, centerY, random(50, 150), colorChoice);
	  }
- Learned that instead of using an if statement, this one can function by making them as variables. Make the x position x as a variable which adding 1 each 50 pixel, and variable for choosing the color based on odd and even.
- Make the random(50,150) to make the range of the random height and looks more organized which the range is 50px to 150px

Code :

<img width="300" alt="Screenshot 2025-01-16 at 6 11 54 PM" src="https://github.com/user-attachments/assets/1d2bc584-6078-4809-aeb2-3c8e78f8fb3d" />

Result :

<img width="300" alt="Screenshot 2025-01-16 at 6 12 55 PM" src="https://github.com/user-attachments/assets/b523a32e-ec50-43c5-948a-12fb6dda22b8" />


### Commentaries
- Learned new things about odd and even
- Learned a new thing about dividing canvas height into 2

## Future Development
- Make the rectangle longer upwards and downwards, then coming back to the centre
- Or maybe changing the color every few seconds
