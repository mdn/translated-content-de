---
title: "PerformanceEventTiming: Eigenschaft interactionId"
short-title: interactionId
slug: Web/API/PerformanceEventTiming/interactionId
l10n:
  sourceCommit: 989453176fd8756828b34b743a677a797d897156
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`interactionId`**-Eigenschaft liefert eine ID zurück, die eine Benutzerinteraktion eindeutig identifiziert, welche eine Reihe von damit verbundenen Ereignissen auslöst.

## Beschreibung

Wenn ein Benutzer mit einer Webseite interagiert, löst eine Benutzerinteraktion (z. B. ein Klick) normalerweise eine Abfolge von Ereignissen aus, wie `pointerdown`, `pointerup` und `click` Ereignisse. Um die Latenz dieser Ereignisreihe zu messen, teilen die Ereignisse dieselbe `interactionId`.

Eine `interactionId` wird nur für die folgenden Ereignistypen berechnet, die zu einer Benutzerinteraktion gehören. Ansonsten ist sie `0`.

| Ereignistypen                                                                                                                                            | Benutzerinteraktion |
| --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event), [`pointerup`](/de/docs/Web/API/Element/pointerup_event), [`click`](/de/docs/Web/API/Element/click_event) | Klick / Tippen / Ziehen |
| [`keydown`](/de/docs/Web/API/Element/keydown_event), [`keyup`](/de/docs/Web/API/Element/keyup_event)                                                              | Tastendruck         |

## Wert

Eine Zahl.

## Beispiele

### Verwendung von interactionId

Im folgenden Beispiel werden die Dauern der Ereignisse gesammelt, die einer Interaktion entsprechen. Die `eventLatencies`-Map kann dann beispielsweise verwendet werden, um Ereignisse mit der maximalen Dauer für eine Benutzerinteraktion zu finden.

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
