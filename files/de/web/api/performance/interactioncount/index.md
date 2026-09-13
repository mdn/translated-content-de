---
title: "Performance: interactionCount-Eigenschaft"
short-title: interactionCount
slug: Web/API/Performance/interactionCount
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft `performance.interactionCount` repräsentiert die Anzahl der echten Benutzerinteraktionen, die seit dem Laden der Seite erfolgt sind.

Gezählt werden nur diskrete Interaktionen mit einer [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) — wie Klicks und Tastenanschläge. Andere Interaktionen, wie Scroll-Interaktionen, werden ausgeschlossen.

Dies ist nützlich bei der Berechnung von {{Glossary("Interaction_to_next_paint", "Interaction to Next Paint (INP)")}} und insbesondere zum Ausschluss von Ausreißern auf langlebigen Seiten. INP nimmt das 98. Perzentil der Interaktionen einer Seite und schließt so 1 von 50 Interaktionen als "Ausreißer" aus, die nicht die allgemeine Reaktionsfähigkeit der Seite widerspiegeln.

## Wert

Eine Zahl, die anfangs `0` ist und mit jeder diskreten Interaktion, die durch [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) gemessen wird und der eine [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) zugeordnet wird, um `1` erhöht wird.

## Beispiele

### Überprüfen der Anzahl von Interaktionen zur genauen Berechnung von INP

Für Seiten mit einer großen Anzahl von Interaktionen können Sie INP neu berechnen, nachdem Sie 1 von 50 Ausreißern ausgeschlossen haben, indem Sie folgendes Muster verwenden:

```js
if (performance.interactionCount >= 50) {
  recalculateINP(); // Actual calculation is complex and is not shown here
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)
- [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId)
- {{Glossary("Interaction_to_next_paint", "Interaction to Next Paint (INP)")}}
