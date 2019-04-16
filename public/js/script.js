//função iniciada ao carregar
function p_click() {
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();
 // carousel();
 w3.slideshow(".slides", 10000);
}


//função da barra de navegação
function fnav() {
  
    var x = document.getElementById("barra-nav");
    
    if (x.className === "topnav") {
      x.className += " responsive";
      
    } else {
      x.className = "topnav";
    }
  }

  //função que muda o tipo de aparelho que vc esta  vendo na pagina de projetos
function device(tipo) {
  var device = document.getElementById("device");
  var content_device = document.getElementById("content_device");
  var frame_device = document.getElementById("frame_device");
  var container = document.getElementById("container");
  device.className = tipo;
  content_device.className = 'content-'+tipo;
  frame_device.className = 'frame-'+tipo;
  container.className = 'container-'+tipo;
  mudaIcone(tipo) //chamei essa função aqui pra não aumentar o codigo da na barra
}
//função que muda a cor dos icones da bara de navegção na pagina de projetos
function mudaIcone(tipo){
  var icones = document.getElementById('nav-ico').children;
  var i; 
  for (i = 0; i < icones.length; i++) {
    if ( icones[i].id == tipo) {
      icones[i].classList = 'icone';
    } else {
      icones[i].classList = '';
    }
  }
}
    //função tab vertical na pagina de inicio
function mudaSkill(evt, skill) {
  var i, inf_skill, tablinks;
  inf_skill = document.getElementsByClassName("inf-skill");
  for (i = 0; i < inf_skill.length; i++) {
    inf_skill[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("link-skill");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className= "link-skill";
  
  }
  document.getElementById(skill).style.display = "block";
  evt.currentTarget.className += " ativo-"+skill;
  // for (i = 0; i < tablinks.length; i++) {
  //   if (tablinks[i].classList.contains("ativo-"+skill)) {
  //     alert("tem"+" ativo-"+skill)
      
  //   }
  //  // tablinks[i].className = tablinks[i].className= "link-skill";
  
  // }

}





