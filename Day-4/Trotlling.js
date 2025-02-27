
let btn = document.getElementById('btn')

btn.addEventListener('click',throtmass("don't spam the button"))


function throtmass (mass){
    let canlog = true

    return function(){
            if(canlog){
                console.log(mass);
                canlog =false; 
                setTimeout(() => {
                canlog =true; 
                    
                }, 1000);
                
            }
    }


}
