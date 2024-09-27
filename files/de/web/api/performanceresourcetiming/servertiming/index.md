---
title: "PerformanceResourceTiming: serverTiming-Eigenschaft"
short-title: serverTiming
slug: Web/API/PerformanceResourceTiming/serverTiming
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}} {{securecontext_header}}

Die **`serverTiming`** schreibgeschützte Eigenschaft gibt ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen zurück, die Server-Timing-Metriken enthalten.

Server-Timing-Metriken erfordern, dass der Server den {{HTTPHeader("Server-Timing")}}-Header sendet. Zum Beispiel:

```http
Server-Timing: cache;desc="Cache Read";dur=23.2
```

Die `serverTiming`-Einträge können in `navigation`- und `resource`-Einträgen vorhanden sein.

## Wert

Ein Array von [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen.

## Beispiele

### Protokollierung von Server-Timing-Einträgen

Sie können einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwenden, um nach [`PerformanceServerTiming`](/de/docs/Web/API/PerformanceServerTiming)-Einträgen zu suchen. Die Dauer jedes Servereintrags wird in der Konsole protokolliert.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

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

### Informationen zum Cross-Origin-Server-Timing

Der Zugriff auf Informationen zum Server-Timing ist auf den gleichen Ursprung beschränkt. Um Cross-Origin-Timing-Informationen freizugeben, muss der HTTP-Antwortheader {{HTTPHeader("Timing-Allow-Origin")}} gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` den Zugriff auf Server-Timing-Informationen zu ermöglichen, sollte die Cross-Origin-Ressource senden:

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
