let ev = document.addEventListener("DOMContentLoaded", () => {

  let nav = document.querySelector('ul.main-nav');
  let navList = [{
    "name": "Випуски",
    "href": "/Swedish-News-Web/"
  }, {
    "name": "Вікі Дрімленду",
    "href": "http://esderu.fandom.com/uk/wiki/Dreamland"
  }, {
    "name": "Скарб генерала Авууу!",
    "href": "http://esderu.fandom.com/uk/wiki/Скарб_генерала_Авууу!"
  }]
  navList.forEach(elem => {
    const navLink = document.createElement("a");
    navLink.href = elem.href;
    navLink.textContent = elem.name;
    if (elem.name !== "Випуски") {
      navLink.setAttribute("target", "_blank")
      navLink.setAttribute("rel", "noopener noreferrer")
    }
    const li = document.createElement("li")
    li.appendChild(navLink)
    nav.appendChild(li)
  })

  document.querySelectorAll(['img.mc-item', 'img.mc-entity']).forEach((elem) => {
    elem.setAttribute('title', elem.getAttribute('alt'))
  })
  // document.querySelectorAll('img.mc-entity').forEach((elem) => {
  //   elem.setAttribute('title', elem.getAttribute('alt'))
  // })

  // let aboutBtnListener = document.querySelector('#about-btn').addEventListener("click", () => {
  //   window.location.href = window.location.href + 'about.html'
  // })

  let newsBtnListener = document.querySelectorAll('.news-btn').forEach((elem) => {
    elem.addEventListener("click", () => {
      switch (elem.id) {
        case 'news-14':
          window.location.href = window.location.href + 'news/news-14-minecraft-1-18-caves-n-cliffs-part-2-is-out.html'
          break;
      
        default:
          break;
      }
      // console.log(elem.id);
    })
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