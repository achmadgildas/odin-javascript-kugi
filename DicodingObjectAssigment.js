const restaurant = {
  name: "Bakso Mang Dicoding",
  city: "Bandung",
  'favorite drink': "Es Teh",
  'favorite food': "Bakso",
  isVegan: false
}
 
const { name: name, 'favorite drink': favoriteDrink} = restaurant;
 
console.log(name);
console.log(favoriteDrink);
