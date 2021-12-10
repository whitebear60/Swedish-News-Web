let ev = document.addEventListener("DOMContentLoaded", () => {

  let nav = document.querySelector('ul.main-nav');
  let navList = [{
    "name": "Головна",
    "href": "/Swedish-News-Web/",
    "blank": false
  }, {
    "name": "Вікі Дрімленду",
    "href": "http://esderu.fandom.com/uk/wiki/Dreamland",
    "blank": true
  }, {
    "name": "Скарб генерала Авууу!",
    "href": "http://esderu.fandom.com/uk/wiki/Скарб_генерала_Авууу!",
    "blank": true
  }]
  navList.forEach(elem => {
    const navLink = document.createElement("a");
    navLink.href = elem.href;
    navLink.textContent = elem.name;
    if (elem.blank) {
      navLink.setAttribute("target", "_blank")
      navLink.setAttribute("rel", "noopener noreferrer")
    }
    const li = document.createElement("li")
    li.appendChild(navLink)
    nav.appendChild(li)
  })

  document.querySelectorAll(['img.mc-item', 'img.mc-entity', 'img.captd']).forEach((elem) => {
    elem.setAttribute('title', elem.getAttribute('alt'))
  })
  // document.querySelectorAll('img.mc-entity').forEach((elem) => {
  //   elem.setAttribute('title', elem.getAttribute('alt'))
  // })

  // let aboutBtnListener = document.querySelector('#about-btn').addEventListener("click", () => {
  //   window.location.href = window.location.href + 'about.html'
  // })

let hrefAppend = str => {
  if(window.location.href.endsWith("#")) { 
    let href = window.location.href;
    window.location.href = href.replace(/.$/, "") + str;
  } else {
    window.location.href = window.location.href + str;
}
}


let modal = $('#newspaper-list').iziModal({
  title: 'Список випусків "Шведського віснику"',
  subtitle: 'Не всі ранні випуски газети доступні у веб-версії',
  headerColor: 'linear-gradient(90deg, rgba(0,230,171,1) 0%, rgba(0,212,255,1) 100%)',
  icon: 'fas fa-scroll',
  transitionIn:	'comingIn', //	Modal opening default transition. Can be: comingIn, bounceInDown, bounceInUp, fadeInDown, fadeInUp, fadeInLeft, fadeInRight, flipInX.
  transitionOut:	'bounceOutUp', // 	Modal closing default transition. Can be: comingOut, bounceOutDown, bounceOutUp, fadeOutDown, fadeOutUp, , fadeOutLeft, fadeOutRight, flipOutX.
  // transitionInOverlay: 'bounceInDown',
  transitionOutOverlay: 'bounceOutDown',
});
let usefulModal = $('#useful').iziModal({
    title: 'Корисне для гри на Дрімленді',
    // subtitle: 'Не всі ранні випуски газети доступні у веб-версії',
    headerColor: 'linear-gradient(90deg, rgba(0,230,171,1) 0%, rgba(0,212,255,1) 100%)',
    icon: 'fas fa-scroll',
    transitionIn:	'comingIn', //	Modal opening default transition. Can be: comingIn, bounceInDown, bounceInUp, fadeInDown, fadeInUp, fadeInLeft, fadeInRight, flipInX.
    transitionOut:	'bounceOutUp', // 	Modal closing default transition. Can be: comingOut, bounceOutDown, bounceOutUp, fadeOutDown, fadeOutUp, , fadeOutLeft, fadeOutRight, flipOutX.
    // transitionInOverlay: 'bounceInDown',
    transitionOutOverlay: 'bounceOutDown',
});

  let newsBtnListener = document.querySelector('#about-btn').addEventListener("click", () => {
      hrefAppend('about.html');
  })


  // document.querySelectorAll('.news-btn').forEach((elem) => {
  //   console.log(elem)
  //   })

  // let b;
  // let c = null;
  // let d = {data: null}
  // var client = new XMLHttpRequest();
  // client.open('GET', '/foo.txt');
  // client.onreadystatechange = function() {
  //     c = client.responseText;
  // }
  // client.send();

  // fetch('foo.txt')
  //   .then(response => response.text())
  //   .then((data) => {
  //       d.data = data
  //     console.log(data)
  //     console.log(d.data)
  //     c = data;

  //     console.log(c)
  //   }).finally(() => {
        
  //     console.log(c);

  //     console.log("c: " + c)
  //   })

  // c.then((data) => {
      // console.log(data);
  // })

  // alert("B: " + b);
  // alert("C: "+ c);

})
