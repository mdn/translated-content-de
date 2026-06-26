---
title: "VTTRegion: width-Eigenschaft"
short-title: width
slug: Web/API/VTTRegion/width
l10n:
  sourceCommit: dce88d7e1cffa0768629209b784bb0da0f3da32b
---

{{APIRef("WebVTT")}}

Die **`width`**-Eigenschaft der [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Schnittstelle repräsentiert die Breite der Region als Prozentsatz der Video-Breite.

## Wert

Eine Zahl im Bereich von `0` bis einschließlich `100`, die die Breite der Region als Prozentsatz der Video-Breite darstellt. Der Standardwert ist `100`.

### Ausnahmen

- `IndexSizeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn ein Wert gesetzt wird, der negativ ist oder größer als `100`.

## Beispiele

Im folgenden Beispiel wird eine neue [`VTTRegion`](/de/docs/Web/API/VTTRegion) erstellt, dann wird der Wert von `width` auf `50` gesetzt. Der Wert wird anschließend in der Konsole ausgegeben.

```js
const region = new VTTRegion();
region.width = 50; // Set the region to 50% of the video's width
console.log(region.width);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
