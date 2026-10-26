---
title: "PerformanceEntry: duration-Eigenschaft"
short-title: duration
slug: Web/API/PerformanceEntry/duration
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`duration`** gibt einen [Zeitstempel](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Dauer des [Performance-Eintrags](/de/docs/Web/API/PerformanceEntry) angibt. Die Bedeutung dieser Eigenschaft hängt vom Wert der [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Eigenschaft des Eintrags ab.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Dauer des [Performance-Eintrags](/de/docs/Web/API/PerformanceEntry) angibt. Wenn das Konzept einer Dauer auf eine bestimmte Performance-Metrik nicht anwendbar ist, wird `0` zurückgegeben.

Die Bedeutung dieser Eigenschaft hängt vom Wert der [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Eigenschaft des Performance-Eintrags ab:

- `event`
  - : Die Zeit vom `startTime` des Ereignisses bis zum nächsten Rendering-Paint (auf die nächsten 8 ms gerundet).
- `first-input`
  - : Die Zeit vom `startTime` des ersten Eingabeereignisses bis zum nächsten Rendering-Paint (auf die nächsten 8 ms gerundet).
- `longtask`
  - : Die verstrichene Zeit zwischen Beginn und Ende der Aufgabe, mit einer Auflösung von 1 ms.
- `measure`
  - : Die Dauer der Messung.
- `navigation`
  - : Die Differenz zwischen den Eigenschaften [`loadEventEnd`](/de/docs/Web/API/PerformanceNavigationTiming/loadEventEnd) und [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) des Eintrags.
- `resource`
  - : Der Wert von [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) des Eintrags abzüglich des Werts von [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) des Eintrags.

Für die folgenden Eintragstypen ist `duration` nicht anwendbar; der Wert ist in diesen Fällen immer `0`:

- `container`
- `element`
- `largest-contentful-paint`
- `layout-shift`
- `mark`
- `paint`
- `taskattribution`
- `visibility-state`

## Beispiele

### Die duration-Eigenschaft verwenden

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
