---
title: "PerformanceEventTiming: processingEnd-Eigenschaft"
short-title: processingEnd
slug: Web/API/PerformanceEventTiming/processingEnd
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`processingEnd`**-Eigenschaft gibt die Zeit zurück, zu der der letzte Ereignishandler die Ausführung beendet hat.

Sie ist gleich {{domxref("PerformanceEventTiming.processingStart")}}, wenn keine solchen Ereignishandler vorhanden sind.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}-Zeitstempel.

## Beispiele

### Verwendung der processingEnd-Eigenschaft

Die `processingEnd`-Eigenschaft kann verwendet werden, wenn man Ereignis-Timing-Einträge beobachtet ({{domxref("PerformanceEventTiming")}}). Zum Beispiel, um Eingabeverzögerungen oder Ereignisverarbeitungszeiten zu berechnen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    // Gesamtdauer
    const duration = entry.duration;
    // Eingabeverzögerung (vor der Verarbeitung des Ereignisses)
    const delay = entry.processingStart - entry.startTime;
    // Synchrone Ereignisverarbeitungszeit
    // (zwischen Start und Ende des Dispatch)
    const time = entry.processingEnd - entry.processingStart;
  });
});
// Registrieren des Beobachters für Ereignisse
observer.observe({ type: "event", buffered: true });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("PerformanceEventTiming.processingStart")}}
