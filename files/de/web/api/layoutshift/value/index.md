---
title: "LayoutShift: value-Eigenschaft"
short-title: value
slug: Web/API/LayoutShift/value
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die eigenschaft **`value`** (nur lesbar) des [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Interfaces gibt den Layout-Shift-Score zurück, der als das Produkt aus dem Impact-Fraction (der Anteil des Viewports, der verschoben wurde) und der Distance-Fraction (die Bewegung als Anteil am Viewport) berechnet wird.

## Wert

Eine Zahl zwischen `0,0` und `1,0`, die den Layout-Shift-Score anzeigt.

Er wird als das Produkt aus dem Impact-Fraction (der Anteil des Viewports, der verschoben wurde) und der Distance-Fraction (die Bewegung als Anteil am Viewport) berechnet.

```plain
layout shift score = impact fraction * distance fraction
```

Für weitere Details siehe [Layout Shift Score](https://web.dev/articles/cls#layout_shift_score) auf web.dev.

## Beispiele

### Protokollierung des Layout-Shift-Scores des Eintrags

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
