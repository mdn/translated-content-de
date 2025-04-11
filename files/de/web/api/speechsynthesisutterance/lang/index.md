---
title: "SpeechSynthesisUtterance: lang-Eigenschaft"
short-title: lang
slug: Web/API/SpeechSynthesisUtterance/lang
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Web Speech API")}}

Die **`lang`**-Eigenschaft des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Interfaces ruft die Sprache der Äußerung ab und setzt sie.

Wenn sie nicht gesetzt ist, wird die Sprache der App verwendet (d.h. der `lang`-Wert des {{htmlelement("html")}} [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attributs), oder der Benutzer-Agent-Standard, wenn auch dieser nicht gesetzt ist.

## Wert

Ein String, der einen BCP 47 Sprach-Tag darstellt.

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
