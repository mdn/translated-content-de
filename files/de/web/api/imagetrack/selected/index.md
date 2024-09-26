---
title: "ImageTrack: selected-Eigenschaft"
short-title: selected
slug: Web/API/ImageTrack/selected
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SeeCompatTable}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`selected`**-Eigenschaft der {{domxref("ImageTrack")}}-Schnittstelle gibt `true` zurück, wenn die Spur zur Dekodierung ausgewählt ist.

## Wert

Ein {{jsxref("boolean")}}, wenn `true`, ist die Spur zur Dekodierung ausgewählt.

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