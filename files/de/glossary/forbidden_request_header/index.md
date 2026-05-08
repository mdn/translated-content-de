---
title: Verbotener Anfrage-Header
slug: Glossary/Forbidden_request_header
l10n:
  sourceCommit: cd98d634697c824a8295e979e27e20a7892d381b
---

Ein **verbotener Anfrage-Header** ist ein [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)-Name-Wert-Paar, das in einer Anfrage nicht programmatisch gesetzt oder geändert werden kann. Für Header, die in Antworten nicht verändert werden dürfen, siehe {{Glossary("forbidden_response_header_name", "verbotener Antwort-Header-Name")}}.

Die Änderung solcher Header ist verboten, weil der Benutzeragent die volle Kontrolle über sie behält. Zum Beispiel ist der {{HTTPHeader("Date")}}-Header ein verbotener Anfrage-Header, daher kann dieser Code das Nachrichtenfeld `Date` nicht setzen:

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

Mit `Sec-` beginnende Namen sind für die Erstellung neuer Header reserviert, die vor {{Glossary("API", "APIs")}}, die Entwicklern die Kontrolle über Header gewähren, sicher sind, wie zum Beispiel [`fetch()`](/de/docs/Web/API/Window/fetch). Verbotene Header sind einer der folgenden:

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
- `Proxy-` Header
- `Sec-` Header
- {{HTTPHeader("Referer")}}
- {{HTTPHeader("Set-Cookie")}}
- {{HTTPHeader("TE")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Upgrade")}}
- {{HTTPHeader("Via")}}
- `X-HTTP-Method`, aber nur, wenn es einen verbotenen Methodennamen enthält ({{HTTPMethod("CONNECT")}}, {{HTTPMethod("TRACE")}}, `TRACK`)
- `X-HTTP-Method-Override`, aber nur, wenn es einen verbotenen Methodennamen enthält
- `X-Method-Override`, aber nur, wenn es einen verbotenen Methodennamen enthält

> [!NOTE]
> Der {{HTTPHeader("User-Agent")}}-Header war früher verboten, ist es jedoch nicht mehr. Chrome lässt den Header jedoch immer noch unausgesprochen aus `Fetch`-Anfragen weg (siehe [Chromium-Bug 571722](https://crbug.com/571722)).

> [!NOTE]
> Während der {{HTTPHeader("Referer")}}-Header [im Standard](https://fetch.spec.whatwg.org/#forbidden-request-header) als verbotener Header aufgeführt ist, behält der Benutzeragent nicht die volle Kontrolle darüber, und der Header kann programmatisch geändert werden. Zum Beispiel kann bei Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch) der {{HTTPHeader("Referer")}}-Header programmgesteuert über die [`referrer`-Option](/de/docs/Web/API/RequestInit#referrer) geändert werden.

> [!NOTE]
> Chrome verbietet auch `Access-Control-Request-Private-Network`

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Forbidden_response_header_name", "Verbotener Antwort-Header-Name")}}
