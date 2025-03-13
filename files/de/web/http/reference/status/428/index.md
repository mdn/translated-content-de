---
title: 428 Precondition Required
slug: Web/HTTP/Reference/Status/428
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`428 Precondition Required`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server verlangt, dass die Anfrage [bedingt](/de/docs/Web/HTTP/Guides/Conditional_requests) ist.

Typischerweise bedeutet eine 428-Antwort, dass ein erforderlicher Vorbedingungs-Header wie {{HTTPHeader("If-Match")}} **fehlt**.
Wenn ein Vorbedingungs-Header **nicht** dem serverseitigen Zustand entspricht, sollte die Antwort {{HTTPStatus("412", "412 Precondition Failed")}} sein.

## Status

```http
428 Precondition Required
```

## Beispiele

### Fehlende Vorbedingung in der Anfrage

Ein Client hat eine Ressource `my-document` vom Server abgerufen, sie lokal aktualisiert und versucht dann, das aktualisierte Dokument an den Server zurückzusenden:

```http
PUT /docs/my-document HTTP/1.1
Host: example.com
Content-Type: application/json

{
  […]
```

Die Serverimplementierung erfordert, dass alle {{HTTPMethod("PUT")}}-Anfragen für den spezifischen Pfad oder den Dokumenttyp bedingt sind und sendet eine 428-Antwort:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [HTTP-Bedingungsanfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
- Bedingungs-Header: {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Range")}}
- {{HTTPStatus(412)}}
