---
title: "SpeechRecognitionAlternative: transcript-Eigenschaft"
short-title: transcript
slug: Web/API/SpeechRecognitionAlternative/transcript
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte **`transcript`**-Eigenschaft des
[`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Interfaces gibt eine Zeichenkette zurück, die das
Transkript des erkannten Wortes oder der erkannten Wörter enthält.

Bei kontinuierlicher Erkennung wird führendes oder nachfolgendes Leerzeichen bei Bedarf hinzugefügt, sodass die Verkettung aufeinanderfolgender [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)s ein korrektes Transkript der Sitzung ergibt.

## Wert

Ein String.

## Beispiele

Dieser Code ist aus unserem
[Speech-Farbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel entnommen.

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
