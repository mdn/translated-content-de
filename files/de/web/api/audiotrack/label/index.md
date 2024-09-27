---
title: "AudioTrack: label-Eigenschaft"
short-title: label
slug: Web/API/AudioTrack/label
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **[`AudioTrack`](/de/docs/Web/API/AudioTrack)**
Eigenschaft **`label`** liefert eine Zeichenkette zurück, die das für Menschen lesbare Label des Audiotracks angibt, falls vorhanden; andernfalls wird eine leere Zeichenkette zurückgegeben.

## Wert

Eine Zeichenkette, die das für Menschen lesbare Label des Tracks angibt, falls eines in den Spurmetadaten verfügbar ist. Andernfalls wird eine leere Zeichenkette (`""`) zurückgegeben.

Zum Beispiel könnte ein Track, dessen [`kind`](/de/docs/Web/API/AudioTrack/kind) `"commentary"` ist,
ein `label` wie
`"Commentary with director Mark Markmarkimark and star Donna Donnalidon"` haben.

## Beispiele

Dieses Beispiel gibt ein Array von Track-Arten und Labels zurück, das potenziell in einer Benutzeroberfläche verwendet werden kann, um Audiotracks für ein angegebenes Medien-Element auszuwählen. Die Liste wird gefiltert, um nur bestimmte Track-Arten zuzulassen.

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

Das resultierende `trackList` enthält ein Array von Audio-Tracks, deren
`kind` einer der Einträge im Array `wantedKinds` ist, wobei jeder Eintrag die [`id`](/de/docs/Web/API/AudioTrack/id), [`kind`](/de/docs/Web/API/AudioTrack/kind) und `label` des Tracks bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
