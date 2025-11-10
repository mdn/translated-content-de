---
title: "PerformanceResourceTiming: responseStatus-Eigenschaft"
short-title: responseStatus
slug: Web/API/PerformanceResourceTiming/responseStatus
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`responseStatus`** repräsentiert den HTTP-Antwortstatuscode, der beim Abrufen der Ressource zurückgegeben wird.

Diese Eigenschaft entspricht [`Response.status`](/de/docs/Web/API/Response/status) aus der [Fetch API](/de/docs/Web/API/Fetch_API).

## Wert

Die `responseStatus`-Eigenschaft kann die folgenden Werte haben:

- Eine Zahl, die den [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status) angibt, der beim Abrufen der Ressource zurückgegeben wird.
- `0`, wenn die [CORS](/de/docs/Web/HTTP/Guides/CORS)-Überprüfung fehlschlägt.
- `0` für cross-origin {{HTMLElement("iframe")}}-Objekte.

## Beispiele

### Überprüfung, ob ein Cache-Treffer vorliegt

Die `responseStatus`-Eigenschaft kann verwendet werden, um zwischengespeicherte Ressourcen mit einem {{HTTPStatus("304")}} `Not Modified`-Antwortstatuscode zu überprüfen.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performanceeinträge informiert, wie sie in der Performance-Timeline des Browsers erfasst werden. Verwenden Sie die Option `buffered`, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.responseStatus === 304) {
      console.log(`${entry.name} was loaded from cache`);
    }
  });
});

observer.observe({ type: "resource", buffered: true });
```

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performanceeinträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.responseStatus === 304) {
    console.log(`${entry.name} was loaded from cache`);
  }
});
```

Alternativ, wenn `responseStatus` nicht verfügbar ist, können Sie überprüfen, ob die [`transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize)-Eigenschaft `0` zurückgegeben hat.

### Cross-origin Antwortstatuscodes

Wenn der Wert der `responseStatus`-Eigenschaft `0` ist, könnte die Ressource eine cross-origin Anfrage sein. Um das Anzeigen von Cross-Origin-Antwortstatuscodes zu ermöglichen, muss der [CORS](/de/docs/Web/HTTP/Guides/CORS) {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Um `https://developer.mozilla.org` die Anzeige von Antwortstatuscodes zu ermöglichen, sollte die cross-origin Ressource zum Beispiel senden:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Reference/Status)
- [`Response.status`](/de/docs/Web/API/Response/status)
- [CORS](/de/docs/Web/HTTP/Guides/CORS)
