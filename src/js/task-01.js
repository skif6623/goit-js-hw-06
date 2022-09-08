const ulRef = document.querySelector('#categories');

console.log('Number of categories', ulRef.children.length);

const liRef = ulRef.querySelectorAll('.item');

liRef.forEach(liEl => {
  console.log('Category:', liEl.querySelector('h2').textContent);
  console.log('Elements:', liEl.querySelectorAll('li').length);
});
