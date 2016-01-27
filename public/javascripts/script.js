  
  var url = 'http://' + window.location.host;

  // cache de objetos de jQuery
  var doc = $(document);
  var win = $(window);
  var canvas = $('#paper');
  var instructions = $('#instructions');
  var connections = $('#connections');
  var ctx = canvas[0].getContext('2d');

  // id único para la session
  var id = Math.round($.now()*Math.random());

  // inicializamos el estado
  var drawing = false;
  var clients = {};
  var cursors = {};
  var prev = {};
  var lastEmit = $.now();
  var cursorColor = randomColor();

  // abrimos la conexion
  var socket = io.connect(url);