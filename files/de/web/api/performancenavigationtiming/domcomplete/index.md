---
title: "PerformanceNavigationTiming: domComplete Eigenschaft"
short-title: domComplete
slug: Web/API/PerformanceNavigationTiming/domComplete
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`domComplete`** schreibgeschützte Eigenschaft gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Zeit unmittelbar bevor der Benutzeragent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"complete"` setzt, darstellt.

Siehe auch den `complete`-Zustand von {{domxref("Document.readyState")}}, der dieser Eigenschaft entspricht und sich auf den Zustand bezieht, in dem das Dokument und alle Subressourcen das Laden abgeschlossen haben. Der Zustand zeigt auch an, dass das {{domxref("Window/load_event", "load")}}-Ereignis gleich ausgelöst wird.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}, der die Zeit unmittelbar bevor der Benutzeragent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"complete"` setzt, darstellt.

## Beispiele

### Protokollierung der DOM-Abschlusszeit

Die `domComplete`-Eigenschaft kann verwendet werden, um die Zeit zu protokollieren, wenn der DOM abgeschlossen ist.

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `navigation`-Performance-Einträge benachrichtigt, sobald diese in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(`${entry.name}: domComplete Zeit: ${entry.domComplete}ms`);
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, die nur `navigation`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungstimeline des Browsers vorhanden sind:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  console.log(`${entry.name}: domComplete Zeit: ${entry.domComplete}ms`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("Document.readyState")}}
