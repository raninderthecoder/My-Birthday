// default date lol
var countDownDate = new Date("Feb 5, 2025 00:00:00").getTime();

document.getElementById("Birthday").addEventListener("change", function() {
  var inputDate = new Date(this.value + " 00:00:00").getTime();
  if (!isNaN(inputDate)) {
    countDownDate = inputDate;
  }
});

var x = setInterval(function() {

  var now = new Date().getTime();
 
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
 
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";
    

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "💀EXPIRED";
  }
}, 1000);

// the celebration button
const jsConfetti = new JSConfetti();
      document.querySelector(".Celebrate").addEventListener("click", async () => {
        await jsConfetti.addConfetti({
          emojis: ["🎉", "🥳", "🎂", "🎈","😋"],
          emojiSize: 30,
          confettiNumber: 50,
          confettiColors: [
            "#ff0a54",
            "#ff477e",
            "#ff7096",
            "#ff85a1",
            "#fbb1bd",
            "#f9bec7",
          ],
        });
      });


      toggler.addEventListener('click',function(){
        section.classList.toggle("settings");
    })