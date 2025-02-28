---
title: webSocketUrl
slug: Web/WebDriver/Reference/Capabilities/webSocketUrl
l10n:
  sourceCommit: 57b855a52a2d2e8914a30e3a47567bff0806ae23
---

Wenn die `webSocketUrl`-Fähigkeit auf `true` gesetzt ist, wird ein WebSocket-Server im Browser gestartet, der bidirektionale Kommunikation mithilfe des [WebDriver BiDi-Protokolls](https://w3c.github.io/webdriver-bidi/) unterstützt.
Wenn die [Neue Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) Anforderung die `webSocketUrl`-Fähigkeit auf `true` gesetzt hat und die Sitzung erfolgreich startet, hat das `capabilities`-Feld in der Antwort eine `webSocketUrl`-Eigenschaft, die auf die URL des WebSocket-Servers gesetzt ist.

## Beispiel

Anfordern der WebSocket-URL durch Setzen der `webSocketUrl`-Fähigkeit auf `true`:

Anfrage:

```http
POST /session HTTP/1.1
{"capabilities": {"alwaysMatch": {"webSocketUrl": true}}}
```

Antwort:

```json
{"value":{"capabilities":{"webSocketUrl":"ws://localhost:9222/session/571f206f-c3fe-794c-9218-77fa89595eb9", [..]}, "sessionId":"571f206f-c3fe-794c-9218-77fa89595eb9"}}
```

## Siehe auch

- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Reference/Capabilities)
- [Neue Sitzung](/de/docs/Web/WebDriver/Commands/NewSession) Befehl
- [Etablierung einer WebDriver BiDi-Verbindung](https://w3c.github.io/webdriver-bidi/#establishing)
