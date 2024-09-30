---
title: "SpeechRecognitionResult: item()-Methode"
short-title: item()
slug: Web/API/SpeechRecognitionResult/item
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Der **`item`**-Getter des
[`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Interfaces ist ein Standard-Getter, der es ermöglicht,
[`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte innerhalb des Ergebnisses über
Array-Syntax zuzugreifen.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Index des Elements, das abgerufen werden soll.

### Rückgabewert

Ein [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekt.

## Beispiele

Dieser Code ist ein Auszug aus unserem Beispiel [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js).

```js
recognition.onresult = (event) => {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at position 0.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects
  // that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
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
