---
title: 412 Precondition Failed
slug: Web/HTTP/Reference/Status/412
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`412 Precondition Failed`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Zugriff auf die Zielressource verweigert wurde.
Dies geschieht bei [bedingten Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) bei Methoden, die nicht {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} sind, wenn die Bedingung, die durch die Header {{HTTPHeader("If-Unmodified-Since")}} oder {{HTTPHeader("If-Match")}} definiert ist, nicht erfüllt ist.
In diesem Fall kann die Anfrage (normalerweise ein Upload oder eine Änderung einer Ressource) nicht durchgeführt werden und diese Fehlermeldung wird zurückgesendet.

## Status

```http
412 Precondition Failed
```

## Beispiele

### Bedingung fehlgeschlagen

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Vermeidung von gleichzeitigen Zugriffen

Mit Hilfe der `ETag`- und der {{HTTPHeader("If-Match")}}-Header können Sie Konflikte oder gleichzeitige Änderungen vermeiden.
Beispielsweise wird beim Bearbeiten von Wiki-Seiten der Inhalt gehasht und in erfolgreichen Antworten in ein `ETag` eingefügt:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen an einer Wiki-Seite (Versenden von Daten) enthält die {{HTTPMethod("POST")}}-Anfrage den {{HTTPHeader("If-Match")}}-Header mit den `ETag`-Werten, die der Client aus der letzten Bearbeitung gespeichert hat, um die Aktualität der Ressource auf dem Server zu überprüfen:

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
