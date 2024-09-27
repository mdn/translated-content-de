---
title: "LayoutShift: Wert-Eigenschaft"
short-title: Wert
slug: Web/API/LayoutShift/value
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`value`**-Eigenschaft des [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Interfaces ist eine schreibgeschützte Eigenschaft und gibt den Layout-Shift-Score zurück, der als Produkt des Einflussbruchteils (Bruchteil des Viewports, der verschoben wurde) und des Entfernungsbruchteils (verschobene Entfernung als Bruchteil des Viewports) berechnet wird.

## Wert

Eine Zahl zwischen `0.0` und `1.0`, die den Layout-Shift-Score angibt.

Dieser wird als Produkt des Einflussbruchteils (Bruchteil des Viewports, der verschoben wurde) und des Entfernungsbruchteils (verschobene Entfernung als Bruchteil des Viewports) berechnet.

```plain
layout shift score = impact fraction * distance fraction
```

Für weitere Details siehe [Layout shift score](https://web.dev/articles/cls#layout_shift_score) auf web.dev.

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
