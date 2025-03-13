---
title: 424 Failed Dependency
slug: Web/HTTP/Reference/Status/424
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`424 Failed Dependency`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass die Methode nicht auf der Ressource ausgeführt werden konnte, da die angeforderte Aktion von einer anderen Aktion abhing und diese fehlgeschlagen ist.

Normale Webserver geben diesen Statuscode in der Regel nicht zurück, aber einige Protokolle wie {{Glossary("WebDAV", "WebDAV")}} können ihn zurückgeben.
Zum Beispiel in {{Glossary("WebDAV", "WebDAV")}}, wenn ein `PROPPATCH`-Antrag gestellt wurde und ein Befehl fehlschlägt, werden automatisch alle anderen Befehle mit `424 Failed Dependency` ebenfalls fehlschlagen.

## Status

```http
424 Failed Dependency
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [HTTP-Antwortstatuscodes](/de/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("403")}} (Forbidden)
- {{HTTPStatus("501", "501 Not Implemented")}}, {{HTTPStatus("510", "510 Not Extended")}}
