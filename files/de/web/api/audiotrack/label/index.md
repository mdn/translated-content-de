---
title: "AudioTrack: label-Eigenschaft"
short-title: label
slug: Web/API/AudioTrack/label
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **{{domxref("AudioTrack")}}**
Eigenschaft **`label`** gibt einen String zurück, der das für Menschen lesbare Label des Audiotracks angibt, sofern eines verfügbar ist; andernfalls wird ein leerer String zurückgegeben.

## Wert

Ein String, der das für Menschen lesbare Label des Tracks angibt, sofern eines
in den Track-Metadaten verfügbar ist. Andernfalls wird ein leerer String (`""`)
zurückgegeben.

Zum Beispiel könnte ein Track, dessen {{domxref("AudioTrack.kind", "kind")}} `"commentary"` ist, ein `label` wie
`"Commentary with director Mark Markmarkimark and star Donna Donnalidon"` haben.

## Beispiele

Dieses Beispiel gibt ein Array von Track-Arten und Labels für einen möglichen Einsatz in einer Benutzeroberfläche zurück, um Audiotracks für ein bestimmtes Medienelement auszuwählen. Die Liste wird gefiltert, um nur bestimmte Track-Arten zuzulassen.

```js
function getTrackList(el) {
  const trackList = [];
  const wantedKinds = [
    "main",
    "alternative",
    "main-desc",
    "translation",
    "commentary",
  ];

  el.audioTracks.forEach((track) => {
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

Die resultierende `trackList` enthält ein Array von Audiotracks, deren
`kind` eines der in dem Array `wantedKinds` ist, wobei jeder Eintrag die {{domxref("AudioTrack.id", "id")}}, {{domxref("AudioTrack.kind", "kind")}}, und das `label` des Tracks bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
