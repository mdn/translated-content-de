---
title: 424 Failed Dependency
slug: Web/HTTP/Reference/Status/424
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Der HTTP-Statuscode **`424 Failed Dependency`** [Client-Fehlerantwort](/de/docs/Web/HTTP/Reference/Status#client_error_responses) zeigt an, dass die Methode nicht auf die Ressource angewendet werden konnte, da die angeforderte Aktion von einer anderen Aktion abhängig war und diese fehlgeschlagen ist.

Reguläre Webserver geben in der Regel diesen Statuscode nicht zurück, aber einige Protokolle wie {{Glossary("WebDAV", "WebDAV")}} können ihn zurückgeben. Zum Beispiel in {{Glossary("WebDAV", "WebDAV")}}: Wenn eine `PROPPATCH`-Anfrage gestellt wird und ein Befehl fehlschlägt, werden automatisch alle anderen Befehle auch mit `424 Failed Dependency` fehlschlagen.

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
