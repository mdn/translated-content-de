---
title: "HTMLMediaElement: buffered-Eigenschaft"
short-title: buffered
slug: Web/API/HTMLMediaElement/buffered
l10n:
  sourceCommit: 2b554506d84d016d3ddf612c593bd8315833c64d
---

{{APIRef("HTML DOM")}}

Die **`buffered`**-Eigenschaft von {{domxref("HTMLMediaElement")}}-Objekten gibt ein neues statisches [normiertes `TimeRanges`-Objekt](/de/docs/Web/API/TimeRanges#normalized_timeranges_objects) zurück, das die Bereiche der Mediendatei darstellt, die der User Agent gepuffert hat, wenn auf die `buffered`-Eigenschaft zugegriffen wird.

## Wert

Ein neues statisches [normiertes TimeRanges-Objekt](/de/docs/Web/API/TimeRanges#normalized_timeranges_objects), das die Bereiche der Mediendatei darstellt, die der User Agent gepuffert hat, wenn auf die `buffered`-Eigenschaft zugegriffen wird.

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

- {{domxref("HTMLMediaElement")}}: Schnittstelle, die benutzt wird, um die `HTMLMediaElement.buffered`-Eigenschaft zu definieren
