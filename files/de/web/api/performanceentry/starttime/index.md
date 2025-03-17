---
title: "PerformanceEntry: startTime-Eigenschaft"
short-title: startTime
slug: Web/API/PerformanceEntry/startTime
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`startTime`**-Eigenschaft gibt den ersten [Zeitstempel](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der für diesen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) aufgezeichnet wurde. Die Bedeutung dieser Eigenschaft hängt vom Wert des [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) dieses Eintrags ab.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den ersten Zeitstempel darstellt, als der [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) erstellt wurde.

Die Bedeutung dieser Eigenschaft hängt vom Wert des [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) dieses Performance-Eintrags ab:

- `element`
  - : Entweder der Wert des [`renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) dieses Eintrags, wenn er nicht `0` ist, andernfalls der Wert des [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) dieses Eintrags.
- `event`
  - : Die Zeit, zu der das Ereignis erstellt wurde, d.h. die [`timeStamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft des Ereignisses.
- `first-input`
  - : Die Zeit, zu der das erste Eingabeereignis erstellt wurde, d.h. die [`timeStamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft dieses Ereignisses.
- `largest-contentful-paint`
  - : Der Wert des [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) dieses Eintrags, wenn er nicht `0` ist, andernfalls der Wert des [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieses Eintrags.
- `layout-shift`
  - : Die Zeit, zu der die Layout-Verschiebung begann.
- `longtask`
  - : Die Zeit, zu der die Aufgabe begann.
- `mark`
  - : Die Zeit, zu der das Mark durch einen Aufruf von [`performance.mark()`](/de/docs/Web/API/Performance/mark) erstellt wurde.
- `measure`
  - : Die Zeit, zu der das Maß durch einen Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) erstellt wurde.
- `navigation`
  - : Immer `0`.
- `paint`
  - : Die Zeit, zu der das Paint auftrat.
- `resource`
  - : Der Wert der [`fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart)-Eigenschaft dieses Eintrags.
- `taskattribution`
  - : Immer `0`.
- `visibility-state`
  - : Die Zeit, zu der die Änderung des Sichtbarkeitsstatus auftrat.

## Beispiele

### Verwendung der startTime-Eigenschaft

Das folgende Beispiel zeigt die Verwendung der `startTime`-Eigenschaft, die Sie während der Leistungsbeobachtung protokollieren können.

Hinweis: Die Methode [`performance.mark()`](/de/docs/Web/API/Performance/mark) ermöglicht es Ihnen, Ihre eigene `startTime` festzulegen, und die Methode [`performance.measure()`](/de/docs/Web/API/Performance/measure) ermöglicht es, den Beginn der Messung festzulegen.

```js
performance.mark("my-mark");
performance.mark("my-other-mark", { startTime: 12.5 });

loginButton.addEventListener("click", (clickEvent) => {
  performance.measure("login-click", { start: clickEvent.timeStamp });
});

function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name}'s startTime: ${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
