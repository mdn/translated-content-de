---
title: "Request: headers-Eigenschaft"
short-title: headers
slug: Web/API/Request/headers
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`headers`**-Eigenschaft des [`Request`](/de/docs/Web/API/Request)-Interfaces enthält das mit der Anfrage verbundene [`Headers`](/de/docs/Web/API/Headers)-Objekt.

## Wert

Ein [`Headers`](/de/docs/Web/API/Headers)-Objekt.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im gleichen Verzeichnis wie das Script) und speichern dann die Anforderungs-Header in einer Variablen:

```js
const myRequest = new Request("flowers.jpg");
const myHeaders = myRequest.headers; // Headers {}
```

Um einen Header zu dem [`Headers`](/de/docs/Web/API/Headers)-Objekt hinzuzufügen, verwenden wir [`Headers.append`](/de/docs/Web/API/Headers/append); dann erstellen wir eine neue `Request` mit einem zweiten Init-Parameter und übergeben die Header als Init-Option:

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
