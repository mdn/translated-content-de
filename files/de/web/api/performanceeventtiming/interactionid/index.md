---
title: "PerformanceEventTiming: interactionId-Eigenschaft"
short-title: interactionId
slug: Web/API/PerformanceEventTiming/interactionId
l10n:
  sourceCommit: 989453176fd8756828b34b743a677a797d897156
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die schreibgeschützte **`interactionId`**-Eigenschaft gibt eine ID zurück, die eine Benutzerinteraktion eindeutig identifiziert, welche eine Reihe zugehöriger Ereignisse ausgelöst hat.

## Beschreibung

Wenn ein Benutzer mit einer Webseite interagiert, löst eine Benutzerinteraktion (zum Beispiel ein Klick) normalerweise eine Sequenz von Ereignissen aus, wie `pointerdown`-, `pointerup`- und `click`-Ereignisse. Um die Latenz dieser Ereignisreihe zu messen, teilen die Ereignisse die gleiche `interactionId`.

Eine `interactionId` wird nur für die folgenden Ereignistypen berechnet, die zu einer Benutzerinteraktion gehören. Ansonsten ist sie `0`.

| Ereignistypen                                                                                                                                               | Benutzerinteraktion |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- |
| {{domxref("Element/pointerdown_event", "pointerdown")}}, {{domxref("Element/pointerup_event", "pointerup")}}, {{domxref("Element/click_event", "click")}}   | Klick / Tap / Ziehen |
| {{domxref("Element/keydown_event", "keydown")}}, {{domxref("Element/keyup_event", "keyup")}}                                                                | Tastendruck         |

## Wert

Eine Zahl.

## Beispiele

### Verwendung von interactionId

Das folgende Beispiel sammelt die Ereignisdauer für alle Ereignisse, die einer Interaktion entsprechen. Die `eventLatencies`-Map kann dann verwendet werden, um beispielsweise Ereignisse mit der maximalen Dauer für eine Benutzerinteraktion zu finden.

```js
// Der Schlüssel ist die Interaktions-ID.
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

// Ereignisse mit der maximalen Ereignisdauer für eine Benutzerinteraktion protokollieren
Object.entries(eventLatencies).forEach(([k, v]) => {
  console.log(Math.max(...v));
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
