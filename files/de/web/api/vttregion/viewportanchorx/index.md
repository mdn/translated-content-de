---
title: "VTTRegion: viewportAnchorX-Eigenschaft"
short-title: viewportAnchorX
slug: Web/API/VTTRegion/viewportAnchorX
l10n:
  sourceCommit: dce88d7e1cffa0768629209b784bb0da0f3da32b
---

{{APIRef("WebVTT")}}

Die **`viewportAnchorX`**-Eigenschaft der [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Schnittstelle repräsentiert die x-Koordinate des Viewport-Ankers, als Prozentsatz der Breite des Videos.

## Wert

Eine Zahl im Bereich von `0` bis einschließlich `100`, die die x-Koordinate des Viewport-Ankers als Prozentsatz der Breite des Videos darstellt. Der Standardwert ist `0`.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn sie auf einen Wert gesetzt wird, der negativ oder größer als `100` ist.

## Beispiele

Im folgenden Beispiel wird eine neue [`VTTRegion`](/de/docs/Web/API/VTTRegion) erstellt, dann wird der Wert von `viewportAnchorX` auf `25` gesetzt. Der Wert wird anschließend in die Konsole ausgegeben.

```js
const region = new VTTRegion();
region.viewportAnchorX = 25; // Place the region 25% from the left edge of the video
console.log(region.viewportAnchorX);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
