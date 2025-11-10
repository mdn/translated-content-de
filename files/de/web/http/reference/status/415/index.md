---
title: 415 Unsupported Media Type
slug: Web/HTTP/Reference/Status/415
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`415 Unsupported Media Type`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Server die Anfrage verweigert hat, da das Nachrichten-{{Glossary("HTTP_Content", "Format")}} nicht unterstützt wird.

Das Problem mit dem Format könnte auf den in der Anfrage angegebenen {{HTTPHeader("Content-Type")}} oder {{HTTPHeader("Content-Encoding")}} zurückzuführen sein oder als Ergebnis der Verarbeitung des Nachrichtinhalts. Einige Server sind strikt in Bezug auf den erwarteten `Content-Type` von Anfragen.
Zum Beispiel kann die Angabe von `UTF8` anstelle von `UTF-8` zur Spezifizierung des {{Glossary("UTF-8", "UTF-8")}}-Zeichensatzes dazu führen, dass der Server den Medientyp als ungültig betrachtet.

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

Im folgenden Beispiel ist der {{HTTPHeader("Content-Type")}}-Header fälschlicherweise auf URL-kodierte Formulardaten gesetzt, während sich der {{Glossary("HTTP_Content", "Inhalt")}} stattdessen im Anfragetext befindet:

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

In diesem Fall antwortet der Server mit einem 415 und dem erforderlichen Content-Type für die Anfrage im {{HTTPHeader("Accept-Post")}}-Header:

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

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept-Post")}}
