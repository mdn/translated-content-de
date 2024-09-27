---
title: "SpeechSynthesisUtterance: lang Eigenschaft"
short-title: lang
slug: Web/API/SpeechSynthesisUtterance/lang
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("Web Speech API")}}

Die **`lang`**-Eigenschaft des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Interface erhält und setzt die Sprache der Äußerung.

Falls nicht gesetzt, wird die Sprache der App (d.h. der {{htmlelement("html")}} [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Wert) verwendet, oder die Standard-Sprache des Benutzers, falls diese ebenfalls nicht gesetzt ist.

## Wert

Ein String, der einen BCP 47-Sprachcode darstellt.

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
  utterThis.lang = "en-US";
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
