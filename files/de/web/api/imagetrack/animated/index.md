---
title: "ImageTrack: animated-Eigenschaft"
short-title: animated
slug: Web/API/ImageTrack/animated
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`animated`**-Eigenschaft der [`ImageTrack`](/de/docs/Web/API/ImageTrack)-Schnittstelle gibt `true` zurück, wenn die Spur animiert ist und daher mehrere Frames enthält.

## Wert

Ein {{jsxref("boolean")}}, wenn `true`, handelt es sich um eine animierte Spur.

## Beispiele

Das folgende Beispiel gibt den Wert von `animated` auf der Konsole aus.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track.animated);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
