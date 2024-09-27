---
title: "SpeechSynthesis: resume()-Methode"
short-title: resume()
slug: Web/API/SpeechSynthesis/resume
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die **`resume()`**-Methode der [`SpeechSynthesis`](/de/docs/Web/API/SpeechSynthesis)-Schnittstelle versetzt das `SpeechSynthesis`-Objekt in einen nicht pausierten Zustand: Sie setzt es fort, wenn es bereits pausiert war.

## Syntax

```js-nolint
resume()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
let synth = window.speechSynthesis;

let utterance1 = new SpeechSynthesisUtterance(
  "How about we say this now? This is quite a long sentence to say.",
);
let utterance2 = new SpeechSynthesisUtterance(
  "We should say another sentence too, just to be on the safe side.",
);

synth.speak(utterance1);
synth.speak(utterance2);

synth.pause(); // pauses utterances being spoken
synth.resume(); // resumes speaking
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
