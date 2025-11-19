---
title: Verbotenes Anforderungs-Header
slug: Glossary/Forbidden_request_header
l10n:
  sourceCommit: a8a430360e652306ae0b2d97388da9501671d2fb
---

Ein **verbotenes Anforderungs-Header** ist ein [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers), bestehend aus einem Namen-Wert-Paar, das nicht programmatisch in einer Anfrage gesetzt oder modifiziert werden kann. Für Header, deren Änderungen in Antworten verboten sind, siehe {{Glossary("forbidden_response_header_name", "verbotener Antwort-Header-Name")}}.

Die Modifikation solcher Header ist verboten, da der Benutzeragent die volle Kontrolle über diese behält. Zum Beispiel ist der {{HTTPHeader("Date")}}-Header ein verbotenes Anforderungs-Header, daher kann dieses Codebeispiel das Nachrichtenfeld `Date` nicht setzen:

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

Mit `Sec-` beginnende Namen sind für die Erstellung neuer Header reserviert, die sicher vor {{Glossary("API", "APIs")}} sind, die Entwicklern Kontrolle über Header gewähren, wie zum Beispiel [`fetch()`](/de/docs/Web/API/Window/fetch). Verbotene Header sind eine der folgenden:

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
- `X-HTTP-Method`, aber nur, wenn es einen verbotenen Methodennamen enthält ({{HTTPMethod("CONNECT")}}, {{HTTPMethod("TRACE")}}, {{HTTPMethod("TRACK")}})
- `X-HTTP-Method-Override`, aber nur, wenn es einen verbotenen Methodennamen enthält
- `X-Method-Override`, aber nur, wenn es einen verbotenen Methodennamen enthält

> [!NOTE]
> Der {{HTTPHeader("User-Agent")}}-Header war früher verboten, ist es aber nicht mehr. Chrome entfernt jedoch den Header immer noch stillschweigend aus `Fetch`-Anfragen (siehe [Chromium-Bug 571722](https://crbug.com/571722)).

> [!NOTE]
> Während der {{HTTPHeader("Referer")}}-Header [in der Spezifikation](https://fetch.spec.whatwg.org/#forbidden-request-header) als verbotener Header aufgeführt ist, behält der Benutzeragent nicht die volle Kontrolle darüber, und der Header kann programmatisch modifiziert werden. Zum Beispiel kann bei Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch) der {{HTTPHeader("Referer")}}-Header über die [`referrer`-Option](/de/docs/Web/API/RequestInit#referrer) programmatisch geändert werden.

> [!NOTE]
> Chrome verbietet auch `Access-Control-Request-Private-Network`.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Forbidden_response_header_name", "Verbotener Antwort-Header-Name")}}
