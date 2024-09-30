---
title: 406 Not Acceptable
slug: Web/HTTP/Status/406
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP **`406 Not Acceptable`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) Statuscode zeigt an, dass der Server keine Antwort erzeugen konnte, die der Liste der akzeptablen Werte entspricht, die in den [proaktiven Content-Negotiation](/de/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation) Headern der Anfrage definiert sind, und dass der Server nicht bereit war, eine Standardrepräsentation zu liefern.

Proaktive Content-Negotiation-Header umfassen:

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

Ein Server kann Antworten zurückgeben, die von den Akzeptanz-Headern der Anfrage abweichen. In solchen Fällen ist eine {{HTTPStatus("200")}} Antwort mit einer Standardressource, die nicht der Liste der akzeptablen Werte des Clients bei der Content Negotiation entspricht, möglicherweise vorzuziehen, anstatt eine 406-Antwort zu senden.

Wenn ein Server eine 406 zurückgibt, sollte der Nachrichtentext die Liste der verfügbaren Repräsentationen für die Ressource enthalten, wodurch der Benutzer wählen kann, obwohl hierfür kein Standardweg definiert ist.

## Status

```http
406 Not Acceptable
```

## Beispiele

### Content-Typ nicht verfügbar

Die folgende Anfrage geht davon aus, dass `www.example.com/docs/doc1` das Senden eines Dokuments als `application/rtf` unterstützt:

```http
GET /docs/doc1 HTTP/1.1
Host: example.com
Accept: application/rtf;
```

In diesem Beispiel fällt die Serverimplementierung nicht auf einen Standard-Content-Typ wie `text/html` oder `application/json` zurück, sondern gibt stattdessen einen 406 zurück:

```http
HTTP/1.1 406 Not Acceptable
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "code": "UnsupportedType",
  "message": "Only 'text/html' or 'application/json' content types supported.",
}
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Statuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}
- HTTP [Content Negotiation](/de/docs/Web/HTTP/Content_negotiation)
