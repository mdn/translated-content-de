---
title: "ImageTrack: Eigenschaft selected"
short-title: selected
slug: Web/API/ImageTrack/selected
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`selected`** Eigenschaft des [`ImageTrack`](/de/docs/Web/API/ImageTrack) Interfaces gibt `true` zurück, wenn die Spur zur Dekodierung ausgewählt ist.

## Wert

Ein {{jsxref("Boolean")}}, wenn `true`, ist die Spur zur Dekodierung ausgewählt.

## Beispiele

Das folgende Beispiel gibt den Wert von `selected` in der Konsole aus.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track.selected); // this is the selected track so should return true.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
