function updateDom() {
  const nav = document.querySelector('.nav-items');
  const items = nav.querySelectorAll('li a');
  const targets = document.querySelectorAll('.Main');
  items.forEach((item) => {
    item.addEventListener('click', () => {
      targets.forEach((elm) => {
        elm.style.display = 'none';
      });
      const target = item.getAttribute('data-target');
      const targetElm = document.querySelector(target);
      targetElm.style.display = 'flex';
      items.forEach((li) => {
        li.style.color = 'black';
      });
      item.style.color = 'blue';
    });
  });
}

export default updateDom;