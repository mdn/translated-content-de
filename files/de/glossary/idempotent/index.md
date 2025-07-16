---
title: Idempotent
slug: Glossary/Idempotent
l10n:
  sourceCommit: 12ec796bd2b29aa50565556492c39d58e275e633
---

Eine HTTP-Methode ist **idempotent**, wenn die beabsichtigte Wirkung auf dem Server bei einer einzelnen Anfrage die gleiche ist wie bei mehreren identischen Anfragen.

Die HTTP-Spezifikation definiert mehrere HTTP-Methoden und deren Semantik, einschließlich der Frage, ob sie idempotent sind oder nicht. Alle {{Glossary("Safe/HTTP", "sicheren")}} Methoden sowie {{HTTPMethod("PUT")}} und {{HTTPMethod("DELETE")}} sind idempotent. Die {{HTTPMethod("POST")}}- und {{HTTPMethod("PATCH")}}-Methoden sind nicht garantiert idempotent.

Ein Client kann eine Anfrage, die eine idempotente Methode verwendet, sicher erneut senden, beispielsweise in Fällen, in denen unklar ist, ob die Anfrage den Server erreicht hat. Wenn mehrere identische Anfragen den Server erreichen, entsteht bei einer idempotenten Methode kein Schaden.

Die HTTP-Spezifikation definiert Idempotenz nur in Bezug auf die _beabsichtigte_ Wirkung des Clients auf den Server. Zum Beispiel beabsichtigt eine `POST`-Anfrage, Daten an den Server zu senden, während eine `DELETE`-Anfrage beabsichtigt, eine Ressource auf dem Server zu löschen. In der Praxis obliegt es dem Server sicherzustellen, dass die von ihm bereitgestellten Routen dieser Semantik entsprechen.

> [!NOTE]
> Auch wenn Server sehr dazu ermutigt werden, sich an die in der HTTP-Spezifikation dargelegten Semantiken zu halten, wird es von der Spezifikation nicht vorgeschrieben. Nichts hindert einen Server in freier Wildbahn daran, einen nicht idempotenten Endpunkt unter einer idempotenten HTTP-Methode bereitzustellen, obwohl dies die Clients überraschen könnte.

Bitte beachten Sie auch:

- Eine Anfrage mit einer idempotenten Methode bedeutet nicht notwendigerweise, dass die Anfrage _keine_ Nebenwirkungen auf dem Server hat, sondern nur, dass der Client keine beabsichtigte: Beispielsweise könnte der Server die Zeit protokollieren, zu der jede Anfrage eingegangen ist.
- Die von jeder Anfrage zurückgegebene Antwort kann unterschiedlich sein: Zum Beispiel wird der erste Aufruf eines {{HTTPMethod("DELETE")}} wahrscheinlich einen {{HTTPStatus("200")}} zurückgeben, während nachfolgende Aufrufe wahrscheinlich einen {{HTTPStatus("404")}} zurückgeben werden.

## Beispiele

`GET /pageX HTTP/1.1` ist idempotent, da es sich um eine sichere (nur lesbare) Methode handelt. Aufeinanderfolgende Aufrufe können dem Client unterschiedliche Daten zurückgeben, wenn die Daten auf dem Server inzwischen aktualisiert wurden.

`POST /add_row HTTP/1.1` ist nicht idempotent; wenn sie mehrmals aufgerufen wird, fügt sie mehrere Zeilen hinzu:

```http
POST /add_row HTTP/1.1
POST /add_row HTTP/1.1   -> Adds a 2nd row
POST /add_row HTTP/1.1   -> Adds a 3rd row
```

`DELETE /idX/delete HTTP/1.1` ist idempotent, auch wenn der zurückgegebene Statuscode sich zwischen den Anfragen ändern kann:

```http
DELETE /idX/delete HTTP/1.1   -> Returns 200 if idX exists
DELETE /idX/delete HTTP/1.1   -> Returns 404 as it just got deleted
DELETE /idX/delete HTTP/1.1   -> Returns 404
```

## Siehe auch

- Definition von [idempotent](https://httpwg.org/specs/rfc9110.html#idempotent.methods) in der HTTP-Spezifikation.
- Beschreibung häufiger idempotenter Methoden: {{HTTPMethod("GET")}}, {{HTTPMethod("HEAD")}}, {{HTTPMethod("PUT")}}, {{HTTPMethod("DELETE")}}, {{HTTPMethod("OPTIONS")}}, {{HTTPMethod("TRACE")}}
- Beschreibung häufiger nicht-idempotenter Methoden: {{HTTPMethod("POST")}}, {{HTTPMethod("PATCH")}}, {{HTTPMethod("CONNECT")}}
