---
title: "ImageTrack: frameCount-Eigenschaft"
short-title: frameCount
slug: Web/API/ImageTrack/frameCount
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`frameCount`**-Eigenschaft des [`ImageTrack`](/de/docs/Web/API/ImageTrack)-Interfaces gibt die Anzahl der Bilder im Track zurück.

## Wert

Ein ganzzahliger Wert.

## Beispiele

Das folgende Beispiel gibt den Wert von `frameCount` in der Konsole aus.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track.frameCount);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
