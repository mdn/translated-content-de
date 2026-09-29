---
title: LayoutShiftAttribution
slug: Web/API/LayoutShiftAttribution
l10n:
  sourceCommit: 6bb81a788ff71f726e32d16757c99d5c45a7edf9
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Schnittstelle `LayoutShiftAttribution` liefert Informationen zur Fehlersuche bei Elementen, deren Position sich verschoben hat.

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
  - : Gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `LayoutShiftAttribution`-Objekt darstellt. Wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen.

## Beispiele

Das folgende Beispiel beobachtet Layoutverschiebungen und identifiziert das Element mit dem größten Einfluss. Das Array `sources` ist nach der betroffenen Fläche absteigend sortiert – das erste Element (`sources[0]`) steht also für das Element, das am stärksten zur Layoutverschiebung beigetragen hat. Weitere Informationen dazu finden Sie unter [Web Vitals im produktiven Einsatz debuggen](https://web.dev/articles/debug-performance-in-the-field).

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (!entry.sources || entry.sources.length === 0) continue;

    const mostImpactfulSource = entry.sources[0];
    console.log("Layout shift score:", entry.value);
    console.log("Most impactful element:", largestShiftSource.node);
    console.log("Previous position:", largestShiftSource.previousRect);
    console.log("Current position:", largestShiftSource.currentRect);
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
- [Web Vitals im produktiven Einsatz debuggen](https://web.dev/articles/debug-performance-in-the-field)
