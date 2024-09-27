---
title: "SpeechRecognitionResult: isFinal Eigenschaft"
short-title: isFinal
slug: Web/API/SpeechRecognitionResult/isFinal
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`isFinal`** Nur-Lese-Eigenschaft der [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult) Schnittstelle ist ein boolescher Wert, der angibt, ob dieses Ergebnis final (`true`) ist oder nicht (`false`) — wenn ja, dann wird dieses Ergebnis zum letzten Mal zurückgegeben; wenn nicht, dann ist dieses Ergebnis ein Zwischenergebnis und kann später aktualisiert werden.

## Wert

Ein boolescher Wert.

## Beispiele

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

  console.log(event.results[0].isFinal);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
