---
title: Sec-WebSocket-Extensions
slug: Web/HTTP/Headers/Sec-WebSocket-Extensions
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{HTTPSidebar}}

Der **Sec-WebSocket-Extensions** HTTP-{{glossary("request header", "Request-Header")}} und {{glossary("response header", "Antwort-Header")}} wird im [WebSocket](/de/docs/Web/API/WebSockets_API)-Öffnungshandshake verwendet, um eine Protokollerweiterung auszuhandeln, die vom Client und Server verwendet wird.

In einer Anfrage gibt der Header eine oder mehrere Erweiterungen an, die die Webanwendung verwenden möchte, in der Reihenfolge der Präferenz.
Diese können als mehrere Header hinzugefügt oder als kommagetrennte Werte zu einem einzigen Header hinzugefügt werden.

In einer Antwort kann der Header nur einmal erscheinen, wobei er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung spezifiziert.
Dieser Wert muss die erste vom Server unterstützte Erweiterung aus der im Anforderungs-Header bereitgestellten Liste sein.

Der Anforderungs-Header wird automatisch vom Browser basierend auf seinen eigenen Fähigkeiten hinzugefügt und hängt nicht von Parametern ab, die dem Konstruktor beim Erstellen des `WebSocket` übergeben werden.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Request header")}}, {{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name", "Verbotener Headername")}}</th>
      <td>ja</td>
    </tr>
  </tbody>
</table>

## Syntax

Anfrage

```http
Sec-WebSocket-Extensions: <extensions>
```

Antwort

```http
Sec-WebSocket-Extensions: <selected-extension>
```

## Direktiven

- `<extensions>`
  - : Eine kommagetrennte Liste von Erweiterungen, die angefordert werden sollen (oder die der Server zu unterstützen zustimmt).
    Diese sollten aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden.
    Erweiterungen, die Parameter annehmen, trennen diese mit Semikolons.

## Beispiele

Die unten stehende HTTP-Anfrage zeigt das Öffnungshandshake, bei dem ein Client die Erweiterungen `permessage-deflate` und `client_max_window_bits` unterstützt.

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate; client_max_window_bits
```

Die nachfolgende Anfrage mit separaten Headern für jede Erweiterung ist äquivalent:

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
Sec-WebSocket-Extensions: permessage-deflate
Sec-WebSocket-Extensions: client_max_window_bits
```

Die unten stehende Antwort könnte von einem Server gesendet werden, um anzuzeigen, dass er die `permessage-deflate` Erweiterung unterstützen wird:

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
Sec-WebSocket-Extensions: permessage-deflate
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-WebSocket-Accept")}}
- {{HTTPHeader("Sec-WebSocket-Key")}}
- {{HTTPHeader("Sec-WebSocket-Version")}}
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
- [Das WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) und [Subprotokolle](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#subprotocols) in _Writing WebSocket servers_
