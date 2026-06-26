---
title: "VTTRegion: viewportAnchorY-Eigenschaft"
short-title: viewportAnchorY
slug: Web/API/VTTRegion/viewportAnchorY
l10n:
  sourceCommit: dce88d7e1cffa0768629209b784bb0da0f3da32b
---

{{APIRef("WebVTT")}}

Die **`viewportAnchorY`**-Eigenschaft des [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Interfaces repräsentiert die y-Koordinate des Viewport-Ankers als Prozentsatz der Höhe des Videos.

## Wert

Eine Zahl im Bereich von `0` bis `100` inklusive, die die y-Koordinate des Viewport-Ankers als Prozentsatz der Höhe des Videos darstellt. Der Standardwert ist `100`.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Wert gesetzt wird, der negativ ist oder größer als `100`.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTRegion`](/de/docs/Web/API/VTTRegion) erstellt, dann wird der Wert von `viewportAnchorY` auf `75` gesetzt. Der Wert wird anschließend in der Konsole ausgegeben.

```js
const region = new VTTRegion();
region.viewportAnchorY = 75; // Place the region 75% from the top edge of the video
console.log(region.viewportAnchorY);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
