---
title: "PerformanceResourceTiming: serverTiming property"
slug: Web/API/PerformanceResourceTiming/serverTiming
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

--- 
title: "PerformanceResourceTiming: serverTiming-Eigenschaft"
short-title: serverTiming
slug: Web/API/PerformanceResourceTiming/serverTiming
page-type: web-api-instance-property
browser-compat: api.PerformanceResourceTiming.serverTiming
---

{{APIRef("Performance API")}} {{securecontext_header}}

Die **`serverTiming`**-Eigenschaft, die schreibgeschützt ist, gibt ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen zurück, die Metriken zum Server-Timing enthalten.

Für Server-Timing-Metriken muss der Server den {{HTTPHeader("Server-Timing")}}-Header senden. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

Die `serverTiming`-Einträge können sowohl bei `navigation`- als auch `resource`-Einträgen auftreten.

## Wert

Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen.

## Beispiele

### Server-Timing-Einträge protokollieren

Sie können einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwenden, um auf [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträge zu achten. Die Dauer jedes Server-Eintrags wird in der Konsole protokolliert.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die Option `buffered`, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    entry.serverTiming.forEach((serverEntry) => {
      console.log(`${serverEntry.name} duration: ${serverEntry.duration}`);
    });
  });
});

["navigation", "resource"].forEach((type) =>
  observer.observe({ type, buffered: true }),
);
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
for (const entryType of ["navigation", "resource"]) {
  for (const { name: url, serverTiming } of performance.getEntriesByType(
    entryType,
  )) {
    if (serverTiming) {
      for (const { name, duration } of serverTiming) {
        console.log(`${url}: ${name} duration: ${duration}`);
      }
    }
  }
}
```

### Informationen zum Server-Timing über Cross-Origin

Der Zugriff auf Informationen zum Server-Timing ist auf den gleichen Ursprung beschränkt. Um Timing-Informationen über Cross-Origin freizugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}}-HTTP-Antwort-Header gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` den Zugriff auf Informationen zum Server-Timing zu erlauben, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)
- {{HTTPHeader("Server-Timing")}}
