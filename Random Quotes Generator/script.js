Qoutes = [
  {
    qoute: "You are the shuckiest shuck faced shuck in the world!",
    person: "James Dashner",
  },
  {
    qoute:
      "I'm unpredictable, I never know where I'm going until I get there, I'm so random, I'm always growing, learning, changing, I'm never the same person twice. But one thing you can be sure of about me; is I will always do exactly what I want to do",
    person: "C. JoyBell C.",
  },
  {
    qoute:
      "That proves you are unusual,returned the Scarecrow; and I am convinced that the only people worthy of consideration in this world are the unusual ones. For the common folks are like the leaves of a tree, and live and die unnoticed.",
    person: "L. Frank Baum",
  },
  {
    qoute:
      "But that was life: Nobody got a guided tour to their own theme park. You had to hop on the rides as they presented themselves, never knowing whether you would like the one you were in line for...or if the bastard was going to make you throw up your corn dog and your cotton candy all over the place.",
    person: "J.R. Ward",
  },
  {
    qoute: "Her name badge read: Hello! My name is DIE, DEMIGOD SCUM!",
    person: "Rick Riordan",
  },
  {
    qoute:
      "A musician must make music, an artist must paint, a poet must write, if he is to be ultimately at peace with himself. What a man can be, he must be",
    person: "Abraham Maslow",
  },
  {
    qoute: "Insane means fewer cameras!",
    person: "Ally Carter",
  },
  {
    qoute:
      "Some fail to bear in mind that everyone is sentenced to death. Death is a treacherous virus that strikes randomly. The only truth is that nobody is going to make it out alive. We are all living on probation and our expiry date is indefinite.",
    person: "Erik Pevernagie",
  },
  {
    qoute:
      "The lampshade on my head is for my bright ideas. I won't be able to convey them until Monday, when my curtain gets out of the dry cleaners.",
    person: "Bauvard",
  },
  {
    qoute:
      "Never ask an elf for help; they might decide your better off dead, eh?",
    person: "Christopher Paolini",
  },
];

let button = document.querySelector(".btn");
let main = document.querySelector(".main-text");
let per = document.querySelector(".person");

button.addEventListener("click", function () {
  let ran = Math.floor(Math.random() * Qoutes.length);
  per.textContent = Qoutes[ran].person;
  main.textContent = Qoutes[ran].qoute;
});
