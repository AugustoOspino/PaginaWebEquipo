document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Mensaje enviado. ¡Gracias por contactarnos!');
  this.reset();
});
