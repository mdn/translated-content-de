---
title: "PerformanceResourceTiming: workerStart-Eigenschaft"
short-title: workerStart
slug: Web/API/PerformanceResourceTiming/workerStart
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die **`workerStart`** schreibgeschützte Eigenschaft des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar vor dem Dispatch des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, wenn ein Service Worker-Thread bereits läuft, oder unmittelbar bevor der Service Worker-Thread gestartet wird, wenn er noch nicht läuft. Wenn die Ressource nicht von einem Service Worker abgefangen wird, gibt die Eigenschaft immer 0 zurück.

## Wert

Die `workerStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).
- `0`, wenn kein Service Worker verwendet wird.
- `0`, wenn die Ressource eine Cross-Origin-Anforderung ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header verwendet wird.

## Beispiele

### Messung der ServiceWorker-Bearbeitungszeit

Die `workerStart`- und [`fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart)-Eigenschaften können verwendet werden, um die Bearbeitungszeit eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zu messen.

```js
const workerProcessingTime = entry.fetchStart - entry.workerStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge informiert, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    const workerProcessingTime = entry.fetchStart - entry.workerStart;
    if (workerProcessingTime > 0) {
      console.log(
        `${entry.name}: Worker processing time: ${workerProcessingTime}ms`,
      );
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  const workerProcessingTime = entry.fetchStart - entry.workerStart;
  if (workerProcessingTime > 0) {
    console.log(
      `${entry.name}: Worker processing time: ${workerProcessingTime}ms`,
    );
  }
});
```

### Informationen zur Cross-Origin-Zeiterfassung

Wenn der Wert der `workerStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anforderung sein. Um Informationen zur Cross-Origin-Zeiterfassung anzuzeigen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` den Zugriff auf Zeitressourcen zu erlauben, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
