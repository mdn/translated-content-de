---
title: Idempotent
slug: Glossary/Idempotent
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Eine HTTP-Methode ist **idempotent**, wenn der beabsichtigte Effekt auf den Server bei einer einzelnen Anfrage derselbe ist wie der Effekt bei mehreren identischen Anfragen.

Das bedeutet nicht unbedingt, dass die Anfrage _keine_ einzigartigen Nebeneffekte hat: Zum Beispiel kann der Server jede Anfrage mit der Zeit, zu der sie empfangen wurde, protokollieren. Idempotenz bezieht sich nur auf die vom Client beabsichtigten Effekte: Zum Beispiel beabsichtigt eine POST-Anfrage, Daten an den Server zu senden, oder eine DELETE-Anfrage beabsichtigt, eine Ressource auf dem Server zu löschen.

Alle [sicheren](/de/docs/Glossary/Safe/HTTP) Methoden sind idempotent, ebenso wie {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}. Die {{HTTPMethod("POST")}}-Methode ist nicht idempotent.

Um idempotent zu sein, wird nur der Zustand des Servers betrachtet. Die Antwort, die von jeder Anfrage zurückgegeben wird, kann unterschiedlich sein: Zum Beispiel wird der erste Aufruf einer {{HTTPMethod("DELETE")}} wahrscheinlich einen {{HTTPStatus("200")}} zurückgeben, während nachfolgende Aufrufe wahrscheinlich einen {{HTTPStatus("404")}} zurückgeben werden. Eine weitere Implikation der Idempotenz von {{HTTPMethod("DELETE")}} ist, dass Entwickler keine RESTful-APIs mit einer _lösche letzte Eintragung_-Funktionalität unter Verwendung der `DELETE`-Methode implementieren sollten.

Beachten Sie, dass die Idempotenz einer Methode nicht vom Server garantiert wird und einige Anwendungen möglicherweise fälschlicherweise die Idempotenzbeschränkung verletzen.

`GET /pageX HTTP/1.1` ist idempotent, weil es eine sichere (nur lesezugriff) Methode ist. Nachfolgende Aufrufe können dem Client unterschiedliche Daten zurückgeben, wenn die Daten auf dem Server in der Zwischenzeit aktualisiert wurden.

`POST /add_row HTTP/1.1` ist nicht idempotent; wenn es mehrmals aufgerufen wird, fügt es mehrere Zeilen hinzu:

```http
POST /add_row HTTP/1.1
POST /add_row HTTP/1.1   -> Adds a 2nd row
POST /add_row HTTP/1.1   -> Adds a 3rd row
```

`DELETE /idX/delete HTTP/1.1` ist idempotent, auch wenn sich der zurückgegebene Statuscode zwischen den Anfragen ändern kann:

```http
DELETE /idX/delete HTTP/1.1   -> Returns 200 if idX exists
DELETE /idX/delete HTTP/1.1   -> Returns 404 as it just got deleted
DELETE /idX/delete HTTP/1.1   -> Returns 404
```

## Siehe auch

- Definition von [idempotent](https://httpwg.org/specs/rfc9110.html#idempotent.methods) in der HTTP-Spezifikation.
- Beschreibung von üblichen idempotenten Methoden: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}
- Beschreibung von üblichen nicht-idempotenten Methoden: {{HTTPMethod("POST")}}, {{HTTPMethod("PATCH")}}, {{HTTPMethod("CONNECT")}}
