---
title: "TimeRanges: end() Methode"
short-title: end()
slug: Web/API/TimeRanges/end
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("DOM")}}

Die **`end()`** Methode der {{domxref("TimeRanges")}} Schnittstelle gibt den Zeitversatz zurück, an dem ein spezifizierter Zeitraum endet.

## Syntax

```js-nolint
end(index)
```

### Parameter

- `index`
  - : Die Bereichsnummer, für die die Endzeit zurückgegeben wird.

### Rückgabewert

Eine Zahl.

### Ausnahmen

- `IndexSizeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der angegebene Index keinem vorhandenen Bereich entspricht.

## Beispiele

Gegeben ein Videoelement mit der ID `"myVideo"`:

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

Dieses Beispiel betrachtet die Zeitbereiche und prüft, ob das gesamte Video geladen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
