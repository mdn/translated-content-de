---
title: The WebSocket API (WebSockets)
slug: Web/API/WebSockets_API
l10n:
  sourceCommit: 20c3765ca2538a98ffef564c7eb87df43e2cef94
---

{{DefaultAPISidebar("WebSockets API")}}{{AvailableInWorkers}}

Die **WebSocket-API** ermöglicht es, eine bidirektionale interaktive Kommunikationssitzung zwischen dem Browser des Benutzers und einem Server zu eröffnen. Mit dieser API können Sie Nachrichten an einen Server senden und Antworten empfangen, ohne den Server nach einer Antwort abfragen zu müssen.

Die WebSocket-API bietet zwei alternative Mechanismen zur Erstellung und Nutzung von Websocket-Verbindungen: das [`WebSocket`](/de/docs/Web/API/WebSocket)-Interface und das [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Interface.

- Das `WebSocket`-Interface ist stabil und hat gute Unterstützung in Browsern und Servern. Es unterstützt jedoch keinen [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure). Folglich wird bei schnellerem Eintreffen von Nachrichten, als die Anwendung verarbeiten kann, entweder der Speicher des Geräts durch Pufferung dieser Nachrichten gefüllt, oder die Anwendung wird aufgrund von 100% CPU-Auslastung nicht mehr reagierbar, oder beides.
- Das `WebSocketStream`-Interface ist eine auf {{jsxref("Promise")}}-basierende Alternative zu `WebSocket`. Es nutzt die [Streams-API](/de/docs/Web/API/Streams_API) zum Empfangen und Senden von Nachrichten, was bedeutet, dass Socket-Verbindungen automatisch von Stream-Backpressure profitieren können, indem sie die Lese- oder Schreibgeschwindigkeit regulieren, um Engpässe in der Anwendung zu vermeiden. Allerdings ist `WebSocketStream` nicht standardisiert und derzeit nur in einer Rendering-Engine unterstützt.

Darüber hinaus wird erwartet, dass die [WebTransport-API](/de/docs/Web/API/WebTransport_API) die WebSocket-API für viele Anwendungen ersetzen wird. WebTransport ist eine vielseitige, niedrigstufige API, die Backpressure und viele andere Funktionen bietet, die weder von `WebSocket` noch von `WebSocketStream` unterstützt werden, wie z.B. unidirektionale Streams, außerordentliche Lieferung und unzuverlässige Datenübertragung über Datagramme. WebTransport ist komplexer zu verwenden als WebSockets und die plattformübergreifende Unterstützung ist nicht so weit verbreitet, aber es ermöglicht die Implementierung komplexer Lösungen. Wenn Standard-WebSocket-Verbindungen gut zu Ihrem Anwendungsfall passen und Sie breite Browser-Kompatibilität benötigen, sollten Sie die WebSockets-API verwenden, um schnell startklar zu sein. Wenn Ihre Anwendung jedoch eine nicht standardisierte, benutzerdefinierte Lösung erfordert, sollten Sie die WebTransport-API verwenden.

> [!NOTE]
> Wenn eine Seite eine offene WebSocket-Verbindung hat, kann der Browser diese nicht in den {{Glossary("bfcache", "bfcache")}} aufnehmen. Daher ist es eine gute Praxis, die Verbindung zu schließen, wenn der Benutzer mit der Seite fertig ist. Siehe [Arbeiten mit dem bfcache](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#working_with_the_bfcache).

## Schnittstellen

- [`WebSocket`](/de/docs/Web/API/WebSocket)
  - : Das primäre Interface zum Verbinden mit einem WebSocket-Server und zum Senden und Empfangen von Daten über die Verbindung.
- [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) {{non-standard_inline}}
  - : Promise-basierte Schnittstelle zum Verbinden mit einem WebSocket-Server; verwendet [Streams](/de/docs/Web/API/Streams_API), um Daten über die Verbindung zu senden und zu empfangen.
- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
  - : Das von dem WebSocket-Objekt gesendete Ereignis, wenn die Verbindung geschlossen wird.
- [`MessageEvent`](/de/docs/Web/API/MessageEvent)
  - : Das von dem WebSocket-Objekt gesendete Ereignis, wenn eine Nachricht vom Server empfangen wird.

## Verwandte HTTP-Header

Die HTTP-Header werden im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet:

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Ein HTTP-Anforderungs-Header, der eine Nonce vom Client enthält.
    Dieser wird im [WebSocket-Öffnungshandshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um zu verifizieren, dass der Client ausdrücklich die Absicht hat, einen WebSocket zu eröffnen.
    Er wird automatisch vom Browser hinzugefügt.
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Ein HTTP-{{Glossary("response_header", "Antwort-Header")}}, der im _WebSocket-Öffnungshandshake_ verwendet wird, um anzuzeigen, dass der Server bereit ist, zu einer WebSocket-Verbindung zu wechseln.
    Der Wert in der Anweisung wird aus dem Wert von `Sec-WebSocket-Key` in der entsprechenden Anforderung berechnet.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : Ein HTTP-Header, der in Anforderungen die vom Client verstandene Version des WebSocket-Protokolls angibt.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die Versionen auf, die der Server unterstützt.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : Ein HTTP-Header, der in Anforderungen die vom Client in bevorzugter Reihenfolge unterstützten Subprotokolle angibt.
    In Antworten zeigt er das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : Ein HTTP-Header, der in Anforderungen die vom Client in bevorzugter Reihenfolge unterstützten WebSocket-Erweiterungen angibt.
    In Antworten zeigt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.

## Leitfäden

- [Schreiben von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Schreiben von WebSocket-Servern](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [Schreiben eines WebSocket-Servers in C#](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Schreiben eines WebSocket-Servers in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
- [Schreiben eines WebSocket-Servers in JavaScript (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)
- [Verwendung von WebSocketStream zum Schreiben eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream)

## Werkzeuge

- [AsyncAPI](https://www.asyncapi.com/): Eine Spezifikation zur Beschreibung ereignisgesteuerter Architekturen, die auf Protokollen wie WebSocket basieren. Sie können es verwenden, um WebSocket-basierte APIs genauso zu beschreiben, wie Sie REST-APIs mit der OpenAPI-Spezifikation beschreiben würden. Erfahren Sie [warum Sie AsyncAPI mit WebSocket in Betracht ziehen sollten](https://www.asyncapi.com/blog/websocket-part1) und [wie Sie dies tun können](https://www.asyncapi.com/blog/websocket-part2).
- [µWebSockets](https://github.com/uNetworking/uWebSockets): Hochskalierbare WebSocket-Server- und Client-Implementierung für [C++11](https://isocpp.org/) und [Node.js](https://nodejs.org/).
- [Socket.IO](https://socket.io/): Ein auf Long Polling/WebSocket basierendes Drittanbieterübertragungsprotokoll für [Node.js](https://nodejs.org/).
- [SocketCluster](https://socketcluster.io/): Ein Pub/Sub-WebSocket-Framework für [Node.js](https://nodejs.org/) mit Schwerpunkt auf Skalierbarkeit.
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node): Eine WebSocket-Server-API-Implementierung für [Node.js](https://nodejs.org/).
- [Total.js](https://www.totaljs.com/): Web-Anwendungs-Framework für [Node.js](https://nodejs.org/en) (Beispiel: [WebSocket-Chat](https://github.com/totaljs/examples/tree/master/websocket))
- [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr): SignalR wird WebSockets unter der Haube verwenden, wenn sie verfügbar sind, und fallweise auf andere Techniken und Technologien zurückgreifen, wenn dies nicht der Fall ist, während Ihr Anwendungscode gleich bleibt.
- [Caddy](https://caddyserver.com/): Ein Webserver, der beliebige Befehle (stdin/stdout) als Websocket vermitteln kann.
- [ws](https://github.com/websockets/ws): Eine beliebte WebSocket-Client- und Serverbibliothek für [Node.js](https://nodejs.org/en).
- [cowboy](https://github.com/ninenines/cowboy): Cowboy ist ein kleiner, schneller und moderner HTTP-Server für Erlang/OTP mit WebSocket-Unterstützung.
- [ZeroMQ](https://zeromq.org/): ZeroMQ ist eine einbettbare Netzwerknutzbibliothek, die Nachrichten über In-Prozess, IPC, TCP, UDP, TIPC, Multicast und WebSocket überträgt.
- [WebSocket King](https://websocketking.com/): Ein Client-Tool, um bei der Entwicklung, dem Testen und der Arbeit mit WebSocket-Servern zu helfen.
- [PHP WebSocket Server](https://github.com/napengam/phpWebSocketServer): Server, der in PHP geschrieben ist, um Verbindungen über Websockets `wss://` oder `ws://` und normale Sockets über `ssl://`, `tcp://` zu handhaben
- [Django Channels](https://channels.readthedocs.io/en/stable/index.html): Django-Bibliothek, die Unterstützung für WebSockets (und andere Protokolle, die lang laufende asynchrone Verbindungen erfordern) hinzufügt.
- [(Phoenix) Channels](https://hexdocs.pm/phoenix/channels.html): Skalierbare Echtzeit-Kommunikation mit WebSocket im Elixir-Phoenix-Framework.
- [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view): Echtzeit-interaktive Web-Erlebnisse über WebSocket im Elixir-Phoenix-Framework.
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/): gibt Flask-Anwendungen Zugang zu latenzarmen bidirektionalen Kommunikationen zwischen Clients und dem Server.
- [Gorilla WebSocket](https://pkg.go.dev/github.com/gorilla/websocket): Gorilla WebSocket ist eine [Go](https://go.dev/)-Implementierung des WebSocket-Protokolls.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455 — Das WebSocket-Protokoll](https://datatracker.ietf.org/doc/html/rfc6455)
- [WebSocket API-Spezifikation](https://websockets.spec.whatwg.org/)
- [Server-Sent Events](/de/docs/Web/API/Server-sent_events)
