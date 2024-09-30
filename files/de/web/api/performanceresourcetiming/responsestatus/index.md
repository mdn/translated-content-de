---
title: "PerformanceResourceTiming: responseStatus-Eigenschaft"
short-title: responseStatus
slug: Web/API/PerformanceResourceTiming/responseStatus
l10n:
  sourceCommit: b695ba7dbc0a4fc581e20daf358ac068133c664a
---

{{APIRef("Performance API")}}

Die schreibgeschützte **`responseStatus`**-Eigenschaft repräsentiert den HTTP-Antwortstatuscode, der beim Abrufen der Ressource zurückgegeben wird.

Diese Eigenschaft entspricht [`Response.status`](/de/docs/Web/API/Response/status) aus der [Fetch API](/de/docs/Web/API/Fetch_API).

## Wert

Die `responseStatus`-Eigenschaft kann die folgenden Werte haben:

- Eine Zahl, die den [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status) angibt, der beim Abrufen der Ressource zurückgegeben wurde.
- `0`, wenn die [CORS](/de/docs/Web/HTTP/CORS)-Prüfung fehlschlägt.
- `0` für cross-origin {{HTMLElement("iframe")}}-Objekte.

## Beispiele

### Überprüfen, ob ein Cache getroffen wurde

Die `responseStatus`-Eigenschaft kann verwendet werden, um nach zwischengespeicherten Ressourcen mit einem {{HTTPStatus("304")}} `Not Modified`-Antwortstatuscode zu prüfen.

Beispiel mit einem [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver), der über neue `resource` Performance-Einträge benachrichtigt, während sie in der Performance-Zeitleiste des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge vor der Erstellung des Observers zuzugreifen.

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

Beispiel mit [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType), das nur `resource`-Performance-Einträge zeigt, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste des Browsers vorhanden sind:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.responseStatus === 304) {
    console.log(`${entry.name} was loaded from cache`);
  }
});
```

Alternativ, wenn `responseStatus` nicht verfügbar ist, können Sie überprüfen, ob die [`transferSize`](/de/docs/Web/API/PerformanceResourceTiming/transferSize)-Eigenschaft `0` zurückgegeben hat.

### Cross-Origin-Antwortstatuscodes

Wenn der Wert der `responseStatus`-Eigenschaft `0` ist, könnte es sich um eine cross-origin-Anfrage handeln. Um die Anzeige von cross-origin-Antwortstatuscodes zu ermöglichen, muss der [CORS](/de/docs/Web/HTTP/CORS) {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Um beispielsweise `https://developer.mozilla.org` die Ansicht der Antwortstatuscodes zu erlauben, sollte die cross-origin-Ressource senden:

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
