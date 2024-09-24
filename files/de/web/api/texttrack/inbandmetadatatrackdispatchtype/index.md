---
title: "TextTrack: inBandMetadataTrackDispatchType-Eigenschaft"
short-title: inBandMetadataTrackDispatchType
slug: Web/API/TextTrack/inBandMetadataTrackDispatchType
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("WebVTT")}}

Die **`inBandMetadataTrackDispatchType`** schreibgeschützte Eigenschaft der {{domxref("TextTrack")}}-Schnittstelle gibt den In-Band-Metadaten-Dispatch-Typ des durch das {{domxref("TextTrack")}}-Objekt dargestellten Texttracks zurück.

Ein In-Band-Metadaten-Dispatch-Typ ist eine Zeichenkette, die aus einer Medienressource speziell für In-Band-Metadatentracks extrahiert wird. Ein Beispiel für eine Medienressource, die solche Tracks enthalten könnte, ist ein Fernsehsender, der eine Sendung im Internet streamt. Texttracks können verwendet werden, um Metadaten für Zielwerbung, zusätzliche Informationen wie Rezeptdaten während einer Kochshow oder Trivia-Spiel-Daten während einer Gameshow einzuschließen.

Der Wert dieses Attributs könnte verwendet werden, um diese Tracks an dedizierte Skriptmodule anzuhängen, sobald sie geladen werden.

## Wert

Eine Zeichenkette, die den `inBandMetadataTrackDispatchType` enthält, oder eine leere Zeichenkette.

## Beispiele

Im folgenden Beispiel wird der Wert von `inBandMetadataTrackDispatchType` in der Konsole ausgegeben.

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
