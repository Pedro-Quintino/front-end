const answers = ["A", "A", "A", "B", "B"];
const myForm = document.querySelector('form');
const result = document.querySelector(".result");

let finalScore = myForm.addEventListener("submit", e => {
    e.preventDefault();
    let score = 0;
    let outPut = 0;
    const userAnswers = [
        myForm.q1.value,
        myForm.q2.value,
        myForm.q3.value,
        myForm.q4.value,
        myForm.q5.value,
    ];
    console.log(userAnswers);
    userAnswers.forEach((value, index) =>{
        if(value === answers[index]){
            score += 20;
        }
    })
    scrollTo(0,0);
    result.style["display"] = "block";

    const timer = setInterval(() => {
        result.querySelector("span").textContent = `   ${outPut}% `;  
        outPut += 1; 
        if(outPut > score){
            clearInterval(timer)
        } 
    }, 25);
});
