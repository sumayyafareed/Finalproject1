// api.js

function fetchProducts(category) {
  const myProducts = {
    rings: [
      { name: "Diamond Ring", price: "$199", image: "images/rings/ring1.jpg" },
      { name: "Gold Ring", price: "$249", image: "images/rings/ring2.jpg" },
      { name: "Silver Band", price: "$99", image: "images/rings/ring3.jpg" },
      { name: "Sapphire Ring", price: "$179", image: "images/rings/ring4.jpg" },
      { name: "Platinum Ring", price: "$299", image: "images/rings/ring5.jpg" }
    ],
    necklaces: [
      { name: "Pearl Necklace", price: "$129", image: "images/necklaces/necklace1.jpg" },
      { name: "Gold Chain necklace", price: "$199", image: "images/necklaces/necklace2.jpg" },
      { name: "Diamond Locket necklace", price: "$289", image: "images/necklaces/necklace3.jpg" },
      { name: "Heart Pendant necklace", price: "$149", image: "images/necklaces/necklace4.jpg" },
      { name: "Ruby Necklace", price: "$199", image: "images/necklaces/necklace5.jpg" }
    ],
    earrings: [
      { name: "Stud Earrings", price: "$49", image: "images/earring/earring1.jpg" },
      { name: "Hoop Earrings", price: "$69", image: "images/earring/earring2.jpg" },
      { name: "Drop Earrings", price: "$89", image: "images/earring/earring3.jpg" },
      { name: "Diamond Studs", price: "$149", image: "images/earring/earring4.jpg" },
      { name: "Gold Earrings", price: "$99", image: "images/earring/earring5.jpg" }
    ],
    bracelets: [
      { name: "Gold Bracelet", price: "$129", image: "images/bracelat/bracelet1.jpg" },
      { name: "Silver Bangle", price: "$89", image: "images/bracelat/bracelet2.jpg" },
      { name: "Charm Bracelet", price: "$79", image: "images/bracelat/bracelet3.jpg" },
      { name: "Cuff Bracelet", price: "$99", image: "images/bracelat/bracelet4.jpg" },
      { name: "Beaded Bracelet", price: "$59", image: "images/bracelat/bracelet5.jpg" }
    ],
    pendants: [
      { name: "Heart Pendant", price: "$69", image: "images/Pendant/Pendant1.jpg" },
      { name: "Diamond Pendant", price: "$119", image: "images/Pendant/Pendant2.jpg" },
      { name: "Cross Pendant", price: "$89", image: "images/Pendant/Pendant3.jpg" },
      { name: "Initial Pendant", price: "$59", image: "images/Pendant/Pendant4.jpg" },
      { name: "Gemstone Pendant", price: "$99", image: "images/Pendant/Pendant5.jpg" }
    ],
    anklets: [
      { name: "Silver Anklet", price: "$49", image: "images/Anklets/anklet1.jpg" },
      { name: "Beaded Anklet", price: "$39", image: "images/Anklets/anklet2.jpg" },
      { name: "Gold Anklet", price: "$79", image: "images/Anklets/anklet3.jpg" },
      { name: "Charm Anklet", price: "$59", image: "images/Anklets/anklet4.jpg" },
      { name: "Simple Anklet", price: "$29", image: "images/Anklets/anklet5.jpg" }
    ],
    watches: [
      { name: "Men's Watch", price: "$199", image: "images/watch/watch1.jpg" },
      { name: "Women's Watch", price: "$179", image: "images/watch/watch2.jpg" },
      { name: "Luxury Watch", price: "$299", image: "images/watch/watch3.jpg" },
      { name: "Casual Watch", price: "$89", image: "images/watch/watch4.jpg" },
      { name: "Sport Watch", price: "$149", image: "images/watch/watch5.jpg" }
    ]
  };

  return new Promise(resolve => {
    setTimeout(() => {
      resolve(myProducts[category.toLowerCase()] || []);
    }, 300); // simulate network delay
  });
}
