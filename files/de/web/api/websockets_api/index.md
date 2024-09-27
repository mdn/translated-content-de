---
title: The WebSocket API (WebSockets)
slug: Web/API/WebSockets_API
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{DefaultAPISidebar("WebSockets API")}}{{AvailableInWorkers}}

Die **WebSocket API** ermöglicht es, eine bidirektionale interaktive Kommunikationssitzung zwischen dem Browser des Benutzers und einem Server zu öffnen. Mit dieser API können Sie Nachrichten an einen Server senden und Antworten empfangen, ohne den Server nach einer Antwort abfragen zu müssen.

Die WebSocket API bietet zwei alternative Mechanismen zum Erstellen und Verwenden von WebSocket-Verbindungen: das [`WebSocket`](/de/docs/Web/API/WebSocket)-Interface und das [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Interface.

- Das `WebSocket`-Interface ist stabil und hat eine gute Unterstützung durch Browser und Server. Es unterstützt jedoch keinen [Rückstau](/de/docs/Web/API/Streams_API/Concepts#backpressure). Wenn Nachrichten schneller eintreffen, als die Anwendung sie verarbeiten kann, wird entweder der Arbeitsspeicher des Geräts durch Zwischenspeichern dieser Nachrichten gefüllt, oder es wird unresponsive aufgrund 100%iger CPU-Auslastung, oder beides.
- Das `WebSocketStream`-Interface ist eine {{jsxref("Promise")}}-basierte Alternative zu `WebSocket`. Es verwendet die [Streams API](/de/docs/Web/API/Streams_API) zum Empfangen und Senden von Nachrichten, was bedeutet, dass Socket-Verbindungen automatisch von Rückstau in Streams profitieren können, indem die Geschwindigkeit des Lesens oder Schreibens geregelt wird, um Engpässe in der Anwendung zu vermeiden. `WebSocketStream` ist jedoch nicht standardisiert und wird derzeit nur von einer Rendering-Engine unterstützt.

Darüber hinaus wird erwartet, dass die [WebTransport API](/de/docs/Web/API/WebTransport_API) die WebSocket API für viele Anwendungen ersetzt. WebTransport ist eine vielseitige, low-level API, die Rückstau und viele andere Funktionen bietet, die weder von `WebSocket` noch von `WebSocketStream` unterstützt werden, wie unidirektionale Streams, außer der Reihenfolge erfolgende Lieferung und unzuverlässige Datenübertragung über Datagramme. WebTransport ist komplexer in der Anwendung als WebSockets und ihre browserübergreifende Unterstützung ist nicht so umfassend, aber sie ermöglicht die Implementierung ausgefeilter Lösungen. Wenn standardmäßige WebSocket-Verbindungen gut für Ihren Anwendungsfall geeignet sind und Sie eine breite Browser-Kompatibilität benötigen, sollten Sie die WebSockets API nutzen, um schnell einsatzbereit zu sein. Wenn Ihre Anwendung jedoch eine nicht standardisierte kundenspezifische Lösung erfordert, sollten Sie die WebTransport API verwenden.

> [!NOTE]
> Während eine WebSocket-Verbindung funktional etwas ähnelt wie standardmäßige Unix-Sockets, sind sie nicht miteinander verwandt.

## Schnittstellen

- [`WebSocket`](/de/docs/Web/API/WebSocket)
  - : Das primäre Interface zum Verbinden mit einem WebSocket-Server und zum Senden und Empfangen von Daten über die Verbindung.
- [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) {{non-standard_inline}}
  - : Promise-basiertes Interface zum Verbinden mit einem WebSocket-Server, das [Streams](/de/docs/Web/API/Streams_API) zum Senden und Empfangen von Daten über die Verbindung nutzt.
- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
  - : Das Ereignis, das vom WebSocket-Objekt gesendet wird, wenn die Verbindung geschlossen wird.
- [`MessageEvent`](/de/docs/Web/API/MessageEvent)
  - : Das Ereignis, das vom WebSocket-Objekt gesendet wird, wenn eine Nachricht vom Server empfangen wird.

## Verwandte HTTP-Header

Die HTTP-Header werden im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet:

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Ein HTTP-Anforderungsheader, der einen Nonce vom Client enthält. Dieser wird im [WebSocket-Öffnungshandshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um zu überprüfen, dass der Client ausdrücklich beabsichtigt, einen WebSocket zu öffnen. Er wird automatisch vom Browser hinzugefügt.
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Ein HTTP-[Antwortheader](/de/docs/Glossary/response_header), der im _WebSocket-Öffnungshandshake_ verwendet wird, um anzuzeigen, dass der Server bereit ist, auf eine WebSocket-Verbindung zu aktualisieren. Der Wert in der Direktive wird aus dem Wert von `Sec-WebSocket-Key` in der entsprechenden Anfrage berechnet.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : Ein HTTP-Header, der in Anfragen die Version des WebSocket-Protokolls angibt, die vom Client verstanden wird. In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird und listet die vom Server unterstützten Versionen auf.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client unterstützten Subprotokolle in bevorzugter Reihenfolge angibt. In Antworten gibt er das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge angibt. In Antworten gibt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.

## Leitfäden

- [WebSocket-Client-Anwendungen schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [WebSocket-Server schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [Einen WebSocket-Server in C# schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Einen WebSocket-Server in Java schreiben](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
- [Einen WebSocket-Server in JavaScript (Deno) schreiben](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)
- [WebSocketStream verwenden, um einen Client zu schreiben](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream)

## Werkzeuge

- [AsyncAPI](https://www.asyncapi.com/): Eine Spezifikation zur Beschreibung von ereignisgesteuerten Architekturen basierend auf Protokollen wie WebSocket. Sie können es verwenden, um WebSocket-basierte APIs zu beschreiben, genau wie Sie REST-APIs mit der OpenAPI-Spezifikation beschreiben würden. Erfahren Sie [warum Sie AsyncAPI mit WebSocket in Betracht ziehen sollten](https://www.asyncapi.com/blog/websocket-part1) und [wie Sie dies tun können](https://www.asyncapi.com/blog/websocket-part2).
- [µWebSockets](https://github.com/uNetworking/uWebSockets): Hoch skalierbare WebSocket-Server- und Client-Implementierung für [C++11](https://isocpp.org/) und [Node.js](https://nodejs.org/).
- [Socket.IO](https://socket.io/): Ein auf Langzeitabfragen/WebSocket basierendes Drittanbieter-Übertragungsprotokoll für [Node.js](https://nodejs.org/).
- [SocketCluster](https://socketcluster.io/): Ein Pub/Sub-WebSocket-Framework für [Node.js](https://nodejs.org/) mit Fokus auf Skalierbarkeit.
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node): Eine WebSocket-Server-API-Implementierung für [Node.js](https://nodejs.org/).
- [Total.js](https://www.totaljs.com/): Web-Anwendungs-Framework für [Node.js](https://nodejs.org/en) (Beispiel: [WebSocket-Chat](https://github.com/totaljs/examples/tree/master/websocket))
- [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr): SignalR verwendet WebSockets im Hintergrund, wenn sie verfügbar sind, und fällt bei Nichtverfügbarkeit nahtlos auf andere Techniken und Technologien zurück, während Ihr Anwendungscode gleich bleibt.
- [Caddy](https://caddyserver.com/): Ein Webserver, der beliebige Befehle (stdin/stdout) als WebSocket proxyfähig machen kann.
- [ws](https://github.com/websockets/ws): eine beliebte WebSocket-Client- und Serverbibliothek für [Node.js](https://nodejs.org/en).
- [cowboy](https://github.com/ninenines/cowboy): Cowboy ist ein kleiner, schneller und moderner HTTP-Server für Erlang/OTP mit WebSocket-Unterstützung.
- [ZeroMQ](https://zeromq.org/): ZeroMQ ist eine einbettbare Netzbibliothek, die Nachrichten über In-Prozess-, IPC-, TCP-, UDP-, TIPC-, Multicast- und WebSocket überträgt.
- [WebSocket King](https://websocketking.com/): Ein Client-Tool zur Unterstützung der Entwicklung, des Testens und der Arbeit mit WebSocket-Servern.
- [PHP WebSocket Server](https://github.com/napengam/phpWebSocketServer): Server in PHP geschrieben, um Verbindungen über Websockets `wss://` oder `ws://` und normale Sockets über `ssl://`, `tcp://` zu handhaben.
- [Django Channels](https://channels.readthedocs.io/en/stable/index.html): Django-Bibliothek, die Unterstützung für WebSockets (und andere Protokolle, die langfristige asynchrone Verbindungen erfordern) hinzufügt.
- [(Phoenix) Channels](https://hexdocs.pm/phoenix/channels.html): Skalierbare Echtzeitkommunikation über WebSocket im Elixir Phoenix Framework.
- [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view): Echtzeit-interaktive Web-Erfahrungen über WebSocket im Elixir Phoenix Framework.
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/): Gibt Flask-Anwendungen Zugriff auf bidirektionale Kommunikationswege mit niedriger Latenz zwischen den Clients und dem Server.
- [Gorilla WebSocket](https://pkg.go.dev/github.com/gorilla/websocket): Gorilla WebSocket ist eine [Go](https://go.dev/)-Implementierung des WebSocket-Protokolls.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455 — Das WebSocket-Protokoll](https://datatracker.ietf.org/doc/html/rfc6455)
- [WebSocket API-Spezifikation](https://websockets.spec.whatwg.org/)
- [Server-Sent Events](/de/docs/Web/API/Server-sent_events)
