document.addEventListener('DOMContentLoaded', () => {
  //evitamos buscar elementos que no existan aun
  const navLinks = document.querySelectorAll('.navbar-link')
  const articles = document.querySelectorAll('article[data-page]')

  navLinks.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      // quitar 'active' de todos los botones y articulos
      navLinks.forEach(btnNav => btnNav.classList.remove('active'))
      articles.forEach(article => article.classList.remove('active'))
      //**se podria agregar un '?' para algo menos agresivo */

      // agregar 'active' al boton y articulo correspondiente
      btn.classList.add('active')
      articles[idx].classList.add('active')
    });
  });
});