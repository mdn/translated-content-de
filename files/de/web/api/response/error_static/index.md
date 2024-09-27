---
title: "Response: error() statische Methode"
short-title: error()
slug: Web/API/Response/error_static
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

{{APIRef("Fetch API")}}

Die **`error()`** statische Methode der [`Response`](/de/docs/Web/API/Response)-Schnittstelle gibt ein neues `Response`-Objekt zurück, das mit einem Netzwerkfehler verknüpft ist.

Dies ist hauptsächlich nützlich beim Schreiben von Service-Workern: Es ermöglicht einem Service-Worker, eine Antwort aus einem [`fetch`](/de/docs/Web/API/ServiceWorkerGlobalScope/fetch_event)-Ereignishandler zu senden, die dazu führt, dass der [`fetch()`](/de/docs/Web/API/Window/fetch)-Aufruf im Hauptanwendungscode das Versprechen ablehnt.

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

### Rückgabe eines Netzwerkfehlers von einem Service-Worker

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

Mit diesem Service-Worker werden alle Abrufanfragen von der App über den Service-Worker zum Netzwerk geleitet, mit Ausnahme von Anfragen zum Abrufen von "salamander.jpg", die abgelehnt werden. Dies bedeutet, dass der folgende Hauptthread-Code einen Fehler auslösen würde und der `catch`-Handler ausgeführt wird.

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
