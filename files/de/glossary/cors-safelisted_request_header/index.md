---
title: CORS-erlaubte Anforderungsheader
slug: Glossary/CORS-safelisted_request_header
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Ein [**CORS-erlaubter Anforderungsheader**](https://fetch.spec.whatwg.org/#cors-safelisted-request-header) (auch bekannt als "einfacher Header") ist einer der folgenden [HTTP-Header](/de/docs/Web/HTTP/Headers):

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Language")}}
- {{HTTPHeader("Content-Language")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Range")}}

Wenn nur diese Header (und Werte, die die unten aufgeführten zusätzlichen Anforderungen erfüllen) enthalten sind, muss eine Anfrage im Kontext von {{Glossary("CORS")}} keine {{glossary("preflight request")}} senden.

Sie können weitere Header mithilfe des {{HTTPHeader("Access-Control-Allow-Headers")}} Headers erlauben und auch die oben genannten Header dort auflisten, um die folgenden zusätzlichen Einschränkungen zu umgehen.

## Zusätzliche Einschränkungen

CORS-erlaubte Header müssen auch die folgenden Anforderungen erfüllen, um ein CORS-erlaubter Anforderungsheader zu sein:

- {{HTTPHeader("Accept-Language")}} und {{HTTPHeader("Content-Language")}} dürfen nur Werte bestehend aus `0-9`, `A-Z`, `a-z`, Leerzeichen oder `*,-.;=` enthalten.
- {{HTTPHeader("Accept")}} und {{HTTPHeader("Content-Type")}} dürfen kein _CORS-unsicheres Anforderungsheader-Byte_ enthalten: `0x00-0x1F` (außer `0x09 (HT)`, das erlaubt ist), `"():<>?@[\]{}`, und `0x7F (DEL)`.
- {{HTTPHeader("Content-Type")}} muss einen MIME-Typ seines analysierten Wertes (ohne Parameter beachtet) von entweder `application/x-www-form-urlencoded`, `multipart/form-data` oder `text/plain` haben.
- {{HTTPHeader("Range")}} muss einen Wert eines einzelnen Byte-Bereichs in der Form `bytes=[0-9]+-[0-9]*` haben. Weitere Details finden Sie in der Dokumentation des {{HTTPHeader("Range")}} Headers.
- Für jeden Header: Die Länge des Wertes darf 128 nicht überschreiten.

## Siehe auch

- Verwandte Glossar-Begriffe:
  - {{Glossary("CORS-safelisted response header")}}
  - {{Glossary("Forbidden header name")}}
  - {{Glossary("Request header")}}
