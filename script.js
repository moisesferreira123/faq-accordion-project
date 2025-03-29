let buttonQuestion1Actived = false;
let buttonQuestion2Actived = false;
let buttonQuestion3Actived = false;
let buttonQuestion4Actived = false;
msgs = [`Frontend Mentor offers realistic coding challenges to help developers improve their 
          frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for 
          all levels and ideal for portfolio building.`,
        `Yes, Frontend Mentor offers both free and premium coding challenges, with the free 
          option providing access to a range of projects suitable for all skill levels.`,
        `Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent
          way to showcase your skills to potential employers!`,
        `The best place to get help is inside Frontend Mentor's Discord community. There's a help 
          channel where you can ask questions and seek support from other community members.`
        ]

document.addEventListener("click",(e) => {
  const el = e.target.closest('section');
  if(el.classList.contains('question-1')){
    if(!buttonQuestion1Actived){
      openAnswer(el, msgs[0]);
      buttonQuestion1Actived = true;
    }else{
      closeAnswer(el);
      buttonQuestion1Actived = false;
    }
  }else if(el.classList.contains('question-2')){
    if(!buttonQuestion2Actived){
      openAnswer(el, msgs[1]);
      buttonQuestion2Actived = true;
    }else{
      closeAnswer(el);
      buttonQuestion2Actived = false;
    }
  }else if(el.classList.contains('question-3')){
    if(!buttonQuestion3Actived){
      openAnswer(el, msgs[2]);
      buttonQuestion3Actived = true;
    }else{
      closeAnswer(el);
      buttonQuestion3Actived = false;
    }
  }else if(el.classList.contains('question-4')){
    if(!buttonQuestion4Actived){
      openAnswer(el, msgs[3]);
      buttonQuestion4Actived = true;
    }
    else{
      closeAnswer(el);
      buttonQuestion4Actived = false;
    }
  }
});

function openAnswer(el, msg){
  const p = document.createElement('p');
  p.innerText = msg;
  p.setAttribute('class','opened-answer');
  el.appendChild(p);
  changeSVGToMinus(el);
}

function changeSVGToMinus(el){
  const svg = el.querySelector('svg');
  svg.remove();
  const div = el.querySelector('div');
  div.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#301534" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.2 12.2 0 0 0 15 3.312Zm4.688 13.124h-9.375a.938.938 0 0 1 0-1.875h9.374a.938.938 0 0 1 0 1.876Z"/></svg>`;
}

function closeAnswer(el){
  const p = el.querySelector('p');
  if(p.classList.contains('opened-answer')){
    p.remove();
  }
  changeSVGToPlus(el);
}

function changeSVGToPlus(el){
  const svg = el.querySelector('svg');
  svg.remove();
  const div = el.querySelector('div');
  div.innerHTML += `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" fill="none" viewBox="0 0 30 31"><path fill="#AD28EB" d="M15 3.313A12.187 12.187 0 1 0 27.188 15.5 12.203 12.203 0 0 0 15 3.312Zm4.688 13.124h-3.75v3.75a.938.938 0 0 1-1.876 0v-3.75h-3.75a.938.938 0 0 1 0-1.875h3.75v-3.75a.938.938 0 0 1 1.876 0v3.75h3.75a.938.938 0 0 1 0 1.876Z"/></svg>`;
}
