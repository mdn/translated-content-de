---
title: 406 Not Acceptable
slug: Web/HTTP/Reference/Status/406
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`406 Not Acceptable`** [Clientfehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) gibt an, dass der Server keine Antwort erzeugen konnte, die mit der Liste der akzeptablen Werte übereinstimmt, die in den Headern zur [proaktiven Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation#server-driven_content_negotiation) der Anfrage definiert sind, und dass der Server nicht bereit war, eine Standarddarstellung bereitzustellen.

Zu den Headern zur proaktiven Inhaltsaushandlung gehören:

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

Ein Server kann Antworten liefern, die von den Accept-Headern der Anfrage abweichen. In solchen Fällen kann eine {{HTTPStatus("200")}}-Antwort mit einer Standardressource, die nicht mit der Liste der akzeptablen Werte der Inhaltsaushandlung des Clients übereinstimmt, bevorzugt werden, anstatt eine 406-Antwort zu senden.

Wenn ein Server eine 406 zurückgibt, sollte der Nachrichtenkörper die Liste der verfügbaren Repräsentationen für die Ressource enthalten, sodass der Benutzer eine auswählen kann, obwohl hierfür keine standardmäßige Vorgehensweise definiert ist.

## Status

```http
406 Not Acceptable
```

## Beispiele

### Inhaltstyp nicht verfügbar

Die folgende Anfrage geht davon aus, dass `www.example.com/docs/doc1` das Senden eines Dokuments als `application/rtf` unterstützt:

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
- HTTP-[Inhaltsaushandlung](/de/docs/Web/HTTP/Guides/Content_negotiation)
