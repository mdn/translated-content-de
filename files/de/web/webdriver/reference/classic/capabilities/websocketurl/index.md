---
title: webSocketUrl
slug: Web/WebDriver/Reference/Classic/Capabilities/webSocketUrl
l10n:
  sourceCommit: 225de04b84b717433ffeb3bb0cf5ceddac9653ea
---

Wenn die `webSocketUrl`-Fähigkeit auf `true` gesetzt ist, wird im Browser ein WebSocket-Server gestartet, der bidirektionale Kommunikation mithilfe des [WebDriver BiDi-Protokolls](https://w3c.github.io/webdriver-bidi/) unterstützt. Wenn die [New Session](/de/docs/Web/WebDriver/Reference/Commands/NewSession)-Anfrage die `webSocketUrl`-Fähigkeit auf `true` gesetzt hat und die Sitzung erfolgreich startet, wird der Wert des `capabilities`-Felds im Antwortobjekt eine `webSocketUrl`-Eigenschaft mit der URL des WebSocket-Servers enthalten.

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

- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Classic/Capabilities)
- [New Session](/de/docs/Web/WebDriver/Reference/Commands/NewSession)-Befehl
- [Herstellen einer WebDriver BiDi-Verbindung](https://w3c.github.io/webdriver-bidi/#establishing)
