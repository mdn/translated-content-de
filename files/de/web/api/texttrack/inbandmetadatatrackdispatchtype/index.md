---
title: "TextTrack: Eigenschaft inBandMetadataTrackDispatchType"
short-title: inBandMetadataTrackDispatchType
slug: Web/API/TextTrack/inBandMetadataTrackDispatchType
l10n:
  sourceCommit: 0496bb2fcef13172325e1cc25a5fc71410506557
---

{{APIRef("WebVTT")}}

Die **`inBandMetadataTrackDispatchType`**-Schreibgeschützte Eigenschaft der [`TextTrack`](/de/docs/Web/API/TextTrack)-Schnittstelle gibt den In-Band-Metadaten-Dispath-Typ des Texttracks des durch das [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt repräsentierten Texttracks zurück.

Ein In-Band-Metadaten-Dispath-Typ ist ein aus einer Medienressource extrahierter String, der speziell für In-Band-Metadaten-Tracks bestimmt ist. Ein Beispiel für eine Medienressource, die solche Tracks enthalten könnte, ist eine TV-Station, die eine Sendung im Web streamt. Text-Tracks können verwendet werden, um Metadaten für gezielte Werbung, zusätzliche Informationen wie Rezeptdaten während einer Kochsendung oder Daten für ein Quizspiel während einer Gameshow einzubinden.

Der Wert dieses Attributs könnte genutzt werden, um diese Tracks beim Laden an spezielle Skriptmodule zu binden.

## Wert

Ein String, der den `inBandMetadataTrackDispatchType` enthält, oder ein leerer String.

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
