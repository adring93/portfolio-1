document.querySelectorAll('.project-card').forEach(function(card) {
  card.addEventListener('click', function(e) {
    if(e.target.tagName === 'A') return;
    var img = card.querySelector('.project-image');
    var src = img.getAttribute('src');
    var alt = img.getAttribute('alt');
    var modalBg = document.createElement('div');
    modalBg.className = 'modal-bg';
    var modalImgBox = document.createElement('div');
    modalImgBox.className = 'modal-img-box';
    var modalImg = document.createElement('img');
    modalImg.src = src;
    modalImg.alt = alt;
    modalImg.className = 'modal-img-full';
    var closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close-btn';
    closeBtn.setAttribute('aria-label', 'Close image');
    closeBtn.innerHTML = '&times;';
    modalImgBox.appendChild(closeBtn);
    modalImgBox.appendChild(modalImg);
    modalBg.appendChild(modalImgBox);
    document.body.appendChild(modalBg);
    document.body.classList.add('blurred-bg');
    closeBtn.addEventListener('click', function() {
      modalBg.remove();
      document.body.classList.remove('blurred-bg');
    });
    modalBg.addEventListener('click', function(ev) {
      if(ev.target === modalBg) {
        modalBg.remove();
        document.body.classList.remove('blurred-bg');
      }
    });
    document.addEventListener('keydown', function escListener(ev) {
      if(ev.key === 'Escape') {
        modalBg.remove();
        document.body.classList.remove('blurred-bg');
        document.removeEventListener('keydown', escListener);
      }
    });
  });
});

var quotes = [
  {text: 'Creativity is intelligence having fun.', author: '- Albert Einstein'},
  {text: 'The only way to do great work is to love what you do.', author: '- Steve Jobs'},
  {text: 'Learning never exhausts the mind.', author: '- Leonardo da Vinci'},
  {text: 'Simplicity is the soul of efficiency.', author: '- Austin Freeman'}
];

var quoteIndex = 0;
var quoteSection = document.querySelector('.quote-section');
var blockquote = quoteSection.querySelector('blockquote');
var cite = quoteSection.querySelector('cite');

function showQuote(idx) {
  blockquote.textContent = quotes[idx].text;
  cite.textContent = quotes[idx].author;
}
showQuote(quoteIndex);

setInterval(function() {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  quoteSection.classList.add('fadeout');
  setTimeout(function() {
    showQuote(quoteIndex);
    quoteSection.classList.remove('fadeout');
  }, 400);
}, 5500);