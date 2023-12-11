let string = "";

let memory = 0;

let buttons = document.querySelectorAll('.button');

Array.from(buttons).forEach((button) => {

    button.addEventListener('click', (e) => {
        // console.log(e.target);

        if (e.target.innerHTML == '=') {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
            } catch (error) {
                alert('Error in expression!');
            }
        } 
        else if (e.target.innerHTML == 'C') {
            string = "";
            document.querySelector('input').value = string;
        } 
        else if (e.target.innerHTML == 'M+') {
            try {
                memory += eval(string);
                alert('Memory added successfully!');
            } catch (error) {
                alert('Error in expression!');
            }
        } 
        else if (e.target.innerHTML == 'M-') {
            try {
                memory -= eval(string);
                alert('Memory subtracted successfully!');
            } catch (error) {
                alert('Error in expression!');
            }
        } 
        else if (e.target.innerHTML == '%') {
            try {
                string = eval(string) / 100;
                document.querySelector('input').value = string;
            } catch (error) {
                alert('Error in expression!');
            }
        } 
        else {
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

    });

});

