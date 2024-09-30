---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`415 Unsupported Media Type`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server die Anfrage abgelehnt hat, weil das Nachrichten-[Format](/de/docs/Glossary/HTTP_Content) nicht unterstützt wird.

Das Formatproblem kann durch den in der Anfrage angegebenen {{HTTPHeader("Content-Type")}} oder {{HTTPHeader("Content-Encoding")}} verursacht werden oder als Ergebnis der Verarbeitung des Inhalts der Anfragenachricht auftreten. Einige Server können strenge Anforderungen an den erwarteten `Content-Type` für Anfragen haben. Zum Beispiel kann das Senden von `UTF8` anstelle von `UTF-8` zur Angabe des [UTF-8](/de/docs/Glossary/UTF-8) Zeichensatzes dazu führen, dass der Server den Medientyp als ungültig betrachtet.

## Status

```http
415 Unsupported Media Type
```

## Beispiele

### Fehlender Content-Type

Im folgenden Beispiel fehlt der {{HTTPHeader("Content-Type")}}-Header vollständig:

```http
POST /comments HTTP/1.1
Host: example.com
Content-Length: 23

{
  "user": "belgin",
  "comment": "LGTM!"
}
```

Wenn die Server-Implementierung mindestens einen MIME-Typ `Content-Type: application/json;` für die Anfrage an diesem Endpunkt erwartet, kann er die folgende Antwort senden:

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept-Post: application/json; charset=UTF-8
Content-Length: 0
```

### Ungültiger Content-Type

Im folgenden Beispiel ist der {{HTTPHeader("Content-Type")}}-Header falsch auf URL-kodierte Formulardaten gesetzt, während sich der [Inhalt](/de/docs/Glossary/HTTP_Content) stattdessen im Anfragetext befindet:

```http
POST /comments HTTP/1.1
Host: example.com
Content-Length: 23
Content-Type: application/x-www-form-urlencoded

{
  "user": "belgin",
  "comment": "LGTM!"
}
```

In diesem Fall antwortet der Server mit einer 415-Antwort, wobei der erforderliche Inhaltstyp für die Anfrage im {{HTTPHeader("Accept-Post")}}-Header angegeben ist:

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept-Post: application/json; charset=UTF-8
Content-Length: 0
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept-Post")}}
