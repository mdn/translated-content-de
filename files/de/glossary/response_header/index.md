---
title: Antwort-Header
slug: Glossary/Response_header
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{GlossarySidebar}}

Ein **Antwort-Header** ist ein {{Glossary("HTTP_header", "HTTP-Header")}}, der in einer HTTP-Antwort verwendet werden kann und der nicht den Inhalt der Nachricht betrifft. Antwort-Header wie {{HTTPHeader("Age")}}, {{HTTPHeader("Location")}} oder {{HTTPHeader("Server")}} werden verwendet, um einen detaillierteren Kontext der Antwort zu geben.

Nicht alle Header, die in einer Antwort erscheinen, werden von der Spezifikation als _Antwort-Header_ kategorisiert. Zum Beispiel ist der {{HTTPHeader("Content-Type")}} Header ein {{Glossary("representation_header", "Repräsentations-Header")}}, der den ursprünglichen Datentyp im Körper der Antwortnachricht angibt (vor der Kodierung im {{HTTPHeader("Content-Encoding")}} Repräsentations-Header angewendet wird). "Umgangssprachlich" werden jedoch in einer Antwortnachricht normalerweise alle Header als Antwort-Header bezeichnet.

Das Folgende zeigt einige Antwort- und Repräsentations-Header nach einer {{HTTPMethod("GET")}}-Anfrage.

```http
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
Etag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
Keep-Alive: timeout=5, max=997
Last-Modified: Mon, 18 Jul 2016 02:36:04 GMT
Server: Apache
Set-Cookie: my-key=my value; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Reference/Headers)
- Verwandte Glossarbegriffe:
  - {{Glossary("Representation_header", "Repräsentations-Header")}}
  - {{Glossary("HTTP_header", "HTTP-Header")}}
  - {{Glossary("Request_header", "Anfrage-Header")}}
