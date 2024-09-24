---
title: "PerformanceNavigationTiming: domInteractive-Eigenschaft"
short-title: domInteractive
slug: Web/API/PerformanceNavigationTiming/domInteractive
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`domInteractive`** gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit unmittelbar bevor der User-Agent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"interactive"` setzt, repräsentiert.

> [!NOTE]
> Diese Eigenschaft ist **nicht** das {{Glossary("Time to interactive")}} (TTI). Diese Eigenschaft bezieht sich auf die Zeit, wann der DOM-Aufbau abgeschlossen ist und eine Interaktion mit JavaScript möglich ist. Siehe auch den `interactive` Zustand von {{domxref("Document.readyState")}}, der dieser Eigenschaft entspricht.

Die Messung der DOM-Verarbeitungszeit könnte unbedeutend sein, es sei denn, Ihre Website hat einen sehr großen HTML-Quellcode, um ein Document Object Model zu erstellen.

Wenn es kein parserblockierendes JavaScript gibt, wird das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis (siehe [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) für den Zeitstempel) sofort nach `domInteractive` ausgelöst.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}, der die Zeit unmittelbar bevor der User-Agent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"interactive"` setzt, repräsentiert.

## Beispiele

### Protokollierung der DOM-Interaktionszeit

Die `domInteractive`-Eigenschaft kann verwendet werden, um die Zeit zu protokollieren, wann der DOM-Aufbau abgeschlossen ist und eine Interaktion damit möglich ist.

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `navigation`-Leistungseinträge informiert, sobald sie in der Leistungslinie des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Beobachters existierten.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `navigation`-Leistungseinträge anzeigt, die zum Zeitpunkt der Methodenaufrufs in der Leistungslinie des Browsers vorhanden sind:

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

- {{domxref("Document.readyState")}}
