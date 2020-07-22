function static() {
    $('#dot').css('border-color', 'transparent');
    $('#dot.active').noisy({
      'intensity' : 1, 
      'size' : 1000, 
      'opacity' : 1, 
      'fallback' : '', 
      'monochrome' : true
    }).css('background-color', '#fff');
    
  }
  
  static();
  
  $('body').click(function onOff(){
    $('#dot').toggleClass('active');
  });