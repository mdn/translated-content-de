---
title: "PerformanceNavigationTiming: domComplete Eigenschaft"
short-title: domComplete
slug: Web/API/PerformanceNavigationTiming/domComplete
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`domComplete`** gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit unmittelbar bevor der User-Agent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"complete"` setzt, darstellt.

Siehe auch den `complete`-Zustand von [`Document.readyState`](/de/docs/Web/API/Document/readyState), der dieser Eigenschaft entspricht und sich auf den Zustand bezieht, in dem das Dokument und alle Unterressourcen fertig geladen sind. Dieser Zustand zeigt auch an, dass das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis kurz vor der Ausführung steht.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar bevor der User-Agent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"complete"` setzt, darstellt.

## Beispiele

### Protokollierung der DOM-Abschlusszeit

Die `domComplete`-Eigenschaft kann verwendet werden, um die Zeit zu protokollieren, zu der das DOM vollständig ist.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Timeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(`${entry.name}: domComplete time: ${entry.domComplete}ms`);
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  console.log(`${entry.name}: domComplete time: ${entry.domComplete}ms`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.readyState`](/de/docs/Web/API/Document/readyState)
