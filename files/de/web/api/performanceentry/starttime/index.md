---
title: "PerformanceEntry: startTime-Eigenschaft"
short-title: startTime
slug: Web/API/PerformanceEntry/startTime
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`startTime`**-Eigenschaft gibt den ersten [Zeitstempel](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der für diesen [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) aufgezeichnet wurde. Die Bedeutung dieser Eigenschaft hängt vom Wert des [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) dieses Eintrags ab.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den ersten Zeitstempel darstellt, als der [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry) erstellt wurde.

Die Bedeutung dieser Eigenschaft hängt vom Wert des [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) dieses Performance-Entries ab:

- `element`
  - : Entweder der Wert des [`renderTime`](/de/docs/Web/API/PerformanceElementTiming/renderTime) dieses Eintrags, wenn er nicht `0` ist, andernfalls der Wert des [`loadTime`](/de/docs/Web/API/PerformanceElementTiming/loadTime) dieses Eintrags.
- `event`
  - : Die Zeit, zu der das Ereignis erstellt wurde, d.h. die [`timeStamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft des Ereignisses.
- `first-input`
  - : Die Zeit, zu der das erste Eingabeereignis erstellt wurde, d.h. die [`timeStamp`](/de/docs/Web/API/Event/timeStamp)-Eigenschaft dieses Ereignisses.
- `largest-contentful-paint`
  - : Der Wert des [`renderTime`](/de/docs/Web/API/LargestContentfulPaint/renderTime) dieses Eintrags, wenn er nicht `0` ist, andernfalls der Wert des [`loadTime`](/de/docs/Web/API/LargestContentfulPaint/loadTime) dieses Eintrags.
- `layout-shift`
  - : Die Zeit, zu der die Layoutverschiebung begann.
- `longtask`
  - : Die Zeit, zu der die Aufgabe begann.
- `mark`
  - : Die Zeit, zu der das Markierung durch einen Aufruf von [`performance.mark()`](/de/docs/Web/API/Performance/mark) erstellt wurde.
- `measure`
  - : Die Zeit, zu der das Maß durch einen Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) erstellt wurde.
- `navigation`
  - : Immer `0`.
- `paint`
  - : Die Zeit, zu der das Paint-Ereignis auftrat.
- `resource`
  - : Der Wert der [`fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart)-Eigenschaft dieses Eintrags.
- `taskattribution`
  - : Immer `0`.
- `visibility-state`
  - : Die Zeit, zu der die Änderung des Sichtbarkeitsstatus stattfand.

## Beispiele

### Verwendung der startTime-Eigenschaft

Das folgende Beispiel zeigt die Verwendung der `startTime`-Eigenschaft, die Sie während der Leistungsbeobachtung protokollieren können.

> [!NOTE]
> Die Methode [`performance.mark()`](/de/docs/Web/API/Performance/mark) erlaubt es Ihnen, Ihre eigene `startTime` festzulegen, und die Methode [`performance.measure()`](/de/docs/Web/API/Performance/measure) ermöglicht die Festlegung des Anfangs des Maßes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
