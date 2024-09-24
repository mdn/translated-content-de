---
title: "SpeechSynthesisUtterance: lang-Eigenschaft"
short-title: lang
slug: Web/API/SpeechSynthesisUtterance/lang
l10n:
  sourceCommit: 829720f86ce858b9bb8cbe7aa9e0bea148915f8c
---

{{APIRef("Web Speech API")}}

Die **`lang`**-Eigenschaft der Schnittstelle {{domxref("SpeechSynthesisUtterance")}} ruft die Sprache der Äußerung ab und setzt sie.

Wenn sie nicht festgelegt ist, wird die Sprache der Anwendung (d. h. der [`lang`](/de/docs/Web/HTML/Global_attributes/lang)-Wert des {{htmlelement("html")}}-Elements) verwendet oder der Benutzeragenten-Standard, falls auch dieser nicht festgelegt ist.

## Wert

Ein String, der ein BCP 47 Sprach-Tag darstellt.

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
