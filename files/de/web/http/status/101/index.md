---
title: 101 Switching Protocols
slug: Web/HTTP/Status/101
l10n:
  sourceCommit: 718c0595a624add5e009ca4ec5266b77f8d14243
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`101 Switching Protocols`** [Informationsantwort](/de/docs/Web/HTTP/Status#information_responses) zeigt das Protokoll an, zu dem ein Server gewechselt hat.
Das Protokoll wird im {{HTTPHeader("Upgrade")}}-Request-Header angegeben, der von einem Client empfangen wurde.

Der Server schließt einen {{HTTPHeader("Upgrade")}}-Header in diese Antwort ein, um das Protokoll anzugeben, zu dem er zugestimmt hat zu wechseln.
Der Prozess wird ausführlich im [Leitfaden zum Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism) beschrieben.

## Status

```http
101 Switching Protocols
```

## Beispiele

### Wechsel der Protokolle zu WebSockets

Das folgende Beispiel zeigt, wie das Wechseln von Protokollen mit [WebSockets](/de/docs/Web/API/WebSockets_API) verwendet werden könnte.
Ein Client sendet einen HTTP-{{HTTPMethod("GET")}}-Request mit einem {{HTTPHeader("Upgrade")}}-Header, der auch im {{HTTPHeader("Connection")}}-Header aufgelistet werden muss.
Der Server stimmt zu, die Protokolle zu wechseln, und gibt eine 101-Antwort zurück, was bedeutet, dass die Verbindung von HTTP zu WebSocket gewechselt hat.
An diesem Punkt können Client und Server nun beginnen, WebSocket-Daten auszutauschen.
Informationen darüber, wie `Sec-WebSocket-*`-Header für die Handshake-Aushandlung gesetzt werden können, finden Sie in den [WebSocket-spezifischen Headern](/de/docs/Web/HTTP/Protocol_upgrade_mechanism#websocket-specific_headers).

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

- [Leitfaden zum Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [WebSockets](/de/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426", "426 Upgrade Required")}}
