---
title: "SpeechSynthesisUtterance: text-Eigenschaft"
short-title: text
slug: Web/API/SpeechSynthesisUtterance/text
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Web Speech API")}}

Die **`text`**-Eigenschaft der [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Schnittstelle legt den Text fest, der synthetisiert wird, wenn die Äußerung gesprochen wird, und liest ihn aus.

Der Text kann als einfacher Text oder als wohlgeformtes [SSML](https://www.w3.org/TR/speech-synthesis/)-Dokument vorliegen. Die SSML-Tags werden von Geräten entfernt, die SSML nicht unterstützen.

## Wert

Ein String, der den zu synthetisierenden Text repräsentiert. Die maximale Länge des Textes, der in jeder Äußerung gesprochen werden kann, beträgt 32.767 Zeichen.

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
