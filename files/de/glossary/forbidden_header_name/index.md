---
title: Verbotener Header-Name
slug: Glossary/Forbidden_header_name
l10n:
  sourceCommit: edefa50f18613599b92e2eb3e9556fbde220b360
---

{{GlossarySidebar}}

Ein **verbotener Header-Name** ist der Name eines [HTTP-Headers](/de/docs/Web/HTTP/Headers), der programmatisch nicht modifiziert werden kann; genauer gesagt, ein HTTP **Anforderungs**-Header-Name (im Gegensatz zu einem {{Glossary("Forbidden_response_header_name", "Verbotenen Antwort-Header-Name")}}).

Das Modifizieren solcher Header ist verboten, da der Nutzeragent die vollständige Kontrolle über sie behält. Zum Beispiel ist der {{HTTPHeader("Date")}} Header ein verbotener Header-Name, daher kann dieser Code das Nachrichtenfeld `Date` nicht setzen:

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

Namen, die mit `Sec-` beginnen, sind dafür reserviert, neue Header zu erstellen, die vor {{Glossary("API", "APIs")}} geschützt sind, welche Entwicklern die Kontrolle über Header gewähren, wie etwa [`fetch()`](/de/docs/Web/API/Window/fetch). Verbotene Header-Namen beginnen mit `Proxy-` oder `Sec-`, oder sind einer der folgenden Namen:

- {{HTTPHeader("Accept-Charset")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Cookie")}}
- {{HTTPHeader("Date")}}
- {{HTTPHeader("DNT")}}
- {{HTTPHeader("Expect")}}
- {{HTTPHeader("Host")}}
- {{HTTPHeader("Keep-Alive")}}
- {{HTTPHeader("Origin")}}
- {{HTTPHeader("Permissions-Policy")}}
- `Proxy-` Header
- `Sec-` Header
- {{HTTPHeader("Referer")}}
- {{HTTPHeader("TE")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Upgrade")}}
- {{HTTPHeader("Via")}}

> [!NOTE]
> Der {{HTTPHeader("User-Agent")}} Header ist nicht mehr verboten, [laut Spezifikation](https://fetch.spec.whatwg.org/#terminology-headers) — siehe Liste der verbotenen Header-Namen (dies wurde in Firefox 43 implementiert) — er kann nun in einem Fetch [Headers](/de/docs/Web/API/Headers) Objekt oder mit der [setRequestHeader()](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) Methode von `XMLHttpRequest` gesetzt werden. Allerdings wird Chrome den Header aus Fetch-Anfragen stillschweigend entfernen (siehe [Chromium Bug 571722](https://crbug.com/571722)).

> [!NOTE]
> Obwohl der {{HTTPHeader("Referer")}} Header laut [Spezifikation](https://fetch.spec.whatwg.org/#forbidden-request-header) als verbotener Header aufgeführt ist, behält der Nutzeragent nicht die vollständige Kontrolle über ihn, und der Header kann programmatisch modifiziert werden. Zum Beispiel kann der {{HTTPHeader("Referer")}} Header beim Verwenden von [`fetch()`](/de/docs/Web/API/Window/fetch) programmatisch über die [`referrer` Option](/de/docs/Web/API/RequestInit#referrer) modifiziert werden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Forbidden_response_header_name", "Verbotener Antwort-Header-Name")}}
