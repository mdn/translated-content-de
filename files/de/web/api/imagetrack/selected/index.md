---
title: "ImageTrack: selected-Eigenschaft"
short-title: selected
slug: Web/API/ImageTrack/selected
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`selected`**-Eigenschaft des [`ImageTrack`](/de/docs/Web/API/ImageTrack)-Interfaces gibt `true` zurück, wenn die Spur für das Decoding ausgewählt ist.

## Wert

Ein {{jsxref("boolean")}}, der, wenn `true`, anzeigt, dass die Spur für das Decoding ausgewählt ist.

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
