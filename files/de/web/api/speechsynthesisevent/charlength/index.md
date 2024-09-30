---
title: "SpeechSynthesisEvent: charLength-Eigenschaft"
short-title: charLength
slug: Web/API/SpeechSynthesisEvent/charLength
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte **`charLength`**-Eigenschaft der [`SpeechSynthesisEvent`](/de/docs/Web/API/SpeechSynthesisEvent)-Schnittstelle gibt die Anzahl der Zeichen zurück, die nach dem Zeichen an der [`charIndex`](/de/docs/Web/API/SpeechSynthesisEvent/charIndex)-Position noch gesprochen werden müssen.

Wenn die Sprachausgabe-Engine es nicht bestimmen kann, wird 0 zurückgegeben.

## Wert

Eine Ganzzahl.

## Beispiele

```js
utterThis.onpause = (event) => {
  const char = event.utterance.text.charAt(event.charIndex);
  const charLeft = event.charLength;
  if (charLeft) {
    console.log(
      `Speech paused. There are still ${charLeft} characters to be spoken.`,
    );
  } else {
    console.log(
      "Speech paused. The underlying speech engine can't tell how many characters are left.",
    );
  }
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
