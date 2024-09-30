---
title: "SpeechRecognitionAlternative: transcript-Eigenschaft"
short-title: transcript
slug: Web/API/SpeechRecognitionAlternative/transcript
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte Eigenschaft **`transcript`** der [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Schnittstelle gibt einen String zurück, der das Transkript des erkannten Wortes oder der erkannten Wörter enthält.

Bei kontinuierlicher Erkennung wird führendes oder nachfolgendes Leerzeichen dort eingefügt, wo es notwendig ist, damit die Verkettung aufeinander folgender [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)s ein richtiges Transkript der Sitzung ergibt.

## Wert

Ein String.

## Beispiele

Dieses Code-Beispiel stammt aus unserem [Sprachfarbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

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
