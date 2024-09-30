---
title: "PerformanceResourceTiming: workerStart-Eigenschaft"
short-title: workerStart
slug: Web/API/PerformanceResourceTiming/workerStart
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`workerStart`** des [`PerformanceResourceTiming`](/de/docs/Web/API/PerformanceResourceTiming)-Interfaces gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) unmittelbar vor der Auslösung des [`FetchEvent`](/de/docs/Web/API/FetchEvent) zurück, wenn ein Service Worker-Thread bereits läuft, oder unmittelbar bevor der Service Worker-Thread gestartet wird, falls er noch nicht läuft. Wenn die Ressource nicht von einem Service Worker abgefangen wird, gibt die Eigenschaft immer 0 zurück.

## Wert

Die `workerStart`-Eigenschaft kann die folgenden Werte haben:

- Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp).
- `0`, wenn kein Service Worker verwendet wird.
- `0`, wenn die Ressource eine Cross-Origin-Anfrage ist und kein {{HTTPHeader("Timing-Allow-Origin")}} HTTP-Antwortheader verwendet wird.

## Beispiele

### Messung der Verarbeitungszeit von ServiceWorkern

Die Eigenschaften `workerStart` und [`fetchStart`](/de/docs/Web/API/PerformanceResourceTiming/fetchStart) können verwendet werden, um die Verarbeitungszeit eines [`ServiceWorker`](/de/docs/Web/API/ServiceWorker) zu messen.

```js
const workerProcessingTime = entry.fetchStart - entry.workerStart;
```

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Leistungseinträge benachrichtigt, wenn sie in der Leistungstimeline des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Beobachtererstellung zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Leistungseinträge zeigt, die in der Leistungstimeline des Browsers zum Zeitpunkt des Aufrufs dieser Methode vorhanden sind:

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

### Timing-Informationen bei Cross-Origin-Anfragen

Wenn der Wert der `workerStart`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um Timing-Informationen bei Cross-Origin-Anfragen sehen zu können, muss der HTTP-Antwortheader {{HTTPHeader("Timing-Allow-Origin")}} gesetzt werden.

Zum Beispiel sollte die Cross-Origin-Ressource, um `https://developer.mozilla.org` zu erlauben, Timing-Ressourcen zu sehen, senden:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Timing-Allow-Origin")}}
