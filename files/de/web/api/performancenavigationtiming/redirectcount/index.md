---
title: "PerformanceNavigationTiming: Eigenschaft redirectCount"
short-title: redirectCount
slug: Web/API/PerformanceNavigationTiming/redirectCount
l10n:
  sourceCommit: f5ea8950d5cc7bc42691e0bb8a3e634160814bac
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`redirectCount`** gibt eine Zahl zurück, die die Anzahl der Weiterleitungen seit der letzten Navigation ohne Weiterleitung im aktuellen Browsing-Kontext darstellt.

Je höher die Anzahl der Weiterleitungen auf einer Seite ist, desto länger ist die Ladezeit der Seite. Um die Leistung Ihrer Webseite zu verbessern, vermeiden Sie mehrere Weiterleitungen.

Die Eigenschaften [`redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) und [`redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) können verwendet werden, um die Weiterleitungszeit zu messen. Beachten Sie, dass sie für Cross-Origin-Weiterleitungen `0` zurückgeben.

Beachten Sie, dass clientseitige Weiterleitungen wie `<meta http-equiv="refresh" content="0; url=https://example.com/">` hier nicht berücksichtigt werden.

## Wert

Die Eigenschaft `redirectCount` kann die folgenden Werte haben:

- Eine Zahl, die die Anzahl der Weiterleitungen seit der letzten Navigation ohne Weiterleitung im aktuellen Browsing-Kontext darstellt.
- `0`, wenn die Weiterleitung Cross-Origin ist.

## Beispiele

### Protokollieren von Einträgen mit Weiterleitungen

Die Eigenschaft `redirectCount` kann verwendet werden, um zu prüfen, ob eine oder mehrere Weiterleitungen vorhanden sind. Wir protokollieren den Namen des Eintrags und die Weiterleitungszeit, falls sie verfügbar ist.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Performance-Einträge benachrichtigt, sobald diese in der Performance-Zeitachse des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const name = entry.name;
    const redirectCount = entry.redirectCount;
    const redirectTime = entry.redirectEnd - entry.redirectStart;
    if (redirectCount > 0) {
      console.log(`${name}: Redirect count: ${redirectCount}`);
      if (redirectTime > 0) {
        console.log(`${name}: Redirect time: ${redirectTime}ms`);
      }
    }
  });
});

observer.observe({ type: "navigation", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Performance-Einträge anzeigt, die sich zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitachse des Browsers befinden:

```js
const entries = performance.getEntriesByType("navigation");
entries.forEach((entry) => {
  const name = entry.name;
  const redirectCount = entry.redirectCount;
  const redirectTime = entry.redirectEnd - entry.redirectStart;
  if (redirectCount > 0) {
    console.log(`${name}: Redirect count: ${redirectCount}`);
    if (redirectTime > 0) {
      console.log(`${name}: Redirect time: ${redirectTime}ms`);
    }
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceResourceTiming.redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart)
- [`PerformanceResourceTiming.redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd)
