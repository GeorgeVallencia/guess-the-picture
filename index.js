// document.getElementById('cat-img').innerText = 'Meerkat';


const catImage = document.getElementsByClassName('label-1');
const image = document.getElementById('imgs');
const text = document.getElementById('text');
const Next = document.getElementsByClassName('bttn');

const c = 0;

function coverImg() {
    if(c == 0){
        image.style.filter = 'blur(0)';
        text.style.display = 'none';
        c = 1;
    }else{
            image.style.filter = 'blur(10px)';
            text.style.display = 'block';
            c = 0;
    }
}

// Next.addEventListener('click', ()=>{
//     if(Next.click){
//         location.href = 'quiz.html';
//     }else{
//         location.href = 'index.html';
//     }
// });

function nextQuiz() {
    if(c==0){
        location.href = 'quiz2.html';
        c = 1;
    
    }else{
        location.href = 'index.html';
        c = 0;
    }

}

function previousQuiz(){
    if(c==0){
        location.href = 'index.html';
        c = 1;
    }else{
        location.href = 'quiz2.html';
        c = 0;
    }
}
