---
title: Idempotent
slug: Glossary/Idempotent
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

Eine HTTP-Methode ist **idempotent**, wenn der beabsichtigte Effekt auf den Server bei einer einzelnen Anfrage derselbe ist wie der Effekt mehrerer identischer Anfragen.

Dies bedeutet nicht unbedingt, dass die Anfrage _keine_ einzigartigen Nebeneffekte hat: Zum Beispiel kann der Server jede Anfrage mit dem Zeitpunkt ihres Eingangs protokollieren. Idempotenz bezieht sich nur auf die vom Client beabsichtigten Effekte: Beispielsweise soll eine POST-Anfrage Daten an den Server senden, oder eine DELETE-Anfrage soll eine Ressource auf dem Server löschen.

Alle {{glossary("Safe/HTTP", "sicheren")}} Methoden sind idempotent, ebenso wie {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}. Die Methode {{HTTPMethod("POST")}} ist nicht idempotent.

Um idempotent zu sein, wird nur der Zustand des Servers berücksichtigt. Die von jeder Anfrage zurückgegebene Antwort kann unterschiedlich sein: Zum Beispiel wird der erste Aufruf eines {{HTTPMethod("DELETE")}} wahrscheinlich ein {{HTTPStatus("200")}} zurückgeben, während nachfolgende wahrscheinlich ein {{HTTPStatus("404")}} zurückgeben. Eine weitere Folge davon, dass {{HTTPMethod("DELETE")}} idempotent ist, ist, dass Entwickler keine RESTful-APIs mit einer _Letzter Eintrag löschen_-Funktionalität unter Verwendung der `DELETE`-Methode implementieren sollten.

Beachten Sie, dass die Idempotenz einer Methode nicht vom Server garantiert wird und einige Anwendungen möglicherweise die Idempotenzbedingung fälschlicherweise verletzen.

`GET /pageX HTTP/1.1` ist idempotent, weil es sich um eine sichere (nur-lesende) Methode handelt. Aufeinanderfolgende Aufrufe können unterschiedliche Daten an den Client zurückgeben, wenn die Daten auf dem Server in der Zwischenzeit aktualisiert wurden.

`POST /add_row HTTP/1.1` ist nicht idempotent; wenn es mehrmals aufgerufen wird, fügt es mehrere Zeilen hinzu:

```http
POST /add_row HTTP/1.1
POST /add_row HTTP/1.1   -> Fügt eine 2. Zeile hinzu
POST /add_row HTTP/1.1   -> Fügt eine 3. Zeile hinzu
```

`DELETE /idX/delete HTTP/1.1` ist idempotent, auch wenn der zurückgegebene Statuscode zwischen den Anfragen variieren kann:

```http
DELETE /idX/delete HTTP/1.1   -> Gibt 200 zurück, wenn idX existiert
DELETE /idX/delete HTTP/1.1   -> Gibt 404 zurück, da es gerade gelöscht wurde
DELETE /idX/delete HTTP/1.1   -> Gibt 404 zurück
```

## Siehe auch

- Definition von [idempotent](https://httpwg.org/specs/rfc9110.html#idempotent.methods) in der HTTP-Spezifikation.
- Beschreibung gängiger idempotenter Methoden: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}
- Beschreibung gängiger nicht-idempotenter Methoden: {{HTTPMethod("POST")}}, {{HTTPMethod("PATCH")}}, {{HTTPMethod("CONNECT")}}
