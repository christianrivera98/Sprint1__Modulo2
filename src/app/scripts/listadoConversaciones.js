const divsContainer = document.querySelector('#divs-conteiner');
const searchInput = document.getElementById('searchInput');

fetch('db.json')
  .then(response => response.json())
  .then(data => {
    // Limpiar el contenido actual del divs-conteiner
    divsContainer.innerHTML = '';

    // Iterar sobre los datos de los usuarios
    data.usuarios.forEach(usuario => {
    
      const divMensajes = document.createElement('div');
      divMensajes.classList.add('div-mensajes');

      const img = document.createElement('img');
      img.src = usuario.urlFoto;
      img.alt = 'contacto__sinperfil';

      const mensajes = document.createElement('div');
      mensajes.classList.add('mensajes');

      const mensajeUsuario = document.createElement('div');
      mensajeUsuario.classList.add('mensaje-usuario');

      const usuariosVisto = document.createElement('p');
      usuariosVisto.classList.add('usuarios-visto', 'titulo', 'usuarios-no-visto');
      usuariosVisto.textContent = usuario.nombre;


      const visto = document.createElement('span');
      visto.classList.add('visto');
      const vistoIcon = document.createElement('i');
      vistoIcon.classList.add('bi', 'bi-check-all');
      visto.appendChild(vistoIcon);

      const usuarioVisto = document.createElement('span');
      usuarioVisto.classList.add('usuario-visto', 'usuario-no-visto');
      usuarioVisto.textContent = usuario.estado;

      mensajeUsuario.appendChild(usuariosVisto);
      mensajeUsuario.appendChild(visto);
      mensajeUsuario.appendChild(usuarioVisto);

      const horarios = document.createElement('div');
      horarios.classList.add('horarios');

      const horaMensaje = document.createElement('span');
      horaMensaje.classList.add('hora-mensaje');
      horaMensaje.textContent = obtenerHoraMensaje();

      horarios.appendChild(horaMensaje);

      mensajes.appendChild(mensajeUsuario);
      mensajes.appendChild(horarios);

      divMensajes.appendChild(img);
      divMensajes.appendChild(mensajes);


      divsContainer.appendChild(divMensajes);
    });
  });

// Función para obtener la hora del mensaje
function obtenerHoraMensaje() {

  const date = new Date();
  const hora = date.getHours();
  const minutos = date.getMinutes();

  return `${hora}:${minutos}`;
}

