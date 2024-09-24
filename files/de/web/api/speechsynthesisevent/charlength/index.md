---
title: "SpeechSynthesisEvent: charLength Eigenschaft"
short-title: charLength
slug: Web/API/SpeechSynthesisEvent/charLength
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die schreibgeschützte **`charLength`**-Eigenschaft der {{DOMxRef("SpeechSynthesisEvent")}}-Schnittstelle gibt die Anzahl der Zeichen zurück, die noch gesprochen werden müssen, nachdem das Zeichen an der {{DOMxRef("SpeechSynthesisEvent.charIndex", "charIndex")}}-Position gesprochen wurde.

Wenn die Sprachausgabe-Engine dies nicht bestimmen kann, wird 0 zurückgegeben.

## Wert

Ein ganzzahliger Wert.

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
