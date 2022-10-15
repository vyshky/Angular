// let num = 5;
// // num = "hello";
// num = 4.4;

// var z = 5 ;
// // z = "hello";
// let num = "hello"

// const z = 6 ;
// // z = 2;

// let num = 5;
// let bool = true;
// let str = "Hello";

// let num:number = 5;
// let bool:boolean = true;
// let str:string = "Hello";

// let somthing;
// somthing = 5;
// somthing = "Hello";

// let num:number = 5;
// let bool:boolean = true;
// let str:string = "Hello";

// let arr = [1, 2, 3, 4, 5]; // Shift + alt + douwn
// let arr1 = [1, 2, 3, 4, 5, "Hello"];

// let arrnum: Array<number> = [1, 2, 3, 4, 5];

// enum Color {
//   Red,
//   Blue,
//   Green,
// }
// let color = Color.Red;

// let typle:[string,number] = ["1",1];
// console.log(typle);
// console.log(typle[0]);
// console.log(typle[1]);

// let age: number = 25;
// let myname: string = "Alex";
// // let result: number = Foo(age, myname);
// // console.log(result);

// // function Foo(ageParam: number, nameParam: string):number {
// //   console.log(ageParam + " " + nameParam);
// //   return 1;
// // }

// let foo = (ageParam: number, nameParam: string): void => { return console.log(ageParam + " " + nameParam);}
// foo(age,myname);

// let x = 10;
// {
//   let x = 5;
//   console.log(x); //5
// }
// console.log(x); //10

// var x = 10;
// {
//     var x = 5;
//   console.log(x); //5
// }
// console.log(x); //5

// interface Person{
// }

// function GetStr():string{
//     return "No name";
// }

// // function getName(firstName:string = "Alexander"):string{
// //     return firstName;
// // }

// function getName(firstName:string = GetStr()):string{
//     return firstName;
// }
// console.log(getName);

// let num = (x = 0) => x * x;
// let num = (x:number)=>{return x*x;}
// let num = (x) => x * x;
// let num = () => 1 * 2;

// let id: number | string;
// id = "Farid";
// id = 5;

// let x :null = null;
// let y :undefined = undefined;

// // enum Gender {
// //   Male,
// //   Famale,
// // }

// // interface Person {
// //   age: number;
// //   name: string;
// //   gender?: Gender; // ? - не обязательное поле(мембер, член класса)
// // }

// // let p1: Person = {
// //   name: "Alexadr",
// //   age: 26,
// //   gender: Gender.Famale,
// // };

// // let p = {
// //   name: "Alexadr",
// //   age: 26,
// //   lastName: "asdasd",
// // };

// // function PrintPerson(person: Person) {
// //   console.log(`Name : ${person.name}`);
// //   console.log(`Age : ${person.age}`);
// // }
// // PrintPerson(p1);
// // PrintPerson({ name: "Alexadr", age: 26, gender: Gender.Famale });

// // let person1: { name: string; age: number } = { name: "Alex", age: 22 };
// // let person2: { name: string; age?: number } = { name: "Alex" };

// // function printPeson(person: { name: string; age?: number }) {
// //   if ("name" in person) {
// //     console.log(`Name : ${person.name}`);
// //   }
// //   if ("age" in person) {
// //     console.log(`Age : ${person.age}`);
// //   }
// // }

// // printPeson(person1);
// // //Name : Alex
// // //Age : 22
// // // printPeson(person2);
// // //Name : Alex
// // //Age :
// // printPeson(person2);
// // //Name : Alex

// type id = number | string; // Создаем свой тип
// let userId: id = 5;

// type Person = { name: string; age: number };
// type Teacher = Person & { salary: number };
// let Alex: Teacher = { name: "Alex", age: 55, salary: 1000 };

// enum Gender {
//   Male,
//   Famale,
// }

// class Person {
//   age: number = 0;
//   private name: string = "Alexandr";
//   gender: Gender = Gender.Male;
//   constructor(
//     age: number = 0,
//     name: string = "",
//     gender: Gender = Gender.Male
//   ) {
//     this.age = age;
//     this.name = name;
//     this.gender = gender;
//   }
//   showInfo(): void {}
// }

// let p: Person = new Person(26, "Alexandr", Gender.Male);

// // // enum Gender {
// // //   Male,
// // //   Famale,
// // // }

// // // class Person {
// // //   readonly id: number;
// // //   static count:number = 0;
// // //   constructor(public age: number, public name: string, public gender: Gender) {
// // //     this.age = age;
// // //     this.name = name;
// // //     this.gender = gender;
// // //     this.id= 5;
// // //   }
// // //   ShowInfo(): void {}
// // //   static Count(): void {
// // //     this.count = this.count++;
// // //   }
// // // }

// // // let person: Person = new Person(26, "Alexandr", Gender.Male);
// // // Person.Count();

// // // interface ITest{
// // //  print():void;
// // // }

// // // class Student extends Person implements ITest{
// // //     constructor(){
// // //         let temp = super(22,"",Gender.Famale);
// // //     }
// // //     print(): void {
// // //         console.log("class Student.print");
// // //     }
// // // }

class MyList<T> {
  private arr: T[] = [];
  public add(param: T): boolean {
    let count = this.arr.length;
    if (count != this.arr.length) {
      return true;
    }
    return false;
  }
}
