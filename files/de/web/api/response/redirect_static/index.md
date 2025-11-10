---
title: "Response: redirect() statische Methode"
short-title: redirect()
slug: Web/API/Response/redirect_static
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`redirect()`** statische Methode der [`Response`](/de/docs/Web/API/Response)-Schnittstelle gibt eine `Response` zurück, die zu einer Umleitung auf die angegebene URL führt.

> [!NOTE]
> Dies kann zusammen mit der [ServiceWorker API](/de/docs/Web/API/Service_Worker_API) verwendet werden.
> Ein steuernder Service Worker könnte die Anforderung einer Seite abfangen und nach Bedarf umleiten.
> Dies wird tatsächlich zu einer echten Umleitung führen, wenn ein Service Worker sie nach oben sendet.

## Syntax

```js-nolint
Response.redirect(url)
Response.redirect(url, status)
```

### Parameter

- `url`
  - : Die URL, von der die neue Antwort stammen soll.
- `status` {{optional_inline}}
  - : Eine optionale Zahl, die den Statuscode für die Antwort angibt: einer von {{HTTPStatus("301", "301")}}, {{HTTPStatus("302", "302")}}, {{HTTPStatus("303", "303")}}, {{HTTPStatus("307", "307")}}, oder {{HTTPStatus("308", "308")}}. Wird dieser weggelassen, wird standardmäßig {{HTTPStatus("302", "302 Found")}} verwendet.

### Rückgabewert

Ein [`Response`](/de/docs/Web/API/Response)-Objekt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Der angegebene Status ist kein Umleitungsstatus.
- {{jsxref("TypeError")}}
  - : Die angegebene URL ist ungültig.

## Beispiele

```js
Response.redirect("https://www.example.com", 302);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [ServiceWorker API](/de/docs/Web/API/Service_Worker_API)
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/Guides/CORS)
- [HTTP](/de/docs/Web/HTTP)
