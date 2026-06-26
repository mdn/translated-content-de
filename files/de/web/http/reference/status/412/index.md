---
title: 412 Precondition Failed
slug: Web/HTTP/Reference/Status/412
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`412 Precondition Failed`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass der Zugriff auf die Zielressource verweigert wurde.
Dies passiert bei [bedingten Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests) mit Methoden, die nicht {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} sind, wenn die Bedingung, die durch die {{HTTPHeader("If-Unmodified-Since")}}- oder {{HTTPHeader("If-Match")}}-Header definiert ist, nicht erfüllt wird.
In diesem Fall kann die Anfrage (normalerweise ein Upload oder eine Änderung einer Ressource) nicht durchgeführt werden und es wird eine Fehlermeldung zurückgesendet.

## Status

```http
412 Precondition Failed
```

## Beispiele

### Bedingung nicht erfüllt

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Vermeidung von Kollisionen

Mit Hilfe der `ETag`- und {{HTTPHeader("If-Match")}}-Header können Sie Konflikte oder Kollisionen vermeiden.
Zum Beispiel wird beim Bearbeiten von Wiki-Seiten der Inhalt gehasht und in eine `ETag` in erfolgreichen Antworten eingefügt:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen an einer Wiki-Seite (Posten von Daten) enthält die {{HTTPMethod("POST")}}-Anfrage den {{HTTPHeader("If-Match")}}-Header mit den `ETag`-Werten, die der Client von der letzten Bearbeitung gespeichert hat, um die Aktualität der Ressource auf dem Server zu überprüfen:

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hashes nicht übereinstimmen, wurde das Dokument zwischenzeitlich bearbeitet und ein `412 Precondition Failed`-Fehler wird geworfen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- [Bedingte Anfragen](/de/docs/Web/HTTP/Guides/Conditional_requests)
- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Match")}}
- {{HTTPStatus("428")}}
