---
title: "Anforderung: headers Eigenschaft"
short-title: headers
slug: Web/API/Request/headers
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`headers`** schreibgeschützte Eigenschaft der
{{domxref("Request")}}-Schnittstelle enthält das {{domxref("Headers")}}-Objekt, das mit der Anforderung verknüpft ist.

## Wert

Ein {{domxref("Headers")}}-Objekt.

## Beispiele

Im folgenden Codeausschnitt erstellen wir eine neue Anforderung mit dem
{{domxref("Request.Request", "Request()")}}-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie
das Skript), und speichern dann die Anforderungsheader in einer Variablen:

```js
const myRequest = new Request("flowers.jpg");
const myHeaders = myRequest.headers; // Headers {}
```

Um einen Header zum {{domxref("Headers")}}-Objekt hinzuzufügen, verwenden wir
{{domxref("Headers.append")}}; dann erstellen wir eine neue `Request` zusammen mit einem
zweiten Init-Parameter und übergeben die Header als eine Init-Option:

```js
const myHeaders = new Headers();
myHeaders.append("Content-Type", "image/jpeg");

const myInit = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("flowers.jpg", myInit);

const myContentType = myRequest.headers.get("Content-Type"); // gibt 'image/jpeg' zurück
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
