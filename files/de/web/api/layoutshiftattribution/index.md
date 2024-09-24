---
title: LayoutShiftAttribution
slug: Web/API/LayoutShiftAttribution
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die Schnittstelle `LayoutShiftAttribution` bietet Debugging-Informationen über Elemente, die sich verschoben haben.

Instanzen von `LayoutShiftAttribution` werden in einem Array zurückgegeben, indem man {{domxref("LayoutShift.sources")}} aufruft.

## Instanzeigenschaften

- {{domxref("LayoutShiftAttribution.node")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt das Element zurück, das sich verschoben hat (null, wenn es entfernt wurde).
- {{domxref("LayoutShiftAttribution.previousRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("DOMRectReadOnly")}}-Objekt zurück, das die Position des Elements vor der Verschiebung repräsentiert.
- {{domxref("LayoutShiftAttribution.currentRect")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref("DOMRectReadOnly")}}-Objekt zurück, das die Position des Elements nach der Verschiebung repräsentiert.

## Instanzmethoden

- {{domxref("LayoutShiftAttribution.toJSON()")}} {{Experimental_Inline}}
  - : Gibt eine JSON-Darstellung des `LayoutShiftAttribution`-Objekts zurück.

## Beispiele

Das folgende Beispiel findet das Element mit der höchsten Layout-Shift-Punktzahl und gibt das Element aus diesem Eintrag mit der größten Größe vor der Verschiebung (`previousRect`) zurück. Für mehr Details hierzu siehe [Debuggen von Web Vitals im Feld](https://web.dev/articles/debug-performance-in-the-field).

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

- [Debuggen von Layoutverschiebungen](https://web.dev/articles/debug-layout-shifts)
- [Debuggen von Web Vitals im Feld](https://web.dev/articles/debug-performance-in-the-field)
