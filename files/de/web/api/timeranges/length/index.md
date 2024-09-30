---
title: "TimeRanges: length Eigenschaft"
short-title: length
slug: Web/API/TimeRanges/length
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("DOM")}}

Die **`TimeRanges.length`** schreibgeschützte Eigenschaft gibt die Anzahl der Bereiche im Objekt zurück.

## Wert

Eine Zahl.

## Beispiele

Gegeben ein `<video>`-Element mit der ID "myVideo":

```js
const v = document.getElementById("myVideo");

const buf = v.buffered;

const numRanges = buf.length;

if (buf.length === 1) {
  // Only one range
  if (buf.start(0) === 0 && buf.end(0) === v.duration) {
    // The one range starts at the beginning and ends at
    // the end of the video, so the whole thing is loaded
  }
}
```

Dieses Beispiel betrachtet die Zeitbereiche und überprüft, ob das gesamte Video geladen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
