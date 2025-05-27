---
title: "SpeechSynthesisUtterance: pitch-Eigenschaft"
short-title: pitch
slug: Web/API/SpeechSynthesisUtterance/pitch
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Die **`pitch`**-Eigenschaft des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Interfaces ruft die Tonhöhe ab, mit der die Äußerung gesprochen wird, und legt sie fest.

Wenn sie nicht gesetzt ist, wird ein Standardwert von 1 verwendet.

## Wert

Ein Float, der den Tonhöhenwert darstellt. Er kann zwischen 0 (niedrigste) und 2 (höchste) liegen, wobei 1 die Standard-Tonhöhe für die aktuelle Plattform oder Stimme ist. Einige Sprachsynthese-Engines oder Stimmen können die minimalen und maximalen Raten weiter einschränken. Wenn [SSML](https://www.w3.org/TR/speech-synthesis/) verwendet wird, wird dieser Wert durch [Prosodietags](https://www.w3.org/TR/speech-synthesis/#S3.2.4) im Markup überschrieben.

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
  utterThis.pitch = 1.5;
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
