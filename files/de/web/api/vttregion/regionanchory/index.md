---
title: "VTTRegion: Eigenschaft regionAnchorY"
short-title: regionAnchorY
slug: Web/API/VTTRegion/regionAnchorY
l10n:
  sourceCommit: dce88d7e1cffa0768629209b784bb0da0f3da32b
---

{{APIRef("WebVTT")}}

Die **`regionAnchorY`**-Eigenschaft der [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Schnittstelle repräsentiert die y-Koordinate des Regionenankers, als Prozentsatz der Höhe der Region.

## Wert

Eine Zahl im Bereich von `0` bis einschließlich `100`, die die y-Koordinate des Regionenankers als Prozentsatz der Höhe der Region darstellt. Der Standardwert ist `100`.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Wert gesetzt wird, der negativ ist oder größer als `100`.

## Beispiele

Im folgenden Beispiel wird eine neue [`VTTRegion`](/de/docs/Web/API/VTTRegion) erstellt, dann wird der Wert von `regionAnchorY` auf `70` gesetzt. Der Wert wird dann in der Konsole ausgegeben.

```js
const region = new VTTRegion();
region.regionAnchorY = 70;
console.log(region.regionAnchorY);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
