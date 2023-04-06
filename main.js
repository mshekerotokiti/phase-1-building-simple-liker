// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorSide = document.getElementById('modal')
errorSide.classList = ('hidden')
const likes = document.getElementsByClassName('like-glyph')

for (const btn of likes){
  btn.addEventListener('click', () => {

    //gives you are success response using then method 
    mimicServerCall()
    .then(() => {
   if (btn.textContent === EMPTY_HEART){btn.textContent = FULL_HEART;
  btn.classList = ('activated-heart') 
    }

    else{
      btn.textContent = EMPTY_HEART;
      btn.classList = '';
    }
   })

    //catch error method
    .catch((isRandomFailure) => {
      errorSide.classList = ''
      errorSide.textContent = isRandomFailure;
      setTimeout(() =>
        errorSide.classList = 'hidden', 3000)
    })
  })
}



// Don't change the code below: this function mocks the server response

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

