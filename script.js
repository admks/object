const firstname= "ahmet first" //string
const hayvan = ["kedi" ,  "kopek" , 5] //array

const insan = {  //object
  firstname : "ahmet",
  surname:"k",
  "family":"telliogullarından",
  age : 55
}
console.log(insan)
console.log(hayvan[0])

console.log(insan.age) //daah
console.log(insan.family)

console.log(insan["family"])

let degisken="age" //yukarıdaki age deb bagımsız
console.log(insan[degisken]) //=>insan["age"]

const myCar={
  brand:"toyota",
  model:"2017",
  color:"red",
  km:86000,
  fuel:"lpg",
}

myCar.vites="auto"; //sonradan atama olur
myCar.km=87000; // sonradan değiştirilir
console.log(myCar)

const myBootcamp = new Object()
myBootcamp.name="FullStack";
myBootcamp.teacher="mustafa";

console.log(myBootcamp)

//object constructor
function carCreator(brand,model,color,km ) {
 this.brand = brand ; 
 this.model = model; 
 this.color = color; 
 this.km = km; 
}

const honda =new carCreator("honda","civic","blue",373737)
console.log(honda)

const newBoot={
  name :"fullstack",
  lessons:["js", "react", "Nodejs"],
  teachers:{
    teacher_1:{
      name:"mustafa",

    },
  },
}

console.log(newBoot.teachers.teacher_1.name)
console.log(newBoot.lessons[0])

const user={
  firstname: "mehmet",
  lastname:"avcı",
  country:"turkey",
  fullName : function (param) {
    return this.firstname.toUpperCase() + " " + this.lastname.toUpperCase() + " " + param + " yasında" ;
   }
}
console.log(user.fullName(45))
console.log(user)
delete user.country;
console.log(user)


//for ..in
for ( k in user) {
  console.log(k)
  // console.log(user[k])
}


