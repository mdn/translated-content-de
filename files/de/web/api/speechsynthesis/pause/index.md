---
title: "SpeechSynthesis: pause()-Methode"
short-title: pause()
slug: Web/API/SpeechSynthesis/pause
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die **`pause()`**-Methode des [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Interfaces versetzt das `SpeechSynthesis`-Objekt in einen pausierten Zustand.

## Syntax

```js-nolint
pause()
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

synth.pause(); // pauses utterances being spoken
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
