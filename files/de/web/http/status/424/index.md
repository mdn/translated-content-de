---
title: 424 Fehlgeschlagene Abhängigkeit
slug: Web/HTTP/Status/424
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`424 Failed Dependency`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Status#client_error_responses) zeigt an, dass die Methode nicht auf die Ressource angewendet werden konnte, da die angeforderte Aktion von einer anderen Aktion abhing und diese Aktion fehlschlug.

Normale Webserver geben diesen Statuscode normalerweise nicht zurück, aber einige Protokolle wie {{Glossary("WebDAV")}} können ihn zurückgeben. Zum Beispiel, in {{Glossary("WebDAV")}}, wenn ein `PROPPATCH`-Antrag gestellt wurde und ein Befehl fehlschlägt, dann wird automatisch jeder andere Befehl ebenfalls mit `424 Failed Dependency` fehlschlagen.

## Status

```http
424 Failed Dependency
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Status)
- {{HTTPStatus("403")}} (Forbidden)
- {{HTTPStatus("501", "501 Not Implemented")}}, {{HTTPStatus("510", "510 Not Extended")}}
