const number1 = 40;
const number2 = 40;
// if (number1 == number2 ) {
//     console.log("eqaul");
// }else{
//     console.log("not eqaul");
// }
// if(number1 === number2){
//     console.log("eqaul");
// }else{
//     console.log("not eqaul");
// }
const student = {
    name: "Md Shahalal",
    phone:566813130,
    gfname: "not a gf",
    email: "shahlalbd@gmail.com",
    ege: 22,
    address: "bangladesh"
}
// console.log(student.phone)
const {gfname, email} = student;
// console.log(gfname);
// console.log(email);

const numbers = [21, 22, 13, 42, 31, 212, 321, 3223, 111, 444, 89];
const [num1,num2, num3, ...abc] = numbers;
// console.log(num1)
// console.log(num2);
// console.log(num3)
// console.log(abc);

const gfname1 = [ "lily", "tuli", "poli","moli"]
const exGfName = ["Nusrat","Israt","Sadia","Sultana"]
const futureGF = ["bipasha","nurasha","nilasha","sumaiya"]
// const allGF = gfname1.concat(exGfName).concat("hello").concat(futureGF).concat({name:"majiya"})
const allGF2 =[...gfname1,...exGfName,333, ...futureGF]
console.log(allGF2)