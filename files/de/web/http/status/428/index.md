---
title: 428 Voraussetzung erforderlich
slug: Web/HTTP/Status/428
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`428 Voraussetzung erforderlich`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server die Anforderung als [bedingt](/de/docs/Web/HTTP/Conditional_requests) erwartet.

Typischerweise bedeutet eine 428-Antwort, dass ein benötigter Vorbedingungen-Header wie {{HTTPHeader("If-Match")}} **fehlt**.
Wenn ein Vorbedingungen-Header **nicht mit** dem serverseitigen Zustand übereinstimmt, sollte die Antwort {{HTTPStatus("412", "412 Voraussetzung fehlgeschlagen")}} sein.

## Status

```http
428 Precondition Required
```

## Beispiele

### Fehlende Voraussetzung in der Anfrage

Ein Client hat eine Ressource `my-document` vom Server abgerufen, sie lokal aktualisiert und versucht dann, das aktualisierte Dokument zurück an den Server zu senden:

```http
PUT /docs/my-document HTTP/1.1
Host: example.com
Content-Type: application/json

{
  […]
```

Die Serverimplementierung erfordert, dass alle {{HTTPMethod("PUT")}}-Anfragen für den spezifischen Pfad oder Typ von Dokumenten bedingt sind und sendet eine 428-Antwort:

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

- [HTTP-Statuscodes der Antwort](/de/docs/Web/HTTP/Status)
- [HTTP-Bedingungsanfragen](/de/docs/Web/HTTP/Conditional_requests)
- Bedingte Header: {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Range")}}
- {{HTTPStatus(412)}}
