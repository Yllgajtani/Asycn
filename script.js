// function bakecookies(){
//    console.log("1.Start baking cokies"); 
//    let cookies = '🍪';
//    console.log("2.Cookies are done");
//    return cookies;
// };
// function makeSandwich(){
//     console.log("3.Make an sandwich"); 
//     let sandwich = '🥪';
//     console.log("4.Sandwich are done");
//     return sandwich;
//  };
//  function boilEggs(){
//     console.log("5.Start boiling eggs"); 
//     let Eggs = '🍳';
//     console.log("6.Eggs are done");
//     return Eggs;
//  };

// const { resolve } = require("path");

//  console.log("Kitchen :");
//  let cookies = bakecookies();
//  let sandwich = makeSandwich();
//  let eggs = boilEggs();
//  console.log(`All done: ${cookies}, ${sandwich}, ${eggs}`);

//  function bakecookies(){
//     return new Promise((resovle) => {
//     console.log("1.Start baking cokies"); 
//     setTimeout(() => {
//     console.log("2.Cookies are done");
//     resovle("🍪");
// },3000);
//  });   
// };

// function makeSandwich(){
//    return new Promise((resovle) => {
//         console.log("3.Make an sandwich"); 
//         setTimeout(() => {
//         console.log("4.Sandwich are done");
//         resovle("🥪");
// },2000);
//  });
// };

// function boilEggs(){
//    return new Promise((resovle) => {
//        console.log("5.Start boiling eggs"); 
//        setTimeout(() => {
//        console.log("6.Eggs are done");
//        resovle("🍳");
//       },1000);
//    });
// };

// async function asyncKichen() {
//    console.log("Miresevini ne kuzhinen ton: ")
//    let cookiesPromise = bakecookies();
//    let sandwichPromise = makeSandwich();
//    let eggsPromis = boilEggs();
   
//    //wait all task to complete
//    //await
//     let cookies = await cookiesPromise;
//     let sandwich = await sandwichPromise;
//     let eggs = await eggsPromis;
//     console.log(`All done: ${cookies}, ${sandwich}, ${eggs}`);
// };

// asyncKichen();

function kuqe(){
   return new Promise((resovle) => {
   setTimeout(() => {
   console.log("Drita e kuqe eshte ndezur!");
   resovle("🔴");
},3000);
});   
};

function verdh(){
  return new Promise((resovle) => {
       setTimeout(() => {
       console.log("Drita e verdh eshte ndezur");
       resovle("🟡");
},2000);
});
};

function gjelbert(){
  return new Promise((resovle) => {
      setTimeout(() => {
      console.log("Drita e gjelbert eshte ndezur");
      resovle("🟢");
     },1000);
  });
};

async function asyncSemafori() {
  console.log("Semafori po fillon ")
  let kuqePromise = kuqe();
  let verdhPromise = verdh();
  let gjelbertPromise = gjelbert();
  
  //wait all task to complete
  //await
   let eKuqe = await kuqePromise;
   let eVerdh = await verdhPromise;
   let eGjelbert = await gjelbertPromise;
   console.log(`All done: ${eKuqe}, ${eVerdh}, ${eGjelbert}`);
};

asyncSemafori();