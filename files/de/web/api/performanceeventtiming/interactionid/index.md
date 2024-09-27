---
title: "PerformanceEventTiming: interactionId-Eigenschaft"
short-title: interactionId
slug: Web/API/PerformanceEventTiming/interactionId
l10n:
  sourceCommit: 989453176fd8756828b34b743a677a797d897156
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`interactionId`**-Eigenschaft gibt eine ID zurück, die eine Benutzerinteraktion, welche eine Reihe von zugehörigen Ereignissen ausgelöst hat, eindeutig identifiziert.

## Beschreibung

Wenn ein Benutzer mit einer Webseite interagiert, löst eine Benutzerinteraktion (zum Beispiel ein Klick) normalerweise eine Sequenz von Ereignissen aus, wie `pointerdown`-, `pointerup`- und `click`-Ereignisse. Um die Latenz dieser Ereignisreihe zu messen, teilen die Ereignisse die gleiche `interactionId`.

Eine `interactionId` wird nur für die folgenden Ereignistypen berechnet, die zu einer Benutzerinteraktion gehören. Andernfalls ist sie `0`.

| Ereignistypen                                                                                                                                                         | Benutzerinteraktion   |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------- |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event), [`pointerup`](/de/docs/Web/API/Element/pointerup_event), [`click`](/de/docs/Web/API/Element/click_event) | Klick / Tipp / Ziehen |
| [`keydown`](/de/docs/Web/API/Element/keydown_event), [`keyup`](/de/docs/Web/API/Element/keyup_event)                                                                  | Tastendruck           |

## Wert

Eine Zahl.

## Beispiele

### Verwendung von interactionId

Das folgende Beispiel sammelt die Ereignisdauer für alle Ereignisse, die zu einer Interaktion gehören. Die `eventLatencies`-Map kann dann verwendet werden, um Ereignisse mit maximaler Dauer für eine Benutzerinteraktion zu finden, zum Beispiel.

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
