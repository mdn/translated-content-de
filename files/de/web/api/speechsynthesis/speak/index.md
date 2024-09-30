---
title: "SpeechSynthesis: speak()-Methode"
short-title: speak()
slug: Web/API/SpeechSynthesis/speak
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`speak()`**-Methode der Schnittstelle [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) fügt eine [`utterance`](/de/docs/Web/API/SpeechSynthesisUtterance) zur `utterance`-Warteschlange hinzu; sie wird gesprochen, wenn alle vorhergehenden `utterances` in der Warteschlange gesprochen wurden.

## Syntax

```js-nolint
speak(utterance)
```

### Parameter

- `utterance`
  - : Ein [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Objekt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Snippet ist aus unserem [Sprachsynthesizer-Demo](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speak-easy-synthesis/script.js) ([Live-Demo ansehen](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/)) entnommen. Wenn ein Formular, das den Text enthält, den wir sprechen möchten, abgeschickt wird, erstellen wir (neben anderen Dingen) eine neue `utterance`, die diesen Text enthält, und sprechen ihn, indem wir ihn als Parameter an `speak()` übergeben.

```js
const synth = window.speechSynthesis;

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
