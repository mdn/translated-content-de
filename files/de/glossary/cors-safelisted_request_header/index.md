---
title: CORS-safelisted request header
slug: Glossary/CORS-safelisted_request_header
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein [**CORS-safelisted request header**](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) (auch bekannt als "einfacher Header") ist einer der folgenden [HTTP-Header](/de/docs/Web/HTTP/Headers):

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Range")}}

Wenn nur diese Header (und Werte, die die unten aufgeführten zusätzlichen Anforderungen erfüllen) enthalten sind, muss im Kontext von [CORS](/de/docs/Glossary/CORS) keine [Preflight-Anfrage](/de/docs/Glossary/preflight_request) gesendet werden.

Sie können weitere Header mithilfe des {{HTTPHeader("Access-Control-Allow-Headers")}} Headers auf die Safelist setzen und auch die oben genannten Header dort aufführen, um die folgenden zusätzlichen Einschränkungen zu umgehen.

## Zusätzliche Einschränkungen

CORS-safelisted Header müssen auch folgende Anforderungen erfüllen, um ein CORS-safelisted Request Header zu sein:

- {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} können nur Werte enthalten, die aus `0-9`, `A-Z`, `a-z`, Leerzeichen oder `*,-.;=` bestehen.
- {{HTTPHeader("Accept")}} und {{HTTPHeader("Content-Type")}} dürfen kein _CORS-unsafe request header byte_ enthalten: `0x00-0x1F` (außer `0x09 (HT)`, welches erlaubt ist), `"():<>?@[\]{}`, und `0x7F (DEL)`.
- {{HTTPHeader("Content-Type")}} muss einen MIME-Typ des analysierten Wertes (Parameter ignorierend) entweder von `application/x-www-form-urlencoded`, `multipart/form-data`, oder `text/plain` haben.
- {{HTTPHeader("Range")}} muss einen Wert eines einzelnen Byte-Bereichs in der Form `bytes=[0-9]+-[0-9]*` haben.
  Siehe die {{HTTPHeader("Range")}} Header-Dokumentation für mehr Details.
- Für jeden Header: Die Länge des Wertes darf nicht größer als 128 sein.

## Siehe auch

- Verwandte Glossareinträge:
  - [CORS-safelisted response header](/de/docs/Glossary/CORS-safelisted_response_header)
  - [Verbotener Header-Name](/de/docs/Glossary/Forbidden_header_name)
  - [Request-Header](/de/docs/Glossary/Request_header)
