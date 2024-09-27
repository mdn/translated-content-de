---
title: "Response: redirect() statische Methode"
short-title: redirect()
slug: Web/API/Response/redirect_static
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Fetch API")}}

Die statische Methode **`redirect()`** der [`Response`](/de/docs/Web/API/Response)-Schnittstelle gibt eine `Response` zurück, die zu der angegebenen URL umleitet.

> [!NOTE]
> Dies kann zusammen mit der [ServiceWorker API](/de/docs/Web/API/Service_Worker_API) verwendet werden.
> Ein kontrollierender Service Worker könnte die Anfrage einer Seite abfangen und nach Wunsch umleiten.
> Dies führt tatsächlich zu einer echten Umleitung, wenn ein Service Worker sie nach oben sendet.

## Syntax

```js-nolint
Response.redirect(url)
Response.redirect(url, status)
```

### Parameter

- `url`
  - : Die URL, von der die neue Antwort stammen soll.
- `status` {{optional_inline}}
  - : Eine optionale Zahl, die den Statuscode für die Antwort angibt: eine der {{HTTPStatus("301", "301")}}, {{HTTPStatus("302", "302")}}, {{HTTPStatus("303", "303")}}, {{HTTPStatus("307", "307")}} oder {{HTTPStatus("308", "308")}}. Wenn nicht angegeben, wird standardmäßig {{HTTPStatus("302", "302 Found")}} verwendet.

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
- [HTTP-Zugriffskontrolle (CORS)](/de/docs/Web/HTTP/CORS)
- [HTTP](/de/docs/Web/HTTP)
