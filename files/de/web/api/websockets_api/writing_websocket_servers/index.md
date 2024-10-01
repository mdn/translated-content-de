---
title: Writing WebSocket servers
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{DefaultAPISidebar("WebSockets API")}}

Ein WebSocket-Server ist nichts weiter als eine Anwendung, die auf einem beliebigen Port eines TCP-Servers lauscht und einem bestimmten Protokoll folgt. Die Erstellung eines benutzerdefinierten Servers kann überwältigend erscheinen, wenn Sie dies noch nie zuvor gemacht haben. Es kann jedoch recht einfach sein, einen grundlegenden WebSocket-Server auf der gewünschten Plattform zu implementieren.

Ein WebSocket-Server kann in jeder serverseitigen Programmiersprache geschrieben werden, die [Berkeley Sockets](https://de.wikipedia.org/wiki/Berkeley_Sockets) unterstützt, wie z.B. C(++), Python, {{Glossary("PHP", "PHP")}} oder [serverseitiges JavaScript](/de/docs/Learn/Server-side/Node_server_without_framework). Dies ist kein Tutorial für eine bestimmte Sprache, sondern dient als Leitfaden zur Erleichterung der Erstellung eines eigenen Servers.

Dieser Artikel setzt voraus, dass Sie bereits mit der Funktionsweise von {{Glossary("HTTP", "HTTP")}} vertraut sind und über ein mittleres Maß an Programmiererfahrung verfügen. Abhängig von der Sprachunterstützung kann das Wissen über TCP-Sockets erforderlich sein. Der Umfang dieses Leitfadens besteht darin, das Mindestwissen zu präsentieren, das Sie benötigen, um einen WebSocket-Server zu schreiben.

> [!NOTE]
> Lesen Sie die neueste offizielle WebSockets-Spezifikation, [RFC 6455](https://datatracker.ietf.org/doc/rfc6455/?include_text=1). Die Abschnitte 1 und 4-7 sind besonders interessant für Server-Implementierer. Abschnitt 10 behandelt die Sicherheit, und Sie sollten ihn unbedingt lesen, bevor Sie Ihren Server freigeben.

Ein WebSocket-Server wird hier auf einem sehr niedrigen Niveau erklärt. WebSocket-Server sind oft separate und spezialisierte Server (aus Gründen der Lastverteilung oder anderer praktischer Gründe), so dass Sie oft einen [Reverse Proxy](https://de.wikipedia.org/wiki/Reverse_Proxy) (wie einen regulären HTTP-Server) verwenden, um WebSocket-Handshakes zu erkennen, diese vorzuverarbeiten und diese Clients an einen echten WebSocket-Server zu senden. Das bedeutet, dass Sie Ihren Servercode nicht mit Cookie- und Authentifizierungs-Handlern belasten müssen (zum Beispiel).

## Der WebSocket-Handshake

Zunächst muss der Server eingehende Socket-Verbindungen mit einem Standard-TCP-Socket überwachen. Abhängig von Ihrer Plattform kann dies automatisch für Sie gehandhabt werden. Angenommen, Ihr Server lauscht bei `example.com`, Port 8000, und Ihr Socket-Server antwortet auf {{HTTPMethod("GET")}}-Anfragen unter `example.com/chat`.

> [!WARNING]
> Der Server kann auf jedem von ihm gewählten Port lauschen, aber wenn er einen anderen als Port 80 oder 443 wählt, kann es zu Problemen mit Firewalls und/oder Proxies kommen. Browser erfordern im Allgemeinen eine sichere Verbindung für WebSockets, obwohl sie möglicherweise eine Ausnahme für lokale Geräte anbieten.

Der Handshake ist das "Web" in WebSockets. Es ist die Brücke von HTTP zu WebSockets. Im Handshake werden die Details der Verbindung ausgehandelt und jede Partei kann vor Abschluss zurücktreten, wenn die Bedingungen ungünstig sind. Der Server muss sorgfältig alles verstehen, was der Client fordert, da sonst Sicherheitsprobleme auftreten können.

> [!NOTE]
> Die Anfrage-URI (`/chat` hier) hat keine definierte Bedeutung in der Spezifikation. Daher verwenden viele Menschen ihn, um einen Server mit mehreren WebSocket-Anwendungen zu betreiben. Zum Beispiel könnte `example.com/chat` eine Mehrbenutzer-Chat-App aufrufen, während `/game` auf demselben Server möglicherweise ein Multiplayer-Spiel aufruft.

### Client-Handshake-Anfrage

Auch wenn Sie einen Server erstellen, muss ein Client den WebSocket-Handshake-Prozess starten, indem er den Server kontaktiert und eine WebSocket-Verbindung anfordert. Daher müssen Sie wissen, wie die Anfragen des Clients interpretiert werden. Der **Client** sendet eine ziemlich standardisierte HTTP-Anfrage mit den folgenden Headern (die HTTP-Version **muss** 1.1 oder höher sein und die Methode **muss** `GET` sein):

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Der Client kann hier Erweiterungen und/oder Subprotokolle anfordern; siehe [Verschiedenes](#verschiedenes) für Details. Auch häufige Header wie {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Referer")}}, {{HTTPHeader("Cookie")}} oder Authentifizierungs-Header können vorhanden sein. Machen Sie damit, was Sie wollen; sie beziehen sich nicht direkt auf das WebSocket. Es ist auch sicher, sie zu ignorieren. In vielen gängigen Setups hat sich bereits ein Reverse Proxy darum gekümmert.

> [!NOTE]
> Alle **Browser** senden einen [`Origin`-Header](/de/docs/Web/HTTP/CORS#origin). Sie können diesen Header zur Sicherheit verwenden (um auf denselben Ursprung zu überprüfen, automatisch zuzulassen oder abzulehnen usw.) und einen [403 Forbidden](/de/docs/Web/HTTP/Status/403) senden, wenn Ihnen nicht gefällt, was Sie sehen. Dies ist wirksam gegen [Cross Site WebSocket Hijacking (CSWH)](https://cwe.mitre.org/data/definitions/1385.html). Seien Sie jedoch gewarnt, dass Nicht-Browser-Agents einen gefälschten `Origin` senden können. Die meisten Anwendungen lehnen Anfragen ohne diesen Header ab.

Wenn ein Header nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine {{HTTPStatus("400")}} ("Bad Request")-Antwort senden und die Socket-Verbindung sofort schließen. Wie üblich kann auch der Grund für das Scheitern des Handshakes im HTTP-Antworttext angegeben werden, aber die Nachricht wird möglicherweise nie angezeigt (Browser zeigen sie nicht an). Wenn der Server diese Version von WebSockets nicht versteht, sollte er einen {{HTTPHeader("Sec-WebSocket-Version")}}-Header zurücksenden, der die Versionen enthält, die er versteht. Im obigen Beispiel wird Version 13 des WebSocket-Protokolls angegeben.

Der interessanteste Header hier ist {{HTTPHeader("Sec-WebSocket-Key")}}. Schauen wir uns das nächstgrößere Detail an.

> **Hinweis:** [Reguläre HTTP-Statuscodes](/de/docs/Web/HTTP/Status) können nur vor dem Handshake verwendet werden. Nach dem erfolgreichen Handshake müssen Sie einen anderen Satz von Codes verwenden (definiert in Abschnitt 7.4 der Spezifikation).

### Server-Handshake-Antwort

Wenn der **Server** die Handshake-Anfrage empfängt, sollte er eine spezielle Antwort zurücksenden, die anzeigt, dass sich das Protokoll von HTTP zu WebSocket ändert. Dieser Header sieht ungefähr so aus (denken Sie daran, dass jede Zeile des Headers mit `\r\n` endet und setzen Sie ein zusätzliches `\r\n` nach der letzten ein, um das Ende des Headers anzuzeigen):

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Zusätzlich kann der Server hier über die Anfragen für Erweiterungen/Subprotokolle entscheiden; siehe [Verschiedenes](#verschiedenes) für Details. Der `Sec-WebSocket-Accept`-Header ist insofern wichtig, als der Server ihn aus dem vom Client gesendeten {{HTTPHeader("Sec-WebSocket-Key")}} ableiten muss. Um ihn zu erhalten, fügen Sie den `Sec-WebSocket-Key` des Clients und die Zeichenkette `"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"` zusammen (es ist eine "[magische Zeichenkette](https://en.wikipedia.org/wiki/Magic_string)"), nehmen den [SHA-1-Hash](https://de.wikipedia.org/wiki/SHA-1) des Ergebnisses und geben die [Base64](https://de.wikipedia.org/wiki/Base64)-Codierung dieses Hashes zurück.

> [!NOTE]
> Dieser scheinbar überkomplizierte Prozess besteht, damit dem Client klar ist, ob der Server WebSockets unterstützt. Dies ist wichtig, da Sicherheitsprobleme auftreten können, wenn der Server eine WebSockets-Verbindung akzeptiert, aber die Daten als HTTP-Anfrage interpretiert.

Wenn der Key also `"dGhlIHNhbXBsZSBub25jZQ=="` war, ist der Wert des `Sec-WebSocket-Accept`-Headers `"s3pPLMBiTxaQ9kYGzzhZRbK+xOo="`. Sobald der Server diese Header sendet, ist der Handshake abgeschlossen und Sie können mit dem Datenaustausch beginnen!

> [!NOTE]
> Der Server kann andere Header wie {{HTTPHeader("Set-Cookie")}} senden oder über andere Statuscodes um Authentifizierung oder Umleitungen bitten, bevor er den Antwort-Handshake sendet.

### Verwaltung von Clients

Dies steht nicht direkt mit dem WebSocket-Protokoll in Verbindung, es ist jedoch erwähnenswert: Ihr Server muss die Sockets der Clients im Auge behalten, damit Sie nicht erneut Handshakes mit Clients durchführen, die den Handshake bereits abgeschlossen haben. Dieselbe Client-IPs können versuchen, sich mehrfach zu verbinden. Der Server kann ihnen jedoch den Zugriff verweigern, wenn sie zu viele Verbindungen versuchen, um sich vor [Denial-of-Service-Angriffen](https://de.wikipedia.org/wiki/Denial_of_Service) zu schützen.

Zum Beispiel könnten Sie eine Tabelle mit Benutzernamen oder ID-Nummern zusammen mit dem entsprechenden [`WebSocket`](/de/docs/Web/API/WebSocket) und anderen Daten führen, die Sie mit dieser Verbindung verknüpfen müssen.

## Austausch von Datenrahmen

Sowohl der Client als auch der Server können jederzeit eine Nachricht senden – das ist die Magie von WebSockets. Das Extrahieren von Informationen aus diesen sogenannten "Frames" von Daten ist jedoch keine so magische Erfahrung. Obwohl alle Frames dem gleichen spezifischen Format folgen, werden Daten, die vom Client zum Server gehen, mit [XOR-Verschlüsselung](https://de.wikipedia.org/wiki/XOR-Chiffre) (mit einem 32-Bit-Schlüssel) maskiert. Abschnitt 5 der Spezifikation beschreibt dies detailliert.

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

Das bedeutet, dass ein Frame die folgenden Bytes enthält:

- Erstes Byte:
  - Bit 0: FIN
  - Bit 1: RSV1
  - Bit 2: RSV2
  - Bit 3: RSV3
  - Bits 4-7 OPCODE
- Bytes 2-10: Nutzlastlänge (siehe [Dekodierung der Nutzlastlänge](#dekodierung_der_nutzlastlänge))
- Wenn Maskierung verwendet wird, enthalten die nächsten 4 Bytes den Maskierungsschlüssel (siehe [Lesen und Entmaskeing der Daten](#lesen_und_entmaskieren_der_daten))
- Alle nachfolgenden Bytes sind die Nutzlast

Das MASK-Bit zeigt an, ob die Nachricht codiert ist. Nachrichten vom Client müssen maskiert sein, daher muss Ihr Server erwarten, dass dies 1 ist. (Tatsächlich sagt [Abschnitt 5.1 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.1), dass Ihr Server die Verbindung zu einem Client trennen muss, wenn dieser Client eine nicht maskierte Nachricht sendet.) Beim Senden eines Frames zurück an den Client, maskieren Sie es nicht und setzten Sie das Masken-Bit nicht. Wir erklären die Maskierung später. _Hinweis: Sie müssen Nachrichten selbst bei der Verwendung eines sicheren Sockets maskieren._ RSV1-3 können ignoriert werden, sie sind für Erweiterungen.

Das Opcode-Feld definiert, wie die Nutzlast interpretiert werden soll: `0x0` für Fortsetzung, `0x1` für Text (der immer in UTF-8 kodiert ist), `0x2` für Binärdaten und andere sogenannte „Kontrollcodes“, die später besprochen werden. In dieser Version von WebSockets haben `0x3` bis `0x7` und `0xB` bis `0xF` keine Bedeutung.

Das FIN-Bit gibt an, ob dies die letzte Nachricht in einer Reihe ist. Wenn es 0 ist, hört der Server weiter zu, ob weitere Teile der Nachricht kommen; andernfalls sollte der Server die Nachricht als übermittelt betrachten. Mehr dazu später.

### Dekodierung der Nutzlastlänge

Um die Nutzlast-Daten zu lesen, müssen Sie wissen, wann Sie mit dem Lesen aufhören sollen. Deshalb ist es wichtig, die Nutzlastlänge zu kennen. Leider ist dies etwas kompliziert. Um sie zu lesen, gehen Sie wie folgt vor:

1. Lesen Sie die Bits 9-15 (einschließlich) und interpretieren Sie sie als vorzeichenlose Ganzzahl. Wenn es 125 oder kleiner ist, dann ist das die Länge; Sie sind **fertig**. Wenn es 126 ist, gehen Sie zu Schritt 2. Wenn es 127 ist, gehen Sie zu Schritt 3.
2. Lesen Sie die nächsten 16 Bits und interpretieren Sie sie als vorzeichenlose Ganzzahl. Sie sind **fertig**.
3. Lesen Sie die nächsten 64 Bits und interpretieren Sie sie als vorzeichenlose Ganzzahl. (Das höchstwertige Bit _muss_ 0 sein.) Sie sind **fertig**.

### Lesen und Entmaskieren der Daten

Wenn das MASK-Bit gesetzt war (und das sollte es bei Nachrichten vom Client zum Server sein), lesen Sie die nächsten 4 Oktette (32 Bits); dies ist der Maskierungsschlüssel. Sobald die Nutzlastlänge und der Maskierungsschlüssel dekodiert sind, können Sie diese Anzahl von Bytes aus dem Socket lesen. Nennen wir die Daten `ENCODED` und den Schlüssel `MASK`. Um `DECODED` zu erhalten, durchlaufen Sie die Oktette (Bytes alias Zeichen für Textdaten) von `ENCODED` und XORen Sie das Oktett mit dem (i modulo 4)ten Oktett von `MASK`. Im Pseudocode (der zufällig gültiges JavaScript ist):

```js
const MASK = [1, 2, 3, 4]; // 4-byte mask
const ENCODED = [105, 103, 111, 104, 110]; // encoded string "hello"

// Create the byte Array of decoded payload
const DECODED = Uint8Array.from(ENCODED, (elt, i) => elt ^ MASK[i % 4]); // Perform an XOR on the mask
```

Jetzt können Sie herausfinden, was **DECODED** in Bezug auf Ihre Anwendung bedeutet.

### Nachrichtenfragmentierung

Die FIN- und Opcode-Felder arbeiten zusammen, um eine Nachricht zu senden, die in separate Frames aufgeteilt ist. Dies wird Nachrichtenfragmentierung genannt. Die Fragmentierung ist nur bei den Opcodes `0x0` bis `0x2` verfügbar.

Erinnern Sie sich daran, dass der Opcode angibt, was ein Frame bewirken soll. Wenn es `0x1` ist, ist die Nutzlast Text. Wenn es `0x2` ist, ist die Nutzlast Binärdaten. Wenn es jedoch `0x0` ist, handelt es sich um einen Fortsetzungsrahmen; das bedeutet, dass der Server die Payload des Frames an den letzten Frame anhängen soll, den er von diesem Client erhalten hat. Hier ist eine grobe Skizze, in der ein Server auf das Senden von Textnachrichten eines Clients reagiert. Die erste Nachricht wird in einem einzigen Frame gesendet, während die zweite Nachricht über drei Frames gesendet wird. FIN- und Opcodedetails werden nur für den Client gezeigt:

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

Beachten Sie, dass der erste Frame eine gesamte Nachricht enthält (hat `FIN=1` und `opcode!=0x0`), sodass der Server sie nach Belieben verarbeiten oder beantworten kann. Der zweite vom Client gesendete Frame hat eine Textnutzlast (`opcode=0x1`), aber die gesamte Nachricht ist noch nicht eingetroffen (`FIN=0`). Alle verbleibenden Teile dieser Nachricht werden mit Fortsetzungsframes gesendet (`opcode=0x0`) und der letzte Frame der Nachricht wird durch `FIN=1` gekennzeichnet. [Abschnitt 5.4 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.4) beschreibt die Nachrichtenfragmentierung.

## Pings und Pongs: Der Herzschlag der WebSockets

Zu jedem Zeitpunkt nach dem Handshake können entweder der Client oder der Server einen Ping an die andere Partei senden. Wenn der Ping empfangen wird, muss der Empfänger so schnell wie möglich ein Pong zurücksenden. Sie können dies verwenden, um sicherzustellen, dass der Client noch verbunden ist.

Ein Ping oder Pong ist einfach ein normaler Frame, aber es ist ein **Kontrollframe**. Pings haben einen Opcode von `0x9` und Pongs haben einen Opcode von `0xA`. Wenn Sie einen Ping erhalten, senden Sie ein Pong mit genau denselben Nutzlast-Daten wie der Ping zurück (für Pings und Pongs beträgt die maximale Nutzlastlänge 125). Sie könnten auch ein Pong erhalten, ohne jemals einen Ping gesendet zu haben; ignorieren Sie dies, wenn es passiert.

> [!NOTE]
> Wenn Sie mehr als einen Ping erhalten haben, bevor Sie die Gelegenheit haben, ein Pong zu senden, senden Sie nur ein einziges Pong.

## Schließen der Verbindung

Um eine Verbindung zu schließen, kann entweder der Client oder der Server einen Kontroll-Frame mit Daten senden, die eine bestimmte Kontrollsequenz enthalten, um den Schließungs-Handshake zu beginnen (detailliert in [Abschnitt 5.5.1](https://datatracker.ietf.org/doc/html/rfc6455#section-5.5.1)). Nach Empfang eines solchen Frames sendet der andere Partner als Antwort einen Schließ-Frame. Der erste Partner schließt dann die Verbindung. Alle weiteren Daten, die nach dem Schließen der Verbindung empfangen werden, werden verworfen.

## Verschiedenes

> [!NOTE]
> WebSocket-Codes, -Erweiterungen, -Subprotokolle usw. sind im [IANA WebSocket Protocol Registry](https://www.iana.org/assignments/websocket/websocket.xml) registriert.

WebSocket-Erweiterungen und -Subprotokolle werden über Header während [des Handshakes](#der_websocket-handshake) ausgehandelt. Manchmal sind Erweiterungen und Subprotokolle sehr ähnlich, aber es gibt eine deutliche Unterscheidung. Erweiterungen betreffen den WebSocket _Frame_ und _modifizieren_ die Nutzlast, während Subprotokolle die WebSocket-Nutzlast strukturieren und _niemals_ etwas modifizieren. Erweiterungen sind optional und generalisiert (wie Komprimierung); Subprotokolle sind obligatorisch und lokalisiert (wie beispielsweise bei Chat- und MMORPG-Spielen).

### Erweiterungen

Denken Sie an eine Erweiterung, als würden Sie eine Datei komprimieren, bevor Sie sie jemandem per E-Mail senden. Was auch immer Sie tun, Sie senden dieselben Daten in anderer Form. Der Empfänger wird schließlich in der Lage sein, dieselben Daten wie Ihre lokale Kopie zu erhalten, aber sie werden anders gesendet. Das macht eine Erweiterung. WebSockets definiert ein Protokoll und eine einfache Möglichkeit, Daten zu senden, aber eine Erweiterung wie Komprimierung könnte das Senden derselben Daten in einem kürzeren Format ermöglichen.

> [!NOTE]
> Erweiterungen werden in Abschnitten 5.8, 9, 11.3.2 und 11.4 der Spezifikation erklärt.

### Subprotokolle

Denken Sie an ein Subprotokoll wie an ein benutzerdefiniertes [XML-Schema](https://de.wikipedia.org/wiki/XML-Schema) oder eine [DOCTYPE-Deklaration](https://de.wikipedia.org/wiki/Document_Type_Definition). Sie verwenden immer noch XML und dessen Syntax, unterliegen jedoch zusätzlich einer Struktur, auf die Sie sich geeinigt haben. WebSocket-Subprotokolle sind genau das. Sie führen nichts Neues ein, sondern etablieren nur Struktur. Wie ein Doctype oder Schema müssen beide Parteien sich auf das Subprotokoll einigen; im Gegensatz zu einem Doctype oder Schema wird das Subprotokoll jedoch auf dem Server implementiert und kann nicht extern vom Client referenziert werden.

> [!NOTE]
> Subprotokolle werden in den Abschnitten 1.9, 4.2, 11.3.4 und 11.5 der Spezifikation erklärt.

Ein Client muss ein spezifisches Subprotokoll anfordern. Dazu sendet er so etwas _als Teil des ursprünglichen Handshakes_:

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

Jetzt muss der Server eines der Protokolle auswählen, die der Client vorgeschlagen hat und die er unterstützt. Wenn es mehr als eines gibt, senden Sie das erste, das der Kunde gesendet hat. Stellen Sie vor, unser Server kann sowohl `soap` als auch `wamp` verwenden. Dann sendet er im Antwort-Handshake:

```http
Sec-WebSocket-Protocol: soap
```

> [!WARNING]
> Der Server kann nicht mehr als einen `Sec-Websocket-Protocol`-Header senden.
> Wenn der Server kein Subprotokoll verwenden möchte, **sollte er keinen `Sec-WebSocket-Protocol`-Header senden**. Das Senden eines leeren Headers ist falsch. Der Client könnte die Verbindung schließen, wenn er nicht das gewünschte Subprotokoll erhält.

Wenn Sie möchten, dass Ihr Server bestimmten Subprotokollen folgt, benötigen Sie natürlich zusätzlichen Code auf dem Server. Stellen Sie sich vor, wir verwenden ein Subprotokoll `json`. In diesem Subprotokoll werden alle Daten als [JSON](https://de.wikipedia.org/wiki/JSON) übergeben. Wenn der Client dieses Protokoll anfordert und der Server es verwenden möchte, muss der Server einen JSON-Parser haben. Praktisch gesprochen wird dies Teil einer Bibliothek sein, aber der Server muss die Daten weiterleiten.

> [!NOTE]
> Um Namenskonflikte zu vermeiden, wird empfohlen, den Namen Ihres Subprotokolls Teil eines Domain-Strings zu machen. Wenn Sie eine benutzerdefinierte Chat-App erstellen, die ein exklusives proprietäres Format von Beispiel AG verwendet, könnten Sie dies verwenden: `Sec-WebSocket-Protocol: chat.example.com`. Beachten Sie, dass dies nicht erforderlich ist, es ist nur eine optionale Konvention, und Sie können einen beliebigen String verwenden.

## Verwandtes

- [Schreiben von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Tutorial: Websocket-Server in C#](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Tutorial: Websocket-Server in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
