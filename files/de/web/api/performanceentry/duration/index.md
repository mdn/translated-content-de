---
title: "PerformanceEntry: duration Eigenschaft"
short-title: duration
slug: Web/API/PerformanceEntry/duration
l10n:
  sourceCommit: 99a75e695dbb46731dca4757e9d4c42d80bb52fc
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`duration`** Eigenschaft gibt einen [Zeitstempel](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Dauer des [Performance-Eintrags](/de/docs/Web/API/PerformanceEntry) darstellt. Die Bedeutung dieser Eigenschaft hängt vom Wert des [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) dieses Eintrags ab.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Dauer des [Performance-Eintrags](/de/docs/Web/API/PerformanceEntry) darstellt. Wenn das Konzept der Dauer für eine bestimmte Leistungskennzahl nicht zutrifft, wird eine Dauer von `0` zurückgegeben.

Die Bedeutung dieser Eigenschaft hängt vom Wert des [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) des Performance-Eintrags ab:

- `event`
  - : Die Zeit vom `startTime` des Ereignisses bis zum nächsten Rendering-Paint (gerundet auf die nächsten 8ms).
- `first-input`
  - : Die Zeit vom `startTime` des ersten Eingabeereignisses bis zum nächsten Rendering-Paint (gerundet auf die nächsten 8ms).
- `longtask`
  - : Die verstrichene Zeit zwischen Beginn und Ende der Aufgabe mit einer Genauigkeit von 1ms.
- `measure`
  - : Die Dauer der Messung.
- `navigation`
  - : Die Differenz zwischen den Eigenschaften [`loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) des Eintrags.
- `resource`
  - : Der Wert des [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) des Eintrags minus dem [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) Wert des Eintrags.

Für die folgenden Eintragstypen ist `duration` nicht anwendbar, und in diesem Fall ist der Wert immer `0`:

- `element`
- `largest-contentful-paint`
- `layout-shift`
- `mark`
- `paint`
- `taskattribution`
- `visibility-state`

## Beispiele

### Verwendung der duration Eigenschaft

Das folgende Beispiel protokolliert alle beobachteten Performance-Einträge mit einer `duration` von mehr als `0`.

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
