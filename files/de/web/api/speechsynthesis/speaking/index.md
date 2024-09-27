---
title: "SpeechSynthesis: speaking Eigenschaft"
short-title: speaking
slug: Web/API/SpeechSynthesis/speaking
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte Eigenschaft **`speaking`** des [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Interfaces ist ein boolescher Wert, der `true` zurückgibt, wenn eine Äußerung gerade gesprochen wird – selbst wenn `SpeechSynthesis` sich in einem [`paused`](/de/docs/Web/API/SpeechSynthesis/pause)-Zustand befindet.

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

const amISpeaking = synth.speaking; // will return true if utterance 1 or utterance 2 are currently being spoken
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
