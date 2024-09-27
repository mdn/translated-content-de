---
title: "LayoutShift: lastInputTime-Eigenschaft"
short-title: lastInputTime
slug: Web/API/LayoutShift/lastInputTime
l10n:
  sourceCommit: fcd4f39485d740615c32ccaef63471bc27095fb0
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`lastInputTime`** der [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Schnittstelle gibt die Zeit des letzten ausschließenden Eingabeereignisses zurück oder `0`, falls kein ausschließendes Eingabeereignis aufgetreten ist.

Layoutverschiebungen sind nur dann problematisch, wenn der Benutzer diese nicht erwartet. Layoutverschiebungsmesswerte wie [CLS](/de/docs/Glossary/CLS) schließen Verschiebungen aus, die kurz nach bestimmten Benutzerinteraktionen auftreten. Diese Interaktionen werden _ausschließende Eingaben_ genannt. Ausschließende Eingaben sind:

- Jegliche Ereignisse, die auf eine aktive Interaktion des Benutzers mit dem Dokument hinweisen: ([`mousedown`](/de/docs/Web/API/Element/mousedown_event), [`keydown`](/de/docs/Web/API/Element/keydown_event), und [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event))
- Jegliche Ereignisse, die die Größe des Ansichtsbereichs direkt verändern.
- [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse.

Die [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignisse sind **keine** ausschließenden Eingaben.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit des letzten ausschließenden Eingabeereignisses angibt, oder `0`, falls kein ausschließendes Eingabeereignis aufgetreten ist.

## Beispiele

### Protokollierung von letzten Eingabezeiten

Protokollieren Sie ausschließende Eingabezeiten, wenn ausschließende Eingaben aufgetreten sind.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.lastInputTime) {
      console.log(entry.lastInputTime);
    }
  });
});

observer.observe({ type: "layout-shift", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`LayoutShift.hadRecentInput`](/de/docs/Web/API/LayoutShift/hadRecentInput)
