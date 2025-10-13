---
title: "TimeRanges: length-Eigenschaft"
short-title: length
slug: Web/API/TimeRanges/length
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`TimeRanges.length`**-Eigenschaft gibt die Anzahl der Bereiche im Objekt zurück.

## Wert

Eine Zahl.

## Beispiele

Angenommen, es gibt ein Videoelement mit der ID "myVideo":

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
