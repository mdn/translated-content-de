---
title: WebSocket API (WebSockets)
slug: Web/API/WebSockets_API
l10n:
  sourceCommit: b2f9c1e9e0f56bb2fd10262b0836603e10bcb4dc
---

{{DefaultAPISidebar("WebSockets API")}}{{AvailableInWorkers}}

Die **WebSocket API** ermöglicht es, eine bidirektionale interaktive Kommunikationssitzung zwischen dem Browser des Benutzers und einem Server zu eröffnen. Mit dieser API können Sie Nachrichten an einen Server senden und Antworten empfangen, ohne den Server auf eine Antwort anfragen zu müssen.

Die WebSocket API bietet zwei alternative Mechanismen für die Erstellung und Nutzung von WebSocket-Verbindungen: das [`WebSocket`](/de/docs/Web/API/WebSocket)-Interface und das [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Interface.

- Das `WebSocket`-Interface ist stabil und hat eine gute Unterstützung durch Browser und Server, unterstützt jedoch keinen [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure). Infolgedessen, wenn Nachrichten schneller ankommen, als die Anwendung sie verarbeiten kann, wird entweder der Gerätespeicher durch Puffern dieser Nachrichten gefüllt, es wird aufgrund 100%iger CPU-Auslastung nicht mehr ansprechbar oder beides.
- Das `WebSocketStream`-Interface ist eine {{jsxref("Promise")}}-basierte Alternative zu `WebSocket`. Es nutzt die [Streams API](/de/docs/Web/API/Streams_API) zur Verarbeitung des Empfangs und Sendens von Nachrichten, was bedeutet, dass Socket-Verbindungen automatisch von Stream-Backpressure profitieren können, indem die Lese- oder Schreibgeschwindigkeit geregelt wird, um Engpässe in der Anwendung zu vermeiden. `WebSocketStream` ist jedoch nicht standardisiert und wird derzeit nur von einer Rendering-Engine unterstützt.

Zusätzlich wird erwartet, dass die [WebTransport API](/de/docs/Web/API/WebTransport_API) die WebSocket API für viele Anwendungen ersetzt. WebTransport ist eine vielseitige, niedrigstufige API, die Backpressure und viele weitere Funktionen bietet, die weder `WebSocket` noch `WebSocketStream` unterstützen, wie unidirektionale Streams, außerordentliche Reihenfolge der Nachrichtenübermittlung und unzuverlässige Datenübertragung über Datagramme. WebTransport ist komplizierter zu verwenden als WebSockets und die Unterstützung durch verschiedene Browser ist nicht so breit, aber es ermöglicht die Umsetzung komplexer Lösungen. Wenn standardisierte WebSocket-Verbindungen gut für Ihren Anwendungsfall geeignet sind und Sie eine breite Browser-Kompatibilität benötigen, sollten Sie die WebSockets API verwenden, um schnell starten zu können. Wenn Ihre Anwendung jedoch eine nicht standardmäßige, maßgeschneiderte Lösung erfordert, sollten Sie die WebTransport API verwenden.

> [!NOTE]
> Wenn eine Seite über eine offene WebSocket-Verbindung verfügt, wird der Browser sie möglicherweise nicht in den {{Glossary("bfcache", "bfcache")}} aufnehmen. Es ist daher eine gute Praxis, die Verbindung zu schließen, wenn der Benutzer mit der Seite fertig ist. Siehe [Arbeiten mit dem bfcache](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#working_with_the_bfcache).

## Schnittstellen

- [`WebSocket`](/de/docs/Web/API/WebSocket)
  - : Die primäre Schnittstelle zum Verbinden mit einem WebSocket-Server und zum Senden und Empfangen von Daten über die Verbindung.
- [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) {{non-standard_inline}}
  - : Promise-basierte Schnittstelle zum Verbinden mit einem WebSocket-Server; verwendet [Streams](/de/docs/Web/API/Streams_API), um Daten über die Verbindung zu senden und zu empfangen.
- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
  - : Das Ereignis, das von dem WebSocket-Objekt gesendet wird, wenn die Verbindung geschlossen wird.
- [`MessageEvent`](/de/docs/Web/API/MessageEvent)
  - : Das Ereignis, das von dem WebSocket-Objekt gesendet wird, wenn eine Nachricht vom Server empfangen wird.

## Verwandte HTTP-Header

Die HTTP-Header werden im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet:

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Ein HTTP-Anforderungs-Header, der einen {{Glossary("Nonce", "Nonce")}} des Clients enthält.
    Dieser wird im [WebSocket-Öffnungshandshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um zu überprüfen, dass der Client ausdrücklich beabsichtigt, einen WebSocket zu öffnen.
    Er wird automatisch vom Browser hinzugefügt.
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Ein HTTP-{{Glossary("response_header", "Antwort-Header")}}, der im _WebSocket-Öffnungshandshake_ verwendet wird, um anzuzeigen, dass der Server bereit ist, auf eine WebSocket-Verbindung umzusteigen.
    Der Wert in der Direktive wird aus dem Wert von `Sec-WebSocket-Key` in der entsprechenden Anfrage berechnet.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client verstandene Version des WebSocket-Protokolls angibt.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die vom Server unterstützten Versionen auf.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client unterstützten Subprotokolle in bevorzugter Reihenfolge angibt.
    In Antworten gibt er das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge angibt.
    In Antworten gibt er die von dem Server aus den Präferenzen des Clients ausgewählte Erweiterung an.

## Leitfäden

- [Erstellen von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Schreiben von WebSocket-Servern](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [Schreiben eines WebSocket-Servers in C#](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Schreiben eines WebSocket-Servers in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
- [Schreiben eines WebSocket-Servers in JavaScript (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)
- [Verwendung von WebSocketStream zum Erstellen eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream)

## Tools

- [AsyncAPI](https://www.asyncapi.com/): Eine Spezifikation zur Beschreibung ereignisgesteuerter Architekturen, die auf Protokollen wie WebSocket basieren. Sie können damit WebSocket-basierte APIs beschreiben, genauso wie Sie REST-APIs mit der OpenAPI-Spezifikation beschreiben würden. Erfahren Sie, [warum Sie AsyncAPI mit WebSocket verwenden sollten](https://www.asyncapi.com/blog/websocket-part1) und [wie Sie dies tun können](https://www.asyncapi.com/blog/websocket-part2).
- [µWebSockets](https://github.com/uNetworking/uWebSockets): Hoch skalierbare WebSocket-Server- und Client-Implementierung für [C++11](https://isocpp.org/) und [Node.js](https://nodejs.org/).
- [Socket.IO](https://socket.io/): Ein drittes Übertragungsprotokoll basierend auf Long Polling/WebSocket für [Node.js](https://nodejs.org/).
- [SocketCluster](https://socketcluster.io/): Ein Pub/Sub-WebSocket-Framework für [Node.js](https://nodejs.org/) mit Schwerpunkt auf Skalierbarkeit.
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node): Eine WebSocket-Server-API-Implementierung für [Node.js](https://nodejs.org/).
- [Total.js](https://www.totaljs.com/): Web-Anwendungs-Framework für [Node.js](https://nodejs.org/en) (Beispiel: [WebSocket-Chat](https://github.com/totaljs/examples/tree/master/websocket))
- [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr): SignalR wird WebSockets unter der Haube verwenden, wenn diese verfügbar sind, und nahtlos auf andere Techniken und Technologien zurückgreifen, wenn dies nicht der Fall ist, während Ihr Anwendungs-Code gleich bleibt.
- [Caddy](https://caddyserver.com/): Ein Webserver, der beliebige Befehle (stdin/stdout) als WebSocket proxyfähig machen kann.
- [ws](https://github.com/websockets/ws): Eine beliebte WebSocket-Client-&-Server-Bibliothek für [Node.js](https://nodejs.org/en).
- [Cowboy](https://github.com/ninenines/cowboy): Cowboy ist ein kleiner, schneller und moderner HTTP-Server für Erlang/OTP mit WebSocket-Unterstützung.
- [ZeroMQ](https://zeromq.org/): Eine einbettbare Netzwerklibrary, die Nachrichten über In-Prozesse, IPC, TCP, UDP, TIPC, Multicast und WebSocket transportiert.
- [WebSocket King](https://websocketking.com/): Ein Client-Tool, um WebSocket-Server zu entwickeln, zu testen, und mit ihnen zu arbeiten.
- [PHP WebSocket Server](https://github.com/napengam/phpWebSocketServer): Server, geschrieben in PHP, zur Behandlung von Verbindungen über WebSockets `wss://` oder `ws://` und normale Sockets über `ssl://`, `tcp://`.
- [Django Channels](https://channels.readthedocs.io/en/stable/index.html): Django-Bibliothek, die Unterstützung für WebSockets (und andere Protokolle, die langlaufende asynchrone Verbindungen erfordern) hinzufügt.
- [(Phoenix) Channels](https://hexdocs.pm/phoenix/channels.html): Skalierbare Echtzeit-Kommunikation mittels WebSocket im Elixir-Phoenix-Framework.
- [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view): Echtzeit-interaktive Web-Erlebnisse über WebSocket im Elixir-Phoenix-Framework.
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/): Gibt Flask-Anwendungen Zugang zu latenzarmen bidirektionalen Kommunikation zwischen den Clients und dem Server.
- [Gorilla WebSocket](https://pkg.go.dev/github.com/gorilla/websocket): Gorilla WebSocket ist eine [Go](https://go.dev/)-Implementierung des WebSocket-Protokolls.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455 — Das WebSocket-Protokoll](https://datatracker.ietf.org/doc/html/rfc6455)
- [WebSocket API Spezifikation](https://websockets.spec.whatwg.org/)
- [Server-gesendete Ereignisse](/de/docs/Web/API/Server-sent_events)
