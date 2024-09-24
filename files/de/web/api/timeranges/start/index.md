---
title: "TimeRanges: start()-Methode"
short-title: start()
slug: Web/API/TimeRanges/start
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("DOM")}}

Die **`start()`**-Methode der {{domxref("TimeRanges")}}-Schnittstelle gibt den Zeitoffset zurück, bei dem ein bestimmter Zeitraum beginnt.

## Syntax

```js-nolint
start(index)
```

### Parameter

- `index`
  - : Die Nummer des Bereichs, für den die Startzeit zurückgegeben werden soll.

### Rückgabewert

Eine Nummer.

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene Index nicht mit einem vorhandenen Bereich übereinstimmt.

## Beispiele

Angenommen, es gibt ein Videoelement mit der ID "myVideo":

```js
const v = document.getElementById("myVideo");

const buf = v.buffered;

const numRanges = buf.length;

if (buf.length === 1) {
  // nur ein Bereich
  if (buf.start(0) === 0 && buf.end(0) === v.duration) {
    // Der eine Bereich beginnt am Anfang und endet
    // am Ende des Videos, sodass das gesamte Video geladen ist
  }
}
```

Dieses Beispiel betrachtet die Zeitbereiche und überprüft, ob das gesamte Video geladen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
