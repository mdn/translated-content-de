---
title: "Performance: interactionCount-Eigenschaft"
short-title: interactionCount
slug: Web/API/Performance/interactionCount
l10n:
  sourceCommit: 9548e8228e0872c244e3a0622ed0448139995ad6
---

{{APIRef("Performance API")}}

Die schreibgeschützte `performance.interactionCount`-Eigenschaft repräsentiert die Anzahl der echten Benutzerinteraktionen, die auf der Seite seit ihrem Laden stattgefunden haben.

Es werden nur diskrete Interaktionen gezählt, die eine [`interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) besitzen – wie Klicks und Tastenereignisse. Andere Interaktionen, wie Scroll-Interaktionen, werden nicht berücksichtigt.

Dies ist nützlich bei der Berechnung von {{Glossary("Interaction_to_next_paint", "Interaction to Next Paint (INP)")}} und insbesondere, um Ausreißer bei langfristigen Seiten auszuschließen. INP erfasst das 98. Perzentil der Interaktionen für eine Seite und schließt so 1 von 50 Interaktionen als "Ausreißer" aus, die nicht die allgemeine Reaktionsfähigkeit der Seite widerspiegeln.

## Wert

Eine Zahl, die zunächst `0` beträgt und mit jeder diskreten Interaktion um `1` erhöht wird, wie durch [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) gemessen, wobei eine [`PerformanceEventTiming.interactionId`](/de/docs/Web/API/PerformanceEventTiming/interactionId) zugewiesen wird.

## Beispiele

### Überprüfen der Anzahl der Interaktionen zur genauen Berechnung von INP

Für Seiten mit einer großen Anzahl von Interaktionen können Sie INP mit dem folgenden Muster neu berechnen, nachdem 1 von 50 Ausreißern ausgeschlossen wurde:

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
