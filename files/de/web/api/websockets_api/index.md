---
title: WebSocket API (WebSockets)
slug: Web/API/WebSockets_API
l10n:
  sourceCommit: 4f62576d552b13a897c03ae8d4caeb58ccd01392
---

{{DefaultAPISidebar("WebSockets API")}}{{AvailableInWorkers}}

Die **WebSocket API** ermöglicht es, eine interaktive, bidirektionale Kommunikationsverbindung zwischen dem Browser des Benutzers und einem Server aufzubauen. Mit dieser API können Sie Nachrichten an einen Server senden und Antworten empfangen, ohne den Server wiederholt nach einer Antwort abfragen zu müssen.

Das `WebSocket`-Interface unterstützt kein [Backpressure](/de/docs/Web/API/Streams_API/Concepts#backpressure). Wenn Nachrichten schneller eintreffen, als die Anwendung sie verarbeiten kann, werden sie daher entweder so lange gepuffert, bis der Arbeitsspeicher des Geräts ausgelastet ist, oder die Anwendung reagiert aufgrund einer CPU-Auslastung von 100 % nicht mehr – oder beides tritt ein. Wenn Backpressure ein Problem darstellt, verwenden Sie stattdessen die [WebTransport API](/de/docs/Web/API/WebTransport_API). Sie unterstützt Backpressure und viele weitere Funktionen, die `WebSocket` nicht bietet, etwa unidirektionale Streams, die Zustellung außerhalb der Reihenfolge und die unzuverlässige Datenübertragung per Datagramm. Das [`WebSocketStream`](/de/docs/Web/API/WebSocketStream)-Interface ist ein früherer Versuch, das Backpressure-Problem zu lösen. Es ist jedoch nicht standardisiert und wird weniger gut unterstützt als die WebTransport API.

> [!NOTE]
> Wenn eine Seite über eine offene WebSocket-Verbindung verfügt, nimmt der Browser sie möglicherweise nicht in den {{Glossary("bfcache", "bfcache")}} auf. Daher empfiehlt es sich, die Verbindung zu schließen, sobald der Benutzer die Seite nicht mehr verwendet. Weitere Informationen finden Sie unter [Arbeiten mit dem bfcache](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications#working_with_the_bfcache).

## Interfaces

- [`WebSocket`](/de/docs/Web/API/WebSocket)
  - : Das zentrale Interface, um eine Verbindung zu einem WebSocket-Server herzustellen und darüber Daten zu senden und zu empfangen.
- [`WebSocketStream`](/de/docs/Web/API/WebSocketStream) {{non-standard_inline}}
  - : Promise-basiertes Interface, um eine Verbindung zu einem WebSocket-Server herzustellen. Es verwendet [Streams](/de/docs/Web/API/Streams_API), um über die Verbindung Daten zu senden und zu empfangen.
- [`CloseEvent`](/de/docs/Web/API/CloseEvent)
  - : Das Event, das das WebSocket-Objekt sendet, wenn die Verbindung geschlossen wird.
- [`MessageEvent`](/de/docs/Web/API/MessageEvent)
  - : Das Event, das das WebSocket-Objekt sendet, wenn eine Nachricht vom Server empfangen wird.

## Zugehörige HTTP-Header

Die HTTP-Header werden beim [WebSocket-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet:

- {{HTTPHeader("Sec-WebSocket-Key")}}
  - : Ein HTTP-Request-Header, der eine {{Glossary("Nonce", "Nonce")}} des Clients enthält.
    Sie wird beim [WebSocket-Opening-Handshake](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake) verwendet, um zu überprüfen, ob der Client ausdrücklich eine WebSocket-Verbindung öffnen möchte.
    Der Browser fügt den Header automatisch hinzu.
- {{HTTPHeader("Sec-WebSocket-Accept")}}
  - : Ein HTTP-{{Glossary("response_header", "Response-Header")}}, der beim _WebSocket-Opening-Handshake_ anzeigt, dass der Server bereit ist, auf eine WebSocket-Verbindung umzusteigen.
    Der Wert dieser Direktive wird aus dem Wert von `Sec-WebSocket-Key` in der zugehörigen Anfrage berechnet.
- {{HTTPHeader("Sec-WebSocket-Version")}}
  - : Ein HTTP-Header, der in Anfragen angibt, welche Version des WebSocket-Protokolls der Client unterstützt.
    In Antworten wird er nur gesendet, wenn der Server die angeforderte Protokollversion nicht unterstützt. Er listet dann die vom Server unterstützten Versionen auf.
- {{HTTPHeader("Sec-WebSocket-Protocol")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client unterstützten Unterprotokolle in der Reihenfolge ihrer Präferenz angibt.
    In Antworten gibt er das Unterprotokoll an, das der Server aus den Präferenzen des Clients ausgewählt hat.
- {{HTTPHeader("Sec-WebSocket-Extensions")}}
  - : Ein HTTP-Header, der in Anfragen die vom Client unterstützten WebSocket-Erweiterungen in der Reihenfolge ihrer Präferenz angibt.
    In Antworten gibt er die Erweiterung an, die der Server aus den Präferenzen des Clients ausgewählt hat.

## Leitfäden

- [WebSocket-Clientanwendungen schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [WebSocket-Server schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_servers)
- [Einen WebSocket-Server in C# schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Einen WebSocket-Server in Java schreiben](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
- [Einen WebSocket-Server in JavaScript (Deno) schreiben](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_JavaScript_Deno)
- [Mit WebSocketStream einen Client schreiben](/de/docs/Web/API/WebSockets_API/Using_WebSocketStream)

## Werkzeuge

- [AsyncAPI](https://www.asyncapi.com/): Eine Spezifikation zur Beschreibung ereignisgesteuerter Architekturen, die auf Protokollen wie WebSocket basieren. Damit können Sie WebSocket-basierte APIs ähnlich beschreiben wie REST-APIs mit der OpenAPI-Spezifikation. Erfahren Sie, [warum Sie AsyncAPI mit WebSocket verwenden sollten](https://www.asyncapi.com/blog/websocket-part1) und [wie das funktioniert](https://www.asyncapi.com/blog/websocket-part2).
- [µWebSockets](https://github.com/uNetworking/uWebSockets): Hochgradig skalierbare WebSocket-Server- und -Clientimplementierung für [C++11](https://isocpp.org/) und [Node.js](https://nodejs.org/).
- [Socket.IO](https://socket.io/): Ein auf Long Polling und WebSocket basierendes Übertragungsprotokoll eines Drittanbieters für [Node.js](https://nodejs.org/).
- [SocketCluster](https://socketcluster.io/): Ein auf Skalierbarkeit ausgelegtes Pub/Sub-WebSocket-Framework für [Node.js](https://nodejs.org/).
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node): Eine WebSocket-Server-API-Implementierung für [Node.js](https://nodejs.org/).
- [Total.js](https://www.totaljs.com/): Webanwendungs-Framework für [Node.js](https://nodejs.org/en) (Beispiel: [WebSocket-Chat](https://github.com/totaljs/examples/tree/master/websocket))
- [SignalR](https://dotnet.microsoft.com/en-us/apps/aspnet/signalr): SignalR verwendet WebSockets, wenn sie verfügbar sind, und weicht andernfalls nahtlos auf andere Techniken und Technologien aus. Ihr Anwendungscode bleibt dabei unverändert.
- [Caddy](https://caddyserver.com/): Ein Webserver, der beliebige Befehle (stdin/stdout) über WebSocket weiterleiten kann.
- [ws](https://github.com/websockets/ws): Eine beliebte WebSocket-Client- und -Serverbibliothek für [Node.js](https://nodejs.org/en).
- [cowboy](https://github.com/ninenines/cowboy): Cowboy ist ein kleiner, schneller und moderner HTTP-Server für Erlang/OTP mit WebSocket-Unterstützung.
- [ZeroMQ](https://zeromq.org/): ZeroMQ ist eine einbettbare Netzwerkbibliothek, die Nachrichten über In-Process-Kommunikation, IPC, TCP, UDP, TIPC, Multicast und WebSocket überträgt.
- [WebSocket King](https://websocketking.com/): Ein Client-Tool, das bei der Entwicklung, beim Testen und bei der Arbeit mit WebSocket-Servern hilft.
- [PHP WebSocket Server](https://github.com/napengam/phpWebSocketServer): Ein in PHP geschriebener Server, der Verbindungen über WebSockets mit `wss://` oder `ws://` sowie normale Sockets über `ssl://` oder `tcp://` verarbeitet.
- [Django Channels](https://channels.readthedocs.io/en/stable/index.html): Eine Django-Bibliothek, die Unterstützung für WebSockets und andere Protokolle hinzufügt, die langlebige asynchrone Verbindungen benötigen.
- [(Phoenix) Channels](https://phoenix.hexdocs.pm/channels.html): Skalierbare Echtzeitkommunikation über WebSocket im Elixir-Phoenix-Framework.
- [Phoenix LiveView](https://github.com/phoenixframework/phoenix_live_view): Interaktive Weberlebnisse in Echtzeit über WebSocket im Elixir-Phoenix-Framework.
- [Flask-SocketIO](https://flask-socketio.readthedocs.io/en/latest/): Ermöglicht Flask-Anwendungen eine bidirektionale Kommunikation mit geringer Latenz zwischen Clients und Server.
- [Gorilla WebSocket](https://pkg.go.dev/github.com/gorilla/websocket): Gorilla WebSocket ist eine [Go](https://go.dev/)-Implementierung des WebSocket-Protokolls.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [RFC 6455 – Das WebSocket-Protokoll](https://datatracker.ietf.org/doc/html/rfc6455)
- [WebSocket-API-Spezifikation](https://websockets.spec.whatwg.org/)
- [Server-Sent Events](/de/docs/Web/API/Server-sent_events)
