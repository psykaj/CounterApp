const countValue = document.querySelector('#counter');

let increment = () => {
    //get the value from the UI
    //We get value in string so convert it into int using parseInt Method
    let value = parseInt(countValue.innerText);
    //Increment the value by 1 
    value = value + 1;
    //Put that upadted value onto the UI 
    countValue.textContent = value;
};

let decrement = () => {
    //get the value from the UI
    //We get value in string so convert it into int using parseInt Method
    let value = parseInt(countValue.innerText);
    //Decrement the value by 1
    value  = value - 1;
    //Put that upadted value onto the UI
    countValue.innerText = value;
};

