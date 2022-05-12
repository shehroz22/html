//first one then
// const dothis = () => {
//   console.log("done");
//   const ftch = fetch("first.txt");
//   ftch
//     .then((res) => {
//       console.log(res);
//       return res.text();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// };

//then with error
// const dothis = () => {
//   console.log("done");
//   const ftch = fetch("first.txt")
//     .then((res) => {
//       if (!res.ok) {
//         throw Error(res.statusText);
//       }
//       console.log(res);
//       return res.text();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

//showing it on page
// const dothis = () => {
//   console.log("done");
//   const ftch = fetch("first.txt")
//     .then((res) => {
//       if (!res.ok) {
//         throw Error(res.statusText);
//       }
//       console.log(res);
//       return res.text();
//     })
//     .then((data) => {
//       console.log(data);
//       document.getElementById("two").innerHTML = data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

///using async await
// dothis = async () => {
//   console.log("done");
//   const res = await fetch("first.txt");
//   console.log(res);
//   const data = await res.text();
//   console.log(data);
// };

//with cerror

// dothis = async () => {
//   try {
//     console.log("done");
//     const res = await fetch("first.txt");
//     console.log(res);
//     if (!res.ok) {
//       throw Error(res.statusText);
//     }
//     const data = await res.text();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// };

//showing data
dothis = async () => {
  try {
    console.log("done");
    const res = await fetch("first.txt");
    console.log(res);
    if (!res.ok) {
      throw Error(res.statusText);
    }
    const data = await res.text();
    console.log(data);
    document.getElementById("two").innerHTML = data;
  } catch (error) {
    console.log(error);
  }
};

document.getElementById("one").addEventListener("click", dothis);

// document.getElementById("two").innerHTML = "hi my friend";
