---
title: "SpeechRecognitionResult: item() Methode"
short-title: item()
slug: Web/API/SpeechRecognitionResult/item
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Der **`item`** Getter des [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Interfaces ist ein Standard-Getter, der es ermöglicht, [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte innerhalb des Ergebnisses über die Array-Syntax zuzugreifen.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Index des zu holenden Elements.

### Rückgabewert

Ein [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekt.

## Beispiele

Dieser Code ist ein Auszug aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
recognition.onresult = (event) => {
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
