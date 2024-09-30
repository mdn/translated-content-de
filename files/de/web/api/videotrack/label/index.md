---
title: "VideoTrack: label-Eigenschaft"
short-title: label
slug: Web/API/VideoTrack/label
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **[`VideoTrack`](/de/docs/Web/API/VideoTrack)**-Eigenschaft **`label`** gibt eine Zeichenfolge zurück, die die lesbare Bezeichnung des Videotracks angibt, falls eine vorhanden ist; ansonsten wird eine leere Zeichenfolge zurückgegeben.

## Wert

Eine Zeichenfolge, die die lesbare Bezeichnung des Tracks angibt, falls diese in den Track-Metadaten verfügbar ist. Andernfalls wird eine leere Zeichenfolge (`""`) zurückgegeben.

Zum Beispiel könnte ein Track, dessen [`kind`](/de/docs/Web/API/VideoTrack/kind) `"sign"` ist, ein `label` wie `"A sign-language interpretation."` haben.

## Beispiele

Dieses Beispiel gibt ein Array von Track-Typen und Bezeichnungen zurück, das möglicherweise in einer Benutzeroberfläche verwendet wird, um Videotracks für ein bestimmtes Medienelement auszuwählen. Die Liste wird gefiltert, um nur bestimmte Track-Typen zuzulassen.

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

Das resultierende `trackList` enthält ein Array von Videotracks, deren `kind` zu denjenigen im Array `wantedKinds` gehört, wobei jeder Eintrag die[`id`](/de/docs/Web/API/VideoTrack/id), [`kind`](/de/docs/Web/API/VideoTrack/kind) und `label` des Tracks bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
