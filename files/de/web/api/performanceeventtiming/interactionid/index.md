---
title: "PerformanceEventTiming: interactionId-Eigenschaft"
short-title: interactionId
slug: Web/API/PerformanceEventTiming/interactionId
l10n:
  sourceCommit: ca87ccdb6dc41913c5ae25ede882e0259b3bf40c
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`interactionId`**-Eigenschaft der [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming)-Schnittstelle gibt eine ID zurück, die eine Benutzerinteraktion eindeutig identifiziert, welche eine Reihe von zugehörigen Ereignissen ausgelöst hat.

## Wert

Eine Zahl. Für Ereignistypen, bei denen keine Interaktions-ID berechnet wird, ist der Wert 0.

## Beschreibung

Wenn ein Benutzer mit einer Webseite interagiert, löst eine Benutzerinteraktion (zum Beispiel ein Klick) in der Regel eine Reihe von Ereignissen aus, wie `pointerdown`, `pointerup` und `click`-Ereignisse. Um die Latenz dieser Ereignisreihe zu messen, teilen die Ereignisse die gleiche `interactionId`.

Eine `interactionId` wird nur für die folgenden Ereignistypen berechnet, die zu einer Benutzerinteraktion gehören. Andernfalls ist sie `0`.

| Ereignistypen                                                                                                                                                         | Benutzerinteraktion       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event), [`pointerup`](/de/docs/Web/API/Element/pointerup_event), [`click`](/de/docs/Web/API/Element/click_event) | klicken / tippen / ziehen |
| [`keydown`](/de/docs/Web/API/Element/keydown_event), [`keyup`](/de/docs/Web/API/Element/keyup_event)                                                                  | Tastendruck               |

Die `interactionId` wird auch benötigt, um die Metrik {{Glossary("Interaction_to_next_paint", "Interaction to next paint")}} zu berechnen, die hilft, die Reaktionsfähigkeit auf Benutzerinteraktionen über die Lebensdauer einer Seite zu analysieren.

## Beispiele

### Verwendung von interactionId

Das folgende Beispiel sammelt Ereignisdauer für alle Ereignisse, die einer Interaktion entsprechen. Die `eventLatencies`-Map kann dann verwendet werden, um Ereignisse mit maximaler Dauer für eine Benutzerinteraktion zu finden, zum Beispiel.

```js
// The key is the interaction ID.
let eventLatencies = {};

const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.interactionId > 0) {
      const interactionId = entry.interactionId;
      if (!eventLatencies.has(interactionId)) {
        eventLatencies[interactionId] = [];
      }
      eventLatencies[interactionId].push(entry.duration);
    }
  });
});

observer.observe({ type: "event", buffered: true });

// Log events with maximum event duration for a user interaction
Object.entries(eventLatencies).forEach(([k, v]) => {
  console.log(Math.max(...v));
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
