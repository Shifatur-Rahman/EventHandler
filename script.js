let submit = document.getElementById('submit');
let comment = document.getElementById('lorem');
let text = document.getElementById('text');


submit.addEventListener('click', myFun=()=>{
    comment.innerHTML = text.value;
    console.log(text.value);
})