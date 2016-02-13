var images = document.querySelectorAll('.photos img');
images = Array.prototype.slice.call(images);

images.forEach(function(image) {
  image.addEventListener('click', function() {
    window.open(image.src);
  });
})
