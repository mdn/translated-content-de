---
title: webSocketUrl
slug: Web/WebDriver/Reference/Capabilities/webSocketUrl
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

Mit der Einstellung der `webSocketUrl` Fähigkeit auf `true` wird im Browser ein WebSocket-Server gestartet, der eine bidirektionale Kommunikation durch das [WebDriver BiDi-Protokoll](https://w3c.github.io/webdriver-bidi/) unterstützt.
Wenn die [New Session](/de/docs/Web/WebDriver/Reference/Commands/NewSession) Anfrage die `webSocketUrl` Fähigkeit auf `true` gesetzt hat und die Sitzung erfolgreich startet, wird im Wert des `capabilities` Feldes in der Antwort eine `webSocketUrl` Eigenschaft mit der URL des WebSocket-Servers angegeben sein.

## Beispiel

Anfordern der WebSocket-URL, indem die `webSocketUrl` Fähigkeit auf `true` gesetzt wird:

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
- [New Session](/de/docs/Web/WebDriver/Reference/Commands/NewSession) Befehl
- [Establishing a WebDriver BiDi connection](https://w3c.github.io/webdriver-bidi/#establishing)
