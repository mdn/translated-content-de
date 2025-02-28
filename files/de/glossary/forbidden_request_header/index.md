---
title: Verbotenes Anforderungsheader
slug: Glossary/Forbidden_request_header
l10n:
  sourceCommit: 938f591e8476fd60d8554339e6bff7ed67bd8bbc
---

{{GlossarySidebar}}

Ein **verbotenes Anforderungsheader** ist ein Name-Wert-Paar eines [HTTP-Headers](/de/docs/Web/HTTP/Headers), das in einer Anfrage nicht programmgesteuert gesetzt oder geändert werden kann. Für Header, die in Antworten nicht geändert werden dürfen, siehe {{Glossary("forbidden_response_header_name", "verbotener Antwortheadername")}}.

Die Änderung solcher Header ist verboten, da der Benutzeragent die volle Kontrolle über sie behält.
Zum Beispiel ist der {{HTTPHeader("Date")}} Header ein verbotener Anforderungsheader, daher kann dieser Code das Nachrichtenfeld `Date` nicht setzen:

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

Mit `Sec-` beginnende Namen sind für die Erstellung neuer Header reserviert, die vor {{Glossary("API", "APIs")}} geschützt sind, die Entwicklern die Kontrolle über Header geben, wie zum Beispiel [`fetch()`](/de/docs/Web/API/Window/fetch).
Verbotene Header sind eine der folgenden:

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
- `X-HTTP-Method`, jedoch nur, wenn er einen verbotenen Methodennamen enthält ({{HTTPMethod("CONNECT")}}, {{HTTPMethod("TRACE")}}, {{HTTPMethod("TRACK")}})
- `X-HTTP-Method-Override`, jedoch nur, wenn er einen verbotenen Methodennamen enthält
- `X-Method-Override`, jedoch nur, wenn er einen verbotenen Methodennamen enthält

> [!NOTE]
> Der {{HTTPHeader("User-Agent")}} Header war früher verboten, ist es aber nicht mehr. Jedoch lässt Chrome den Header weiterhin stillschweigend in Fetch-Anfragen weg (siehe [Chromium Bug 571722](https://crbug.com/571722)).

> [!NOTE]
> Obwohl der {{HTTPHeader("Referer")}} Header [in der Spezifikation](https://fetch.spec.whatwg.org/#forbidden-request-header) als verbotener Header gelistet ist, behält der Benutzeragent nicht die volle Kontrolle über ihn, und der Header kann programmgesteuert geändert werden. Zum Beispiel kann der {{HTTPHeader("Referer")}} Header bei Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch) über die [`referrer` Option](/de/docs/Web/API/RequestInit#referrer) programmgesteuert geändert werden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Forbidden_response_header_name", "Verbotener Antwortheadername")}}
