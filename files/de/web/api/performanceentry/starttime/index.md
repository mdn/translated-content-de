---
title: "PerformanceEntry: startTime-Eigenschaft"
short-title: startTime
slug: Web/API/PerformanceEntry/startTime
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`startTime`**-Eigenschaft gibt den ersten {{domxref("DOMHighResTimeStamp", "Zeitstempel", "", "no-code")}} zurück, der für diesen {{domxref("PerformanceEntry")}} aufgezeichnet wurde. Die Bedeutung dieser Eigenschaft hängt vom Wert des {{domxref("PerformanceEntry.entryType", "entryType")}} dieser Eintragung ab.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}, der den ersten Zeitpunkt darstellt, zu dem der
{{domxref("PerformanceEntry")}} erstellt wurde.

Die Bedeutung dieser Eigenschaft hängt vom Wert des {{domxref("PerformanceEntry.entryType", "entryType")}} dieser Leistungseintragung ab:

- `element`
  - : Entweder der Wert von {{domxref("PerformanceElementTiming.renderTime", "renderTime")}} dieser Eintragung, wenn er nicht `0` ist. Andernfalls der Wert von {{domxref("PerformanceElementTiming.loadTime", "loadTime")}} dieser Eintragung.
- `event`
  - : Der Zeitpunkt, zu dem das Ereignis erstellt wurde, also die [`timeStamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft des Ereignisses.
- `first-input`
  - : Der Zeitpunkt der Erstellung des ersten Eingabeereignisses, also die [`timeStamp`](/de/docs/Web/API/Event/timeStamp) dieses Ereignisses.
- `largest-contentful-paint`
  - : Der Wert von {{domxref("LargestContentfulPaint.renderTime", "renderTime")}} dieser Eintragung, wenn er nicht `0` ist. Andernfalls der Wert von {{domxref("LargestContentfulPaint.loadTime", "loadTime")}} dieser Eintragung.
- `layout-shift`
  - : Der Zeitpunkt, zu dem die Layout-Verschiebung begann.
- `longtask`
  - : Der Zeitpunkt, zu dem die Aufgabe begann.
- `mark`
  - : Der Zeitpunkt, zu dem die Markierung durch einen Aufruf von {{domxref("Performance.mark", "performance.mark()")}} erstellt wurde.
- `measure`
  - : Der Zeitpunkt, zu dem die Messung durch einen Aufruf von {{domxref("Performance.measure", "performance.measure()")}} erstellt wurde.
- `navigation`
  - : Immer `0`.
- `paint`
  - : Der Zeitpunkt, zu dem das Malen auftrat.
- `resource`
  - : Der Wert der {{domxref("PerformanceResourceTiming.fetchStart", "fetchStart")}}-Eigenschaft dieser Eintragung.
- `taskattribution`
  - : Immer `0`.
- `visibility-state`
  - : Der Zeitpunkt, zu dem der Sichtbarkeitsstatus geändert wurde.

## Beispiele

### Verwendung der startTime-Eigenschaft

Das folgende Beispiel zeigt die Verwendung der `startTime`-Eigenschaft, die Sie während der Leistungsbeobachtung protokollieren können.

Hinweis: Die Methode {{domxref("performance.mark()")}} erlaubt es Ihnen, Ihre eigene `startTime` festzulegen, und die Methode {{domxref("performance.measure()")}} erlaubt es, den Beginn der Messung festzulegen.

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
