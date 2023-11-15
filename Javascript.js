//First thing you need to do is to create a prompt upon opening the website.
const userInputString = prompt(
    "Please enter a list of comma-separted froyo flavors.",
    "vanilla, vanilla, vanilla, strawbery, coffee, coffee"
  );
//Second thing is to create and object that observes a customer who ordered three vanilla, two coffee, and one strawberry froyo
//const string = 'vanilla, vanilla, vanilla, strawberry, coffee, coffee';
    const froyo = userInputString.split(`, `)
    console.log(froyo)

    // const flavors = {}
    // console.log(flavors)
    // for(let i = 0; i < array.length; i++){
    //    if (flavors[array[i]] === undefined) {
    //     flavors[array[i]] = 0
    //    console.log(`First time added`,flavors)
    //    }
    //    flavors[array[i]]++
    // }


    function flavorCount(orders){
        const flavors = {}
        console.log(flavors)
        for(let i = 0; i < orders.length; i++){
           if (flavors[orders[i]] === undefined) {
            flavors[orders[i]] = 0
           }
           flavors[orders[i]]++
        }
    return flavors
}
console.log(flavorCount(froyo))
    
//const countedFlavors = flavorCount(froyo)//storing the results of the data

//This is my loop used to iterate thorught the array of flavors
//for (const key in customerOrder) {
    //console.log(customerOrder[key])// This should return and array of the customerOrder [vanilla, vanilla, vanilla, strawberry, coffee, coffee]
