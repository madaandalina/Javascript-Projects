const comForm = document.querySelector("#comForm");
const commentsContainer = document.querySelector("#commList");

comForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = comForm.elements.username;
  const comments = comForm.elements.comment;
  makeComment(username.value,comments.value);
//   reset values
  username.value='';
  comments.value='';

});


const makeComment = (username,comments) => {
    const newComm = document.createElement("li");
    newComm.append(username);
    newComm.append(` : ${comments}`);
    commentsContainer.append(newComm);

}