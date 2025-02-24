---
title: CORS-safelisted-Request-Header
slug: Glossary/CORS-safelisted_request_header
l10n:
  sourceCommit: 442db82028668b17b888ee439468ae2ac9d589a5
---

{{GlossarySidebar}}

Ein [**CORS-safelisted-Request-Header**](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) (auch bekannt als "einfacher Header") ist einer der folgenden [HTTP-Header](/de/docs/Web/HTTP/Headers):

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Range")}}

Wenn eine Anfrage nur diese Header enthält (und Werte, die die unten aufgeführten zusätzlichen Anforderungen erfüllen), muss sie im Kontext von {{Glossary("CORS", "CORS")}} keine {{Glossary("preflight_request", "Vorab-Anfrage")}} senden.

Sie können weitere Header mit dem {{HTTPHeader("Access-Control-Allow-Headers")}}-Header auf die Safelist setzen und auch die oben genannten Header dort aufführen, um die folgenden zusätzlichen Einschränkungen zu umgehen.

## Zusätzliche Einschränkungen

CORS-safelisted-Header müssen auch die folgenden Anforderungen erfüllen, um ein CORS-safelisted-Request-Header zu sein:

- {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} können nur Werte haben, die aus `0-9`, `A-Z`, `a-z`, Leerzeichen oder `*,-.;=` bestehen.
- {{HTTPHeader("Accept")}} und {{HTTPHeader("Content-Type")}} dürfen kein _CORS-unsafe request header byte_ enthalten: `0x00-0x1F` (außer `0x09 (HT)`, das erlaubt ist), `"():<>?@[\]{}`, und `0x7F (DEL)`.
- {{HTTPHeader("Content-Type")}} muss einen MIME-Typ seines geparsten Werts (Parameter ignorierend) von entweder `application/x-www-form-urlencoded`, `multipart/form-data` oder `text/plain` haben.
- {{HTTPHeader("Range")}} muss einen Wert eines einzelnen Bytebereichs in der Form von `bytes=[0-9]+-[0-9]*` haben. Siehe die Dokumentation des {{HTTPHeader("Range")}}-Headers für mehr Details.
- Für jeden Header: Die Länge des Wertes darf nicht größer als 128 sein.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("CORS-safelisted_response_header", "CORS-safelisted-Response-Header")}}
  - {{Glossary("Forbidden_request_header", "Verbotener Anforderungs-Header")}}
  - {{Glossary("Request_header", "Anforderungs-Header")}}
