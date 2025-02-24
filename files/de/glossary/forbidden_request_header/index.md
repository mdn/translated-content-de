---
title: Verbotener Anforderungsheader
slug: Glossary/Forbidden_request_header
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{GlossarySidebar}}

Ein **verbotener Anforderungsheader** ist ein Name-Wert-Paar eines [HTTP-Headers](/de/docs/Web/HTTP/Headers), das in einer Anfrage nicht programmatisch gesetzt oder geändert werden kann. Für Header, die in Antworten nicht geändert werden dürfen, siehe {{Glossary("forbidden_response_header_name", "verbotener Antwortheadername")}}.

Das Modifizieren solcher Header ist verboten, weil der User-Agent die volle Kontrolle über sie behält.
Zum Beispiel ist der {{HTTPHeader("Date")}} Header ein verbotener Anforderungsheader, daher kann dieser Code das Nachrichtenfeld `Date` nicht setzen:

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

Namen, die mit `Sec-` beginnen, sind für die Erstellung neuer Header reserviert, die sicher vor {{Glossary("API", "APIs")}} sind, die Entwicklern die Kontrolle über Header geben, wie z. B. [`fetch()`](/de/docs/Web/API/Window/fetch).
Verbotene Header sind einer der folgenden:

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
- `X-HTTP-Method`, aber nur wenn es einen verbotenen Methodennamen enthält ({{HTTPMethod("CONNECT")}}, {{HTTPMethod("TRACE")}}, {{HTTPMethod("TRACK")}})
- `X-HTTP-Method-Override`, aber nur wenn es einen verbotenen Methodennamen enthält
- `X-Method-Override`, aber nur wenn es einen verbotenen Methodennamen enthält

> [!NOTE]
> Der {{HTTPHeader("User-Agent")}} Header war früher verboten, ist es aber nicht mehr. Chrome entfernt den Header jedoch immer noch stillschweigend aus Fetch-Anfragen (siehe [Chromium Fehler 571722](https://crbug.com/571722)).

> [!NOTE]
> Während der {{HTTPHeader("Referer")}} Header [in der Spezifikation](https://fetch.spec.whatwg.org/#forbidden-request-header) als verbotener Header aufgeführt ist, behält der User-Agent nicht die volle Kontrolle darüber und der Header kann programmatisch geändert werden. Beispielsweise kann bei der Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch) der {{HTTPHeader("Referer")}} Header über die [`referrer`-Option](/de/docs/Web/API/RequestInit#referrer) programmatisch geändert werden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Forbidden_response_header_name", "Verbotener Antwortheadername")}}
