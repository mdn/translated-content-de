---
title: Idempotent
slug: Glossary/Idempotent
l10n:
  sourceCommit: 99d723c4f77d7f537292a07dd7b5e5c13cb610da
---

Eine HTTP-Methode ist **idempotent**, wenn die beabsichtigte Wirkung auf den Server bei einer einzigen Anfrage dieselbe ist wie bei mehreren identischen Anfragen.

Die HTTP-Spezifikation definiert mehrere HTTP-Methoden und deren Semantik, einschließlich der Frage, ob sie idempotent sind oder nicht. Alle {{Glossary("Safe/HTTP", "sicheren")}} Methoden sind idempotent, ebenso {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}}. Die Methoden {{HTTPMethod("POST")}} und {{HTTPMethod("PATCH")}} sind nicht garantiert idempotent.

Ein Client kann sicher eine Anfrage mit einer idempotenten Methode wiederholen, zum Beispiel in Fällen, in denen Zweifel bestehen, ob die Anfrage den Server erreicht hat. Wenn mehrere identische Anfragen den Server erreichen, entsteht kein Schaden, solange die Methode idempotent ist.

Die HTTP-Spezifikation definiert Idempotenz nur in Bezug auf die _beabsichtigte_ Wirkung des Clients auf den Server. Zum Beispiel beabsichtigt eine `POST`-Anfrage, Daten an den Server zu senden, während eine `DELETE`-Anfrage beabsichtigt, eine Ressource auf dem Server zu löschen. In der Praxis liegt es am Server sicherzustellen, dass die von ihm bereitgestellten Routen diesen Semantiken entsprechen.

> [!NOTE]
> Obwohl es für Server sehr empfohlen wird, sich an die durch die HTTP-Spezifikation festgelegten Semantiken zu halten, legt die Spezifikation dies nicht zwingend fest. Nichts hindert einen Server „in freier Wildbahn“ daran, einen nicht-idempotenten Endpunkt unter einer idempotenten HTTP-Methode bereitzustellen, auch wenn dies für Clients überraschend sein mag.

Ebenso zu beachten:

- Eine Anfrage mit einer idempotenten Methode bedeutet nicht notwendigerweise, dass die Anfrage _keine_ Nebenwirkungen auf dem Server hat, sondern nur, dass der Client keine beabsichtigte: Zum Beispiel könnte der Server die Uhrzeit der Ankunft jeder Anfrage protokollieren.
- Die Reaktion auf jede Anfrage kann unterschiedlich sein: Zum Beispiel liefert der erste Aufruf eines {{HTTPMethod("DELETE")}} wahrscheinlich einen {{HTTPStatus("200")}}, während nachfolgende Aufrufe wahrscheinlich einen {{HTTPStatus("404")}} liefern.

## Beispiele

`GET /pageX HTTP/1.1` ist idempotent, weil es sich um eine sichere (nur-lesende) Methode handelt. Aufeinanderfolgende Anrufe können unterschiedliche Daten zurückgeben, wenn die Daten auf dem Server in der Zwischenzeit aktualisiert wurden.

`POST /add_row HTTP/1.1` ist nicht idempotent; wenn sie mehrmals aufgerufen wird, fügt sie mehrere Zeilen hinzu:

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
- Beschreibung der gängigen idempotenten Methoden: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}
- Beschreibung der gängigen nicht-idempotenten Methoden: {{HTTPMethod("POST")}}, {{HTTPMethod("PATCH")}}, {{HTTPMethod("CONNECT")}}
