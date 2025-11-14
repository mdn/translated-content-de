---
title: Verbotener Anforderungsheader
slug: Glossary/Forbidden_request_header
l10n:
  sourceCommit: 1ee2cfe932b6c6f914d4b3d6ee7382a5f7a41ad7
---

Ein **verbotener Anforderungsheader** ist ein [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)-Name-Wert-Paar, das in einer Anfrage nicht programmgesteuert gesetzt oder modifiziert werden kann. Für Header, deren Modifikation in Antworten verboten ist, siehe {{Glossary("forbidden_response_header_name", "verbotener Antwortheader-Name")}}.

Die Modifikation solcher Header ist verboten, da der Benutzeragent die volle Kontrolle über sie behält. Zum Beispiel ist der {{HTTPHeader("Date")}}-Header ein verbotener Anforderungsheader. Daher kann dieser Code das `Date`-Feld der Nachricht nicht setzen:

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

Namen, die mit `Sec-` beginnen, sind reserviert für die Erstellung neuer Header, die vor {{Glossary("API", "APIs")}} sicher sind, die Entwicklern Kontrolle über Header gewähren, wie zum Beispiel [`fetch()`](/de/docs/Web/API/Window/fetch). Verbotene Header sind eine der folgenden:

- `Accept-Charset`
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Access-Control-Request-Headers")}}
- {{HTTPHeader("Access-Control-Request-Method")}}
- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Cookie")}}
- `Cookie2`
- {{HTTPHeader("Date")}}
- {{HTTPHeader("DNT")}}
- {{HTTPHeader("Expect")}}
- {{HTTPHeader("Host")}}
- {{HTTPHeader("Keep-Alive")}}
- {{HTTPHeader("Origin")}}
- `Proxy-`-Header
- `Sec-`-Header
- {{HTTPHeader("Referer")}}
- {{HTTPHeader("Set-Cookie")}}
- {{HTTPHeader("TE")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}
- {{HTTPHeader("Upgrade")}}
- {{HTTPHeader("Via")}}
- `X-HTTP-Method`, aber nur, wenn es einen verbotenen Methodennamen enthält ({{HTTPMethod("CONNECT")}}, {{HTTPMethod("TRACE")}}, {{HTTPMethod("TRACK")}})
- `X-HTTP-Method-Override`, aber nur, wenn es einen verbotenen Methodennamen enthält
- `X-Method-Override`, aber nur, wenn es einen verbotenen Methodennamen enthält

> [!NOTE]
> Der {{HTTPHeader("User-Agent")}}-Header war früher verboten, ist es aber nicht mehr. Allerdings entfernt Chrome den Header immer noch stillschweigend aus Fetch-Anfragen (siehe [Chromium-Bug 571722](https://crbug.com/571722)).

> [!NOTE]
> Obwohl der {{HTTPHeader("Referer")}}-Header [in der Spezifikation](https://fetch.spec.whatwg.org/#forbidden-request-header) als verbotener Header gelistet ist, behält der Benutzeragent nicht die volle Kontrolle darüber, und der Header kann programmgesteuert modifiziert werden. Zum Beispiel kann bei der Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch) der {{HTTPHeader("Referer")}}-Header über die [`referrer` option](/de/docs/Web/API/RequestInit#referrer) programmgesteuert modifiziert werden.

> [!NOTE]
> Chrome verbietet ebenfalls `Access-Control-Request-Private-Network`

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Forbidden_response_header_name", "Verbotener Antwortheader-Name")}}
