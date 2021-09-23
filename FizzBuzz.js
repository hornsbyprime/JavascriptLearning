function fizzBuzz(fizzRange){
    for (let i = 0; i < fizzRange; i++){
        if (i%3 == 0){
            if (i%5 == 0){
                console.log('FizzBuzz')
            }
            else{
                console.log('Fizz')
            }}
        else if (i%5 == 0){
            console.log('Buzz')
        }
        else{
            console.log(i)
        }}}
fizzBuzz(50)