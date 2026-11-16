---
title: LayoutShiftAttribution
slug: Web/API/LayoutShiftAttribution
l10n:
  sourceCommit: 725499d8bb2e0903334b8ab936818042757cc852
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Schnittstelle `LayoutShiftAttribution` liefert Debugging-Informationen über Elemente, deren Position sich verschoben hat.

Instanzen von `LayoutShiftAttribution` werden beim Aufruf von [`LayoutShift.sources`](/de/docs/Web/API/LayoutShift/sources) in einem Array zurückgegeben.

## Instanzeigenschaften

- [`LayoutShiftAttribution.node`](/de/docs/Web/API/LayoutShiftAttribution/node) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Element zurück, dessen Position sich verschoben hat (`null`, wenn es entfernt wurde).
- [`LayoutShiftAttribution.previousRect`](/de/docs/Web/API/LayoutShiftAttribution/previousRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt zurück, das die Position des Elements vor der Verschiebung darstellt.
- [`LayoutShiftAttribution.currentRect`](/de/docs/Web/API/LayoutShiftAttribution/currentRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt zurück, das die Position des Elements nach der Verschiebung darstellt.

## Instanzmethoden

- [`LayoutShiftAttribution.toJSON()`](/de/docs/Web/API/LayoutShiftAttribution/toJSON) {{Experimental_Inline}}
  - : Gibt ein einfaches, JSON-serialisierbares Objekt zurück, das das `LayoutShiftAttribution`-Objekt darstellt. Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiele

Das folgende Beispiel beobachtet Layoutverschiebungen und ermittelt das Element mit den größten Auswirkungen. Das Array `sources` ist nach der Größe des betroffenen Bereichs absteigend sortiert. Das erste Element (`sources[0]`) steht daher für das Element, das am stärksten zur Layoutverschiebung beigetragen hat. Weitere Einzelheiten dazu finden Sie unter [Web Vitals im Einsatz debuggen](https://web.dev/articles/debug-performance-in-the-field).

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (!entry.sources || entry.sources.length === 0) continue;

    const mostImpactfulSource = entry.sources[0];
    console.log("Layout shift score:", entry.value);
    console.log("Most impactful element:", mostImpactfulSource.node);
    console.log("Previous position:", mostImpactfulSource.previousRect);
    console.log("Current position:", mostImpactfulSource.currentRect);
  }
});

observer.observe({ type: "layout-shift", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Layoutverschiebungen debuggen](https://web.dev/articles/debug-layout-shifts)
- [Web Vitals im Einsatz debuggen](https://web.dev/articles/debug-performance-in-the-field)
