---
title: "SpeechSynthesis: cancel()-Methode"
short-title: cancel()
slug: Web/API/SpeechSynthesis/cancel
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die **`cancel()`**-Methode der [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)
Schnittstelle entfernt alle Äußerungen aus der Warteschlange.

Wenn eine Äußerung gerade gesprochen wird, wird das Sprechen sofort gestoppt.

## Syntax

```js-nolint
cancel()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

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

synth.cancel(); // utterance1 stops being spoken immediately, and both are removed from the queue
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
