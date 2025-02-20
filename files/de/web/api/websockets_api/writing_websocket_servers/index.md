---
title: Schreiben von WebSocket-Servern
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
l10n:
  sourceCommit: fec5ea2b4f7249f95ad3fb1fd1a555db3fe47c35
---

{{DefaultAPISidebar("WebSockets API")}}

Ein WebSocket-Server ist nichts anderes als eine Anwendung, die auf einem beliebigen Port eines TCP-Servers lauscht und einem bestimmten Protokoll folgt. Einen benutzerdefinierten Server zu erstellen, kann überwältigend erscheinen, wenn Sie dies noch nie zuvor getan haben. Allerdings ist es tatsächlich recht einfach, einen grundlegenden WebSocket-Server auf der Plattform Ihrer Wahl zu implementieren.

Ein WebSocket-Server kann in jeder serverseitigen Programmiersprache geschrieben werden, die [Berkeley-Sockets](https://en.wikipedia.org/wiki/Berkeley_sockets) unterstützt, z. B. C(++), Python, {{Glossary("PHP", "PHP")}} oder [serverseitiges JavaScript](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework). Dies ist kein Tutorial für eine spezifische Sprache, sondern dient als Leitfaden, um das Schreiben eines eigenen Servers zu erleichtern.

Dieser Artikel geht davon aus, dass Sie bereits mit der Funktionsweise von {{Glossary("HTTP", "HTTP")}} vertraut sind und über ein mittleres Maß an Programmiererfahrung verfügen. Je nach Sprachunterstützung kann Wissen über TCP-Sockets erforderlich sein. Der Umfang dieses Leitfadens besteht darin, das Mindestwissen zu vermitteln, das Sie zum Schreiben eines WebSocket-Servers benötigen.

> [!NOTE]
> Lesen Sie die neueste offizielle WebSocket-Spezifikation, [RFC 6455](https://datatracker.ietf.org/doc/rfc6455/?include_text=1). Abschnitte 1 und 4-7 sind besonders interessant für Server-Implementierer. Abschnitt 10 behandelt Sicherheitsfragen und sollte definitiv gelesen werden, bevor Sie Ihren Server veröffentlichen.

Ein WebSocket-Server wird hier auf einer sehr grundlegenden Ebene erklärt. WebSocket-Server sind oft separate und spezialisierte Server (aus Gründen wie Lastenausgleich oder anderen praktischen Überlegungen), daher verwenden Sie häufig einen [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy) (wie z. B. einen regulären HTTP-Server), um WebSocket-Handshake-Anfragen zu erkennen, sie vorzuverarbeiten und die entsprechenden Clients an einen echten WebSocket-Server weiterzuleiten. Das bedeutet, dass Sie Ihren Servercode nicht mit Cookie- und Authentifizierungs-Handlern (z. B.) überfrachten müssen.

## Der WebSocket-Handshake

Zunächst muss der Server über einen Standard-TCP-Socket auf eingehende Verbindungen lauschen. Je nach Plattform kann dies automatisch für Sie gehandhabt werden. Angenommen, Ihr Server lauscht auf `example.com`, Port 8000, und Ihr Socket-Server beantwortet {{HTTPMethod("GET")}}-Anfragen unter `example.com/chat`.

> [!WARNING]
> Der Server kann auf jedem beliebigen Port lauschen, den er auswählt. Wenn er jedoch einen von 80 oder 443 abweichenden Port verwendet, kann es zu Problemen mit Firewalls und/oder Proxies kommen. Browser erfordern in der Regel eine sichere Verbindung für WebSockets, obwohl sie möglicherweise eine Ausnahme für lokale Geräte bieten.

Der Handshake ist das "Web" in WebSockets. Er ist die Brücke von HTTP zu WebSockets. Während des Handshakes werden Details der Verbindung ausgehandelt, und beide Parteien können den Prozess abbrechen, bevor er abgeschlossen ist, falls die Bedingungen ungünstig sind. Der Server muss sorgfältig alles verstehen, was der Client anfordert, da sonst Sicherheitsprobleme auftreten können.

> [!NOTE]
> Das `request-uri` (`/chat` hier) hat in der Spezifikation keine definierte Bedeutung. Daher nutzen viele es, um einen Server mit mehreren WebSocket-Anwendungen zu betreiben. Zum Beispiel könnte `example.com/chat` eine Multiuser-Chat-App aufrufen, während `/game` auf demselben Server ein Multiplayer-Spiel aufrufen könnte.

### Handshake-Anfrage des Clients

Auch wenn Sie einen Server erstellen, muss ein Client den WebSocket-Handshake-Prozess starten, indem er den Server kontaktiert und eine WebSocket-Verbindung anfordert. Sie müssen also wissen, wie Sie die Anfrage des Clients interpretieren. Der **Client** wird eine ziemlich standardmäßige HTTP-Anfrage mit Headern senden, die ungefähr so aussieht (die HTTP-Version **muss** 1.1 oder höher sein, und die Methode **muss** `GET` sein):

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Der Client kann hier Erweiterungen und/oder Subprotokolle anfordern; siehe [Verschiedenes](#verschiedenes) für Details. Außerdem können gängige Header wie {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Referer")}}, {{HTTPHeader("Cookie")}} oder Authentifizierungs-Header ebenfalls vorhanden sein. Sie können damit tun, was Sie möchten; sie betreffen WebSockets nicht direkt und können sicher ignoriert werden. In vielen gängigen Setups hat ein Reverse Proxy diese bereits verarbeitet.

> [!NOTE]
> Alle **Browser** senden einen [`Origin`-Header](/de/docs/Web/HTTP/CORS#origin). Sie können diesen Header zu Sicherheitszwecken verwenden (z. B. zum Überprüfen auf "same origin", automatisches Erlauben oder Verweigern usw.) und einen [403 Forbidden](/de/docs/Web/HTTP/Status/403) senden, falls Ihnen der Inhalt nicht gefällt. Dies ist effektiv gegen [Cross Site WebSocket Hijacking (CSWH)](https://cwe.mitre.org/data/definitions/1385.html). Beachten Sie jedoch, dass Nicht-Browser-Agents einen gefälschten `Origin` senden können. Die meisten Anwendungen lehnen Anfragen ohne diesen Header ab.

Wenn ein Header nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine {{HTTPStatus("400")}}-Antwort ("Bad Request") senden und den Socket sofort schließen. Wie üblich kann er auch den Grund für das Scheitern des Handshakes im HTTP-Antwortkörper angeben, aber die Nachricht wird möglicherweise nie angezeigt (Browser zeigen sie nicht an). Wenn der Server diese Version von WebSockets nicht versteht, sollte er einen {{HTTPHeader("Sec-WebSocket-Version")}}-Header zurücksenden, der die Version(en) enthält, die er versteht. Im obigen Beispiel gibt er Version 13 des WebSocket-Protokolls an.

Der interessanteste Header hier ist {{HTTPHeader("Sec-WebSocket-Key")}}. Sehen wir uns den nächsten Schritt an.

> **Hinweis:** [Reguläre HTTP-Statuscodes](/de/docs/Web/HTTP/Status) können nur vor dem Handshake verwendet werden. Nach dem erfolgreichen Handshake müssen Sie eine andere Reihe von Codes verwenden (definiert in Abschnitt 7.4 der Spezifikation).

### Antwort des Servers auf den Handshake

Wenn der **Server** die Handshake-Anfrage erhält, sollte er eine spezielle Antwort senden, die anzeigt, dass das Protokoll von HTTP auf WebSocket umgestellt wird. Dieser Header sieht etwa folgendermaßen aus (denken Sie daran, dass jede Header-Zeile mit `\r\n` endet und dass Sie ein zusätzliches `\r\n` hinter der letzten Zeile hinzufügen, um das Ende des Headers anzuzeigen):

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Zusätzlich kann der Server hier Entscheidungen zu Erweiterungs-/Subprotokoll-Anfragen treffen; siehe [Verschiedenes](#verschiedenes) für Details. Der Header `Sec-WebSocket-Accept` ist wichtig, da der Server diesen von dem `Sec-WebSocket-Key` ableiten muss, den der Client ihm gesendet hat. Um ihn zu erhalten, verbinden Sie den `Sec-WebSocket-Key` des Clients mit dem String `"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"` (es handelt sich um einen "[Magic String](https://en.wikipedia.org/wiki/Magic_string)"), erstellen Sie den [SHA-1-Hash](https://en.wikipedia.org/wiki/SHA-1) des Ergebnisses und geben Sie die [Base64](https://en.wikipedia.org/wiki/Base64)-Codierung dieses Hashes zurück.

> [!NOTE]
> Dieser scheinbar überkomplizierte Prozess existiert, damit für den Client offensichtlich ist, ob der Server WebSockets unterstützt. Dies ist wichtig, da Sicherheitsprobleme auftreten können, wenn der Server eine WebSocket-Verbindung akzeptiert, die Daten aber als HTTP-Anfrage interpretiert.

Wenn der Key zum Beispiel `"dGhlIHNhbXBsZSBub25jZQ=="` lautet, ist der Wert des Headers `Sec-WebSocket-Accept` `"s3pPLMBiTxaQ9kYGzzhZRbK+xOo="`. Sobald der Server diese Header sendet, ist der Handshake abgeschlossen, und Sie können anfangen, Daten auszutauschen!

> [!NOTE]
> Der Server kann andere Header wie {{HTTPHeader("Set-Cookie")}} senden oder Authentifizierung oder Weiterleitungen über andere Statuscodes anfordern, bevor die Antwort auf den Handshakeabschluss gesendet wird.

### Kundenverwaltung

Dies hat nicht direkt mit dem WebSocket-Protokoll zu tun, sollte aber hier erwähnt werden: Ihr Server muss die Sockets der Clients verfolgen, damit er nicht erneut mit Clients handshaken muss, die den Handshake bereits abgeschlossen haben. Dieselbe Client-IP-Adresse kann versuchen, sich mehrere Male zu verbinden. Der Server kann dies jedoch verweigern, wenn zu viele Verbindungsversuche auftreten, um sich selbst vor [Denial-of-Service-Angriffen](https://en.wikipedia.org/wiki/Denial_of_service) zu schützen.

Zum Beispiel könnten Sie eine Tabelle mit Benutzernamen oder ID-Nummern zusammen mit dem entsprechenden [`WebSocket`](/de/docs/Web/API/WebSocket) und anderen Daten führen, die Sie mit dieser Verbindung verknüpfen müssen.

## Austausch von Datenframes

Entweder der Client oder der Server kann jederzeit eine Nachricht senden — das ist die Magie von WebSockets. Das Extrahieren von Informationen aus diesen sogenannten "Frames" von Daten ist jedoch keine magische Erfahrung. Obwohl alle Frames demselben spezifischen Format folgen, werden Daten, die vom Client zum Server gesendet werden, mit einer [XOR-Verschlüsselung](https://en.wikipedia.org/wiki/XOR_cipher) (mit einem 32-Bit-Key) maskiert. Abschnitt 5 der Spezifikation beschreibt dies im Detail.

### Format

Jeder Datenframe (vom Client an den Server oder umgekehrt) folgt demselben Format:

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

Dies bedeutet, dass ein Frame die folgenden Bytes enthält:

- Erstes Byte:
  - Bit 0 FIN: Gibt an, ob dies die letzte Nachricht in einer Serie ist. Ist es 0, lauscht der Server weiterhin auf weitere Teile der Nachricht; andernfalls sollte der Server die Nachricht als übermittelt betrachten. Mehr dazu später.
  - Bit 1–3 RSV1, RSV2, RSV3: Kann ignoriert werden, sie sind für Erweiterungen vorgesehen.
  - Bits 4-7 OPCODE: Definiert, wie die Nutzdaten interpretiert werden: `0x0` für Fortsetzung, `0x1` für Text (immer in UTF-8 kodiert), `0x2` für Binärdaten, und andere sogenannte "Kontrollcodes", die später erläutert werden. In dieser Version von WebSockets haben `0x3` bis `0x7` und `0xB` bis `0xF` keine Bedeutung.
- Bit 8 MASK: Gibt an, ob die Nachricht codiert ist. Nachrichten vom Client müssen maskiert sein, daher muss Ihr Server erwarten, dass dieses auf 1 gesetzt ist. (Tatsächlich sagt [Abschnitt 5.1 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.1), dass Ihr Server sich von einem Client trennen muss, wenn dieser eine unmaskierte Nachricht sendet.) Nachrichten vom Server an den Client sind nicht maskiert und haben dieses Bit auf 0 gesetzt. Wir erklären die Maskierung später in [Lesen und Demaskieren der Daten](#lesen_und_demaskieren_der_daten). _Hinweis: Sie müssen Nachrichten auch dann maskieren, wenn Sie einen sicheren Socket verwenden._
- Bits 9–15: Nutzdatenlänge. Kann auch die folgenden 2 oder 8 Bytes beinhalten; siehe [Decodieren der Nutzdatenlänge](#decodieren_der_nutzdatenlänge).
- Wenn eine Maskierung verwendet wird (immer bei Nachrichten vom Client an den Server der Fall), enthalten die nächsten 4 Bytes den Maskierungsschlüssel; siehe [Lesen und Demaskieren der Daten](#lesen_und_demaskieren_der_daten).
- Alle weiteren Bytes sind Nutzdaten.

### Decodieren der Nutzdatenlänge

Um die Nutzdaten zu lesen, müssen Sie wissen, wann Sie aufhören sollten. Deshalb ist die Nutzdatenlänge wichtig. Leider ist dies etwas kompliziert. Befolgen Sie diese Schritte:

1. Lesen Sie Bits 9-15 (einschließlich) und interpretieren Sie diese als vorzeichenlose Ganzzahl. Wenn es 125 oder weniger ist, dann ist das die Länge; Sie sind **fertig**. Wenn es 126 ist, fahren Sie mit Schritt 2 fort. Wenn es 127 ist, fahren Sie mit Schritt 3 fort.
2. Lesen Sie die nächsten 16 Bits und interpretieren Sie diese als vorzeichenlose Ganzzahl. Sie sind **fertig**.
3. Lesen Sie die nächsten 64 Bits und interpretieren Sie diese als vorzeichenlose Ganzzahl. (Das höchstwertige Bit _muss_ 0 sein.) Sie sind **fertig**.

### Lesen und Demaskieren der Daten

Wenn das MASK-Bit gesetzt war (was bei Nachrichten vom Client an den Server der Fall sein sollte), lesen Sie die nächsten 4 Oktette (32 Bits); dies ist der Maskierungsschlüssel. Sobald die Nutzdatenlänge und der Maskierungsschlüssel decodiert sind, können Sie diese Anzahl von Bytes vom Socket lesen. Nennen wir die Daten `ENCODED`, und den Schlüssel `MASK`. Um `DECODED` zu erhalten, gehen Sie durch die Oktette von `ENCODED` und XOR-en Sie das Oktett mit dem (i mod 4)-ten Oktett von `MASK`. Ein Beispiel in JavaScript:

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

Nun können Sie herausfinden, was `decoded` in Ihrer Anwendung bedeutet. Zum Beispiel können Sie es als UTF-8 [decodieren](/de/docs/Web/API/TextDecoder), wenn es sich um eine Textnachricht handelt.

```js
console.log(new TextDecoder().decode(decoded)); // "hello"
```

Die Maskierung ist eine Sicherheitsmaßnahme, um böswillige Parteien daran zu hindern, die an den Server gesendeten Daten vorherzusagen. Der Client wird für jede Nachricht einen kryptografisch zufälligen Maskierungsschlüssel generieren.

### Nachrichtenfragmentierung

Die FIN- und OPCODE-Felder arbeiten zusammen, um eine Nachricht in getrennten Frames zu senden. Dies wird als Nachrichtenfragmentierung bezeichnet. Die Fragmentierung ist nur bei OPCODES `0x0` bis `0x2` verfügbar.

Denken Sie daran, dass der OPCODE angibt, was ein Frame tun soll. Wenn er `0x1` ist, sind die Nutzdaten Text. Wenn er `0x2` ist, handelt es sich um Binärdaten. Ist der OPCODE jedoch `0x0`, handelt es sich um einen Fortsetzungsframe; dies bedeutet, dass der Server die Nutzdaten des Frames mit dem letzten Frame verbinden soll, den er von diesem Client erhalten hat. Ein grober Entwurf dazu, wie ein Server auf Textnachrichten eines Clients reagiert, sieht wie folgt aus. Die erste Nachricht wird in einem einzelnen Frame gesendet, während die zweite Nachricht auf drei Frames verteilt wird. FIN- und OPCODE-Details werden nur für den Client gezeigt:

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

Beachten Sie, dass der erste Frame eine vollständige Nachricht enthält (`FIN=1` und `opcode!=0x0`). Der Server kann diese verarbeiten oder darauf reagieren, wie er es für richtig hält. Der zweite Frame des Clients enthält Textnutzdaten (`opcode=0x1`), doch die gesamte Nachricht ist noch nicht angekommen (`FIN=0`). Alle verbleibenden Teile dieser Nachricht werden mit Fortsetzungsframes (`opcode=0x0`) gesendet, und der letzte Frame der Nachricht wird durch `FIN=1` markiert. [Abschnitt 5.4 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.4) beschreibt die Nachrichtenfragmentierung.

## Pings und Pongs: Der Herzschlag von WebSockets

Nach dem Handshake kann der Client oder der Server jederzeit entscheiden, ein Ping an die jeweils andere Partei zu senden. Beim Empfang des Pings muss der Empfänger so schnell wie möglich ein Pong zurücksenden. Dies kann z. B. verwendet werden, um sicherzustellen, dass der Client noch verbunden ist.

Ein Ping oder Pong ist einfach ein regulärer Frame, jedoch ein **Kontrollframe**. Pings haben einen OPCODE von `0x9`, und Pongs haben einen OPCODE von `0xA`. Wenn Sie ein Ping erhalten, senden Sie ein Pong mit denselben Nutzdaten so schnell wie möglich zurück (für Pings und Pongs beträgt die maximale Nutzdatenlänge 125). Sie könnten auch ein Pong erhalten, ohne jemals ein Ping gesendet zu haben; ignorieren Sie dies, falls es passiert.

> [!NOTE]
> Wenn Sie mehr als einen Ping erhalten, bevor Sie ein Pong senden, senden Sie nur ein Pong.

## Schließen der Verbindung

Um eine Verbindung zu schließen, kann entweder der Client oder der Server einen Kontrollframe mit Daten senden, die eine spezifische Kontrollsequenz enthalten, um den Schließ-Handshake zu starten (detailliert in [Abschnitt 5.5.1](https://datatracker.ietf.org/doc/html/rfc6455#section-5.5.1)). Nach dem Empfang eines solchen Frames sendet der andere Peer einen Close-Frame als Antwort. Der erste Peer schließt dann die Verbindung. Alle weiteren empfangenen Daten nach dem Schließen der Verbindung werden verworfen.

## Verschiedenes

> [!NOTE]
> WebSocket-Codes, Erweiterungen, Subprotokolle usw. werden im [IANA WebSocket Protocol Registry](https://www.iana.org/assignments/websocket/websocket.xml) registriert.

WebSocket-Erweiterungen und Subprotokolle werden über Header während [des Handshakes](#der_websocket-handshake) ausgehandelt. Manchmal sind Erweiterungen und Subprotokolle sehr ähnlich, aber es gibt einen klaren Unterschied. Erweiterungen steuern die WebSocket-_Frames_ und _modifizieren_ die Nutzdaten, während Subprotokolle die WebSocket-_Nutzdaten_ strukturieren und _niemals_ etwas modifizieren. Erweiterungen sind optional und generalisiert (wie z. B. Komprimierung); Subprotokolle sind obligatorisch und lokalisiert (wie z. B. bei Chat- oder MMORPG-Spielen).

### Erweiterungen

Stellen Sie sich eine Erweiterung wie das Komprimieren einer Datei vor, bevor Sie sie per E-Mail versenden. Egal, was Sie tun, Sie senden _dieselben_ Daten in unterschiedlichen Formen. Der Empfänger wird letztlich dieselben Daten wie Ihre lokale Kopie erhalten können, aber sie werden anders gesendet. Genau das macht eine Erweiterung. WebSockets definiert ein Protokoll und eine einfache Möglichkeit, Daten zu senden, aber eine Erweiterung wie Komprimierung könnte erlauben, dieselben Daten jedoch in kürzerer Form zu senden.

> [!NOTE]
> Erweiterungen werden in den Abschnitten 5.8, 9, 11.3.2 und 11.4 der Spezifikation erklärt.

### Subprotokolle

Stellen Sie sich ein Subprotokoll wie ein benutzerdefiniertes [XML-Schema](https://en.wikipedia.org/wiki/XML_schema) oder eine [Doctype-Deklaration](https://en.wikipedia.org/wiki/Document_Type_Definition) vor. Sie verwenden immer noch XML und dessen Syntax, sind aber zusätzlich durch eine Struktur eingeschränkt, auf die Sie sich geeinigt haben. WebSocket-Subprotokolle sind genau so. Sie führen nichts Besonderes ein, sondern etablieren nur eine Struktur. Wie ein Doctype oder ein Schema müssen beide Parteien sich auf das Subprotokoll einigen; im Gegensatz zu einem Doctype oder Schema wird das Subprotokoll jedoch auf dem Server implementiert und kann vom Client nicht extern referenziert werden.

> [!NOTE]
> Subprotokolle werden in den Abschnitten 1.9, 4.2, 11.3.4 und 11.5 der Spezifikation erklärt.

Ein Client muss nach einem spezifischen Subprotokoll fragen. Um dies zu tun, wird er _als Teil des ursprünglichen Handshakes_ etwas Ähnliches senden:

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

Nun muss der Server eines der Protokolle auswählen, die der Client vorgeschlagen hat und die er unterstützt. Wenn es mehr als eines gibt, senden Sie das erste, das der Client gesendet hat. Stellen wir uns vor, unser Server kann sowohl `soap` als auch `wamp` verwenden. Dann sendet er im Antwort-Handshake:

```http
Sec-WebSocket-Protocol: soap
```

> [!WARNING]
> Der Server kann nicht mehr als einen `Sec-WebSocket-Protocol`-Header senden.
> Wenn der Server kein Subprotokoll verwenden möchte, **_sollte er keinen `Sec-WebSocket-Protocol`-Header senden_**. Das Senden eines leeren Headers ist falsch. Der Client kann die Verbindung schließen, wenn er nicht das gewünschte Subprotokoll erhält.

Wenn Sie möchten, dass Ihr Server bestimmten Subprotokollen folgt, dann benötigen Sie natürlich zusätzlichen Code auf dem Server. Stellen wir uns vor, wir verwenden ein Subprotokoll `json`. In diesem Subprotokoll werden alle Daten als [JSON](https://en.wikipedia.org/wiki/JSON) übermittelt. Wenn der Client dieses Protokoll wünscht und der Server es verwenden möchte, benötigt der Server einen JSON-Parser. Praktisch gesehen wird dies Teil einer Bibliothek sein, aber der Server muss die Daten entsprechend bearbeiten.

> [!NOTE]
> Um Namenskonflikte zu vermeiden, wird empfohlen, Ihren Subprotokollnamen als Teil eines Domainstrings zu gestalten. Wenn Sie eine benutzerdefinierte Chat-App erstellen, die ein exklusives Format von Example Inc. verwendet, könnten Sie dies verwenden: `Sec-WebSocket-Protocol: chat.example.com`. Beachten Sie, dass dies nicht erforderlich ist, sondern lediglich eine optionale Konvention darstellt, und Sie können jeden beliebigen String verwenden.

## Verwandt

- [WebSocket-Client-Anwendungen schreiben](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Tutorial: WebSocket-Server in C#](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Tutorial: WebSocket-Server in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
