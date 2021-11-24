let ev = document.addEventListener("DOMContentLoaded", () => {
let b;
let c = null;
let d = {data: null}
// var client = new XMLHttpRequest();
// client.open('GET', '/foo.txt');
// client.onreadystatechange = function() {
//     c = client.responseText;
// }
// client.send();

fetch('foo.txt')
  .then(response => response.text())
  .then((data) => {
      d.data = data
    console.log(data)
    console.log(d.data)
    c = data;

    console.log(c)
  }).finally(() => {
      
    console.log(c);

    console.log("c: " + c)
  })

// c.then((data) => {
    // console.log(data);
// })

// alert("B: " + b);
// alert("C: "+ c);


})