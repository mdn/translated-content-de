---
title: LayoutShiftAttribution
slug: Web/API/LayoutShiftAttribution
l10n:
  sourceCommit: b5a74ef0b42f3585521b06dae93b72547649d83c
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Das `LayoutShiftAttribution`-Interface liefert Debugging-Informationen zu Elementen, die sich verschoben haben.

Instanzen von `LayoutShiftAttribution` werden in einem Array zurückgegeben, indem [`LayoutShift.sources`](/de/docs/Web/API/LayoutShift/sources) aufgerufen wird.

## Instanzeigenschaften

- [`LayoutShiftAttribution.node`](/de/docs/Web/API/LayoutShiftAttribution/node) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Element zurück, das sich verschoben hat (null, wenn es entfernt wurde).
- [`LayoutShiftAttribution.previousRect`](/de/docs/Web/API/LayoutShiftAttribution/previousRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt zurück, das die Position des Elements vor der Verschiebung repräsentiert.
- [`LayoutShiftAttribution.currentRect`](/de/docs/Web/API/LayoutShiftAttribution/currentRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly)-Objekt zurück, das die Position des Elements nach der Verschiebung repräsentiert.

## Instanzmethoden

- [`LayoutShiftAttribution.toJSON()`](/de/docs/Web/API/LayoutShiftAttribution/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `LayoutShiftAttribution`-Objekts zurück.

## Beispiele

Das folgende Beispiel beobachtet Layoutverschiebungen und identifiziert das Element mit dem größten Einfluss. Das `sources`-Array ist absteigend nach Einflussbereich sortiert, sodass das erste Element (`sources[0]`) das Element darstellt, das am meisten zur Layoutverschiebung beigetragen hat. Weitere Details dazu finden Sie unter [Debug Web Vitals in the field](https://web.dev/articles/debug-performance-in-the-field).

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

- [Debug layout shifts](https://web.dev/articles/debug-layout-shifts)
- [Debug Web Vitals in the field](https://web.dev/articles/debug-performance-in-the-field)
