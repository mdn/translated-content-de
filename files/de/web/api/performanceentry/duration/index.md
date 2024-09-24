---
title: "PerformanceEntry: duration Eigenschaft"
short-title: duration
slug: Web/API/PerformanceEntry/duration
l10n:
  sourceCommit: 99a75e695dbb46731dca4757e9d4c42d80bb52fc
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`duration`**-Eigenschaft gibt einen {{domxref("DOMHighResTimeStamp","Zeitstempel", "", "no-code")}} zurück, der die Dauer des {{domxref("PerformanceEntry","Performance-Eintrags", "", "no-code")}} darstellt. Die Bedeutung dieser Eigenschaft hängt vom Wert des {{domxref("PerformanceEntry.entryType", "entryType")}} dieses Eintrags ab.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}, der die Dauer des {{domxref("PerformanceEntry","Performance-Eintrags", "", "no-code")}} repräsentiert. Wenn das Konzept der Dauer für eine bestimmte Leistungsmetrik nicht anwendbar ist, wird eine Dauer von `0` zurückgegeben.

Die Bedeutung dieser Eigenschaft hängt vom Wert des {{domxref("PerformanceEntry.entryType","entryType")}} dieses Performance-Eintrags ab:

- `event`
  - : Die Zeit vom `startTime` des Ereignisses bis zum nächsten Rendering-Paint (auf die nächsten 8 ms gerundet).
- `first-input`
  - : Die Zeit vom `startTime` des ersten Eingabeereignisses bis zum nächsten Rendering-Paint (auf die nächsten 8 ms gerundet).
- `longtask`
  - : Die verstrichene Zeit zwischen Beginn und Ende der Aufgabe mit einer Granularität von 1 ms.
- `measure`
  - : Die Dauer der Messung.
- `navigation`
  - : Die Differenz zwischen den Eigenschaften {{domxref("PerformanceNavigationTiming.loadEventEnd", "loadEventEnd")}} und {{domxref("PerformanceEntry.startTime", "startTime")}} des Eintrags.
- `resource`
  - : Der Wert von {{domxref("PerformanceResourceTiming/responseEnd", "responseEnd")}} des Eintrags minus dem Wert von {{domxref("PerformanceEntry.startTime","startTime")}} des Eintrags.

Für die folgenden Eintragstypen ist `duration` nicht anwendbar, und in diesem Fall beträgt der Wert immer `0`:

- `element`
- `largest-contentful-paint`
- `layout-shift`
- `mark`
- `paint`
- `taskattribution`
- `visibility-state`

## Beispiele

### Verwendung der duration-Eigenschaft

Das folgende Beispiel protokolliert alle beobachteten Performance-Einträge mit einer `duration`, die größer als `0` ist.

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
