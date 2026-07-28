---
title: Schreiben von WebSocket-Servern
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
l10n:
  sourceCommit: 7ed7b730bf88307cc6cf34b82bb1d735b9a1aa1f
---

{{DefaultAPISidebar("WebSockets API")}}

Ein WebSocket-Server ist nichts anderes als eine Anwendung, die auf einem beliebigen Port eines TCP-Servers horcht und einem bestimmten Protokoll folgt. Einen benutzerdefinierten Server zu erstellen kann überwältigend erscheinen, wenn Sie es noch nie gemacht haben. Tatsächlich kann es recht einfach sein, einen grundlegenden WebSocket-Server auf Ihrer bevorzugten Plattform zu implementieren.

Ein WebSocket-Server kann in jeder serverseitigen Programmiersprache geschrieben werden, die [Berkeley sockets](https://en.wikipedia.org/wiki/Berkeley_sockets) unterstützt, wie C(++), Python, {{Glossary("PHP", "PHP")}} oder [serverseitiges JavaScript](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework). Dies ist kein Tutorial für eine bestimmte Sprache, sondern dient als Leitfaden, um das Schreiben Ihres eigenen Servers zu erleichtern.

Dieser Artikel geht davon aus, dass Sie bereits mit der Funktionsweise von {{Glossary("HTTP", "HTTP")}} vertraut sind und über ein mittleres Maß an Programmiererfahrung verfügen. Abhängig von der Sprachunterstützung kann Kenntnisse über TCP-Sockets erforderlich sein. Der Umfang dieses Leitfadens besteht darin, das Mindestwissen zu bieten, das Sie zum Schreiben eines WebSocket-Servers benötigen.

> [!NOTE]
> Lesen Sie die neueste offizielle WebSockets-Spezifikation, [RFC 6455](https://datatracker.ietf.org/doc/rfc6455/?include_text=1). Die Abschnitte 1 und 4-7 sind für Server-Implementierer besonders interessant. Abschnitt 10 behandelt die Sicherheit und sollte unbedingt durchgesehen werden, bevor Ihr Server veröffentlicht wird.

Ein WebSocket-Server wird hier auf einer sehr niedrigen Ebene erklärt. WebSocket-Server sind oft separate und spezialisierte Server (aus Gründen des Lastenausgleichs oder anderen praktischen Gründen), daher verwenden Sie häufig einen [Reverse-Proxy](https://en.wikipedia.org/wiki/Reverse_proxy) (wie einen regulären HTTP-Server), um WebSocket-Handshakes zu erkennen, vorzuverarbeiten und diese Clients an einen echten WebSocket-Server zu senden. Dies bedeutet, dass Sie Ihren Servercode nicht mit Cookie- und Authentifizierungs-Handlern überladen müssen (zum Beispiel).

## Der WebSocket-Handshake

Zunächst muss der Server mithilfe eines Standard-TCP-Sockets auf eingehende Socket-Verbindungen lauschen. Abhängig von Ihrer Plattform kann dies automatisch für Sie erledigt werden. Angenommen, Ihr Server lauscht auf `example.com`, Port 8000, und Ihr Socket-Server antwortet auf {{HTTPMethod("GET")}} Anfragen bei `example.com/chat`.

> [!WARNING]
> Der Server kann auf jedem beliebigen Port lauschen, den er wählt, aber wenn er einen anderen Port als 80 oder 443 wählt, kann es Probleme mit Firewalls und/oder Proxys geben. Browser erfordern im Allgemeinen eine sichere Verbindung für WebSockets, obwohl sie möglicherweise eine Ausnahme für lokale Geräte anbieten.

Der Handshake ist das „Web” in WebSockets. Es ist die Brücke von HTTP zu WebSockets. Im Handshake werden die Details der Verbindung verhandelt, und jede Partei kann vor dem Abschluss zurücktreten, wenn die Bedingungen ungünstig sind. Der Server muss darauf achten, alles zu verstehen, was der Client verlangt, da sonst Sicherheitsprobleme auftreten können.

> [!NOTE]
> Die request-uri (`/chat` hier) hat in der Spezifikation keine festgelegte Bedeutung. Viele nutzen sie, um einen Server mit mehreren WebSocket-Anwendungen auszustatten. Zum Beispiel könnte `example.com/chat` eine Multiuser-Chat-App aufrufen, während `/game` auf demselben Server ein Multiplayer-Spiel aufrufen könnte.

### Client-Handshake-Anfrage

Obwohl Sie einen Server entwickeln, muss ein Client den WebSocket-Handshake-Prozess starten, indem er den Server kontaktiert und eine WebSocket-Verbindung anfordert. Daher müssen Sie wissen, wie Sie die Anfrage des Clients interpretieren können. Der **Client** sendet eine ziemlich standardmäßige HTTP-Anfrage mit Headern, die wie folgt aussieht (die HTTP-Version **muss** 1.1 oder größer sein, und die Methode **muss** `GET` sein):

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Der Client kann hier Erweiterungen und/oder Subprotokolle anfragen; siehe [Verschiedenes](#verschiedenes) für Details. Außerdem könnten übliche Header wie {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Referer")}}, {{HTTPHeader("Cookie")}} oder Authentifizierungs-Header ebenfalls vorhanden sein. Diese können Sie nach Belieben behandeln; sie betreffen nicht direkt die WebSocket. Es ist auch sicher, sie zu ignorieren. In vielen häufigen Setups hat sich ein Reverse-Proxy bereits mit ihnen befasst.

> [!NOTE]
> Alle **Browser** senden einen [`Origin`-Header](/de/docs/Web/HTTP/Guides/CORS#origin). Sie können diesen Header aus Sicherheitsgründen verwenden (Prüfung auf selben Ursprung, automatische Erlaubnis oder Ablehnung etc.) und einen [403 Forbidden](/de/docs/Web/HTTP/Reference/Status/403) senden, wenn Ihnen nicht gefällt, was Sie sehen. Dies ist wirksam gegen [Cross Site WebSocket Hijacking (CSWH)](https://cwe.mitre.org/data/definitions/1385.html). Beachten Sie jedoch, dass Nicht-Browser-Agenten einen gefälschten `Origin` senden können. Die meisten Anwendungen lehnen Anfragen ohne diesen Header ab.

Wenn ein Header nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine {{HTTPStatus("400")}}- ("Bad Request")-Antwort senden und die Verbindung sofort schließen. Wie üblich kann der Grund, warum der Handshake fehlschlug, im Body der HTTP-Antwort angegeben werden, aber die Nachricht wird möglicherweise nie angezeigt (Browser zeigen sie nicht an). Wenn der Server diese WebSocket-Version nicht versteht, sollte er einen {{HTTPHeader("Sec-WebSocket-Version")}}-Header zurücksenden, der die Version(en) enthält, die er versteht. Im obigen Beispiel gibt er Version 13 des WebSocket-Protokolls an.

Der interessanteste Header hier ist {{HTTPHeader("Sec-WebSocket-Key")}}. Schauen wir uns den als nächstes an.

> [!NOTE]
> [Reguläre HTTP-Statuscodes](/de/docs/Web/HTTP/Reference/Status) können nur vor dem Handshake verwendet werden. Nach dem erfolgreichen Handshake müssen Sie eine andere Codesatz (definiert in Abschnitt 7.4 der Spezifikation) verwenden.

### Server-Handshake-Antwort

Wenn der **Server** die Handshake-Anfrage erhält, sollte er eine spezielle Antwort zurücksenden, die anzeigt, dass das Protokoll von HTTP zu WebSocket geändert wird. Dieser Header sieht etwa wie folgt aus (denken Sie daran, dass jede Headerzeile mit `\r\n` endet und fügen Sie ein zusätzliches `\r\n` nach der letzten Zeile hinzu, um das Ende des Headers zu markieren):

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Zusätzlich kann der Server hier über die Erweiterungs-/Subprotokollanfragen entscheiden; siehe [Verschiedenes](#verschiedenes) für Details. Der `Sec-WebSocket-Accept`-Header ist wichtig, da der Server ihn aus dem {{HTTPHeader("Sec-WebSocket-Key")}} ableiten muss, den der Client an ihn gesendet hat. Um ihn zu erhalten, concatenaten Sie den `Sec-WebSocket-Key` des Clients und den String `"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"` (ein "[magischer String](https://en.wikipedia.org/wiki/Magic_string)"), nehmen Sie den [SHA-1-Hash](https://en.wikipedia.org/wiki/SHA-1) des Ergebnisses und geben Sie die [base64](https://en.wikipedia.org/wiki/Base64)-Kodierung dieses Hashes zurück.

> [!NOTE]
> Dieser scheinbar überkomplizierte Prozess existiert, damit für den Client offensichtlich ist, ob der Server WebSockets unterstützt. Das ist wichtig, weil Sicherheitsprobleme entstehen könnten, wenn der Server eine WebSocket-Verbindung akzeptiert, die Daten aber als HTTP-Anfrage interpretiert.

Wenn der Schlüssel also `"dGhlIHNhbXBsZSBub25jZQ=="` war, ist der Wert des `Sec-WebSocket-Accept`-Headers `"s3pPLMBiTxaQ9kYGzzhZRbK+xOo="`. Sobald der Server diese Header gesendet hat, ist der Handshake abgeschlossen und Sie können anfangen, Daten auszutauschen!

> [!NOTE]
> Der Server kann andere Header wie {{HTTPHeader("Set-Cookie")}} senden oder nach einer Authentifizierung oder Weiterleitung durch andere Statuscodes fragen, bevor er den Antwort-Handshake sendet.

### Verfolgen der Clients

Dies bezieht sich nicht direkt auf das WebSocket-Protokoll, ist aber erwähnenswert: Ihr Server muss die Sockets der Clients nachverfolgen, damit Sie den Handshake nicht erneut mit Clients durchführen, die ihn bereits abgeschlossen haben. Dieselbe Client-IP-Adresse kann versuchen, mehrfach zu verbinden. Der Server kann ihnen jedoch den Zugriff verweigern, wenn sie zu viele Verbindungen aufbauen, um sich vor [Denial-of-Service-Angriffen](https://en.wikipedia.org/wiki/Denial_of_service) zu schützen.

Zum Beispiel könnten Sie eine Tabelle mit Benutzernamen oder ID-Nummern sowie dem entsprechenden [`WebSocket`](/de/docs/Web/API/WebSocket) und anderen Informationen führen, die mit dieser Verbindung assoziiert werden müssen.

## Austausch von Datenrahmen

Sowohl der Client als auch der Server können jederzeit beschließen, eine Nachricht zu senden — das ist das Besondere an WebSockets. Allerdings ist das Extrahieren von Informationen aus diesen sogenannten "Frames" von Daten keine so magische Erfahrung. Auch wenn alle Frames demselben spezifischen Format folgen, werden Daten, die vom Client zum Server gesendet werden, mithilfe von [XOR-Verschlüsselung](https://en.wikipedia.org/wiki/XOR_cipher) (mit einem 32-Bit-Schlüssel) maskiert. Abschnitt 5 der Spezifikation beschreibt dies im Detail.

### Format

Jeder Datenrahmen (vom Client zum Server oder umgekehrt) folgt demselben Format:

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

Das bedeutet, dass ein Frame die folgenden Bytes enthält:

- Erstes Byte:
  - Bit 0 FIN: Gibt an, ob dies die letzte Nachricht in einer Reihe ist. Wenn es 0 ist, hört der Server auf weitere Teile der Nachricht; andernfalls sollte der Server die Nachricht als zugestellt betrachten. Mehr dazu später.
  - Bit 1–3 RSV1, RSV2, RSV3: Können ignoriert werden, sie sind für Erweiterungen.
  - Bits 4-7 OPCODE: Bestimmen, wie die Nutzdaten interpretiert werden: `0x0` für Fortsetzung, `0x1` für Text (immer in UTF-8 kodiert), `0x2` für binäre Daten und andere sogenannten "Steuercodes", die später behandelt werden. In dieser Version von WebSockets haben `0x3` bis `0x7` und `0xB` bis `0xF` keine Bedeutung.
- Bit 8 MASK: Gibt an, ob die Nachricht kodiert ist. Nachrichten vom Client müssen maskiert werden, sodass Ihr Server erwarten muss, dass dies auf 1 gesetzt ist. (In der Tat, [Abschnitt 5.1 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.1) besagt, dass Ihr Server die Verbindung zu einem Client trennen muss, wenn dieser eine nicht maskierte Nachricht sendet.) Nachrichten vom Server zum Client sind nicht maskiert und haben dieses Bit auf 0 gesetzt. Die Maskierung wird später in [Lesen und Demaskierung der Daten](#lesen_und_demaskieren_der_daten) erklärt. _Hinweis: Sie müssen Nachrichten auch dann maskieren, wenn Sie einen sicheren Socket verwenden._
- Bits 9–15: Nutzdatenlänge. Kann auch die folgenden 2 Bytes oder 8 Bytes enthalten; siehe [Decoding Payload Length](#decoding_payload_length).
- Falls Maskierung verwendet wird (immer wahr für Client-zu-Server-Nachrichten), enthalten die nächsten 4 Bytes den Maskierungsschlüssel; siehe [Lesen und demaskieren der Daten](#lesen_und_demaskieren_der_daten).
- Alle nachfolgenden Bytes sind Nutzdaten.

### Decoding Payload Length

Um die Nutzdaten zu lesen, müssen Sie wissen, wann Sie aufhören müssen zu lesen. Deshalb ist die Nutzdatenlänge wichtig zu wissen. Leider ist dies etwas kompliziert. Um sie zu lesen, folgen Sie diesen Schritten:

1. Lesen Sie die Bits 9-15 (einschließlich) und interpretieren Sie sie als Ganzzahl ohne Vorzeichen. Wenn es 125 oder weniger ist, dann ist das die Länge; Sie sind **fertig**. Wenn es 126 ist, gehen Sie zu Schritt 2. Wenn es 127 ist, gehen Sie zu Schritt 3.
2. Lesen Sie die nächsten 16 Bits und interpretieren Sie diese als Ganzzahl ohne Vorzeichen. Sie sind **fertig**.
3. Lesen Sie die nächsten 64 Bits und interpretieren Sie diese als Ganzzahl ohne Vorzeichen. (Das höchstwertige Bit _muss_ 0 sein.) Sie sind **fertig**.

### Lesen und demaskieren der Daten

Wenn das MASK-Bit gesetzt war (und es sollte, für Client-zu-Server-Nachrichten), lesen Sie die nächsten 4 Oktetten (32 Bits); das ist der Maskierungsschlüssel. Sobald die Nutzdatenlänge und der Maskierungsschlüssel dekodiert sind, können Sie diese Anzahl von Bytes vom Socket lesen. Nennen wir die Daten `ENCODED` und den Schlüssel `MASK`. Um `DECODED` zu erhalten, durchlaufen Sie die Oktetten von `ENCODED` und XORen die Oktette mit der (i modulo 4)ten Oktette von `MASK`. Verwenden Sie JavaScript als Beispiel:

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

Nun können Sie herausfinden, was `decoded` bedeutet, je nach Ihrer Anwendung. Zum Beispiel können Sie sie als UTF-8 dekodieren, wenn es sich um eine Textnachricht handelt.

```js
console.log(new TextDecoder().decode(decoded)); // "hello"
```

Die Maskierung ist eine Sicherheitsmaßnahme, um zu vermeiden, dass böswillige Parteien die Daten erraten, die an den Server gesendet werden. Der Client wird für jede Nachricht einen kryptografisch zufälligen Maskierungsschlüssel erzeugen.

### Nachrichten-Fragmentierung

Die FIN- und Opcode-Felder arbeiten zusammen, um eine Nachricht aufgeteilt in separate Frames zu senden. Dies wird als Nachrichten-Fragmentierung bezeichnet. Die Fragmentierung ist nur bei den Opcodes `0x0` bis `0x2` verfügbar.

Erinnern Sie sich daran, dass der Opcode angibt, was ein Frame bewirken soll. Wenn es `0x1` ist, sind die Nutzdaten Text. Wenn es `0x2` ist, sind die Nutzdaten Binärdaten. Wenn es jedoch `0x0` ist, ist der Frame ein Fortsetzungsrahmen; dies bedeutet, dass der Server die Nutzlast des Frames an den letzten Rahmen, den er von diesem Client erhalten hat, anhängen sollte. Hier ist eine grobe Skizze, in der ein Server auf einen Client reagiert, der Textnachrichten sendet. Die erste Nachricht wird in einem einzigen Frame gesendet, während die zweite Nachricht über drei Frames gesendet wird. FIN- und Opcode-Details werden nur für den Client angezeigt:

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

Beachten Sie, dass der erste Frame eine vollständige Nachricht enthält (hat `FIN=1` und `opcode!=0x0`), sodass der Server nach Belieben reagieren oder antworten kann. Der zweite vom Client gesendete Frame hat eine Textnutzlast (`opcode=0x1`), aber die gesamte Nachricht ist noch nicht eingegangen (`FIN=0`). Alle restlichen Teile dieser Nachricht werden mit Fortsetzungsrahmen (`opcode=0x0`) gesendet, und der letzte Rahmen der Nachricht wird durch `FIN=1` markiert. [Abschnitt 5.4 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.4) beschreibt die Nachrichten-Fragmentierung.

## Pings und Pongs: Der Herzschlag von WebSockets

An jedem Punkt nach dem Handshake können sowohl der Client als auch der Server beschließen, einen Ping an die andere Partei zu senden. Wenn der Ping empfangen wird, muss der Empfänger so bald wie möglich ein Pong zurücksenden. Sie können dies verwenden, um sicherzustellen, dass der Client noch verbunden ist, beispielsweise.

Ein Ping oder Pong ist einfach ein regulärer Frame, aber es ist ein **Kontrollrahmen**. Pings haben einen Opcode von `0x9`, und Pongs haben einen Opcode von `0xA`. Wenn Sie einen Ping erhalten, senden Sie ein Pong mit exakt denselben Nutzdaten zurück wie der Ping (für Pings und Pongs beträgt die maximale Nutzdatenlänge 125). Es kann auch vorkommen, dass Sie ein Pong erhalten, ohne jemals einen Ping gesendet zu haben; ignorieren Sie dies, wenn es passiert.

> [!NOTE]
> Wenn Sie mehr als einen Ping erhalten haben, bevor Sie Gelegenheit haben, ein Pong zu senden, senden Sie nur ein Pong.

## Verbindungsabbruch

Zum Schließen einer Verbindung kann entweder der Client oder der Server einen Kontrollrahmen mit Daten senden, der eine bestimmte Steuersequenz enthält, um den Abschluss-Handshake einzuleiten (detailliert in [Abschnitt 5.5.1](https://datatracker.ietf.org/doc/html/rfc6455#section-5.5.1)). Beim Empfang eines solchen Rahmens sendet der andere Peer einen Close-Rahmen als Antwort. Das erste Peer schließt dann die Verbindung. Alle nach dem Schließen der Verbindung empfangenen Daten werden anschließend verworfen.

## Verschiedenes

> [!NOTE]
> WebSocket-Codes, -Erweiterungen, -Subprotokolle usw. sind im [IANA WebSocket Protokoll-Register](https://www.iana.org/assignments/websocket/websocket.xml) registriert.

WebSocket-Erweiterungen und Subprotokolle werden über Header während [des Handshakes](#der_websocket-handshake) ausgehandelt. Manchmal sind Erweiterungen und Subprotokolle sehr ähnlich, aber es gibt einen klaren Unterschied. Erweiterungen steuern den WebSocket-_Frame_ und _modifizieren_ die Nutzdaten, während Subprotokolle die WebSocket-_Nutzdaten_ strukturieren und _niemals etwas modifizieren_. Erweiterungen sind optional und verallgemeinert (wie Kompression); Subprotokolle sind obligatorisch und lokalisiert (wie solche für Chat und MMORPG-Spiele).

### Erweiterungen

Stellen Sie sich eine Erweiterung wie das Komprimieren einer Datei vor, bevor Sie sie jemandem per E-Mail senden. Egal was Sie tun, Sie senden dieselben Daten in verschiedenen Formen. Der Empfänger kann schließlich dieselben Daten wie Ihre lokale Kopie erhalten, aber sie werden anders gesendet. Das macht eine Erweiterung. WebSockets definiert ein Protokoll und eine einfache Möglichkeit, Daten zu senden, aber eine Erweiterung wie Kompression könnte ermöglichen, dieselben Daten in einem kürzeren Format zu senden.

> [!NOTE]
> Erweiterungen sind in den Abschnitten 5.8, 9, 11.3.2 und 11.4 der Spezifikation erklärt.

### Subprotokolle

Stellen Sie sich ein Subprotokoll wie ein benutzerdefiniertes [XML-Schema](https://en.wikipedia.org/wiki/XML_schema) oder eine [Dokumenttyp-Deklaration](https://en.wikipedia.org/wiki/Document_Type_Definition) vor. Sie verwenden immer noch XML und seine Syntax, aber Sie sind zusätzlich durch eine Struktur eingeschränkt, auf die Sie sich geeinigt haben. WebSocket-Subprotokolle sind genau so. Sie führen nichts Neues ein, sie legen nur eine Struktur fest. Wie ein Doctype oder Schema müssen beide Parteien dem Subprotokoll zustimmen; im Gegensatz zu einem Doctype oder Schema wird das Subprotokoll jedoch auf dem Server implementiert und kann nicht extern vom Client referenziert werden.

> [!NOTE]
> Subprotokolle sind in den Abschnitten 1.9, 4.2, 11.3.4 und 11.5 der Spezifikation erklärt.

Ein Client muss ein bestimmtes Subprotokoll anfordern. Um dies zu tun, wird er etwas wie dies _als Teil des ursprünglichen Handshakes_ senden:

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

Nun muss der Server eines der vom Client vorgeschlagenen und unterstützten Protokolle auswählen. Wenn es mehr als eines gibt, senden Sie das erste, das der Client gesendet hat. Angenommen, unser Server kann sowohl `soap` als auch `wamp` verwenden. Dann sendet er im Antworthandshake:

```http
Sec-WebSocket-Protocol: soap
```

> [!WARNING]
> Der Server kann nicht mehr als einen `Sec-WebSocket-Protocol` Header senden.
> Wenn der Server kein Subprotokoll verwenden möchte, **darf er keinen `Sec-WebSocket-Protocol` Header senden**. Einen leeren Header zu senden ist nicht korrekt. Der Client kann die Verbindung schließen, wenn er nicht das gewünschte Subprotokoll erhält.

Wenn Sie möchten, dass Ihr Server bestimmten Subprotokollen folgt, benötigen Sie logischerweise zusätzlichen Code auf dem Server. Stellen Sie sich vor, wir verwenden ein Subprotokoll `json`. In diesem Subprotokoll werden alle Daten als [JSON](https://en.wikipedia.org/wiki/JSON) übermittelt. Wenn der Client dieses Protokoll anfordert und der Server es verwenden möchte, muss der Server einen JSON-Parser haben. Praktisch gesprochen wird dies Teil einer Bibliothek sein, aber der Server muss die Daten umsetzen.

> [!NOTE]
> Um Namenskonflikte zu vermeiden, wird empfohlen, Ihren Subprotokollnamen Teil eines Domain-Strings zu machen. Wenn Sie eine benutzerdefinierte Chat-App entwickeln, die ein proprietäres Format verwendet, das nur für Example Inc. ist, könnten Sie dies verwenden: `Sec-WebSocket-Protocol: chat.example.com`. Beachten Sie, dass dies nicht erforderlich ist, sondern nur eine optionale Konvention, und Sie können jeden beliebigen String verwenden.

## Verwandte Themen

- [Schreiben von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Tutorial: WebSocket-Server in C#](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Tutorial: WebSocket-Server in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
