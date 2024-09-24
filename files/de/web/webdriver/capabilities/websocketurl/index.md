---
title: webSocketUrl
slug: Web/WebDriver/Capabilities/webSocketUrl
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Capabilities")}}

Wenn die `webSocketUrl` Fähigkeit auf `true` gesetzt ist, wird im Browser ein WebSocket-Server gestartet, der bidirektionale Kommunikation mit dem [WebDriver BiDi-Protokoll](https://w3c.github.io/webdriver-bidi/) unterstützt. Wenn die [Neue Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) Anfrage die `webSocketUrl` Fähigkeit auf `true` gesetzt hat und die Sitzung erfolgreich startet, wird der Wert des `capabilities`-Feldes in der Antwort eine `webSocketUrl` Eigenschaft enthalten, die auf die URL des WebSocket-Servers gesetzt ist.

## Beispiel

Anforderen der WebSocket URL durch Setzen der `webSocketUrl` Fähigkeit auf `true`:

Anforderung:

```http
POST /session HTTP/1.1
{"capabilities": {"alwaysMatch": {"webSocketUrl": true}}}
```

Antwort:

```json
{"value":{"capabilities":{"webSocketUrl":"ws://localhost:9222/session/571f206f-c3fe-794c-9218-77fa89595eb9", [..]}, "sessionId":"571f206f-c3fe-794c-9218-77fa89595eb9"}}
```

## Siehe auch

- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Capabilities)
- [Neue Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) Befehl
- [Herstellung einer WebDriver BiDi-Verbindung](https://w3c.github.io/webdriver-bidi/#establishing)
