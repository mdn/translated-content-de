---
title: "TimeRanges: end()-Methode"
short-title: end()
slug: Web/API/TimeRanges/end
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("DOM")}}

Die **`end()`**-Methode des [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Interfaces gibt den Zeitversatz zurück, bei dem ein angegebener Zeitbereich endet.

## Syntax

```js-nolint
end(index)
```

### Parameter

- `index`
  - : Die Nummer des Bereichs, für den die Endzeit zurückgegeben werden soll.

### Rückgabewert

Eine Zahl.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Index nicht mit einem vorhandenen Bereich übereinstimmt.

## Beispiele

Gegeben ist ein Videoelement mit der ID `"myVideo"`:

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

Dieses Beispiel betrachtet die Zeitbereiche und überprüft, ob das gesamte Video geladen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
