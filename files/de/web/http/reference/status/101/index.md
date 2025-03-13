---
title: 101 Switching Protocols
slug: Web/HTTP/Reference/Status/101
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`101 Switching Protocols`** für [informative Antworten](/de/docs/Web/HTTP/Reference/Status#informational_responses) gibt an, welches Protokoll von einem Server gewechselt wurde. Das Protokoll wird im {{HTTPHeader("Upgrade")}}-Header der Anfrage angegeben, die von einem Client empfangen wurde.

Der Server fügt einen {{HTTPHeader("Upgrade")}}-Header in diese Antwort ein, um das Protokoll anzugeben, auf das er sich bereit erklärt hat, zu wechseln. Der Prozess wird detailliert im [Protokollwechselmechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)-Leitfaden beschrieben.

## Status

```http
101 Switching Protocols
```

## Beispiele

### Wechsel der Protokolle zu WebSockets

Das folgende Beispiel zeigt, wie der Wechsel der Protokolle mit [WebSockets](/de/docs/Web/API/WebSockets_API) verwendet werden kann. Ein Client sendet eine {{HTTPMethod("GET")}}-HTTP-Anfrage mit einem {{HTTPHeader("Upgrade")}}-Header, der auch im {{HTTPHeader("Connection")}}-Header aufgeführt sein muss. Der Server stimmt dem Protokollwechsel zu und gibt eine 101-Antwort zurück, was bedeutet, dass die Verbindung von HTTP zu WebSocket gewechselt hat. An diesem Punkt können Client und Server nun mit dem Austausch von WebSocket-Daten beginnen. Informationen darüber, wie `Sec-WebSocket-*`-Header für die Handshake-Aushandlung gesetzt werden, finden Sie in den [WebSocket-spezifischen Headers](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#websocket-specific_headers).

```http
GET /notifications HTTP/1.1
Host: example.com
Upgrade: websocket
Connection: Upgrade
```

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
```

## Spezifikationen

{{Specifications}}

## Siehe auch

- [Protokollwechselmechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [WebSockets](/de/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426", "426 Upgrade Required")}}
