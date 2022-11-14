
// let a = Number(prompt('1ci eded'));
// let b = Number(prompt('2ci eded'));
// let c = Number(prompt('3cu eded'));
// function numbers(a,b,c){
//     if(a<b && a<c) {
//         console.log(a)}
//     else if(b<c && b<a){
//         console.log(b)
//     }
//     else {
//         console.log(c)
//     }
// }
// numbers(a,b,c);


// function min(a,b){
//     if(a<b )
//     {
//         return a;
//     }
//     else
//     {
//         return b;
//     }
// }
// console.log(min(7,9))


// let name = 'Aysel';
// function Greeting(){
//     console.log(`${name} is e JS developer`);
// }
// Greeting()


// let min=(a,b)=>{
//     return a+b;
// }
// console.log(min(5,4));


// let value;
// function edv(value2){
//     value = ((value2*18/100)*10/100);
//     return value;
// }
// let value2;
// function umumiQiymet(mehsulSayi,mehsulQiymet){
//     value2 = mehsulQiymet*mehsulSayi;
//     value3 = value2 - edv(value2);
//     return value3;
// }
// console.log(umumiQiymet(1,32));



// let num = Number(prompt('eded:'));
// function nmbr(num){
//     while(num>=10 && num<100){
//         num+=7;
//     }
//     console.log(num)
// }
// nmbr(num);


// let num = Number(prompt('eded:'));
// function nmbr(num){
//     while(num>=10 && num<100){
//         num+=7;
//     }
//     return num;
// }
// console.log(nmbr(num));


// let n = Number(prompt('n ededini daxil edin'));
// function nmbr(n){
//     let i=0;
//     while(i<n){
//         console.log('I know how to use cycles');
//         i++;
//     }    
// }
// nmbr(n);


// let i = 11;
// let sum=0;
// while( i<100 ){
//     if(i%2==1){
//        sum = sum+i;

//     }
//     i++;
// }
// console.log(sum);


// let num = Number(prompt('eded daxil edin'));
// let sum = 0;
// let i =100;
// while(i<1000){
//     i++;
//     if(i%num==0){
//         console.log(i);
//        sum+=i;
//     }
// }
// console.log(sum);

// let eks='';
// let value;
// let text=prompt("Metni daxil edin!");
// function ekse(text){
// for(i=text.length-1;i>=0;i--){
//    value = eks+=text[i];
// }
// return value;
// }

// console.log(ekse(text));




// let yarus = Number(prompt('eded daxil edin'));
// let yarpaq=0;
// let cem=1;
// for(i = 1; i<=yarus; i+=2){
//     yarus++;
//     yarpaq=yarpaq+2;
//     cem+=yarpaq;
// }
// console.log(cem);

// let arrays= ['10','34','5','12','39','3','9','11','17','7',]
// let[firstnum,secondnum, ...nextnums]=arrays;
// console.log(firstnum);
// console.log(secondnum);
// console.log(nextnums);


// let num1 = Number(prompt("Ilk ededi daxil edin"));
// let num2 = Number(prompt("Ikinci ededi daxil edin"));
// let sum = 0;
// //console.log(num1 * num2);
// for(i = 1; i<=num1; i++){
//     sum = sum + num2;
// }
// console.log(sum);


// let value = Number(prompt("Mebleg daxil edin: "));
// let moneyList = [200, 100, 50, 20, 10, 5, 1];
// for(i=0; i<moneyList.length; i++){
//         let result = Math.floor(value/moneyList[i]);
//         console.log(`${result} eded ${moneyList[i]} manat`);
//         value = value%moneyList[i];
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// let array=['Izzet','Islam','Nermin','Kenan'];
// array.forEach(element => {
//     console.log(element);
// });
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const arr = [1, 2, 3, 4, 5];
// function callback(item, index) {
//   console.log(`${item} - bu, ${index} indeksli elementin dəyəridir`);
// }

// arr.forEach(callback);


// let a=0;
// function funcName(a){
//     a++;
//     if(a<=10){
//         console.log(a);
//         funcName(a)
//     }
// }
// funcName(a);


// arr = [34,32,12,-5,-10];
// let i=0;
// function  filter(arr,i){

//     if(arr[i]>0){
//         console.log(arr[i]);
//         i++;
//         filter(arr,i);
//     }
//     else{
//         i++;
//     }
// }
// filter(arr,i);



// let a = 'absd';
// let b = 'badsj';
// let a1=b.split('');
// let b1=a.split('');
// for(i=0;i<a1.length;i++){
//     for(j=0;j<b1.length;j++){
//         if(a1[i]==b1[j]){
//          a1.splice(a,1);
//          console.log(a1);
//         }

//         // else if(a[i]!=b[j]){
//         //      console.log(b[j]);
//         // }
//     }
// }




// function min(a, b) {
//     if (a < b) {
//         console.log(a);
//         if (a > b) {
//             console.log(b);
//         }
//     }
// }
// min(4, 5)


// function calc(a, b, c) {
//     if (c = '+') {
//         console.log(a + b);
//         if (c = '-') {
//             console.log(a - b);
//             if (c = '*') {
//                 console.log(a * b);
//                 if (c = '/') {
//                     console.log(a / b);
//                 }
//             }
//         }
//     }
// }
// function calc(a, b, c) {
//     if (c === '+') {
//         console.log(a + b);
//     }

//     if (c ==='-') {
//         console.log(a - b);
//     }

//     if (c ==='*') {
//         console.log(a * b);
//     }

//     if (c === '/') {
//         console.log(a / b);
//     }
// }
// calc(10,5,"+")


// function isLucky(value) {
//     if (Number(value[0]) + Number(value[1])+Number(value[0])+Number(value[0])+Number(value[0])+Number(value[0])) {
//         console.log(true);
//     }
//     if (a + b + c != d + e + f) {
//         console.log(false);
//     }

//     isLucky(234561)
// }


// let nums = [2, 5, 6, 3];
// let target = 8;
// let array = [];
// function numbers(nums){
//     for(i=0; i<nums.length; i++){
//         for(j=i+1; j<nums.length; j++){
//             if(nums[i] + nums[j] === target){
//                 array.push(i,j);
//                 }
//             }
//         }
//     } 
// numbers(nums);
// console.log(array);

////////////////////////////////////////////////////////////////////////////////////////////
// Person sinifi yaradın, hansıki surname, name, age, gender özəllikləri ilə obyekt yaradır . 
// Törəyən Admin sinifi yaradın, hansıki role və id əlavə özəllikləri olacaq. 
// Törəyən Player sinifi yaradın, hansıki  level. əlavə  özəlliyi olacaq.

// class Person{
//     constructor(surname,name,age,gender){
//         this.Surname=surname;
//         this.Name=name;
//         this.Age=age;
//         this.Gender=gender;
//     }
//     rename(changeName){
//         this.Name=changeName;
//     }
// }

// const person=new Person('Efendieva','Aisel',20,'female');
// console.log(person);

// class Admin extends Person{
// constructor(surname,name,age,gender,role,id){
//     super(surname,name,age,gender);
//     this.Role=role;
//     this.Id=id;
// }

// }
// const admin=new Admin('Efendieva','Inci',7,'female','student',3);
// admin.rename('admin1')
// console.log(admin);

// class Player extends Person{
//     constructor(surname,name,age,gender,level){
//         super(surname,name,age,gender);
//         this.Level=level;
//     }
// }
// const player=new Player('Zarbaliyeva','Xadica',19,'female',13);
// player.rename('player1')
// console.log(player);

// class Message{
//     constructor(yazici_ad,vaxt,metn){
//         this.yazici_ad=yazici_ad;
//         this.vaxt=vaxt;
//         this.metn=metn;
//     }
//     toString() {
//         console.log(`${this.yazici_ad} ; ${this.vaxt}:${this.metn}`)
//    }
// }
  

// class Messenger  {
//     constructor() {
//         this.messages = []
//     }

//     show_history() {
//         this.messages.map(message => message.toString())
//     }

//     send(author, text) {
//         let message = new Message(author, text, new Date().getHours() + ':' + new Date().getMinutes())
//         this.messages.push(message)
//     }
// }
// let messenger = new Messenger()
// messenger.send('Adil', 'first message')
// messenger.send('Məryəm', 'second message')
// messenger.show_history()




class Message{
    constructor(authorName, text){
        this.authorName = authorName;
        this.text = text;
        this.time = new Date();
    }
    toString(){
        return `${this.time.getHours()}:${this.time.getMinutes()} ${this.authorName} ${this.text}`
    }
}
class Messenger extends Message{
    constructor(authorName, text){
        super(authorName, text);
        this.getValues = [];
    }
    send(author, text){
        this.authorName = author;
        this.text = text;
        this.getValues.push(`${this.time.getHours()}:${this.time.getMinutes()} ${this.authorName} ${this.text}`)
    }
    show_history(){
        this.getValues.forEach(item =>{
            console.log(item);
        })
    }
}
let info = new Messenger()
info.send('adil','Salam');
info.send('meryem','Salam');
info.show_history();