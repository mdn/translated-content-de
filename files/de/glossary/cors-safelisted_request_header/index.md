---
title: CORS-safelisted request header
slug: Glossary/CORS-safelisted_request_header
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

Ein [**CORS-safelisted request header**](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) (auch als "einfacher Header" bekannt) ist einer der folgenden [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers):

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Range")}}

Enthält eine Anfrage nur diese Header (und Werte, die die unten angeführten zusätzlichen Anforderungen erfüllen), muss im Kontext von {{Glossary("CORS", "CORS")}} keine {{Glossary("preflight_request", "Preflight-Anfrage")}} gesendet werden.

Sie können mehr Header auf die Safelist setzen, indem Sie den Header {{HTTPHeader("Access-Control-Allow-Headers")}} verwenden und auch die oben genannten Header dort auflisten, um die folgenden zusätzlichen Einschränkungen zu umgehen.

## Zusätzliche Einschränkungen

CORS-safelisted Header müssen auch die folgenden Anforderungen erfüllen, um ein CORS-safelisted Request Header zu sein:

- {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} dürfen nur Werte aus `0-9`, `A-Z`, `a-z`, Leerzeichen oder `*,-.;=` enthalten.
- {{HTTPHeader("Accept")}} und {{HTTPHeader("Content-Type")}} dürfen keine _CORS-unsicheren Request-Header-Bytes_ enthalten: `0x00-0x1F` (ausgenommen `0x09 (HT)`, das erlaubt ist), `"():<>?@[\]{}`, und `0x7F (DEL)`.
- {{HTTPHeader("Content-Type")}} muss einen MIME-Typ aus seinem analysierten Wert (ohne Parameter zu berücksichtigen) entweder `application/x-www-form-urlencoded`, `multipart/form-data` oder `text/plain` haben.
- {{HTTPHeader("Range")}} muss einen Wert eines einzelnen Bytebereichs in der Form `bytes=[0-9]+-[0-9]*` haben.
  Siehe die Dokumentation zum {{HTTPHeader("Range")}}-Header für weitere Details.
- Für jeden Header: die Länge des Wertes darf nicht größer als 128 sein.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("CORS-safelisted_response_header", "CORS-safelisted response header")}}
  - {{Glossary("Forbidden_request_header", "Forbidden request header")}}
  - {{Glossary("Request_header", "Request header")}}
