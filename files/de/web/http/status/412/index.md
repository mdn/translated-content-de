---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`412 Precondition Failed`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) gibt an, dass der Zugriff auf die Zielressource verweigert wurde.
Dies tritt bei [bedingten Anfragen](/de/docs/Web/HTTP/Conditional_requests) bei Methoden außer {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}} auf, wenn die Bedingung, die durch die {{HTTPHeader("If-Unmodified-Since")}} oder {{HTTPHeader("If-Match")}} Header definiert ist, nicht erfüllt wird.
In diesem Fall kann die Anfrage (normalerweise ein Upload oder eine Änderung einer Ressource) nicht durchgeführt werden und diese Fehlermeldung wird zurückgesendet.

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

### Vermeidung von "mid-air collisions"

Mit Hilfe der `ETag`- und {{HTTPHeader("If-Match")}}-Header können Sie Konflikte oder "mid-air collisions" vermeiden.
Zum Beispiel werden beim Bearbeiten von Wikiseiten Inhalte gehasht und in einer `ETag` in erfolgreichen Antworten gespeichert:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen an einer Wikiseite (Posten von Daten) enthält die {{HTTPMethod("POST")}}-Anfrage den {{HTTPHeader("If-Match")}}-Header mit den `ETag`-Werten, die der Client vom letzten Editieren gepeichert hat, um die Aktualität der Ressource auf dem Server zu überprüfen:

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hashes nicht übereinstimmen, wurde das Dokument in der Zwischenzeit bearbeitet und ein `412 Precondition Failed`-Fehler wird ausgelöst.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [Bedingte Anfragen](/de/docs/Web/HTTP/Conditional_requests)
- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Match")}}
- {{HTTPStatus("428")}}
