---
title: "SpeechSynthesisUtterance: pitch Eigenschaft"
short-title: pitch
slug: Web/API/SpeechSynthesisUtterance/pitch
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`pitch`**-Eigenschaft der {{domxref("SpeechSynthesisUtterance")}}-Schnittstelle liest und setzt die Tonhöhe, mit der der Ausdruck gesprochen wird.

Wenn sie nicht gesetzt ist, wird ein Standardwert von 1 verwendet.

## Wert

Ein Float, der den Tonhöhenwert darstellt.
Er kann zwischen 0 (niedrigste) und 2 (höchste) variieren, wobei 1 die Standardtonhöhe für die aktuelle Plattform oder Stimme ist. Einige Sprachsynthese-Engines oder Stimmen können die minimalen und maximalen Raten weiter einschränken.
Wenn [SSML](https://www.w3.org/TR/speech-synthesis/) verwendet wird, wird dieser Wert durch [Prosodie-Tags](https://www.w3.org/TR/speech-synthesis/#S3.2.4) im Markup überschrieben.

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
