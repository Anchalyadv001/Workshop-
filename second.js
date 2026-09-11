const button=document.getElementById('button');
button.addEventListener(('click'),()=>{
  
   // read the data 
   const number1=document.getElementById('number1');
   const input1=Number(number1.value);

   const number2=document.getElementById('number2');
   const input2=Number(number2.value);

   const operation=document.getElementById('operation');
   const ope1=(operation.value)
   
   let result;

   switch(ope1){

    case '+':
       result= input1+ input2;
       break;
    case '-':
       result= input1-input2;
       break; 
    case '*':
       result= input1*input2;
       break;
     case '/':
       result= input1/input2;
       break; 
       default:
        result="invalid operation" ;         

   }

//    const result=input1*input2;
   

   const re=document.getElementById('result');
   re.textContent="Result:"+result;

})

