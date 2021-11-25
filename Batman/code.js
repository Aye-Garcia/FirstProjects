const cambiarTema = document.querySelector('.switch');
cambiarTema.addEventListener("click", alternarColorTema);

function alternarColorTema() {
   
    const sitio = document.querySelector('#sitio');
    const cambio = sitio.classList.contains('dark');
  
    if (cambio) {
      sitio.classList.remove('dark')
    } else {
      sitio.classList.add('dark');
    }
  
  }