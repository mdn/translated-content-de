---
title: "PerformanceResourceTiming: serverTiming-Eigenschaft"
short-title: serverTiming
slug: Web/API/PerformanceResourceTiming/serverTiming
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{securecontext_header}}

Die **`serverTiming`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen zurückgibt, die Server-Timing-Metriken enthalten.

Server-Timing-Metriken erfordern, dass der Server den {{HTTPHeader("Server-Timing")}}-Header sendet. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

Die `serverTiming`-Einträge können sowohl in `navigation`- als auch in `resource`-Einträgen vorhanden sein.

## Wert

Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen.

## Beispiele

### Server-Timing-Einträge protokollieren

Sie können einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwenden, um nach [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen zu suchen. Die Dauer jedes Server-Eintrags wird in der Konsole protokolliert.

Beispiel eines [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der benachrichtigt, wenn neue `resource`-Performance-Einträge in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers aufgetreten sind.

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

Beispiel unter Verwendung von [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

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

### Cross-Origin Server-Timing-Informationen

Der Zugriff auf Server-Timing-Informationen ist auf die gleiche Herkunft beschränkt. Um Timing-Informationen von anderen Ursprüngen freizugeben, muss der {{HTTPHeader("Timing-Allow-Origin")}}-HTTP-Antwort-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, Server-Timing-Informationen einzusehen, sollte die Ressource von einem anderen Ursprung senden:

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
