---
title: The WebSocket API (WebSockets)
slug: Web/API/WebSockets_API
l10n:
  sourceCommit: bba3b20fda0f5b9893df4f2226eb95433ac3152f
---

{{DefaultAPISidebar("WebSockets API")}}{{AvailableInWorkers}}

Die **WebSocket-API** ermöglicht es, eine bidirektionale interaktive Kommunikationssitzung zwischen dem Browser des Nutzers und einem Server zu öffnen. Mit dieser API können Sie Nachrichten an einen Server senden und Antworten empfangen, ohne den Server ständig abfragen zu müssen.

Die WebSocket-API bietet zwei alternative Mechanismen zum Erstellen und Verwenden von WebSocket-Verbindungen: die [`WebSocket`](/de/docs/Web/API/WebSocket)-Schnittstelle und die [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Schnittstelle.

- Die `WebSocket`-Schnittstelle ist stabil und hat eine gute Unterstützung durch Browser und Server. Sie unterstützt jedoch kein [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure). Dadurch kann es vorkommen, dass bei schnellerem Nachrichtenempfang, als die Anwendung verarbeiten kann, der Speicher des Geräts stark gefüllt wird, die Anwendung aufgrund von 100% CPU-Auslastung nicht mehr reagiert oder beides geschieht.
- Die `WebSocketStream`-Schnittstelle ist eine {{jsxref("Promise")}}-basierte Alternative zu `WebSocket`. Sie verwendet die [Streams API](/de/docs/Web/API/Streams_API), um den Versand und Empfang von Nachrichten zu verwalten, wodurch WebSocket-Verbindungen automatisch von der Stream-Backpressure profitieren können. Dies reguliert die Lese- oder Schreibgeschwindigkeit, um Engpässe in der Anwendung zu vermeiden. Allerdings ist `WebSocketStream` nicht standardisiert und wird derzeit lediglich von einer Rendering-Engine unterstützt.

Zusätzlich ist zu erwarten, dass die [WebTransport-API](/de/docs/Web/API/WebTransport_API) die WebSocket-API für viele Anwendungen ersetzen wird. WebTransport ist eine vielseitige, niedrigstufige API, die Backpressure und viele andere Funktionen bietet, die weder von `WebSocket` noch von `WebSocketStream` unterstützt werden – wie unidirektionale Streams, nicht in der richtigen Reihenfolge gelieferte Übertragungen und unzuverlässige Datenübertragung via Datagramme. WebTransport ist komplexer zu verwenden als WebSockets und hat keine so breite plattformübergreifende Unterstützung, ermöglicht jedoch die Implementierung anspruchsvoller Lösungen. Wenn standardisierte WebSocket-Verbindungen gut zu Ihrem Anwendungsfall passen und Sie breite Browser-Kompatibilität benötigen, sollten Sie die WebSocket-API nutzen, um schnell eine Lösung zu implementieren. Wenn Ihre Anwendung jedoch eine nicht standardisierte, individuelle Lösung erfordert, sollten Sie die WebTransport-API verwenden.

> [!NOTE]
> Eine WebSocket-Verbindung ist funktional ähnlich zu standardmäßigen Unix-Sockets, sie sind jedoch nicht miteinander verwandt.

## Schnittstellen

- [`WebSocket`](/de/docs/Web/API/WebSocket)
  - : Die primäre Schnittstelle zur Verbindung mit einem WebSocket-Server sowie zum Versenden und Empfangen von Daten über die Verbindung.
- [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) {{non-standard_inline}}
  - : Promise-basierte Schnittstelle zur Verbindung mit einem WebSocket-Server; nutzt [Streams](/de/docs/Web/API/Streams_API) zum Senden und Empfangen von Daten über die Verbindung.
- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
  - : Das Ereignis, das vom WebSocket-Objekt gesendet wird, wenn die Verbindung geschlossen wird.
- [`MessageEvent`](/de/docs/Web/API/MessageEvent)
  - : Das Ereignis, das vom WebSocket-Objekt gesendet wird, wenn eine Nachricht vom Server empfangen wird.

## Verwandte HTTP-Header

Die HTTP-Header werden im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet:

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Ein HTTP-Anforderungs-Header, der einen Nonce des Clients enthält.
    Dieser wird im [WebSocket-Eröffnungshandshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um zu überprüfen, dass der Client die Eröffnung einer WebSocket ausdrücklich beabsichtigt.
    Der Header wird automatisch vom Browser hinzugefügt.
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Ein HTTP-{{Glossary("response_header", "Antwort-Header")}}, der im _WebSocket-Eröffnungshandshake_ verwendet wird, um anzuzeigen, dass der Server bereit ist, auf eine WebSocket-Verbindung hochzustufen.
    Der Wert in der Direktive wird aus dem Wert von `Sec-WebSocket-Key` in der entsprechenden Anfrage berechnet.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client unterstützte Version des WebSocket-Protokolls angibt.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die vom Server unterstützten Versionen auf.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client unterstützten Subprotokolle in bevorzugter Reihenfolge angibt.
    In Antworten gibt er das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge angibt.
    In Antworten gibt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.

## Leitfäden

- [WebSocket-Client-Anwendungen schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [WebSocket-Server schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [Einen WebSocket-Server in C# schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Einen WebSocket-Server in Java schreiben](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
- [Einen WebSocket-Server in JavaScript (Deno) schreiben](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)
- [Verwendung von WebSocketStream zur Erstellung eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream)

## Werkzeuge

- [AsyncAPI](https://www.asyncapi.com/): Eine Spezifikation zur Beschreibung ereignisgesteuerter Architekturen auf Basis von Protokollen wie WebSocket. Sie können es verwenden, um WebSocket-basierte APIs zu beschreiben, ähnlich wie REST-APIs mit der OpenAPI-Spezifikation beschrieben werden. Erfahren Sie [warum Sie AsyncAPI mit WebSocket verwenden sollten](https://www.asyncapi.com/blog/websocket-part1) und [wie Sie es tun](https://www.asyncapi.com/blog/websocket-part2).
- [µWebSockets](https://github.com/uNetworking/uWebSockets): Hoch skalierbare Implementierung von WebSocket-Server und -Client für [C++11](https://isocpp.org/) und [Node.js](https://nodejs.org/).
- [Socket.IO](https://socket.io/): Ein Long-Polling/WebSocket-basiertes, Drittanbieter-Übertragungsprotokoll für [Node.js](https://nodejs.org/).
- [SocketCluster](https://socketcluster.io/): Ein Pub/Sub-WebSocket-Framework für [Node.js](https://nodejs.org/) mit Schwerpunkt auf Skalierbarkeit.
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node): Eine WebSocket-Server-API-Implementierung für [Node.js](https://nodejs.org/).
- [Total.js](https://www.totaljs.com/): Webanwendungs-Framework für [Node.js](https://nodejs.org/en) (Beispiel: [WebSocket-Chat](https://github.com/totaljs/examples/tree/master/websocket))
- [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr): SignalR verwendet WebSockets, wenn diese verfügbar sind, und greift nahtlos auf andere Techniken und Technologien zurück, wenn dies nicht der Fall ist, während Ihr Anwendungscode unverändert bleibt.
- [Caddy](https://caddyserver.com/): Ein Webserver, der beliebige Kommandos (stdin/stdout) als WebSocket weiterleiten kann.
- [ws](https://github.com/websockets/ws): Eine beliebte WebSocket-Client-&-Server-Bibliothek für [Node.js](https://nodejs.org/en).
- [cowboy](https://github.com/ninenines/cowboy): Cowboy ist ein kleiner, schneller und moderner HTTP-Server für Erlang/OTP mit WebSocket-Unterstützung.
- [ZeroMQ](https://zeromq.org/): ZeroMQ ist eine einbettbare Netzwerklibrary, die Nachrichten über In-Prozess, IPC, TCP, UDP, TIPC, Multicast und WebSocket überträgt.
- [WebSocket King](https://websocketking.com/): Ein Client-Tool zur Entwicklung, zum Testen und zur Arbeit mit WebSocket-Servern.
- [PHP WebSocket Server](https://github.com/napengam/phpWebSocketServer): Server geschrieben in PHP für die Verbindung über WebSockets `wss://` oder `ws://` sowie normale Sockets über `ssl://`, `tcp://`.
- [Django Channels](https://channels.readthedocs.io/en/stable/index.html): Django-Bibliothek mit Unterstützung für WebSockets (und andere Protokolle, die lang laufende asynchrone Verbindungen erfordern).
- [(Phoenix) Channels](https://hexdocs.pm/phoenix/channels.html): Skalierbare Echtzeit-Kommunikation mit WebSocket im Phoenix-Framework von Elixir.
- [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view): Interaktive Echtzeit-Weberlebnisse via WebSocket im Phoenix-Framework von Elixir.
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/): Erlaubt Flask-Anwendungen, niedrig-latenzige bidirektionale Kommunikation zwischen dem Client und dem Server zu nutzen.
- [Gorilla WebSocket](https://pkg.go.dev/github.com/gorilla/websocket): Gorilla WebSocket ist eine [Go](https://go.dev/)-Implementierung des WebSocket-Protokolls.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455 — Das WebSocket-Protokoll](https://datatracker.ietf.org/doc/html/rfc6455)
- [WebSocket-API-Spezifikation](https://websockets.spec.whatwg.org/)
- [Server-Sent Events](/de/docs/Web/API/Server-sent_events)
