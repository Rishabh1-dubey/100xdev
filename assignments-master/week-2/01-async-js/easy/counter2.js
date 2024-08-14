function counter(count){
    setTimeout(()=>{
        console.log(count+1)
counter(count+1)
    },1000)
}

counter(0);