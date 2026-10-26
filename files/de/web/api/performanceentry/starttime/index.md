---
title: "PerformanceEntry: startTime-Eigenschaft"
short-title: startTime
slug: Web/API/PerformanceEntry/startTime
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`startTime`** gibt den ersten für diesen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) erfassten [Zeitstempel](/de/docs/Web/API/DOMHighResTimeStamp) zurück. Die Bedeutung dieser Eigenschaft hängt vom Wert von [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) dieses Eintrags ab.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den ersten Zeitstempel bei der Erstellung des [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) darstellt.

Die Bedeutung dieser Eigenschaft hängt vom Wert von [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) dieses Performance-Eintrags ab:

- `container`
  - : Der Wert von [`paintTime`](/de/docs/Web/API/PerformanceContainerTiming/paintTime) dieses Eintrags.
- `element`
  - : Der Wert von [`renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) dieses Eintrags, falls er nicht `0` ist; andernfalls der Wert von [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) dieses Eintrags.
- `event`
  - : Der Zeitpunkt, zu dem das Ereignis erstellt wurde, also der Wert der Eigenschaft [`timeStamp`](/de/docs/Web/API/Event/timeStamp) des Ereignisses.
- `first-input`
  - : Der Zeitpunkt, zu dem das erste Eingabeereignis erstellt wurde, also der Wert von [`timeStamp`](/de/docs/Web/API/Event/timeStamp) dieses Ereignisses.
- `largest-contentful-paint`
  - : Der Wert von [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) dieses Eintrags, falls er nicht `0` ist; andernfalls der Wert von [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieses Eintrags.
- `layout-shift`
  - : Der Zeitpunkt, zu dem die Layoutverschiebung begann.
- `longtask`
  - : Der Zeitpunkt, zu dem die Aufgabe begann.
- `mark`
  - : Der Zeitpunkt, zu dem die Markierung durch einen Aufruf von [`performance.mark()`](/de/docs/Web/API/Performance/mark) erstellt wurde.
- `measure`
  - : Der Zeitpunkt, zu dem die Messung durch einen Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) erstellt wurde.
- `navigation`
  - : Immer `0`.
- `paint`
  - : Der Zeitpunkt, zu dem der Paint-Vorgang stattfand.
- `resource`
  - : Der Zeitpunkt, zu dem das Abrufen der Ressource begann, einschließlich Weiterleitungen. Wenn es keine HTTP-Weiterleitungen gibt oder deren Zeitinformationen nicht offengelegt werden, entspricht dieser Wert [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart). Andernfalls kann dieser Wert vor `fetchStart` liegen.
- `taskattribution`
  - : Immer `0`.
- `visibility-state`
  - : Der Zeitpunkt, zu dem sich der Sichtbarkeitsstatus änderte.

## Beispiele

### Die startTime-Eigenschaft verwenden

Das folgende Beispiel zeigt die Verwendung der Eigenschaft `startTime`, deren Wert Sie bei der Performance-Beobachtung protokollieren können.

Hinweis: Mit der Methode [`performance.mark()`](/de/docs/Web/API/Performance/mark) können Sie `startTime` selbst festlegen. Mit der Methode [`performance.measure()`](/de/docs/Web/API/Performance/measure) können Sie den Beginn der Messung festlegen.

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
