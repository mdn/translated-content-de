---
title: Unbekannter Befehl
slug: Web/WebDriver/Errors/UnknownCommand
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Errors")}}

Der Fehler **unbekannter Befehl** ist ein [WebDriver-Fehler](/de/docs/Web/WebDriver/Errors), der auftritt, wenn der Treiber den Befehl/HTTP-Endpunkt nicht erkennt.

## Beispiele

Der Endpunkt `/session/{session id}/foo` existiert nicht und wird einen Fehler für einen unbekannten Befehl mit dem HTTP-Statuscode [`404 Not Found`](/de/docs/Web/HTTP/Status/404) zurückgeben:

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

- [Liste der WebDriver-Fehler](/de/docs/Web/WebDriver/Errors)
- [Liste der WebDriver-Befehle](/de/docs/Web/WebDriver/Commands)