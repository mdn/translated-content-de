---
title: "SpeechSynthesisUtterance: volume-Eigenschaft"
short-title: volume
slug: Web/API/SpeechSynthesisUtterance/volume
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`volume`**-Eigenschaft der [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Schnittstelle erhält und setzt die Lautstärke, mit der die Äußerung gesprochen wird.

Wenn sie nicht festgelegt ist, wird der Standardwert 1 verwendet.

## Wert

Ein Gleitkommawert, der den Lautstärkewert darstellt, zwischen 0 (niedrigste) und 1 (höchste).

Wenn [SSML](https://www.w3.org/TR/speech-synthesis/) verwendet wird, wird dieser Wert durch [Prosody-Tags](https://www.w3.org/TR/speech-synthesis/#S3.2.4) im Markup überschrieben.

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
  utterThis.volume = 0.5;
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
