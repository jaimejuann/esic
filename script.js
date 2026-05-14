const cars = [
  {name:"Aston Martin Vantage V12 Roadster",price:"Desde 980€/día",img:"https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&w=1200&q=80"},
  {name:"Lamborghini Huracan Performante",price:"Desde 690€/día",img:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"},
  {name:"Ferrari F8 Tributo",price:"Desde 1450€/día",img:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"},
  {name:"Porsche 911 Turbo S",price:"Desde 650€/día",img:"https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1200&q=80"},
  {name:"Mercedes-AMG GT 63 S",price:"Desde 620€/día",img:"https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80"},
  {name:"BMW M8 Competition",price:"Desde 590€/día",img:"https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80"},
  {name:"McLaren 720S",price:"Desde 750€/día",img:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1200&q=80"},
  {name:"Aston Martin DBX707",price:"Desde 820€/día",img:"https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80"},
  {name:"Ferrari LaFerrari",price:"Desde 1500€/día",img:"https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1200&q=80"},
  {name:"Porsche Cayenne Turbo GT",price:"Desde 540€/día",img:"https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1200&q=80"}
];

document.getElementById("carsGrid").innerHTML = cars.map(car => `
  <article class="card">
    <img src="${car.img}" alt="${car.name}" loading="lazy">
    <div class="card-content"><h3>${car.name}</h3><p class="price">${car.price}</p></div>
  </article>
`).join("");

document.getElementById("bookingForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("bookingStatus").textContent = "Disponibilidad enviada. Te respondemos en menos de 30 minutos.";
});

document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  document.getElementById("formStatus").textContent = `Gracias ${data.get("name")}, tu solicitud ha sido enviada.`;
  e.target.reset();
});
