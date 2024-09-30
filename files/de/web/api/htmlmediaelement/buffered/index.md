---
title: "HTMLMediaElement: buffered-Eigenschaft"
short-title: buffered
slug: Web/API/HTMLMediaElement/buffered
l10n:
  sourceCommit: 2b554506d84d016d3ddf612c593bd8315833c64d
---

{{APIRef("HTML DOM")}}

Die **`buffered`** schreibgeschützte Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten gibt ein neues statisches [normiertes `TimeRanges`-Objekt](/de/docs/Web/API/TimeRanges#normalized_timeranges_objects) zurück, das die Bereiche der Medienressource darstellt, falls vorhanden, die der Benutzeragent in dem Moment zwischengespeichert hat, in dem die `buffered`-Eigenschaft abgerufen wird.

## Wert

Ein neues statisches [normiertes TimeRanges-Objekt](/de/docs/Web/API/TimeRanges#normalized_timeranges_objects), das die Bereiche der Medienressource darstellt, falls vorhanden, die der Benutzeragent in dem Moment zwischengespeichert hat, in dem die `buffered`-Eigenschaft abgerufen wird.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.buffered`-Eigenschaft
