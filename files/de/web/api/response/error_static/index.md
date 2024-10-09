---
title: "Response: error() statische Methode"
short-title: error()
slug: Web/API/Response/error_static
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die statische Methode **`error()`** der [`Response`](/de/docs/Web/API/Response)-Schnittstelle gibt ein neues `Response`-Objekt zurück, das mit einem Netzwerkfehler verbunden ist.

Dies ist hauptsächlich nützlich beim Schreiben von Service-Workern: Es ermöglicht einem Service-Worker, eine Antwort von einem [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignishandler zu senden, die dazu führt, dass der [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf im Hauptanwendungscode das Versprechen ablehnt.

Eine Fehlerantwort hat ihren [`type`](/de/docs/Web/API/Response/type) auf `error` gesetzt.

## Syntax

```js-nolint
Response.error()
```

### Parameter

Keine.

### Rückgabewert

Ein [`Response`](/de/docs/Web/API/Response)-Objekt.

## Beispiele

### Zurückgeben eines Netzwerkfehlers von einem Service-Worker

Angenommen, eine Webanwendung hat einen Service-Worker, der den folgenden `fetch`-Ereignishandler enthält:

```js
// service-worker.js

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname === "/salamander.jpg") {
    event.respondWith(Response.error());
  }
});
```

Mit diesem Service-Worker werden alle Abrufe von der Anwendung durch den Service-Worker zum Netzwerk geleitet, außer Anfragen, um "salamander.jpg" abzurufen, die abgelehnt werden. Das bedeutet, dass der folgende Code im Hauptthread einen Fehler auslösen würde und der `catch`-Handler ausgeführt wird.

```js
// main.js

const image = document.querySelector("#image");

try {
  const response = await fetch("salamander.jpg");
  const blob = await response.blob();
  const objectURL = URL.createObjectURL(blob);
  image.src = objectURL;
} catch (e) {
  console.error(e);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
