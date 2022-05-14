// using single data by then method and showing data

// const dothis = () => {
//   console.log("its working");
//   const ftch = fetch("https://jsonplaceholder.typicode.com/posts/1");
//   ftch
//     .then((res) => {
//       if (!res.ok) {
//         throw Error(res.statusText);
//       }
//       console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data.id);
//       console.log(data.title);
//       console.log(data.body);
//       document.getElementById("two").innerHTML = `<li>${data.id}<li>
//       <li>${data.title}<li>
//       <li>${data.body}<li>

//       `;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

// /using async and display data

// dothis = async () => {
//   try {
//     const ftch = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     if (!ftch.ok) {
//       throw Error(ftch.statusText);
//     }
//     console.log(ftch);
//     const dta = await ftch.json();
//     console.log(dta.id);
//     document.getElementById("two").innerHTML = `<li>${dta.id}<li>
//      <li>${dta.title}<li>
//      <li>${dta.body}<li>

//       `;
//   } catch (error) {
//     console.log(error);
//   }
// };

const dothis = () => {
  console.log("its working");
  const ftch = fetch("https://jsonplaceholder.typicode.com/posts");
  ftch
    .then((res) => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data.id);
      console.log(data.title);
      console.log(data.body);
      const show = document.getElementById("two");
      data.forEach((element) => {
        show.innerHTML += `<div>${element.id}<div>
          <div>${element.title}<div>
          <div>${element.body}<div>
    
          `;
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

document.getElementById("one").addEventListener("click", dothis);
console.log("not working");
