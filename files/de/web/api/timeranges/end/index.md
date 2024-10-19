---
title: "TimeRanges: end()-Methode"
short-title: end()
slug: Web/API/TimeRanges/end
l10n:
  sourceCommit: c1cb822be8f98ffb74da278fa1a01dc27d3a57b9
---

{{APIRef("DOM")}}

Die **`end()`**-Methode des [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Interfaces gibt den Zeitversatz (in Sekunden) zurück, zu dem ein angegebener Zeitraum endet.

## Syntax

```js-nolint
end(index)
```

### Parameter

- `index`
  - : Die Bereichsnummer, für die die Endzeit zurückgegeben werden soll.

### Rückgabewert

Eine Zahl.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Index keinem vorhandenen Bereich entspricht.

## Beispiele

Gegeben ist ein Video-Element mit der ID `"myVideo"`:

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
