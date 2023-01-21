const sweater = {
  brand: "Polo Ralph Lauren",
  model: "Kimberly cable-knit jumper",
  material: "Cotton",
  size: ["S", "M", "L", "XL"],
  color: ["Navy", "Grey", "White"],
  price: 189.99,
  inCloset: true,
  isWorn: false,
  checkAvailability: function(size, color) {
    if (this.size.includes(size) && this.color.includes(color)) {
      return `The ${size} ${color} ${this.brand} ${this.model} is in closet`;
    } else {
      return `The ${size} ${color} ${this.brand} ${this.model} is not worn.`;
    }
  },
  details: {
    Neckline: "V-neck",
    Sleeve: "Long",
    Fit: "Regular"
  }
};

console.log(sweater.checkAvailability("M", "Navy")); 
// Output: The M Navy Polo Ralph Lauren Knit Sweater is in closet.



