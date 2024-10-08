---
title: "SpeechSynthesisUtterance: SpeechSynthesisUtterance()-Konstruktor"
short-title: SpeechSynthesisUtterance()
slug: Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Der `SpeechSynthesisUtterance()`-Konstruktor des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Interfaces gibt eine neue Instanz des `SpeechSynthesisUtterance`-Objekts zurück.

## Syntax

```js-nolint
new SpeechSynthesisUtterance(text)
```

### Parameter

- `text`
  - : Ein String, der den Text enthält, der synthetisiert wird, wenn die Äußerung gesprochen wird.

## Beispiele

Das folgende Snippet stammt aus unserem [Sprachsynthesizer-Demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis).

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
