---
title: "SpeechSynthesisUtterance: text-Eigenschaft"
short-title: text
slug: Web/API/SpeechSynthesisUtterance/text
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`text`**-Eigenschaft der
{{domxref("SpeechSynthesisUtterance")}}-Schnittstelle ruft den Text ab und legt ihn fest, der synthetisiert wird, wenn die Äußerung gesprochen wird.

Der Text kann als Klartext oder als gut geformtes [SSML](https://www.w3.org/TR/speech-synthesis/)-Dokument bereitgestellt werden.
Die SSML-Tags werden von Geräten entfernt, die SSML nicht unterstützen.

## Wert

Ein String, der den zu synthetisierenden Text darstellt.
Die maximale Länge des Textes, der in jeder Äußerung gesprochen werden kann, beträgt 32.767 Zeichen.

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
  console.log(utterThis.text);
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
