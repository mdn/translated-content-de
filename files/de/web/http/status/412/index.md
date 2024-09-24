---
title: 412 Vorbedingung nicht erfüllt
slug: Web/HTTP/Status/412
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`412 Vorbedingung nicht erfüllt`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass der Zugriff auf die Zielressource verweigert wurde.
Dies passiert bei [bedingten Anfragen](/de/docs/Web/HTTP/Conditional_requests) für andere Methoden als {{HTTPMethod("GET")}} oder {{HTTPMethod("HEAD")}}, wenn die Bedingung, die durch die Header {{HTTPHeader("If-Unmodified-Since")}} oder {{HTTPHeader("If-Match")}} definiert ist, nicht erfüllt wird.
In diesem Fall kann die Anfrage (in der Regel ein Upload oder eine Änderung einer Ressource) nicht durchgeführt werden und diese Fehlermeldung wird zurückgesendet.

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

### Vermeidung von Kollisionen

Mit Hilfe der Header `ETag` und {{HTTPHeader("If-Match")}} können Sie Konflikte oder Kollisionen vermeiden.
Zum Beispiel wird beim Bearbeiten von Wiki-Seiten der Inhalt gehasht und in erfolgreichen Antworten in einem `ETag` platziert:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Beim Speichern von Änderungen an einer Wiki-Seite (Datenübertragung) enthält die {{HTTPMethod("POST")}}-Anfrage den {{HTTPHeader("If-Match")}}-Header mit den `ETag`-Werten, die der Client bei der letzten Bearbeitung gespeichert hat, um die Aktualität der Ressource auf dem Server zu überprüfen:

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Wenn die Hashes nicht übereinstimmen, wurde das Dokument zwischenzeitlich bearbeitet und es wird ein `412 Vorbedingung nicht erfüllt`-Fehler geworfen.

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- [Bedingte Anfragen](/de/docs/Web/HTTP/Conditional_requests)
- {{HTTPStatus("304")}}
- {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Match")}}
- {{HTTPStatus("428")}}
