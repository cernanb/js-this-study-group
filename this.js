//Default binding and implicit binding
// function favLang() {
//   console.log(`My favorite language is ${this.language}`)
// }

// language = "Javascript"
// var avi = {language: "Ruby", favLang: favLang}
// var luke = {language: "Swift", favLang: favLang}

// favLang()
// avi.favLang()
// luke.favLang()


//Explicit binding
// function sayName() {
//   console.log(`My name is ${this.name}`)
// }

// name = "John Doe"
// var cernan = {name: "Cernan Bernardo"}

// sayName()
// sayName.apply(cernan)

//Hard binding
// function sayName() {
//   console.log(`My name is ${this.name}`)
// }

// var cernan = {name: "Cernan Bernardo"}
// var avi = {name: "Avi Flombaum"}


// sayName = sayName.bind(cernan)
// sayName()
// sayName.call(avi)

//new keyword
// function stuff() {
//   this.name = "Stuff"
//   console.log(`${this.bar} ${name}`)
// }

// var bar = "Hello"
// var name = new stuff()
// console.log(name)

// var myObj = {
//   wait: function() {
//     setTimeout(function() {
//       console.log(${this.name})
//     }, 2000)
//   },
//   name: "Cernan"
// }

// myObj.wait()

