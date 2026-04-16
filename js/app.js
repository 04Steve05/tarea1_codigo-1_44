$(document).ready(function () {

  /* ===== Tarea 9: Bienvenida con localStorage ===== */
  if (!localStorage.getItem('cpWelcomeShown')) {
    var bienvenidaModal = new bootstrap.Modal(document.getElementById('modalBienvenida'));
    bienvenidaModal.show();
    localStorage.setItem('cpWelcomeShown', 'true');
  }

  /* ===== Tarea 5: Spinner + retraso artificial de 5 segundos ===== */
  $('#spinner-container').show();
  $('#lista-peliculas').hide();

  setTimeout(function () {
    cargarPeliculas();
  }, 5000);

  /* ===== Tarea 8: Cerrar modal tráiler — limpiar src del iframe ===== */
  $('#modalTrailer').on('hidden.bs.modal', function () {
    $('#trailerFrame').attr('src', '');
  });

  /* Navegar a detalle guardando el id en sessionStorage */
  $(document).on('click', '.btn-ver-detalle', function () {
    sessionStorage.setItem('cpMovieId', $(this).data('id'));
    window.location.href = '/pages/detalle.html';
  });

  /* Abrir modal de tráiler al hacer click en el botón */
  $(document).on('click', '.btn-ver-trailer', function () {
    var url    = $(this).data('trailer');
    var titulo = $(this).data('titulo');
    $('#trailerModalLabel').text('Tráiler: ' + titulo);
    $('#trailerFrame').attr('src', url);
    var trailerModal = new bootstrap.Modal(document.getElementById('modalTrailer'));
    trailerModal.show();
  });

});

/* ===== Función auxiliar: ¿película en estreno? (≤ 30 días) ===== */
function esEstreno(fechaEstreno) {
  var hoy    = new Date();
  var estreno = new Date(fechaEstreno);
  var diff   = Math.floor((hoy - estreno) / (1000 * 60 * 60 * 24));
  return diff <= 30;
}

/* ===== Tarea 2: Cargar películas con AJAX y renderizar ===== */
function cargarPeliculas() {
  $.ajax({
    url: 'data/peliculas.json',
    method: 'GET',
    dataType: 'json',
    success: function (peliculas) {
      $('#spinner-container').hide();
      $('#lista-peliculas').show();

      peliculas.forEach(function (peli, index) {
        /* Tarea 4 (lógica de precio): badge y precio según fecha de estreno */
        var nuevo  = esEstreno(peli.estreno);
        var precio = nuevo ? peli.precios.estreno : peli.precios.normal;
        var badge  = nuevo
          ? '<span class="badge bg-success ms-1">ESTRENO</span>'
          : '<span class="badge bg-primary ms-1">EN CARTELERA</span>';

        var card = $('<div class="col-sm-6 col-md-4 col-lg-3 mb-4"></div>').html(
          '<div class="card h-100 shadow">' +
            '<img src="' + peli.imagen + '" class="card-img-top" alt="' + peli.titulo + '">' +
            '<div class="card-body d-flex flex-column">' +
              '<div class="d-flex justify-content-between align-items-start mb-1">' +
                '<h5 class="card-title mb-0">' + peli.titulo + '</h5>' +
                badge +
              '</div>' +
              '<p class="card-text">' + peli.generos.join(', ') + '</p>' +
              '<p class="precio-pelicula mb-3">$' + precio.toFixed(2) + '</p>' +
              '<div class="mt-auto d-flex gap-2">' +
                '<button class="btn btn-primary btn-sm flex-grow-1 btn-ver-detalle" data-id="' + peli.id + '">Ver más</button>' +
                '<button class="btn btn-danger btn-sm btn-ver-trailer"' +
                  ' data-trailer="' + peli.trailer + '"' +
                  ' data-titulo="' + peli.titulo + '">' +
                  'Ver Tráiler' +
                '</button>' +
              '</div>' +
            '</div>' +
          '</div>'
        );

        /* Tarea 10: fadeIn escalonado */
        card.hide();
        $('#lista-peliculas').append(card);
        setTimeout(function () {
          card.fadeIn(700);
        }, index * 180);
      });
    },
    error: function () {
      $('#spinner-container').hide();
      $('#lista-peliculas').html(
        '<div class="col-12">' +
          '<div class="alert alert-danger text-center">' +
            'No se pudo cargar la lista de películas. Intenta nuevamente más tarde.' +
          '</div>' +
        '</div>'
      ).show();
    }
  });
}
