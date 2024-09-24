---
title: "TimeRanges: length-Eigenschaft"
short-title: Länge
slug: Web/API/TimeRanges/length
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("DOM")}}

Die schreibgeschützte **`TimeRanges.length`**-Eigenschaft gibt die
Anzahl der Bereiche im Objekt zurück.

## Wert

Eine Zahl.

## Beispiele

Angenommen, ein Videoelement mit der ID "myVideo":

```js
const v = document.getElementById("myVideo");

const buf = v.buffered;

const numRanges = buf.length;

if (buf.length === 1) {
  // Nur ein Bereich
  if (buf.start(0) === 0 && buf.end(0) === v.duration) {
    // Der eine Bereich beginnt am Anfang und endet
    // am Ende des Videos, also ist das ganze Video geladen
  }
}
```

Dieses Beispiel betrachtet die Zeitbereiche und überprüft, ob das gesamte Video geladen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
