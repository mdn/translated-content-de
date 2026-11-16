---
title: "SpeechRecognitionAlternative: confidence-Eigenschaft"
short-title: confidence
slug: Web/API/SpeechRecognitionAlternative/confidence
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte Eigenschaft **`confidence`** der Schnittstelle [`SpeechRecognitionAlternative`](/de/docs/Web/API/SpeechRecognitionAlternative) gibt eine numerische Schätzung dafür zurück, wie sicher das Spracherkennungssystem ist, dass die Erkennung korrekt ist.

## Wert

Eine Zahl zwischen 0 und 1. Je höher der Wert, desto sicherer ist sich das Erkennungssystem.

## Beispiele

Dieser Code stammt aus unserem Beispiel [Sprachgesteuerter Farbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js).

```js
recognition.onresult = (event) => {
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
