---
title: 101 Protokolle wechseln
slug: Web/HTTP/Status/101
l10n:
  sourceCommit: 718c0595a624add5e009ca4ec5266b77f8d14243
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`101 Switching Protocols`** [informationsantwort](/de/docs/Web/HTTP/Status#information_responses) gibt das Protokoll an, zu dem ein Server gewechselt hat.
Das Protokoll wird im {{HTTPHeader("Upgrade")}}-Kopfzeilenfeld der Anforderung eines Clients angegeben.

Der Server fügt dieser Antwort eine {{HTTPHeader("Upgrade")}}-Kopfzeile hinzu, um das Protokoll anzugeben, zu dem zu wechseln zugestimmt wurde.
Der Prozess wird im Detail im Leitfaden zum [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism) beschrieben.

## Status

```http
101 Switching Protocols
```

## Beispiele

### Wechseln von Protokollen zu WebSockets

Das folgende Beispiel zeigt, wie das Wechseln von Protokollen mit [WebSockets](/de/docs/Web/API/WebSockets_API) verwendet werden kann.
Ein Client sendet eine {{HTTPMethod("GET")}} HTTP-Anforderung mit einer {{HTTPHeader("Upgrade")}}-Kopfzeile, die auch in der {{HTTPHeader("Connection")}}-Kopfzeile aufgeführt sein muss.
Der Server stimmt zu, das Protokoll zu wechseln, und gibt eine 101-Antwort zurück, was bedeutet, dass die Verbindung von HTTP zu WebSocket gewechselt hat.
An diesem Punkt können der Client und der Server nun beginnen, WebSocket-Daten auszutauschen.
Informationen zum Setzen von `Sec-WebSocket-*`-Kopfzeilen für die Handshake-Verhandlung finden Sie in den [WebSocket-spezifischen Kopfzeilen](/de/docs/Web/HTTP/Protocol_upgrade_mechanism#websocket-specific_headers).

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

- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism)
- [WebSockets](/de/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426", "426 Upgrade Required")}}
