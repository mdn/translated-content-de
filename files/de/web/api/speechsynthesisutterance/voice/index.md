---
title: "SpeechSynthesisUtterance: voice-Eigenschaft"
short-title: voice
slug: Web/API/SpeechSynthesisUtterance/voice
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`voice`**-Eigenschaft der {{domxref("SpeechSynthesisUtterance")}}-Schnittstelle ruft die Stimme ab und setzt sie, die verwendet wird, um die Äußerung zu sprechen.

Diese sollte auf eines der {{domxref("SpeechSynthesisVoice")}}-Objekte gesetzt werden, die von {{domxref("SpeechSynthesis.getVoices()")}} zurückgegeben werden.
Falls bis zum Zeitpunkt, zu dem die Äußerung gesprochen wird, keine Stimme gesetzt ist, wird die am besten geeignete Standardstimme für die {{domxref("SpeechSynthesisUtterance.lang","lang")}}-Einstellung der Äußerung verwendet.

## Wert

Ein {{domxref("SpeechSynthesisVoice")}}-Objekt.

## Beispiele

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

const voices = synth.getVoices();

// ...

inputForm.onsubmit = (event) => {
  event.preventDefault();

  const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  const selectedOption =
    voiceSelect.selectedOptions[0].getAttribute("data-name");
  for (let i = 0; i < voices.length; i++) {
    if (voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
