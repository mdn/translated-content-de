---
title: WebSocket API (WebSockets)
slug: Web/API/WebSockets_API
l10n:
  sourceCommit: c7460aab1397829c109a88e3a58fed9b7ef9c0c5
---

{{DefaultAPISidebar("WebSockets API")}}{{AvailableInWorkers}}

Die **WebSocket API** ermöglicht das Öffnen einer interaktiven bidirektionalen Kommunikationssitzung zwischen dem Browser des Benutzers und einem Server. Mit dieser API können Sie Nachrichten an einen Server senden und Antworten empfangen, ohne den Server wiederholt nach einer Antwort abfragen zu müssen.

Die WebSocket API bietet zwei alternative Mechanismen zum Erstellen und Verwenden von WebSocket-Verbindungen: die Schnittstelle [`WebSocket`](/de/docs/Web/API/WebSocket) und die Schnittstelle [`WebSocketStream`](/de/docs/Web/API/WebSocketStream).

- Die Schnittstelle `WebSocket` ist stabil und wird von Browsern und Servern gut unterstützt. Sie unterstützt jedoch kein [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure). Wenn Nachrichten daher schneller eintreffen, als die Anwendung sie verarbeiten kann, wird entweder der Speicher des Geräts durch das Puffern dieser Nachrichten gefüllt, die Anwendung reagiert aufgrund einer CPU-Auslastung von 100 % nicht mehr oder beides.
- Die Schnittstelle `WebSocketStream` ist eine {{jsxref("Promise")}}-basierte Alternative zu `WebSocket`. Sie verwendet die [Streams API](/de/docs/Web/API/Streams_API) zum Empfangen und Senden von Nachrichten. Dadurch können Socket-Verbindungen automatisch von Stream-Backpressure profitieren und die Lese- oder Schreibgeschwindigkeit regulieren, um Engpässe in der Anwendung zu vermeiden. `WebSocketStream` ist jedoch nicht standardisiert und wird derzeit nur von einer Rendering-Engine unterstützt.

Darüber hinaus wird erwartet, dass die [WebTransport API](/de/docs/Web/API/WebTransport_API) die WebSocket API für viele Anwendungen ersetzt. WebTransport ist eine vielseitige Low-Level-API, die Backpressure und viele weitere Funktionen bietet, die weder von `WebSocket` noch von `WebSocketStream` unterstützt werden, etwa unidirektionale Streams, ungeordnete Zustellung und unzuverlässige Datenübertragung über Datagramme. WebTransport ist komplexer zu verwenden als WebSockets und seine browserübergreifende Unterstützung ist nicht so umfassend, ermöglicht jedoch die Implementierung anspruchsvoller Lösungen. Wenn Standard-WebSocket-Verbindungen für Ihren Anwendungsfall geeignet sind und Sie eine breite Browser-Kompatibilität benötigen, sollten Sie die WebSockets API einsetzen, um schnell starten zu können. Wenn Ihre Anwendung jedoch eine nicht standardisierte, benutzerdefinierte Lösung erfordert, sollten Sie die WebTransport API verwenden.

> [!NOTE]
> Wenn eine Seite eine offene WebSocket-Verbindung hat, fügt der Browser sie möglicherweise nicht zum {{Glossary("bfcache", "bfcache")}} hinzu. Es empfiehlt sich daher, die Verbindung zu schließen, wenn der Benutzer die Seite nicht mehr verwendet. Siehe [Arbeiten mit dem bfcache](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#working_with_the_bfcache).

## Schnittstellen

- [`WebSocket`](/de/docs/Web/API/WebSocket)
  - : Die primäre Schnittstelle zum Herstellen einer Verbindung mit einem WebSocket-Server sowie zum Senden und Empfangen von Daten über die Verbindung.
- [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) {{non-standard_inline}}
  - : Promise-basierte Schnittstelle zum Herstellen einer Verbindung mit einem WebSocket-Server; verwendet [Streams](/de/docs/Web/API/Streams_API), um Daten über die Verbindung zu senden und zu empfangen.
- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
  - : Das Ereignis, das vom WebSocket-Objekt gesendet wird, wenn die Verbindung geschlossen wird.
- [`MessageEvent`](/de/docs/Web/API/MessageEvent)
  - : Das Ereignis, das vom WebSocket-Objekt gesendet wird, wenn eine Nachricht vom Server empfangen wird.

## Zugehörige HTTP-Header

Die HTTP-Header werden im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet:

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Ein HTTP-Anfrage-Header, der eine {{Glossary("Nonce", "Nonce")}} vom Client enthält.
    Dieser wird im [WebSocket-Öffnungs-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um zu überprüfen, dass der Client ausdrücklich beabsichtigt, einen WebSocket zu öffnen.
    Er wird automatisch vom Browser hinzugefügt.
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Ein HTTP-{{Glossary("response_header", "Antwort-Header")}}, der im _WebSocket-Öffnungs-Handshake_ verwendet wird, um anzugeben, dass der Server bereit ist, auf eine WebSocket-Verbindung umzusteigen.
    Der Wert in der Direktive wird aus dem Wert von `Sec-WebSocket-Key` in der entsprechenden Anfrage berechnet.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : Ein HTTP-Header, der in Anfragen die Version des WebSocket-Protokolls angibt, die vom Client verstanden wird.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion nicht vom Server unterstützt wird, und listet die Versionen auf, die der Server unterstützt.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client unterstützten Unterprotokolle in bevorzugter Reihenfolge angibt.
    In Antworten gibt er das Unterprotokoll an, das der Server aus den Präferenzen des Clients ausgewählt hat.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge angibt.
    In Antworten gibt er die Erweiterung an, die der Server aus den Präferenzen des Clients ausgewählt hat.

## Leitfäden

- [WebSocket-Client-Anwendungen schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [WebSocket-Server schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [Einen WebSocket-Server in C# schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Einen WebSocket-Server in Java schreiben](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
- [Einen WebSocket-Server in JavaScript (Deno) schreiben](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)
- [WebSocketStream zum Schreiben eines Clients verwenden](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream)

## Werkzeuge

- [AsyncAPI](https://www.asyncapi.com/): Eine Spezifikation zur Beschreibung ereignisgesteuerter Architekturen auf Grundlage von Protokollen wie WebSocket. Sie können damit WebSocket-basierte APIs beschreiben, genauso wie Sie REST-APIs mit der OpenAPI-Spezifikation beschreiben würden. Erfahren Sie, [warum Sie die Verwendung von AsyncAPI mit WebSocket in Betracht ziehen sollten](https://www.asyncapi.com/blog/websocket-part1) und [wie Sie dies tun können](https://www.asyncapi.com/blog/websocket-part2).
- [µWebSockets](https://github.com/uNetworking/uWebSockets): Hochskalierbare WebSocket-Server- und Client-Implementierung für [C++11](https://isocpp.org/) und [Node.js](https://nodejs.org/).
- [Socket.IO](https://socket.io/): Ein auf Long Polling/WebSocket basierendes Übertragungsprotokoll eines Drittanbieters für [Node.js](https://nodejs.org/).
- [SocketCluster](https://socketcluster.io/): Ein Pub/Sub-WebSocket-Framework für [Node.js](https://nodejs.org/) mit Schwerpunkt auf Skalierbarkeit.
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node): Eine WebSocket-Server-API-Implementierung für [Node.js](https://nodejs.org/).
- [Total.js](https://www.totaljs.com/): Webanwendungs-Framework für [Node.js](https://nodejs.org/en) (Beispiel: [WebSocket-Chat](https://github.com/totaljs/examples/tree/master/websocket))
- [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr): SignalR verwendet intern WebSockets, wenn diese verfügbar sind, und greift ansonsten nahtlos auf andere Techniken und Technologien zurück, während Ihr Anwendungscode unverändert bleibt.
- [Caddy](https://caddyserver.com/): Ein Webserver, der beliebige Befehle (stdin/stdout) als WebSocket weiterleiten kann.
- [ws](https://github.com/websockets/ws): Eine beliebte WebSocket-Client- und Serverbibliothek für [Node.js](https://nodejs.org/en).
- [cowboy](https://github.com/ninenines/cowboy): Cowboy ist ein kleiner, schneller und moderner HTTP-Server für Erlang/OTP mit WebSocket-Unterstützung.
- [ZeroMQ](https://zeromq.org/): ZeroMQ ist eine einbettbare Netzwerkbibliothek, die Nachrichten über In-Process, IPC, TCP, UDP, TIPC, Multicast und WebSocket überträgt.
- [WebSocket King](https://websocketking.com/): Ein Client-Werkzeug, das bei der Entwicklung, dem Testen und der Arbeit mit WebSocket-Servern hilft.
- [PHP WebSocket Server](https://github.com/napengam/phpWebSocketServer): In PHP geschriebener Server zur Verarbeitung von Verbindungen über WebSockets `wss://` oder `ws://` sowie normale Sockets über `ssl://`, `tcp://`
- [Django Channels](https://channels.readthedocs.io/en/stable/index.html): Django-Bibliothek, die Unterstützung für WebSockets hinzufügt (und andere Protokolle, die langlebige asynchrone Verbindungen erfordern).
- [(Phoenix) Channels](https://phoenix.hexdocs.pm/channels.html): Skalierbare Echtzeitkommunikation über WebSocket im Elixir-Phoenix-Framework.
- [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view): Interaktive Web-Erlebnisse in Echtzeit über WebSocket im Elixir-Phoenix-Framework.
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/): Ermöglicht Flask-Anwendungen bidirektionale Kommunikation mit geringer Latenz zwischen Clients und Server.
- [Gorilla WebSocket](https://pkg.go.dev/github.com/gorilla/websocket): Gorilla WebSocket ist eine [Go](https://go.dev/)-Implementierung des WebSocket-Protokolls.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455 — Das WebSocket-Protokoll](https://datatracker.ietf.org/doc/html/rfc6455)
- [WebSocket-API-Spezifikation](https://websockets.spec.whatwg.org/)
- [Server-Sent Events](/de/docs/Web/API/Server-sent_events)
