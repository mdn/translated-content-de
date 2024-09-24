---
title: "LayoutShift: Eigenschaft hadRecentInput"
short-title: hadRecentInput
slug: Web/API/LayoutShift/hadRecentInput
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`hadRecentInput`** der {{domxref("LayoutShift")}}-Schnittstelle gibt `true` zurück, wenn {{domxref("LayoutShift.lastInputTime", "lastInputTime")}} weniger als 500 Millisekunden in der Vergangenheit liegt.

Layout-Verschiebungen sind nur ein Problem, wenn der Benutzer sie nicht erwartet. Daher werden Layout-Verschiebungen, die durch Benutzerinteraktionen entstehen (wie das Erweitern eines UI-Elements), häufig nicht in die Layout-Verschiebungsmetriken einbezogen. Die Eigenschaft `hadRecentInput` ermöglicht es Ihnen, diese Verschiebungen auszuschließen.

## Wert

Ein boolescher Wert, der `true` zurückgibt, wenn {{domxref("LayoutShift.lastInputTime", "lastInputTime")}} weniger als 500 Millisekunden in der Vergangenheit liegt; andernfalls `false`.

## Beispiele

### Ignorieren von kürzlichen Benutzereingaben für Layout-Verschiebungsscores

Das folgende Beispiel zeigt, wie die Eigenschaft `hadRecentInput` verwendet wird, um nur Layout-Verschiebungen ohne kürzliche Benutzereingaben zu zählen.

```js
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    // Zähle nur Layout-Verschiebungen ohne kürzliche Benutzereingaben
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

- {{domxref("LayoutShift.lastInputTime")}}
