---
title: Verbotener Anfrage-Header
slug: Glossary/Forbidden_request_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **verbotener Anfrage-Header** ist ein [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) Name-Wert-Paar, das in einer Anfrage nicht programmgesteuert gesetzt oder geändert werden kann. Für Header, deren Änderung in Antworten verboten ist, siehe {{Glossary("forbidden_response_header_name", "verbotener Antwort-Header-Name")}}.

Die Änderung solcher Header ist verboten, da der Benutzeragent die vollständige Kontrolle über sie behält.
Zum Beispiel ist der {{HTTPHeader("Date")}}-Header ein verbotener Anfrage-Header, daher kann dieser Code das Nachrichtenfeld `Date` nicht setzen:

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

Namen, die mit `Sec-` beginnen, sind reserviert für die Erstellung neuer Header, die von {{Glossary("API", "APIs")}} sicher sind, die den Entwicklern die Kontrolle über Header ermöglichen, wie etwa [`fetch()`](/de/docs/Web/API/Window/fetch).
Verbotene Header sind eine der folgenden:

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
> Der {{HTTPHeader("User-Agent")}}-Header war früher verboten, ist es aber nicht mehr. Chrome entfernt diesen Header jedoch trotzdem stillschweigend aus Fetch-Anfragen (siehe [Chromium-Bug 571722](https://crbug.com/571722)).

> [!NOTE]
> Obwohl der {{HTTPHeader("Referer")}}-Header [im Standard](https://fetch.spec.whatwg.org/#forbidden-request-header) als verboten aufgeführt ist, behält der Benutzeragent nicht die vollständige Kontrolle darüber, und der Header kann programmgesteuert geändert werden. Zum Beispiel kann beim Verwenden von [`fetch()`](/de/docs/Web/API/Window/fetch) der {{HTTPHeader("Referer")}}-Header programmgesteuert über die [`referrer`-Option](/de/docs/Web/API/RequestInit#referrer) geändert werden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Forbidden_response_header_name", "Verbotener Antwort-Header-Name")}}
