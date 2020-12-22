function animateform(){
  const arrows=document.querySelectorAll('.fa-arrow-down');
  
  arrows.forEach(function(arrow){
    arrow.addEventListener('click',()=>{
      let input=arrow.previousElementSibling;
      const parent=input.parentElement;
      const nextform=parent.nextElementSibling;
      
      // check for validation 
      if(input.type==='text' && validuser(input)){
        nextslide(parent,nextform);

      }else if(input.type==='email' && validemail(input)){
        nextslide(parent,nextform);
      } else if(input.type==='password' && validuser(input)){
        nextslide(parent,nextform);
      } else{
        parent.style.animation='shake 0.5s ease';
      }
      // get rid of animation 
      parent.addEventListener('animationend',()=>{
        parent.style.animation='';
      })
        })
    })
}
//  check user 
function validuser(user){
  if(user.value.length <6){
    console.log('not enough');
    error('red');
  }else{
    console.log('everything ok!');
    error('green');
    return true;
  }
}

// check email 
function validemail(email){
  const valid=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(valid.test(email.value)){
error('green');
return true;
  } else{
    error('red');
  }
}

function nextslide(parent,nextform){
parent.classList.add('inactive');
parent.classList.remove('active');
nextform.classList.add('active');
}
function error(color){
  document.body.style.backgroundColor=color;
}
animateform();
