---
title: "SpeechSynthesisUtterance: voice Eigenschaft"
short-title: voice
slug: Web/API/SpeechSynthesisUtterance/voice
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`voice`**-Eigenschaft des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Interfaces ruft die Stimme ab, die verwendet wird, um die Äußerung zu sprechen, und legt sie fest.

Diese sollte auf eines der [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte gesetzt werden, die von [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) zurückgegeben werden.
Wenn sie nicht gesetzt wird, bevor die Äußerung gesprochen wird, wird die am besten geeignete Standardstimme verwendet, die für die [`lang`](/de/docs/Web/API/SpeechSynthesisUtterance/lang)-Einstellung der Äußerung verfügbar ist.

## Wert

Ein [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekt.

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
