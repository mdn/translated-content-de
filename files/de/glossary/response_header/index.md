---
title: Antwort-Header
slug: Glossary/Response_header
l10n:
  sourceCommit: 099a15b4234071958980dcae0e122a7145fdbdfa
---

Ein **Antwort-Header** ist ein {{Glossary("HTTP_header", "HTTP-Header")}}, der in einer HTTP-Antwort verwendet werden kann und nicht mit dem Inhalt der Nachricht in Zusammenhang steht. Antwort-Header wie {{HTTPHeader("Age")}}, {{HTTPHeader("Location")}} oder {{HTTPHeader("Server")}} werden verwendet, um einen detaillierteren Kontext der Antwort zu geben.

Nicht alle Header, die in einer Antwort erscheinen, werden von der Spezifikation als _Antwort-Header_ kategorisiert. Zum Beispiel ist der {{HTTPHeader("Content-Type")}}-Header ein {{Glossary("representation_header", "Repräsentations-Header")}}, der den ursprünglichen Datentyp im Body der Antwortnachricht angibt (bevor die Kodierung im {{HTTPHeader("Content-Encoding")}} Repräsentations-Header angewendet wird). "Umgangssprachlich" werden jedoch üblicherweise alle Header in einer Antwortnachricht als Antwort-Header bezeichnet.

Im Folgenden werden einige Antwort- und Repräsentations-Header nach einer {{HTTPMethod("GET")}}-Anfrage gezeigt.

```http
200 OK
Access-Control-Allow-Origin: *
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Mon, 18 Jul 2016 16:06:00 GMT
ETag: "c561c68d0ba92bbeb8b0f612a9199f722e3a621a"
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
