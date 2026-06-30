const products = [
  {cat:'single', name:'CR39 LENS', file:'cr39-lens.png', index:'1.49 / CR39', coating:'NC / SHMC', material:'CR-39', range:'SPH ±6.00 / CYL -2.00', features:'Clear vision, UV protection, hard coating option'},
  {cat:'single', name:'1.56 ASP BLUE RAY', file:'blueray-156.png', index:'1.56', coating:'SHMC', material:'Resin', range:'SPH -6.00 to +6.00 / CYL -2.00', features:'Blue ray protection, UV protection, comfortable viewing'},
  {cat:'single', name:'1.56 UV450 PHOTO BLUE RAY', file:'uv450-photo-156.png', index:'1.56', coating:'SHMC', material:'Resin', range:'SPH -6.00 to +6.00 / CYL -2.00', features:'UV450 protection, photochromic, blue ray protection'},
  {cat:'single', name:'1.60 ASP BLUE RAY', file:'mr160-blueray.png', index:'1.60', coating:'SHMC', material:'MR-8', range:'SPH -10.00 to +6.00 / CYL up to -6.00', features:'Aspheric, blue ray protection, thin profile'},
  {cat:'single', name:'1.60 ASP PHOTO BLUE RAY', file:'mr160-photo.png', index:'1.60', coating:'SHMC', material:'MR-8', range:'SPH -10.00 to +6.00 / CYL up to -4.00', features:'Photochromic, blue ray protection, aspheric'},
  {cat:'single', name:'1.67 ASP BLUE RAY', file:'mr167-blueray.png', index:'1.67', coating:'SHMC', material:'MR-7 / high index', range:'SPH -12.00 / CYL up to -4.00', features:'High index, blue ray protection, thinner lens'},
  {cat:'single', name:'1.67 ASP PHOTO BLUE RAY', file:'mr167-photo.png', index:'1.67', coating:'SHMC', material:'MR-7 / high index', range:'SPH -12.00 / CYL up to -4.00', features:'Photochromic, blue ray protection, high index'},
  {cat:'single', name:'1.70 ASP BLUE RAY', file:'mr170-blueray.png', index:'1.70', coating:'SHMC', material:'High index', range:'SPH -12.00 / CYL -2.00', features:'Ultra-thin design, blue ray protection'},
  {cat:'single', name:'1.70 ASP PHOTO BLUE RAY', file:'mr170-photo.png', index:'1.70', coating:'SHMC', material:'High index', range:'SPH -12.00 / CYL -2.00', features:'Photochromic, blue ray protection, ultra-thin'},
  {cat:'single', name:'1.74 ASP BLUE RAY', file:'mr174-blueray.png', index:'1.74', coating:'SHMC', material:'Ultra high index', range:'SPH -15.00 / CYL -2.00 to -4.00', features:'Ultra high index, blue ray protection'},
  {cat:'single', name:'1.74 ASP PHOTO BLUE RAY', file:'mr174-photo.png', index:'1.74', coating:'SHMC', material:'Ultra high index', range:'SPH -18.00 / CYL -2.00 to -4.00', features:'Photochromic, blue ray protection, ultra high index'},
  {cat:'progressive', name:'1.56 PROGRESSIVE BLUE RAY', file:'progressive-blueray-156.png', index:'1.56', coating:'SHMC', material:'Resin', range:'SPH +3.00 / -3.00, ADD 1.00~3.00', features:'Progressive design, blue ray protection'},
  {cat:'progressive', name:'1.56 PROGRESSIVE BLUE RAY PHOTO', file:'progressive-blueray-photo-156.png', index:'1.56', coating:'SHMC', material:'Resin', range:'SPH +3.00 / -3.00, ADD 1.00~3.00', features:'Progressive, photochromic, blue ray protection'},
  {cat:'progressive', name:'1.59 POLY PROGRESSIVE BLUE RAY', file:'poly-progressive.png', index:'1.59', coating:'SHMC', material:'Polycarbonate', range:'SPH +3.00 / -2.00, ADD 1.00~3.00', features:'Impact resistant polycarbonate, progressive, blue ray protection'},
  {cat:'progressive', name:'1.59 POLY PROGRESSIVE BLUE RAY PHOTO', file:'poly-progressive-photo.png', index:'1.59', coating:'SHMC', material:'Polycarbonate', range:'SPH +3.00 / -2.00, ADD 1.00~3.00', features:'Polycarbonate, progressive, photochromic, blue ray protection'},
  {cat:'semi', name:'1.60 ASP BLUE RAY SEMI', file:'semi-mr160.png', index:'1.60', coating:'NO-COATING', material:'MR-8', range:'Base: 50B, 200B, 400B, 600B', features:'Semi-finished blank, built-in blue ray material'},
  {cat:'semi', name:'1.60 ASP PHOTO BLUE RAY SEMI', file:'semi-mr160-photo.png', index:'1.60', coating:'SHMC', material:'MR-8', range:'Base: 50B, 200B, 400B, 600B', features:'Semi-finished, photochromic, blue ray, SHMC coating'},
  {cat:'semi', name:'1.67 ASP BLUE RAY SEMI', file:'semi-mr167.png', index:'1.67', coating:'NO-COATING', material:'High index', range:'Base: 50B, 200B, 400B, 600B', features:'Semi-finished blank, built-in blue ray material'},
  {cat:'semi', name:'1.67 ASP PHOTO BLUE RAY SEMI', file:'semi-mr167-photo.png', index:'1.67', coating:'SHMC', material:'High index', range:'Base: 50B, 200B, 400B, 600B', features:'Semi-finished, photochromic, blue ray, SHMC coating'}
];

const grid = document.getElementById('productGrid');
const modal = document.getElementById('productModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalSpecs = document.getElementById('modalSpecs');

const labels = {single:'Single Vision', progressive:'Progressive', semi:'Semi-Finished'};

function render(filter='all'){
  grid.innerHTML = '';
  products.filter(p => filter === 'all' || p.cat === filter).forEach((p) => {
    const card = document.createElement('article');
    card.className = 'card';
    card.dataset.category = p.cat;
    card.innerHTML = `
      <div class="card-img"><img src="assets/products/${p.file}" alt="${p.name}"></div>
      <div class="card-body">
        <h3>${p.name}</h3>
        <div class="meta"><span class="pill">${labels[p.cat]}</span><span class="pill">${p.coating}</span></div>
      </div>`;
    card.addEventListener('click', () => openProduct(p));
    grid.appendChild(card);
  });
}

function openProduct(p){
  modalImage.src = `assets/products/${p.file}`;
  modalImage.alt = p.name;
  modalTitle.textContent = p.name;
  modalCategory.textContent = labels[p.cat];
  modalSpecs.innerHTML = `
    <dt>Index</dt><dd>${p.index}</dd>
    <dt>Coating</dt><dd>${p.coating}</dd>
    <dt>Material</dt><dd>${p.material}</dd>
    <dt>Range</dt><dd>${p.range}</dd>
    <dt>Features</dt><dd>${p.features}</dd>`;
  modal.showModal();
}

document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filters button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    render(btn.dataset.filter);
  });
});

document.querySelector('.close').addEventListener('click', () => modal.close());
document.getElementById('modalQuote').addEventListener('click', () => modal.close());
modal.addEventListener('click', (e) => { if(e.target === modal) modal.close(); });
render();
