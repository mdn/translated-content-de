---
title: LayoutShiftAttribution
slug: Web/API/LayoutShiftAttribution
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die `LayoutShiftAttribution` Schnittstelle bietet Debugging-Informationen über Elemente, die sich verschoben haben.

Instanzen von `LayoutShiftAttribution` werden in einem Array zurückgegeben, wenn [`LayoutShift.sources`](/de/docs/Web/API/LayoutShift/sources) aufgerufen wird.

## Instanz-Eigenschaften

- [`LayoutShiftAttribution.node`](/de/docs/Web/API/LayoutShiftAttribution/node) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Element zurück, das sich verschoben hat (null, wenn es entfernt wurde).
- [`LayoutShiftAttribution.previousRect`](/de/docs/Web/API/LayoutShiftAttribution/previousRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) Objekt zurück, das die Position des Elements vor der Verschiebung repräsentiert.
- [`LayoutShiftAttribution.currentRect`](/de/docs/Web/API/LayoutShiftAttribution/currentRect) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) Objekt zurück, das die Position des Elements nach der Verschiebung repräsentiert.

## Instanz-Methoden

- [`LayoutShiftAttribution.toJSON()`](/de/docs/Web/API/LayoutShiftAttribution/toJSON) {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `LayoutShiftAttribution` Objekts zurück.

## Beispiele

Das folgende Beispiel findet das Element mit dem höchsten Layout-Verschiebungswert und gibt das Element in diesem Eintrag mit der größten Größe vor der Verschiebung (`previousRect`) zurück. Für weitere Details siehe [Debuggen Sie Web Vitals im Feld](https://web.dev/articles/debug-performance-in-the-field).

```js
function getCLSDebugTarget(entries) {
  const largestEntry = entries.reduce((a, b) =>
    a && a.value > b.value ? a : b,
  );
  if (largestEntry?.sources?.length) {
    const largestSource = largestEntry.sources.reduce((a, b) => {
      const area = (el) => el.previousRect.width * el.previousRect.height;
      return a.node && area(a) > area(b) ? a : b;
    });
    if (largestSource) {
      return largestSource.node;
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Layout-Verschiebungen debuggen](https://web.dev/articles/debug-layout-shifts)
- [Debuggen Sie Web Vitals im Feld](https://web.dev/articles/debug-performance-in-the-field)
