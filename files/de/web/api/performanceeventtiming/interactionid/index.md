---
title: "PerformanceEventTiming: interactionId-Eigenschaft"
short-title: interactionId
slug: Web/API/PerformanceEventTiming/interactionId
l10n:
  sourceCommit: 8bc3252b80fb19276fce52b8ea0a012c4eaa5c95
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`interactionId`** der Schnittstelle [`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming) gibt eine ID zurück, die eine Benutzerinteraktion eindeutig identifiziert, welche eine Reihe zugehöriger Ereignisse ausgelöst hat.

## Wert

Eine Zahl. Bei Ereignistypen, für die keine Interaktions-ID berechnet wird, ist der Wert `0`.

## Beschreibung

Wenn eine Person mit einer Webseite interagiert, löst eine Benutzerinteraktion (beispielsweise ein Klick) üblicherweise eine Folge von Ereignissen aus, etwa `pointerdown`-, `pointerup`- und `click`-Ereignisse. Um die Latenz dieser Ereignisfolge zu messen, haben die Ereignisse dieselbe `interactionId`.

Eine `interactionId` wird nur für die folgenden Ereignistypen berechnet, die zu einer Benutzerinteraktion gehören. Andernfalls ist sie `0`.

| Ereignistypen                                                                                                                                                         | Benutzerinteraktion                            |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- |
| [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event), [`pointerup`](/de/docs/Web/API/Element/pointerup_event), [`click`](/de/docs/Web/API/Element/click_event) | Klicken / Tippen / Ziehen                      |
| [`contextmenu`](/de/docs/Web/API/Element/contextmenu_event)                                                                                                           | Kontextmenü                                    |
| [`input`](/de/docs/Web/API/Element/input_event)                                                                                                                       | Eingabe mit einem Eingabemethoden-Editor (IME) |
| [`keydown`](/de/docs/Web/API/Element/keydown_event), [`keyup`](/de/docs/Web/API/Element/keyup_event)                                                                  | Tastendruck                                    |

Die `interactionId` wird auch benötigt, um die Metrik {{Glossary("Interaction_to_next_paint", "Interaction to next paint")}} zu berechnen. Diese hilft dabei, die Reaktionsfähigkeit auf Benutzerinteraktionen über die gesamte Lebensdauer einer Seite zu analysieren.

## Beispiele

### interactionId verwenden

Das folgende Beispiel gruppiert die Dauer beobachteter Ereignisse nach Interaktions-ID. Standardmäßig werden nur Ereignisse mit einer Dauer von mindestens 104 Millisekunden erfasst. Die Map `eventLatencies` kann anschließend beispielsweise verwendet werden, um die Ereignisse mit der längsten Dauer innerhalb einer Benutzerinteraktion zu finden.

```js
// The key is the interaction ID.
const eventLatencies = new Map();

const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.interactionId > 0) {
      const interactionId = entry.interactionId;
      if (!eventLatencies.has(interactionId)) {
        eventLatencies.set(interactionId, []);
      }
      eventLatencies.get(interactionId).push(entry.duration);
    }
  });

  // Log the maximum observed event duration for each interaction.
  eventLatencies.forEach((durations, interactionId) => {
    console.log(interactionId, Math.max(...durations));
  });
});

observer.observe({ type: "event", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
