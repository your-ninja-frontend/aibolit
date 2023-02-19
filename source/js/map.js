if (document.querySelector('.map')) {
  const map = L.map('map')
    .setView({
      lat: 48.76448725577362,
      lng: 44.478829,
    }, 11);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);

  const points = [
    {
      title: 'Айболит на Краснополянской',
      description: `Дзержинский район,
    ул. Краснополянская, 30`,
      tel: '962292',
      workTime: 'Круглосуточно',
      lat: 48.764467,
      lng: 44.478860,
    },
    {
      title: 'Айболит на Тулака',
      description: `Советский район,
    ул. Карла Маркса, 7`,
      tel: '962292',
      workTime: 'Круглосуточно',
      lat: 48.676486,
      lng: 44.478725,
    },
  ];

  const createPopup = ({ title, description, workTime, tel }) => `
  <section class="map-baloon">
  <h3 class="map-baloon__title">${title}</h3>
  <p class="map-baloon__adress">${description}</p>
  <a class="map-baloon__tel" href="tel:+${tel}">${tel}</a>
  <p class="map-baloon__work-time">${workTime}</p>
  </section>
`;

  points.forEach((point) => {
    const { lat, lng } = point;

    const marker = L.marker(
      {
        lat,
        lng
      },
    );

    marker.addTo(map).bindPopup(createPopup(point),
      {
        keepInView: true,
      },
    );
  });
}


