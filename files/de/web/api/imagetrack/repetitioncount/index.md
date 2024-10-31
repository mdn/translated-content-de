---
title: "ImageTrack: repetitionCount-Eigenschaft"
short-title: repetitionCount
slug: Web/API/ImageTrack/repetitionCount
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`repetitionCount`**-Eigenschaft des [`ImageTrack`](/de/docs/Web/API/ImageTrack)-Interfaces gibt die Anzahl der Wiederholungen dieses Tracks zurück.

## Wert

Ein Ganzzahlwert.

## Beispiele

Das folgende Beispiel gibt den Wert von `repetitionCount` in der Konsole aus.

```js
let track = imageDecoder.tracks.selectedTrack;
console.log(track.repetitionCount);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
