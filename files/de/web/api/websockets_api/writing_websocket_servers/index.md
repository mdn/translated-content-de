---
title: WebSocket-Server schreiben
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("WebSockets API")}}

Ein WebSocket-Server ist nichts anderes als eine Anwendung, die auf einem beliebigen Port eines TCP-Servers lauscht und einem bestimmten Protokoll folgt. Einen benutzerdefinierten Server zu erstellen, kann überwältigend erscheinen, wenn Sie dies noch nie zuvor getan haben. Es kann jedoch recht einfach sein, einen grundlegenden WebSocket-Server auf der von Ihnen gewählten Plattform zu implementieren.

Ein WebSocket-Server kann in jeder serverseitigen Programmiersprache geschrieben werden, die [Berkeley Sockets](https://en.wikipedia.org/wiki/Berkeley_sockets) unterstützt, wie C(++), Python, [PHP](/de/docs/Glossary/PHP) oder [serverseitiges JavaScript](/de/docs/Learn/Server-side/Node_server_without_framework). Dies ist kein Tutorial in einer bestimmten Sprache, sondern dient als Leitfaden, um das Schreiben Ihres eigenen Servers zu erleichtern.

Dieser Artikel geht davon aus, dass Sie bereits wissen, wie [HTTP](/de/docs/Glossary/HTTP) funktioniert und dass Sie über ein moderates Maß an Programmiererfahrung verfügen. Abhängig von der Sprachunterstützung kann ein Wissen über TCP-Sockets erforderlich sein. Der Umfang dieses Leitfadens besteht darin, Ihnen das Mindestwissen zu vermitteln, das Sie zum Schreiben eines WebSocket-Servers benötigen.

> [!NOTE]
> Lesen Sie die neueste offizielle WebSockets-Spezifikation, [RFC 6455](https://datatracker.ietf.org/doc/rfc6455/?include_text=1). Die Abschnitte 1 und 4-7 sind besonders interessant für Server-Implementierer. Abschnitt 10 diskutiert Sicherheitsaspekte und sollte definitiv berücksichtigt werden, bevor Sie Ihren Server exponieren.

Ein WebSocket-Server wird hier auf sehr niedriger Ebene erklärt. WebSocket-Server sind oft separate und spezialisierte Server (aus Gründen des Lastenausgleichs oder anderer praktischer Gründe), daher verwenden Sie oft einen [Reverse-Proxy](https://en.wikipedia.org/wiki/Reverse_proxy) (wie einen regulären HTTP-Server), um WebSocket-Handshakes zu erkennen, vorzuverarbeiten und diese Clients an einen realen WebSocket-Server zu senden. Dies bedeutet, dass Sie Ihren Servercode nicht mit Cookie- und Authentifizierungshandlern überlasten müssen (zum Beispiel).

## Der WebSocket-Handshake

Zuerst muss der Server eingehende Socket-Verbindungen mit einem Standard-TCP-Socket empfangen. Abhängig von Ihrer Plattform kann dies automatisch für Sie erledigt werden. Nehmen wir beispielsweise an, dass Ihr Server auf `example.com`, Port 8000 lauscht und Ihr Socket-Server auf {{HTTPMethod("GET")}}-Anfragen bei `example.com/chat` antwortet.

> [!WARNING]
> Der Server kann auf jedem beliebigen Port lauschen, aber wenn er einen anderen als 80 oder 443 wählt, kann es zu Problemen mit Firewalls und/oder Proxys kommen. Browser verlangen im Allgemeinen eine sichere Verbindung für WebSockets, obwohl sie möglicherweise eine Ausnahme für lokale Geräte bieten.

Der Handshake ist das „Web“ in WebSockets. Er ist die Brücke von HTTP zu WebSockets. Im Handshake werden die Details der Verbindung ausgehandelt und jede Partei kann sich zurückziehen, wenn die Bedingungen ungünstig sind. Der Server muss darauf achten, alles zu verstehen, was der Client verlangt, sonst können Sicherheitsprobleme auftreten.

> [!NOTE]
> Der Request-URI (`/chat` hier) hat in der Spezifikation keine definierte Bedeutung. Viele Leute nutzen ihn daher, um einen Server mehrere WebSocket-Anwendungen handhaben zu lassen. Zum Beispiel könnte `example.com/chat` eine Multiuser-Chat-App aufrufen, während `/game` auf demselben Server ein Mehrspieler-Spiel starten könnte.

### Client-Handshake-Anfrage

Auch wenn Sie einen Server erstellen, muss ein Client dennoch den WebSocket-Handshake-Prozess starten, indem er den Server kontaktiert und eine WebSocket-Verbindung anfordert. Daher müssen Sie wissen, wie Sie die Anfrage des Clients interpretieren. Der **Client** sendet eine ziemlich standardmäßige HTTP-Anfrage mit Headern, die folgendermaßen aussieht (die HTTP-Version **muss** 1.1 oder größer sein und die Methode **muss** `GET` sein):

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Der Client kann hier Erweiterungen und/oder Subprotokolle anfordern; siehe [Verschiedenes](#verschiedenes) für Details. Außerdem könnten gängige Header wie {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Referer")}}, {{HTTPHeader("Cookie")}} oder Authentifizierungs-Header vorhanden sein. Handhaben Sie diese nach Ihren Wünschen; sie betreffen WebSockets nicht direkt. Es ist auch sicher, sie zu ignorieren. In vielen gängigen Setups hat sich bereits ein Reverse-Proxy um diese gekümmert.

> [!NOTE]
> Alle **Browser** senden einen [`Origin`-Header](/de/docs/Web/HTTP/CORS#origin). Sie können diesen Header für Sicherheitszwecke verwenden (Prüfen auf gleiche Herkunft, automatisches Zulassen oder Verweigern, etc.) und ein [403 Forbidden](/de/docs/Web/HTTP/Status/403) senden, wenn Ihnen Inhalte nicht gefallen. Dies ist effektiv gegen [Cross Site WebSocket Hijacking (CSWH)](https://cwe.mitre.org/data/definitions/1385.html). Allerdings sei gewarnt, dass nicht-browserbasierte Agenten einen gefälschten `Origin` senden können. Die meisten Anwendungen lehnen Anfragen ohne diesen Header ab.

Wenn ein Header nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine {{HTTPStatus("400")}} ("Bad Request")-Antwort senden und die Verbindung sofort schließen. Wie üblich kann auch der Grund für das Fehlschlagen des Handshakes im HTTP-Antworttext angegeben werden, aber die Nachricht wird möglicherweise nie angezeigt (Browser zeigen sie nicht an). Wenn der Server diese Version von WebSockets nicht versteht, sollte er einen {{HTTPHeader("Sec-WebSocket-Version")}}-Header zurücksenden, der die Version(en) enthält, die er versteht. Im obigen Beispiel zeigt er Version 13 des WebSocket-Protokolls an.

Der interessanteste Header hier ist {{HTTPHeader("Sec-WebSocket-Key")}}. Schauen wir uns diesen als nächstes an.

> **Hinweis:** [Reguläre HTTP-Statuscodes](/de/docs/Web/HTTP/Status) können nur vor dem Handshake verwendet werden. Nach dem erfolgreichen Handshake müssen Sie einen anderen Satz von Codes verwenden (definiert in Abschnitt 7.4 der Spezifikation).

### Server-Handshake-Antwort

Wenn der **Server** die Handshake-Anfrage erhält, sollte er eine spezielle Antwort zurücksenden, die anzeigt, dass das Protokoll von HTTP zu WebSocket geändert wird. Dieser Header sieht ungefähr so aus (denken Sie daran, dass jede Header-Zeile mit `\r\n` endet und setzen Sie ein zusätzliches `\r\n` nach der letzten, um das Ende des Headers anzuzeigen):

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Zusätzlich kann der Server hier über Erweiterungs-/Subprotokoll-Anfragen entscheiden; siehe [Verschiedenes](#verschiedenes) für Details. Der `Sec-WebSocket-Accept`-Header ist wichtig, da der Server ihn aus dem {{HTTPHeader("Sec-WebSocket-Key")}} ableiten muss, den der Client gesendet hat. Um ihn zu erhalten, fügen Sie die `Sec-WebSocket-Key` des Clients und die Zeichenkette `"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"` zusammen (es ist eine "[magische Zeichenkette](https://en.wikipedia.org/wiki/Magic_string)"), nehmen Sie den [SHA-1-Hash](https://en.wikipedia.org/wiki/SHA-1) des Ergebnisses und geben Sie die [Base64](https://en.wikipedia.org/wiki/Base64)-Codierung dieses Hashs zurück.

> [!NOTE]
> Dieser scheinbar überkomplizierte Prozess existiert, damit es für den Client offensichtlich ist, ob der Server WebSockets unterstützt. Dies ist wichtig, da Sicherheitsprobleme auftreten könnten, wenn der Server eine WebSockets-Verbindung akzeptiert, die Daten aber als HTTP-Anfrage interpretiert.

Wenn der Key also `"dGhlIHNhbXBsZSBub25jZQ=="` war, ist der Wert des `Sec-WebSocket-Accept`-Headers `"s3pPLMBiTxaQ9kYGzzhZRbK+xOo="`. Sobald der Server diese Header sendet, ist der Handshake abgeschlossen und Sie können beginnen, Daten auszutauschen!

> [!NOTE]
> Der Server kann andere Header wie {{HTTPHeader("Set-Cookie")}} senden oder vor dem Senden des Antwort-Handshakes nach Authentifizierung oder Umleitungen via anderer Status-Codes fragen.

### Aufzeichnen von Clients

Dies steht nicht direkt im Zusammenhang mit dem WebSocket-Protokoll, aber es lohnt sich, hier zu erwähnen: Ihr Server muss die Sockets von Clients nachverfolgen, damit Sie nicht erneut mit Clients handschütteln, die den Handshake bereits abgeschlossen haben. Dasselbe Client-IP kann mehrmals versuchen, sich zu verbinden. Der Server kann sie jedoch ablehnen, wenn sie zu viele Verbindungen initiieren, um sich selbst vor [Denial-of-Service-Angriffen](https://en.wikipedia.org/wiki/Denial_of_service) zu schützen.

Beispielsweise könnten Sie eine Tabelle mit Benutzernamen oder ID-Nummern zusammen mit dem entsprechenden [`WebSocket`](/de/docs/Web/API/WebSocket) und anderen Daten, die Sie mit dieser Verbindung verknüpfen müssen, führen.

## Austausch von Datenframes

Der Client oder der Server kann jederzeit eine Nachricht senden — das ist der Zauber von WebSockets. Allerdings ist das Extrahieren von Informationen aus diesen sogenannten „Frames“ von Daten eine weniger magische Erfahrung. Obwohl alle Frames demselben spezifischen Format folgen, sind die Daten, die vom Client zum Server gehen, unter Verwendung von [XOR-Verschlüsselung](https://en.wikipedia.org/wiki/XOR_cipher) (mit einem 32-Bit-Schlüssel) maskiert. Abschnitt 5 der Spezifikation beschreibt dies im Detail.

### Format

Jeder Datenframe (vom Client zum Server oder umgekehrt) folgt demselben Format:

```bash
Frame format:

      0                   1                   2                   3
      0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
     +-+-+-+-+-------+-+-------------+-------------------------------+
     |F|R|R|R| opcode|M| Payload len |    Extended payload length    |
     |I|S|S|S|  (4)  |A|     (7)     |             (16/64)           |
     |N|V|V|V|       |S|             |   (if payload len==126/127)   |
     | |1|2|3|       |K|             |                               |
     +-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
     |     Extended payload length continued, if payload len == 127  |
     + - - - - - - - - - - - - - - - +-------------------------------+
     |                               |Masking-key, if MASK set to 1  |
     +-------------------------------+-------------------------------+
     | Masking-key (continued)       |          Payload Data         |
     +-------------------------------- - - - - - - - - - - - - - - - +
     :                     Payload Data continued ...                :
     + - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
     |                     Payload Data continued ...                |
     +---------------------------------------------------------------+
```

Das bedeutet, dass ein Frame die folgenden Bytes enthält:

- Erstes Byte:
  - Bit 0: FIN
  - Bit 1: RSV1
  - Bit 2: RSV2
  - Bit 3: RSV3
  - Bits 4-7 OPCODE
- Bytes 2-10: Nutzlastlänge (siehe [Decoding Payload Length](#decoding_payload_length))
- Wenn Maskierung verwendet wird, enthalten die nächsten 4 Bytes den Maskierungsschlüssel (siehe [Reading and unmasking the data](#reading_and_unmasking_the_data))
- Alle nachfolgenden Bytes sind Nutzlast

Das MASK-Bit gibt an, ob die Nachricht kodiert ist. Nachrichten vom Client müssen maskiert sein, daher muss Ihr Server erwarten, dass dies 1 ist. (In der Tat sagt [Abschnitt 5.1 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.1), dass Ihr Server die Verbindung von einem Client trennen muss, wenn dieser Client eine unmaskierte Nachricht sendet.) Beim Senden eines Frames zurück an den Client maskieren Sie ihn nicht und setzen auch nicht das Maskenbit. Wir erklären später die Maskierung. _Hinweis: Sie müssen Nachrichten auch bei der Verwendung eines sicheren Sockets maskieren._ RSV1-3 können ignoriert werden, sie sind für Erweiterungen gedacht.

Das Opcode-Feld definiert, wie die Nutzlastdaten interpretiert werden sollen: `0x0` für Fortsetzung, `0x1` für Text (der immer in UTF-8 kodiert ist), `0x2` für Binär und andere sogenannte „Steuercodes“, die später besprochen werden. In dieser Version von WebSockets haben `0x3` bis `0x7` und `0xB` bis `0xF` keine Bedeutung.

Das FIN-Bit gibt an, ob dies die letzte Nachricht in einer Serie ist. Wenn es auf 0 gesetzt ist, hört der Server auf mehr Teile der Nachricht zu warten; andernfalls sollte der Server die Nachricht als zugestellt betrachten. Mehr dazu später.

### Decoding Payload Length

Um die Nutzlastdaten zu lesen, müssen Sie wissen, wann das Lesen gestoppt werden soll. Deshalb ist die Nutzlastlänge wichtig zu wissen. Leider ist dies etwas kompliziert. Gehen Sie zum Lesen wie folgt vor:

1. Lesen Sie die Bits 9-15 (einschließlich) und interpretieren Sie diese als eine Ganzzahl ohne Vorzeichen. Wenn es 125 oder weniger ist, dann ist das die Länge; Sie sind **fertig**. Wenn es 126 ist, gehen Sie zu Schritt 2. Wenn es 127 ist, gehen Sie zu Schritt 3.
2. Lesen Sie die nächsten 16 Bits und interpretieren Sie diese als eine Ganzzahl ohne Vorzeichen. Sie sind **fertig**.
3. Lesen Sie die nächsten 64 Bits und interpretieren Sie diese als eine Ganzzahl ohne Vorzeichen. (Das bedeutendste Bit _muss_ 0 sein.) Sie sind **fertig**.

### Reading and unmasking the data

Wenn das MASK-Bit gesetzt war (und es sollte für Client-zu-Server-Nachrichten gesetzt sein), lesen Sie die nächsten 4 Oktetten (32 Bits); dies ist der Maskierungsschlüssel. Sobald die Nutzlastlänge und der Maskierungsschlüssel decodiert sind, können Sie diese Anzahl von Bytes aus dem Socket lesen. Nennen wir die Daten `ENCODED` und den Schlüssel `MASK`. Um `DECODED` zu erhalten, gehen Sie die Oktetten (Bytes bzw. Zeichen für Textdaten) von `ENCODED` durch und XOR das Oktett mit dem (i modulo 4)ten Oktett von `MASK`. In Pseudocode (der zufällig gültiges JavaScript ist):

```js
const MASK = [1, 2, 3, 4]; // 4-byte mask
const ENCODED = [105, 103, 111, 104, 110]; // encoded string "hello"

// Create the byte Array of decoded payload
const DECODED = Uint8Array.from(ENCODED, (elt, i) => elt ^ MASK[i % 4]); // Perform an XOR on the mask
```

Jetzt können Sie herausfinden, was **DECODED** bedeutet, abhängig von Ihrer Anwendung.

### Nachrichtenfragmentierung

Die FIN- und Opcode-Felder arbeiten zusammen, um eine Nachricht, die in separate Frames aufgeteilt ist, zu senden. Dies nennt man Nachrichtenfragmentierung. Die Fragmentierung steht nur für die Opcodes `0x0` bis `0x2` zur Verfügung.

Erinnern Sie sich daran, dass der Opcode sagt, was ein Frame bewirken soll. Wenn es `0x1` ist, ist die Nutzlast Text. Wenn es `0x2` ist, ist die Nutzlast Binärdaten. Wenn es jedoch `0x0` ist, ist der Frame ein Fortsetzungs-Frame; das bedeutet, dass der Server die Nutzlast des Frames an den letzten Frame anhängen soll, den er von diesem Client erhalten hat. Hier ist eine grobe Skizze, in der ein Server reagiert, wenn ein Client Textnachrichten senden. Die erste Nachricht wird in einem einzigen Frame gesendet, während die zweite Nachricht über drei Frames versendet wird. FIN- und Opcode-Details werden nur für den Client angezeigt:

```plain
Client: FIN=1, opcode=0x1, msg="hello"
Server: (process complete message immediately) Hi.
Client: FIN=0, opcode=0x1, msg="and a"
Server: (listening, new message containing text started)
Client: FIN=0, opcode=0x0, msg="happy new"
Server: (listening, payload concatenated to previous message)
Client: FIN=1, opcode=0x0, msg="year!"
Server: (process complete message) Happy new year to you too!
```

Beachten Sie, dass der erste Frame eine vollständige Nachricht enthält (hat `FIN=1` und `opcode!=0x0`), sodass der Server diese nach Belieben verarbeiten oder darauf reagieren kann. Der zweite vom Client gesendete Frame hat eine Textnutzlast (`opcode=0x1`), aber die gesamte Nachricht ist noch nicht angekommen (`FIN=0`). Alle restlichen Teile dieser Nachricht werden mit Fortsetzungs-Frames (`opcode=0x0`) gesendet, und der letzte Frame der Nachricht ist mit `FIN=1` markiert. [Abschnitt 5.4 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.4) beschreibt die Nachrichtenfragmentierung.

## Pings und Pongs: Der Herzschlag der WebSockets

Jederzeit nach dem Handshake kann entweder der Client oder der Server sich entscheiden, einen Ping an die andere Partei zu senden. Wenn der Ping empfangen wird, muss der Empfänger so schnell wie möglich ein Pong zurücksenden. Sie können dies nutzen, um sicherzustellen, dass der Client noch verbunden ist, zum Beispiel.

Ein Ping oder Pong ist einfach ein regulärer Frame, aber es handelt sich um einen **Steuerframe**. Pings haben einen Opcode von `0x9` und Pongs haben einen Opcode von `0xA`. Wenn Sie einen Ping erhalten, senden Sie ein Pong mit genau denselben Nutzlastdaten wie der Ping (für Pings und Pongs beträgt die maximale Nutzlastlänge 125). Sie können auch ein Pong erhalten, ohne jemals einen Ping gesendet zu haben; ignorieren Sie dies, wenn es passiert.

> [!NOTE]
> Wenn Sie mehr als einen Ping erhalten haben, bevor Sie die Gelegenheit haben, ein Pong zu senden, senden Sie nur ein Pong.

## Schließen der Verbindung

Um eine Verbindung zu schließen, kann entweder der Client oder der Server einen Steuerframe mit Daten senden, die eine bestimmte Steuersequenz enthalten, um den Schließ-Handschlag zu beginnen (detailliert in [Abschnitt 5.5.1](https://datatracker.ietf.org/doc/html/rfc6455#section-5.5.1)). Nach dem Empfang eines solchen Frames sendet der andere Peer einen Close-Frame als Antwort. Der erste Peer schließt dann die Verbindung. Alle weiteren nach dem Schließen der Verbindung empfangenen Daten werden dann verworfen.

## Verschiedenes

> [!NOTE]
> WebSocket-Codes, Erweiterungen, Subprotokolle, etc. sind im [IANA WebSocket Protocol Registry](https://www.iana.org/assignments/websocket/websocket.xml) registriert.

WebSocket-Erweiterungen und Subprotokolle werden über Header während [des Handshakes](#der_websocket-handshake) ausgehandelt. Manchmal sind Erweiterungen und Subprotokolle sehr ähnlich, aber es gibt einen klaren Unterschied. Erweiterungen steuern das WebSocket-_Frame_ und _ändern_ die Nutzlast, während Subprotokolle die WebSocket-_Nutzlast_ strukturieren und _niemals etwas ändern_. Erweiterungen sind optional und allgemein (wie Komprimierung); Subprotokolle sind obligatorisch und lokalisiert (wie solche für Chat und für MMORPG-Spiele).

### Erweiterungen

Betrachten Sie eine Erweiterung als das Komprimieren einer Datei, bevor Sie sie jemandem per E-Mail senden. Was auch immer Sie tun, Sie senden dieselben Daten in verschiedenen Formen. Der Empfänger wird schließlich in der Lage sein, dieselben Daten wie Ihre lokale Kopie zu erhalten, aber es wird anders gesendet. Das ist es, was eine Erweiterung tut. WebSockets definiert ein Protokoll und eine einfache Möglichkeit, Daten zu senden, aber eine Erweiterung wie Kompression könnte das Senden derselben Daten in einem kürzeren Format ermöglichen.

> [!NOTE]
> Erweiterungen werden in den Abschnitten 5.8, 9, 11.3.2 und 11.4 der Spezifikation erklärt.

### Subprotokolle

Betrachten Sie ein Subprotokoll als ein benutzerdefiniertes [XML-Schema](https://en.wikipedia.org/wiki/XML_schema) oder eine [Doctype-Deklaration](https://en.wikipedia.org/wiki/Document_Type_Definition). Sie verwenden immer noch XML und seine Syntax, sind jedoch zusätzlich durch eine Struktur eingeschränkt, auf die Sie sich geeinigt haben. WebSocket-Subprotokolle sind genau so. Sie führen nichts Neues ein, sie stellen einfach eine Struktur her. Wie bei einem Doctype oder Schema müssen sich beide Parteien auf das Subprotokoll einigen; im Gegensatz zu einem Doctype oder Schema wird das Subprotokoll auf dem Server implementiert und kann nicht extern vom Client referenziert werden.

> [!NOTE]
> Subprotokolle werden in den Abschnitten 1.9, 4.2, 11.3.4 und 11.5 der Spezifikation erklärt.

Ein Client muss ein bestimmtes Subprotokoll anfordern. Dazu sendet er etwas wie das Folgende _als Teil des ursprünglichen Handshakes_:

```http
GET /chat HTTP/1.1
...
Sec-WebSocket-Protocol: soap, wamp
```

oder, äquivalent:

```http
...
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Nun muss der Server eines der Protokolle wählen, das der Client vorgeschlagen und es unterstützt. Gibt es mehr als eines, sendet man das erste, das der Client gesendet hat. Stellen Sie sich vor, unser Server kann sowohl `soap` als auch `wamp` verwenden. Dann sendet er im Antwort-Handshake:

```http
Sec-WebSocket-Protocol: soap
```

> [!WARNING]
> Der Server kann nicht mehr als einen `Sec-Websocket-Protocol`-Header senden.
> Wenn der Server kein Subprotokoll verwenden möchte, **_sollte er keinen `Sec-WebSocket-Protocol`-Header senden_**. Einen leeren Header zu senden, ist falsch. Der Client kann die Verbindung schließen, wenn er nicht das gewünschte Subprotokoll erhält.

Wenn Sie möchten, dass Ihr Server bestimmte Subprotokolle einhält, benötigen Sie natürlich zusätzlichen Code auf dem Server. Stellen Sie sich vor, wir verwenden ein Subprotokoll `json`. In diesem Subprotokoll werden alle Daten als [JSON](https://en.wikipedia.org/wiki/JSON) übermittelt. Wenn der Client dieses Protokoll anfordert und der Server es verwenden möchte, muss der Server einen JSON-Parser haben. Praktisch gesehen wird dies Teil einer Bibliothek sein, aber der Server muss die Daten weitergeben.

> [!NOTE]
> Um Namenskonflikte zu vermeiden, wird empfohlen, den Namen Ihres Subprotokolls Teil einer Domain-Zeichenfolge zu machen. Wenn Sie eine benutzerdefinierte Chat-App erstellen, die ein proprietäres Format exklusiv für Example Inc. verwendet, könnten Sie Folgendes verwenden: `Sec-WebSocket-Protocol: chat.example.com`. Beachten Sie, dass dies nicht erforderlich ist, es ist nur eine optionale Konvention, und Sie können jede beliebige Zeichenfolge verwenden.

## Verwandte Themen

- [WebSocket-Clientanwendungen schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Tutorial: WebSocket-Server in C#](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Tutorial: WebSocket-Server in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
