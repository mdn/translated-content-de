---
title: "VideoTrack: label-Eigenschaft"
short-title: label
slug: Web/API/VideoTrack/label
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTML DOM")}}

Die unveränderliche **[`VideoTrack`](/de/docs/Web/API/VideoTrack)**-Eigenschaft **`label`** gibt einen String zurück, der das menschenlesbare Label des Video-Tracks angibt, falls verfügbar; andernfalls wird ein leerer String zurückgegeben.

## Wert

Ein String, der das menschenlesbare Label des Tracks angibt, falls es in den Track-Metadaten verfügbar ist. Andernfalls wird ein leerer String (`""`) zurückgegeben.

Zum Beispiel könnte ein Track, dessen [`kind`](/de/docs/Web/API/VideoTrack/kind) `"sign"` ist, ein `label` wie `"A sign-language interpretation."` haben.

## Beispiele

Dieses Beispiel gibt ein Array mit Track-Arten und Labels zurück, das potenziell in einer Benutzeroberfläche zur Auswahl von Video-Tracks für ein angegebenes Medienelement verwendet werden kann. Die Liste wird gefiltert, um nur bestimmte Track-Arten zuzulassen.

```js
function getTrackList(el) {
  const trackList = [];
  const wantedKinds = ["main", "alternative", "commentary"];

  el.videoTracks.forEach((track) => {
    if (wantedKinds.includes(track.kind)) {
      trackList.push({
        id: track.id,
        kind: track.kind,
        label: track.label,
      });
    }
  });
  return trackList;
}
```

Das resultierende `trackList` enthält ein Array von Video-Tracks, deren `kind` in dem Array `wantedKinds` enthalten ist. Jeder Eintrag liefert die [`id`](/de/docs/Web/API/VideoTrack/id), [`kind`](/de/docs/Web/API/VideoTrack/kind) und das `label` des Tracks.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
