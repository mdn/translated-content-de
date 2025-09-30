---
title: "SpeechRecognition: interimResults-Eigenschaft"
short-title: interimResults
slug: Web/API/SpeechRecognition/interimResults
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`interimResults`**-Eigenschaft des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces steuert, ob vorläufige Ergebnisse zurückgegeben werden sollen (`true`) oder nicht (`false`). Vorläufige Ergebnisse sind Ergebnisse, die noch nicht endgültig sind (z.B. ist die [`SpeechRecognitionResult.isFinal`](/de/docs/Web/API/SpeechRecognitionResult/isFinal)-Eigenschaft `false`).

Der Standardwert für **`interimResults`** ist `false`.

## Wert

Ein boolescher Wert, der den Zustand der aktuellen vorläufigen Ergebnisse von `SpeechRecognition` darstellt. `true` bedeutet, dass vorläufige Ergebnisse zurückgegeben werden, und `false` bedeutet, dass sie nicht zurückgegeben werden.

## Beispiele

Dieser Code ist ein Auszug aus unserem [Sprachfarbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
const recognition = new SpeechRecognition();
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
