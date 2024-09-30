---
title: SpeechRecognitionResultList
slug: Web/API/SpeechRecognitionResultList
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognitionResultList`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert eine Liste von [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekten, oder ein einzelnes Objekt, wenn Ergebnisse im [`non-continuous`](/de/docs/Web/API/SpeechRecognition/continuous)-Modus erfasst werden.

## Instanz-Eigenschaften

- [`SpeechRecognitionResultList.length`](/de/docs/Web/API/SpeechRecognitionResultList/length) {{ReadOnlyInline}}
  - : Gibt die Länge des "Arrays" zurück — die Anzahl der [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte in der Liste.

## Instanz-Methoden

- [`SpeechRecognitionResultList.item`](/de/docs/Web/API/SpeechRecognitionResultList/item)
  - : Ein Standard-Getter, der es ermöglicht, auf [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Objekte in der Liste über Array-Syntax zuzugreifen.

## Beispiele

Dieser Code ist ein Auszug aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

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
