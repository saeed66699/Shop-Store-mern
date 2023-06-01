function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email_id: document.getElementById("email_id").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };
  const servicID = "service_kkc8sj9";
  const templateID = "template_qgh2tqu";

  emailjs
    .send(servicID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email_id").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("success");
    })
    .catch((err) => {
      console.log(err);
    });
}
// add in head tag <script
// type="text/javascript"
// src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
// ></script>

// <script type="text/javascript">
// (function () {
//   emailjs.init("yJ6k2WE1FZNYCZkUu");
// })();
// </script>
