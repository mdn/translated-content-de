---
title: "SpeechSynthesisEvent: Eigenschaft charIndex"
short-title: charIndex
slug: Web/API/SpeechSynthesisEvent/charIndex
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte Eigenschaft **`charIndex`** der Schnittstelle {{domxref("SpeechSynthesisUtterance")}} gibt die Indexposition des Zeichens in {{domxref("SpeechSynthesisUtterance.text")}} zurück, das gesprochen wurde, als das Ereignis ausgelöst wurde.

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

## Kompatibilität mit Browsern

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
