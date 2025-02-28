---
title: Unbekannter Befehl
slug: Web/WebDriver/Reference/Errors/UnknownCommand
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Der **unbekannte Befehl**-Fehler ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Reference/Errors), der auftritt, wenn der Treiber den Befehl/das HTTP-Endpunkt nicht erkennt.

## Beispiele

Der `/session/{session id}/foo`-Endpunkt existiert nicht und wird einen unbekannten Befehl-Fehler mit einem [`404 Not Found`](/de/docs/Web/HTTP/Status/404) HTTP-Statuscode zurückgeben:

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
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Reference/Commands)
