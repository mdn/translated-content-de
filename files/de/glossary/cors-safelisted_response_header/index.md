---
title: CORS-safelisted Antwort-Header
slug: Glossary/CORS-safelisted_response_header
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein **CORS-safelisted Antwort-Header** (auch bekannt als "einfacher Antwort-Header") ist ein [HTTP-Header](/de/docs/Web/HTTP/Headers) in einer [CORS](/de/docs/Web/HTTP/CORS)-Antwort, der als _sicher_ gilt, um ihn für Client-Skripte verfügbar zu machen. Nur safelisted Antwort-Header werden für Webseiten zugänglich gemacht.

Standardmäßig umfasst die Safelist die folgenden Antwort-Header:

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

Zusätzliche Header können mithilfe von {{HTTPHeader("Access-Control-Expose-Headers")}} zur Safelist hinzugefügt werden.

> **Note:** {{HTTPHeader("Content-Length")}} war nicht Teil der ursprünglichen Liste von safelisted Antwort-Headern \[[ref](https://github.com/whatwg/fetch/pull/626)]

## Beispiele

### Die Safelist erweitern

Sie können die Liste der CORS-safelisted Antwort-Header erweitern, indem Sie den Header {{HTTPHeader("Access-Control-Expose-Headers")}} verwenden:

```http
Access-Control-Expose-Headers: X-Custom-Header, Content-Encoding
```

## Siehe auch

- [HTTP](/de/docs/Web/HTTP)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- Verwandte Glossarbegriffe:
  - {{Glossary("CORS")}}
  - {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request-Header")}}
  - {{Glossary("Forbidden header name")}}
  - {{Glossary("Request header")}}
