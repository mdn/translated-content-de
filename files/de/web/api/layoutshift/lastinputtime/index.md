---
title: "LayoutShift: lastInputTime Eigenschaft"
short-title: lastInputTime
slug: Web/API/LayoutShift/lastInputTime
l10n:
  sourceCommit: fcd4f39485d740615c32ccaef63471bc27095fb0
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`lastInputTime`** der {{domxref("LayoutShift")}}-Schnittstelle gibt die Zeit des letzten ausschließenden Eingangs zurück oder `0`, wenn kein ausschließender Eingang erfolgt ist.

Layout-Verschiebungen sind nur dann schlecht, wenn der Benutzer sie nicht erwartet hat. Layout-Verschiebungsmetriken wie {{glossary("CLS")}} schließen Verschiebungen aus, die kurz nach bestimmten Benutzerinteraktionen auftraten. Diese Interaktionen werden _ausschließende Eingaben_ genannt. Ausschließende Eingaben sind:

- Alle Ereignisse, die die aktive Interaktion eines Benutzers mit dem Dokument signalisieren: ([`mousedown`](/de/docs/Web/API/Element/mousedown_event), [`keydown`](/de/docs/Web/API/Element/keydown_event) und [`pointerdown`](/de/docs/Web/API/Element/pointerdown_event))
- Alle Ereignisse, die direkt die Größe des Viewports ändern.
- [`change`](/de/docs/Web/API/HTMLElement/change_event)-Ereignisse.

Die [`mousemove`](/de/docs/Web/API/Element/mousemove_event)- und [`pointermove`](/de/docs/Web/API/Element/pointermove_event)-Ereignisse sind **keine** ausschließenden Eingaben.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}, der die Zeit des letzten ausschließenden Eingangs angibt oder `0`, wenn kein ausschließender Eingang erfolgt ist.

## Beispiele

### Protokollierung von letzten Eingabezeiten

Protokollieren Sie ausschließende Eingabezeiten, wenn ein ausschließender Eingang erfolgt ist.

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

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{domxref("LayoutShift.hadRecentInput")}}
