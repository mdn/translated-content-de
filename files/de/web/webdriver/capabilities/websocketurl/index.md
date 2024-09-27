---
title: webSocketUrl
slug: Web/WebDriver/Capabilities/webSocketUrl
l10n:
  sourceCommit: ac24a64c0ab26d0185c7b768aca130f490ea8487
---

{{QuickLinksWithSubpages("/de/docs/Web/WebDriver/Capabilities")}}

Mit der Fähigkeit `webSocketUrl` auf `true` wird ein WebSocket-Server im Browser gestartet, der durch das Verwenden des [WebDriver BiDi-Protokolls](https://w3c.github.io/webdriver-bidi/) bidirektionale Kommunikation unterstützt. Wenn die [New Session](/de/docs/Web/WebDriver/Commands/NewSession)-Anfrage die Fähigkeit `webSocketUrl` auf `true` gesetzt hat und die Sitzung erfolgreich gestartet wird, hat das Feld `capabilities` in der Antwort eine `webSocketUrl`-Eigenschaft, die auf die URL des WebSocket-Servers gesetzt ist.

## Beispiel

Anfordern der WebSocket-URL, indem die Fähigkeit `webSocketUrl` auf `true` gesetzt wird:

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

- [Liste der WebDriver-Fähigkeiten](/de/docs/Web/WebDriver/Capabilities)
- [New Session](/de/docs/Web/WebDriver/Commands/NewSession)-Befehl
- [Herstellen einer WebDriver BiDi-Verbindung](https://w3c.github.io/webdriver-bidi/#establishing)
