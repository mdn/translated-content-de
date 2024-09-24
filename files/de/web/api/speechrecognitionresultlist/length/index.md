---
title: "SpeechRecognitionResultList: length-Eigenschaft"
short-title: Länge
slug: Web/API/SpeechRecognitionResultList/length
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`length`** schreibgeschützte Eigenschaft des
{{domxref("SpeechRecognitionResultList")}}-Interfaces gibt die Länge des
„Arrays“ zurück — die Anzahl der {{domxref("SpeechRecognitionResult")}}-Objekte in der Liste.

## Wert

Eine Zahl.

## Beispiele

Dieser Code ist aus unserem
[Sprach-Farbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js) Beispiel entnommen.

```js
recognition.onresult = (event) => {
  // Die SpeechRecognitionEvent results-Eigenschaft gibt ein SpeechRecognitionResultList-Objekt zurück.
  // Das SpeechRecognitionResultList-Objekt enthält SpeechRecognitionResult-Objekte.
  // Es hat einen Getter, sodass es wie ein Array angesprochen werden kann.
  // Der erste [0] gibt das SpeechRecognitionResult an Position 0 zurück.
  // Jedes SpeechRecognitionResult-Objekt enthält SpeechRecognitionAlternative-Objekte,
  // die einzelne Ergebnisse enthalten.
  // Diese haben ebenfalls Getter, sodass sie wie Arrays angesprochen werden können.
  // Der zweite [0] gibt die SpeechRecognitionAlternative an Position 0 zurück.
  // Wir geben dann die transcript-Eigenschaft des SpeechRecognitionAlternative-Objekts zurück.
  const color = event.results[0][0].transcript;
  diagnostic.textContent = `Result received: ${color}.`;
  bg.style.backgroundColor = color;

  console.log(event.results.length);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
