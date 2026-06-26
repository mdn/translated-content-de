---
title: "VTTRegion: regionAnchorX-Eigenschaft"
short-title: regionAnchorX
slug: Web/API/VTTRegion/regionAnchorX
l10n:
  sourceCommit: dce88d7e1cffa0768629209b784bb0da0f3da32b
---

{{APIRef("WebVTT")}}

Die **`regionAnchorX`**-Eigenschaft der [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Schnittstelle repräsentiert die x-Koordinate des Regionsankers als Prozentsatz der Breite der Region.

## Wert

Eine Zahl im Bereich von `0` bis einschließlich `100`, die die x-Koordinate des Regionsankers als Prozentsatz der Breite der Region darstellt. Der Standardwert ist `0`.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Wert eingestellt wird, der negativ ist oder größer als `100`.

## Beispiele

Im folgenden Beispiel wird eine neue [`VTTRegion`](/de/docs/Web/API/VTTRegion) erstellt, dann wird der Wert von `regionAnchorX` auf `30` gesetzt. Der Wert wird dann in der Konsole ausgegeben.

```js
const region = new VTTRegion();
region.regionAnchorX = 30;
console.log(region.regionAnchorX);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
