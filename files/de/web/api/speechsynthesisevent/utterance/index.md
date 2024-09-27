---
title: "SpeechSynthesisEvent: utterance-Eigenschaft"
short-title: utterance
slug: Web/API/SpeechSynthesisEvent/utterance
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die **`utterance`** Leseeigenschaft der Schnittstelle [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) gibt die [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) Instanz zurück, auf der das Ereignis ausgelöst wurde.

## Wert

Ein [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance) Objekt.

## Beispiele

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  console.log(
    `Speech paused at character ${event.charIndex} of "${event.utterance.text}", which is "${char}".`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
