const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
while (ingredients <= 7){
  console.log(ingredients);
  ingredients++ ;
  
}
// Write a for loop that prints out the contents of ingredients:
for (const ingredient of ingredients){
  console.log(ingredient)
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (let i = 0; i < 8; i = i+ 1 ){
  console.log(ingredients.reverse());
}