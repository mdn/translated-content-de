---
title: "PerformanceEventTiming: interactionId-Eigenschaft"
short-title: interactionId
slug: Web/API/PerformanceEventTiming/interactionId
l10n:
  sourceCommit: cf16851e73da29823438198c4f0efcb7026b7d10
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`interactionId`**-Eigenschaft gibt eine Kennung zurück, die eine Benutzerinteraktion eindeutig identifiziert, die eine Reihe von zugehörigen Ereignissen ausgelöst hat.

## Beschreibung

Wenn ein Benutzer mit einer Webseite interagiert, löst eine Benutzerinteraktion (zum Beispiel ein Klick) normalerweise eine Abfolge von Ereignissen aus, wie `pointerdown`-, `pointerup`- und `click`-Ereignisse. Um die Latenz dieser Ereignisreihe zu messen, teilen die Ereignisse die gleiche `interactionId`.

Eine `interactionId` wird nur für die folgenden Ereignistypen berechnet, die zu einer Benutzerinteraktion gehören. Andernfalls ist sie `0`.

| Ereignistypen                                                                                                                                                         | Benutzerinteraktion  |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event), [`pointerup`](/de/docs/Web/API/Element/pointerup_event), [`click`](/de/docs/Web/API/Element/click_event) | Klick / Tap / Ziehen |
| [`keydown`](/de/docs/Web/API/Element/keydown_event), [`keyup`](/de/docs/Web/API/Element/keyup_event)                                                                  | Tastendruck          |

## Wert

Eine Zahl.

## Beispiele

### Verwenden von interactionId

Das folgende Beispiel sammelt die Ereignisdauer für alle Ereignisse, die einer Interaktion entsprechen. Die `eventLatencies`-Map kann dann verwendet werden, um beispielsweise Ereignisse mit maximaler Dauer für eine Benutzerinteraktion zu finden.

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
