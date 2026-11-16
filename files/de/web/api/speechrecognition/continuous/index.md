---
title: "SpeechRecognition: continuous-Eigenschaft"
short-title: continuous
slug: Web/API/SpeechRecognition/continuous
l10n:
  sourceCommit: 25871546e715779a39a2d962820a35e44b6a6df1
---

{{APIRef("Web Speech API")}}

Die Eigenschaft **`continuous`** der Schnittstelle [`SpeechRecognition`](/de/docs/Web/API/SpeechRecognition) gibt an, ob die Spracherkennung ein einzelnes endgültiges Ergebnis oder mehrere endgültige Ergebnisse aus aufeinanderfolgenden Erkennungen zurückgibt.

Der Standardwert ist `false`.

## Wert

Ein boolescher Wert.

- `true` bedeutet, dass die Spracherkennung beliebig viele endgültige Ergebnisse zurückgeben kann – eines pro aufeinanderfolgender Erkennung, wie bei einem Diktat.
- `false` (der Standardwert) bedeutet, dass die Spracherkennung höchstens ein endgültiges Ergebnis zurückgibt.

Diese Einstellung hat keinen Einfluss auf Zwischenergebnisse.
Siehe [`SpeechRecognition.interimResults`](/de/docs/Web/API/SpeechRecognition/interimResults).

## Beispiele

Dieser Code ist ein Auszug aus unserem Beispiel [Sprachgesteuerter Farbwechsler](https://github.com/mdn/dom-examples/blob/main/web-speech-api/speech-color-changer/script.js).

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
