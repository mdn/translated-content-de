---
title: "SpeechSynthesis: pending-Eigenschaft"
short-title: pending
slug: Web/API/SpeechSynthesis/pending
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die **`pending`** schreibgeschützte Eigenschaft des
[`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis) Interfaces ist ein boolescher Wert, der
`true` zurückgibt, wenn sich unausgesprochene Äußerungen in der Warteschlange befinden.

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

const amIPending = synth.pending; // will return true if utterance 1 is still being spoken and utterance 2 is in the queue
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
