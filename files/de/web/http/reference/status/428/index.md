---
title: 428 Precondition Required
slug: Web/HTTP/Reference/Status/428
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`428 Precondition Required`** [Client-Fehlerreaktion](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server verlangt, dass die Anfrage [konditional](/de/docs/Web/HTTP/Guides/Conditional_requests) ist.

Typischerweise bedeutet eine 428-Antwort, dass ein erforderlicher Vorbedingungsheader wie {{HTTPHeader("If-Match")}} **fehlt**.
Wenn ein Vorbedingungsheader **nicht mit** dem serverseitigen Zustand übereinstimmt, sollte die Antwort {{HTTPStatus("412", "412 Precondition Failed")}} sein.

## Status

```http
428 Precondition Required
```

## Beispiele

### Fehlende Vorbedingung in der Anfrage

Ein Client hat eine Ressource `my-document` vom Server geholt, sie lokal aktualisiert und versucht dann, das aktualisierte Dokument zurück an den Server zu senden:

```http
PUT /docs/my-document HTTP/1.1
Host: example.com
Content-Type: application/json

{
  […]
```

Die Serverimplementierung verlangt, dass alle {{HTTPMethod("PUT")}}-Anfragen für den spezifischen Pfad oder Dokumenttyp konditional sein müssen und sendet eine 428-Antwort:

```http
HTTP/1.1 428 Precondition Required
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "code": "MissingPrecondition",
  "message": "Updating documents requires a precondition header.",
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Statuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-konditionale Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
- Konditionale Header: {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Range")}}
- {{HTTPStatus(412)}}
