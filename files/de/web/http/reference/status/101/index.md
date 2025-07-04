---
title: 101 Switching Protocols
slug: Web/HTTP/Reference/Status/101
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Der HTTP **`101 Switching Protocols`** [informational response](/de/docs/Web/HTTP/Reference/Status#informational_responses) Statuscode zeigt an, zu welchem Protokoll ein Server gewechselt hat.
Das Protokoll ist im {{HTTPHeader("Upgrade")}} Anfrage-Header enthalten, der von einem Client empfangen wird.

Der Server fügt diesen Antwort-Header {{HTTPHeader("Upgrade")}} hinzu, um das Protokoll anzugeben, zu dessen Wechsel er zugestimmt hat.
Der Prozess wird ausführlich im [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism) Leitfaden beschrieben.

## Status

```http
101 Switching Protocols
```

## Beispiele

### Wechsel der Protokolle zu WebSockets

Das folgende Beispiel zeigt, wie das Wechseln von Protokollen mit [WebSockets](/de/docs/Web/API/WebSockets_API) genutzt werden könnte.
Ein Client sendet eine {{HTTPMethod("GET")}} HTTP-Anfrage mit einem {{HTTPHeader("Upgrade")}} Header, der ebenfalls im {{HTTPHeader("Connection")}} Header aufgelistet sein muss.
Der Server stimmt zu, die Protokolle zu wechseln, und gibt eine 101 Antwort zurück, was bedeutet, dass die Verbindung von HTTP zu WebSocket gewechselt hat.
Zu diesem Zeitpunkt können Client und Server beginnen, WebSocket-Daten auszutauschen.
Informationen darüber, wie `Sec-WebSocket-*` Header für das Handshake-Negotiation gesetzt werden, finden Sie in [WebSocket-spezifische Header](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism#websocket-specific_headers).

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

- [Protokoll-Upgrade-Mechanismus](/de/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism)
- [WebSockets](/de/docs/Web/API/WebSockets_API)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("426", "426 Upgrade Required")}}
