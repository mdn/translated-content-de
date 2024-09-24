---
title: "PerformanceEventTiming: processingStart-Eigenschaft"
short-title: processingStart
slug: Web/API/PerformanceEventTiming/processingStart
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`processingStart`** gibt die Zeit zurück, zu der die Ereignisübertragung begonnen hat. Dies ist der Zeitpunkt, wenn die Ereignishandler kurz vor der Ausführung stehen.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}-Zeitstempel.

## Beispiele

### Verwendung der processingStart-Eigenschaft

Die `processingStart`-Eigenschaft kann beim Beobachten von Ereignistiming-Einträgen ({{domxref("PerformanceEventTiming")}}) verwendet werden. Zum Beispiel, um die Eingabeverzögerung oder die Eventverarbeitungszeiten zu berechnen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // Gesamtdauer
    const duration = entry.duration;
    // Eingabeverzögerung (vor der Verarbeitung des Ereignisses)
    const delay = entry.processingStart - entry.startTime;
    // Synchrone Ereignisverarbeitungszeit
    // (zwischen Start und Ende der Übertragung)
    const time = entry.processingEnd - entry.processingStart;
  });
});
// Registrieren des Observers für Ereignisse
observer.observe({ type: "event", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("PerformanceEventTiming.processingEnd")}}
