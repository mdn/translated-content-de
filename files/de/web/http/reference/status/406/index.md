---
title: 406 Not Acceptable
slug: Web/HTTP/Reference/Status/406
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`406 Not Acceptable`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server keine Antwort erzeugen konnte, die der Liste der akzeptablen Werte entspricht, die in den [proaktiven Inhaltsaushandlungs-](/de/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation) Headern der Anfrage definiert sind, und dass der Server nicht willens war, eine Standardrepräsentation bereitzustellen.

Zu den Headern für die proaktive Inhaltsaushandlung gehören:

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

Ein Server kann Antworten zurückgeben, die von den `accept`-Headern der Anfrage abweichen.
In solchen Fällen kann eine {{HTTPStatus("200")}}-Antwort mit einer Standardressource, die nicht mit der Liste der akzeptablen Inhaltsaushandlungswerte des Clients übereinstimmt, vorzuziehen sein, statt eine 406-Antwort zu senden.

Wenn ein Server eine 406 zurückgibt, sollte der Nachrichtentext die Liste der verfügbaren Repräsentationen für die Ressource enthalten, sodass der Benutzer wählen kann, obwohl dafür keine standardisierte Methode definiert ist.

## Status

```http
406 Not Acceptable
```

## Beispiele

### Inhaltstyp nicht verfügbar

Die folgende Anfrage geht davon aus, dass `www.example.com/docs/doc1` unterstützt, ein Dokument als `application/rtf` zurückzusenden:

```http
GET /docs/doc1 HTTP/1.1
Host: example.com
Accept: application/rtf;
```

In diesem Beispiel fällt die Serverimplementierung nicht auf einen Standardinhaltstyp wie `text/html` oder `application/json` zurück, sondern gibt stattdessen eine 406 zurück:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}
- HTTP [Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
