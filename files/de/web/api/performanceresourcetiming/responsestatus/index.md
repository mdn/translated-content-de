---
title: "PerformanceResourceTiming: responseStatus-Eigenschaft"
short-title: responseStatus
slug: Web/API/PerformanceResourceTiming/responseStatus
l10n:
  sourceCommit: b695ba7dbc0a4fc581e20daf358ac068133c664a
---

{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`responseStatus`** repräsentiert den HTTP-Antwortstatuscode, der beim Abrufen der Ressource zurückgegeben wird.

Diese Eigenschaft entspricht [`Response.status`](/de/docs/Web/API/Response/status) von der [Fetch API](/de/docs/Web/API/Fetch_API).

## Wert

Die `responseStatus`-Eigenschaft kann die folgenden Werte haben:

- Eine Zahl, die den beim Abrufen der Ressource zurückgegebenen [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status) angibt.
- `0`, wenn die [CORS](/de/docs/Web/HTTP/CORS)-Überprüfung fehlschlägt.
- `0` für Cross-Origin-{{HTMLElement("iframe")}}-Objekte.

## Beispiele

### Prüfen, ob ein Cache-Treffer vorliegt

Die `responseStatus`-Eigenschaft kann verwendet werden, um zwischengespeicherte Ressourcen mit einem {{HTTPStatus("304")}} `Not Modified` Antwortstatuscode zu überprüfen.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource`-Performance-Einträge benachrichtigt, sobald sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge von vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge anzeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.responseStatus === 304) {
    console.log(`${entry.name} was loaded from cache`);
  }
});
```

Alternativ, wenn `responseStatus` nicht verfügbar ist, können Sie überprüfen, ob die [`transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize)-Eigenschaft `0` zurückgegeben hat.

### Statuscodes für Cross-Origin-Antworten

Wenn der Wert der `responseStatus`-Eigenschaft `0` ist, könnte die Ressource eine Cross-Origin-Anfrage sein. Um das Anzeigen von Statuscodes für Cross-Origin-Antworten zu ermöglichen, muss der [CORS](/de/docs/Web/HTTP/CORS) {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Zum Beispiel, um `https://developer.mozilla.org` zu erlauben, Antwortstatuscodes zu sehen, sollte die Cross-Origin-Ressource senden:

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
