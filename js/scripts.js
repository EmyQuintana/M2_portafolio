// ====================================================================
// JAVASCRIPT Y JQUERY PARA DINAMISMO
// ====================================================================

// Asegura que el código JQuery se ejecute una vez que el DOM esté completamente cargado
$(document).ready(function () {
    
    // --- a) EFECTO DE FADE EN ICONOS (Requisito de JQuery) ---
    // Selecciona todos los elementos <i> (iconos de Bootstrap) y les aplica un efecto de parpadeo al cargar
    $('i').fadeIn(350).fadeOut(350).fadeIn(350);


    // --- b) MOSTRAR/OCULTAR DESCRIPCIÓN DETALLADA (Requisito de JQuery) ---
    // Al hacer clic en el encabezado de cualquier tarjeta:
    $('.card-header').on('click', function() {
        
        // 1. Alterna el efecto de slide (muestra/oculta) en el párrafo con la clase 'descripcion-detallada'
        $(this).closest('.card').find('.descripcion-detallada').slideToggle(300);
        
        // 2. Opcional: Cambia la clase de color del borde al hacer clic (Terracota <-> Esmeralda)
        // La clase 'border-primary' se alterna con 'border-acento-secundario' (que debes definir en CSS si quieres un efecto visual)
        // Para este ejemplo, solo alternamos con una clase temporal:
        $(this).closest('.card').toggleClass('border-secondary-color');
    });

    // Ajuste visual para indicar que los headers son clickeables
    $('.card-header').css('cursor', 'pointer'); 
    
    
    // --- c) EVENTO SENCILLO CON JAVASCRIPT PURO (Requisito de JS Nativo) ---
    // Usamos el botón de "Descargar CV" con ID #btn-cv-download
    const downloadLink = document.getElementById('btn-cv-download');

    if (downloadLink) {
        // Usa JS puro para un evento de clic
        downloadLink.addEventListener('click', function(e) {
            e.preventDefault(); // Evita que el enlace salte a '#'
            // Muestra una alerta simple para demostrar el evento JS Nativo
            alert('Activando funcionalidad de JS Nativo: ¡Descarga del CV iniciada!');
        });
    }

});

// NOTA: Se ELIMINÓ la inicialización de particlesJS para cumplir con la solicitud.