---
title: Idempotent
slug: Glossary/Idempotent
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Eine HTTP-Methode ist **idempotent**, wenn die beabsichtigte Wirkung auf den Server bei einer einzelnen Anfrage dieselbe ist wie bei mehreren identischen Anfragen.

Dies bedeutet nicht unbedingt, dass die Anfrage _keine_ einzigartigen Nebeneffekte hat: Zum Beispiel kann der Server jede Anfrage mit dem Zeitpunkt, zu dem sie empfangen wurde, protokollieren. Idempotenz bezieht sich nur auf die vom Client beabsichtigten Effekte: Zum Beispiel beabsichtigt eine `POST`-Anfrage, Daten an den Server zu senden, oder eine `DELETE`-Anfrage beabsichtigt, eine Ressource auf dem Server zu löschen.

Alle {{Glossary("Safe/HTTP", "sicheren")}} Methoden sind idempotent, ebenso wie {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}. Die {{HTTPMethod("POST")}}-Methode ist nicht idempotent.

Um idempotent zu sein, wird nur der Zustand des Servers betrachtet. Die von jeder Anfrage zurückgegebene Antwort kann unterschiedlich sein: Zum Beispiel wird der erste Aufruf einer {{HTTPMethod("DELETE")}} wahrscheinlich einen {{HTTPStatus("200")}} zurückgeben, während nachfolgende Aufrufe wahrscheinlich einen {{HTTPStatus("404")}} zurückgeben. Eine weitere Implikation der Idempotenz von {{HTTPMethod("DELETE")}} ist, dass Entwickler keine RESTful-APIs mit einer _letzten Eintrag löschen_-Funktionalität unter Verwendung der `DELETE`-Methode implementieren sollten.

Beachten Sie, dass die Idempotenz einer Methode vom Server nicht garantiert wird und einige Anwendungen möglicherweise die Idempotenzanforderung fälschlicherweise verletzen.

`GET /pageX HTTP/1.1` ist idempotent, weil es eine sichere (schreibgeschützte) Methode ist. Erfolgreiche Aufrufe können unterschiedliche Daten an den Client zurückgeben, wenn die Daten auf dem Server zwischenzeitlich aktualisiert wurden.

`POST /add_row HTTP/1.1` ist nicht idempotent; wenn es mehrmals aufgerufen wird, fügt es mehrere Zeilen hinzu:

```http
POST /add_row HTTP/1.1
POST /add_row HTTP/1.1   -> Adds a 2nd row
POST /add_row HTTP/1.1   -> Adds a 3rd row
```

`DELETE /idX/delete HTTP/1.1` ist idempotent, auch wenn der zurückgegebene Statuscode zwischen den Anfragen variieren kann:

```http
DELETE /idX/delete HTTP/1.1   -> Returns 200 if idX exists
DELETE /idX/delete HTTP/1.1   -> Returns 404 as it just got deleted
DELETE /idX/delete HTTP/1.1   -> Returns 404
```

## Siehe auch

- Definition von [idempotent](https://httpwg.org/specs/rfc9110.html#idempotent.methods) in der HTTP-Spezifikation.
- Beschreibung der gemeinsamen idempotenten Methoden: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}
- Beschreibung der gemeinsamen nicht-idempotenten Methoden: {{HTTPMethod("POST")}}, {{HTTPMethod("PATCH")}}, {{HTTPMethod("CONNECT")}}
