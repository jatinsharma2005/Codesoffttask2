const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = ["rgba(74, 117, 173, 0.336)"];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 10 + "px";
    circle.style.top = y - 10 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 50;

    if (revealtop < windowHeight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal1);

function reveal1() {
  var reveals = document.querySelectorAll(".reveal1");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowHeight - revealpoint) {
      reveals[i].classList.add("active1");
    } else {
      reveals[i].classList.remove("active1");
    }
  }
}

window.addEventListener("scroll", reveal2);

function reveal2() {
  var reveals = document.querySelectorAll(".reveal2");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowHeight - revealpoint) {
      reveals[i].classList.add("active2");
    } else {
      reveals[i].classList.remove("active2");
    }
  }
}

function sendEmail() {
  var FirstName = document.getElementById("firstname").value;
  var LastName = document.getElementById("lastname").value;
  var Gmail = document.getElementById("email").value;
  var Message = document.getElementById("message").value;

  var body =
    "name : " +
    FirstName +
    LastName +
    "<br/> Email:  " +
    Gmail +
    "<br/> Message: <br/>" +
    Message;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "jatinkumar20056@gmail.com",
    Password: "2BAF35E6F23018500769C386D24FB01C7FB6",
    To: "jatinkumar20056@gmail.com",
    From: "jatinkumar20056@gmail.com",
    Subject: "new contact to enquiry",
    Body: body,
  }).then((message) => {
    if (message == "OK") {
      swal("Successfully", "Your message send successfully", "success");
    }
  });
}
