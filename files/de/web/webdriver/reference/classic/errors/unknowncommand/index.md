---
title: Unbekannter Befehl
slug: Web/WebDriver/Reference/Classic/Errors/UnknownCommand
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Der Fehler **unbekannter Befehl** ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Classic/Errors), der auftritt, wenn der Treiber den Befehl/HTTP-Endpunkt nicht erkennt.

## Beispiele

Der Endpunkt `/session/{session id}/foo` existiert nicht und wird einen Fehler für unbekannten Befehl mit einem [`404 Not Found`](/de/docs/Web/HTTP/Reference/Status/404) HTTP-Statuscode zurückgeben:

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

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Classic/Errors)
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Classic/Commands)
