---
title: "SpeechSynthesis: speak()-Methode"
short-title: speak()
slug: Web/API/SpeechSynthesis/speak
l10n:
  sourceCommit: 3143a6094e7b87cf1a96b61f9551fb4d95049777
---

{{APIRef("Web Speech API")}}

Die **`speak()`**-Methode der [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Schnittstelle fügt ein [`utterance`](/de/docs/Web/API/SpeechSynthesisUtterance) zur Aussagenschlange hinzu; sie wird gesprochen, wenn alle anderen vorher in der Schlange stehenden Äußerungen gesprochen wurden.

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

Dieses Codebeispiel ist aus unserem [Sprachsynthesizer-Demo](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speak-easy-synthesis/script.js) ([live ansehen](https://mdn.github.io/dom-examples/web-speech-api/speak-easy-synthesis/)) entnommen. Wenn ein Formular, das den Text enthält, den wir sprechen möchten, abgeschickt wird, erstellen wir (neben anderen Aktionen) eine neue Äußerung mit diesem Text und sprechen sie dann, indem wir sie als Parameter in `speak()` einfügen.

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
