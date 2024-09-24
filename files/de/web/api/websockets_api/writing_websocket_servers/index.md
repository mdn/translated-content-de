---
title: Schreiben von WebSocket-Servern
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
l10n:
  sourceCommit: c69e36924e1849fdc9b7fc49a3f4c550efa3468a
---

{{DefaultAPISidebar("WebSockets API")}}

Ein WebSocket-Server ist nichts anderes als eine Anwendung, die an einem beliebigen Port eines TCP-Servers lauscht, der einem bestimmten Protokoll folgt. Die Erstellung eines benutzerdefinierten Servers kann überwältigend erscheinen, wenn Sie dies noch nie zuvor getan haben. Es kann jedoch durchaus einfach sein, einen grundlegenden WebSocket-Server auf Ihrer bevorzugten Plattform zu implementieren.

Ein WebSocket-Server kann in jeder serverseitigen Programmiersprache geschrieben werden, die [Berkeley Sockets](https://en.wikipedia.org/wiki/Berkeley_sockets) unterstützt, wie z.B. C(++), Python, {{Glossary("PHP")}}, oder [serverseitiges JavaScript](/de/docs/Learn/Server-side/Node_server_without_framework). Dies ist kein Tutorial für eine bestimmte Sprache, sondern dient als Leitfaden, um Ihnen beim Schreiben Ihres eigenen Servers zu helfen.

Dieser Artikel setzt voraus, dass Sie bereits damit vertraut sind, wie {{Glossary("HTTP")}} funktioniert, und dass Sie über ein mittleres Programmierniveau verfügen. Je nach Sprachunterstützung kann Wissen über TCP-Sockets erforderlich sein. Der Umfang dieses Leitfadens besteht darin, das Mindestwissen zu präsentieren, das Sie benötigen, um einen WebSocket-Server zu schreiben.

> [!NOTE]
> Lesen Sie die neueste offizielle WebSockets-Spezifikation, [RFC 6455](https://datatracker.ietf.org/doc/rfc6455/?include_text=1). Die Abschnitte 1 und 4-7 sind insbesondere für Serverimplementierer interessant. Abschnitt 10 behandelt Sicherheit, und Sie sollten diesen unbedingt lesen, bevor Sie Ihren Server veröffentlichen.

Ein WebSocket-Server wird hier auf sehr niedriger Ebene erklärt. WebSocket-Server sind oft separate und spezialisierte Server (aus Gründen der Lastverteilung oder anderen praktischen Gründen), sodass Sie häufig einen [Reverse Proxy](https://en.wikipedia.org/wiki/Reverse_proxy) (wie einen regulären HTTP-Server) verwenden, um WebSocket-Handshakes zu erkennen, sie vorzuverarbeiten und diese Clients zu einem echten WebSocket-Server zu senden. Dies bedeutet, dass Sie Ihren Servercode nicht mit Cookie- und Authentifizierungshandlern aufblähen müssen (zum Beispiel).

## Der WebSocket-Handshake

Zuerst muss der Server eingehende Socket-Verbindungen mit einem Standard-TCP-Socket überwachen. Je nach Plattform kann dies automatisch für Sie erledigt werden. Angenommen, Ihr Server lauscht auf `example.com`, Port 8000, und Ihr Socket-Server antwortet auf {{HTTPMethod("GET")}}-Anfragen bei `example.com/chat`.

> [!WARNING]
> Der Server kann an jedem von ihr gewählten Port lauschen, aber wenn er einen anderen Port als 80 oder 443 wählt, kann es Probleme mit Firewalls und/oder Proxys geben. Browser erfordern in der Regel eine sichere Verbindung für WebSockets, obwohl sie möglicherweise eine Ausnahme für lokale Geräte bieten.

Der Handshake ist das "Web" in WebSockets. Er ist die Brücke von HTTP zu WebSockets. Im Handshake werden die Details der Verbindung ausgehandelt, und jede Partei kann vor Abschluss zurücktreten, wenn die Bedingungen ungünstig sind. Der Server muss vorsichtig sein, alles zu verstehen, was der Client verlangt, andernfalls können Sicherheitsprobleme auftreten.

> [!NOTE]
> Die request-uri (`/chat` hier) hat in der Spezifikation keine definierte Bedeutung. Deshalb nutzen viele Leute sie, um einen Server mehrere WebSocket-Anwendungen verwalten zu lassen. Zum Beispiel könnte `example.com/chat` eine Multiuser-Chat-App aufrufen, während `/game` auf demselben Server ein Mehrspieler-Spiel aufrufen könnte.

### Client-Handshake-Anfrage

Auch wenn Sie einen Server erstellen, muss ein Client den WebSocket-Handshake-Prozess starten, indem er den Server kontaktiert und eine WebSocket-Verbindung anfordert. Sie müssen also wissen, wie Sie die Anfrage des Clients interpretieren. Der **Client** sendet eine ziemlich standardmäßige HTTP-Anfrage mit Headern, die so aussieht (die HTTP-Version **muss** 1.1 oder höher sein, und die Methode **muss** `GET` sein):

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Der Client kann hier Erweiterungen und/oder Subprotokolle anfordern; siehe [Verschiedenes](#verschiedenes) für Details. Außerdem könnten dort übliche Header wie {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Referer")}}, {{HTTPHeader("Cookie")}} oder Authentifizierungs-Header vorhanden sein. Machen Sie damit, was Sie wollen; sie betreffen nicht direkt den WebSocket. Es ist auch sicher, sie zu ignorieren. In vielen gängigen Setups hat sich bereits ein Reverse Proxy darum gekümmert.

> [!NOTE]
> Alle **Browser** senden einen [`Origin`-Header](/de/docs/Web/HTTP/CORS#origin). Sie können diesen Header aus Sicherheitsgründen verwenden (Überprüfung auf gleiche Herkunft, automatische Zulassung oder Ablehnung usw.) und einen [403 Forbidden](/de/docs/Web/HTTP/Status/403) senden, wenn Ihnen nicht gefällt, was Sie sehen. Dies ist wirksam gegen [Cross Site WebSocket Hijacking (CSWH)](https://cwe.mitre.org/data/definitions/1385.html). Beachten Sie jedoch, dass nicht-browserbasierte Agenten einen gefälschten `Origin` senden können. Die meisten Anwendungen lehnen Anfragen ohne diesen Header ab.

Wenn ein Header nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine {{HTTPStatus("400")}} ("Bad Request")-Antwort senden und die Verbindung sofort schließen. Wie üblich, kann er auch den Grund für das Scheitern des Handshakes im HTTP-Response-Body angeben, aber die Nachricht wird möglicherweise nie angezeigt (Browser zeigen sie nicht). Wenn der Server diese Version von WebSockets nicht versteht, sollte er einen {{HTTPHeader("Sec-WebSocket-Version")}}-Header zurücksenden, der die Version(en) enthält, die er versteht. Im obigen Beispiel gibt er Version 13 des WebSocket-Protokolls an.

Der interessanteste Header hier ist {{HTTPHeader("Sec-WebSocket-Key")}}. Schauen wir uns den als nächstes an.

> **Note:** [Reguläre HTTP-Statuscodes](/de/docs/Web/HTTP/Status) können nur vor dem Handshake verwendet werden. Nachdem der Handshake erfolgreich ist, müssen Sie ein anderes Set von Codes verwenden (definiert in Abschnitt 7.4 der Spezifikation).

### Server-Handshake-Antwort

Wenn der **Server** die Handshake-Anfrage erhält, sollte er eine spezielle Antwort zurücksenden, die anzeigt, dass das Protokoll von HTTP zu WebSocket wechseln wird. Dieser Header sieht ungefähr wie folgt aus (denken Sie daran, dass jede Headerzeile mit `\r\n` endet und setzen Sie ein zusätzliches `\r\n` am Ende der letzten ein, um das Ende des Headers anzuzeigen):

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Darüber hinaus kann der Server hier Entscheidungen zu Erweiterungs-/Subprotokollanforderungen treffen; siehe [Verschiedenes](#verschiedenes) für Details. Der `Sec-WebSocket-Accept`-Header ist wichtig, da der Server ihn aus dem {{HTTPHeader("Sec-WebSocket-Key")}} ableiten muss, den der Client ihm geschickt hat. Um ihn zu bekommen, concatenieren Sie den `Sec-WebSocket-Key` des Clients mit der Zeichenkette "`258EAFA5-E914-47DA-95CA-C5AB0DC85B11`" (das ist eine "[magic string](https://en.wikipedia.org/wiki/Magic_string)"), nehmen Sie den [SHA-1-Hash](https://en.wikipedia.org/wiki/SHA-1) des Ergebnisses und geben Sie die [Base64](https://en.wikipedia.org/wiki/Base64)-Codierung dieses Hashes zurück.

> [!NOTE]
> Dieser scheinbar überkomplizierte Prozess existiert, damit es dem Client klar ist, ob der Server WebSockets unterstützt. Das ist wichtig, weil Sicherheitsprobleme auftreten könnten, wenn der Server eine WebSockets-Verbindung akzeptiert, die Daten jedoch als HTTP-Anfrage interpretiert.

Wenn der Key also "`dGhlIHNhbXBsZSBub25jZQ==`" war, ist der Wert des `Sec-WebSocket-Accept`-Headers "`s3pPLMBiTxaQ9kYGzzhZRbK+xOo=`". Sobald der Server diese Header gesendet hat, ist der Handshake abgeschlossen und Sie können mit dem Datenaustausch beginnen!

> [!NOTE]
> Der Server kann andere Header wie {{HTTPHeader("Set-Cookie")}} senden oder nach Authentifizierung oder Umleitungen über andere Statuscodes fragen, bevor er den Antwort-Handshake sendet.

### Verfolgung von Clients

Dies steht nicht in direktem Zusammenhang mit dem WebSocket-Protokoll, ist aber erwähnenswert: Ihr Server muss die Sockets der Clients im Auge behalten, damit Sie nicht immer wieder mit Clients handshaken müssen, die den Handshake bereits abgeschlossen haben. Die gleiche Client-IP-Adresse kann versuchen, sich mehrmals zu verbinden. Der Server kann ihnen jedoch den Zugriff verweigern, wenn sie zu viele Verbindungen versuchen, um sich vor [Denial-of-Service-Angriffen](https://en.wikipedia.org/wiki/Denial_of_service) zu schützen.

Zum Beispiel könnten Sie eine Tabelle mit Benutzernamen oder ID-Nummern zusammen mit dem entsprechenden {{domxref("WebSocket")}} und anderen Daten, die Sie mit dieser Verbindung assoziieren müssen, führen.

## Austausch von Datenframes

Sowohl der Client als auch der Server können zu jeder Zeit eine Nachricht senden – das ist die Magie von WebSockets. Das Extrahieren von Informationen aus diesen sogenannten "Frames" von Daten ist jedoch kein so magisches Erlebnis. Obwohl alle Frames demselben spezifischen Format folgen, werden Daten, die vom Client zum Server gehen, mit [XOR-Verschlüsselung](https://en.wikipedia.org/wiki/XOR_cipher) (mit einem 32-Bit-Schlüssel) maskiert. Abschnitt 5 der Spezifikation beschreibt dies im Detail.

### Format

Jeder Datenframe (vom Client zum Server oder umgekehrt) folgt diesem Format:

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

Das MASK-Bit sagt, ob die Nachricht kodiert ist. Nachrichten vom Client müssen maskiert sein, daher muss Ihr Server erwarten, dass dies 1 ist. (Tatsächlich besagt [Abschnitt 5.1 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.1), dass Ihr Server die Verbindung zu einem Client trennen muss, wenn dieser Client eine unverschlüsselte Nachricht sendet.) Wenn Sie einen Frame an den Client zurücksenden, maskieren Sie ihn nicht und setzen Sie nicht das Maskenbit. Wir erklären das Maskieren später. _Hinweis: Sie müssen Nachrichten auch dann maskieren, wenn Sie einen sicheren Socket verwenden._ RSV1-3 können ignoriert werden, sie sind für Erweiterungen gedacht.

Das Opcode-Feld definiert, wie die Payload-Daten interpretiert werden: `0x0` für Fortsetzung, `0x1` für Text (der immer in UTF-8 kodiert ist), `0x2` für binär und andere sogenannte "Kontrollcodes", die später diskutiert werden. In dieser Version von WebSockets haben `0x3` bis `0x7` und `0xB` bis `0xF` keine Bedeutung.

Das FIN-Bit gibt an, ob dies die letzte Nachricht in einer Reihe ist. Wenn es 0 ist, lauscht der Server auf weitere Teile der Nachricht; sonst sollte der Server die Nachricht als geliefert betrachten. Mehr dazu später.

### Dekodierung der Payload-Länge

Um die Payload-Daten zu lesen, müssen Sie wissen, wann Sie aufhören sollen zu lesen. Deshalb ist es wichtig, die Payload-Länge zu kennen. Leider ist dies etwas kompliziert. Um sie zu lesen, befolgen Sie diese Schritte:

1. Lesen Sie die Bits 9-15 (einschließlich) und interpretieren Sie sie als Ganzzahl ohne Vorzeichen. Wenn es 125 oder weniger ist, dann ist das die Länge; Sie sind **fertig**. Wenn es 126 ist, gehen Sie zu Schritt 2. Wenn es 127 ist, gehen Sie zu Schritt 3.
2. Lesen Sie die nächsten 16 Bits und interpretieren Sie sie als Ganzzahl ohne Vorzeichen. Sie sind **fertig**.
3. Lesen Sie die nächsten 64 Bits und interpretieren Sie sie als Ganzzahl ohne Vorzeichen. (Das höchstwertige Bit _muss_ 0 sein.) Sie sind **fertig**.

### Lesen und Entmaskieren der Daten

Wenn das MASK-Bit gesetzt war (und das sollte es für Nachrichten vom Client zum Server sein), lesen Sie die nächsten 4 Oktette (32 Bits); dies ist der Maskierungsschlüssel. Sobald die Payload-Länge und der Maskierungsschlüssel dekodiert wurden, können Sie diese Anzahl Bytes aus dem Socket lesen. Nennen wir die Daten `ENCODED` und den Schlüssel `MASK`. Um `DECODED` zu erhalten, durchlaufen Sie die Oktette (Bytes, alias Zeichen für Textdaten) von `ENCODED` und XORen Sie das Oktett mit dem (i mod 4)-ten Oktett von `MASK`. In Pseudocode (der zufälligerweise gültiges JavaScript ist):

```js
const MASK = [1, 2, 3, 4]; // 4-Byte-Maske
const ENCODED = [105, 103, 111, 104, 110]; // kodierter String "hello"

// Erstellen Sie das Byte-Array der dekodierten Nutzlast
const DECODED = Uint8Array.from(ENCODED, (elt, i) => elt ^ MASK[i % 4]); // XOR auf die Maske durchführen
```

Jetzt können Sie herausfinden, was **DECODED** bedeutet, je nach Ihrer Anwendung.

### Nachrichtenfragmentierung

Die FIN- und Opcode-Felder arbeiten zusammen, um eine Nachricht in separate Frames aufzuteilen. Dies wird Nachrichtenfragmentierung genannt. Die Fragmentierung ist nur bei OpCodes von `0x0` bis `0x2` verfügbar.

Erinnern Sie sich, dass der Opcode angibt, wofür ein Frame vorgesehen ist. Wenn es `0x1` ist, ist die Nutzlast Text. Wenn es `0x2` ist, ist die Nutzlast Binärdaten. Wenn es jedoch `0x0` ist, handelt es sich bei dem Frame um einen Fortsetzungsframe; dies bedeutet, dass der Server die Payload des Frames an den letzten Frame anhängen soll, den er von diesem Client erhalten hat. Hier ist eine grobe Skizze, in der ein Server auf einen Client reagiert, der Textnachrichten sendet. Die erste Nachricht wird in einem einzigen Frame gesendet, während die zweite Nachricht über drei Frames verteilt wird. FIN- und Opcode-Details werden nur für den Client angezeigt:

```plain
Client: FIN=1, opcode=0x1, msg="hello"
Server: (verarbeitet die vollständige Nachricht sofort) Hi.
Client: FIN=0, opcode=0x1, msg="and a"
Server: (Wartet, neue Nachricht mit Text beginnt)
Client: FIN=0, opcode=0x0, msg="happy new"
Server: (Wartet, Payload wird an vorhergehende Nachricht angehängt)
Client: FIN=1, opcode=0x0, msg="year!"
Server: (verarbeitet die vollständige Nachricht) Frohes neues Jahr Ihnen auch!
```

Beachten Sie, dass der erste Frame eine gesamte Nachricht enthält (hat `FIN=1` und `opcode!=0x0`), sodass der Server diese nach Belieben verarbeiten oder beantworten kann. Die zweite vom Client gesendete Nachricht hat eine Textnutzlast (`opcode=0x1`), aber die gesamte Nachricht ist noch nicht angekommen (`FIN=0`). Alle verbleibenden Teile dieser Nachricht werden mit Fortsetzungsframes (`opcode=0x0`) gesendet, und der letzte Frame der Nachricht wird durch `FIN=1` markiert. [Abschnitt 5.4 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.4) beschreibt die Nachrichtenfragmentierung.

## Pings und Pongs: Das Herzschlag von WebSockets

Zu jedem Zeitpunkt nach dem Handshake können sowohl der Client als auch der Server einen Ping an die andere Partei senden. Wenn der Ping empfangen wird, muss der Empfänger so schnell wie möglich einen Pong zurücksenden. Sie können dies verwenden, um sicherzustellen, dass der Client noch verbunden ist, zum Beispiel.

Ein Ping oder Pong ist nur ein regulärer Frame, aber es ist ein **Kontrollframe**. Pings haben einen Opcode von `0x9`, und Pongs haben einen Opcode von `0xA`. Wenn Sie einen Ping erhalten, senden Sie einen Pong mit denselben Payload-Daten wie der Ping zurück (für Pings und Pongs beträgt die maximale Nutzlastlänge 125). Sie könnten auch einen Pong erhalten, ohne jemals einen Ping gesendet zu haben; ignorieren Sie dies, wenn es passiert.

> [!NOTE]
> Wenn Sie mehr als einen Ping erhalten haben, bevor Sie die Möglichkeit haben, einen Pong zu senden, senden Sie nur einen Pong.

## Schließen der Verbindung

Um eine Verbindung zu schließen, kann entweder der Client oder der Server einen Kontrollframe mit Daten senden, der eine bestimmte Kontrollsequenz enthält, um den Schließungshandshake einzuleiten (detailliert in [Abschnitt 5.5.1](https://datatracker.ietf.org/doc/html/rfc6455#section-5.5.1)). Nach Erhalt eines solchen Frames sendet der andere Teilnehmer einen Close-Frame als Antwort. Der erste Teilnehmer schließt dann die Verbindung. Alle weiteren Daten, die nach dem Schließen der Verbindung empfangen werden, werden dann verworfen.

## Verschiedenes

> [!NOTE]
> WebSocket-Codes, Erweiterungen, Subprotokolle usw. werden im [IANA WebSocket Protocol Registry](https://www.iana.org/assignments/websocket/websocket.xml) registriert.

WebSocket-Erweiterungen und Subprotokolle werden über Header während [des Handshakes](#der_websocket-handshake) ausgehandelt. Manchmal sind Erweiterungen und Subprotokolle sehr ähnlich, aber es gibt einen klaren Unterschied. Erweiterungen steuern den WebSocket-_Frame_ und _modifizieren_ die Nutzlast, während Subprotokolle die WebSocket-_Nutzlast_ strukturieren und _niemals etwas modifizieren_. Erweiterungen sind optional und generalisiert (wie Kompression); Subprotokolle sind obligatorisch und lokalisiert (wie solche für Chat und für MMORPG-Spiele).

### Erweiterungen

Stellen Sie sich eine Erweiterung wie das Komprimieren einer Datei vor, bevor Sie sie jemandem per E-Mail senden. Was auch immer Sie tun, Sie senden dieselben Daten in verschiedenen Formen. Der Empfänger wird schließlich in der Lage sein, die gleichen Daten wie Ihre lokale Kopie zu erhalten, aber sie werden anders gesendet. Das macht eine Erweiterung. WebSockets definiert ein Protokoll und eine einfache Methode, Daten zu senden, aber eine Erweiterung wie die Kompression könnte es ermöglichen, dieselben Daten in einem kürzeren Format zu senden.

> [!NOTE]
> Erweiterungen werden in den Abschnitten 5.8, 9, 11.3.2 und 11.4 der Spezifikation erklärt.

### Subprotokolle

Denken Sie an ein Subprotokoll wie an ein benutzerdefiniertes [XML-Schema](https://en.wikipedia.org/wiki/XML_schema) oder eine [Dokumenttyp-Deklaration](https://en.wikipedia.org/wiki/Document_Type_Definition). Sie verwenden immer noch XML und seine Syntax, aber Sie sind zusätzlich durch eine Struktur eingeschränkt, auf die Sie sich geeinigt haben. WebSocket-Subprotokolle sind genau so. Sie führen nichts Neues ein, sie etablieren nur eine Struktur. Wie ein Dokumenttyp oder Schema müssen sich beide Parteien über das Subprotokoll einigen; im Gegensatz zu einem Dokumenttyp oder Schema wird das Subprotokoll auf dem Server implementiert und kann nicht extern vom Client referenziert werden.

> [!NOTE]
> Subprotokolle werden in den Abschnitten 1.9, 4.2, 11.3.4 und 11.5 der Spezifikation erklärt.

Ein Client muss ein spezifisches Subprotokoll anfordern. Um dies zu tun, wird er _als Teil des ursprünglichen Handshakes_ etwas wie folgt senden:

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

Jetzt muss der Server eines der Protokolle auswählen, die der Client vorgeschlagen hat und die er unterstützt. Wenn es mehr als eines gibt, senden Sie das erste, das der Client gesendet hat. Angenommen, unser Server kann sowohl `soap` als auch `wamp` verwenden. Dann sendet er im Antwort-Handshake:

```http
Sec-WebSocket-Protocol: soap
```

> [!WARNING]
> Der Server kann nicht mehr als einen `Sec-Websocket-Protocol`-Header senden.
> Wenn der Server kein Subprotokoll verwenden möchte, **_sollte er keinen `Sec-WebSocket-Protocol`-Header senden_**. Einen leeren Header zu senden ist falsch. Der Client kann die Verbindung schließen, wenn er nicht das Subprotokoll bekommt, das er haben möchte.

Wenn Sie möchten, dass Ihr Server bestimmte Subprotokolle befolgt, benötigen Sie natürlich zusätzlichen Code auf dem Server. Angenommen, wir verwenden ein Subprotokoll `json`. In diesem Subprotokoll werden alle Daten als [JSON](https://en.wikipedia.org/wiki/JSON) übermittelt. Wenn der Client dieses Protokoll anfordert und der Server es verwenden möchte, muss der Server einen JSON-Parser haben. Praktisch wird dies Teil einer Bibliothek sein, aber der Server muss die Daten entsprechend verwalten.

> [!NOTE]
> Um Namenskonflikte zu vermeiden, wird empfohlen, den Subprotokollnamen Teil einer Domain-Zeichenkette zu machen. Wenn Sie eine benutzerdefinierte Chat-App erstellen, die ein eigenes Format verwendet, das exklusiv für Example Inc. ist, könnten Sie dies verwenden: `Sec-WebSocket-Protocol: chat.example.com`. Beachten Sie, dass dies nicht erforderlich ist, es ist nur eine optionale Konvention und Sie können jede gewünschte Zeichenkette verwenden.

## Verwandt

- [Schreiben von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Tutorial: Websocket-Server in C#](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Tutorial: Websocket-Server in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
