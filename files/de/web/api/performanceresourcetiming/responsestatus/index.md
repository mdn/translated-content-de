---
title: "PerformanceResourceTiming: responseStatus-Eigenschaft"
short-title: responseStatus
slug: Web/API/PerformanceResourceTiming/responseStatus
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`responseStatus`** repräsentiert den HTTP-Antwortstatuscode, der beim Abrufen der Ressource zurückgegeben wird.

Diese Eigenschaft entspricht [`Response.status`](/de/docs/Web/API/Response/status) aus der [Fetch API](/de/docs/Web/API/Fetch_API).

## Wert

Die `responseStatus`-Eigenschaft kann die folgenden Werte annehmen:

- Eine Zahl, die den [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status) angibt, der beim Abrufen der Ressource zurückgegeben wird.
- `0`, wenn die [CORS](/de/docs/Web/HTTP/CORS)-Prüfung fehlschlägt.
- `0` für plattformübergreifende {{HTMLElement("iframe")}}-Objekte.

## Beispiele

### Überprüfung, ob ein Cache getroffen wurde

Die `responseStatus`-Eigenschaft kann verwendet werden, um zwischengespeicherte Ressourcen mit einem {{HTTPStatus("304")}} `Not Modified`-Antwortstatuscode zu überprüfen.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge informiert, während sie in der Leistungstimeline des Browsers erfasst werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die in der Leistungstimeline des Browsers zum Zeitpunkt des Aufrufs dieser Methode vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.responseStatus === 304) {
    console.log(`${entry.name} was loaded from cache`);
  }
});
```

Alternativ, wenn `responseStatus` nicht verfügbar ist, können Sie prüfen, ob die [`transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize)-Eigenschaft `0` zurückgegeben hat.

### Plattformübergreifende Antwortstatuscodes

Wenn der Wert der `responseStatus`-Eigenschaft `0` ist, könnte die Ressource eine plattformübergreifende Anfrage sein. Um plattformübergreifende Antwortstatuscodes anzuzeigen, muss der [CORS](/de/docs/Web/HTTP/CORS) {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` zu erlauben, Antwortstatuscodes zu sehen, sollte die plattformübergreifende Ressource senden:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status)
- [`Response.status`](/de/docs/Web/API/Response/status)
- [CORS](/de/docs/Web/HTTP/CORS)
