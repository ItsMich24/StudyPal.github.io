let app = document.getElementById('typewriter'); 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #a25386;"> Tu Compañero de Estudio Inteligente.</span>')
  .pauseFor(200)
  .deleteChars(8)
  .start();
