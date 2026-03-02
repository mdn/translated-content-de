---
title: Unbekannter Befehl
slug: Web/WebDriver/Reference/Errors/UnknownCommand
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Der Fehler **unbekannter Befehl** ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn der Treiber den Befehl/HTTP-Endpunkt nicht erkennt.

## Beispiele

Der Endpunkt `/session/{session id}/foo` existiert nicht und wird einen unbekannten Befehlsfehler mit einem [`404 Not Found`](/de/docs/Web/HTTP/Reference/Status/404) HTTP-Statuscode zurückgeben:

```bash
curl -i -d '{}' http://localhost:4444/session/foo
```

```http
HTTP/1.1 404 Not Found
Connection: close
Content-Type: application/json; charset=utf-8
Cache-Control: no-cache
Content-Length: 113
Date: Fri, 30 Mar 2018 15:30:51 GMT

{"value":{"error":"unknown command","message":"POST /session/asd did not match a known command","stacktrace":""}}
```

## Siehe auch

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors)
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)
