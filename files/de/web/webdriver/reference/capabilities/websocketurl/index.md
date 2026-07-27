---
title: webSocketUrl
slug: Web/WebDriver/Reference/Capabilities/webSocketUrl
l10n:
  sourceCommit: fb6aa6056407ba69d96da0fe140a1ae2320f0fb2
---

Wenn die `webSocketUrl`-Fähigkeit auf `true` gesetzt ist, wird ein WebSocket-Server im Browser gestartet, der bidirektionale Kommunikation durch das [WebDriver BiDi-Protokoll](https://w3c.github.io/webdriver-bidi/) unterstützt. Wenn die [New Session](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)-Anfrage die `webSocketUrl`-Fähigkeit auf `true` gesetzt hat und die Sitzung erfolgreich gestartet wird, wird der Wert des `capabilities`-Felds in der Antwort eine `webSocketUrl`-Eigenschaft enthalten, die auf die URL des WebSocket-Servers gesetzt ist.

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
- [New Session](/de/docs/Web/WebDriver/Reference/Classic/Commands/NewSession)-Befehl
- [Establishing a WebDriver BiDi connection](https://w3c.github.io/webdriver-bidi/#establishing)
