---
title: "SpeechRecognitionAlternative: confidence-Eigenschaft"
short-title: confidence
slug: Web/API/SpeechRecognitionAlternative/confidence
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("Web Speech API")}}

Die **`confidence`** schreibgeschützte Eigenschaft des
[`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Interfaces gibt eine numerische Schätzung zurück, wie sicher das Spracherkennungssystem ist, dass die Erkennung korrekt ist.

> [!NOTE]
> An der Implementierung von `confidence` in Mozilla wird noch gearbeitet — derzeit scheint sie immer 1 zurückzugeben.

## Wert

Eine Zahl zwischen 0 und 1.

## Beispiele

Dieser Code ist ein Ausschnitt aus unserem
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
  console.log(`Confidence: ${event.results[0][0].confidence}`);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
