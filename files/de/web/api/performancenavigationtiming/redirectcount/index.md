---
title: "PerformanceNavigationTiming: redirectCount-Eigenschaft"
short-title: redirectCount
slug: Web/API/PerformanceNavigationTiming/redirectCount
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`redirectCount`** gibt eine Zahl zurück, die die Anzahl der Weiterleitungen seit der letzten Nicht-Weiterleitungsnavigation im aktuellen Browsing-Kontext darstellt.

Je höher die Anzahl der Weiterleitungen auf einer Seite ist, desto länger ist die Ladezeit der Seite. Um die Leistung Ihrer Webseite zu verbessern, vermeiden Sie mehrere Weiterleitungen.

Die Eigenschaften {{domxref("PerformanceResourceTiming.redirectStart", "redirectStart")}} und {{domxref("PerformanceResourceTiming.redirectEnd", "redirectEnd")}} können verwendet werden, um die Weiterleitungszeit zu messen. Beachten Sie, dass sie für Cross-Origin-Weiterleitungen `0` zurückgeben werden.

Beachten Sie, dass clientseitige Weiterleitungen, wie `<meta http-equiv="refresh" content="0; url=https://example.com/">`, hier nicht berücksichtigt werden.

## Wert

Die `redirectCount`-Eigenschaft kann die folgenden Werte haben:

- Eine Zahl, die die Anzahl der Weiterleitungen seit der letzten Nicht-Weiterleitungsnavigation im aktuellen Browsing-Kontext darstellt.
- `0` wenn die Weiterleitung Cross-Origin ist.

## Beispiele

### Einträge mit Weiterleitungen protokollieren

Die `redirectCount`-Eigenschaft kann verwendet werden, um zu überprüfen, ob es eine oder mehrere Weiterleitungen gibt. Wir protokollieren den Namen des Eintrags und die Weiterleitungszeit, wenn sie verfügbar ist.

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `navigation`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden sind.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `navigation`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

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

- {{domxref("PerformanceResourceTiming.redirectStart")}}
- {{domxref("PerformanceResourceTiming.redirectEnd")}}
