//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
"Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(str,arr){
    for (let i=0; i<arr.length; i++){
        if (str.includes(arr[i])) {
            return 'Matched ' + arr[i]
        }
    }
    return "No Matches"
}
console.log(findWords(dog_string,dog_names))


//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

let arr1 = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr2){
    //code goes here
    for (let i=0; i<arr2.length; i++){
        if (i % 2==0) {
        arr2.splice(i,1, "even index")}
    }
    return arr2
}
console.log(replaceEvens(arr1))

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_odd(num){
    if (num %2 ==0) {
        return "Even"
    }
    return "Odd"
}
console.log(even_odd(5))

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

function sumMiddle(lst) {
    lst.sort(function(a,b){return a-b});
    let sum = 0
    for (let i=1; i<(lst.length -1); i++){
        sum += lst[i]
    }
    return sum
}
console.log(sumMiddle([6,2,1,8,10]))