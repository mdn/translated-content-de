---
title: "PerformanceNavigationTiming: domComplete Eigenschaft"
short-title: domComplete
slug: Web/API/PerformanceNavigationTiming/domComplete
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`domComplete`** schreibgeschützte Eigenschaft gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit unmittelbar bevor der User-Agent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"complete"` setzt, darstellt.

Siehe auch den `complete`-Status des [`Document.readyState`](/de/docs/Web/API/Document/readyState), der dieser Eigenschaft entspricht und sich auf den Zustand bezieht, in dem das Dokument und alle Unterressourcen das Laden abgeschlossen haben. Der Zustand zeigt auch an, dass das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis kurz davor steht, ausgelöst zu werden.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar bevor der User-Agent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"complete"` setzt, darstellt.

## Beispiele

### Protokollierung der DOM-Abschlusszeit

Die `domComplete`-Eigenschaft kann verwendet werden, um die Zeit zu protokollieren, zu der das DOM abgeschlossen ist.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation` Performance-Einträge benachrichtigt, wie sie in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(`${entry.name}: domComplete time: ${entry.domComplete}ms`);
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation` Performance-Einträge anzeigt, die zu dem Zeitpunkt, an dem diese Methode aufgerufen wird, in der Performance-Zeitleiste des Browsers vorhanden sind:

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
