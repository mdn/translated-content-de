---
title: "TimeRanges: end()-Methode"
short-title: end()
slug: Web/API/TimeRanges/end
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("HTML DOM")}}

Die **`end()`**-Methode der [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Schnittstelle gibt den Zeitversatz (in Sekunden) zurück, an dem ein angegebenes Zeitintervall endet.

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
  - : Wird ausgelöst, wenn der angegebene Index keinem vorhandenen Bereich entspricht.

## Beispiele

Gegeben ein Videoelement mit der ID `"myVideo"`:

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
