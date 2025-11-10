---
title: "SpeechSynthesisUtterance: voice-Eigenschaft"
short-title: voice
slug: Web/API/SpeechSynthesisUtterance/voice
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Die **`voice`**-Eigenschaft des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Interfaces bekommt und setzt die Stimme, die verwendet wird, um den Text auszusprechen.

Diese sollte auf eines der [`SpeechSynthesisVoice`](/de/docs/Web/API/SpeechSynthesisVoice)-Objekte gesetzt werden, die von [`SpeechSynthesis.getVoices()`](/de/docs/Web/API/SpeechSynthesis/getVoices) zurückgegeben werden.
Falls sie nicht gesetzt wird, bevor der Text gesprochen wird, wird die am besten geeignete Standardstimme für die [`lang`](/de/docs/Web/API/SpeechSynthesisUtterance/lang)-Einstellung des Textes verwendet.

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
  for (const voice of voices) {
    if (voice.name === selectedOption) {
      utterThis.voice = voice;
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
