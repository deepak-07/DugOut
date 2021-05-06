import faker from "faker";

export const categories = [
  "Sport Shoes",
  "Cricket Bat",
  "Training Net",
  "Leather Ball",
  "Stumps"
];

export const productsDB = [...Array(50)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  price: faker.commerce.price(),
  quantity: 1,
  material: faker.commerce.productMaterial(),
  brand: faker.lorem.word(),
  inStock: faker.random.boolean(),
  fastDelivery: faker.random.boolean(),
  isWishListed: false,
  ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
  offer: faker.random.arrayElement([
    "Save 50",
    "70% bonanza",
    "Republic Day Sale"
  ]),
  idealFor: faker.random.arrayElement([
    "Men",
    "Women",
    "Girl",
    "Boy",
    "Senior"
  ]),
  category: faker.random.arrayElement(categories),
  color: faker.commerce.color()
}));

export const itemsInCart = [];
export const itemsInWishList = [];
// export default {
//   productsDB
// };
