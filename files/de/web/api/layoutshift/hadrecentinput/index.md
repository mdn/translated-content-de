---
title: "LayoutShift: hadRecentInput-Eigenschaft"
short-title: hadRecentInput
slug: Web/API/LayoutShift/hadRecentInput
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`hadRecentInput`**-Eigenschaft der [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Schnittstelle gibt `true` zurück, wenn [`lastInputTime`](/de/docs/Web/API/LayoutShift/lastInputTime) weniger als 500 Millisekunden in der Vergangenheit liegt.

Layout-Verschiebungen sind nur ein Problem, wenn der Benutzer sie nicht erwartet. Layout-Verschiebungen, die durch Benutzerinteraktionen (z.B. ein Benutzer erweitert ein UI-Element) verursacht werden, werden häufig nicht in Layout-Verschiebungsmetriken berücksichtigt. Die `hadRecentInput`-Eigenschaft ermöglicht es Ihnen, diese Verschiebungen auszuschließen.

## Wert

Ein boolescher Wert, der `true` zurückgibt, wenn [`lastInputTime`](/de/docs/Web/API/LayoutShift/lastInputTime) weniger als 500 Millisekunden in der Vergangenheit liegt; andernfalls `false`.

## Beispiele

### Ignorieren von kürzlich erfolgten Benutzereingaben bei Layout-Verschiebungswerten

Das folgende Beispiel zeigt, wie die `hadRecentInput`-Eigenschaft verwendet wird, um nur Layout-Verschiebungen ohne kürzliche Benutzereingaben zu zählen.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // Count layout shifts without recent user input only
    if (!entry.hadRecentInput) {
      console.log("LayoutShift value:", entry.value);
      if (entry.sources) {
        for (const { node, currentRect, previousRect } of entry.sources)
          console.log("LayoutShift source:", node, {
            currentRect,
            previousRect,
          });
      }
    }
  }
});

observer.observe({ type: "layout-shift", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LayoutShift.lastInputTime`](/de/docs/Web/API/LayoutShift/lastInputTime)
