  
  //Cuando cargue la página completamente
  $(document).ready(function(){
    //Creamos un evento click para el enlace
    $(".ancla").click(function(evento){
      //Anulamos la funcionalidad por defecto del evento
      evento.preventDefault();
      //Creamos el string del enlace ancla
      let codigo = "#" + $(this).data("ancla");
      //Funcionalidad de scroll para el enlace ancla en 1 segundo
      $("html,body").animate({scrollTop: $(codigo).offset().top}, 1500);
    });
  });