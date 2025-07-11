---
title: CORS-safelisted-Anforderungsheader
slug: Glossary/CORS-safelisted_request_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Ein [**CORS-safelisted-Anforderungsheader**](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) (auch bekannt als "einfacher Header") ist einer der folgenden [HTTP-Header](/de/docs/Web/HTTP/Reference/Headers):

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Range")}}

Wenn nur diese Header (und Werte, die die unten aufgeführten zusätzlichen Anforderungen erfüllen) enthalten sind, muss im Kontext von {{Glossary("CORS", "CORS")}} keine {{Glossary("preflight_request", "Preflight-Anfrage")}} gesendet werden.

Sie können weitere Header mithilfe des Headers {{HTTPHeader("Access-Control-Allow-Headers")}} auf die Safelist setzen und auch die oben genannten Header dort auflisten, um die folgenden zusätzlichen Einschränkungen zu umgehen.

## Zusätzliche Einschränkungen

CORS-safelisted-Header müssen auch die folgenden Anforderungen erfüllen, um ein CORS-safelisted-Anforderungsheader zu sein:

- {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} dürfen nur Werte enthalten, die aus `0-9`, `A-Z`, `a-z`, Leerzeichen oder `*,-.;=` bestehen.
- {{HTTPHeader("Accept")}} und {{HTTPHeader("Content-Type")}} dürfen kein _CORS-unsicheres Anforderungsheader-Byte_ enthalten: `0x00-0x1F` (außer `0x09 (HT)`, das erlaubt ist), `"():<>?@[\]{}`, und `0x7F (DEL)`.
- {{HTTPHeader("Content-Type")}} muss als MIME-Typ des geparsten Wertes (ohne Berücksichtigung von Parametern) entweder `application/x-www-form-urlencoded`, `multipart/form-data` oder `text/plain` haben.
- {{HTTPHeader("Range")}} muss einen Wert eines einzelnen Bytebereichs in der Form `bytes=[0-9]+-[0-9]*` haben.
  Weitere Details finden Sie in der Dokumentation zum Header {{HTTPHeader("Range")}}.
- Für jeden Header: Die Länge des Wertes darf nicht größer als 128 sein.

## Siehe auch

- Verwandte Glossarbegriffe:
  - {{Glossary("CORS-safelisted_response_header", "CORS-safelisted Response-Header")}}
  - {{Glossary("Forbidden_request_header", "Verbotener Anforderungsheader")}}
  - {{Glossary("Request_header", "Anforderungsheader")}}
