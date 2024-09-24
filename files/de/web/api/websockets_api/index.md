---
title: Die WebSocket-API (WebSockets)
slug: Web/API/WebSockets_API
l10n:
  sourceCommit: f49de43625cd621fd73c7ba2e9a2db3d8566580f
---

{{DefaultAPISidebar("WebSockets API")}}

Die **WebSocket-API** ermöglicht es, eine bidirektionale interaktive Kommunikationssitzung zwischen dem Browser des Benutzers und einem Server zu eröffnen. Mit dieser API können Sie Nachrichten an einen Server senden und Antworten empfangen, ohne den Server nach einer Antwort abfragen zu müssen.

Die WebSocket-API bietet zwei alternative Mechanismen zur Erstellung und Nutzung von Websocket-Verbindungen: das {{domxref("WebSocket")}}-Interface und das {{domxref("WebSocketStream")}}-Interface.

- Das `WebSocket`-Interface ist stabil und wird von Browsern und Servern gut unterstützt. Es unterstützt jedoch keinen [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure). Dadurch kann es bei Nachrichten, die schneller eintreffen als die Anwendung sie verarbeiten kann, entweder den Speicher des Geräts durch Puffern dieser Nachrichten füllen, aufgrund von 100% CPU-Auslastung nicht mehr reagieren oder beides.
- Das `WebSocketStream`-Interface ist eine {{jsxref("Promise")}}-basierte Alternative zu `WebSocket`. Es verwendet die [Streams API](/de/docs/Web/API/Streams_API), um das Empfangen und Senden von Nachrichten zu handhaben, was bedeutet, dass Socket-Verbindungen automatisch die Vorteile von Stream-Backpressure nutzen können, um die Geschwindigkeit des Lesens oder Schreibens zu regulieren und so Engpässe in der Anwendung zu vermeiden. Allerdings ist `WebSocketStream` nicht standardisiert und wird derzeit nur von einer Rendering-Engine unterstützt.

Zusätzlich wird erwartet, dass die [WebTransport API](/de/docs/Web/API/WebTransport_API) die WebSocket-API für viele Anwendungen ersetzen könnte. WebTransport ist eine vielseitige, niederstufige API, die Backpressure und viele andere Funktionen bietet, die weder `WebSocket` noch `WebSocketStream` unterstützen, wie unidirektionale Streams, nicht in der Reihenfolge erfolgte Übertragungen und unzuverlässige Datenübertragung über Datagramme. WebTransport ist komplexer zu nutzen als WebSockets und hat weniger breite Unterstützung über verschiedene Browser hinweg, ermöglicht jedoch die Implementierung anspruchsvoller Lösungen. Wenn Standard-WebSocket-Verbindungen gut für Ihre Anwendungsfälle geeignet sind und Sie eine breite Browserkompatibilität benötigen, sollten Sie die WebSockets-API verwenden, um Ihren Einsatz schnell zu starten. Benötigt Ihre Anwendung jedoch eine nicht standardisierte, maßgeschneiderte Lösung, dann sollten Sie die WebTransport-API verwenden.

> [!NOTE]
> Während eine WebSocket-Verbindung funktional somewhat ähnlich zu Standard-Unix-Stil-Sockets ist, sind sie nicht miteinander verwandt.

## Schnittstellen

- [`WebSocket`](/de/docs/Web/API/WebSocket)
  - : Die primäre Schnittstelle für die Verbindung zu einem WebSocket-Server und dann das Senden und Empfangen von Daten über die Verbindung.
- [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) {{non-standard_inline}}
  - : Promise-basierte Schnittstelle zur Verbindung mit einem WebSocket-Server; verwendet [Streams](/de/docs/Web/API/Streams_API) zum Senden und Empfangen von Daten über die Verbindung.
- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
  - : Das Ereignis, das vom WebSocket-Objekt gesendet wird, wenn die Verbindung geschlossen wird.
- [`MessageEvent`](/de/docs/Web/API/MessageEvent)
  - : Das Ereignis, das vom WebSocket-Objekt gesendet wird, wenn eine Nachricht vom Server empfangen wird.

## Verwandte HTTP-Header

Die HTTP-Header werden im [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet:

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Ein HTTP-Anforderungsheader, der einen Nonce vom Client enthält.
    Dies wird beim [WebSocket-Opening-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um zu verifizieren, dass der Client ausdrücklich beabsichtigt, einen WebSocket zu öffnen.
    Er wird automatisch vom Browser hinzugefügt.
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Ein HTTP {{glossary("Antwort-Header")}}, der im _WebSocket-Opening-Handshake_ verwendet wird, um anzuzeigen, dass der Server bereit ist, auf eine WebSocket-Verbindung zu wechseln.
    Der Wert des Direktivs wird aus dem Wert von `Sec-WebSocket-Key` in der entsprechenden Anfrage berechnet.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client verstandene Version des WebSocket-Protokolls angibt.
    In Antworten wird er nur gesendet, wenn die angeforderte Protokollversion vom Server nicht unterstützt wird, und listet die Versionen auf, die der Server unterstützt.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client unterstützten Subprotokolle in bevorzugter Reihenfolge angibt.
    In Antworten gibt es das vom Server aus den Präferenzen des Clients ausgewählte Subprotokoll an.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client unterstützten WebSocket-Erweiterungen in bevorzugter Reihenfolge angibt.
    In Antworten gibt es die vom Server aus den Präferenzen des Clients ausgewählte Erweiterung an.

## Anleitungen

- [Erstellung von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Erstellung von WebSocket-Servern](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [Einen WebSocket-Server in C# erstellen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Einen WebSocket-Server in Java erstellen](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
- [Einen WebSocket-Server in JavaScript (Deno) erstellen](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)
- [Verwendung von WebSocketStream zur Erstellung eines Clients](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream)

## Werkzeuge

- [AsyncAPI](https://www.asyncapi.com/): Eine Spezifikation zur Beschreibung ereignisgesteuerter Architekturen basierend auf Protokollen wie WebSocket. Sie können es verwenden, um WebSocket-basierte APIs zu beschreiben, genauso wie Sie REST-APIs mit der OpenAPI-Spezifikation beschreiben würden. Erfahren Sie [warum Sie AsyncAPI mit WebSocket in Betracht ziehen sollten](https://www.asyncapi.com/blog/websocket-part1) und [wie das geht](https://www.asyncapi.com/blog/websocket-part2).
- [µWebSockets](https://github.com/uNetworking/uWebSockets): Hoch skalierbare WebSocket-Server- und Client-Implementierung für [C++11](https://isocpp.org/) und [Node.js](https://nodejs.org/).
- [Socket.IO](https://socket.io/): Ein Protokoll eines Drittanbieters basierend auf Long Polling/WebSocket für [Node.js](https://nodejs.org/).
- [SocketCluster](https://socketcluster.io/): Ein Pub/Sub-WebSocket-Framework für [Node.js](https://nodejs.org/) mit Fokus auf Skalierbarkeit.
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node): Eine WebSocket-Server-API-Implementierung für [Node.js](https://nodejs.org/).
- [Total.js](https://www.totaljs.com/): Webapplikations-Framework für [Node.js](https://nodejs.org/en) (Beispiel: [WebSocket-Chat](https://github.com/totaljs/examples/tree/master/websocket)).
- [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr): SignalR verwendet WebSockets, wenn verfügbar, und wechselt nahtlos zu anderen Techniken und Technologien, wenn es nicht verfügbar ist, während Ihr Anwendungscode gleich bleibt.
- [Caddy](https://caddyserver.com/): Ein Webserver, der beliebige Befehle (stdin/stdout) als WebSocket proxieren kann.
- [ws](https://github.com/websockets/ws): Eine beliebte WebSocket-Client- & Server-Bibliothek für [Node.js](https://nodejs.org/en).
- [cowboy](https://github.com/ninenines/cowboy): Cowboy ist ein kleiner, schneller und moderner HTTP-Server für Erlang/OTP mit WebSocket-Unterstützung.
- [ZeroMQ](https://zeromq.org/): ZeroMQ ist eine einbettbare Netzwerkbibliothek, die Nachrichten über In-Process, IPC, TCP, UDP, TIPC, Multicast und WebSocket überträgt.
- [WebSocket King](https://websocketking.com/): Ein Client-Tool zur Unterstützung bei der Entwicklung, dem Testen und der Arbeit mit WebSocket-Servern.
- [PHP WebSocket Server](https://github.com/napengam/phpWebSocketServer): Server in PHP für die Verwaltung von Verbindungen über WebSockets `wss://` oder `ws://` und normale Sockets über `ssl://`, `tcp://`.
- [Django Channels](https://channels.readthedocs.io/en/stable/index.html): Django-Bibliothek, die Unterstützung für WebSockets (und andere Protokolle, die lang laufende asynchrone Verbindungen erfordern) hinzufügt.
- [(Phoenix) Channels](https://hexdocs.pm/phoenix/channels.html): Skalierbare Echtzeitkommunikation mit WebSocket im Elixir Phoenix Framework.
- [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view): Echtzeit-interaktive Web-Erlebnisse durch WebSocket im Elixir Phoenix Framework.
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/): Gibt Flask-Anwendungen Zugriff auf niedrig latente bidirektionale Kommunikation zwischen den Clients und dem Server.
- [Gorilla WebSocket](https://pkg.go.dev/github.com/gorilla/websocket): Gorilla WebSocket ist eine [Go](https://go.dev/) Implementierung des WebSocket-Protokolls.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455 — Das WebSocket-Protokoll](https://datatracker.ietf.org/doc/html/rfc6455)
- [WebSocket-API-Spezifikation](https://websockets.spec.whatwg.org/)
- [Server-Sent Events](/de/docs/Web/API/Server-sent_events)
