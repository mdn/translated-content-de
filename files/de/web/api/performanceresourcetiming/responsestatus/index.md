---
title: "PerformanceResourceTiming: responseStatus-Eigenschaft"
short-title: responseStatus
slug: Web/API/PerformanceResourceTiming/responseStatus
l10n:
  sourceCommit: b695ba7dbc0a4fc581e20daf358ac068133c664a
---

{{APIRef("Performance API")}}

Die **`responseStatus`**-Eigenschaft, die schreibgeschützt ist, repräsentiert den HTTP-Antwortstatuscode, der beim Abrufen der Ressource zurückgegeben wurde.

Diese Eigenschaft entspricht {{domxref("Response.status")}} aus der [Fetch API](/de/docs/Web/API/Fetch_API).

## Wert

Die `responseStatus`-Eigenschaft kann die folgenden Werte haben:

- Eine Zahl, die den [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status) angibt, der beim Abrufen der Ressource zurückgegeben wurde.
- `0`, wenn die [CORS](/de/docs/Web/HTTP/CORS)-Prüfung fehlschlägt.
- `0` für {{HTMLElement("iframe")}}-Objekte von anderen Ursprüngen.

## Beispiele

### Überprüfung, ob ein Cache-Treffer vorlag

Die `responseStatus`-Eigenschaft kann verwendet werden, um zwischengespeicherte Ressourcen mit einem {{HTTPStatus("304")}} `Not Modified`-Antwortstatuscode zu überprüfen.

Beispiel mit einem {{domxref("PerformanceObserver")}}, der über neue `resource`-Leistungseinträge benachrichtigt, sobald sie in der Leistungstimeline des Browsers aufgezeichnet werden. Verwenden Sie die `buffered`-Option, um auf Einträge zuzugreifen, die vor der Erstellung des Observers vorhanden waren.

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

Beispiel mit {{domxref("Performance.getEntriesByType()")}}, das nur `resource`-Leistungseinträge anzeigt, die sich zum Zeitpunkt des Methodenaufrufs in der Leistungstimeline des Browsers befinden:

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  if (entry.responseStatus === 304) {
    console.log(`${entry.name} was loaded from cache`);
  }
});
```

Alternativ, wenn `responseStatus` nicht verfügbar ist, können Sie überprüfen, ob die Eigenschaft {{domxref("PerformanceResourceTiming.transferSize", "transferSize")}} den Wert `0` zurückgegeben hat.

### Statuscodes von Antworten bei Kreuz-Origin-Anfragen

Wenn der Wert der `responseStatus`-Eigenschaft `0` ist, könnte es sich um eine Anfrage an eine andere Herkunft handeln. Um das Anzeigen von Antwortstatuscodes bei Kreuz-Origin-Anfragen zu erlauben, muss der [CORS](/de/docs/Web/HTTP/CORS) {{HTTPHeader("Access-Control-Allow-Origin")}} HTTP-Antwortheader gesetzt werden.

Um zum Beispiel `https://developer.mozilla.org` das Anzeigen von Antwortstatuscodes zu erlauben, sollte die Ressource von einer anderen Herkunft senden:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTTP-Antwortstatuscode](/de/docs/Web/HTTP/Status)
- {{domxref("Response.status")}}
- [CORS](/de/docs/Web/HTTP/CORS)
