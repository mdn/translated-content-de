---
title: "LayoutShift: lastInputTime-Eigenschaft"
short-title: lastInputTime
slug: Web/API/LayoutShift/lastInputTime
l10n:
  sourceCommit: fcd4f39485d740615c32ccaef63471bc27095fb0
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die **`lastInputTime`**-Eigenschaft, die schreibgeschützt ist, des [`LayoutShift`](/de/docs/Web/API/LayoutShift)-Interfaces liefert die Zeit der letzten ausschließenden Eingabe oder `0`, falls keine ausschließende Eingabe stattgefunden hat.

Layout-Verschiebungen sind nur dann problematisch, wenn der Benutzer sie nicht erwartet. Kennzahlen zur Layout-Verschiebung, wie die [CLS](/de/docs/Glossary/CLS), schließen Verschiebungen aus, die kurz nach bestimmten Benutzerinteraktionen aufgetreten sind. Diese Interaktionen werden als _ausschließende Eingaben_ bezeichnet. Ausschließende Eingaben sind:

- Alle Ereignisse, die auf eine aktive Interaktion des Benutzers mit dem Dokument hinweisen: ([`mousedown`](/de/docs/Web/API/Element/mousedown_event), [`keydown`](/de/docs/Web/API/Element/keydown_event) und [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event))
- Alle Ereignisse, die direkt die Größe des Ansichtsfensters ändern.
- [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse.

Die [`mousemove`](/de/docs/Web/API/Element/mousemove_event) und [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignisse sind **keine** ausschließenden Eingaben.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit der letzten ausschließenden Eingabe angibt oder `0`, wenn keine ausschließende Eingabe stattgefunden hat.

## Beispiele

### Protokollierung der letzten Eingabezeiten

Protokollieren Sie ausschließende Eingabezeiten, falls eine ausschließende Eingabe stattgefunden hat.

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
