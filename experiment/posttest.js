/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
    function buildQuiz() {
        // we'll need a place to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // we'll want to store the list of answer choices
            const answers = [];

            // and for each available answer...
            for (letter in currentQuestion.answers) {
                // ...add an HTML radio button
                answers.push(
                    `<label>
          <input type="radio" name="question${questionNumber}" value="${letter}">
          ${letter} :
          ${currentQuestion.answers[letter]}
        </label>`
                );
            }

            // add this question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
      <div class="answers"> ${answers.join("")} </div>`
            );
        });

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join("");
    }

    function showResults() {
        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll(".answers");

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {
            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                //answerContainers[questionNumber].style.color = "lightgreen";
            } else {
                // if answer is wrong or blank
                // color the answers red
                answerContainers[questionNumber].style.color = "red";
            }
        });

        // show number of correct answers out of total
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById("quiz");
    const resultsContainer = document.getElementById("results");
    const submitButton = document.getElementById("submit");


    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the above code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////






    /////////////// Write the MCQ below in the exactly same described format ///////////////


    const myQuestions = [
        
        {
            question: "1. Identify the methods implemented for denoising or removing artifacts from a raw EEG signals:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Independent component Analysis(ICA)", ///// Write the option 1 inside double quotes
                b: "Principal Component Analysis(PCA)", ///// Write the option 2 inside double quotes
                c: "Wavelet Transform(WT)", ///// Write the option 2 inside double quotes
                d: "All the above", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },



        {
            question: "2. Ocular artifacts, Muscle artifacts, Cardiac artifacts are:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Extrinsic artifacts", ///// Write the option 1 inside double quotes
                b: "Intrinsic artifacts", ///// Write the option 2 inside double quotes
                c: "Experimental artifacts", ///// Write the option 2 inside double quotes
                d: "Environmental artifacts", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },




        {
            question: "3. Artifacts are unwanted signals which are mainly originated from:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Environment noise", ///// Write the option 1 inside double quotes
                b: "Experimental error", ///// Write the option 2 inside double quotes
                c: "Physiological artifacts", ///// Write the option 2 inside double quotes
                d: "All the above", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },



        {
            question: "4. The filtering methods employed for the cancellation of various noises from a EEG signals:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: "Adaptive ﬁltering", ///// Write the option 1 inside double quotes
                b: "Wiener ﬁltering", ///// Write the option 2 inside double quotes
                c: "Welch Method", ///// Write the option 2 inside double quotes
                d: "Both A and B", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        {
            question: "5. Band pass filtering used to remove electromyogram (EMG) contamination:", ///// Write the question inside double quotes
            
            answers: 
            {
                a: " 30-40 Hz Band pass Filtering", ///// Write the option 1 inside double quotes
                b: "60 Hz Band pass Filtering", ///// Write the option 2 inside double quotes
                c: "1-20 Hz Band pass Filtering", ///// Write the option 2 inside double quotes
                d: "70-100 Hz Band pass Filtering", ///// Write the option 2 inside double quotes
            },
            
            correctAnswer: "c" ///// Write the correct option inside double quotes
        },


        
    ];




    /////////////////////////////////////////////////////////////////////////////

    /////////////////////// Do not modify the below code ////////////////////////

    /////////////////////////////////////////////////////////////////////////////


    // display quiz right away
    buildQuiz();

    // on submit, show results
    submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
