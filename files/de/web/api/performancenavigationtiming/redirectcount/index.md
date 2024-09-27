---
title: "PerformanceNavigationTiming: redirectCount Eigenschaft"
short-title: redirectCount
slug: Web/API/PerformanceNavigationTiming/redirectCount
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`redirectCount`** schreibgeschützte Eigenschaft gibt eine Zahl zurück, die die Anzahl der Weiterleitungen seit der letzten Nicht-Weiterleitung-Navigation im aktuellen Browsing-Kontext darstellt.

Je mehr Weiterleitungen eine Seite hat, desto länger ist die Ladezeit der Seite. Um die Leistung Ihrer Webseite zu verbessern, sollten Sie mehrere Weiterleitungen vermeiden.

Die Eigenschaften [`redirectStart`](/de/docs/Web/API/PerformanceResourceTiming/redirectStart) und [`redirectEnd`](/de/docs/Web/API/PerformanceResourceTiming/redirectEnd) können verwendet werden, um die Umleitungszeit zu messen. Beachten Sie, dass sie für umleitungsübergreifende Ursprünge `0` zurückgeben.

Beachten Sie, dass clientseitige Weiterleitungen, wie `<meta http-equiv="refresh" content="0; url=https://example.com/">`, hier nicht berücksichtigt werden.

## Wert

Die Eigenschaft `redirectCount` kann die folgenden Werte haben:

- Eine Zahl, die die Anzahl der Weiterleitungen seit der letzten Nicht-Weiterleitung-Navigation im aktuellen Browsing-Kontext darstellt.
- `0`, wenn die Weiterleitung umleitungsübergreifend ist.

## Beispiele

### Protokollierung von Einträgen mit Weiterleitungen

Die Eigenschaft `redirectCount` kann verwendet werden, um zu überprüfen, ob es eine oder mehrere Weiterleitungen gibt. Wir protokollieren den Namen des Eintrags und die Umleitungszeit, falls verfügbar.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `navigation`-Leistungseinträge benachrichtigt, sobald sie in der Leistungszeitleiste des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellung des Beobachters zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `navigation`-Leistungseinträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Leistungszeitleiste des Browsers vorhanden sind:

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
