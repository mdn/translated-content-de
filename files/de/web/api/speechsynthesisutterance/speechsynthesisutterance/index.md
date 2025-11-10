---
title: "SpeechSynthesisUtterance: SpeechSynthesisUtterance() Konstruktor"
short-title: SpeechSynthesisUtterance()
slug: Web/API/SpeechSynthesisUtterance/SpeechSynthesisUtterance
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Der `SpeechSynthesisUtterance()` Konstruktor der [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) Schnittstelle gibt eine neue Instanz des `SpeechSynthesisUtterance`-Objekts zurück.

## Syntax

```js-nolint
new SpeechSynthesisUtterance(text)
```

### Parameter

- `text`
  - : Ein String, der den Text enthält, der synthetisiert wird, wenn die Äußerung gesprochen wird.

## Beispiele

Der folgende Ausschnitt stammt aus unserem [Speech synthesizer Demo](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speak-easy-synthesis).

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
