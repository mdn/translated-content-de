---
title: Verbotenes Anforderungsheader
slug: Glossary/Forbidden_request_header
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{GlossarySidebar}}

Ein **verbotenes Anforderungsheader** ist ein [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) Name-Wert-Paar, das in einer Anfrage nicht programmgesteuert festgelegt oder geändert werden kann. Für Header, die in Antworten nicht geändert werden dürfen, siehe {{Glossary("forbidden_response_header_name", "verbotene Antwortheadernamen")}}.

Das Ändern solcher Header ist verboten, da der Benutzeragent die vollständige Kontrolle über sie behält. Zum Beispiel ist der {{HTTPHeader("Date")}}-Header ein verbotener Anforderungsheader, sodass dieser Code das Nachrichtenfeld `Date` nicht setzen kann:

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

Namen, die mit `Sec-` beginnen, sind für die Erstellung neuer Header reserviert, die vor {{Glossary("API", "APIs")}} geschützt sind, welche Entwicklern die Kontrolle über Header gewähren, wie zum Beispiel [`fetch()`](/de/docs/Web/API/Window/fetch). Verbotene Header sind eine der folgenden:

- `Accept-Charset`
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
- `X-HTTP-Method`, aber nur, wenn es einen verbotenen Methodennamen enthält ({{HTTPMethod("CONNECT")}}, {{HTTPMethod("TRACE")}}, {{HTTPMethod("TRACK")}})
- `X-HTTP-Method-Override`, aber nur, wenn es einen verbotenen Methodennamen enthält
- `X-Method-Override`, aber nur, wenn es einen verbotenen Methodennamen enthält

> [!NOTE]
> Der {{HTTPHeader("User-Agent")}}-Header war früher verboten, ist es aber nicht mehr. Allerdings ignoriert Chrome den Header weiterhin stillschweigend bei Fetch-Anfragen (siehe [Chromium Bug 571722](https://crbug.com/571722)).

> [!NOTE]
> Obwohl der {{HTTPHeader("Referer")}}-Header [in der Spezifikation](https://fetch.spec.whatwg.org/#forbidden-request-header) als verbotener Header aufgeführt ist, behält der Benutzeragent nicht die volle Kontrolle darüber und der Header kann programmgesteuert geändert werden. Zum Beispiel kann beim Verwenden von [`fetch()`](/de/docs/Web/API/Window/fetch) der {{HTTPHeader("Referer")}}-Header programmgesteuert über die [`referrer`-Option](/de/docs/Web/API/RequestInit#referrer) geändert werden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Forbidden_response_header_name", "Verbotene Antwortheadernamen")}}
