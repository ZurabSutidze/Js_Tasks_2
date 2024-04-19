/////////////////////////      1       ///////////////////////

// function ObjEntries(obj) {
//     return Object.entries(obj)
// }

/////////////////////////      2       ///////////////////////

// function sameKeys(obj1, obj2) {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);

//     for (let key of keys1) {
//         if (!keys2.includes(key)) {
//             return false
//         }
//     }
//     return true;
// }

/////////////////////////      3      ///////////////////////

// function MergeObjs(...objs) {
//     return Object.assign({} , ...objs)
// }

/////////////////////////      4      ///////////////////////

// function DeleteKey(object, key) {
//     delete object[`${key}`]
//     return object
// }

/////////////////////////      5     ///////////////////////

// class Car {
//     constructor(model, year, make) {
//         this.Carmodel = model
//         this.Caryear = year
//         this.Carmake =  make
//     }

//     DisplayInfo() {
//         console.log(`Model: ${this.Carmodel} , Year: ${this.Caryear} , Make: ${this.Carmake}`)
//     }
// }

/////////////////////////     6    ///////////////////////

// class Rectangle{
//     constructor(width, height) {
//         this.Recwidth = width
//         this.Recheight = height
//     }

//     getArea(){
//         return this.Recheight * this.Recwidth
//     }

//     getPerimeter(){
//         return 2 * (this.Recheight + this.Recwidth)
//     }

//     isSquare() {
//         return this.width === this.height;
//       }
/// }