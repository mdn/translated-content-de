---
title: "SpeechSynthesis: paused-Eigenschaft"
short-title: paused
slug: Web/API/SpeechSynthesis/paused
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Speech API")}}

Die **`paused`** schreibgeschützte Eigenschaft des {{domxref("SpeechSynthesis")}}-Interfaces ist ein boolescher Wert, der `true` zurückgibt, wenn das `SpeechSynthesis`-Objekt im pausierten Zustand ist, oder `false`, wenn nicht.

Sie kann auf {{domxref("SpeechSynthesis.pause()", "paused")}} gesetzt werden, auch wenn aktuell nichts über sie gesprochen wird. Wenn dann {{domxref("SpeechSynthesisUtterance","utterances")}} zur Äußerungsschlange hinzugefügt werden, werden sie nicht gesprochen, bis das `SpeechSynthesis`-Objekt mit {{domxref("SpeechSynthesis.resume()")}} fortgesetzt wird.

## Wert

Ein boolescher Wert.

## Beispiele

```js
const synth = window.speechSynthesis;

synth.pause();

const amIPaused = synth.paused; // wird true zurückgeben
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
