---
title: "VideoTrack: label-Eigenschaft"
short-title: label
slug: Web/API/VideoTrack/label
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **{{domxref("VideoTrack")}}**-Eigenschaft **`label`** gibt einen String zurück, der das lesbare Label des Videotracks angibt, falls verfügbar; andernfalls wird ein leerer String zurückgegeben.

## Wert

Ein String, der das lesbare Label des Tracks angibt, falls eines in den Track-Metadaten verfügbar ist. Andernfalls wird ein leerer String (`""`) zurückgegeben.

Zum Beispiel könnte ein Track, dessen {{domxref("VideoTrack.kind", "kind")}} `"sign"` ist, ein `label` wie `"A sign-language interpretation."` haben.

## Beispiele

Dieses Beispiel gibt ein Array von Track-Typen und Labels für die potenzielle Verwendung in einer Benutzeroberfläche zurück, um Videotracks für ein angegebenes Medienelement auszuwählen. Die Liste wird gefiltert, um nur bestimmte Track-Typen zuzulassen.

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

Das resultierende `trackList` enthält ein Array von Videotracks, deren `kind` eines derjenigen im Array `wantedKinds` ist, wobei jeder Eintrag die {{domxref("VideoTrack.id", "id")}}, {{domxref("VideoTrack.kind", "kind")}} und `label` des Tracks bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
