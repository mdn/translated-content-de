---
title: WebSocket-Server schreiben
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{DefaultAPISidebar("WebSockets API")}}

Ein WebSocket-Server ist nichts anderes als eine Anwendung, die an einem beliebigen Port eines TCP-Servers lauscht und einem bestimmten Protokoll folgt. Einen benutzerdefinierten Server zu erstellen, kann überwältigend erscheinen, wenn Sie es noch nie zuvor gemacht haben. Tatsächlich kann es jedoch recht einfach sein, einen grundlegenden WebSocket-Server auf Ihrer bevorzugten Plattform zu implementieren.

Ein WebSocket-Server kann in jeder serverseitigen Programmiersprache geschrieben werden, die [Berkeley-Sockets](https://en.wikipedia.org/wiki/Berkeley_sockets) unterstützt, wie C(++), Python, {{Glossary("PHP", "PHP")}} oder [serverseitiges JavaScript](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework). Dies ist kein Tutorial für eine bestimmte Sprache, sondern dient als Leitfaden, um das Schreiben Ihres eigenen Servers zu erleichtern.

Dieser Artikel setzt voraus, dass Sie bereits damit vertraut sind, wie {{Glossary("HTTP", "HTTP")}} funktioniert, und dass Sie ein mittleres Niveau an Programmiererfahrung haben. Abhängig von der Sprachunterstützung kann Wissen über TCP-Sockets erforderlich sein. Der Umfang dieses Leitfadens besteht darin, das Mindestwissen zu präsentieren, das Sie benötigen, um einen WebSocket-Server zu schreiben.

> [!NOTE]
> Lesen Sie die neueste offizielle WebSockets-Spezifikation, [RFC 6455](https://datatracker.ietf.org/doc/rfc6455/?include_text=1). Die Abschnitte 1 und 4-7 sind besonders interessant für Server-Implementierer. Abschnitt 10 behandelt Sicherheit, und Sie sollten ihn definitiv durchgehen, bevor Sie Ihren Server exponieren.

Ein WebSocket-Server wird hier auf einer sehr niedrigen Ebene erklärt. WebSocket-Server sind oft separate und spezialisierte Server (aus Gründen des Lastenausgleichs oder aus anderen praktischen Gründen), sodass Sie oft einen [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy) (wie einen regulären HTTP-Server) verwenden, um WebSocket-Handshakes zu erkennen, sie vorzuverarbeiten und diese Clients an einen echten WebSocket-Server zu senden. Das bedeutet, dass Sie Ihren Servercode nicht mit Cookie- und Authentifizierungs-Handlern aufblähen müssen (zum Beispiel).

## Der WebSocket-Handshake

Zuerst muss der Server mit einem Standard-TCP-Socket auf eingehende Socket-Verbindungen lauschen. Abhängig von Ihrer Plattform kann dies automatisch für Sie gehandhabt werden. Angenommen, Ihr Server lauscht auf `example.com`, Port 8000, und Ihr Socket-Server antwortet auf {{HTTPMethod("GET")}}-Anfragen unter `example.com/chat`.

> [!WARNING]
> Der Server kann an jedem beliebigen Port lauschen, den er wählt, aber wenn er einen anderen Port als 80 oder 443 wählt, kann er Probleme mit Firewalls und/oder Proxys haben. Browser erfordern im Allgemeinen eine sichere Verbindung für WebSockets, obwohl sie möglicherweise eine Ausnahme für lokale Geräte machen.

Der Handshake ist das "Web" in WebSockets. Es ist die Brücke von HTTP zu WebSockets. Im Handshake werden die Verbindungsdetails ausgehandelt, und jede Partei kann sich vor der Fertigstellung zurückziehen, wenn die Bedingungen ungünstig sind. Der Server muss sorgfältig alles verstehen, was der Client verlangt, da sonst Sicherheitsprobleme auftreten können.

> [!NOTE]
> Die request-uri (`/chat` hier) hat in der Spezifikation keine festgelegte Bedeutung. Viele Leute verwenden sie daher, um einen Server mehrere WebSocket-Anwendungen handhaben zu lassen. Zum Beispiel könnte `example.com/chat` eine Multiuser-Chat-App aufrufen, während `/game` auf dem gleichen Server ein Multiplayer-Spiel aufrufen könnte.

### Client-Handshake-Anfrage

Obwohl Sie einen Server aufbauen, muss der Client immer noch den WebSocket-Handshake-Prozess starten, indem er den Server kontaktiert und eine WebSocket-Verbindung anfordert. Sie müssen also wissen, wie Sie die Anfrage des Clients interpretieren. Der **Client** sendet eine ziemlich standardisierte HTTP-Anfrage mit Headern, die so aussieht (die HTTP-Version **muss** 1.1 oder höher sein, und die Methode **muss** `GET` sein):

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Der Client kann hier Erweiterungen und/oder Subprotokolle anfordern; siehe [Verschiedenes](#verschiedenes) für Details. Auch gängige Header wie {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Referer")}}, {{HTTPHeader("Cookie")}}, oder Authentifizierungsheader können ebenfalls vorhanden sein. Machen Sie mit diesen, was Sie möchten; sie betreffen nicht direkt den WebSocket. Es ist auch sicher, sie zu ignorieren. In vielen gängigen Setups hat ein Reverse Proxy diese bereits verarbeitet.

> [!NOTE]
> Alle **Browser** senden einen [`Origin`-Header](/de/docs/Web/HTTP/Guides/CORS#origin). Sie können diesen Header aus Sicherheitsgründen verwenden (Überprüfung auf gleiche Herkunft, automatische Erlaubnis oder Ablehnung usw.) und einen [403 Forbidden](/de/docs/Web/HTTP/Reference/Status/403) senden, wenn Ihnen nicht gefällt, was Sie sehen. Dies ist wirksam gegen [Cross Site WebSocket Hijacking (CSWH)](https://cwe.mitre.org/data/definitions/1385.html). Seien Sie jedoch gewarnt, dass Nicht-Browser-Agents einen gefälschten `Origin` senden können. Die meisten Anwendungen lehnen Anfragen ohne diesen Header ab.

Wenn ein Header nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine {{HTTPStatus("400")}} ("Bad Request")-Antwort senden und den Socket sofort schließen. Wie üblich kann er auch den Grund, warum der Handshake fehlgeschlagen ist, im HTTP-Antworttextkörper angeben, aber die Nachricht wird möglicherweise nie angezeigt (Browser zeigen sie nicht an). Wenn der Server diese Version von WebSockets nicht versteht, sollte er einen {{HTTPHeader("Sec-WebSocket-Version")}}-Header zurücksenden, der die Version(en) enthält, die er versteht. Im obigen Beispiel wird Version 13 des WebSocket-Protokolls angegeben.

Der interessanteste Header hier ist {{HTTPHeader("Sec-WebSocket-Key")}}. Schauen wir uns das als nächstes an.

> **Hinweis:** [Reguläre HTTP-Statuscodes](/de/docs/Web/HTTP/Reference/Status) können nur vor dem Handshake verwendet werden. Nach dem erfolgreichen Handshake müssen Sie eine andere Reihe von Codes verwenden (definiert in Abschnitt 7.4 der Spezifikation).

### Server-Handshake-Antwort

Wenn der **Server** die Handshake-Anfrage erhält, sollte er eine spezielle Antwort zurücksenden, die anzeigt, dass das Protokoll von HTTP zu WebSocket geändert wird. Dieser Header sieht ungefähr wie folgt aus (denken Sie daran, dass jede Headerzeile mit `\r\n` endet und setzen Sie ein zusätzliches `\r\n` nach der letzten Zeile, um das Ende des Headers anzuzeigen):

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Darüber hinaus kann der Server hier über Erweiterungs-/Subprotokollanforderungen entscheiden; siehe [Verschiedenes](#verschiedenes) für Details. Der `Sec-WebSocket-Accept`-Header ist wichtig, da der Server ihn aus dem {{HTTPHeader("Sec-WebSocket-Key")}} ableiten muss, den der Client ihm gesendet hat. Um ihn zu erhalten, verketten Sie den `Sec-WebSocket-Key` des Clients mit dem String `"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"` (es ist ein "[magic string](https://en.wikipedia.org/wiki/Magic_string)"), bilden Sie den [SHA-1-Hash](https://en.wikipedia.org/wiki/SHA-1) des Ergebnisses und geben Sie die [base64](https://en.wikipedia.org/wiki/Base64)-Kodierung dieses Hashes zurück.

> [!NOTE]
> Dieser scheinbar überkomplizierte Prozess existiert, damit es für den Client offensichtlich ist, ob der Server WebSockets unterstützt. Dies ist wichtig, da Sicherheitsprobleme auftreten können, wenn der Server eine WebSockets-Verbindung akzeptiert, die Daten jedoch als HTTP-Anfrage interpretiert.

Wenn also der Key `"dGhlIHNhbXBsZSBub25jZQ=="` war, ist der Wert des `Sec-WebSocket-Accept`-Headers `"s3pPLMBiTxaQ9kYGzzhZRbK+xOo="`. Sobald der Server diese Header sendet, ist der Handshake abgeschlossen und Sie können beginnen, Daten auszutauschen!

> [!NOTE]
> Der Server kann andere Header wie {{HTTPHeader("Set-Cookie")}} senden oder vor dem Antwort-Handshake über andere Statuscodes um Authentifizierung oder Umleitungen bitten.

### Verfolgung von Clients

Dies steht nicht direkt im Zusammenhang mit dem WebSocket-Protokoll, es sei jedoch hier erwähnt: Ihr Server muss die Sockets der Clients im Auge behalten, damit Sie nicht mit Clients erneut den Handshake durchführen, die den Handshake bereits abgeschlossen haben. Dieselbe Client-IP-Adresse kann versuchen, mehrmals zu verbinden. Der Server kann sie jedoch ablehnen, wenn sie zu viele Verbindungen versuchen, um sich vor [Denial-of-Service-Angriffen](https://en.wikipedia.org/wiki/Denial_of_service) zu schützen.

Zum Beispiel könnten Sie eine Tabelle mit Benutzernamen oder ID-Nummern zusammen mit dem entsprechenden [`WebSocket`](/de/docs/Web/API/WebSocket) und anderen Daten, die Sie mit dieser Verbindung verknüpfen müssen, führen.

## Austausch von Datenrahmen

Entweder der Client oder der Server kann jederzeit eine Nachricht senden — das ist die Magie von WebSockets. Das Extrahieren von Informationen aus diesen sogenannten "Frames" von Daten ist jedoch keine so magische Erfahrung. Obwohl alle Frames demselben spezifischen Format folgen, werden die Daten vom Client zum Server unter Verwendung der [XOR-Verschlüsselung](https://en.wikipedia.org/wiki/XOR_cipher) (mit einem 32-Bit-Schlüssel) maskiert. Abschnitt 5 der Spezifikation beschreibt dies im Detail.

### Format

Jeder Daten-Frame (vom Client zum Server oder umgekehrt) folgt diesem Format:

```plain
Data frame from the client to server (message length 0–125):

 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-------+-+-------------+-------------------------------+
|F|R|R|R| opcode|M| Payload len |          Masking-key          |
|I|S|S|S|  (4)  |A|     (7)     |             (32)              |
|N|V|V|V|       |S|             |                               |
| |1|2|3|       |K|             |                               |
+-+-+-+-+-------+-+-------------+-------------------------------+
|    Masking-key (continued)    |          Payload Data         |
+-------------------------------- - - - - - - - - - - - - - - - +
:                     Payload Data continued ...                :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                     Payload Data continued ...                |
+---------------------------------------------------------------+

Data frame from the client to server (16-bit message length):

 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-------+-+-------------+-------------------------------+
|F|R|R|R| opcode|M| Payload len |    Extended payload length    |
|I|S|S|S|  (4)  |A|     (7)     |             (16)              |
|N|V|V|V|       |S|   (== 126)  |                               |
| |1|2|3|       |K|             |                               |
+-+-+-+-+-------+-+-------------+-------------------------------+
|                          Masking-key                          |
+---------------------------------------------------------------+
:                          Payload Data                         :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                     Payload Data continued ...                |
+---------------------------------------------------------------+

Data frame from the server to client (64-bit payload length):
 0                   1                   2                   3
 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
+-+-+-+-+-------+-+-------------+-------------------------------+
|F|R|R|R| opcode|M| Payload len |    Extended payload length    |
|I|S|S|S|  (4)  |A|     (7)     |             (64)              |
|N|V|V|V|       |S|   (== 127)  |                               |
| |1|2|3|       |K|             |                               |
+-+-+-+-+-------+-+-------------+ - - - - - - - - - - - - - - - +
|               Extended payload length continued               |
+ - - - - - - - - - - - - - - - +-------------------------------+
|                               |          Masking-key          |
+-------------------------------+-------------------------------+
|    Masking-key (continued)    |          Payload Data         |
+-------------------------------- - - - - - - - - - - - - - - - +
:                     Payload Data continued ...                :
+ - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - +
|                     Payload Data continued ...                |
+---------------------------------------------------------------+
```

Das bedeutet, dass ein Rahmen die folgenden Bytes enthält:

- Erstes Byte:
  - Bit 0 FIN: gibt an, ob dies die letzte Nachricht in einer Serie ist. Wenn es 0 ist, lauscht der Server weiter auf weitere Teile der Nachricht; andernfalls sollte der Server die Nachricht als zugestellt betrachten. Mehr dazu später.
  - Bit 1–3 RSV1, RSV2, RSV3: können ignoriert werden, sie sind für Erweiterungen.
  - Bits 4-7 OPCODE: definiert, wie die Payload-Daten interpretiert werden sollen: `0x0` für Fortsetzung, `0x1` für Text (der immer in UTF-8 kodiert ist), `0x2` für binär und andere sogenannte "Kontrollcodes", die später besprochen werden. In dieser Version von WebSockets haben `0x3` bis `0x7` und `0xB` bis `0xF` keine Bedeutung.
- Bit 8 MASK: sagt aus, ob die Nachricht kodiert ist. Nachrichten vom Client müssen maskiert sein, daher muss Ihr Server erwarten, dass dies 1 ist. (Tatsächlich sagt [Abschnitt 5.1 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.1), dass Ihr Server die Verbindung zu einem Client trennen muss, wenn dieser Client eine unmaskierte Nachricht sendet.) Nachrichten vom Server zum Client sind nicht maskiert und haben dieses Bit auf 0 gesetzt. Wir erklären das Maskieren später, im Abschnitt [Lesen und Entmaskieren der Daten](#lesen_und_entmaskieren_der_daten). _Hinweis: Sie müssen Nachrichten maskieren, selbst wenn Sie einen sicheren Socket verwenden._
- Bits 9–15: Payload-Länge. Kann auch die folgenden 2 oder 8 Bytes enthalten; siehe [Dekodierung der Payload-Länge](#dekodierung_der_payload-länge).
- Wenn Maskierung verwendet wird (immer wahr für Client-zu-Server-Nachrichten), enthalten die nächsten 4 Bytes den Maskierungsschlüssel; siehe [Lesen und Entmaskieren der Daten](#lesen_und_entmaskieren_der_daten).
- Alle nachfolgenden Bytes sind Payload.

### Dekodierung der Payload-Länge

Um die Payload-Daten zu lesen, müssen Sie wissen, wann Sie aufhören müssen zu lesen. Deshalb ist es wichtig, die Payload-Länge zu kennen. Leider ist dies etwas kompliziert. Um es zu lesen, folgen Sie diesen Schritten:

1. Lesen Sie die Bits 9-15 (inklusiv) und interpretieren Sie diese als Ganzzahl ohne Vorzeichen. Wenn es 125 oder weniger ist, dann ist das die Länge; Sie sind **fertig**. Wenn es 126 ist, gehen Sie zu Schritt 2. Wenn es 127 ist, gehen Sie zu Schritt 3.
2. Lesen Sie die nächsten 16 Bits und interpretieren Sie diese als Ganzzahl ohne Vorzeichen. Sie sind **fertig**.
3. Lesen Sie die nächsten 64 Bits und interpretieren Sie diese als Ganzzahl ohne Vorzeichen. (Das höchstwertige Bit _muss_ 0 sein.) Sie sind **fertig**.

### Lesen und Entmaskieren der Daten

Wenn das MASK-Bit gesetzt war (und das sollte es bei Client-zu-Server-Nachrichten), lesen Sie die nächsten 4 Oktette (32 Bits); dies ist der Maskierungsschlüssel. Sobald die Payload-Länge und der Maskierungsschlüssel dekodiert sind, können Sie diese Anzahl von Bytes aus dem Socket lesen. Nennen wir die Daten `ENCODED` und den Schlüssel `MASK`. Um `DECODED` zu erhalten, durchlaufen Sie die Oktette von `ENCODED` und XOR das Oktett mit dem (i modulo 4)ten Oktett von `MASK`. Ein Beispiel in JavaScript:

```js
// The function receives the frame as a Uint8Array.
// firstIndexAfterPayloadLength is the index of the first byte
// after the payload length, so it can be 2, 4, or 10.
function getPayloadDecoded(frame, firstIndexAfterPayloadLength) {
  const mask = frame.slice(
    firstIndexAfterPayloadLength,
    firstIndexAfterPayloadLength + 4,
  );
  const encodedPayload = frame.slice(firstIndexAfterPayloadLength + 4);
  // XOR each 4-byte sequence in the payload with the bitmask
  const decodedPayload = encodedPayload.map((byte, i) => byte ^ mask[i % 4]);
  return decodedPayload;
}

const frame = Uint8Array.from([
  // FIN=1, RSV1-3=0, opcode=0x1 (text)
  0b10000001,
  // MASK=1, payload length=5
  0b10000101,
  // 4-byte mask
  1, 2, 3, 4,
  // 5-byte payload
  105, 103, 111, 104, 110,
]);

// Assume you got the number 2 from properly decoding the payload length
const decoded = getPayloadDecoded(frame, 2);
```

Nun können Sie herausfinden, was `decoded` bedeutet, abhängig von Ihrer Anwendung. Zum Beispiel können Sie es als UTF-8 [dekodieren](/de/docs/Web/API/TextDecoder), wenn es sich um eine Textnachricht handelt.

```js
console.log(new TextDecoder().decode(decoded)); // "hello"
```

Das Maskieren ist eine Sicherheitsmaßnahme, um bösartige Parteien davon abzuhalten, die Daten vorherzusagen, die an den Server gesendet werden. Der Client erzeugt einen kryptografisch zufälligen Maskierungsschlüssel für jede Nachricht.

### Nachrichten-Fragmentierung

Die FIN- und Opcode-Felder arbeiten zusammen, um eine Nachricht in separate Frames aufgeteilt zu senden. Dies wird Nachrichten-Fragmentierung genannt. Die Fragmentierung ist nur bei den Opcodes `0x0` bis `0x2` verfügbar.

Erinnern Sie sich daran, dass der Opcode angibt, was ein Rahmen tun soll. Wenn es `0x1` ist, ist die Payload Text. Wenn es `0x2` ist, sind es binäre Daten. Wenn es jedoch `0x0` ist, ist der Rahmen ein Fortsetzungsrahmen; dies bedeutet, dass der Server die Payload des Rahmens mit der letzten vom Client empfangenen Nachricht verkettet. Hier ist eine grobe Skizze, in der ein Server auf einen Client reagiert, der Textnachrichten sendet. Die erste Nachricht wird in einem einzigen Rahmen gesendet, während die zweite Nachricht über drei Rahmen gesendet wird. FIN- und Opcode-Details werden nur für den Client angezeigt:

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

Beachten Sie, dass der erste Rahmen eine vollständige Nachricht enthält (hat `FIN=1` und `opcode!=0x0`), so dass der Server sie nach Belieben verarbeiten oder darauf reagieren kann. Der zweite Rahmen, der vom Client gesendet wird, hat eine Text-Nutzlast (`opcode=0x1`), aber die gesamte Nachricht ist noch nicht angekommen (`FIN=0`). Alle restlichen Teile dieser Nachricht werden mit Fortsetzungsrahmen gesendet (`opcode=0x0`), und der letzte Rahmen der Nachricht wird durch `FIN=1` markiert. [Abschnitt 5.4 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.4) beschreibt die Nachrichten-Fragmentierung.

## Pings und Pongs: Der Herzschlag von WebSockets

Zu jedem Zeitpunkt nach dem Handshake kann sowohl der Client als auch der Server wählen, einen Ping an die andere Partei zu senden. Wenn der Ping empfangen wird, muss der Empfänger so schnell wie möglich einen Pong zurücksenden. Sie können dies verwenden, um sicherzustellen, dass der Client noch verbunden ist, zum Beispiel.

Ein Ping oder Pong ist einfach ein regulärer Rahmen, aber es ist ein **Kontrollrahmen**. Pings haben einen Opcode von `0x9`, und Pongs haben einen Opcode von `0xA`. Wenn Sie einen Ping erhalten, senden Sie einen Pong mit exakt denselben Payload-Daten wie der Ping zurück (für Pings und Pongs beträgt die maximale Payload-Länge 125). Sie könnten auch einen Pong erhalten, ohne jemals einen Ping gesendet zu haben; ignorieren Sie dies, wenn es passiert.

> [!NOTE]
> Wenn Sie mehr als einen Ping erhalten haben, bevor Sie einen Pong senden können, senden Sie nur einen Pong.

## Schließen der Verbindung

Um eine Verbindung zu schließen, kann entweder der Client oder der Server einen Kontrollrahmen mit den Daten senden, die eine spezifizierte Kontrollsequenz enthalten, um den Schlusshandshake zu beginnen (detailliert in [Abschnitt 5.5.1](https://datatracker.ietf.org/doc/html/rfc6455#section-5.5.1)). Wenn ein solches Frame empfangen wird, sendet der andere Partner einen Close Frame als Antwort. Der erste Partner schließt dann die Verbindung. Alle weiteren Daten, die nach dem Schließen der Verbindung empfangen werden, werden verworfen.

## Verschiedenes

> [!NOTE]
> WebSocket-Codes, Erweiterungen, Subprotokolle usw. sind im [IANA WebSocket Protocol Registry](https://www.iana.org/assignments/websocket/websocket.xml) registriert.

WebSocket-Erweiterungen und Subprotokolle werden über Header während [des Handshakes](#der_websocket-handshake) ausgehandelt. Manchmal sind Erweiterungen und Subprotokolle sehr ähnlich, aber es gibt einen klaren Unterschied. Erweiterungen steuern das WebSocket-_Frame_ und _modifizieren_ die Nutzlast, während Subprotokolle die WebSocket-_Nutzlast_ strukturieren und _nichts modifizieren_. Erweiterungen sind optional und verallgemeinert (wie Kompression); Subprotokolle sind obligatorisch und lokalisiert (wie für Chat und für MMORPG-Spiele).

### Erweiterungen

Denken Sie an eine Erweiterung wie das Komprimieren einer Datei, bevor Sie sie jemandem per E-Mail senden. Was auch immer Sie tun, Sie senden die _gleichen_ Daten in verschiedenen Formen. Der Empfänger wird letztendlich in der Lage sein, dieselben Daten wie Ihre lokale Kopie zu erhalten, aber sie werden anders gesendet. Das tut eine Erweiterung. WebSockets definiert ein Protokoll und eine einfache Möglichkeit, Daten zu senden, aber eine Erweiterung wie die Kompression könnte das Senden der gleichen Daten in einem kürzeren Format ermöglichen.

> [!NOTE]
> Erweiterungen sind in den Abschnitten 5.8, 9, 11.3.2 und 11.4 der Spezifikation erklärt.

### Subprotokolle

Denken Sie an ein Subprotokoll als ein benutzerdefiniertes [XML-Schema](https://en.wikipedia.org/wiki/XML_schema) oder [Doctype-Deklaration](https://en.wikipedia.org/wiki/Document_Type_Definition). Sie verwenden immer noch XML und dessen Syntax, sind jedoch zusätzlich durch eine vereinbarte Struktur eingeschränkt. WebSocket-Subprotokolle sind genau so. Sie führen nichts Besonderes ein, sondern etablieren nur Struktur. Wie ein Doctype oder Schema müssen beide Parteien sich auf das Subprotokoll einigen; im Gegensatz zu einem Doctype oder Schema ist das Subprotokoll auf dem Server implementiert und kann nicht extern vom Client referenziert werden.

> [!NOTE]
> Subprotokolle sind in den Abschnitten 1.9, 4.2, 11.3.4 und 11.5 der Spezifikation erklärt.

Ein Client muss ein spezifisches Subprotokoll anfordern. Dazu sendet er etwas wie dies _als Teil des ursprünglichen Handshakes_:

```http
GET /chat HTTP/1.1
...
Sec-WebSocket-Protocol: soap, wamp
```

oder, gleichbedeutend:

```http
...
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Nun muss der Server eines der Protokolle auswählen, die der Client vorgeschlagen und er unterstützt hat. Wenn es mehr als eins gibt, senden Sie das erste, das der Client gesendet hat. Nehmen wir an, unser Server kann sowohl `soap` als auch `wamp` verwenden. Dann sendet er im Antwort-Handshake:

```http
Sec-WebSocket-Protocol: soap
```

> [!WARNING]
> Der Server kann nicht mehr als einen `Sec-WebSocket-Protocol`-Header senden.
> Wenn der Server kein Subprotokoll verwenden möchte, **_sollte er keinen `Sec-WebSocket-Protocol`-Header senden_**. Einen leeren Header zu senden, ist falsch. Der Client kann die Verbindung schließen, wenn er das gewünschte Subprotokoll nicht erhält.

Wenn Sie möchten, dass Ihr Server bestimmte Subprotokolle einhält, benötigen Sie naturgemäß zusätzlichen Code auf dem Server. Stellen Sie sich vor, wir verwenden das Subprotokoll `json`. In diesem Subprotokoll werden alle Daten als [JSON](https://en.wikipedia.org/wiki/JSON) weitergegeben. Wenn der Client dieses Protokoll anfordert und der Server es verwenden möchte, muss der Server einen JSON-Parser haben. Praktisch wird dies Teil einer Bibliothek sein, aber der Server muss die Daten weiterreichen.

> [!NOTE]
> Um Namenskonflikte zu vermeiden, wird empfohlen, Ihren Subprotokollnamen Teil einer Domänenzeichenfolge zu machen. Wenn Sie eine benutzerdefinierte Chat-App erstellen, die ein proprietäres Format verwendet, das exklusiv für Example Inc. ist, könnten Sie dies verwenden: `Sec-WebSocket-Protocol: chat.example.com`. Beachten Sie, dass dies nicht erforderlich ist, es handelt sich nur um eine optionale Konvention, und Sie können jeden gewünschten String verwenden.

## Verwandtes

- [WebSocket-Clientanwendungen schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Tutorial: WebSocket-Server in C#](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Tutorial: WebSocket-Server in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
