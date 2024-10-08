---
title: "SpeechSynthesis: paused-Eigenschaft"
short-title: paused
slug: Web/API/SpeechSynthesis/paused
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte **`paused`**-Eigenschaft des [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Interfaces ist ein boolescher Wert, der `true` zurückgibt, wenn sich das `SpeechSynthesis`-Objekt in einem pausierten Zustand befindet, oder `false`, wenn dies nicht der Fall ist.

Sie kann auf [`paused`](/de/docs/Web/API/SpeechSynthesis/pause) gesetzt werden, auch wenn momentan nichts darüber gesprochen wird. Falls [`utterances`](/de/docs/Web/API/SpeechSynthesisUtterance) dann zur Äußerungswarteschlange hinzugefügt werden, werden sie nicht gesprochen, bis das `SpeechSynthesis`-Objekt mit [`SpeechSynthesis.resume()`](/de/docs/Web/API/SpeechSynthesis/resume) fortgesetzt wird.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const synth = window.speechSynthesis;

synth.pause();

const amIPaused = synth.paused; // will return true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
