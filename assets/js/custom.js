// include HTML snippet
function includeHTML() {
    for (var t, e, n, s = document.getElementsByTagName("*"), i = 0; i < s.length; i++)
        if (e = (t = s[i]).getAttribute("html-snippet")) return (n = new XMLHttpRequest).onreadystatechange = function() {
            4 == this.readyState && (200 == this.status && (t.innerHTML = this.responseText), 404 == this.status && (t.innerHTML = "Page not found."), t.removeAttribute("html-snippet"), includeHTML())
        }, n.open("GET", e, !0), void n.send()
};

// make interactive navbar
function toggleBurger(event) {
  burger = document.getElementsByClassName('burger')[0];
  burgernav = document.querySelector('#'+burger.dataset.target);

  burger.classList.toggle('is-active');
  burgernav.classList.toggle('is-active');
};

// interactive tap in the front page
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
};

// toggle dark and light mode
function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
};


