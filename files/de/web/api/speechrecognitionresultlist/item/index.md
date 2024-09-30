---
title: "SpeechRecognitionResultList: item()-Methode"
short-title: item()
slug: Web/API/SpeechRecognitionResultList/item
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Der **`item`**-Getter der
[`SpeechRecognitionResultList`](/de/docs/Web/API/SpeechRecognitionResultList)-Schnittstelle ist ein Standard-Getter – er ermöglicht den Zugriff auf
[`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte in der Liste über die Array-Syntax.

## Syntax

```js-nolint
item(index)
```

### Parameter

- `index`
  - : Index des abzurufenden Elements.

### Rückgabewert

Ein [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekt.

## Beispiele

Dieser Code ist ein Auszug aus unserem
[Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

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
