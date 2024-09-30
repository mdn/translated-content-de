---
title: "TextTrack: inBandMetadataTrackDispatchType-Eigenschaft"
short-title: inBandMetadataTrackDispatchType
slug: Web/API/TextTrack/inBandMetadataTrackDispatchType
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("WebVTT")}}

Die schreibgeschützte Eigenschaft **`inBandMetadataTrackDispatchType`** des [`TextTrack`](/de/docs/Web/API/TextTrack)-Interfaces gibt den in-band Metadaten-Dispatch-Typ des Texttracks zurück, der durch das [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt dargestellt wird.

Ein in-band Metadaten-Dispatch-Typ ist ein String, der speziell für in-band Metadaten-Tracks aus einer Medienressource extrahiert wird. Ein Beispiel für eine Medienressource, die solche Tracks haben könnte, ist eine Fernsehsendung, die im Internet gestreamt wird. Texttracks können verwendet werden, um Metadaten für gezielte Werbung, zusätzliche Informationen wie Rezeptdaten während einer Kochshow oder Trivia-Spiel-Daten während einer Gameshow zu enthalten.

Der Wert dieses Attributs könnte verwendet werden, um diese Tracks an spezielle Skriptmodule anzuhängen, sobald sie geladen werden.

## Wert

Ein String, der den `inBandMetadataTrackDispatchType` enthält, oder ein leerer String.

## Beispiele

Im folgenden Beispiel wird der Wert von `inBandMetadataTrackDispatchType` in die Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.inBandMetadataTrackDispatchType);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
