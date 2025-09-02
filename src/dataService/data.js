var products = [
  {
    id: 1, // this is unique
    title: "Cohort 60 Phone",
    price: 999,
    image: "60phone.jpeg",
    category: "smartphones",
  },
  {
    id: 2, // this is unique
    title: "Cohort 60 Tv",
    price: 600,
    image: "60tv.jpeg",
    category: "smart tv",
  },
  {
    id: 3, // this is unique
    title: "Cohort 60 Laptop",
    price: 500,
    image: "60laptop.jpeg",
    category: "computers",
  },
  {
    id: 4, // this is unique
    title: "Cohort 60 Computer Mouse",
    price: 100,
    image: "60mouse.jpeg",
    category: "utils",
  },
  // add more products if you want
];

class DataService {
  getProducts() {
    return products;
  }
}
export default DataService;
