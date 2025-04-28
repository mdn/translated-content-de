---
title: "SpeechSynthesis: speak() Methode"
short-title: speak()
slug: Web/API/SpeechSynthesis/speak
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("Web Speech API")}}

Die **`speak()`**-Methode der [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Schnittstelle fügt dem Äußerungs-Queue eine [`utterance`](/de/docs/Web/API/SpeechSynthesisUtterance) hinzu; sie wird gesprochen, wenn alle vorher in die Warteschlange gestellten Äußerungen gesprochen wurden.

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

Dieses Snippet ist ein Auszug aus unserem [Speech Synthesizer Demo](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speak-easy-synthesis/script.js) ([live ansehen](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/)). Wenn ein Formular, das den Text enthält, den wir sprechen möchten, gesendet wird, erstellen wir (unter anderem) eine neue Äußerung, die diesen Text enthält, und sprechen sie dann, indem wir sie als Parameter in `speak()` übergeben.

```js
const synth = window.speechSynthesis;

// …

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
