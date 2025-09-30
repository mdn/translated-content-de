---
title: "SpeechRecognition: continuous-Eigenschaft"
short-title: continuous
slug: Web/API/SpeechRecognition/continuous
l10n:
  sourceCommit: 0a00e01a8c8097ea9786710c3fc703d18f0af951
---

{{APIRef("Web Speech API")}}

Die **`continuous`**-Eigenschaft des
[`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition)-Interfaces steuert, ob für jede Erkennung kontinuierliche Ergebnisse zurückgegeben werden oder nur ein einzelnes Ergebnis.

Standardmäßig werden einzelne Ergebnisse (`false`) zurückgegeben.

## Wert

Ein boolescher Wert, der den aktuellen kontinuierlichen Status des `SpeechRecognition` darstellt. `true` bedeutet kontinuierlich, und `false` bedeutet nicht kontinuierlich (jedes Mal ein einzelnes Ergebnis).

## Beispiele

Dieser Code ist ein Auszug aus unserem [Speech color changer](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js)-Beispiel.

```js
const recognition = new SpeechRecognition();
recognition.continuous = false;
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
