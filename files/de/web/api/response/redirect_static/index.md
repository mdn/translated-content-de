---
title: "Response: redirect() statische Methode"
short-title: redirect()
slug: Web/API/Response/redirect_static
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

Die **`redirect()`** statische Methode der [`Response`](/de/docs/Web/API/Response)-Schnittstelle gibt eine `Response` zurück, die zu der angegebenen URL weiterleitet.

> [!NOTE]
> Dies kann zusammen mit der [ServiceWorker API](/de/docs/Web/API/Service_Worker_API) verwendet werden.
> Ein kontrollierender Service Worker könnte die Anfrage einer Seite abfangen und sie nach Wunsch umleiten.
> Dies führt tatsächlich zu einer echten Weiterleitung, wenn ein Service Worker sie nach oben sendet.

## Syntax

```js-nolint
Response.redirect(url)
Response.redirect(url, status)
```

### Parameter

- `url`
  - : Die URL, von der die neue Antwort stammen soll.
- `status` {{optional_inline}}
  - : Eine optionale Zahl, die den Statuscode für die Antwort angibt: einer von {{HTTPStatus("301", "301")}}, {{HTTPStatus("302", "302")}}, {{HTTPStatus("303", "303")}}, {{HTTPStatus("307", "307")}} oder {{HTTPStatus("308", "308")}}. Wird er weggelassen, wird standardmäßig {{HTTPStatus("302", "302 Found")}} verwendet.

### Rückgabewert

Ein [`Response`](/de/docs/Web/API/Response)-Objekt.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Der angegebene Status ist kein Weiterleitungsstatus.
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
