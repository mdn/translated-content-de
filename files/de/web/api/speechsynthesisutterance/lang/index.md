---
title: "SpeechSynthesisUtterance: lang Eigenschaft"
short-title: lang
slug: Web/API/SpeechSynthesisUtterance/lang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("Web Speech API")}}

Die **`lang`**-Eigenschaft des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Interfaces gibt die Sprache der Äußerung an und legt sie fest.

Wenn sie nicht gesetzt ist, wird die Sprache der App (d.h. der {{htmlelement("html")}} [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Wert) verwendet, oder die Benutzereinstellen-Standard, wenn diese ebenfalls nicht festgelegt ist.

## Wert

Ein Zeichenfolgenwert, der einen {{Glossary("BCP_47_language_tag", "BCP 47 Sprach-Tag")}} repräsentiert.

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
