---
title: 206 Teilinhalt
slug: Web/HTTP/Status/206
l10n:
  sourceCommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`206 Teilinhalt`** ist ein [erfolgreicher Antwortstatus](/de/docs/Web/HTTP/Status#successful_responses), der als Antwort auf eine [Bereichsanfrage](/de/docs/Web/HTTP/Range_requests) gesendet wird. Der Antwortkörper enthält die angeforderten Datenbereiche, wie im {{HTTPHeader("Range")}} Header der Anfrage spezifiziert.

Das Format der Antwort hängt von der Anzahl der angeforderten Bereiche ab. Wenn ein einzelner Bereich angefordert wird, wird der {{HTTPHeader("Content-Type")}} der gesamten Antwort auf den Typ des Dokuments gesetzt, und ein {{HTTPHeader("Content-Range")}} wird bereitgestellt. Wenn mehrere Bereiche angefordert werden, wird der {{HTTPHeader("Content-Type")}} auf `multipart/byteranges` gesetzt, und jedes Fragment deckt einen Bereich ab, mit eigenen {{HTTPHeader("Content-Range")}} und {{HTTPHeader("Content-Type")}} Headern, die ihn beschreiben.

## Status

```http
206 Partial Content
```

## Beispiele

### Empfang einer `206` Antwort für einen einzeln angeforderten Bereich

Das folgende ist eine Beispielantwort `206`, wenn ein einzelner Bereich von `21010-` (Bytes 21010 bis zum Ende der Datei) einer Bilddatei angefordert wird. Die Antwort enthält den {{HTTPHeader("Content-Type")}} von `image/gif` und der {{HTTPHeader("Content-Range")}} wird bereitgestellt:

```http
GET /z4d4kWk.gif HTTP/1.1
Host: images.example.com
Range: bytes=21010-
```

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Range: bytes 21010-47021/47022
Content-Length: 26012
Content-Type: image/gif
ETag: "abc123"
Accept-Ranges: bytes

# 26012 bytes of partial image data…
```

### Empfang einer `206` Antwort für mehrere angeforderte Bereiche

Folgendes ist eine Beispielantwort `206`, wenn zwei Bereiche einer PDF-Datei angefordert werden. Die Antwort enthält den `multipart/byteranges` {{HTTPHeader("Content-Type")}} mit einem separaten {{HTTPHeader("Content-Type")}} (`application/pdf`) und {{HTTPHeader("Content-Range")}} für jeden Bereich.

```http
GET /pricelist.pdf HTTP/1.1
Host: example.com
Range: bytes=234-639,4590-7999
```

```http
HTTP/1.1 206 Partial Content
Date: Wed, 15 Nov 2015 06:25:24 GMT
Last-Modified: Wed, 15 Nov 2015 04:58:08 GMT
Content-Length: 1741
Content-Type: multipart/byteranges; boundary=String_separator
ETag: "abc123"
Accept-Ranges: bytes

--String_separator
Content-Type: application/pdf
Content-Range: bytes 234-639/8000

# content of first range (406 bytes)
--String_separator
Content-Type: application/pdf
Content-Range: bytes 4590-7999/8000

# content of second range (3410 bytes)
--String_separator--
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- {{HTTPHeader("If-Range")}}
- {{HTTPHeader("Range")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- [HTTP-Anforderungsmethoden](/de/docs/Web/HTTP/Methods)
- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
