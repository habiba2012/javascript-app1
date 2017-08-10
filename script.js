(function() {
  

  const questions = [
    {
      question: "Is our Product is better than other products on the market?",
      answers: {
        a: "Yes",
        b: "No",
        c: "Not sure."
      },
    },
    {
      question: "Which of the words would you use to describe our products?",
      answers: {
        a: "High quality",
        b: "Relaiable",
        c: "Poor quality."
      },
    },
    {
      question: "How satisfied are you with the Product?",
      answers: {
        a: "Not satisfied",
        b: "Satisfied",
        c: "Completedly satisfied."
      },
    },

    {
     question: "Compared to our competitors, do you feel the Product is",
      answers: {
        a: "Less expensive",
        b: "Price about same",
        c: "Not sure."
      }

    }
      
  ];


  document.getElementById("product").style.visibility = "hidden";
  document.getElementById("previous").style.visibility = "hidden";
  
  document.getElementById("next").style.visibility = "hidden";
  document.getElementById("submit").style.visibility = "hidden";




  const invitationBtn = document.getElementById('invitation');
  invitationBtn.addEventListener("click", participateSurvey);


  function participateSurvey(){

  document.getElementById("product").style.visibility = "visible";

  document.getElementById("next").style.visibility = "visible";

  document.getElementById("previous").style.visibility = "visible";
  document.getElementById("submit").style.visibility = "visible";

   function survey() {
    // place to store the HTML output
    const output = [];

    
    questions.forEach((currentQuestion, questionNumber) => {
      // store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (ques in currentQuestion.answers) {
        // HTML radio button
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${ques}">
              ${ques} :
              ${currentQuestion.answers[ques]}
           </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    container.innerHTML = output.join("");
  }

  function showResults() {


    const formSubmit = []; 
   
   
    
    document.getElementById("previous").style.visibility = "hidden";
    document.getElementById("submit").style.visibility = "hidden";

     formSubmit.push(

       `<div class="signupForm">
          <div>
            <div id="signup">   
              <h1>Thank you for completed the survey.</h1>
                <h2>Sign Up for Free newsletter</h2>
                 <form action="">
                  <div class="container">

                   <label><b>First Name</b></label>
                   <input type="text" placeholder="Enter your First name" name="firstname" required>

                  <label><b>Last Name</b></label>
                  <input type="text" placeholder="Enter last name" name="lastname" required>
                  
                  <label><b>Email</b></label>
                  <input type="text" placeholder="Enter Email" name="email" required>

                  <label><b>Password</b></label>
                  <input type="password" placeholder="Enter Password" name="psw" required>

                  <label><b>Repeat Password</b></label>
                  <input type="password" placeholder="Repeat Password" name="psw-repeat" required>
                  <input type="checkbox" checked="checked"> Remember me
                  <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

                    <div class="clearfix">
                      <button type="button"  class="cancelbtn">Cancel</button>
                      <button type="submit" class="signupbtn">Sign Up</button>
                    </div>
               </div>
           </div>
       </div>
    </form>
  </div>`
      );
 
  container.innerHTML = formSubmit.join("");
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  const container = document.getElementById("survey");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display questions
  survey();

  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  showSlide(0);

  // on submit
  submitButton.addEventListener("click", showResults);

  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
}

 
})();
