function toggleAudio(turnOn) {
    if (annyang) {
      if (turnOn) {
        annyang.start();
        console.log("Voice recognition ON");
      } else {
        annyang.abort();
        console.log("Voice recognition OFF");
      }
    }
  }
  