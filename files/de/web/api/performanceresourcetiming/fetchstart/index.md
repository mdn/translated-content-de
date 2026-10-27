---
title: "PerformanceResourceTiming: fetchStart-Eigenschaft"
short-title: fetchStart
slug: Web/API/PerformanceResourceTiming/fetchStart
l10n:
  sourceCommit: e8712755654ac056f2fb02282177e13d7b9ce780
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`fetchStart`** gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource abzurufen, zurück.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar bevor der Browser beginnt, die Ressource abzurufen.

## Beschreibung

Wenn keine HTTP-Weiterleitungen vorliegen oder deren Zeitinformationen nicht offengelegt werden, entspricht dieser Wert [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime). Andernfalls kann dieser Wert später als `startTime` liegen.

Anders als viele andere Eigenschaften von `PerformanceResourceTiming` ist die Eigenschaft `fetchStart` bei Cross-Origin-Anfragen auch ohne den HTTP-Antwortheader {{HTTPHeader("Timing-Allow-Origin")}} verfügbar. Ohne diesen Header entspricht `fetchStart` jedoch `startTime` und gibt daher nicht preis, wie viel Zeit für Weiterleitungen aufgewendet wurde. Eine Ausnahme bilden Cross-Origin-{{HTMLElement("iframe")}}-Elemente, bei denen `fetchStart` den Wert `0` hat (siehe [Cross-Origin-iframes](/de/docs/Web/API/PerformanceResourceTiming/responseEnd#cross-origin_iframes)).

## Beispiele

### Abrufdauer messen (ohne Weiterleitungen)

Mit den Eigenschaften `fetchStart` und [`responseEnd`](/de/docs/Web/API/PerformanceResourceTiming/responseEnd) lässt sich die Gesamtdauer für den Abruf der endgültigen Ressource ohne Weiterleitungen messen. Wenn Sie Weiterleitungen einbeziehen möchten, finden Sie die Gesamtdauer des Abrufs in der Eigenschaft [`duration`](/de/docs/Web/API/PerformanceEntry/duration).

```js
const timeToFetch = entry.responseEnd - entry.fetchStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald diese in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge zuzugreifen, die vor der Erstellung des Observers erfasst wurden.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const timeToFetch = entry.responseEnd - entry.fetchStart;
    if (timeToFetch > 0) {
      console.log(`${entry.name}: Time to fetch: ${timeToFetch}ms`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur die `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Methodenaufrufs in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const timeToFetch = entry.responseEnd - entry.fetchStart;
  if (timeToFetch > 0) {
    console.log(`${entry.name}: Time to fetch: ${timeToFetch}ms`);
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
- [Resource Timing](/de/docs/Web/API/Performance_API/Resource_timing)
