---
title: webSocketUrl
slug: Web/WebDriver/Reference/Capabilities/webSocketUrl
l10n:
  sourceCommit: 676631fd27c8096c3ae3ceb2a6b4ffd6f687055f
---

Mit der `webSocketUrl`-Fähigkeit auf `true` wird ein WebSocket-Server im Browser gestartet, der bidirektionale Kommunikation durch das [WebDriver BiDi-Protokoll](https://w3c.github.io/webdriver-bidi/) unterstützt.
Wenn die [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession)-Anfrage die `webSocketUrl`-Fähigkeit auf `true` gesetzt hat und die Sitzung erfolgreich startet, wird der Wert des `capabilities`-Feldes in der Antwort eine `webSocketUrl`-Eigenschaft enthalten, die auf die URL des WebSocket-Servers gesetzt ist.

## Beispiel

Anfordern der WebSocket-URL durch Setzen der `webSocketUrl`-Fähigkeit auf `true`:

Anfrage:

```http
POST /session HTTP/1.1
{"capabilities": {"alwaysMatch": {"webSocketUrl": true}}}
```

Antwort:

```json
{
  "value": {
    "capabilities": {
      "webSocketUrl": "ws://localhost:9222/session/571f206f-c3fe-794c-9218-77fa89595eb9"
    },
    "sessionId": "571f206f-c3fe-794c-9218-77fa89595eb9"
  }
}
```

## Siehe auch

- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
- Befehl [Neue Sitzung](/de/docs/Web/WebDriver/Reference/Commands/NewSession)
- [Aufbau einer WebDriver BiDi-Verbindung](https://w3c.github.io/webdriver-bidi/#establishing)
