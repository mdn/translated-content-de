---
title: Verbotener Header-Name
slug: Glossary/Forbidden_header_name
l10n:
  sourceCommit: 56cbe48e4426172461d9297523b68716922690e5
---

{{GlossarySidebar}}

Ein **verbotener Header-Name** ist der Name eines [HTTP-Headers](/de/docs/Web/HTTP/Headers), der nicht programmatisch geändert werden kann; speziell ein HTTP-**Anfrage**header-Name (im Gegensatz zu einem {{Glossary("Forbidden_response_header_name", "verbotenen Antwortheader-Namen")}}).

Das Ändern solcher Header ist verboten, da der Benutzeragent die vollständige Kontrolle über sie behält. Zum Beispiel ist der {{HTTPHeader("Date")}}-Header ein verbotener Header-Name, daher kann dieses Code-Beispiel das Nachrichtenfeld `Date` nicht setzen:

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

Mit `Sec-` beginnende Namen sind für die Erstellung neuer Header reserviert, die vor {{Glossary("API", "APIs")}} sicher sind, die Entwicklern Kontrolle über Header gewähren, wie zum Beispiel [`fetch()`](/de/docs/Web/API/Window/fetch). Verbotene Header-Namen beginnen mit `Proxy-` oder `Sec-`, oder sind einer der folgenden Namen:

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
- `Proxy-` Headers
- `Sec-` Headers
- {{HTTPHeader("Referer")}}
- {{HTTPHeader("TE")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Upgrade")}}
- {{HTTPHeader("Via")}}

> [!NOTE]
> Der {{HTTPHeader("User-Agent")}}-Header ist laut [Spezifikation](https://fetch.spec.whatwg.org/#terminology-headers) nicht mehr verboten — siehe Liste der verbotenen Header-Namen (dies wurde in Firefox 43 implementiert) — er kann nun in einem Fetch [Headers](/de/docs/Web/API/Headers)-Objekt oder mit der [setRequestHeader()](/de/docs/Web/API/XMLHttpRequest/setRequestHeader)-Methode von `XMLHttpRequest` festgelegt werden. Jedoch wird Chrome den Header in Fetch-Anfragen stillschweigend entfernen (siehe [Chromium-Bug 571722](https://crbug.com/571722)).

> [!NOTE]
> Während der {{HTTPHeader("Referer")}}-Header [in der Spezifikation](https://fetch.spec.whatwg.org/#forbidden-request-header) als verbotener Header aufgeführt ist, behält der Benutzeragent nicht die vollständige Kontrolle über ihn und der Header kann programmatisch verändert werden. Zum Beispiel kann bei Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch) der {{HTTPHeader("Referer")}}-Header programmatisch über die [`referrer`-Option](/de/docs/Web/API/RequestInit#referrer) geändert werden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Forbidden_response_header_name", "Verbotener Antwortheader-Name")}}
