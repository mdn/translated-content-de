---
title: Schreiben von WebSocket-Servern
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("WebSockets API")}}

Ein WebSocket-Server ist nichts anderes als eine Anwendung, die an einem beliebigen Port eines TCP-Servers lauscht und einem bestimmten Protokoll folgt. Das Erstellen eines benutzerdefinierten Servers kann überwältigend erscheinen, wenn Sie es noch nie zuvor gemacht haben. Es kann jedoch ziemlich einfach sein, einen grundlegenden WebSocket-Server auf der von Ihnen gewählten Plattform zu implementieren.

Ein WebSocket-Server kann in jeder serverseitigen Programmiersprache geschrieben werden, die [Berkeley sockets](https://en.wikipedia.org/wiki/Berkeley_sockets) unterstützt, wie C(++), Python, {{Glossary("PHP", "PHP")}} oder [serverseitiges JavaScript](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework). Dies ist kein Tutorial in einer bestimmten Sprache, sondern dient als Leitfaden, um das Schreiben Ihres eigenen Servers zu erleichtern.

Dieser Artikel geht davon aus, dass Sie bereits mit dem Funktionsprinzip von {{Glossary("HTTP", "HTTP")}} vertraut sind und über ein moderates Maß an Programmiererfahrung verfügen. Abhängig von der Sprachunterstützung kann Wissen über TCP-Sockets erforderlich sein. Der Umfang dieses Leitfadens besteht darin, das Mindestwissen zu vermitteln, das Sie benötigen, um einen WebSocket-Server zu schreiben.

> [!NOTE]
> Lesen Sie die neueste offizielle WebSockets-Spezifikation, [RFC 6455](https://datatracker.ietf.org/doc/rfc6455/?include_text=1). Die Abschnitte 1 und 4-7 sind besonders interessant für Server-Implementierer. Abschnitt 10 behandelt Sicherheit, und Sie sollten ihn unbedingt lesen, bevor Sie Ihren Server freigeben.

Ein WebSocket-Server wird hier auf sehr niedriger Ebene erklärt. WebSocket-Server sind oft separate und spezialisierte Server (aus Gründen des Lastenausgleichs oder aus anderen praktischen Gründen), weshalb Sie oft einen [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy) (wie einen regulären HTTP-Server) verwenden, um WebSocket-Handshakes zu erkennen, vorzuverarbeiten und diese Clients an einen echten WebSocket-Server zu senden. Dies bedeutet, dass Sie Ihren Servercode nicht mit Cookie- und Authentifizierungs-Handlern überladen müssen (zum Beispiel).

## Der WebSocket-Handshake

Erstens muss der Server eingehende Socket-Verbindungen mit einem Standard-TCP-Socket überwachen. Abhängig von Ihrer Plattform kann dies automatisch für Sie erledigt werden. Angenommen, Ihr Server lauscht auf `example.com`, Port 8000, und Ihr Socket-Server antwortet auf {{HTTPMethod("GET")}}-Anfragen bei `example.com/chat`.

> [!WARNING]
> Der Server kann an jedem beliebigen Port lauschen, aber wenn er einen anderen Port als 80 oder 443 wählt, kann es Probleme mit Firewalls und/oder Proxys geben. Browser erfordern in der Regel eine sichere Verbindung für WebSockets, obwohl sie möglicherweise eine Ausnahme für lokale Geräte machen.

Der Handshake ist das "Web" in WebSockets. Er ist die Brücke von HTTP zu WebSockets. Im Handshake werden die Verbindungsdetails ausgehandelt, und jede Partei kann vor Abschluss zurücktreten, wenn die Bedingungen ungünstig sind. Der Server muss sorgfältig alles verstehen, was der Client verlangt, sonst können Sicherheitsprobleme auftreten.

> [!NOTE]
> Die request-uri (`/chat` hier) hat in der Spezifikation keine definierte Bedeutung. Daher nutzen viele Leute sie, um einen Server mit mehreren WebSocket-Anwendungen zu betreiben. Zum Beispiel könnte `example.com/chat` eine Multiuser-Chat-App aufrufen, während `/game` auf demselben Server ein Multiplayer-Spiel aufrufen könnte.

### Client-Handshake-Anfrage

Auch wenn Sie einen Server bauen, muss ein Client den WebSocket-Handshake-Prozess starten, indem er den Server kontaktiert und eine WebSocket-Verbindung anfordert. Sie müssen also wissen, wie Sie die Anfrage des Clients interpretieren können. Der **Client** sendet eine ziemlich standardmäßige HTTP-Anfrage mit Headern, die so aussieht (die HTTP-Version **muss** 1.1 oder höher sein, und die Methode **muss** `GET` sein):

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Der Client kann hier Erweiterungen und/oder Subprotokolle anfordern; siehe [Verschiedenes](#verschiedenes) für Details. Auch gängige Header wie {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Referer")}}, {{HTTPHeader("Cookie")}} oder Authentifizierungs-Header könnten ebenfalls vorhanden sein. Tun Sie damit, was Sie wollen; sie betreffen nicht direkt das WebSocket. Es ist auch sicher, sie zu ignorieren. In vielen gängigen Setups hat ein Reverse-Proxy sich bereits um sie gekümmert.

> [!NOTE]
> Alle **Browser** senden einen [`Origin`-Header](/de/docs/Web/HTTP/CORS#origin). Sie können diesen Header für Sicherheitszwecke verwenden (Überprüfung auf gleiche Herkunft, automatisches Zulassen oder Ablehnen usw.) und einen [403 Forbidden](/de/docs/Web/HTTP/Status/403) senden, wenn Ihnen etwas nicht gefällt, was Sie sehen. Dies ist wirksam gegen [Cross Site WebSocket Hijacking (CSWH)](https://cwe.mitre.org/data/definitions/1385.html). Beachten Sie jedoch, dass nicht-browserbasierte Agents einen gefälschten `Origin` senden können. Die meisten Anwendungen lehnen Anfragen ohne diesen Header ab.

Wenn ein Header nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine {{HTTPStatus("400")}} ("Bad Request")-Antwort senden und die Socket-Verbindung sofort schließen. Wie üblich kann er auch den Grund für das Fehlschlagen des Handshakes im HTTP-Antwortkörper angeben, aber die Nachricht wird möglicherweise nie angezeigt (Browser zeigen sie nicht an). Wenn der Server diese Version von WebSockets nicht versteht, sollte er einen {{HTTPHeader("Sec-WebSocket-Version")}}-Header zurücksenden, der die Version(en) enthält, die er versteht. Im obigen Beispiel wird Version 13 des WebSocket-Protokolls angegeben.

Der interessanteste Header ist hier {{HTTPHeader("Sec-WebSocket-Key")}}. Schauen wir uns den als Nächstes an.

> **Note:** [Reguläre HTTP-Statuscodes](/de/docs/Web/HTTP/Status) können nur vor dem Handshake verwendet werden. Nach dem erfolgreichen Handshake müssen Sie einen anderen Satz von Codes verwenden (definiert in Abschnitt 7.4 der Spezifikation).

### Server-Handshake-Antwort

Wenn der **Server** die Handshake-Anfrage erhält, sollte er eine spezielle Antwort zurücksenden, die angibt, dass sich das Protokoll von HTTP zu WebSocket ändern wird. Dieser Header sieht in etwa so aus (denken Sie daran, dass jede Headerzeile mit `\r\n` endet und setzen Sie ein zusätzliches `\r\n` nach der letzten, um das Ende des Headers anzuzeigen):

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Zusätzlich kann der Server hier über Erweiterungs-/Subprotokollanfragen entscheiden; siehe [Verschiedenes](#verschiedenes) für Details. Der `Sec-WebSocket-Accept`-Header ist wichtig, da der Server ihn aus dem vom Client gesendeten {{HTTPHeader("Sec-WebSocket-Key")}} ableiten muss. Um ihn zu erhalten, müssen Sie den `Sec-WebSocket-Key` des Clients und den String `"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"` zusammenfügen (es ist ein "[magic string](https://en.wikipedia.org/wiki/Magic_string)"), den [SHA-1-Hash](https://en.wikipedia.org/wiki/SHA-1) des Ergebnisses nehmen und die [Base64](https://en.wikipedia.org/wiki/Base64)-Kodierung dieses Hashes zurückgeben.

> [!NOTE]
> Dieser scheinbar überkomplizierte Prozess dient dazu, dass es dem Client offensichtlich ist, ob der Server WebSockets unterstützt. Dies ist wichtig, da Sicherheitsprobleme auftreten könnten, wenn der Server eine WebSockets-Verbindung akzeptiert, die Daten aber als HTTP-Anfrage interpretiert.

Wenn der Key zum Beispiel `"dGhlIHNhbXBsZSBub25jZQ=="` war, wäre der Wert des `Sec-WebSocket-Accept`-Headers `"s3pPLMBiTxaQ9kYGzzhZRbK+xOo="`. Sobald der Server diese Header sendet, ist der Handshake abgeschlossen und Sie können beginnen, Daten auszutauschen!

> [!NOTE]
> Der Server kann andere Header wie {{HTTPHeader("Set-Cookie")}} senden oder über andere Statuscodes nach Authentifizierung oder Umleitungen fragen, bevor er den Antwort-Handshake sendet.

### Nachverfolgung von Clients

Dies bezieht sich nicht direkt auf das WebSocket-Protokoll, es ist jedoch erwähnenswert: Ihr Server muss die Sockets der Clients verfolgen, damit Sie nicht erneut mit Clients, die den Handshake bereits abgeschlossen haben, den Handshake durchführen müssen. Die gleiche Client-IP-Adresse kann mehrmals versuchen, eine Verbindung herzustellen. Der Server kann sie jedoch ablehnen, wenn sie zu viele Verbindungen herstellen, um sich vor [Denial-of-Service-Angriffen](https://en.wikipedia.org/wiki/Denial_of_service) zu schützen.

Zum Beispiel könnten Sie eine Tabelle von Benutzernamen oder ID-Nummern zusammen mit dem entsprechenden [`WebSocket`](/de/docs/Web/API/WebSocket) und anderen Daten führen, die Sie mit dieser Verbindung verknüpfen müssen.

## Austausch von Datenframes

Entweder der Client oder der Server kann jederzeit eine Nachricht senden — das ist die Magie von WebSockets. Das Erhalten von Informationen aus diesen sogenannten "Frames" von Daten ist jedoch eher eine nicht-magische Erfahrung. Obwohl alle Frames demselben spezifischen Format folgen, werden Daten vom Client an den Server unter Verwendung von [XOR-Verschlüsselung](https://en.wikipedia.org/wiki/XOR_cipher) (mit einem 32-Bit-Schlüssel) maskiert. Abschnitt 5 der Spezifikation beschreibt dies im Detail.

### Format

Jeder Datenframe (vom Client zum Server oder umgekehrt) folgt diesem gleichen Format:

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
  - bit 0: FIN
  - bit 1: RSV1
  - bit 2: RSV2
  - bit 3: RSV3
  - bits 4-7 OPCODE
- Bytes 2-10: Payload-Länge (siehe [Decoding Payload Length](#decoding_payload_length))
- Wenn Maskierung verwendet wird, enthalten die nächsten 4 Bytes den Maskierungsschlüssel (siehe [Reading and unmasking the data](#reading_and_unmasking_the_data))
- Alle nachfolgenden Bytes sind die Payload

Das MASK-Bit zeigt an, ob die Nachricht kodiert ist. Nachrichten vom Client müssen maskiert sein, daher muss Ihr Server damit rechnen, dass dieses Bit 1 ist. (Tatsächlich sagt [Abschnitt 5.1 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.1), dass Ihr Server die Verbindung zu einem Client trennen muss, wenn dieser Client eine unmaskierte Nachricht sendet.) Wenn Sie einem Client einen Frame zurücksenden, maskieren Sie diesen nicht und setzen Sie das Maskenbit nicht. Wir erklären das Maskieren später. _Hinweis: Sie müssen Nachrichten maskieren, auch wenn Sie einen sicheren Socket verwenden._ RSV1-3 können ignoriert werden, sie sind für Erweiterungen gedacht.

Das Opcode-Feld definiert, wie die Payload-Daten interpretiert werden: `0x0` für Fortsetzung, `0x1` für Text (das immer in UTF-8 kodiert ist), `0x2` für Binär und andere sogenannte "Kontrollcodes", die später behandelt werden. In dieser Version von WebSockets haben `0x3` bis `0x7` und `0xB` bis `0xF` keine Bedeutung.

Das FIN-Bit gibt an, ob dies die letzte Nachricht einer Serie ist. Ist es 0, hört der Server weiter auf weitere Teile der Nachricht; andernfalls sollte der Server die Nachricht als geliefert betrachten. Mehr dazu später.

### Decoding Payload Length

Um die Payload-Daten zu lesen, müssen Sie wissen, wann Sie aufhören müssen. Deshalb ist die Payload-Länge wichtig. Leider ist dies etwas kompliziert. Um sie zu lesen, folgen Sie diesen Schritten:

1. Lesen Sie die Bits 9-15 (einschließlich) und interpretieren Sie diese als eine vorzeichenlose Ganzzahl. Wenn sie 125 oder weniger ist, dann ist das die Länge; Sie sind **fertig**. Wenn sie 126 ist, gehen Sie zu Schritt 2. Wenn sie 127 ist, gehen Sie zu Schritt 3.
2. Lesen Sie die nächsten 16 Bits und interpretieren Sie diese als eine vorzeichenlose Ganzzahl. Sie sind **fertig**.
3. Lesen Sie die nächsten 64 Bits und interpretieren Sie diese als eine vorzeichenlose Ganzzahl. (Das bedeutendste Bit _muss_ 0 sein.) Sie sind **fertig**.

### Reading and unmasking the data

Wenn das MASK-Bit gesetzt war (und das sollte es bei Nachrichten von Client zu Server sein), lesen Sie die nächsten 4 Oktetten (32 Bits); dies ist der Maskierungsschlüssel. Sobald die Payload-Länge und der Maskenschlüssel dekodiert sind, können Sie diese Anzahl von Bytes aus dem Socket lesen. Lassen Sie uns die Daten `ENCODED` nennen, und den Schlüssel `MASK`. Um `DECODED` zu erhalten, durchlaufen Sie die Oktetten (Bytes bzw. Zeichen für Textdaten) von `ENCODED` und XORen Sie das Oktett mit dem (i modulo 4)ten Oktett von `MASK`. Im Pseudocode (das zufällig gültiges JavaScript ist):

```js
const MASK = [1, 2, 3, 4]; // 4-byte mask
const ENCODED = [105, 103, 111, 104, 110]; // encoded string "hello"

// Create the byte Array of decoded payload
const DECODED = Uint8Array.from(ENCODED, (elt, i) => elt ^ MASK[i % 4]); // Perform an XOR on the mask
```

Jetzt können Sie herausfinden, was **DECODED** bedeutet, abhängig von Ihrer Anwendung.

### Nachrichtfragmentierung

Die FIN- und Opcode-Felder arbeiten zusammen, um eine Nachricht aufzuteilen und in separate Frames zu senden. Dies wird Nachrichtfragmentierung genannt. Fragmentierung ist nur bei Opcodes `0x0` bis `0x2` verfügbar.

Denken Sie daran, dass das Opcode-Feld angibt, was ein Frame tun soll. Wenn es `0x1` ist, ist die Payload Text. Wenn es `0x2` ist, ist die Payload Binärdaten. Ist es jedoch `0x0`, handelt es sich um einen Fortsetzungsframe; das bedeutet, dass der Server die Payload des Frames mit dem letzten Frame, den er von diesem Client erhalten hat, verketten soll. Hier ist ein grober Skizze, in der ein Server auf einen Client reagiert, der Textnachrichten sendet. Die erste Nachricht wird in einem einzigen Frame gesendet, während die zweite Nachricht über drei Frames gesendet wird. FIN- und Opcode-Details werden nur für den Client gezeigt:

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

Beachten Sie, dass der erste Frame eine vollständige Nachricht enthält (hat `FIN=1` und `opcode!=0x0`), so dass der Server sie nach Belieben verarbeiten oder beantworten kann. Der zweite vom Client gesendete Frame hat eine Text-Payload (`opcode=0x1`), aber die gesamte Nachricht ist noch nicht angekommen (`FIN=0`). Alle verbleibenden Teile dieser Nachricht werden mit Fortsetzungsframes (`opcode=0x0`) gesendet, und der letzte Frame der Nachricht ist mit `FIN=1` gekennzeichnet. [Abschnitt 5.4 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.4) beschreibt die Nachrichtfragmentierung.

## Pings und Pongs: Der Herzschlag von WebSockets

Zu jedem Zeitpunkt nach dem Handshake kann entweder der Client oder der Server einen Ping an die andere Partei senden. Wenn der Ping empfangen wird, muss der Empfänger so schnell wie möglich einen Pong zurücksenden. Sie können dies verwenden, um sicherzustellen, dass der Client noch verbunden ist, zum Beispiel.

Ein Ping oder Pong ist einfach ein regulärer Frame, aber er ist ein **Kontrollframe**. Pings haben einen Opcode von `0x9`, und Pongs haben einen Opcode von `0xA`. Wenn Sie einen Ping erhalten, senden Sie einen Pong mit exakt derselben Payload-Daten wie der Ping zurück (für Pings und Pongs beträgt die maximale Payload-Länge 125). Sie könnten auch einen Pong erhalten, ohne jemals einen Ping gesendet zu haben; ignorieren Sie dies, wenn es passiert.

> [!NOTE]
> Wenn Sie mehr als einen Ping erhalten haben, bevor Sie einen Pong senden können, senden Sie nur einen Pong.

## Verbindung schließen

Um eine Verbindung zu schließen, kann entweder der Client oder der Server einen Kontrollframe mit Daten senden, die eine spezifizierte Steuersequenz enthalten, um den Schließhandshake zu beginnen (ausführlich beschrieben in [Abschnitt 5.5.1](https://datatracker.ietf.org/doc/html/rfc6455#section-5.5.1)). Beim Empfang eines solchen Frames sendet der andere Peer einen Close-Frame als Antwort. Der erste Peer schließt dann die Verbindung. Alle weiteren Daten, die nach dem Schließen der Verbindung empfangen werden, werden dann verworfen.

## Verschiedenes

> [!NOTE]
> WebSocket-Codes, -Erweiterungen, -Subprotokolle usw. sind beim [IANA WebSocket Protocol Registry](https://www.iana.org/assignments/websocket/websocket.xml) registriert.

WebSocket-Erweiterungen und -Subprotokolle werden über Header während [des Handshakes](#der_websocket-handshake) ausgehandelt. Manchmal sind Erweiterungen und Subprotokolle sehr ähnlich, aber es gibt einen klaren Unterschied. Erweiterungen steuern den WebSocket-_Frame_ und _modifizieren_ die Payload, während Subprotokolle die WebSocket-_Payload_ strukturieren und _niemals_ etwas modifizieren. Erweiterungen sind optional und allgemein (wie Kompression); Subprotokolle sind obligatorisch und lokalisiert (z. B. solche für Chat und für MMORPG-Spiele).

### Erweiterungen

Denken Sie an eine Erweiterung als Komprimieren einer Datei, bevor Sie sie jemandem per E-Mail senden. Was auch immer Sie tun, Sie senden dieselben Daten in unterschiedlicher Form. Der Empfänger wird schließlich in der Lage sein, dieselben Daten wie Ihre lokale Kopie zu erhalten, aber sie werden anders gesendet. Das macht eine Erweiterung. WebSockets definiert ein Protokoll und eine einfache Möglichkeit, Daten zu senden, aber eine Erweiterung wie Kompression könnte es ermöglichen, dieselben Daten in einem kürzeren Format zu senden.

> [!NOTE]
> Erweiterungen werden in den Abschnitten 5.8, 9, 11.3.2 und 11.4 der Spezifikation erklärt.

### Subprotokolle

Denken Sie an ein Subprotokoll als ein benutzerdefiniertes [XML-Schema](https://en.wikipedia.org/wiki/XML_schema) oder eine [Dokumenttyp-Deklaration](https://en.wikipedia.org/wiki/Document_Type_Definition). Sie verwenden immer noch XML und seine Syntax, aber Sie sind zusätzlich durch eine Struktur eingeschränkt, auf die Sie sich geeinigt haben. WebSocket-Subprotokolle sind genau so. Sie führen nichts Neues ein, sie etablieren nur Struktur. Wie eine Dokumenttyp-Deklaration oder ein Schema müssen sich beide Parteien auf das Subprotokoll einigen; im Gegensatz zu einer Dokumenttyp-Deklaration oder einem Schema wird das Subprotokoll auf dem Server implementiert und kann nicht extern vom Client referenziert werden.

> [!NOTE]
> Subprotokolle werden in den Abschnitten 1.9, 4.2, 11.3.4 und 11.5 der Spezifikation erklärt.

Ein Client muss ein bestimmtes Subprotokoll anfordern. Dazu sendet er etwas wie dies _als Teil des ursprünglichen Handshakes_:

```http
GET /chat HTTP/1.1
...
Sec-WebSocket-Protocol: soap, wamp
```

oder äquivalent:

```http
...
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Jetzt muss der Server eines der Protokolle auswählen, das der Client vorgeschlagen hat und das er unterstützt. Wenn es mehr als eines gibt, senden Sie das erste, das der Client gesendet hat. Stellen Sie sich vor, unser Server kann sowohl `soap` als auch `wamp` verwenden. Dann sendet er in der Antwort beim Handshake:

```http
Sec-WebSocket-Protocol: soap
```

> [!WARNING]
> Der Server kann nicht mehr als einen `Sec-WebSocket-Protocol`-Header senden.
> Wenn der Server kein Subprotokoll verwenden möchte, **_sollte er keinen `Sec-WebSocket-Protocol`-Header senden_**. Einen leeren Header zu senden ist falsch. Der Client kann die Verbindung schließen, wenn er nicht das gewünschte Subprotokoll erhält.

Wenn Sie möchten, dass Ihr Server bestimmte Subprotokolle beachtet, benötigen Sie natürlich zusätzlichen Code auf dem Server. Stellen Sie sich vor, wir verwenden ein Subprotokoll `json`. In diesem Subprotokoll werden alle Daten als [JSON](https://en.wikipedia.org/wiki/JSON) übertragen. Wenn der Client dieses Protokoll anfordert und der Server es verwenden möchte, muss der Server einen JSON-Parser haben. Praktisch gesehen wird dies Teil einer Bibliothek sein, aber der Server muss die Daten herumreichen.

> [!NOTE]
> Um Namenskonflikte zu vermeiden, wird empfohlen, den Namen Ihres Subprotokolls als Teil eines Domänennamens zu gestalten. Wenn Sie eine benutzerdefinierte Chat-App bauen, die ein proprietäres Format verwendet, das exklusiv für Example Inc. ist, könnten Sie dies verwenden: `Sec-WebSocket-Protocol: chat.example.com`. Beachten Sie, dass dies keine Anforderung ist, sondern nur eine optionale Konvention, und Sie können jeden gewünschten String verwenden.

## Verwandte Themen

- [Schreiben von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Tutorial: WebSocket-Server in C#](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Tutorial: WebSocket-Server in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
