---
title: CORS-safelisted-Antwortkopfzeile
slug: Glossary/CORS-safelisted_response_header
l10n:
  sourceCommit: 9c9be5239fe7fb2907784e8cace339d4910eb103
---

{{GlossarySidebar}}

Eine **CORS-safelisted-Antwortkopfzeile** (auch bekannt als "einfache Antwortkopfzeile") ist ein [HTTP-Header](/de/docs/Web/HTTP/Headers) in einer [CORS](/de/docs/Web/HTTP/CORS)-Antwort, der als _sicher_ angesehen wird, um ihn Client-Skripten zugänglich zu machen. Nur safelisted Antwortkopfzeilen sind für Webseiten verfügbar.

Standardmäßig umfasst die Safeliste die folgenden Antwortkopfzeilen:

- {{HTTPHeader("Cache-Control")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Expires")}}
- {{HTTPHeader("Last-Modified")}}
- {{HTTPHeader("Pragma")}}

Zusätzliche Header können zur Safeliste hinzugefügt werden, indem {{HTTPHeader("Access-Control-Expose-Headers")}} verwendet wird.

## Beispiele

### Erweiterung der Safeliste

Sie können die Liste der CORS-safelisted-Antwortkopfzeilen erweitern, indem Sie den {{HTTPHeader("Access-Control-Expose-Headers")}} Header verwenden:

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
  - {{Glossary("Forbidden_request_header", "Verbotener Request-Header")}}
  - {{Glossary("Request_header", "Request-Header")}}
