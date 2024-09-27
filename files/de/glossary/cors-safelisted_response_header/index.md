---
title: CORS-safelisted response header
slug: Glossary/CORS-safelisted_response_header
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein **CORS-safelisted response header** (auch bekannt als "einfacher Antwort-Header") ist ein [HTTP-Header](/de/docs/Web/HTTP/Headers) in einer [CORS](/de/docs/Web/HTTP/CORS)-Antwort, der als _sicher_ angesehen wird, um ihn für Client-Skripte zugänglich zu machen. Nur safelisted Antwort-Header sind für Webseiten verfügbar.

Standardmäßig umfasst die Safelist die folgenden Antwort-Header:

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

Zusätzliche Header können mit {{HTTPHeader("Access-Control-Expose-Headers")}} zur Safelist hinzugefügt werden.

> **Note:** {{HTTPHeader("Content-Length")}} war nicht Teil des ursprünglichen Satzes von safelisted Antwort-Headern \[[ref](https://github.com/whatwg/fetch/pull/626)]

## Beispiele

### Die Safelist erweitern

Sie können die Liste der CORS-safelisted Antwort-Header erweitern, indem Sie den {{HTTPHeader("Access-Control-Expose-Headers")}}-Header verwenden:

```http
Access-Control-Expose-Headers: X-Custom-Header, Content-Encoding
```

## Siehe auch

- [HTTP](/de/docs/Web/HTTP)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- Verwandte Glossarbegriffe:
  - [CORS](/de/docs/Glossary/CORS)
  - [CORS-safelisted request header](/de/docs/Glossary/CORS-safelisted_request_header)
  - [Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)
  - [Request-Header](/de/docs/Glossary/Request_header)
