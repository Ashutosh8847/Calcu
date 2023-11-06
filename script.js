// To access the id of the html element
let input = document.getElementById('ftext');

// querySelectorAll is used to all element in our button
let buttons = document.querySelectorAll('button');

// we can store the value in empty string
let string = "";

// Then we can create a array to access all element 
let arr = Array.from(buttons);

// Then we can using foreach loop to accessing all the element

arr.forEach(async(button) =>{
    button.addEventListener('click', (e) =>{
        if (e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string="";
            input.value=string;
        }
        else if (e.target.innerHTML == 'DEL'){
            string=string.substring(0,string.length-1)
            input.value = string;
        }
        else if (e.target.innerHTML == '%'){
            string= string/100;
            input.value = string;
        }

        else{
        string = string + e.target.innerHTML;
        input.value = string;
        }


    })

})
 