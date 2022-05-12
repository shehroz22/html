//using errror and showing data

// const dothis = () => {
//   console.log("its working");
//   const ftch = fetch("data.json");
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
//       document.getElementById("two").innerHTML = data.title;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

//using async await

dothis = async () => {
  try {
    const ftch = await fetch("data.json");
    if (!ftch.ok) {
      throw Error(ftch.statusText);
    }
    console.log(ftch);
    const dta = await ftch.json();
    console.log(dta.id);
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("one").addEventListener("click", dothis);
