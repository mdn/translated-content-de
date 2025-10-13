---
title: "TimeRanges: start()-Methode"
short-title: start()
slug: Web/API/TimeRanges/start
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("HTML DOM")}}

Die **`start()`**-Methode des [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Interfaces gibt den Zeitversatz (in Sekunden) zurück, zu dem ein spezifizierter Zeitraum beginnt.

## Syntax

```js-nolint
start(index)
```

### Parameter

- `index`
  - : Die Bereichsnummer, für die die Startzeit zurückgegeben werden soll.

### Rückgabewert

Eine Zahl.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der angegebene Index keinem bestehenden Bereich entspricht.

## Beispiele

Gegeben ist ein Videoelement mit der ID "myVideo":

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

Dieses Beispiel überprüft die Zeitbereiche und schaut nach, ob das gesamte Video geladen wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
