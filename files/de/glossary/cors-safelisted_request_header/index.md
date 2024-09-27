---
title: CORS-safelisted request header
slug: Glossary/CORS-safelisted_request_header
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein [**CORS-safelisted request header**](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) (auch als "einfacher Header" bekannt) ist einer der folgenden [HTTP-Header](/de/docs/Web/HTTP/Headers):

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Range")}}

Wenn nur diese Header vorhanden sind (und Werte enthalten, die die unten aufgeführten zusätzlichen Anforderungen erfüllen), muss im Kontext von [CORS](/de/docs/Glossary/CORS) keine [Vorab-Anfrage](/de/docs/Glossary/preflight_request) gesendet werden.

Sie können weitere Header mithilfe des {{HTTPHeader("Access-Control-Allow-Headers")}} Headers auf die Safelist setzen und auch die oben genannten Header dort aufführen, um die folgenden zusätzlichen Einschränkungen zu umgehen.

## Zusätzliche Einschränkungen

CORS-safelisted Header müssen auch die folgenden Anforderungen erfüllen, um ein CORS-safelisted request header zu sein:

- {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} dürfen nur Werte enthalten, die aus `0-9`, `A-Z`, `a-z`, Leerzeichen oder `*,-.;=` bestehen.
- {{HTTPHeader("Accept")}} und {{HTTPHeader("Content-Type")}} dürfen keine _CORS-unsicheren Request-Header-Bytes_ enthalten: `0x00-0x1F` (außer `0x09 (HT)`, welches erlaubt ist), `"():<>?@[\]{}`, und `0x7F (DEL)`.
- {{HTTPHeader("Content-Type")}} muss einen MIME-Typ des analysierten Wertes (ohne Berücksichtigung von Parametern) von entweder `application/x-www-form-urlencoded`, `multipart/form-data` oder `text/plain` haben.
- {{HTTPHeader("Range")}} muss einen Wert eines einzelnen Byte-Bereichs in der Form `bytes=[0-9]+-[0-9]*` haben.
  Siehe die Dokumentation zum {{HTTPHeader("Range")}} Header für mehr Details.
- Für jeden Header: Die Länge des Wertes darf nicht größer als 128 sein.

## Siehe auch

- Verwandte Glossarbegriffe:
  - [CORS-safelisted response header](/de/docs/Glossary/CORS-safelisted_response_header)
  - [Forbidden header name](/de/docs/Glossary/Forbidden_header_name)
  - [Request header](/de/docs/Glossary/Request_header)
