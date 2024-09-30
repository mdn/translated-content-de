---
title: "AudioTrack: label-Eigenschaft"
short-title: label
slug: Web/API/AudioTrack/label
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **[`AudioTrack`](/de/docs/Web/API/AudioTrack)**-Eigenschaft **`label`** gibt eine Zeichenfolge zurück, die das menschenlesbare Label der Audio-Spur angibt, falls eines verfügbar ist; andernfalls wird eine leere Zeichenfolge zurückgegeben.

## Wert

Eine Zeichenfolge, die das menschenlesbare Label der Spur angibt, wenn eines in den Spurdaten verfügbar ist. Andernfalls wird eine leere Zeichenfolge (`""`) zurückgegeben.

Zum Beispiel könnte eine Spur, deren [`kind`](/de/docs/Web/API/AudioTrack/kind) `"commentary"` ist, ein `label` wie `"Commentary with director Mark Markmarkimark and star Donna Donnalidon"` haben.

## Beispiele

Dieses Beispiel gibt ein Array von Spurarten und Labels zurück, die potenziell in einer Benutzeroberfläche zur Auswahl von Audiotracks für ein angegebenes Medienelement verwendet werden können. Die Liste ist so gefiltert, dass nur bestimmte Spurarten zugelassen werden.

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

Das resultierende `trackList` enthält ein Array von Audiotracks, deren `kind` eines der in dem Array `wantedKinds` genannten ist, und jeder Eintrag bietet die [`id`](/de/docs/Web/API/AudioTrack/id), [`kind`](/de/docs/Web/API/AudioTrack/kind) und `label` der Spur.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
