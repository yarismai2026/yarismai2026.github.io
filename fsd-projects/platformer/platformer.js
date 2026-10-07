$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////
    // TODO 1 - Enable the Grid
    // toggleGrid();
toggleGrid();

    // TODO 2 - Create Platforms
createPlatform(200 , 700, 200, 20, "pink");
   createPlatform(500, 600, 200, 20, "pink");
   createPlatform(800,500,200,20, "pink");
   createPlatform(500,400,200,20, "pink");
   createPlatform(300,400,200,20, "pink");
   createPlatform(300,300,100,20, "pink");
   createPlatform(300,200,200,20, "pink");



    // TODO 3 - Create Collectables
createCollectable("kennedi", 900 , 500);
createCollectable("diamond", 400 , 200);
createCollectable("max",300,260);


    
    // TODO 4 - Create Cannons
createCannon("bottom",400,700);
createCannon("bottom",700,700);
createLaser()


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
