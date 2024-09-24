---
title: "PerformanceResourceTiming: workerStart-Eigenschaft"
short-title: workerStart
slug: Web/API/PerformanceResourceTiming/workerStart
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`workerStart`**-Eigenschaft der {{domxref("PerformanceResourceTiming")}}-Schnittstelle gibt ein {{domxref("DOMHighResTimeStamp")}} unmittelbar vor der Übertragung des {{domxref("FetchEvent")}} zurück, wenn ein Service Worker-Thread bereits läuft, oder unmittelbar bevor der Service Worker-Thread gestartet wird, falls er noch nicht läuft. Wenn die Ressource nicht von einem Service Worker abgefangen wird, liefert die Eigenschaft immer den Wert 0 zurück.

## Wert

Die `workerStart`-Eigenschaft kann folgende Werte annehmen:

- Ein {{domxref("DOMHighResTimeStamp")}}.
- `0`, wenn kein Service Worker verwendet wird.
- `0`, wenn es sich um eine Cross-Origin-Anfrage handelt und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header verwendet wird.

## Beispiele

### Messung der Bearbeitungszeit des ServiceWorkers

Die `workerStart`- und {{domxref("PerformanceResourceTiming.fetchStart", "fetchStart")}}-Eigenschaften können verwendet werden, um die Bearbeitungszeit eines {{domxref("ServiceWorker")}} zu messen.

```js
const workerProcessingTime = entry.fetchStart - entry.workerStart;
```

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden sind.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

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

### Cross-Origin-Zeitinformationen

Wenn der Wert der `workerStart`-Eigenschaft `0` ist, könnte es sich bei der Ressource um eine Cross-Origin-Anfrage handeln. Um Cross-Origin-Zeitinformationen anzuzeigen, muss der {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Response-Header gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` zu erlauben, Zeitressourcen zu sehen, sollte die Cross-Origin-Ressource senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
