---
title: Idempotent
slug: Glossary/Idempotent
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Eine HTTP-Methode ist **idempotent**, wenn die beabsichtigte Wirkung auf den Server bei einer einzelnen Anfrage dieselbe ist wie die Wirkung bei mehreren identischen Anfragen.

Das bedeutet nicht unbedingt, dass die Anfrage _keine_ einzigartigen Nebeneffekte hat: Zum Beispiel könnte der Server jede Anfrage mit der Zeit, zu der sie eingegangen ist, protokollieren. Idempotenz bezieht sich nur auf die vom Client beabsichtigten Effekte: Beispielsweise beabsichtigt eine POST-Anfrage, Daten an den Server zu senden, oder eine DELETE-Anfrage beabsichtigt, eine Ressource auf dem Server zu löschen.

Alle {{Glossary("Safe/HTTP", "sicheren")}} Methoden sind idempotent sowie {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}. Die {{HTTPMethod("POST")}}-Methode ist nicht idempotent.

Um idempotent zu sein, wird nur der Zustand des Servers berücksichtigt. Die von jeder Anfrage zurückgegebene Antwort kann unterschiedlich sein: Zum Beispiel wird der erste Aufruf eines {{HTTPMethod("DELETE")}} wahrscheinlich einen {{HTTPStatus("200")}} zurückgeben, während nachfolgende wahrscheinlich einen {{HTTPStatus("404")}} zurückgeben. Eine weitere Folge davon, dass {{HTTPMethod("DELETE")}} idempotent ist, ist, dass Entwickler keine RESTful APIs mit einer _Entfernen des letzten Eintrags_-Funktionalität unter Verwendung der `DELETE`-Methode implementieren sollten.

Beachten Sie, dass die Idempotenz einer Methode nicht vom Server garantiert wird und einige Anwendungen möglicherweise fälschlicherweise die Idempotenzbeschränkung verletzen.

`GET /pageX HTTP/1.1` ist idempotent, da es sich um eine sichere (nur lesbare) Methode handelt. Nachfolgende Aufrufe können unterschiedliche Daten an den Client zurückgeben, wenn die Daten auf dem Server in der Zwischenzeit aktualisiert wurden.

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
- Beschreibung gängiger idempotenter Methoden: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}
- Beschreibung gängiger nicht-idempotenter Methoden: {{HTTPMethod("POST")}}, {{HTTPMethod("PATCH")}}, {{HTTPMethod("CONNECT")}}
