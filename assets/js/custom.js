// make interactive navbar

function toggleBurger(event) {
burger = document.getElementsByClassName('burger')[0];
burgernav = document.querySelector('#'+burger.dataset.target);

burger.classList.toggle('is-active');
burgernav.classList.toggle('is-active');
}

function openTab(event, tabId) {

  // Hid all the content of tabs
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i=0; i<tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  // remove the class is-active
  tablinks = document.getElementsByClassName("tablinks");
  for (i=0; i<tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(' is-active',  '');
  }

  // show the content of tab that is-active
  document.getElementById(tabId).style.display = 'block';
  event.currentTarget.className += ' is-active';
}

function includeHTML() {
  var z, i, elmnt, file, xhttp;
  //loop through a collection of all HTML elements:
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("html-snippet");
    if (file) {
      //make an HTTP request using the attribute value as the file name:
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4) {
          if (this.status == 200) {elmnt.innerHTML = this.responseText;}
          if (this.status == 404) {elmnt.innerHTML = "Page not found.";}
          //remove the attribute, and call this function once more:
          elmnt.removeAttribute("html-snippet");
          includeHTML();
        }
      }      
      xhttp.open("GET", file, true);
      xhttp.send();
      //exit the function:
      return;
    }
  }
};
