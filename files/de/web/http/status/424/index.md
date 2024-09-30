---
title: 424 Failed Dependency
slug: Web/HTTP/Status/424
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`424 Failed Dependency`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) gibt an, dass die Methode nicht auf der Ressource ausgeführt werden konnte, weil die angeforderte Aktion von einer anderen Aktion abhing und diese andere Aktion fehlgeschlagen ist.

Normale Webserver geben diesen Statuscode normalerweise nicht zurück, aber einige Protokolle wie [WebDAV](/de/docs/Glossary/WebDAV) können ihn zurückgeben.
Zum Beispiel kann in [WebDAV](/de/docs/Glossary/WebDAV) eine `PROPPATCH`-Anfrage, bei der ein Befehl fehlschlägt, automatisch dazu führen, dass alle anderen Befehle ebenfalls mit `424 Failed Dependency` fehlschlagen.

## Status

```http
424 Failed Dependency
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("403")}} (Verboten)
- {{HTTPStatus("501", "501 Not Implemented")}}, {{HTTPStatus("510", "510 Not Extended")}}
