---
title: "PerformanceNavigationTiming: domInteractive-Eigenschaft"
short-title: domInteractive
slug: Web/API/PerformanceNavigationTiming/domInteractive
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}}

Die **`domInteractive`**-Eigenschaft nur lesbar gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit unmittelbar bevor der Benutzeragent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"interactive"` setzt, darstellt.

> [!NOTE]
> Diese Eigenschaft ist **nicht** {{Glossary("Time_to_interactive", "Time to interactive")}} (TTI). Diese Eigenschaft bezieht sich auf die Zeit, zu der der DOM-Aufbau abgeschlossen ist und eine Interaktion mit diesem aus JavaScript möglich ist. Siehe auch den `interactive`-Status von [`Document.readyState`](/de/docs/Web/API/Document/readyState), der dieser Eigenschaft entspricht.

Das Messen der DOM-Verarbeitungszeit kann unerheblich sein, es sei denn, Ihre Website hat einen sehr großen HTML-Quellcode, aus dem ein Document Object Model konstruiert werden soll.

Wenn kein parserblockierendes JavaScript vorhanden ist, wird das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event)-Ereignis (siehe [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) für den Zeitstempel) unmittelbar nach `domInteractive` ausgelöst.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar bevor der Benutzeragent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"interactive"` setzt, darstellt.

## Beispiele

### Protokollierung der DOM-Interaktionszeit

Die `domInteractive`-Eigenschaft kann verwendet werden, um die Zeit zu protokollieren, wenn der DOM-Aufbau abgeschlossen ist und eine Interaktion mit diesem möglich ist.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performance-Einträge benachrichtigt, wenn sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden sind.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(
      `${entry.name}: domInteractive time: ${entry.domInteractive}ms`,
    );
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Performance-Einträge anzeigt, die in der Leistungstimeline des Browsers zum Zeitpunkt des Aufrufs dieser Methode vorhanden sind:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  console.log(`${entry.name}: domInteractive time: ${entry.domInteractive}ms`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.readyState`](/de/docs/Web/API/Document/readyState)
