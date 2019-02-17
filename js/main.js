var newRectObject, newRectObject2;

$(document).ready(function(){

  $('img#photo').imgAreaSelect({
      handles: true,
      onSelectEnd:  function (img, selection) {
        $('input[name="x1"]').val(selection.x1);
        $('input[name="y1"]').val(selection.y1);
        $('input[name="x2"]').val(selection.x2);
        $('input[name="y2"]').val(selection.y2);
      }
  });

  $('#agregar').click(function(e){
    e.preventDefault();

    newRectObject = createRect($('input[name="x1"]').val(), $('input[name="y1"]').val(), $('input[name="x2"]').val(), $('input[name="y2"]').val(), $('input[name="name"]').val(), $('input[name="color"]').val());

    newRectObject2 = createRect($('input[name="x1"]').val(), $('input[name="y1"]').val(), $('input[name="x2"]').val(), $('input[name="y2"]').val(), $('input[name="name"]').val(), $('input[name="color"]').val());

    $('#rect-group').append(newRectObject);
    $('#rect-group-2').append(newRectObject2);

    $('[data-toggle="tooltip"]').tooltip();

    $(".rect").on('click',function(){
      $('#myModal').modal('show');
    });
  });

  $('[data-toggle="tooltip"]').tooltip();

  $(".rect").on('click',function(){
    $('#myModal').modal('show');
  });

});


function createRect(x1,y1,x2,y2,name,color){
  var rect = document.createElementNS("http://www.w3.org/2000/svg","rect");
  rect.setAttribute("class", "rect");
  rect.setAttribute("x",x1);
  rect.setAttribute("y",y1);
  rect.setAttribute("data-Name",name);
  rect.setAttribute("data-tabindex",1);
  rect.setAttribute("style",`fill: ${color}; stroke: green; stroke-width: 1mm; width:${x2-x1}; height:${y2-y1}`);
  rect.setAttribute("data-toggle", "tooltip");
  rect.setAttribute("data-placement", "top");
  rect.setAttribute("title", name);

  return rect;
}
