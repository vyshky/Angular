interface ICollection {}

class List<T> implements ICollection {
  private arr: T[] = [];
  public Lenght = () => {
    return this.arr.length;
  };
  constructor() {}
  Add(param: T): void {
    if ("" === param) {
      return;
    }
    if (null === param) {
      return;
    }
    if (undefined === param) {
      return;
    }
    this.arr.push(param);
  }
  Remove(param: T): void {
    let index = this.arr.indexOf(param, 0);
    if (index < 0) {
      return;
    }
    this.arr.splice(0, 1);
  }

  Contains(param: T): boolean {
    return this.arr.includes(param);
  }

  Get(): T[] {
    return this.arr;
  }

  printArr(): void {
    console.log(this.arr);
  }
}

let list: List<string> = new List();

list.Add("Привет");
list.Add("Мир");
list.Add(":D");
list.Add("1");
list.Add("2");
list.Add("3");

let IsContains = list.Contains("Привет");
if (IsContains) {
  list.Remove("Привет");
}
console.log(list.Lenght());
list.printArr();
