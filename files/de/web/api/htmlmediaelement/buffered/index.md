---
title: "HTMLMediaElement: buffered-Eigenschaft"
short-title: buffered
slug: Web/API/HTMLMediaElement/buffered
l10n:
  sourceCommit: 2b554506d84d016d3ddf612c593bd8315833c64d
---

{{APIRef("HTML DOM")}}

Die **`buffered`**-Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten gibt ein neues, statisches [normalisiertes `TimeRanges`-Objekt](/de/docs/Web/API/TimeRanges#normalized_timeranges_objects) zurück, das die Bereiche der Medienressource repräsentiert, die der User-Agent zu dem Zeitpunkt, an dem auf die `buffered`-Eigenschaft zugegriffen wird, gepuffert hat.

## Wert

Ein neues, statisches [normalisiertes `TimeRanges`-Objekt](/de/docs/Web/API/TimeRanges#normalized_timeranges_objects), das die Bereiche der Medienressource repräsentiert, die der User-Agent zu dem Zeitpunkt, an dem auf die `buffered`-Eigenschaft zugegriffen wird, gepuffert hat.

## Beispiele

```js
const obj = document.createElement("video");
console.log(obj.buffered); // TimeRanges { length: 0 }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die verwendet wird, um die `HTMLMediaElement.buffered`-Eigenschaft zu definieren.
