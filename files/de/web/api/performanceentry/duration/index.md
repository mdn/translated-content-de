---
title: "PerformanceEntry: duration-Eigenschaft"
short-title: duration
slug: Web/API/PerformanceEntry/duration
l10n:
  sourceCommit: 99a75e695dbb46731dca4757e9d4c42d80bb52fc
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`duration`**-Eigenschaft gibt einen [Zeitstempel](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Dauer des [Performance-Eintrags](/de/docs/Web/API/PerformanceEntry) darstellt. Die Bedeutung dieser Eigenschaft hängt vom Wert des [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) dieses Eintrags ab.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Dauer des [Performance-Eintrags](/de/docs/Web/API/PerformanceEntry) darstellt. Wenn das Konzept der Dauer nicht auf eine bestimmte Leistungsmetrik anwendbar ist, wird eine Dauer von `0` zurückgegeben.

Die Bedeutung dieser Eigenschaft hängt vom Wert des `entryType` dieses Performance-Eintrags ab:

- `event`
  - : Die Zeit vom `startTime` des Ereignisses bis zum nächsten Rendering-Paint (gerundet auf die nächsten 8ms).
- `first-input`
  - : Die Zeit vom `startTime` des ersten Eingabeereignisses bis zum nächsten Rendering-Paint (gerundet auf die nächsten 8ms).
- `longtask`
  - : Die verstrichene Zeit zwischen Beginn und Ende der Aufgabe, mit einer Granularität von 1ms.
- `measure`
  - : Die Dauer der Messung.
- `navigation`
  - : Der Unterschied zwischen den Eigenschaften [`loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) des Eintrags.
- `resource`
  - : Der Wert von [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) des Eintrags minus dem Wert von [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) des Eintrags.

Für die folgenden Eintragstypen ist `duration` nicht anwendbar und in diesem Fall ist der Wert immer `0`:

- `element`
- `largest-contentful-paint`
- `layout-shift`
- `mark`
- `paint`
- `taskattribution`
- `visibility-state`

## Beispiele

### Verwendung der duration-Eigenschaft

Das folgende Beispiel protokolliert alle beobachteten Performance-Einträge mit einer `duration` größer als `0`.

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.duration > 0) {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark", "resource"] });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
