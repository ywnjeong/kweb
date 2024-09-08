function checkanswer(){
    const answers={q1:"1905", q2:"안암동", q3:"5"};
    let score=0;

    const q1answer=document.getElementById("q1").value.trim();
    if (q1answer===answers.q1){
        score+=1;
        document.getElementById("q1").classList.add("correct");
    } else{
        document.getElementById("q1").classList.add("wrong");
    }

    const q2answer=document.getElementsByName("radio1");
    let q2select="";
    for (let option of q2answer){
        if (option.checked){
            q2select=option.value;
            break;
        }
    }
    if (q2select===answers.q2){
        score+=1;
        for (let option of q2answer){
            if (option.value===answers.q2){
                option.parentNode.classList.add("correct");
            }
        }
    } else{
        for (let option of q2answer){
            if (option.value===answers.q2){
                option.parentNode.classList.add("correct");
            }
        }
        for (let option of q2answer){
            if (option.checked){
                option.parentNode.classList.add("wrong");
            }
        }
    }

    const q3answer=document.getElementsByName("radio2");
    let q3select="";
    for (let option of q3answer){
        if (option.checked){
            q3select=option.value;
            break;
        }
    }
    if (q3select===answers.q3){
        score+=1;
        for (let option of q3answer){
            if (option.value===answers.q3){
                option.parentNode.classList.add("correct");
            }
        }
    } else{
        for (let option of q3answer){
            if (option.value===answers.q3){
                option.parentNode.classList.add("correct");
            }
        }
        for (let option of q3answer){
            if (option.checked){
                option.parentNode.classList.add("wrong");
            }
        }
    }

    alert("당신의 점수는 "+score+"점입니다.");
}

