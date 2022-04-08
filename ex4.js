let products = [
  { product: 'Shirt', price: 10 },
  { product: 'Laptop', price: 2400 },
  { product: 'Bike', price: 450 },
  { product: 'Chair', price: 150 },
  { product: 'Phone', price: 1500 },
  { product: 'Shoes', price: 60 },
  { product: 'Car', price: 25000 },
  { product: 'Coffe Machine', price: 500 },
];

let priceAll = 0,
  prodPr,
  prodNm;

for (const prod of products) {
  prodPr = prod.price;
  prodNm = prod.product;
  priceAll += prodPr;
  if (prodPr > 0 && prodPr <= 100) console.log(prodNm + ' - Евтини');
  else if (prodPr > 100 && prodPr <= 500)
    console.log(prodNm + ' - Нормална цена');
  else if (prodPr > 500 && prodPr <= 3000) console.log(prodNm + ' - Скъпи');
  else if (prodPr > 3000) console.log(prodNm + ' - Много скъпи');
}

console.log('Сборна сума: ' + priceAll);

// Напишете програма, която да категоризира продукти според цената им. Програмата трябва да изпише името на всеки продукт и неговата категория. Също така трябва да изпише и колко е сбораната сума на всички продукти. Изписването на резултата трявба да е само в конзолата.

// Обсег на всяка категория:
// 	Евтини 0 - 100
// 	Нормална цена 100 - 500
// 	Скъпи 500 - 3000
// 	Много скъпи 3000+
