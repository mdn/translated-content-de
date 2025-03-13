---
title: CORS-safelisted response header
slug: Glossary/CORS-safelisted_response_header
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

Ein **CORS-safelisted response header** (auch bekannt als "einfacher Antwort-Header") ist ein [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers) in einer [CORS](/de/docs/Web/HTTP/Guides/CORS)-Antwort, der als _sicher_ angesehen wird, um ihn an Client-Skripte weiterzugeben. Nur safelisted Antwort-Header sind für Webseiten zugänglich.

Standardmäßig umfasst die Safelist die folgenden Antwort-Header:

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

Zusätzliche Header können zur Safelist hinzugefügt werden, indem {{HTTPHeader("Access-Control-Expose-Headers")}} verwendet wird.

## Beispiele

### Erweiterung der Safelist

Sie können die Liste der CORS-safelisted response header erweitern, indem Sie den {{HTTPHeader("Access-Control-Expose-Headers")}} Header verwenden:

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
  - {{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}
  - {{Glossary("Request_header", "Request-Header")}}
