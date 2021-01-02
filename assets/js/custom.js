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
