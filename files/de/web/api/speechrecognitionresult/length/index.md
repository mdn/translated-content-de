---
title: "SpeechRecognitionResult: length-Eigenschaft"
short-title: length
slug: Web/API/SpeechRecognitionResult/length
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte Eigenschaft **`length`** des {{domxref("SpeechRecognitionResult")}}-Interfaces gibt die Länge des "Arrays" zurück – die Anzahl der im Ergebnis enthaltenen {{domxref("SpeechRecognitionAlternative")}}-Objekte (auch "n-best alternatives" genannt).

Die Anzahl der im Ergebnis enthaltenen Alternativen hängt davon ab, auf welchen Wert die Eigenschaft {{domxref("SpeechRecognition.maxAlternatives")}} festgelegt wurde, als die Spracherkennung zum ersten Mal initiiert wurde.

## Wert

Eine Zahl.

## Beispiele

Dieser Code stammt aus unserem Beispiel [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js).

```js
recognition.onresult = (event) => {
  // Die SpeechRecognitionEvent results-Eigenschaft gibt ein SpeechRecognitionResultList-Objekt zurück.
  // Das SpeechRecognitionResultList-Objekt enthält SpeechRecognitionResult-Objekte.
  // Es hat einen Getter, sodass es wie ein Array verwendet werden kann.
  // Der erste [0] gibt das SpeechRecognitionResult an Position 0 zurück.
  // Jedes SpeechRecognitionResult-Objekt enthält SpeechRecognitionAlternative-Objekte,
  // die individuelle Ergebnisse enthalten.
  // Diese haben ebenfalls Getter, sodass sie wie Arrays verwendet werden können.
  // Der zweite [0] gibt das SpeechRecognitionAlternative an Position 0 zurück.
  // Wir geben dann die transcript-Eigenschaft des SpeechRecognitionAlternative-Objekts zurück.
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
