---
title: "Request: headers Eigenschaft"
short-title: headers
slug: Web/API/Request/headers
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

Die **`headers`** schreibgeschützte Eigenschaft der [`Request`](/de/docs/Web/API/Request) Schnittstelle enthält das [`Headers`](/de/docs/Web/API/Headers) Objekt, das mit der Anfrage assoziiert ist.

## Wert

Ein [`Headers`](/de/docs/Web/API/Headers) Objekt.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request) Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Skript) und speichern dann die Anfrage-Header in einer Variablen:

```js
const myRequest = new Request("flowers.jpg");
const myHeaders = myRequest.headers; // Headers {}
```

Um einen Header zum [`Headers`](/de/docs/Web/API/Headers) Objekt hinzuzufügen, verwenden wir [`Headers.append`](/de/docs/Web/API/Headers/append); anschließend erstellen wir eine neue `Request` zusammen mit einem zweiten Init-Parameter und übergeben die Header als Init-Option:

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

const myContentType = myRequest.headers.get("Content-Type"); // returns 'image/jpeg'
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
