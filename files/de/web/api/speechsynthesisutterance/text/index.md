---
title: "SpeechSynthesisUtterance: text-Eigenschaft"
short-title: text
slug: Web/API/SpeechSynthesisUtterance/text
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Die **`text`**-Eigenschaft der Schnittstelle [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) ruft den Text ab oder setzt ihn, der synthetisiert wird, wenn der Ausspruch gesprochen wird.

Der Text kann als reiner Text oder als wohlgeformtes [SSML](https://www.w3.org/TR/speech-synthesis/)-Dokument bereitgestellt werden. Die SSML-Tags werden von Geräten entfernt, die SSML nicht unterstützen.

## Wert

Ein String, der den zu synthetisierenden Text darstellt. Die maximale Länge des Textes, der in jedem Ausspruch gesprochen werden kann, beträgt 32.767 Zeichen.

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
