const getValueInput = () => {
  let fname = document.querySelector("#fname").value;
  let lname = document.querySelector("#lname").value;
  let email = document.querySelector(".email").value;
  let age = document.querySelector(".age").value;
  document.querySelector(
    "#data"
  ).innerHTML = ` DATA <br/><br/>   First Name: ${fname} <br/>Last Name: ${lname} <br/>Email: ${email}<br/> Age: ${age}`;
};

function reset() {
  document.querySelector("input").reset();
}
