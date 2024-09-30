---
title: "SpeechSynthesisEvent: charIndex-Eigenschaft"
short-title: charIndex
slug: Web/API/SpeechSynthesisEvent/charIndex
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die **`charIndex`** schreibgeschützte Eigenschaft des [`SpeechSynthesisUtterance`](/de/docs/Web/API/SpeechSynthesisUtterance)-Interfaces gibt die Indexposition des Zeichens in [`SpeechSynthesisUtterance.text`](/de/docs/Web/API/SpeechSynthesisUtterance/text) zurück, das gerade gesprochen wurde, als das Ereignis ausgelöst wurde.

## Wert

Eine Zahl.

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
