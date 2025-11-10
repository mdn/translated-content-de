---
title: "SpeechSynthesis: speak() Methode"
short-title: speak()
slug: Web/API/SpeechSynthesis/speak
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("Web Speech API")}}

Die **`speak()`** Methode des [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)
Interfaces fügt eine [`utterance`](/de/docs/Web/API/SpeechSynthesisUtterance) zur Äußerungswarteschlange hinzu; sie wird gesprochen, sobald alle vorher in die Warteschlange gestellten Äußerungen abgearbeitet wurden.

## Syntax

```js-nolint
speak(utterance)
```

### Parameter

- `utterance`
  - : Ein [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) Objekt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Snippet ist ein Auszug aus unserem [Speech synthesizer Demo](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speak-easy-synthesis/script.js) ([live ansehen](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/)). Wenn ein Formular, das den zu sprechenden Text enthält, eingereicht wird, erstellen wir (unter anderem) eine neue Äußerung, die diesen Text enthält, und sprechen ihn, indem wir ihn als Parameter an `speak()` übergeben.

```js
const synth = window.speechSynthesis;

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
