// @ts-check
class Vehicle {
    //status = "stopped";
    status: 'started' | 'stopped' = 'stopped';
  
    // constructor(make, model, wheels) {
    //   this.make = make;
    //   this.model = model;
    //   this.wheels = wheels;
    // }
    constructor(
      public make: string,
      public model: string,
      //public wheels: number | string
      public wheels: number 
    ) {}
    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
  }
  
  class Car extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model, 4);
    }
  }
  
  class MotorCycle extends Vehicle {
    constructor(make: string, model: string) {
      super(make, model, 2);
    }
  }
  
  function printStatus(vehicle: Vehicle) {
    if (vehicle.status === "started") {
      console.log("The vehicle is started.");
    } else {
      console.log("The vehicle is stopped.");
    }
  }
  
  const myHarley = new MotorCycle("Harley-Davidson", "Low Rider S");
  myHarley.start();
  printStatus(myHarley);
  //console.log(myHarley.make.toUppercase());
  console.log(myHarley.make.toUpperCase());
  
  const myBuick = new Car("Buick", "Regal");
  myBuick.wheels = myBuick.wheels - 1;     //Number(myBuick.wheels)   will give NaN error if wheels is "FOUR"
  console.log(myBuick.wheels);
  console.log(myBuick.model);

  class NCycle<T>{
    public status: 'started' | 'stopped' = 'stopped';
    public make;
    public model;
    public wheels;

    constructor(make : T | T[], model: T | T[] , wheels: number ) {
      this.make = make;
      this.model = model;
      this.wheels = wheels;
    }

    start() {
      this.status = "started";
    }
    stop() {
      this.status = "stopped";
    }
    print(index: number = 0): void {
      // check if make and model both are arrays
      if(Array.isArray(this.make) && Array.isArray(this.model)){
        // if parameter index exist in this.make, this.model
        if(this.make[index] && this.model[index]){
          console.log(`This Ncycle has a ${this.make[index]} ${this.model[index]} at ${index}`);
        }
      }else {
        console.log(`This is a ${this.make} ${this.model} NCycle`);  
        // if(typeof this.make==='string' && typeof this.model==='string' ){
        //   console.log(`This is a ${this.make} ${this.model} NCycle`);        
        // }else{
        //   console.log(`This is a ${this.make} ${this.model} are not string`); 
        // }
      }
    }

    printAll(): void {
      if (Array.isArray(this.make) && Array.isArray(this.model)) {
          for (let i = 0; i < Math.min(this.make.length, this.model.length) ; i++) {
              console.log(`This NCycle has a ${this.make[i]} ${this.model[i]}`);
          }
      }
    }



  }

  const testCycle1 = new NCycle<number>(1, 2, 3);
  testCycle1.print();
  //const test = new NCycle<string[]>()

  const testCycle2 = new NCycle<string>("Ford", "F150", 4);
  testCycle2.print();

  const testCycle3 = new NCycle<string>("Tesla", "Mode Y", 4);  
  testCycle3.print(4);

  const makes4 = ["Volkswagon", "Tesla", "Audi"];
  const models4 = ["Passat", "Model X", "A4"];
  const testCycle4 = new NCycle<string[]>(makes4, models4, 4);

  testCycle4.print(2);
  testCycle4.printAll();


  const makes5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const models5 = [1, 1, 2, 3, 5];
  const testCycle5 = new NCycle<number[]>(makes5, models5, 0);
  testCycle5.print(7);
  testCycle5.printAll();


  