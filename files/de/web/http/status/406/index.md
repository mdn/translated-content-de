---
title: 406 Not Acceptable
slug: Web/HTTP/Status/406
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`406 Not Acceptable`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server keine Antwort erzeugen konnte, die mit der im Antrag definierten Liste akzeptabler Werte in den [proaktiven Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation#server-driven_content_negotiation)-Headern übereinstimmt, und dass der Server nicht bereit war, eine Standarddarstellung zu liefern.

Zu den Headern der proaktiven Inhaltsverhandlung gehören:

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

Ein Server kann Antworten zurückgeben, die von den Accept-Headern des Antrags abweichen. In solchen Fällen kann eine {{HTTPStatus("200")}}-Antwort mit einer Standardressource, die nicht mit der Liste der akzeptablen Werte der Inhaltsverhandlung des Clients übereinstimmt, vorzuziehen sein gegenüber der Sendung einer 406-Antwort.

Wenn ein Server eine 406 zurückgibt, sollte der Nachrichtentext die Liste der verfügbaren Darstellungen für die Ressource enthalten, damit der Benutzer wählen kann, obwohl dafür keine standardisierte Methode definiert ist.

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

In diesem Beispiel fällt die Serverimplementierung nicht auf einen Standardinhaltstyp wie `text/html` oder `application/json` zurück, sondern gibt stattdessen eine 406 aus:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}
- HTTP [Inhaltsverhandlung](/de/docs/Web/HTTP/Content_negotiation)
