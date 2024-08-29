let op=document.getElementById("display").value;
let er="Error";

//function to display one number or operater in the textbox at a time and Error message handling
function display(op){
    if(document.getElementById("display").value!=er){
        document.getElementById("display").value+=op;
    }
    else{
        document.getElementById("display").value+="";
    }
}

//function to calculate the operations and to display Error when it occurs
function calculate(op){
    let x=document.getElementById("display").value;
    try{
        let y=eval(x);
        document.getElementById("display").value=y;
    }    
    catch(error){
        document.getElementById("display").value=er;
    }
}

//function to clear all the content in the textbox
function allClear(){
    document.getElementById("display").value="";
}

//function to delete one number or operator from the right at a time
function dele(op){
    op=document.getElementById("display").value;
    slice=op.slice(0,-1);
    document.getElementById("display").value=slice;
}


    

