---
title: "Anforderung: referrerPolicy-Eigenschaft"
short-title: referrerPolicy
slug: Web/API/Request/referrerPolicy
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die schreibgeschützte Eigenschaft **`referrerPolicy`** der
{{domxref("Request")}}-Schnittstelle gibt die Referrer-Richtlinie zurück, die festlegt, welche
Referrer-Informationen im {{HTTPHeader("Referer")}}-Header mit der Anforderung gesendet werden sollen.

## Wert

Ein String, der die `referrerPolicy` der Anforderung darstellt. Für
mehr Informationen und mögliche Werte siehe die Seite zum {{HTTPHeader("Referrer-Policy")}} HTTP-Header.

## Beispiele

Im folgenden Codeausschnitt erstellen wir eine neue Anforderung mit dem
{{domxref("Request.Request", "Request()")}}-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie
das Skript) und speichern dann die Referrer-Richtlinie der Anforderung in einer Variable:

```js
const myRequest = new Request("flowers.jpg");
const myReferrer = myRequest.referrerPolicy; // gibt standardmäßig "" zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
