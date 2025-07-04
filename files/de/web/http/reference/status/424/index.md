---
title: 424 Failed Dependency
slug: Web/HTTP/Reference/Status/424
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP-Statuscode **`424 Failed Dependency`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass die Methode nicht auf die Ressource angewendet werden konnte, weil die angeforderte Aktion von einer anderen Aktion abhing und diese Aktion fehlgeschlagen ist.

Reguläre Webserver geben diesen Statuscode normalerweise nicht zurück, aber einige Protokolle wie {{Glossary("WebDAV", "WebDAV")}} können ihn zurückgeben. Zum Beispiel in {{Glossary("WebDAV", "WebDAV")}}, wenn eine `PROPPATCH`-Anfrage gestellt wurde und ein Befehl fehlschlägt, dann schlagen automatisch auch alle anderen Befehle mit `424 Failed Dependency` fehl.

## Status

```http
424 Failed Dependency
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Statuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("403")}} (Forbidden)
- {{HTTPStatus("501", "501 Not Implemented")}}, {{HTTPStatus("510", "510 Not Extended")}}
