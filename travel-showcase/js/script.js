/* ============================================================
   WANDERLUST — script.js  (Final Complete Version)
   ============================================================ */

/* ========================
   DESTINATION DATA
======================== */
const destinations = {
  paris: {
    name: 'Paris, France 🇫🇷',
    price: '$1,299', priceNum: 1299,
    duration: '5 Days / 4 Nights', season: 'April – October', rating: '4.9 / 5.0',
    desc: 'The city of love and lights! Experience the iconic Eiffel Tower glowing at night, stroll through charming Montmartre, enjoy world-class cuisine at riverside bistros, and lose yourself in the Louvre.',
    images: [
      { url: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', label: '🗼 Eiffel Tower, Paris' },
      { url: 'https://images.unsplash.com/photo-1499856871958-5b9357976b82?w=800&q=80', label: '🌆 Paris City Skyline' },
      { url: 'https://images.unsplash.com/photo-1550340499-a6c60fc8287c?w=800&q=80', label: '🍷 Parisian Restaurant & Wine' },
      { url: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=800&q=80', label: '☕ Café Culture, Paris' },
    ]
  },
  bali: {
    name: 'Bali, Indonesia 🇮🇩',
    price: '$899', priceNum: 899,
    duration: '7 Days / 6 Nights', season: 'May – September', rating: '4.8 / 5.0',
    desc: 'A tropical paradise unlike any other. Wake up in lush rice terraces, visit sacred water temples, surf pristine beaches, and experience vibrant Balinese culture. Bali is a journey for the soul.',
    images: [
      { url: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80', label: '🌾 Tegalalang Rice Terraces' },
      { url: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80', label: '🛕 Sacred Tanah Lot Temple' },
      { url: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=800&q=80', label: '🏊 Bali Infinity Pool Resort' },
      { url: 'https://images.unsplash.com/photo-1544550581-1bcabf842b77?w=800&q=80', label: '🌊 Bali Beach & Waves' },
    ]
  },
  tokyo: {
    name: 'Tokyo, Japan 🇯🇵',
    price: '$1,499', priceNum: 1499,
    duration: '8 Days / 7 Nights', season: 'March – May', rating: '4.9 / 5.0',
    desc: 'Where ancient tradition meets breathtaking futurism. Explore neon-lit Shibuya, serene cherry blossom parks, ramen alleyways, and the majestic Mount Fuji.',
    images: [
      { url: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80', label: '🌃 Tokyo Skyline at Night' },
      { url: 'https://images.unsplash.com/photo-1522383225653-4bcd8c65d2cc?w=800&q=80', label: '🌸 Cherry Blossoms, Tokyo' },
      { url: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&q=80', label: '🍜 Authentic Tokyo Ramen' },
      { url: 'https://images.unsplash.com/photo-1554797589-7241bb691973?w=800&q=80', label: '⛩️ Senso-ji Temple' },
    ]
  },
  maldives: {
    name: 'Maldives 🇲🇻',
    price: '$2,199', priceNum: 2199,
    duration: '6 Days / 5 Nights', season: 'November – April', rating: '5.0 / 5.0',
    desc: 'The ultimate luxury escape. Stay in stunning overwater bungalows above crystal-clear lagoons, snorkel with manta rays, watch bioluminescent waves at night, and experience pure paradise.',
    images: [
      { url: 'https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=800&q=80', label: '🏝️ Overwater Bungalows' },
      { url: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80', label: '🐠 Crystal Clear Lagoon' },
      { url: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=800&q=80', label: '🌅 Maldives Sunset' },
      { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', label: '🌊 Pristine Beach' },
    ]
  },
  santorini: {
    name: 'Santorini, Greece 🇬🇷',
    price: '$1,399', priceNum: 1399,
    duration: '5 Days / 4 Nights', season: 'June – September', rating: '4.8 / 5.0',
    desc: 'Iconic white-washed buildings perched on volcanic cliffs, sunsets over the caldera that paint the sky in gold and crimson, and warm Greek hospitality.',
    images: [
      { url: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80', label: '🏛️ Oia Village, Santorini' },
      { url: 'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=800&q=80', label: '🌅 Caldera Sunset View' },
      { url: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=800&q=80', label: '🍷 Cliffside Dining Santorini' },
      { url: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800&q=80', label: '⛵ Aegean Sea Cruise' },
    ]
  },
  kerala: {
    name: "Kerala, India 🇮🇳",
    price: '$499', priceNum: 499,
    duration: '6 Days / 5 Nights', season: 'September – March', rating: '4.9 / 5.0',
    desc: "God's Own Country. Experience Munnar's misty tea gardens, Alleppey's legendary backwater houseboats, Wayanad's jungle trails, and the pristine beaches of Kovalam.",
    images: [
      { url: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80', label: '🌿 Munnar Tea Gardens, Kerala' },
      { url: 'https://images.unsplash.com/photo-1593693411515-c20261bcad6e?w=800&q=80', label: '🛶 Alleppey Backwater Houseboat' },
      { url: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80', label: '🌲 Wayanad Forest, Kerala' },
      { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', label: '🏖️ Kovalam Beach Sunset' },
    ]
  }
};

let currentDestName = '';

/* ========================
   1. NAVBAR SCROLL
======================== */
const navbar = document.getElementById('mainNav');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
    handleScrollTopBtn();
  });
}

/* ========================
   2. SCROLL ANIMATIONS
======================== */
const animObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => animObserver.observe(el));

/* ========================
   3. DESTINATION MODAL
======================== */
function openDestModal(key) {
  const d = destinations[key];
  if (!d) return;
  currentDestName = d.name;

  document.getElementById('destModalTitle').textContent = d.name;
  document.getElementById('destModalDesc').textContent = d.desc;
  document.getElementById('destPrice').textContent = d.price + ' per person';
  document.getElementById('destDuration').textContent = d.duration;
  document.getElementById('destSeason').textContent = 'Best: ' + d.season;
  document.getElementById('destRating').textContent = d.rating;

  // Build carousel
  const indicators = document.getElementById('carouselIndicators');
  const inner = document.getElementById('carouselInner');
  indicators.innerHTML = '';
  inner.innerHTML = '';

  d.images.forEach((img, i) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('data-bs-target', '#destCarousel');
    dot.setAttribute('data-bs-slide-to', i);
    dot.setAttribute('aria-label', 'Slide ' + (i + 1));
    if (i === 0) { dot.classList.add('active'); dot.setAttribute('aria-current', 'true'); }
    indicators.appendChild(dot);

    const slide = document.createElement('div');
    slide.className = 'carousel-item' + (i === 0 ? ' active' : '');
    slide.style.position = 'relative';
    slide.innerHTML = `
      <img src="${img.url}" alt="${img.label}" style="width:100%;height:320px;object-fit:cover;"/>
      <div style="position:absolute;bottom:0;left:0;right:0;background:linear-gradient(to top,rgba(0,0,0,0.75),transparent);padding:18px;">
        <p style="margin:0;color:rgba(255,255,255,0.9);font-size:0.85rem;font-family:'Poppins',sans-serif;"><i class="bi bi-camera-fill me-2"></i>${img.label}</p>
      </div>`;
    inner.appendChild(slide);
  });

  new bootstrap.Modal(document.getElementById('destModal')).show();
}

function bookFromDest() {
  bootstrap.Modal.getInstance(document.getElementById('destModal'))?.hide();
  setTimeout(() => openBookingModal(currentDestName), 400);
}

/* ========================
   4. BOOKING MODAL
======================== */
function openBookingModal(prefillDest = '') {
  goStep(1, true);
  if (prefillDest) {
    setTimeout(() => {
      const sel = document.getElementById('bkDestination');
      if (!sel) return;
      for (let i = 0; i < sel.options.length; i++) {
        if (sel.options[i].text.toLowerCase().includes(prefillDest.toLowerCase().split(',')[0].trim().toLowerCase())) {
          sel.selectedIndex = i; break;
        }
      }
    }, 100);
  }
  const today = new Date().toISOString().split('T')[0];
  const dateEl = document.getElementById('bkDate');
  if (dateEl) dateEl.setAttribute('min', today);
  new bootstrap.Modal(document.getElementById('bookingModal')).show();
}

function goStep(step, silent = false) {
  if (!silent && step > 1) {
    if (step === 2 && !validateStep1()) return;
    if (step === 3 && !validateStep2()) return;
  }
  ['bookStep1','bookStep2','bookStep3'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  ['step1dot','step2dot','step3dot'].forEach((id, i) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', i + 1 === step);
  });
  const stepEl = document.getElementById('bookStep' + step);
  if (stepEl) stepEl.style.display = 'block';
  if (step === 3) buildSummary();
}

function validateStep1() {
  const name = document.getElementById('bkName')?.value.trim();
  const email = document.getElementById('bkEmail')?.value.trim();
  const phone = document.getElementById('bkPhone')?.value.trim();
  const address = document.getElementById('bkAddress')?.value.trim();
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name) { highlightError('bkName', 'Please enter your full name'); return false; }
  if (!email || !emailReg.test(email)) { highlightError('bkEmail', 'Please enter a valid email'); return false; }
  if (!phone || phone.length < 7) { highlightError('bkPhone', 'Please enter a valid phone number'); return false; }
  if (!address) { highlightError('bkAddress', 'Please enter your address'); return false; }
  return true;
}

function validateStep2() {
  const dest = document.getElementById('bkDestination')?.value;
  const date = document.getElementById('bkDate')?.value;
  const days = document.getElementById('bkDays')?.value;
  const persons = document.getElementById('bkPersons')?.value;
  const transport = document.querySelector('input[name="transport"]:checked');
  if (!dest) { highlightError('bkDestination', 'Please select a destination'); return false; }
  if (!date) { highlightError('bkDate', 'Please select a travel date'); return false; }
  if (!days || days < 1) { highlightError('bkDays', 'Please enter number of days'); return false; }
  if (!persons || persons < 1) { highlightError('bkPersons', 'Please enter number of travelers'); return false; }
  if (!transport) { showToast('⚠ Please select a mode of transport', 'error'); return false; }
  return true;
}

function highlightError(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.borderColor = '#e74c3c';
  el.style.boxShadow = '0 0 0 3px rgba(231,76,60,0.15)';
  el.focus();
  showToast('⚠ ' + msg, 'error');
  setTimeout(() => { el.style.borderColor = ''; el.style.boxShadow = ''; }, 2500);
}

function getPriceNum(destName) {
  const match = Object.values(destinations).find(d =>
    d.name.toLowerCase().includes(destName.toLowerCase().split(',')[0].trim())
  );
  return match ? match.priceNum : 999;
}

function buildSummary() {
  const name = document.getElementById('bkName')?.value.trim() || '';
  const email = document.getElementById('bkEmail')?.value.trim() || '';
  const phone = document.getElementById('bkPhone')?.value.trim() || '';
  const address = document.getElementById('bkAddress')?.value.trim() || '';
  const dest = document.getElementById('bkDestination')?.value || '';
  const date = document.getElementById('bkDate')?.value || '';
  const days = document.getElementById('bkDays')?.value || '0';
  const persons = document.getElementById('bkPersons')?.value || '1';
  const transport = document.querySelector('input[name="transport"]:checked')?.value || '';
  const price = getPriceNum(dest);
  const total = price * parseInt(persons);
  const dateFormatted = date ? new Date(date).toLocaleDateString('en-US', { weekday:'long', year:'numeric', month:'long', day:'numeric' }) : '';

  document.getElementById('bookingSummary').innerHTML = `
    <div class="summary-row"><span class="summary-label"><i class="bi bi-person-fill"></i> Traveler</span><span class="summary-value">${name}</span></div>
    <div class="summary-row"><span class="summary-label"><i class="bi bi-envelope-fill"></i> Email</span><span class="summary-value">${email}</span></div>
    <div class="summary-row"><span class="summary-label"><i class="bi bi-telephone-fill"></i> Phone</span><span class="summary-value">${phone}</span></div>
    <div class="summary-row"><span class="summary-label"><i class="bi bi-geo-alt-fill"></i> Address</span><span class="summary-value">${address}</span></div>
    <div class="summary-row"><span class="summary-label"><i class="bi bi-map-fill"></i> Destination</span><span class="summary-value">${dest}</span></div>
    <div class="summary-row"><span class="summary-label"><i class="bi bi-calendar-event"></i> Travel Date</span><span class="summary-value">${dateFormatted}</span></div>
    <div class="summary-row"><span class="summary-label"><i class="bi bi-moon-stars"></i> Duration</span><span class="summary-value">${days} Days</span></div>
    <div class="summary-row"><span class="summary-label"><i class="bi bi-people-fill"></i> Travelers</span><span class="summary-value">${persons} Person(s)</span></div>
    <div class="summary-row"><span class="summary-label"><i class="bi bi-send-fill"></i> Transport</span><span class="summary-value">${transport}</span></div>
    <div class="summary-total">
      <span class="label">💰 Total Estimated Cost</span>
      <span class="amount">$${total.toLocaleString()}</span>
    </div>`;
}

function submitBooking() {
  const name = document.getElementById('bkName')?.value.trim() || '';
  const email = document.getElementById('bkEmail')?.value.trim() || '';
  const dest = document.getElementById('bkDestination')?.value || '';
  const date = document.getElementById('bkDate')?.value || '';
  const days = document.getElementById('bkDays')?.value || '0';
  const persons = document.getElementById('bkPersons')?.value || '1';
  const transport = document.querySelector('input[name="transport"]:checked')?.value || '';
  const price = getPriceNum(dest);
  const total = price * parseInt(persons);
  const dateFormatted = date ? new Date(date).toLocaleDateString('en-US', { month:'long', day:'numeric', year:'numeric' }) : '';

  bootstrap.Modal.getInstance(document.getElementById('bookingModal'))?.hide();
  setTimeout(() => {
    document.getElementById('successDetails').innerHTML = `
      <div class="success-detail-row"><span class="sk">👤 Name</span><span class="sv">${name}</span></div>
      <div class="success-detail-row"><span class="sk">📧 Email</span><span class="sv">${email}</span></div>
      <div class="success-detail-row"><span class="sk">🗺️ Destination</span><span class="sv">${dest}</span></div>
      <div class="success-detail-row"><span class="sk">📅 Date</span><span class="sv">${dateFormatted}</span></div>
      <div class="success-detail-row"><span class="sk">🌙 Duration</span><span class="sv">${days} Days</span></div>
      <div class="success-detail-row"><span class="sk">👥 Travelers</span><span class="sv">${persons} Person(s)</span></div>
      <div class="success-detail-row"><span class="sk">🚀 Transport</span><span class="sv">${transport}</span></div>
      <div class="success-detail-row"><span class="sk">💰 Total</span><span class="sv" style="font-size:1.1rem;color:var(--primary);">$${total.toLocaleString()}</span></div>`;
    document.getElementById('successOverlay').style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }, 400);
}

function closeSuccess() {
  document.getElementById('successOverlay').style.display = 'none';
  document.body.style.overflow = '';
  ['bkName','bkEmail','bkPhone','bkAddress','bkDays','bkPersons','bkDate'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  const sel = document.getElementById('bkDestination');
  if (sel) sel.selectedIndex = 0;
  document.querySelectorAll('input[name="transport"]').forEach(r => r.checked = false);
  goStep(1, true);
}

/* ========================
   5. NEWSLETTER
======================== */
function handleSubscribe() {
  const input = document.getElementById('newsletterEmail');
  if (!input) return;
  const email = input.value.trim();
  const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (emailReg.test(email)) {
    input.value = '';
    input.placeholder = '🎉 Subscribed! Thank you!';
    input.style.borderColor = '#2d6a4f';
    showToast('✈ Welcome aboard! Exclusive deals coming your way!', 'success');
    setTimeout(() => { input.placeholder = 'Enter your email address...'; input.style.borderColor = ''; }, 3500);
  } else {
    input.style.borderColor = '#e74c3c';
    showToast('⚠ Please enter a valid email address.', 'error');
    setTimeout(() => { input.style.borderColor = ''; }, 2500);
  }
}

/* ========================
   6. TOAST NOTIFICATION
======================== */
function showToast(message, type = 'success') {
  const existing = document.querySelector('.toast-notification');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'toast-notification';
  if (type === 'error') toast.style.borderLeftColor = '#e74c3c';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('hiding');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

/* ========================
   7. SCROLL TO TOP
======================== */
const scrollTopBtn = document.getElementById('scrollTop');
function handleScrollTopBtn() {
  if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}
if (scrollTopBtn) scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

/* ========================
   8. SMOOTH SCROLL NAV
======================== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const targetId = anchor.getAttribute('href');
    if (targetId === '#') return;
    const target = document.querySelector(targetId);
    if (!target) return;
    e.preventDefault();
    const navCollapse = document.querySelector('.navbar-collapse');
    if (navCollapse?.classList.contains('show')) {
      bootstrap.Collapse.getInstance(navCollapse)?.hide();
    }
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
  });
});

/* ========================
   9. ACTIVE NAV HIGHLIGHT
======================== */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');
window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(s => { if (window.scrollY >= s.offsetTop - 120) current = s.getAttribute('id'); });
  navLinks.forEach(link => {
    link.classList.toggle('active-nav', link.getAttribute('href') === '#' + current);
  });
});
const activeStyle = document.createElement('style');
activeStyle.textContent = `.active-nav { color: var(--primary) !important; } .active-nav::after { width: 100% !important; }`;
document.head.appendChild(activeStyle);

/* ========================
   10. NAV DROPDOWN STYLES
======================== */
const dropdownStyle = document.createElement('style');
dropdownStyle.textContent = `
  .nav-dropdown { background: rgba(13,17,23,0.98) !important; border: 1px solid var(--glass-border) !important; border-radius: 12px !important; backdrop-filter: blur(14px); padding: 8px !important; min-width: 180px; }
  .nav-dropdown .dropdown-item { color: var(--text-muted) !important; font-size: 0.85rem; padding: 10px 16px; border-radius: 8px; transition: all 0.2s; }
  .nav-dropdown .dropdown-item:hover { background: rgba(232,168,124,0.12) !important; color: var(--primary) !important; }
`;
document.head.appendChild(dropdownStyle);

/* ========================
   11. GALLERY LIGHTBOX
======================== */
document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img = item.querySelector('img');
    const label = item.querySelector('.gallery-overlay-text');
    if (!img) return;
    const lb = document.createElement('div');
    lb.style.cssText = `position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.94);display:flex;align-items:center;justify-content:center;flex-direction:column;gap:16px;cursor:zoom-out;animation:fadeIn 0.3s ease;`;
    lb.innerHTML = `
      <img src="${img.src}" style="max-width:92vw;max-height:82vh;border-radius:16px;box-shadow:0 30px 80px rgba(0,0,0,0.6);object-fit:contain;"/>
      <p style="color:rgba(255,255,255,0.75);font-size:0.9rem;font-family:'Poppins',sans-serif;">${label?.textContent || ''}</p>
      <small style="color:rgba(255,255,255,0.3);font-size:0.72rem;">Click anywhere or press ESC to close</small>`;
    document.body.appendChild(lb);
    document.body.style.overflow = 'hidden';
    const close = () => { lb.style.opacity='0'; setTimeout(()=>{ lb.remove(); document.body.style.overflow=''; },200); };
    lb.addEventListener('click', close);
    document.addEventListener('keydown', function esc(e) { if(e.key==='Escape'){ close(); document.removeEventListener('keydown',esc); } });
  });
});

/* ========================
   12. CARD TILT EFFECT
======================== */
document.querySelectorAll('.destination-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const rX = ((e.clientY - rect.top - rect.height / 2) / (rect.height / 2)) * -4;
    const rY = ((e.clientX - rect.left - rect.width / 2) / (rect.width / 2)) * 4;
    card.style.transform = `translateY(-14px) rotateX(${rX}deg) rotateY(${rY}deg)`;
    card.style.transition = 'transform 0.1s ease';
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.transition = 'all 0.4s ease';
  });
});

/* Newsletter Enter key */
const ni = document.getElementById('newsletterEmail');
if (ni) ni.addEventListener('keydown', e => { if (e.key === 'Enter') handleSubscribe(); });

console.log('%c✈ Wanderlust — Ready!', 'color:#e8a87c;font-size:14px;font-weight:bold;');
