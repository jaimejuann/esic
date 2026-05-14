const cars = [
  {name:"Lamborghini Huracan Performante",price:"Desde 690€/día",img:"https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1200&q=80"},
  {name:"McLaren 720S",price:"Desde 750€/día",img:"https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1200&q=80"},
  {name:"Aston Martin Vantage V12",price:"Desde 800€/día",img:"https://images.unsplash.com/photo-1549399542-7e82138c18d2?auto=format&fit=crop&w=1200&q=80"},
  {name:"Ferrari LaFerrari",price:"Desde 1500€/día",img:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80"},
  {name:"Porsche 911 Turbo S",price:"Desde 650€/día",img:"https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?auto=format&fit=crop&w=1200&q=80"},
  {name:"Range Rover Sport",price:"Desde 420€/día",img:"https://images.unsplash.com/photo-1581540222194-0def2dda95b8?auto=format&fit=crop&w=1200&q=80"}
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
