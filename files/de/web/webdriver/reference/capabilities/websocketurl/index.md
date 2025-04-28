---
title: webSocketUrl
slug: Web/WebDriver/Reference/Capabilities/webSocketUrl
l10n:
  sourceCommit: c6cab7f1aa7dc9f3495486a5b46020db320101cf
---

Wenn die `webSocketUrl`-Fähigkeit auf `true` gesetzt ist, wird ein WebSocket-Server im Browser gestartet, der bidirektionale Kommunikation unter Verwendung des [WebDriver BiDi-Protokolls](https://w3c.github.io/webdriver-bidi/) unterstützt. Wenn die [New Session](/de/docs/Web/WebDriver/Reference/Commands/NewSession)-Anfrage die `webSocketUrl`-Fähigkeit auf `true` gesetzt hat und die Sitzung erfolgreich startet, enthält das `capabilities`-Feld im Antwortobjekt eine `webSocketUrl`-Eigenschaft, die auf die URL des WebSocket-Servers gesetzt ist.

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
- [New Session](/de/docs/Web/WebDriver/Reference/Commands/NewSession)-Befehl
- [Herstellen einer WebDriver BiDi-Verbindung](https://w3c.github.io/webdriver-bidi/#establishing)
