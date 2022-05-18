// fdothis = () => {
//   console.log("done");
//   const ldta = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       userId: 032,
//       date: 2030 - 02 - 03,
//       products: [
//         { productId: 4, quantity: 9 },
//         { productId: 2, quantity: 9 },
//       ],
//     }),
//   };
//   fetch("https://fakestoreapi.com/carts", ldta)
//     .then((res) => {
//       console.log(res);
//       if (!res.ok) {
//         throw Error(res.statusText);
//       }
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log("error");
//     });
// };

// fdothis = async () => {
//   const ldta = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       userId: 032,
//       date: 20333 - 02 - 03,
//       products: [
//         { productId: 4, quantity: 9 },
//         { productId: 2, quantity: 9 },
//       ],
//     }),
//   };
//   const res = await fetch("https://fakestoreapi.com/carts", ldta);
//   console.log(res);
//   const dnew = await res.json();
//   console.log(dnew);
// };

fdothis = async (e) => {
  e.preventDefault();
  try{
  const userId = document.getElementById("yu").value;
  const dte = document.getElementById("nt").value;
  const myInit = {
    method: "POST",
    headers: { "Content-Type": "Application/json" },
    body: JSON.stringify({ userId: userId, date: dte }),
  };
  console.log(myInit.body);
  const ftch = await fetch("https://fakestoreapi.com/carts", myInit);

  const gyt = await ftch.json();

  console.log(gyt)
.catch((error) => {
    console.log("error");
  });

};

document.getElementById("one").addEventListener("click", fdothis);
