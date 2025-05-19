---
title: "Response: type-Eigenschaft"
short-title: type
slug: Web/API/Response/type
l10n:
  sourceCommit: b052f688e582abbbc82ce1f025bb4072dddc8be8
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`type`**-Eigenschaft der [`Response`](/de/docs/Web/API/Response)-Schnittstelle enthält den Typ der Antwort. Der Typ bestimmt, ob Skripte Zugriff auf den Antwortkörper und die Header haben.

## Wert

Ein String, der einen der folgenden Werte haben kann:

- `basic`

  - : Dies gilt in einem der folgenden Fälle:

    - Die Anfrage ist gleicher Herkunft (same-origin).
    - Das Schema der angeforderten URL ist [`data:`](/de/docs/Web/URI/Reference/Schemes/data).
    - Der [`mode`](/de/docs/Web/API/Request/mode) der Anfrage ist `navigate` oder `websocket`.

    Bei diesem Typ sind alle Antwort-Header freigegeben, außer {{httpheader("Set-Cookie")}}.

- `cors`
  - : Die Anfrage war von einer anderen Herkunft (cross-origin) und wurde erfolgreich unter Verwendung von [CORS](/de/docs/Web/HTTP/Guides/CORS) verarbeitet. Bei diesem Typ sind nur {{Glossary("CORS-safelisted_response_header", "CORS-safe-listente Antwortheader")}} freigegeben.
- `error`

  - : Ein Netzwerkfehler ist aufgetreten. Die [`status`](/de/docs/Web/API/Response/status)-Eigenschaft ist auf `0` gesetzt, [`body`](/de/docs/Web/API/Response/body) ist `null`, Header sind leer und unveränderlich.

    Dies ist der Typ der Antwort, die von [`Response.error()`](/de/docs/Web/API/Response/error_static) zurückgegeben wird. Eine Antwort dieses Typs wird nicht von einem Aufruf von [`fetch()`](/de/docs/Web/API/Window/fetch) zurückgegeben, da bei einem Netzwerkfehler das Versprechen abgelehnt wird.

- `opaque`
  - : Eine Antwort auf eine Cross-Origin-Anfrage, deren [`mode`](/de/docs/Web/API/Request/mode) auf `no-cors` gesetzt war. Die [`status`](/de/docs/Web/API/Response/status)-Eigenschaft ist auf `0` gesetzt, [`body`](/de/docs/Web/API/Response/body) ist `null`, Header sind leer und unveränderlich.
- `opaqueredirect`
  - : Eine Antwort auf eine Anfrage, deren [`redirect`](/de/docs/Web/API/Request/redirect)-Option auf `manual` gesetzt war und die vom Server umgeleitet wurde. Die [`status`](/de/docs/Web/API/Response/status)-Eigenschaft ist auf `0` gesetzt, [`body`](/de/docs/Web/API/Response/body) ist `null`, Header sind leer und unveränderlich.

## Beispiele

### Eine grundlegende Antwort

Die folgende Anfrage gleicher Herkunft gibt eine `basic`-Antwort zurück:

```js
const response = await fetch("flowers.jpg");

console.log(response.type); // "basic"
```

### Eine CORS-Antwort

Angenommen, `https://example.org` ist nicht die Herkunft des Anfragenden und der Server antwortet mit den entsprechenden CORS-Headern, dann wird diese Anfrage eine `cors`-Antwort zurückgeben:

```js
const response = await fetch("https://example.org/flowers.jpg");

console.log(response.type); // "cors"
```

### Eine nicht tranparente Antwort

Die folgende Anfrage wird mit der Option [`no-cors`](/de/docs/Web/API/Request/mode#no-cors) gestellt und gibt daher eine `opaque`-Antwort zurück:

```js
const response = await fetch("https://example.org/flowers.jpg", {
  mode: "no-cors",
});

console.log(response.type); // "opaque"
console.log(response.body); // null
console.log(response.status); // 0
```

### Eine Fehlerantwort

Der folgende Code verwendet [`Response.error()`](/de/docs/Web/API/Response/error_static), um eine `error`-Antwort zu erstellen:

```js
const response = Response.error();

console.log(response.type); // "error"
console.log(response.body); // null
console.log(response.status); // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
