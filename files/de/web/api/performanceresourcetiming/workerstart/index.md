---
title: "PerformanceResourceTiming: workerStart-Eigenschaft"
short-title: workerStart
slug: Web/API/PerformanceResourceTiming/workerStart
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`workerStart`** der Schnittstelle [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming) gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar vor dem Dispatchen des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, wenn ein Service Worker-Thread bereits läuft, oder unmittelbar bevor der Service Worker-Thread gestartet wird, falls er noch nicht läuft. Wenn die Ressource nicht von einem Service Worker abgefangen wird, gibt die Eigenschaft immer 0 zurück.

## Wert

Die `workerStart`-Eigenschaft kann folgende Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).
- `0`, wenn kein Service Worker verwendet wird.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header nicht verwendet wird.

## Beispiele

### Messung der Verarbeitungszeit von ServiceWorker

Die Eigenschaften `workerStart` und [`fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) können verwendet werden, um die Verarbeitungszeit eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zu messen.

```js
const workerProcessingTime = entry.fetchStart - entry.workerStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der benachrichtigt, wenn neue `resource`-Performance-Einträge in der Performance-Zeitleiste des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

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

### Informationen zur Cross-Origin-Timing

Wenn der Wert der `workerStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Timing-Informationen für Cross-Origin zu sehen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwort-Header gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` das Sehen von Timing-Ressourcen zu erlauben, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
