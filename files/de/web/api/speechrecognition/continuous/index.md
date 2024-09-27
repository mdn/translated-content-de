---
title: "SpeechRecognition: continuous-Eigenschaft"
short-title: continuous
slug: Web/API/SpeechRecognition/continuous
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("Web Speech API")}}

Die **`continuous`**-Eigenschaft des [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces steuert, ob kontinuierliche Ergebnisse für jede Erkennung zurückgegeben werden oder nur ein einzelnes Ergebnis.

Standardmäßig ist sie auf einzelne Ergebnisse (`false`) gesetzt.

## Wert

Ein boolescher Wert, der den aktuellen kontinuierlichen Status von `SpeechRecognition` repräsentiert. `true` bedeutet kontinuierlich, und `false` bedeutet nicht kontinuierlich (einzelnes Ergebnis jedes Mal).

## Beispiele

Dieser Code ist ein Auszug aus unserem Beispiel [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
