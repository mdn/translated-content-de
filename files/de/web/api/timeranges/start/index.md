---
title: "TimeRanges: start()-Methode"
short-title: start()
slug: Web/API/TimeRanges/start
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("DOM")}}

Die **`start()`**-Methode der [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Schnittstelle gibt den Zeitversatz zurück, bei dem ein angegebener Zeitbereich beginnt.

## Syntax

```js-nolint
start(index)
```

### Parameter

- `index`
  - : Die Nummer des Bereichs, für den die Startzeit zurückgegeben werden soll.

### Rückgabewert

Eine Zahl.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn der angegebene Index keinem existierenden Bereich entspricht.

## Beispiele

Angenommen, es gibt ein Video-Element mit der ID "myVideo":

```js
const v = document.getElementById("myVideo");

const buf = v.buffered;

const numRanges = buf.length;

if (buf.length === 1) {
  // only one range
  if (buf.start(0) === 0 && buf.end(0) === v.duration) {
    // The one range starts at the beginning and ends at
    // the end of the video, so the whole thing is loaded
  }
}
```

Dieses Beispiel untersucht die Zeitbereiche und prüft, ob das gesamte Video geladen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
