function validatename(){
    let text=document.getElementById("name").value
    let regex=/^[a-zA-Z ]+$/;

 if(regex.test(text)){
    document.getElementById("name-warning").innerHTML=""
    document.getElementById("name-warning").style.color="green"
    return true
 }
 else{
    document.getElementById("name-warning").innerHTML="*invalid text"
    document.getElementById("name-warning").style.color="red"
 return false
}
}

function validatemail(){
    let text=document.getElementById("mail").value
    let regex= /^[a-zA-Z0-9@/.,]+$/;
    if(regex.test(text)){
        document.getElementById("mail-warning").innerHTML=""
        document.getElementById("mail-warning").style.color="green"
    return true
    }
    else{
        document.getElementById("mail-warning").innerHTML="*invalid text"
        document.getElementById("mail-warning").style.color="red"
    return false
    }
    }


function validatenum(){
let text=document.getElementById("pnum").value
let regex= /^[0-9]{10}$/;
if(regex.test(text)){
    document.getElementById("num-warning").innerHTML=""
    document.getElementById("num-warning").style.color="green"
return true
}
else{
    document.getElementById("num-warning").innerHTML="*invalid text"
    document.getElementById("num-warning").style.color="red"
return false
}
}

    function validatesms(){
        let text=document.getElementById("sms").value
        let regex= /^[a-zA-Z@/.,? ]+$/;
        if(regex.test(text)){
            document.getElementById("sms-warning").innerHTML=""
            document.getElementById("sms-warning").style.color="green"
        return true
        }
        else{
            document.getElementById("sms-warning").innerHTML="*invalid text"
            document.getElementById("sms-warning").style.color="red"
        return false
        }
        }

        function validatesubmission(){
            validatename()
            validatemail()
            validatenum()
            validatesms()
            if( validatename()&& validatemail()&& validatenum()&& validatesms())
            return true
            else
            return false
        
         }