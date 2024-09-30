---
title: 412 Precondition Failed
slug: Web/HTTP/Status/412
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`412 Precondition Failed`** des [Client-Fehler-Antwortcodes](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Zugriff auf die Zielressource verweigert wurde. Dies geschieht bei [konditionalen Anfragen](/de/docs/Web/HTTP/Conditional_requests) mit anderen Methoden als {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}}, wenn die Bedingung, die durch die {{HTTPHeader("If-Unmodified-Since")}} oder {{HTTPHeader("If-Match")}} Header definiert ist, nicht erfüllt wird. In diesem Fall kann die Anfrage (normalerweise ein Upload oder eine Änderung einer Ressource) nicht durchgeführt werden und diese Fehlermeldung wird zurückgesendet.

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

### Vermeidung von Konflikten

Mit Hilfe der `ETag`- und {{HTTPHeader("If-Match")}}-Header können Sie Konflikte oder Überschneidungen verhindern. Zum Beispiel, wenn einige Wiki-Seiten bearbeitet werden, wird der Inhalt gehashed und in einer `ETag` in erfolgreichen Antworten gespeichert:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen auf einer Wiki-Seite (Posten von Daten) enthält die {{HTTPMethod("POST")}}-Anfrage den {{HTTPHeader("If-Match")}}-Header mit den `ETag`-Werten, die der Client von der letzten Bearbeitung gespeichert hat, um die Aktualität der Ressource auf dem Server zu überprüfen:

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hashes nicht übereinstimmen, wurde das Dokument in der Zwischenzeit bearbeitet und ein `412 Precondition Failed`-Fehler wird ausgelöst.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [Konditionale Anfragen](/de/docs/Web/HTTP/Conditional_requests)
- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Match")}}
- {{HTTPStatus("428")}}
