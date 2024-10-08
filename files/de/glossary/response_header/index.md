---
title: Response header
slug: Glossary/Response_header
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

{{GlossarySidebar}}

Ein **Response-Header** ist ein {{Glossary("HTTP_header", "HTTP-Header")}}, der in einer HTTP-Antwort verwendet werden kann und der sich nicht auf den Inhalt der Nachricht bezieht. Response-Header, wie z.B. {{HTTPHeader("Age")}}, {{HTTPHeader("Location")}} oder {{HTTPHeader("Server")}}, werden verwendet, um einen detaillierteren Kontext der Antwort zu geben.

Nicht alle Header, die in einer Antwort erscheinen, werden von der Spezifikation als _Response-Header_ kategorisiert. Zum Beispiel ist der {{HTTPHeader("Content-Type")}}-Header ein {{Glossary("representation_header", "Repräsentations-Header")}}, der den ursprünglichen Datentyp im Textkörper der Antwortnachricht angibt (vor der Anwendung der Kodierung im {{HTTPHeader("Content-Encoding")}}-Repräsentations-Header). Dennoch werden "umgangssprachlich" in einer Antwortnachricht alle Header üblicherweise als Response-Header bezeichnet.

Das Folgende zeigt einige Response- und Repräsentations-Header nach einer {{HTTPMethod("GET")}}-Anfrage.

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
Set-Cookie: mykey=myvalue; expires=Mon, 17-Jul-2017 16:06:00 GMT; Max-Age=31449600; Path=/; secure
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding
X-Backend-Server: developer2.webapp.scl3.mozilla.com
X-Cache-Info: not cacheable; meta data too large
X-kuma-revision: 1085259
x-frame-options: DENY
```

## Siehe auch

- [Liste aller HTTP-Header](/de/docs/Web/HTTP/Headers)
- Verwandte Glossarbegriffe:
  - {{Glossary("Representation_header", "Repräsentations-Header")}}
  - {{Glossary("HTTP_header", "HTTP-Header")}}
  - {{Glossary("Request_header", "Request-Header")}}
