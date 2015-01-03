$(document).ready(function(){
  $("article p:has(img)").addClass('image');
  $("article p:has(img.img-full)").addClass('image-full');
});
