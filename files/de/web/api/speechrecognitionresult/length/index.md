---
title: "SpeechRecognitionResult: length-Eigenschaft"
short-title: length
slug: Web/API/SpeechRecognitionResult/length
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`length`** schreibgeschützte Eigenschaft der [`SpeechRecognitionResult`](/de/docs/Web/API/SpeechRecognitionResult)-Schnittstelle gibt die Länge des "Arrays" zurück — die Anzahl der [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative)-Objekte, die im Ergebnis enthalten sind (auch als "n-beste Alternativen" bezeichnet).

Die Anzahl der im Ergebnis enthaltenen Alternativen hängt davon ab, auf welchen Wert die Eigenschaft [`SpeechRecognition.maxAlternatives`](/de/docs/Web/API/SpeechRecognition/maxAlternatives) gesetzt wurde, als die Spracherkennung zuerst gestartet wurde.

## Wert

Eine Zahl.

## Beispiele

Dieser Code ist ein Auszug aus unserem [Sprachfarbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) Beispiel.

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

  console.log(event.results[0].length);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
