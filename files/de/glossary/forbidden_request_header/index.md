---
title: Verbotenes Anfrage-Headerfeld
slug: Glossary/Forbidden_request_header
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

Ein **verbotenes Anfrage-Headerfeld** ist ein [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) Name-Wert-Paar, das in einer Anfrage nicht programmatisch gesetzt oder modifiziert werden kann. Für Header, die in Antworten nicht modifiziert werden dürfen, siehe {{Glossary("forbidden_response_header_name", "verbotener Antwortheader-Name")}}.

Die Modifikation solcher Header ist verboten, da der Benutzeragent die vollständige Kontrolle darüber behält. Zum Beispiel ist der {{HTTPHeader("Date")}}-Header ein verbotenes Anfrage-Headerfeld, daher kann dieser Code das `Date`-Feld der Nachricht nicht setzen:

```js example-bad
fetch("https://httpbin.org/get", {
  headers: {
    Date: new Date().toUTCString(),
  },
});
```

Namen, die mit `Sec-` beginnen, sind reserviert für das Erstellen neuer Header, die von {{Glossary("API", "APIs")}} sicher sind, die Entwicklern Kontrolle über Header gewähren, wie etwa [`fetch()`](/de/docs/Web/API/Window/fetch). Verbotene Header sind eines der folgenden:

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
- `X-HTTP-Method`, aber nur wenn er einen verbotenen Methodennamen enthält ({{HTTPMethod("CONNECT")}}, {{HTTPMethod("TRACE")}}, {{HTTPMethod("TRACK")}})
- `X-HTTP-Method-Override`, aber nur wenn er einen verbotenen Methodennamen enthält
- `X-Method-Override`, aber nur wenn er einen verbotenen Methodennamen enthält

> [!NOTE]
> Der {{HTTPHeader("User-Agent")}}-Header war früher verboten, ist es aber nicht mehr. Chrome lässt den Header jedoch noch immer stillschweigend aus Fetch-Anfragen weg (siehe [Chromium Fehler 571722](https://crbug.com/571722)).

> [!NOTE]
> Während der {{HTTPHeader("Referer")}}-Header [in der Spezifikation](https://fetch.spec.whatwg.org/#forbidden-request-header) als verbotener Header aufgelistet ist, hat der Benutzeragent nicht die vollständige Kontrolle darüber und der Header kann programmatisch modifiziert werden. Zum Beispiel kann bei Verwendung von [`fetch()`](/de/docs/Web/API/Window/fetch) der {{HTTPHeader("Referer")}}-Header programmatisch über die [`referrer`-Option](/de/docs/Web/API/RequestInit#referrer) modifiziert werden.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("Forbidden_response_header_name", "Verbotener Antwortheader-Name")}}
