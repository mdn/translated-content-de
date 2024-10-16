---
title: Schreiben von WebSocket-Servern
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{DefaultAPISidebar("WebSockets API")}}

Ein WebSocket-Server ist nichts anderes als eine Anwendung, die an einem beliebigen Port eines TCP-Servers lauscht und einem bestimmten Protokoll folgt. Die Erstellung eines eigenen Servers kann überwältigend erscheinen, wenn man es noch nie zuvor gemacht hat. Es kann jedoch recht einfach sein, einen grundlegenden WebSocket-Server auf Ihrer bevorzugten Plattform zu implementieren.

Ein WebSocket-Server kann in jeder serverseitigen Programmiersprache geschrieben werden, die [Berkeley sockets](https://en.wikipedia.org/wiki/Berkeley_sockets) unterstützt, wie C(++), Python, {{Glossary("PHP", "PHP")}} oder [serverseitiges JavaScript](/de/docs/Learn/Server-side/Node_server_without_framework). Dies ist kein Tutorial in einer spezifischen Sprache, sondern dient als Leitfaden, um das Schreiben Ihres eigenen Servers zu erleichtern.

Dieser Artikel setzt voraus, dass Sie bereits wissen, wie {{Glossary("HTTP", "HTTP")}} funktioniert, und dass Sie über ein mittleres Niveau an Programmiererfahrung verfügen. Je nach Sprachunterstützung kann Wissen über TCP-Sockets erforderlich sein. Der Umfang dieses Leitfadens besteht darin, das Mindestwissen zu präsentieren, das Sie benötigen, um einen WebSocket-Server zu schreiben.

> [!NOTE]
> Lesen Sie die neueste offizielle WebSockets-Spezifikation, [RFC 6455](https://datatracker.ietf.org/doc/rfc6455/?include_text=1). Die Abschnitte 1 und 4-7 sind insbesondere für Serverimplementierer interessant. Abschnitt 10 behandelt die Sicherheit, und Sie sollten ihn unbedingt durchsehen, bevor Sie Ihren Server freigeben.

Ein WebSocket-Server wird hier auf einer sehr niedrigen Ebene erklärt. WebSocket-Server sind oft separate und spezialisierte Server (aus Gründen der Lastverteilung oder aus anderen praktischen Gründen), daher verwenden Sie oft einen [Reverse-Proxy](https://en.wikipedia.org/wiki/Reverse_proxy) (wie einen regulären HTTP-Server), um WebSocket-Handshakes zu erkennen, diese vorzuverarbeiten und diese Clients an einen echten WebSocket-Server weiterzuleiten. Dies bedeutet, dass Sie Ihren Servercode nicht mit Cookie- und Authentifizierungs-Handlern (zum Beispiel) aufblähen müssen.

## Der WebSocket-Handshake

Zuerst muss der Server eingehende Socket-Verbindungen mit einem Standard-TCP-Socket überwachen. Abhängig von Ihrer Plattform kann dies automatisch für Sie erledigt werden. Angenommen, Ihr Server lauscht auf `example.com`, Port 8000, und Ihr Socket-Server antwortet auf {{HTTPMethod("GET")}}-Anfragen bei `example.com/chat`.

> [!WARNING]
> Der Server kann an jedem Port lauschen, den er wählt, aber wenn er einen anderen Port als 80 oder 443 wählt, kann es Probleme mit Firewalls und/oder Proxys geben. Browser erfordern im Allgemeinen eine sichere Verbindung für WebSockets, obwohl sie möglicherweise eine Ausnahme für lokale Geräte anbieten.

Der Handshake ist das "Web" in WebSockets. Es ist die Brücke von HTTP zu WebSockets. Im Handshake werden die Verbindungsdetails ausgehandelt, und jede Partei kann vor Abschluss zurücktreten, wenn die Bedingungen ungünstig sind. Der Server muss sorgfältig alles verstehen, was der Client verlangt, ansonsten können Sicherheitsprobleme auftreten.

> [!NOTE]
> Die request-uri (`/chat` hier) hat in der Spezifikation keine definierte Bedeutung. Daher verwenden viele Leute sie, um einen Server mehrere WebSocket-Anwendungen verwalten zu lassen. Zum Beispiel könnte `example.com/chat` eine Multi-User-Chat-App aufrufen, während `/game` auf dem gleichen Server ein Multiplayer-Spiel aufrufen könnte.

### Client-Handshake-Anfrage

Auch wenn Sie einen Server erstellen, muss ein Client dennoch den WebSocket-Handshake-Prozess starten, indem er den Server kontaktiert und eine WebSocket-Verbindung anfordert. Daher müssen Sie wissen, wie Sie die Anfrage des Clients interpretieren. Der **Client** sendet eine ziemlich standardmäßige HTTP-Anfrage mit Headern, die so aussieht (die HTTP-Version **muss** 1.1 oder höher sein, und die Methode **muss** `GET` sein):

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Der Client kann hier Erweiterungen und/oder Subprotokolle anfordern; Details dazu finden Sie unter [Miscellaneous](#verschiedenes). Auch übliche Header wie {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Referer")}}, {{HTTPHeader("Cookie")}} oder Authentifizierungsheader könnten ebenfalls vorhanden sein. Tun Sie, was Sie möchten damit; sie betreffen das WebSocket nicht direkt. Es ist auch sicher, sie zu ignorieren. In vielen häufigen Setups hat ein Reverse-Proxy bereits damit umgegangen.

> [!NOTE]
> Alle **Browser** senden einen [`Origin`-Header](/de/docs/Web/HTTP/CORS#origin). Sie können diesen Header für Sicherheit verwenden (Prüfung auf die gleiche Herkunft, automatisch erlauben oder verweigern usw.) und einen [403 Forbidden](/de/docs/Web/HTTP/Status/403) senden, wenn Ihnen nicht gefällt, was Sie sehen. Dies ist effektiv gegen [Cross Site WebSocket Hijacking (CSWH)](https://cwe.mitre.org/data/definitions/1385.html). Es sei jedoch gewarnt, dass Nicht-Browser-Agenten einen gefälschten `Origin` senden können. Die meisten Anwendungen lehnen Anfragen ohne diesen Header ab.

Wenn irgendein Header nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine {{HTTPStatus("400")}} ("Bad Request")-Antwort senden und den Socket sofort schließen. Wie üblich kann auch der Grund für das Scheitern des Handshakes im HTTP-Antwortkörper angegeben werden, aber die Nachricht wird möglicherweise nie angezeigt (Browser zeigen sie nicht an). Wenn der Server diese Version von WebSockets nicht versteht, sollte er einen {{HTTPHeader("Sec-WebSocket-Version")}}-Header zurücksenden, der die Version(en) enthält, die er versteht. Im obigen Beispiel gibt er Version 13 des WebSocket-Protokolls an.

Der interessanteste Header hier ist {{HTTPHeader("Sec-WebSocket-Key")}}. Lassen Sie uns diesen als nächstes betrachten.

> **Hinweis:** [Reguläre HTTP-Statuscodes](/de/docs/Web/HTTP/Status) können nur vor dem Handshake verwendet werden. Nachdem der Handshake erfolgreich war, müssen Sie eine andere Menge an Codes verwenden (definiert in Abschnitt 7.4 der Spezifikation).

### Server-Handshake-Antwort

Wenn der **Server** die Handshake-Anfrage erhält, sollte er eine spezielle Antwort zurücksenden, die anzeigt, dass das Protokoll von HTTP zu WebSocket gewechselt wird. Dieser Header sieht etwa wie folgt aus (denken Sie daran, dass jede Kopfzeile mit `\r\n` endet und setzen Sie ein zusätzliches `\r\n` nach der letzten, um das Ende des Headers anzuzeigen):

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Zusätzlich kann der Server hier Entscheidungen zu Erweiterungs-/Subprotokollanforderungen treffen; siehe [Miscellaneous](#verschiedenes) für weitere Details. Der `Sec-WebSocket-Accept`-Header ist wichtig, da der Server ihn aus dem vom Client gesendeten {{HTTPHeader("Sec-WebSocket-Key")}} ableiten muss. Um ihn zu erhalten, verketten Sie den `Sec-WebSocket-Key` des Clients und die Zeichenfolge `"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"` miteinander (es ist ein "[Magic String](https://en.wikipedia.org/wiki/Magic_string)"), nehmen Sie den [SHA-1-Hash](https://en.wikipedia.org/wiki/SHA-1) des Ergebnisses und geben Sie die [Base64](https://en.wikipedia.org/wiki/Base64)-Kodierung dieses Hashes zurück.

> [!NOTE]
> Dieser scheinbar überkomplizierte Prozess existiert, damit es für den Client offensichtlich ist, ob der Server WebSockets unterstützt. Dies ist wichtig, da Sicherheitsprobleme auftreten könnten, wenn der Server eine WebSockets-Verbindung akzeptiert, die Daten jedoch als HTTP-Anfrage interpretiert.

Wenn der Key also `"dGhlIHNhbXBsZSBub25jZQ=="` war, lautet der Wert des `Sec-WebSocket-Accept`-Headers `"s3pPLMBiTxaQ9kYGzzhZRbK+xOo="`. Sobald der Server diese Header sendet, ist der Handshake abgeschlossen und Sie können mit dem Datenaustausch beginnen!

> [!NOTE]
> Der Server kann andere Header wie {{HTTPHeader("Set-Cookie")}} senden oder um Authentifizierung oder Umleitungen über andere Statuscodes bitten, bevor er den Antworthandshake sendet.

### Verfolgen von Clients

Dies steht nicht direkt im Zusammenhang mit dem WebSocket-Protokoll, aber es ist erwähnenswert: Ihr Server muss die Sockets der Clients verfolgen, damit Sie nicht erneut mit Clients verhandeln, die den Handshake bereits abgeschlossen haben. Dieselbe Client-IP-Adresse kann versuchen, sich mehrmals zu verbinden. Der Server kann jedoch Verbindungen ablehnen, wenn sie zu viele Versuche unternehmen, um sich vor [Denial-of-Service-Angriffen](https://en.wikipedia.org/wiki/Denial_of_service) zu schützen.

Sie könnten beispielsweise eine Tabelle mit Benutzernamen oder ID-Nummern zusammen mit dem entsprechenden [`WebSocket`](/de/docs/Web/API/WebSocket) und anderen Daten führen, die Sie mit dieser Verbindung verknüpfen müssen.

## Datenaustauschrahmen

Entweder der Client oder der Server kann jederzeit eine Nachricht senden — das ist die Magie von WebSockets. Das Ermitteln von Informationen aus diesen sogenannten "Frames" ist jedoch keine so magische Erfahrung. Obwohl alle Frames demselben spezifischen Format folgen, werden Daten, die vom Client zum Server gehen, mit [XOR-Verschlüsselung](https://en.wikipedia.org/wiki/XOR_cipher) (mit einem 32-Bit-Schlüssel) maskiert. Abschnitt 5 der Spezifikation beschreibt dies im Detail.

### Format

Jeder Datenrahmen (vom Client zum Server oder umgekehrt) folgt diesem gleichen Format:

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

Dies bedeutet, dass ein Frame die folgenden Bytes enthält:

- Erstes Byte:
  - Bit 0: FIN
  - Bit 1: RSV1
  - Bit 2: RSV2
  - Bit 3: RSV3
  - Bits 4-7 OPCODE
- Bytes 2-10: Payload-Länge (siehe [Dekodierung der Payload-Länge](#dekodierung_der_payload-länge))
- Wenn Maskierung verwendet wird, enthalten die nächsten 4 Bytes den Maskierungsschlüssel (siehe [Lesen und Entmaskieren der Daten](#lesen_und_entmaskieren_der_daten))
- Alle nachfolgenden Bytes sind Payload

Das MASK-Bit gibt an, ob die Nachricht verschlüsselt ist. Nachrichten vom Client müssen maskiert sein, so dass Ihr Server erwarten muss, dass dies 1 ist. (Tatsächlich sagt [Abschnitt 5.1 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.1), dass Ihr Server die Verbindung zu einem Client trennen muss, wenn dieser Client eine unmaskierte Nachricht sendet.) Wenn Sie einen Frame an den Client zurücksenden, maskieren Sie ihn nicht und setzen Sie das Maskenbit nicht. Wir werden die Maskierung später erklären. _Hinweis: Sie müssen Nachrichten auch dann maskieren, wenn Sie einen sicheren Socket verwenden._ RSV1-3 können ignoriert werden, sie sind für Erweiterungen.

Das Opcodes-Feld definiert, wie die Nutzlastinterpretation erfolgt: `0x0` für Fortsetzung, `0x1` für Text (der immer in UTF-8 codiert ist), `0x2` für binär, und andere sogenannte "Kontrollcodes", die später besprochen werden. In dieser Version von WebSockets haben `0x3` bis `0x7` und `0xB` bis `0xF` keine Bedeutung.

Das FIN-Bit gibt an, ob dies die letzte Nachricht in einer Serie ist. Wenn es 0 ist, wartet der Server auf weitere Teile der Nachricht; andernfalls sollte der Server die Nachricht als zugestellt betrachten. Mehr dazu später.

### Dekodierung der Payload-Länge

Um die Payload-Daten zu lesen, müssen Sie wissen, wann Sie aufhören sollten zu lesen. Deshalb ist es wichtig, die Payload-Länge zu kennen. Leider ist dies etwas kompliziert. Um dies zu lesen, folgen Sie diesen Schritten:

1. Lesen Sie die Bits 9-15 (einschließlich) und interpretieren Sie dies als eine vorzeichenlose Ganzzahl. Wenn es 125 oder weniger ist, dann ist das die Länge; Sie sind **fertig**. Wenn es 126 ist, gehen Sie zu Schritt 2. Wenn es 127 ist, gehen Sie zu Schritt 3.
2. Lesen Sie die nächsten 16 Bits und interpretieren Sie diese als eine vorzeichenlose Ganzzahl. Sie sind **fertig**.
3. Lesen Sie die nächsten 64 Bits und interpretieren Sie diese als eine vorzeichenlose Ganzzahl. (Das bedeutendste Bit _muss_ 0 sein.) Sie sind **fertig**.

### Lesen und Entmaskieren der Daten

Wenn das MASK-Bit gesetzt war (und es sollte für Client-zu-Server-Nachrichten sein), lesen Sie die nächsten 4 Oktette (32 Bits); dies ist der Maskenschlüssel. Sobald die Payload-Länge und der Maskierungsschlüssel dekodiert sind, können Sie diese Anzahl von Bytes vom Socket lesen. Nennen wir die Daten `ENCODED`, und den Schlüssel `MASK`. Um `DECODED` zu erhalten, durchlaufen Sie die Oktette (Bytes, auch als Zeichen für Textdaten bezeichnet) von `ENCODED` und XORen Sie das Oktett mit dem (i modulo 4)-ten Oktett von `MASK`. In Pseudocode (das zufällig gültiges JavaScript ist):

```js
const MASK = [1, 2, 3, 4]; // 4-byte mask
const ENCODED = [105, 103, 111, 104, 110]; // encoded string "hello"

// Create the byte Array of decoded payload
const DECODED = Uint8Array.from(ENCODED, (elt, i) => elt ^ MASK[i % 4]); // Perform an XOR on the mask
```

Jetzt können Sie herausfinden, was **DECODED** bedeutet, abhängig von Ihrer Anwendung.

### Nachrichtenfragmentierung

Die FIN- und Opcode-Felder arbeiten zusammen, um eine Nachricht zu senden, die in separate Frames aufgeteilt ist. Dies wird Nachrichtenfragmentierung genannt. Die Fragmentierung ist nur bei Opcodes `0x0` bis `0x2` verfügbar.

Erinnern Sie sich daran, dass der Opcode angibt, was ein Frame zu tun bestimmt ist. Ist er `0x1`, ist die Nutzlast Text. Ist es `0x2`, ist die Nutzlast Binärdaten. Ist es jedoch `0x0`, ist der Frame ein Fortsetzungsframe; dies bedeutet, dass der Server die Nutzlast des Frames an den letzten Frame anhängen sollte, den er von diesem Client empfangen hat. Hier ist ein grobes Schema, in dem ein Server auf einen Client reagiert, der Nachrichten sendet. Die erste Nachricht wird in einem einzigen Frame gesendet, während die zweite Nachricht über drei Frames gesendet wird. FIN- und Opcode-Details werden nur für den Client angezeigt:

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

Beachten Sie, dass der erste Frame eine vollständige Nachricht enthält (hat `FIN=1` und `opcode!=0x0`), so dass der Server nach Belieben darauf reagieren oder antworten kann. Der zweite vom Client gesendete Frame hat eine Textzuglast (`opcode=0x1`), aber die gesamte Nachricht ist noch nicht angekommen (`FIN=0`). Alle weiteren Teile dieser Nachricht werden mit Fortsetzungsframes (`opcode=0x0`) gesendet, und der letzte Frame der Nachricht wird durch `FIN=1` gekennzeichnet. [Abschnitt 5.4 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.4) beschreibt die Nachrichtenfragmentierung.

## Pings und Pongs: Der Herzschlag von WebSockets

Zu jedem Zeitpunkt nach dem Handshake kann entweder der Client oder der Server wählen, einen Ping an die andere Partei zu senden. Wenn der Ping empfangen wird, muss der Empfänger so schnell wie möglich einen Pong zurücksenden. Sie können dies verwenden, um sicherzustellen, dass der Client noch verbunden ist, zum Beispiel.

Ein Ping oder Pong ist einfach ein regulärer Frame, aber es ist ein **Kontrollframe**. Pings haben einen Opcode von `0x9`, und Pongs haben einen Opcode von `0xA`. Wenn Sie einen Ping erhalten, senden Sie einen Pong mit genau denselben Nutzdaten zurück wie beim Ping (für Pings und Pongs beträgt die maximale Nutzlänge 125). Sie könnten auch einen Pong erhalten, ohne jemals einen Ping zu senden; ignorieren Sie dies, wenn es passiert.

> [!NOTE]
> Wenn Sie mehr als einen Ping erhalten haben, bevor Sie einen Pong senden können, senden Sie nur einen Pong.

## Beenden der Verbindung

Um eine Verbindung zu schließen, kann entweder der Client oder der Server einen Kontrollframe mit Daten senden, der eine bestimmte Kontrollsequenz enthält, um den Schließungs-Handshake zu beginnen (detailliert in [Abschnitt 5.5.1](https://datatracker.ietf.org/doc/html/rfc6455#section-5.5.1)). Beim Empfang eines solchen Frames sendet der andere Peer einen Schließen-Frame als Antwort zurück. Der erste Peer schließt dann die Verbindung. Alle weiteren nach dem Schließen der Verbindung empfangenen Daten werden dann verworfen.

## Verschiedenes

> [!NOTE]
> WebSocket-Codes, Erweiterungen, Subprotokolle usw. werden im [IANA WebSocket-Protokollregister](https://www.iana.org/assignments/websocket/websocket.xml) registriert.

WebSocket-Erweiterungen und Subprotokolle werden über Header während [des Handshakes](#der_websocket-handshake) ausgehandelt. Manchmal sind Erweiterungen und Subprotokolle sehr ähnlich, aber es gibt eine klare Unterscheidung. Erweiterungen steuern das WebSocket-_Frame_ und _modifizieren_ die Nutzdaten, während Subprotokolle das WebSocket-_Payload_ strukturieren und _nichts modifizieren_. Erweiterungen sind optional und generalisiert (wie Komprimierung); Subprotokolle sind obligatorisch und lokalisiert (wie solche für Chat und für MMORPG-Spiele).

### Erweiterungen

Denken Sie an eine Erweiterung wie das Komprimieren einer Datei, bevor Sie sie jemandem per E-Mail senden. Was auch immer Sie tun, Sie senden dieselben Daten in unterschiedlicher Form. Der Empfänger kann letztendlich dieselben Daten wie Ihre lokale Kopie erhalten, aber sie werden anders gesendet. Das ist es, was eine Erweiterung tut. WebSockets definiert ein Protokoll und eine einfache Möglichkeit, Daten zu senden, aber eine Erweiterung wie Komprimierung könnte das Senden derselben Daten in einem kürzeren Format ermöglichen.

> [!NOTE]
> Erweiterungen werden in den Abschnitten 5.8, 9, 11.3.2 und 11.4 der Spezifikation erklärt.

### Subprotokolle

Denken Sie an ein Subprotokoll wie ein benutzerdefiniertes [XML-Schema](https://en.wikipedia.org/wiki/XML_schema) oder eine [Doctype-Deklaration](https://en.wikipedia.org/wiki/Document_Type_Definition). Sie verwenden immer noch XML und seine Syntax, aber Sie sind zusätzlich durch eine Struktur eingeschränkt, auf die Sie sich geeinigt haben. WebSocket-Subprotokolle sind genau so. Sie führen nichts Fantastisches ein, sondern sie stellen nur Struktur auf. Wie ein Doctype oder Schema müssen sich beide Parteien auf das Subprotokoll einigen; im Gegensatz zu einem Doctype oder Schema, wird das Subprotokoll auf dem Server implementiert und kann vom Client nicht extern referenziert werden.

> [!NOTE]
> Subprotokolle werden in den Abschnitten 1.9, 4.2, 11.3.4 und 11.5 der Spezifikation erklärt.

Ein Client muss nach einem bestimmten Subprotokoll fragen. Um dies zu tun, wird er so etwas _als Teil des ursprünglichen Handshakes_ senden:

```http
GET /chat HTTP/1.1
...
Sec-WebSocket-Protocol: soap, wamp
```

oder, gleichwertig:

```http
...
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Jetzt muss der Server eines der Protokolle auswählen, das der Client vorgeschlagen hat und das er unterstützt. Wenn es mehr als eines gibt, senden Sie das erste, das der Client gesendet hat. Stellen Sie sich vor, unser Server kann sowohl `soap` als auch `wamp` verwenden. Dann sendet er im Antworthandshake:

```http
Sec-WebSocket-Protocol: soap
```

> [!WARNING]
> Der Server kann nicht mehr als einen `Sec-Websocket-Protocol`-Header senden.
> Wenn der Server kein Subprotokoll verwenden möchte, **_sollte er keinen `Sec-WebSocket-Protocol`-Header senden_**. Einen leeren Header zu senden ist inkorrekt. Der Client kann die Verbindung schließen, wenn er das gewünschte Subprotokoll nicht erhält.

Wenn Sie möchten, dass Ihr Server bestimmte Subprotokolle befolgt, benötigen Sie natürlich zusätzlichen Code auf dem Server. Stellen Sie sich vor, wir verwenden ein Subprotokoll `json`. In diesem Subprotokoll werden alle Daten als [JSON](https://en.wikipedia.org/wiki/JSON) übermittelt. Wenn der Client dieses Protokoll anfordert und der Server es verwenden möchte, muss der Server einen JSON-Parser haben. Praktisch gesprochen wird dies Teil einer Bibliothek sein, aber der Server muss die Daten herumreichen.

> [!NOTE]
> Um Namenskonflikte zu vermeiden, wird empfohlen, den Namen Ihres Subprotokolls zu einem Teil einer Domain-Zeichenfolge zu machen. Wenn Sie eine benutzerdefinierte Chat-App erstellen, die ein proprietäres Format verwendet, das exklusiv für Example Inc. ist, könnten Sie dies verwenden: `Sec-WebSocket-Protocol: chat.example.com`. Beachten Sie, dass dies nicht erforderlich ist, es ist nur eine optionale Konvention und Sie können jede gewünschte Zeichenfolge verwenden.

## Zusammenhängende Themen

- [Schreiben von WebSocket-Clientanwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Anleitung: Websocket-Server in C#](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Anleitung: Websocket-Server in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
