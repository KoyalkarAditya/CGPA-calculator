let count = 1;
let content = document.querySelector(".outer-container");
document.querySelector(".addSubject").addEventListener("click", () => {
  count += 1;
  addSubject(count);
});
function addSubject(count) {
  let addSubjectHtml = `
<div class="outer-container">
            <div class="container">
              <div class="subject-no">Subject: ${count}</div>
              <div class="grade-credits">
                <input
                  type="number"
                  id="grade"
                  placeholder="Enter grade points"
                />
                <input
                  type="number"
                  id="credits"
                  placeholder="Enter credit points"
                />
              </div>
            </div>`;
  content.innerHTML += addSubjectHtml;
}
document.querySelector(".reset").addEventListener("click", () => {
  count = 1;
  content.innerHTML = `
<div class="outer-container">
            <div class="container">
              <div class="subject-no">Subject: ${count}</div>
              <div class="grade-credits">
                <input
                  type="number"
                  id="grade"
                  placeholder="Enter grade points"
                />
                <input
                  type="number"
                  id="credits"
                  placeholder="Enter credit points"
                />
              </div>
            </div>`;
});
