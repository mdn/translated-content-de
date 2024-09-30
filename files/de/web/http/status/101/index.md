---
title: 101 Switching Protocols
slug: Web/HTTP/Status/101
l10n:
  sourceCommit: 718c0595a624add5e009ca4ec5266b77f8d14243
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`101 Switching Protocols`** [informational response](/de/docs/Web/HTTP/Status#information_responses) gibt das Protokoll an, zu dem ein Server gewechselt hat.
Das Protokoll wird im {{HTTPHeader("Upgrade")}}-Header der Anfrage angegeben, die vom Client empfangen wurde.

Der Server fügt einen {{HTTPHeader("Upgrade")}}-Header in diese Antwort ein, um das Protokoll anzuzeigen, dem er zugestimmt hat zu wechseln.
Der Prozess wird im [Leitfaden zum Protokollwechselmechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism) ausführlich beschrieben.

## Status

```http
101 Switching Protocols
```

## Beispiele

### Wechsel zu WebSockets

Das folgende Beispiel zeigt, wie ein Protokollwechsel mit [WebSockets](/de/docs/Web/API/WebSockets_API) verwendet werden kann.
Ein Client sendet eine {{HTTPMethod("GET")}}-HTTP-Anfrage mit einem {{HTTPHeader("Upgrade")}}-Header, der ebenfalls im {{HTTPHeader("Connection")}}-Header aufgeführt sein muss.
Der Server stimmt dem Protokollwechsel zu, indem er mit einer 101-Antwort antwortet, was bedeutet, dass die Verbindung von HTTP zu WebSocket gewechselt hat.
Ab diesem Punkt können Client und Server nun WebSocket-Daten austauschen.
Informationen darüber, wie `Sec-WebSocket-*`-Header für das Handshake-Verfahren gesetzt werden können, finden Sie in den [WebSocket-spezifischen Headers](/de/docs/Web/HTTP/Protocol_upgrade_mechanism#websocket-specific_headers).

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

- [Leitfaden zum Protokollwechselmechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [WebSockets](/de/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426", "426 Upgrade Required")}}
