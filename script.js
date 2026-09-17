const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#main-nav');
document.querySelector('.areas')?.setAttribute('id', 'areas');
document.querySelector('.founder')?.setAttribute('id', 'founder');
document.querySelector('.industries')?.setAttribute('id', 'industries');
menuButton?.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  navigation.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const reviews = [
  ['“We had an outstanding experience working with ProWeb365. They didn’t just build a website, they took the time to truly understand our business, goals, and how we serve our clients. That level of care made all the difference.”', 'Crista Thielen', 'Executive at Generations.com'],
  ['“Working with Phong Nguyen and ProWeb365 on the launch of our org’s new website was a great experience. Phong genuinely felt like an extension of our team, warm, kind, and invested in making sure everything came together the right way.”', 'Ifrah Aden', 'Non-Profit HCA-MN.org'],
  ['“The Origins Program has worked with Phong and ProWeb365 for several years. They are consistently efficient and accurate with meeting our website needs and requests.”', 'Sarah Biros', 'from OriginsOnline.org']
];
let reviewIndex = 0;
document.querySelector('.quote-next')?.addEventListener('click', () => {
  reviewIndex = (reviewIndex + 1) % reviews.length;
  const [quote, name, role] = reviews[reviewIndex];
  document.querySelector('.quote-feature blockquote').textContent = quote;
  document.querySelector('.quote-person').innerHTML = `<strong>${name}</strong><span>${role}</span>`;
});

document.querySelector('.quote-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = document.querySelector('.form-message');
  message.textContent = 'Thank you — this review prototype has recorded your request.';
  event.currentTarget.reset();
});

document.querySelector('.hero-form')?.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = event.currentTarget.querySelector('.form-message');
  message.textContent = 'Thank you — this review prototype has recorded your request.';
  event.currentTarget.reset();
});
