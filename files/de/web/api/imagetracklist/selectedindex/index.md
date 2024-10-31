---
title: "ImageTrackList: Eigenschaft selectedIndex"
short-title: selectedIndex
slug: Web/API/ImageTrackList/selectedIndex
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`selectedIndex`**-Eigenschaft der [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)-Schnittstelle gibt den `Index` des ausgewählten Tracks zurück.

## Wert

Ein ganzzahliger Wert.

## Beispiele

Das folgende Beispiel gibt den Wert von `selectedIndex` in der Konsole aus.

```js
let tracks = imageDecoder.tracks;
console.log(tracks.selectedIndex);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
