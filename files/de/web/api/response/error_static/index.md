---
title: "Response: error() statische Methode"
short-title: error()
slug: Web/API/Response/error_static
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`error()`** statische Methode der [`Response`](/de/docs/Web/API/Response)-Schnittstelle gibt ein neues `Response`-Objekt zurück, das mit einem Netzwerkfehler verbunden ist.

Dies ist vor allem beim Schreiben von Service Workern nützlich: Es ermöglicht einem Service Worker, eine Antwort von einem [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignis-Handler zu senden, die den [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf im Hauptapp-Code dazu veranlasst, das Versprechen abzulehnen.

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

### Zurückgeben eines Netzwerkfehlers von einem Service Worker

Angenommen, eine Web-App hat einen Service Worker, der den folgenden `fetch`-Ereignis-Handler enthält:

```js
// service-worker.js

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  if (url.pathname === "/salamander.jpg") {
    event.respondWith(Response.error());
  }
});
```

Mit diesem Service Worker werden alle Fetch-Anfragen der App über den Service Worker zum Netzwerk geleitet, außer Anfragen zum Abrufen von "salamander.jpg", die abgelehnt werden. Dies bedeutet, dass der folgende Code im Hauptthread einen Fehler auslösen würde und der `catch`-Handler ausgeführt wird.

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

- [ServiceWorker-API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
