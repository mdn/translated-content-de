---
title: "LayoutShift: Eigenschaft 'value'"
short-title: value
slug: Web/API/LayoutShift/value
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`value`**-Eigenschaft der {{domxref("LayoutShift")}}-Schnittstelle ist eine schreibgeschützte Eigenschaft, die den Layout-Shift-Score zurückgibt. Dieser wird berechnet als das Produkt aus dem Auswirkungen-Faktor (dem Bruchteil des Viewports, der sich verschoben hat) und dem Distanz-Faktor (die Distanz, die als Bruchteil des Viewports verschoben wurde).

## Wert

Eine Zahl zwischen `0.0` und `1.0`, die den Layout-Shift-Score anzeigt.

Er wird berechnet als das Produkt aus dem Auswirkungen-Faktor (dem Bruchteil des Viewports, der sich verschoben hat) und dem Distanz-Faktor (die Distanz, die als Bruchteil des Viewports verschoben wurde).

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
    // Zähle nur Layout-Verschiebungen ohne kürzlich erfolgte Benutzereingaben
    if (!entry.hadRecentInput) {
      console.log("Layout-Shift-Score des Eintrags:", entry.value);
    }
  }
});

observer.observe({ type: "layout-shift", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
