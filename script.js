const cars = [
  {name: "Lamborghini Huracán Performante", price: "Desde 690€/día", img: "https://images.unsplash.com/photo-1544829099-b9a0c5303bea?auto=format&fit=crop&w=1200&q=80"},
  {name: "McLaren 720S", price: "Desde 750€/día", img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80"},
  {name: "Aston Martin Vantage V12", price: "Desde 800€/día", img: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?auto=format&fit=crop&w=1200&q=80"},
  {name: "Ferrari LaFerrari", price: "Desde 1500€/día", img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80"},
];

const grid = document.getElementById("carsGrid");
cars.forEach(car => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `<img src="${car.img}" alt="${car.name}"><div class="card-content"><h3>${car.name}</h3><p class="price">${car.price}</p></div>`;
  grid.appendChild(card);
});

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  status.textContent = `Gracias ${data.get("name")}, recibimos tu solicitud. Te contactamos en menos de 24h.`;
  form.reset();
});
