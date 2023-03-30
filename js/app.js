const phenoll = document.querySelector('.phenoll')
const text = document.querySelector('.text')
window.addEventListener('scroll', createPosition)
createPosition();

function createPosition() {
  const contentElement = document.querySelector('.work_block');
  const windowHeight = window.innerHeight;
  const finalPos = scrollY / (contentElement.offsetTop - windowHeight) * 100;
  finalPos < 100 ? phenollAnimation(finalPos) : phenollAnimation(100);
  finalPos < 100 ? textAnimation(finalPos) : textAnimation(100);
}

function phenollAnimation(finalPos) {
  const phenollAnim = {
    translate: 20 / 100 * finalPos,
    scale: 1 + 0.3 / 100 * finalPos,
    opacity: 1 - finalPos / 100,
  }
  phenoll.style.cssText = `
    transform:
      translate(0, ${phenollAnim.translate}%)
      scale(${phenollAnim.scale});
    opacity: ${phenollAnim.opacity};
  `;
}

function textAnimation(finalPos) {
  const textAnim = {
    translate: -50 / 100 * finalPos,
    scale: 1 + 0.5 / 100 * finalPos,
    opacity: 1 - finalPos / 100,
  }
  text.style.cssText = `
    transform:
      translate(0, ${textAnim.translate}%)
      scale(${textAnim.scale});
    opacity: ${textAnim.opacity};
  `;
}
