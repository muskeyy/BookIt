const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll(".menuItem");

const products = [
    {
      id: 1,
      title: "A Game of Thrones",
      price: 90,
      image: "./img/got1.jpg",
      desc: ""
    },
    {
      id: 2,
      title: "Dune",
      price: 89,
      image: "./img/dune.jpg",
      desc: "Set on the desert planet Arrakis, Dune is the story of the boy Paul Atreides, heir to a noble family tasked with ruling an inhospitable world where the only thing of value is the “spice” melange, a drug capable of extending life and enhancing consciousness. Coveted across the known universe, melange is a prize worth killing for....When House Atreides is betrayed, the destruction of Paul’s family will set the boy on a journey toward a destiny greater than he could ever have imagined. And as he evolves into the mysterious man known as Muad’Dib, he will bring to fruition humankind’s most ancient and unattainable dream.",
    },
    {
      id: 3,
      title: "The Silent Patient",
      price: 109,
      image: "./img/tsp.jpg",
      desc: "Alicia Berenson lived a seemingly perfect life until one day six years ago.When she shot her husband in the head five times. Since then she hasn't spoken a single word.It's time to find out why.",
    },
    {
      id: 4,
      title: "The Guest List",
      price: 129,
      image: "./img/tgl.jpg",
      desc: "On a remote island, guests gather for the wedding of the year  the marriage of Jules Keegan andWill Slater.Old friends.Past grudges.Happy families.Hidden jealousies.Thirteen guests.The wedding cake has barely been cut when one of the guests is found dead. And as a storm unleashes its fury on the island, everyone is trapped.All have a secret. All have a motive.",
    },
    {
      id: 5,
      title: "It Ends With Us",
      price: 99,
      image: "./img/iewu.jpg",
      desc: "Sometimes it is the one who loves you who hurts you the most. Lily hasn't always had it easy, but that's never stopped her from working hard for the life she wants. She's come a long way from the small town in Maine where she grew up. So when she feels a spark with a gorgeous neurosurgeon named Ryle Kincaid, everything in Lily's life suddenly seems almost too good to be true. As questions about her new relationship overwhelm her, so do thoughts of Atlas Corrigan. Her first love and a link to the past she left behind. He was her kindred spirit, her protector. When Atlas suddenly reappears, everything Lily has built with Ryle is threatened.",
    },
  ];
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductDesc = document.querySelector(".productDesc");

menuItem.forEach((item,index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform= `translateX(${-100 * index}vw)`;

    choosenProduct = products[index];

    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.image;
    currentProductDesc.textContent = choosenProduct.desc;
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});