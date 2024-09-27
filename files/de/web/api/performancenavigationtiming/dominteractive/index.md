---
title: "PerformanceNavigationTiming: domInteractive-Eigenschaft"
short-title: domInteractive
slug: Web/API/PerformanceNavigationTiming/domInteractive
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`domInteractive`** gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Zeit unmittelbar bevor der User-Agent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"interactive"` setzt, darstellt.

> [!NOTE]
> Diese Eigenschaft ist **nicht** [Time to interactive](/de/docs/Glossary/Time_to_interactive) (TTI). Diese Eigenschaft bezieht sich auf die Zeit, wenn der DOM-Aufbau abgeschlossen ist und eine Interaktion mit dem JavaScript möglich ist. Siehe auch den `interactive`-Status von [`Document.readyState`](/de/docs/Web/API/Document/readyState), der dieser Eigenschaft entspricht.

Die Messung der DOM-Verarbeitungszeit ist möglicherweise nicht von Bedeutung, es sei denn, Ihre Website hat eine sehr große HTML-Quelle, aus der ein Document Object Model erstellt werden soll.

Wenn kein parser-blockierendes JavaScript vorliegt, wird das [`DOMContentLoaded`](/de/docs/Web/API/Document/DOMContentLoaded_event) Ereignis (siehe [`domContentLoadedEventStart`](/de/docs/Web/API/PerformanceNavigationTiming/domContentLoadedEventStart) für den Zeitstempel) sofort nach `domInteractive` ausgelöst.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit unmittelbar bevor der User-Agent den [`readyState`](/de/docs/Web/API/Document/readyState) des Dokuments auf `"interactive"` setzt, darstellt.

## Beispiele

### Protokollieren der DOM-Interaktionszeit

Die `domInteractive`-Eigenschaft kann verwendet werden, um die Zeit zu protokollieren, wenn der DOM-Aufbau abgeschlossen ist und eine Interaktion mit ihm möglich ist.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation` Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers protokolliert werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    console.log(
      `${entry.name}: domInteractive time: ${entry.domInteractive}ms`,
    );
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur die `navigation` Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  console.log(`${entry.name}: domInteractive time: ${entry.domInteractive}ms`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.readyState`](/de/docs/Web/API/Document/readyState)
