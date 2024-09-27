---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`415 Unsupported Media Type`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Server die Anfrage abgelehnt hat, weil das Format des [Inhalts](/de/docs/Glossary/HTTP_Content) der Nachricht nicht unterstützt wird.

Das Formatproblem könnte auf den angegebenen {{HTTPHeader("Content-Type")}} oder {{HTTPHeader("Content-Encoding")}} der Anfrage zurückzuführen sein oder als Ergebnis der Verarbeitung des Inhalts der Anfragenachricht auftreten.
Einige Server sind möglicherweise strikt in Bezug auf den erwarteten `Content-Type` von Anfragen.
Zum Beispiel könnte das Senden von `UTF8` anstelle von `UTF-8`, um das [UTF-8](/de/docs/Glossary/UTF-8)-Zeichensatz zu spezifizieren, dazu führen, dass der Server den Medientyp als ungültig ansieht.

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

Wenn die Serverimplementierung mindestens einen MIME-Typ `Content-Type: application/json;` für die Anfrage an diesem Endpunkt erwartet, kann sie die folgende Antwort senden:

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept-Post: application/json; charset=UTF-8
Content-Length: 0
```

### Ungültiger Content-Type

Im folgenden Beispiel ist der {{HTTPHeader("Content-Type")}}-Header falsch auf URL-codierte Formulardaten gesetzt, während sich der [Inhalt](/de/docs/Glossary/HTTP_Content) stattdessen im Anfragekörper befindet:

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

In diesem Fall antwortet der Server mit einem 415-Status, wobei der erforderliche Inhaltstyp für die Anfrage im {{HTTPHeader("Accept-Post")}}-Header angegeben ist:

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
