$(document).ready(function() {
  $('.imgwrap').cardify({});
});

(function ($){
  $.fn.cardify = function() {
/*
* envuelve las imagenes en un elemento figure
*/
$('.imgCardify').wrap('<figure class="alt-text"/>');
/*
 *agrega el texto del alt en un figcaption
 */
  $('.imgCardify').each(function() {
    $(this).after('<figcaption class="alt">' + $(this).attr('alt') + '</figcaption>');
  });

  };

})($);