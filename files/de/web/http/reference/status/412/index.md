---
title: 412 Precondition Failed
slug: Web/HTTP/Reference/Status/412
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`412 Precondition Failed`** [Client-Fehler-Antwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Zugriff auf die Zielressource verweigert wurde. Dies geschieht bei [bedingten Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) mit anderen Methoden als {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}}, wenn die Bedingung, definiert durch die Header {{HTTPHeader("If-Unmodified-Since")}} oder {{HTTPHeader("If-Match")}}, nicht erfüllt ist. In diesem Fall kann die Anfrage (in der Regel ein Hochladen oder eine Änderung einer Ressource) nicht durchgeführt werden und diese Fehlermeldung wird zurückgesendet.

## Status

```http
412 Precondition Failed
```

## Beispiele

### Vorbedingung nicht erfüllt

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Vermeidung von Gleichzeit-Bearbeitungen

Mit Hilfe der `ETag`- und {{HTTPHeader("If-Match")}} Header können Konflikte oder gleichzeitige Bearbeitungen vermieden werden. Zum Beispiel, wenn einige Wiki-Seiten bearbeitet werden, wird der Inhalt gehasht und in einer `ETag` in erfolgreichen Antworten platziert:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen an einer Wiki-Seite (Daten posten) wird die {{HTTPMethod("POST")}} Anfrage den {{HTTPHeader("If-Match")}} Header enthalten, der die `ETag`-Werte enthält, die der Client aus der letzten Bearbeitung gespeichert hat, um die Aktualität der Ressource auf dem Server zu überprüfen:

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hashes nicht übereinstimmen, wurde das Dokument zwischenzeitlich bearbeitet und ein `412 Precondition Failed`-Fehler wird ausgelöst.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [Bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Match")}}
- {{HTTPStatus("428")}}
