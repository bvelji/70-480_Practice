$(function(){
  jQuery.event.props.push('dataTransfer');
  $(".draggable").on("dragstart", dragging);
  $(".draggable").on("dragend", draggingEnd);
  $(".droptarget").on("dragenter", function(e){e.preventDefault();});
  $(".droptarget").on("dragover", dropOver);
  $(".droptarget").on("drop", drop);
  $(".droptarget").on("dragleave", leaveTarget);



  function dragging(e){
    $(e.target).toggleClass("dragging");
    e.dataTransfer.setData('text/plain', e.target.id);
  }
  function draggingEnd(e){
    $(e.target).toggleClass("dragging");
  }
  function dropOver(e){
    e.preventDefault();
    $(e.target).toggleClass("droppable");
  }
  function leaveTarget(e){
    $(e.target).toggleClass("droppable");
  }
  function drop(e){
    $(e.target).removeClass("droppable");
    var src = $('#' + e.dataTransfer.getData('text/plain'));
    $(e.target).append(src.clone().removeProp("draggable"));
  }


});
