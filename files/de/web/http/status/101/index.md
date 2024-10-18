---
title: 101 Switching Protocols
slug: Web/HTTP/Status/101
l10n:
  sourceCommit: bd4d7bc4176d9f67297e3940ae7163a258f07ef5
---

{{HTTPSidebar}}

Der HTTP-Statuscode **`101 Switching Protocols`** [informational response](/de/docs/Web/HTTP/Status#informational_responses) zeigt an, zu welchem Protokoll ein Server gewechselt hat.
Das Protokoll wird im {{HTTPHeader("Upgrade")}}-Anforderungsheader angegeben, der von einem Client empfangen wird.

Der Server fügt einen {{HTTPHeader("Upgrade")}}-Header in diese Antwort ein, um das Protokoll anzuzeigen, zu dem er zugestimmt hat, zu wechseln.
Der Prozess wird ausführlich im [Leitfaden zum Protokollwechselmechanismus](/de/docs/Web/HTTP/Protocol_upgrade_mechanism) beschrieben.

## Status

```http
101 Switching Protocols
```

## Beispiele

### Wechsel der Protokolle zu WebSockets

Das folgende Beispiel zeigt, wie der Wechsel der Protokolle mit [WebSockets](/de/docs/Web/API/WebSockets_API) verwendet werden könnte.
Ein Client sendet eine {{HTTPMethod("GET")}} HTTP-Anfrage mit einem {{HTTPHeader("Upgrade")}}-Header, der ebenfalls im {{HTTPHeader("Connection")}}-Header aufgeführt sein muss.
Der Server stimmt dem Protokollwechsel zu und gibt eine 101-Antwort zurück, was bedeutet, dass die Verbindung von HTTP zu WebSocket gewechselt hat.
An diesem Punkt können der Client und der Server nun beginnen, WebSocket-Daten auszutauschen.
Informationen darüber, wie man `Sec-WebSocket-*`-Header für das Aushandeln eines Handshakes festlegt, finden Sie in den [WebSocket-spezifischen Headern](/de/docs/Web/HTTP/Protocol_upgrade_mechanism#websocket-specific_headers).

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
