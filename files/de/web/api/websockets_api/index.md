---
title: The WebSocket API (WebSockets)
slug: Web/API/WebSockets_API
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

{{DefaultAPISidebar("WebSockets API")}}{{AvailableInWorkers}}

Die **WebSocket-API** ermöglicht es, eine bidirektionale interaktive Kommunikationssitzung zwischen dem Browser des Nutzers und einem Server zu eröffnen. Mit dieser API können Sie Nachrichten an einen Server senden und Antworten empfangen, ohne den Server nach einer Antwort abfragen zu müssen.

Die WebSocket-API bietet zwei alternative Mechanismen zum Erstellen und Verwenden von WebSocket-Verbindungen: das [`WebSocket`](/de/docs/Web/API/WebSocket)-Interface und das [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Interface.

- Das `WebSocket`-Interface ist stabil und hat eine gute Unterstützung in Browsern und auf Servern. Allerdings unterstützt es keinen [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure). Daher kann es passieren, dass der Speicher des Geräts mit der Pufferung von Nachrichten gefüllt wird oder das System aufgrund 100%iger CPU-Auslastung unempfänglich wird, wenn Nachrichten schneller ankommen, als die Anwendung sie verarbeiten kann.
- Das `WebSocketStream`-Interface ist eine {{jsxref("Promise")}}-basierte Alternative zu `WebSocket`. Es verwendet die [Streams-API](/de/docs/Web/API/Streams_API), um das Empfangen und Senden von Nachrichten zu handhaben, was bedeutet, dass Socket-Verbindungen automatisch von der Stream-Backpressure profitieren können und die Geschwindigkeit des Lesens oder Schreibens regulieren, um Engpässe in der Anwendung zu vermeiden. Allerdings ist `WebSocketStream` nicht standardisiert und derzeit nur in einer Rendering-Engine unterstützt.

Zusätzlich wird erwartet, dass die [WebTransport-API](/de/docs/Web/API/WebTransport_API) für viele Anwendungen die WebSocket-API ersetzen wird. WebTransport ist eine vielseitige, niedrigstufige API, die Backpressure und viele andere Funktionen bietet, die weder von `WebSocket` noch von `WebSocketStream` unterstützt werden, wie unidirektionale Streams, unordentliche Lieferung und unzuverlässige Datenübertragung über Datagramme. WebTransport ist komplexer in der Anwendung als WebSockets und die Unterstützung in verschiedenen Browsern ist nicht so breit gefächert, aber sie ermöglicht die Implementierung ausgeklügelter Lösungen. Wenn standardmäßige WebSocket-Verbindungen gut zu Ihrem Anwendungsfall passen und Sie eine breite Browser-Kompatibilität benötigen, sollten Sie die WebSockets-API verwenden, um schnell einsatzbereit zu sein. Wenn Ihre Anwendung jedoch eine nicht standardmäßige, maßgeschneiderte Lösung erfordert, sollten Sie die WebTransport-API nutzen.

> [!NOTE]
> Wenn eine Seite eine offene WebSocket-Verbindung hat, kann der Browser diese möglicherweise nicht zum {{Glossary("bfcache", "bfcache")}} hinzufügen. Es ist daher eine gute Praxis, die Verbindung zu schließen, wenn der Nutzer mit der Seite fertig ist. Siehe [Arbeiten mit dem bfcache](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#working_with_the_bfcache).

## Schnittstellen

- [`WebSocket`](/de/docs/Web/API/WebSocket)
  - : Das primäre Interface, um sich mit einem WebSocket-Server zu verbinden und Daten über die Verbindung zu senden und zu empfangen.
- [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) {{non-standard_inline}}
  - : Promise-basiertes Interface zur Verbindung mit einem WebSocket-Server; verwendet [Streams](/de/docs/Web/API/Streams_API) zum Senden und Empfangen von Daten über die Verbindung.
- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
  - : Das Ereignis, das vom WebSocket-Objekt gesendet wird, wenn die Verbindung geschlossen wird.
- [`MessageEvent`](/de/docs/Web/API/MessageEvent)
  - : Das Ereignis, das vom WebSocket-Objekt gesendet wird, wenn eine Nachricht vom Server empfangen wird.

## Verwandte HTTP-Header

Die HTTP-Header werden im [WebSocket-Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet:

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Ein HTTP-Anforderungsheader, der einen {{Glossary("Nonce", "Nonce")}} vom Client enthält. Dieser wird im [WebSocket-Eröffnungs-Handschlag](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um zu überprüfen, dass der Client ausdrücklich die Absicht hat, einen WebSocket zu öffnen. Er wird vom Browser automatisch hinzugefügt.
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Ein HTTP-{{Glossary("response_header", "Antwortheader")}}, der im _WebSocket-Eröffnungs-Handschlag_ verwendet wird, um anzuzeigen, dass der Server bereit ist, auf eine WebSocket-Verbindung zu aktualisieren. Der Wert in der Anweisung wird aus dem Wert von `Sec-WebSocket-Key` in der entsprechenden Anfrage berechnet.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client verstandene Version des WebSocket-Protokolls angibt. In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird und die Versionen auflistet, die der Server unterstützt.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client in bevorzugter Reihenfolge unterstützten Sub-Protokolle angibt. In Antworten gibt er das vom Server aus den Präferenzen des Clients ausgewählte Sub-Protokoll an.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client in bevorzugter Reihenfolge unterstützten WebSocket-Erweiterungen angibt. In Antworten gibt er die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.

## Leitfäden

- [Erstellen von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Erstellen von WebSocket-Servern](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [Erstellen eines WebSocket-Servers in C#](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Erstellen eines WebSocket-Servers in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
- [Erstellen eines WebSocket-Servers in JavaScript (Deno)](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)
- [Verwendung von WebSocketStream zum Schreiben eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream)

## Werkzeuge

- [AsyncAPI](https://www.asyncapi.com/): Eine Spezifikation zur Beschreibung ereignisgesteuerter Architekturen basierend auf Protokollen wie WebSocket. Sie können es verwenden, um WebSocket-basierte APIs zu beschreiben, genauso wie Sie REST-APIs mit der OpenAPI-Spezifikation beschreiben würden. Erfahren Sie, [warum Sie AsyncAPI mit WebSocket verwenden sollten](https://www.asyncapi.com/blog/websocket-part1) und [wie Sie dies tun können](https://www.asyncapi.com/blog/websocket-part2).
- [µWebSockets](https://github.com/uNetworking/uWebSockets): Hoch skalierbare WebSocket-Server- und Client-Implementierung für [C++11](https://isocpp.org/) und [Node.js](https://nodejs.org/).
- [Socket.IO](https://socket.io/): Ein auf Long-Polling/WebSocket basierendes Drittprotokoll für [Node.js](https://nodejs.org/).
- [SocketCluster](https://socketcluster.io/): Ein pub/sub WebSocket-Framework für [Node.js](https://nodejs.org/) mit Schwerpunkt auf Skalierbarkeit.
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node): Eine WebSocket-Server-API-Implementierung für [Node.js](https://nodejs.org/).
- [Total.js](https://www.totaljs.com/): Web-Anwendungsframework für [Node.js](https://nodejs.org/en) (Beispiel: [WebSocket-Chat](https://github.com/totaljs/examples/tree/master/websocket))
- [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr): SignalR verwendet WebSockets im Hintergrund, wenn sie verfügbar sind, und wechselt elegant zu anderen Techniken und Technologien, wenn dies nicht der Fall ist, während Ihr Anwendungscode gleich bleibt.
- [Caddy](https://caddyserver.com/): Ein Webserver, der beliebige Befehle (stdin/stdout) als WebSocket umleiten kann.
- [ws](https://github.com/websockets/ws): eine beliebte WebSocket-Client- und Server-Bibliothek für [Node.js](https://nodejs.org/en).
- [cowboy](https://github.com/ninenines/cowboy): Cowboy ist ein kleiner, schneller und moderner HTTP-Server für Erlang/OTP mit WebSocket-Unterstützung.
- [ZeroMQ](https://zeromq.org/): ZeroMQ ist eine einbettbare Netzbibliothek, die Nachrichten über In-Prozess, IPC, TCP, UDP, TIPC, Multicast und WebSocket überträgt.
- [WebSocket King](https://websocketking.com/): Ein Client-Tool, um die Entwicklung, das Testen und Arbeiten mit WebSocket-Servern zu unterstützen.
- [PHP WebSocket Server](https://github.com/napengam/phpWebSocketServer): Server, der in PHP geschrieben wurde, um Verbindungen über WebSockets `wss://` oder `ws://` und normale Sockets über `ssl://`, `tcp://` zu handhaben.
- [Django Channels](https://channels.readthedocs.io/en/stable/index.html): Django-Bibliothek, die Unterstützung für WebSockets (und andere Protokolle, die langfristige asynchrone Verbindungen erfordern) hinzufügt.
- [Phoenix Channels](https://hexdocs.pm/phoenix/channels.html): Skalierbare Echtzeitkommunikation über WebSocket im Elixir-Phoenix-Framework.
- [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view): Echtzeit interaktive Web-Erlebnisse über WebSocket im Elixir-Phoenix-Framework.
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/): gibt Flask-Anwendungen Zugriff auf latenzarme bidirektionale Kommunikation zwischen Clients und dem Server.
- [Gorilla WebSocket](https://pkg.go.dev/github.com/gorilla/websocket): Gorilla WebSocket ist eine [Go](https://go.dev/)-Implementierung des WebSocket-Protokolls.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455 — Das WebSocket-Protokoll](https://datatracker.ietf.org/doc/html/rfc6455)
- [WebSocket-API-Spezifikation](https://websockets.spec.whatwg.org/)
- [Server-Sent Events](/de/docs/Web/API/Server-sent_events)
