// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // const angkaDouble = angka.map(function (num) {
// //   return num * 2;
// // });

// const angkaBaru = angka.filter((n) => {
//   return n < 5;
// });

// const animes = [
//   {
//     title: "Attack on Titan",
//     rating: 90,
//     year: 2013,
//   },
//   {
//     title: "one Piece",
//     rating: 89,
//     year: 2013,
//   },
//   {
//     title: "Bleach",
//     rating: 82,
//     year: 2013,
//   },
//   {
//     title: "Hunter x Hunter",
//     rating: 84,
//     year: 2013,
//   },
// ];

// const animeBagus = animes.filter((anime) => anime.rating >= 85);
// const judulAnimeBagus = animeBagus.map((anime) => anime.title);
// const animeCukupBagus = animes.filter((anime) => anime.rating < 85);
// const animeBaru = animes.filter((anime) => anime.year > 2010);

// // const animeList = animes.map(function (anime) {
// //   return anime.title.toUpperCase();
// // });
// // ---------------------------------------
// // function print(element) {
// //   console.log(element);
// // }

// // angka.forEach(print);

// // const anime = []
// // =================================
// // function perpangkatan(x) {
// //   return x * x;
// // }

// // const hasil = perpangkatan(5);

// // const hasil = function (x) {
// //   return x * x;
// // };

// // const perpangkatan = (x) => {
// //   return x * x;
// // };

// // const random = () => {
// //   return Math.floor(Math.random() * 1000);
// // };

// // const add = (a, b) => a + b;

// // ==================================================

// // console.log("Hallo...");
// // setTimeout(() => {
// //   console.log("masih di sana ga?");
// // }, 5000);
// // console.log("saya pergi ya...");

// // const interval = setInterval(() => {
// //   console.log(Math.random());
// // }, 2000);

// function lemparDadu(sisi = 6) {
//   return Math.floor(Math.random() * sisi) + 1;
// }

// function sapa(name, msg = "Selamat bekerja") {
//   console.log("${name} ${msg}");
// }

// const nama = ["Alex", "Bimo", "Cici", "Delila", "Felix", "Gerard", "Huey"];

// const [gold, silver, bronze, ...peserta] = nama;

const user = {
  name: "John",
  email: "john@doe.com",
  role: "Admin",
};

// const { name: nama, email, phone = "0859884545" } = user;

const userAndRole = ({ name, role }) => {
  return "${name} ${role}";
};
