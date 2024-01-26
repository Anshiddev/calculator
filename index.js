const clicked=(e)=>{
    display.value += e.target.id
}

const result =()=>{
    try{
        exp = display.value
        display.value = eval(exp)
    }
    catch(err){
        display.value = err
    }
}

const clean=()=>{
    display.value = ""
}

const onPressBackspace=()=>{
    display.value = display.value.substring(0, display.value.length - 1);
}

//to-do
// yesterday class clearing