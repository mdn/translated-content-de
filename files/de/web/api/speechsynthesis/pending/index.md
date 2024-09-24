---
title: "SpeechSynthesis: pending Eigenschaft"
short-title: pending
slug: Web/API/SpeechSynthesis/pending
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte **`pending`**-Eigenschaft des
{{domxref("SpeechSynthesis")}} Interfaces ist ein boolescher Wert, der
`true` zurückgibt, wenn die Äußerungswarteschlange noch ungesprochene Äußerungen enthält.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const synth = window.speechSynthesis;

const utterance1 = new SpeechSynthesisUtterance(
  "How about we say this now? This is quite a long sentence to say.",
);
const utterance2 = new SpeechSynthesisUtterance(
  "We should say another sentence too, just to be on the safe side.",
);

synth.speak(utterance1);
synth.speak(utterance2);

const amIPending = synth.pending; // wird 'true' zurückgeben, wenn Äußerung 1 noch gesprochen wird und Äußerung 2 in der Warteschlange ist
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
