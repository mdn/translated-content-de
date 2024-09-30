---
title: SpeechRecognitionAlternative
slug: Web/API/SpeechRecognitionAlternative
l10n:
  sourceCommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{APIRef("Web Speech API")}}

Die **`SpeechRecognitionAlternative`**-Schnittstelle der [Web Speech API](/de/docs/Web/API/Web_Speech_API) repräsentiert ein einzelnes Wort, das vom Spracherkennungsdienst erkannt wurde.

## Instanz-Eigenschaften

- [`SpeechRecognitionAlternative.transcript`](/de/docs/Web/API/SpeechRecognitionAlternative/transcript) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der das Transkript des erkannten Wortes enthält.
- [`SpeechRecognitionAlternative.confidence`](/de/docs/Web/API/SpeechRecognitionAlternative/confidence) {{ReadOnlyInline}}
  - : Gibt eine numerische Schätzung zwischen 0 und 1 zurück, wie sicher das Spracherkennungssystem ist, dass die Erkennung korrekt ist.

## Beispiele

Dieser Code stammt aus unserem
[Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) Beispiel.

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
