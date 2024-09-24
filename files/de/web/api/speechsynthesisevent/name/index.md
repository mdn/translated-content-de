---
title: "SpeechSynthesisEvent: name-Eigenschaft"
short-title: name
slug: Web/API/SpeechSynthesisEvent/name
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Speech API")}}

Die **`name`**-Schreibgeschützte Eigenschaft des {{domxref("SpeechSynthesisUtterance")}}-Interfaces gibt den Namen zurück, der mit bestimmten Arten von Ereignissen verbunden ist, die auftreten, während der {{domxref("SpeechSynthesisUtterance.text")}} gesprochen wird: den Namen des [SSML](https://www.w3.org/TR/speech-synthesis/#S3.3.2)-Markers im Falle eines {{domxref("SpeechSynthesisUtterance.mark_event", "mark")}}-Ereignisses, oder die Art der Grenze im Falle eines {{domxref("SpeechSynthesisUtterance.boundary_event", "boundary")}}-Ereignisses.

## Wert

Ein String.

## Beispiele

```js
utterThis.onboundary = (event) => {
  console.log(
    `${event.name} boundary reached after ${event.elapsedTime} seconds.`,
  );
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Speech API](/de/docs/Web/API/Web_Speech_API)
