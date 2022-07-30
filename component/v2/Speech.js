import * as Speech from "expo-speech";
import striptags from "striptags";

export function SpeakWords(bible, book, chapter, callback) {
  function tts(n, callback) {
    let text = bible[book][chapter];
    if (Platform.OS === "ios") {
      let thingToSay = striptags(text.join(" "));
      thingToSay.replace(/\*/gm, "");
      //Remove notes
      thingToSay = thingToSay.replace(/\{.*?\}/gm, "");
      Speech.speak(thingToSay, {
        rate: 1,
        onError: (err) => {
          console.log(err);
        },
      });
    } else {
      let thingToSay = striptags(text[n]);
      thingToSay.replace(/\*/gm, "");
      //Remove notes
      thingToSay = thingToSay.replace(/\{.*?\}/gm, "");
      if (!thingToSay) {
        return;
      }
      Speech.speak(thingToSay, {
        rate: 0.8,
        onDone: () => {
          this.setState({ playing: false });
          if (n + 1 < text.length) {
            this.tts(n + 1);
          }
        },
        onStopped: () => {
          Speech.stop();
          n = text.length;
          callback();
        },
        onError: (err) => {
          console.log(err);
          callback();
        },
      });
    }
  }

  tts(0, callback);
}
