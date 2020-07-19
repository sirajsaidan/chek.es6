const pets = [
  { name: "Max", type: "dog", bornOn: 2018 },
  { name: "Angel", type: "cat", bornOn: 2015 },
  { name: "Jasper", type: "dog", bornOn: 2016 }
];

const getAge = pet=> new Date().getFullYear() - pet.bornOn;



const petsWithAge = [];
//es6
pets.forEach(e=> {
  e.age=getAge(e);
  petsWithAge.push(e)
  
});

console.log(petsWithAge);

  const dogs = pets.filter(e=>e.type==="dog");

  console.log(dogs);
    let jasper=pets.find(e=>e.name==="Jasper");
    console.log(jasper);

