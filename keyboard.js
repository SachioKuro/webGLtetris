var currentlyPressedKeys = {};
    function handleKeyDown(event) {
      currentlyPressedKeys[event.keyCode] = true;
    //    if (statePause === false){
        if (String.fromCharCode(event.keyCode) == "R") {
            falling.turn("x", true);
        }
        if (String.fromCharCode(event.keyCode) == "E") {
            falling.turn("x", !true);
        }
        if (String.fromCharCode(event.keyCode) == "F") {
            falling.turn("y", true);
        }
        if (String.fromCharCode(event.keyCode) == "D") {
            falling.turn("y", !true);
        }
        if (String.fromCharCode(event.keyCode) == "V") {
            falling.turn("z", true);
        }
        if (String.fromCharCode(event.keyCode) == "C") {
            falling.turn("z", !true);
        }
        if (String.fromCharCode(event.keyCode) == "I") {
            falling.bewegen("z", !true);
        }
        if (String.fromCharCode(event.keyCode) == "K") {
            falling.bewegen("z", true);
        }
        if (String.fromCharCode(event.keyCode) == "J") {
            falling.bewegen("x", !true);
        }
        if (String.fromCharCode(event.keyCode) == "L") {
            falling.bewegen("x", true);
        }
        if (String.fromCharCode(event.keyCode) == " ") {
            falling.drop();
        }

    //  }
      if (String.fromCharCode(event.keyCode) == "P") {
          statePause = !statePause;
          console.log("PAUSE");
      }
      if (String.fromCharCode(event.keyCode) == "Q") {
          console.log("QUIT/RESTART");
          start();
      }
      if (String.fromCharCode(event.keyCode) == "A") {
          midArena = copyArena();
          console.log("Midarena: ", midArena);
      }
      if (String.fromCharCode(event.keyCode) == "Y") {
        console.log("Midarena2 ", midArena );
      }
        // if else (String.fromCharCode(event.keyCode) == "???") {
        //     falling.turn("x", !true);
        //     console.log("E pressed");
        // }
        // if else (String.fromCharCode(event.keyCode) == "???") {
        //     falling.turn("x", !true);
        //     console.log("E pressed");
        // }
        // if else (String.fromCharCode(event.keyCode) == "???") {
        //     falling.turn("x", !true);
        //     console.log("E pressed");
        // }

    }
    function handleKeyUp(event) {
        currentlyPressedKeys[event.keyCode] = false;
    }
    function handleKeys() {
        if (currentlyPressedKeys[33]) {
            // Page Up
            z -= 0.05;
        }
        if (currentlyPressedKeys[34]) {
            // Page Down
            z += 0.05;
        }
        if (currentlyPressedKeys[37]) {
            // Left cursor key
            falling.bewegen("x", !true);
        }
        if (currentlyPressedKeys[39]) {
            // Right cursor key
            falling.bewegen("x", true);
          }
        if (currentlyPressedKeys[38]) {
            // Up cursor key
            falling.bewegen("z", !true);
        }
        if (currentlyPressedKeys[40]) {
            // Down cursor key
            falling.bewegen("z", true);
          }
    }
