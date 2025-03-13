---
title: "Request: headers-Eigenschaft"
short-title: headers
slug: Web/API/Request/headers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`headers`**-Eigenschaft der [`Request`](/de/docs/Web/API/Request)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das [`Headers`](/de/docs/Web/API/Headers)-Objekt enthält, das mit der Anfrage assoziiert ist.

## Wert

Ein [`Headers`](/de/docs/Web/API/Headers)-Objekt.

## Beispiele

Im folgenden Beispiel erstellen wir eine neue Anfrage mit dem [`Request()`](/de/docs/Web/API/Request/Request)-Konstruktor (für eine Bilddatei im selben Verzeichnis wie das Skript) und speichern die Anfrage-Header in einer Variablen:

```js
const myRequest = new Request("flowers.jpg");
const myHeaders = myRequest.headers; // Headers {}
```

Um einen Header zum [`Headers`](/de/docs/Web/API/Headers)-Objekt hinzuzufügen, verwenden wir [`Headers.append`](/de/docs/Web/API/Headers/append); danach erstellen wir eine neue `Request` zusammen mit einem zweiten Init-Parameter, indem wir die Header als Init-Option übergeben:

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

- [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
