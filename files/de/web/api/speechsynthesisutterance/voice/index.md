---
title: "SpeechSynthesisUtterance: voice-Eigenschaft"
short-title: voice
slug: Web/API/SpeechSynthesisUtterance/voice
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Web Speech API")}}

Die **`voice`**-Eigenschaft der [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Schnittstelle ruft die Stimme ab, die zum Sprechen der Äußerung verwendet wird, und legt sie fest.

Diese sollte auf eines der [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte gesetzt werden, die von [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) zurückgegeben werden.
Wenn sie nicht festgelegt wird, wenn die Äußerung gesprochen wird, wird die am besten geeignete Standardstimme für die Einstellung der [`lang`](/de/docs/Web/API/SpeechSynthesisUtterance/lang)-Eigenschaft der Äußerung verwendet.

## Wert

Ein [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekt.

## Beispiele

```js
const synth = window.speechSynthesis;

const inputForm = document.querySelector("form");
const inputTxt = document.querySelector("input");
const voiceSelect = document.querySelector("select");

const voices = synth.getVoices();

// …

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
