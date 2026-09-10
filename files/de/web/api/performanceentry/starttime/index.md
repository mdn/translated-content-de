---
title: "PerformanceEntry: startTime-Eigenschaft"
short-title: startTime
slug: Web/API/PerformanceEntry/startTime
l10n:
  sourceCommit: 153369fa094f0b58ce1aee3f3cc1a3d7ab540b91
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`startTime`** gibt den ersten [Zeitstempel](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der für diesen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) aufgezeichnet wurde. Die Bedeutung dieser Eigenschaft hängt vom Wert des [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) dieses Eintrags ab.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den ersten Zeitstempel darstellt, zu dem der
[`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) erstellt wurde.

Die Bedeutung dieser Eigenschaft hängt vom Wert des [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) dieses Performance-Eintrags ab:

- `element`
  - : Entweder der Wert von [`renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) dieses Eintrags, falls er nicht `0` ist, andernfalls der Wert von [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) dieses Eintrags.
- `event`
  - : Der Zeitpunkt, zu dem das Ereignis erstellt wurde, d.h. die Eigenschaft [`timeStamp`](/de/docs/Web/API/Event/timeStamp) des Ereignisses.
- `first-input`
  - : Der Zeitpunkt, zu dem das erste Eingabeereignis erstellt wurde, d.h. der [`timeStamp`](/de/docs/Web/API/Event/timeStamp) dieses Ereignisses.
- `largest-contentful-paint`
  - : Der Wert von [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) dieses Eintrags, falls er nicht `0` ist, andernfalls der Wert von [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieses Eintrags.
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
  - : Der Zeitpunkt, zu dem das Zeichnen erfolgte.
- `resource`
  - : Der Zeitpunkt, zu dem das Abrufen der Ressource begann, einschließlich Weiterleitungen. Wenn keine HTTP-Weiterleitungen vorhanden sind oder deren Zeitinformationen nicht verfügbar gemacht werden, entspricht dieser Wert [`PerformanceResourceTiming.fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart). Andernfalls kann dieser Wert früher als `fetchStart` liegen.
- `taskattribution`
  - : Immer `0`.
- `visibility-state`
  - : Der Zeitpunkt, zu dem die Änderung des Sichtbarkeitsstatus erfolgte.

## Beispiele

### Verwendung der startTime-Eigenschaft

Das folgende Beispiel zeigt die Verwendung der `startTime`-Eigenschaft, die Sie während der Performance-Beobachtung protokollieren können.

Hinweis: Die Methode [`performance.mark()`](/de/docs/Web/API/Performance/mark) ermöglicht es Ihnen, Ihre eigene `startTime` festzulegen, und die Methode [`performance.measure()`](/de/docs/Web/API/Performance/measure) ermöglicht es Ihnen, den Beginn der Messung festzulegen.

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
