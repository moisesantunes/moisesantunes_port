function fnav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  function device(tipo) {
 // alert(tipo)
    var device = document.getElementById("device");
    var content_device = document.getElementById("content_device");
    var frame_device = document.getElementById("frame_device");
    var container = document.getElementById("container");
      device.className = tipo;
      content_device.className = 'content-'+tipo;
      frame_device.className = 'frame-'+tipo;
      container.className = 'container-'+tipo;
    mudaIcone(tipo)
  }
  function mudaIcone(tipo){
    var tipo1 = document.getElementById(tipo)
    var icones = document.getElementById('nav-ico').children;
   // icone.className= 'icone';
    var i;
    
    for (i = 0; i < icones.length; i++) {
      if ( icones[i].id == tipo) {
       icones[i].classList = 'icone';
       
      } else {
        icones[i].classList = '';
      }
     
    }
   
  }