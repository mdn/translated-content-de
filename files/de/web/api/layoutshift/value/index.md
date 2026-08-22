---
title: "LayoutShift: Eigenschaft value"
short-title: value
slug: Web/API/LayoutShift/value
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`value`**-Eigenschaft, die schreibgeschützt in der [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Schnittstelle ist, gibt den Layout-Shift-Score zurück. Dieser wird berechnet als Produkt aus dem Einflussbruchteil (Bruchteil des Viewports, der verschoben wurde) und dem Distanzbruchteil (verschobene Distanz als Bruchteil des Viewports).

## Wert

Eine Zahl zwischen `0.0` und `1.0`, die den Layout-Shift-Score angibt.

Der Score wird berechnet als das Produkt aus dem Einflussbruchteil (Bruchteil des Viewports, der verschoben wurde) und dem Distanzbruchteil (verschobene Distanz als Bruchteil des Viewports).

```plain
layout shift score = impact fraction * distance fraction
```

Für weitere Details, siehe [Layout shift score](https://web.dev/articles/cls#layout_shift_score) auf web.dev.

## Beispiele

### Protokollierung des Layout-Shift-Scores eines Eintrags

Das folgende Beispiel zeigt, wie die `value`-Eigenschaft verwendet wird, um den Layout-Shift-Score zu protokollieren.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // Count layout shifts without recent user input only
    if (!entry.hadRecentInput) {
      console.log("Entry's layout shift score:", entry.value);
    }
  }
});

observer.observe({ type: "layout-shift", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
