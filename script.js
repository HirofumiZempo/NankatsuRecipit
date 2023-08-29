// スライドを動的に生成
const slideContainer = document.getElementById('slides');
for (let i = 0; i <= 118; i++) {
  const fileNameIndex = i + 1;
  const zeroFilled = String(fileNameIndex).padStart(3, '0');
  const slide = document.createElement('div');
  slide.className = 'slide';
  const img = document.createElement('img');
  img.src = `png/NankatsuRecipit_ページ_${zeroFilled}.png`;
  img.alt = `スライド${i}`;
  slide.appendChild(img);
  slideContainer.appendChild(slide);
}

let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides[currentSlide].style.display = 'none';
  slides[index].style.display = 'block';
  currentSlide = index;
  document.getElementById('pageNumber').value = index;
}

function nextSlide() {
  let nextSlideIndex = (currentSlide + 1) % slides.length;
  showSlide(nextSlideIndex);
}

function prevSlide() {
  let prevSlideIndex = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(prevSlideIndex);
}

function jumpToSlide() {
  const pageNumber = parseInt(document.getElementById('pageNumber').value, 10);
  const index = pageNumber;
  if (index >= 0 && index < slides.length) {
    showSlide(index);
  }
}

function showTableOfContents() {
  showSlide(1);  // もくじに該当する1ページ目にジャンプ
}

// 初期スライドを表示
showSlide(0);
