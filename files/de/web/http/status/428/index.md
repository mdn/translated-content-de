---
title: 428 Precondition Required
slug: Web/HTTP/Status/428
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`428 Precondition Required`** zeigt als [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) an, dass der Server erfordert, dass die Anfrage [konditional](/de/docs/Web/HTTP/Conditional_requests) ist.

Typischerweise bedeutet eine 428-Antwort, dass ein notwendiger Vorbedingungs-Header wie {{HTTPHeader("If-Match")}} **fehlt**.
Wenn ein Vorbedingungs-Header **nicht mit** dem serverseitigen Zustand übereinstimmt, sollte die Antwort {{HTTPStatus("412", "412 Precondition Failed")}} sein.

## Status

```http
428 Precondition Required
```

## Beispiele

### Fehlende Vorbedingung in der Anfrage

Ein Client hat eine Ressource `my-document` vom Server abgerufen, sie lokal aktualisiert und versucht dann, das aktualisierte Dokument an den Server zu senden:

```http
PUT /docs/my-document HTTP/1.1
Host: example.com
Content-Type: application/json

{
  […]
```

Die Serverimplementierung erfordert, dass alle {{HTTPMethod("PUT")}}-Anfragen für den spezifischen Pfad oder Dokumenttyp konditional sein müssen und sendet eine 428-Antwort:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [HTTP-konditionale Anfragen](/de/docs/Web/HTTP/Conditional_requests)
- Konditionale Header: {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Range")}}
- {{HTTPStatus(412)}}
