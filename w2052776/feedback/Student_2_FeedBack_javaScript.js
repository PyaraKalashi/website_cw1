document.querySelector(".btn.button").addEventListener("click", function(event) {
  event.preventDefault();
  
});


function sendFeedbackByEmail() {
  var Name = document.querySelector(".Name input").value;
  var Gmail = document.querySelector(".email input").value;
  var subject = "Feedback_Details";
  var body = `
      ► Name: ${Name}\n
      ► Email: ${Gmail}\n
      ► Was this your first time visiting: ${document.querySelector("input[name='one']:checked").id}\n
      ► Was this website informative and easy to navigate through: ${document.querySelector("input[name='two']:checked").id}\n
      ► What are your thoughts? : ${document.getElementById("textarea1").value}\n
      ► Would you recommend our services? : ${document.querySelector("input[name='three']:checked").id}\n
      ► Would you like to receive updates about the website and any offers ? : ${document.querySelector("input[name='four']:checked").id}\n
      ► Do you have any additional questions or requests ? : ${document.getElementById("textarea2").value}\n
  `;

  var mailtoLink = "mailto:aquavoyage517@gmail.com" + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  window.location.href = mailtoLink;

  // Clear the form fields after sending feedback
  document.querySelector(".Name input").value = "";
  document.querySelector(".email input").value = "";
  document.querySelectorAll("input[name='one']").forEach(input => input.checked = false);
  document.querySelectorAll("input[name='two']").forEach(input => input.checked = false);
  document.getElementById("textarea1").value = "";
  document.querySelectorAll("input[name='three']").forEach(input => input.checked = false);
  document.querySelectorAll("input[name='four']").forEach(input => input.checked = false);
  document.getElementById("textarea2").value = "";
  document.getElementById("Accepting").checked = false;

  // Clear the preview container
  const previewContainer = document.getElementById("preview");
  previewContainer.innerHTML = "";
}



// Event listener for the "Send" button in the feedback form
document.querySelector(".feedback").addEventListener("submit", function(event) {
  event.preventDefault();
  sendFeedbackByEmail();
});

// Event listener for the "Preview the Feedback" button
document.getElementById("previewbtn").addEventListener("click", function(event) {
  event.preventDefault();
});

function showPreview(event) {
  event.preventDefault();
  const previewContainer = document.getElementById("preview");

  previewContainer.innerHTML = "";

  const name = document.querySelector(".Name input").value;
  const email = document.querySelector(".email input").value;
  const question1 = document.querySelector("#Yes").checked ? "Yes" : "No";
  const question2 = document.querySelector("#No").checked ? "No" : "Yes";
  const question3 = document.getElementById("textarea1").value;
  const question4 = document.querySelector("input[name='three']:checked") ? "Yes" : "No";
  const question5 = document.querySelector("input[name='four']:checked") ? "Yes" : "No";
  const question6 = document.getElementById("textarea2").value;
  const termsAccepted = document.getElementById("Accepting").checked;

  if (!termsAccepted) {
    alert("Please accept terms and conditions to preview.");
    return;
  }

  const previewContent = `
    <h2>Feedback Preview</h2>
    <p><b>Name:</b> ${name}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Was this your first time visiting:</b> ${question1}</p>
    <p><b>Was this website informative and easy to navigate through:</b> ${question2}</p>
    <p><b>What are your thoughts?</b> ${question3}</p>
    <p><b>Would you recommend our services?</b> ${question4}</p>
    <p><b>Would you like to receive updates about the website and any offers?</b> ${question5}</p>
    <p><b>Do you have any additional questions or requests?</b> ${question6}</p>
    <p><b>Accepted Terms and Conditions:</b> ${termsAccepted ? "Yes" : "No"}</p>
  `;

  previewContainer.style.display = "block";
  previewContainer.innerHTML = previewContent;


if (previewContent) {
  previewContainer.innerHTML = previewContent;
} else {
  previewContainer.innerHTML = "Please select Yes or No for the questions."; // Display a message for unchecked buttons
}
}
