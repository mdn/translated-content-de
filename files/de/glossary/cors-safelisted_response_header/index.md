---
title: CORS-safelisted-Antwortheader
slug: Glossary/CORS-safelisted_response_header
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{GlossarySidebar}}

Ein **CORS-safelisted-Antwortheader** (auch bekannt als "einfacher Antwortheader") ist ein [HTTP-Header](/de/docs/Web/HTTP/Headers) in einer [CORS](/de/docs/Web/HTTP/CORS)-Antwort, der als _sicher_ angesehen wird, um ihn Client-Skripten zugänglich zu machen. Nur safelisted-Antwortheader sind für Webseiten verfügbar.

Standardmäßig umfasst die Safeliste die folgenden Antwortheader:

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

Zusätzliche Header können durch die Nutzung von {{HTTPHeader("Access-Control-Expose-Headers")}} zur Safeliste hinzugefügt werden.

> **Hinweis:** {{HTTPHeader("Content-Length")}} war nicht Teil der ursprünglichen Gruppe von safelisted-Antwortheadern \[[ref](https://github.com/whatwg/fetch/pull/626)]

## Beispiele

### Die Safeliste erweitern

Sie können die Liste der CORS-safelisted-Antwortheader erweitern, indem Sie den {{HTTPHeader("Access-Control-Expose-Headers")}}-Header verwenden:

```http
Access-Control-Expose-Headers: X-Custom-Header, Content-Encoding
```

## Siehe auch

- [HTTP](/de/docs/Web/HTTP)
- [HTTP-Header](/de/docs/Web/HTTP/Headers)
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- Verwandte Glossarbegriffe:
  - {{Glossary("CORS", "CORS")}}
  - {{Glossary("CORS-safelisted_request_header", "CORS-safelisted Request Header")}}
  - {{Glossary("Forbidden_request_header", "Verbotener Request Header")}}
  - {{Glossary("Request_header", "Request Header")}}
