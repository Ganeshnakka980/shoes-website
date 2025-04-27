const products = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 150,
    image: "https://m.media-amazon.com/images/I/81rt6H88lSL._AC_UY1000_.jpg"
  },
  {
    id: 2,
    name: "Adidas Yeezy Boost",
    price: 220,
    image: "https://m.media-amazon.com/images/I/610k7umwL6L._AC_UY1000_.jpg"
  },
  {
    id: 3,
    name: "Puma RS-X",
    price: 130,
    image: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/379993/01/sv01/fnd/IND/fmt/png/Flyer-Runner-Engineered-Knit-Men's-Shoes"
  },
  {
    id: 4,
    name: "Jordan Retro 4",
    price: 250,
    image: "https://www.jiomart.com/images/product/original/rvejnpfv4y/dexture-air-jordan-style-trendy-sneakers-for-men-olive-product-images-rvejnpfv4y-0-202305310735.jpg?im=Resize=(500,630)"
  },
  {
    id: 5,
    name: "Reebok Classic",
    price: 90,
    image: "https://relaxofootwear.com/cdn/shop/files/SD0849G-WHBK-6_75888e1a-3137-4419-8742-ded704555e64.jpg?v=1730983793&width=800"
  },
  {
    id: 6,
    name: "New Balance 574",
    price: 110,
image: "https://assets.ajio.com/medias/sys_master/root/20240202/xnza/65bd1a5816fd2c6e6ad5123b/-473Wx593H-467038556-white-MODEL.jpg"  },
  {
    id: 7,
    name: "Vans Old Skool",
    price: 70,
    image: "https://rukminim3.flixcart.com/image/850/1000/xif0q/shoe/s/y/9/8-rso2775-8-red-tape-white-original-imah2fskcnvn8qjh.jpeg?q=90&crop=false"
  },
  {
    id: 8,
    name: "Converse Chuck 70",
    price: 85,
    image:"https://sc04.alicdn.com/kf/H81a725e997f0471f9a639fba4ebf839cp.jpg"
  }
];

let cartCount = 0;

const productList = document.getElementById('product-list');

products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.className = 'product';
  productCard.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h2>${product.name}</h2>
    <p>$${product.price}</p>
    <button onclick="addToCart()">Add to Cart</button>
  `;
  productList.appendChild(productCard);
});

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
}
