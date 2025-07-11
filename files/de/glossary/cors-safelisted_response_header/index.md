---
title: CORS-safelisted response header
slug: Glossary/CORS-safelisted_response_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein **CORS-safelisted response header** (auch bekannt als "einfacher Antwortheader") ist ein [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) in einer [CORS](/de/docs/Web/HTTP/Guides/CORS) Antwort, der als _sicher_ gilt, um für Client-Skripte zugänglich zu sein. Nur safelisted Antwortheader werden für Webseiten verfügbar gemacht.

Standardmäßig enthält die Safeliste die folgenden Antwortheader:

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

Zusätzliche Header können mit {{HTTPHeader("Access-Control-Expose-Headers")}} zur Safeliste hinzugefügt werden.

## Beispiele

### Erweiterung der Safeliste

Sie können die Liste der CORS-safelisted Antwortheader durch den Einsatz des Headers {{HTTPHeader("Access-Control-Expose-Headers")}} erweitern:

```http
Access-Control-Expose-Headers: X-Custom-Header, Content-Encoding
```

## Siehe auch

- [HTTP](/de/docs/Web/HTTP)
- [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- {{HTTPHeader("Access-Control-Expose-Headers")}}
- Verwandte Glossarbegriffe:
  - {{Glossary("CORS", "CORS")}}
  - {{Glossary("CORS-safelisted_request_header", "CORS-safelisted request header")}}
  - {{Glossary("Forbidden_request_header", "Forbidden request header")}}
  - {{Glossary("Request_header", "Request header")}}
