---
title: 415 Unsupported Media Type
slug: Web/HTTP/Reference/Status/415
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`415 Unsupported Media Type`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server die Anfrage ablehnte, da das Nachrichten-{{Glossary("HTTP_Content", "Inhaltsformat")}} nicht unterstützt wird.

Das Formatproblem könnte durch den in der Anfrage angegebenen {{HTTPHeader("Content-Type")}} oder {{HTTPHeader("Content-Encoding")}} oder als Ergebnis der Verarbeitung des Nachrichteninhalts der Anfrage verursacht werden. Einige Server können streng auf den erwarteten `Content-Type` von Anfragen sein. Zum Beispiel kann das Senden von `UTF8` anstelle von `UTF-8`, um den {{Glossary("UTF-8", "UTF-8")}}-Zeichensatz zu spezifizieren, dazu führen, dass der Server den Medientyp als ungültig betrachtet.

## Status

```http
415 Unsupported Media Type
```

## Beispiele

### Fehlender Content-Typ

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

Wenn die Serverimplementierung mindestens einen MIME-Typ `Content-Type: application/json;` für die Anfrage an diesem Endpunkt erwartet, kann sie die folgende Antwort senden:

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept-Post: application/json; charset=UTF-8
Content-Length: 0
```

### Ungültiger Content-Typ

Im folgenden Beispiel ist der {{HTTPHeader("Content-Type")}}-Header fälschlicherweise auf URL-codierte Formulardaten gesetzt, während der {{Glossary("HTTP_Content", "Inhalt")}} stattdessen im Anfragetext liegt:

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

In diesem Fall antwortet der Server mit einem 415 und dem erforderlichen Content-Typ für die Anfrage im {{HTTPHeader("Accept-Post")}}-Header:

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

- [HTTP-Statuscodes von Antworten](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept-Post")}}
