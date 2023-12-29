let subjectNumber = 1;
let subjectsContainer = document.querySelector(".container");
let addSubjectButton = document.querySelector(".addSubject");
let calculateBtn = document.querySelector(".calculate");
let resetBtn = document.querySelector(".reset");
let gradeInputs = subjectsContainer.querySelectorAll(".grade");
let creditInputs = subjectsContainer.querySelectorAll(".credits");
let grandeCreditsDiv = document.querySelectorAll(".grade-credits");
let inputValues = [];
let subjectHTML = `
<div>
<div class="subject-no">Subject: ${subjectNumber}</div>
              <div class="grade-credits">
                <input
                  class="grade"
                  type="number"
                  id="grade"
                  placeholder="Enter grade points"
                />
                <input
                  class="credits"
                  type="number"
                  id="credits"
                  placeholder="Enter credit points"
                />
              </div>
            </div>
            </div>
`;
addSubjectButton.addEventListener("click", () => {
  addSubject();
});
resetBtn.addEventListener("click", () => {
  reset();
});
calculateBtn.addEventListener("click", () => {
  calculateSGPA();
});
function addSubject() {
  subjectNumber++;
  let newSubject = document.createElement("div");
  newSubject.innerHTML = `
<div>
<div class="subject-no">Subject: ${subjectNumber}</div>
              <div class="grade-credits">
                <input
                  class="grade"
                  type="number"
                  id="grade"
                  placeholder="Enter grade points"
                />
                <input
                  class="credits"
                  type="number"
                  id="credits"
                  placeholder="Enter credit points"
                />
              </div>
            </div>
            </div>
`;
  subjectsContainer.appendChild(newSubject);
}
function reset() {
  subjectNumber = 1;
  subjectsContainer.innerHTML = subjectHTML;
  inputValues = [];
  document.querySelector(".output").innerHTML = ``;
}

function calculateSGPA() {
  inputValues = [];
  let gradeInputs = subjectsContainer.querySelectorAll(".grade");
  let creditInputs = subjectsContainer.querySelectorAll(".credits");

  gradeInputs.forEach((gradeInput, index) => {
    let grade = parseFloat(gradeInput.value);
    let credit = parseFloat(creditInputs[index].value);
    if (!isNaN(grade) && !isNaN(credit)) {
      inputValues.push({ grades: grade, credits: credit });
    }
  });
  let totalScore = 0,
    totalCredits = 0;
  for (let i = 0; i < inputValues.length; i++) {
    if (inputValues[i].grades && inputValues[i].credits) {
      totalScore += inputValues[i].grades * inputValues[i].credits;
      totalCredits += inputValues[i].credits;
    }
  }
  if (totalCredits !== 0) {
    let CGPA = totalScore / totalCredits;
    document.querySelector(".output").innerHTML = `CGPA=${CGPA.toFixed(2)}`;
  }
}
