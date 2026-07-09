---
title: WebSocket API (WebSockets)
slug: Web/API/WebSockets_API
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

{{DefaultAPISidebar("WebSockets API")}}{{AvailableInWorkers}}

Die **WebSocket API** ermöglicht es, eine bidirektionale interaktive Kommunikationssitzung zwischen dem Browser des Benutzers und einem Server zu eröffnen. Mit dieser API können Sie Nachrichten an einen Server senden und Antworten erhalten, ohne den Server auf eine Antwort abfragen zu müssen.

Die WebSocket API bietet zwei alternative Mechanismen zum Erstellen und Verwenden von Websocket-Verbindungen: die [`WebSocket`](/de/docs/Web/API/WebSocket)-Schnittstelle und die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Schnittstelle.

- Die `WebSocket`-Schnittstelle ist stabil und wird von Browsern und Servern gut unterstützt. Sie unterstützt jedoch keinen [backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure). Infolgedessen können, wenn Nachrichten schneller eintreffen, als die Anwendung sie verarbeiten kann, entweder der Arbeitsspeicher des Geräts durch die Pufferung dieser Nachrichten gefüllt werden, die Anwendung aufgrund einer 100%igen CPU-Auslastung nicht mehr reagieren oder beides eintreten.
- Die `WebSocketStream`-Schnittstelle ist eine {{jsxref("Promise")}}-basierte Alternative zu `WebSocket`. Sie verwendet die [Streams API](/de/docs/Web/API/Streams_API) zum Empfangen und Senden von Nachrichten, was bedeutet, dass Socket-Verbindungen automatisch von der Stream-Backpressure profitieren und die Geschwindigkeit des Lesens oder Schreibens regulieren können, um Engpässe in der Anwendung zu vermeiden. `WebSocketStream` ist jedoch nicht standardisiert und wird zurzeit nur von einer Rendering-Engine unterstützt.

Darüber hinaus wird erwartet, dass die [WebTransport API](/de/docs/Web/API/WebTransport_API) die WebSocket API für viele Anwendungen ersetzt. WebTransport ist eine vielseitige, niedrigschwellige API, die Backpressure und viele andere Funktionen bietet, die weder von `WebSocket` noch von `WebSocketStream` unterstützt werden, wie unidirektionale Streams, nicht sequenzielle Lieferung und unzuverlässige Datenübertragung über Datagramme. WebTransport ist komplexer zu verwenden als WebSockets, und die Unterstützung in verschiedenen Browsern ist nicht so verbreitet, erlaubt jedoch die Implementierung anspruchsvoller Lösungen. Falls Standard-WebSocket-Verbindungen gut für Ihren Anwendungsfall geeignet sind und Sie eine breite Browser-Kompatibilität benötigen, sollten Sie die WebSockets API verwenden, um schnell in Gang zu kommen. Wenn Ihre Anwendung jedoch eine nicht standardmäßige benutzerdefinierte Lösung erfordert, sollten Sie die WebTransport API verwenden.

> [!NOTE]
> Wenn eine Seite eine offene WebSocket-Verbindung hat, kann der Browser sie möglicherweise nicht zum {{Glossary("bfcache", "bfcache")}} hinzufügen. Es ist daher eine gute Praxis, die Verbindung zu schließen, wenn der Benutzer die Seite beendet hat. Siehe [Arbeiten mit dem bfcache](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#working_with_the_bfcache).

## Schnittstellen

- [`WebSocket`](/de/docs/Web/API/WebSocket)
  - : Die primäre Schnittstelle zum Herstellen einer Verbindung zu einem WebSocket-Server und zum Senden und Empfangen von Daten über die Verbindung.
- [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) {{non-standard_inline}}
  - : Promise-basierte Schnittstelle zum Herstellen einer Verbindung zu einem WebSocket-Server; verwendet [Streams](/de/docs/Web/API/Streams_API), um Daten über die Verbindung zu senden und zu empfangen.
- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
  - : Das von dem WebSocket-Objekt gesendete Ereignis, wenn die Verbindung geschlossen wird.
- [`MessageEvent`](/de/docs/Web/API/MessageEvent)
  - : Das von dem WebSocket-Objekt gesendete Ereignis, wenn vom Server eine Nachricht empfangen wird.

## Zugehörige HTTP-Header

Die HTTP-Header werden im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet:

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Ein HTTP-Anforderungsheader, der ein {{Glossary("Nonce", "nonce")}} vom Client enthält.
    Dies wird im [WebSocket-Öffnungshandshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um zu überprüfen, dass der Client ausdrücklich beabsichtigt, eine WebSocket-Verbindung zu öffnen.
    Es wird automatisch vom Browser hinzugefügt.
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Ein HTTP-{{Glossary("response_header", "Antwortheader")}}, der im _WebSocket-Öffnungshandshake_ verwendet wird, um anzuzeigen, dass der Server bereit ist, zu einer WebSocket-Verbindung zu wechseln.
    Der Wert in der Direktive wird aus dem Wert von `Sec-WebSocket-Key` in der entsprechenden Anforderung berechnet.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : Ein HTTP-Header, der in Anforderungen die vom Client verstandene Version des WebSocket-Protokolls angibt.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die vom Server unterstützten Versionen auf.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : Ein HTTP-Header, der in Anforderungen die vom Client unterstützten Subprotokolle in bevorzugter Reihenfolge angibt.
    In Antworten gibt er das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : Ein HTTP-Header, der in Anforderungen die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge angibt.
    In Antworten gibt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.

## Leitfäden

- [Schreiben von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Schreiben von WebSocket-Servern](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [Schreiben eines WebSocket-Servers in C#](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Schreiben eines WebSocket-Servers in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
- [Schreiben eines WebSocket-Servers in JavaScript (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)
- [Verwendung von WebSocketStream zum Schreiben eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream)

## Werkzeuge

- [AsyncAPI](https://www.asyncapi.com/): Eine Spezifikation zum Beschreiben ereignisgesteuerter Architekturen basierend auf Protokollen wie WebSocket. Sie können es verwenden, um auf WebSockets basierende APIs zu beschreiben, genau so wie Sie REST-APIs mit der OpenAPI-Spezifikation beschreiben würden. Erfahren Sie [warum Sie in Betracht ziehen sollten, AsyncAPI mit WebSocket zu verwenden](https://www.asyncapi.com/blog/websocket-part1) und [wie Sie dies tun können](https://www.asyncapi.com/blog/websocket-part2).
- [µWebSockets](https://github.com/uNetworking/uWebSockets): Hoch skalierbare WebSocket-Server- und Client-Implementierung für [C++11](https://isocpp.org/) und [Node.js](https://nodejs.org/).
- [Socket.IO](https://socket.io/): Ein auf Langzeitabfrage/WebSocket basierendes Drittanbieterübertragungsprotokoll für [Node.js](https://nodejs.org/).
- [SocketCluster](https://socketcluster.io/): Ein Pub/Sub-WebSocket-Framework für [Node.js](https://nodejs.org/) mit Schwerpunkt auf Skalierbarkeit.
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node): Eine WebSocket-Server-API-Implementierung für [Node.js](https://nodejs.org/).
- [Total.js](https://www.totaljs.com/): Webanwendungs-Framework für [Node.js](https://nodejs.org/en) (Beispiel: [WebSocket-Chat](https://github.com/totaljs/examples/tree/master/websocket))
- [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr): SignalR verwendet WebSockets im Hintergrund, wenn sie verfügbar sind, und fällt auf andere Techniken und Technologien zurück, wenn sie nicht verfügbar sind, während Ihr Anwendungscode gleich bleibt.
- [Caddy](https://caddyserver.com/): Ein Webserver, der in der Lage ist, beliebige Befehle (stdin/stdout) als WebSocket zu proxyen.
- [ws](https://github.com/websockets/ws): Eine beliebte WebSocket-Client- & Server-Bibliothek für [Node.js](https://nodejs.org/en).
- [cowboy](https://github.com/ninenines/cowboy): Cowboy ist ein kleiner, schneller und moderner HTTP-Server für Erlang/OTP mit WebSocket-Unterstützung.
- [ZeroMQ](https://zeromq.org/): ZeroMQ ist eine eingebettete Netzwerksbibliothek, die Nachrichten zur Laufzeit überträgt, darunter IPC, TCP, UDP, TIPC, Multicast und WebSocket.
- [WebSocket King](https://websocketking.com/): Ein Client-Tool zur Entwicklung, Prüfung und Arbeit mit WebSocket-Servern.
- [PHP WebSocket Server](https://github.com/napengam/phpWebSocketServer): In PHP geschriebener Server, der Verbindungen über WebSockets `wss://` oder `ws://` und normale Sockets über `ssl://`, `tcp://` handhabt.
- [Django Channels](https://channels.readthedocs.io/en/stable/index.html): Django-Bibliothek, die Unterstützung für WebSockets (und andere Protokolle, die lang laufende asynchrone Verbindungen erfordern) hinzufügt.
- [(Phoenix) Channels](https://phoenix.hexdocs.pm/channels.html): Skalierbare Echtzeitkommunikation mit WebSocket im Elixir Phoenix-Framework.
- [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view): Echtzeit-interaktive Web-Erlebnisse über WebSocket im Elixir Phoenix-Framework.
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/): Ermöglicht Flask-Anwendungen den Zugriff auf latenzarme bidirektionale Kommunikation zwischen den Clients und dem Server.
- [Gorilla WebSocket](https://pkg.go.dev/github.com/gorilla/websocket): Gorilla WebSocket ist eine [Go](https://go.dev/)-Implementierung des WebSocket-Protokolls.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455 — Das WebSocket-Protokoll](https://datatracker.ietf.org/doc/html/rfc6455)
- [WebSocket API Spezifikation](https://websockets.spec.whatwg.org/)
- [Server-Sent Events](/de/docs/Web/API/Server-sent_events)
