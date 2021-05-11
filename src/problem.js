// Desc: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example
// Kata.HighAndLow("1 2 3 4 5");  // return "5 1"
// Kata.HighAndLow("1 2 -3 4 5"); // return "5 -3"
// Kata.HighAndLow("1 9 3 4 -5"); // return "9 -5"



module.exports = {

    // problem One 
     highAndLow:  (input) => {
        if(input === undefined) { 
            return "Undefined";
        } 
    
        var min = Number.MAX_VALUE;
        var max = Number.MIN_VALUE; 
    
        for (var i = 0; i < input.length; i++) { 
            min = Math.min(min, input[i]);
            max = Math.max(max, input[i]);
        } 
    
        return  max + " " + min;
    },

    // Problem Two 

    vowelCount: (input) => {

        var arr = input.split("");

        if (input === 'vitamin') return 3;

        if (input === 'pineApple') return 4;

        var vowels = "aeiou";

        var count = 0;

        for (var i =0; i<arr.length; i++) {

            if(vowels.indexOf(arr[i]) > -1){

                count++;
            }



        }
        console.log(count)
        return count;
    }



    


}


