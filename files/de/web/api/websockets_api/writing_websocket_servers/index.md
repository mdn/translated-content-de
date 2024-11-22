---
title: Schreiben von WebSocket-Servern
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{DefaultAPISidebar("WebSockets API")}}

Ein WebSocket-Server ist nichts anderes als eine Anwendung, die auf einem beliebigen Port eines TCP-Servers lauscht und einem spezifischen Protokoll folgt. Die Erstellung eines benutzerdefinierten Servers kann überwältigend erscheinen, wenn Sie es noch nie zuvor gemacht haben. Es kann jedoch recht einfach sein, einen grundlegenden WebSocket-Server auf der Plattform Ihrer Wahl zu implementieren.

Ein WebSocket-Server kann in jeder serverseitigen Programmiersprache geschrieben werden, die [Berkeley sockets](https://en.wikipedia.org/wiki/Berkeley_sockets) unterstützt, z. B. C(++), Python, {{Glossary("PHP", "PHP")}} oder [serverseitiges JavaScript](/de/docs/Learn/Server-side/Node_server_without_framework). Dies ist kein Tutorial in einer bestimmten Sprache, sondern dient als Leitfaden, um das Schreiben Ihres eigenen Servers zu erleichtern.

Dieser Artikel geht davon aus, dass Sie bereits mit der Funktionsweise von {{Glossary("HTTP", "HTTP")}} vertraut sind und über ein moderates Programmierniveau verfügen. Je nach Sprachunterstützung kann Wissen über TCP-Sockets erforderlich sein. Der Umfang dieses Leitfadens besteht darin, das Mindestwissen zu präsentieren, das Sie benötigen, um einen WebSocket-Server zu schreiben.

> [!NOTE]
> Lesen Sie die neueste offizielle WebSockets-Spezifikation, [RFC 6455](https://datatracker.ietf.org/doc/rfc6455/?include_text=1). Die Abschnitte 1 und 4-7 sind besonders interessant für Server-Implementierer. Abschnitt 10 behandelt Sicherheit und Sie sollten ihn definitiv durchlesen, bevor Sie Ihren Server aussetzen.

Ein WebSocket-Server wird hier auf einer sehr niedrigen Ebene erklärt. WebSocket-Server sind oft separate und spezialisierte Server (aus Gründen der Lastverteilung oder anderen praktischen Gründen), daher verwenden Sie häufig einen [Reverse-Proxy](https://en.wikipedia.org/wiki/Reverse_proxy) (wie einen regulären HTTP-Server), um WebSocket-Handshakes zu erkennen, vorzubereiten und die betreffenden Clients zu einem echten WebSocket-Server zu senden. Dies bedeutet, dass Sie Ihren Servercode nicht mit Cookie- und Authentifizierungs-Handlern aufblähen müssen (zum Beispiel).

## Der WebSocket-Handshake

Zuerst muss der Server mithilfe eines Standard-TCP-Sockets auf eingehende Socket-Verbindungen lauschen. Je nach Ihrer Plattform kann dies automatisch für Sie erledigt werden. Nehmen wir zum Beispiel an, Ihr Server lauscht auf `example.com`, Port 8000, und Ihr Socket-Server antwortet auf {{HTTPMethod("GET")}}-Anfragen bei `example.com/chat`.

> [!WARNING]
> Der Server kann auf jedem gewählten Port lauschen, aber wenn er einen anderen Port als 80 oder 443 wählt, kann dies Probleme mit Firewalls und/oder Proxys verursachen. Browser erfordern generell eine sichere Verbindung für WebSockets, obwohl sie möglicherweise eine Ausnahme für lokale Geräte bieten.

Der Handshake ist das "Web" in WebSockets. Es ist die Brücke von HTTP zu WebSockets. Im Handshake werden die Verbindungsdetails ausgehandelt, und jede Partei kann vor dem Abschluss zurücktreten, wenn die Bedingungen ungünstig sind. Der Server muss darauf achten, alles zu verstehen, was der Client verlangt, da sonst Sicherheitsprobleme auftreten können.

> [!NOTE]
> Die `request-uri` (`/chat` hier) hat in der Spezifikation keine festgelegte Bedeutung. Viele verwenden sie daher, um einem Server die Verwaltung mehrerer WebSocket-Anwendungen zu ermöglichen. Zum Beispiel könnte `example.com/chat` eine Multi-User-Chat-App aktivieren, während `/game` auf demselben Server ein Multiplayer-Spiel aktivieren könnte.

### Client-Handschlaganforderung

Auch wenn Sie einen Server erstellen, muss ein Client den WebSocket-Handshake-Prozess durch Kontaktaufnahme mit dem Server und Anforderung einer WebSocket-Verbindung starten. Sie müssen also wissen, wie Sie die Anfrage des Clients interpretieren. Der **Client** sendet eine ziemlich standardmäßige HTTP-Anfrage mit Headern, die in etwa so aussieht (die HTTP-Version **muss** 1.1 oder höher sein, und die Methode **muss** `GET` sein):

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Der Client kann hier Erweiterungen und/oder Subprotokolle beantragen; siehe [Verschiedenes](#verschiedenes) für Details. Auch übliche Header wie {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Referer")}}, {{HTTPHeader("Cookie")}} oder Authentifizierungs-Header könnten ebenfalls vorhanden sein. Machen Sie damit, was Sie wollen; sie beziehen sich nicht direkt auf den WebSocket. Es ist auch sicher, sie zu ignorieren. In vielen üblichen Setups hat ein Reverse-Proxy sich bereits mit ihnen befasst.

> [!NOTE]
> Alle **Browser** senden einen [`Origin` Header](/de/docs/Web/HTTP/CORS#origin). Sie können diesen Header für die Sicherheit verwenden (Überprüfung auf gleichen Ursprung, automatisches Zulassen oder Ablehnen usw.) und einen [403 Forbidden](/de/docs/Web/HTTP/Status/403) senden, wenn Ihnen nicht gefällt, was Sie sehen. Dies ist wirksam gegen [Cross Site WebSocket Hijacking (CSWH)](https://cwe.mitre.org/data/definitions/1385.html). Seien Sie jedoch gewarnt, dass Nicht-Browser-Agenten einen gefälschten `Origin` senden können. Die meisten Anwendungen lehnen Anfragen ohne diesen Header ab.

Wenn ein Header nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine {{HTTPStatus("400")}} ("Bad Request")-Antwort senden und den Socket sofort schließen. Wie üblich kann er auch den Grund für das Fehlschlagen des Handshakes im HTTP-Antwortkörper angeben, aber die Nachricht wird möglicherweise nie angezeigt (Browser zeigen sie nicht an). Wenn der Server diese Version von WebSockets nicht versteht, sollte er einen {{HTTPHeader("Sec-WebSocket-Version")}}-Header zurücksenden, der die Version(en) enthält, die er versteht. Im obigen Beispiel wird Version 13 des WebSocket-Protokolls angegeben.

Der interessanteste Header hier ist {{HTTPHeader("Sec-WebSocket-Key")}}. Schauen wir uns den als nächstes an.

> **Hinweis:** [Reguläre HTTP-Statuscodes](/de/docs/Web/HTTP/Status) können nur vor dem Handshake verwendet werden. Nachdem der Handshake erfolgreich war, müssen Sie einen anderen Satz von Codes verwenden (definiert in Abschnitt 7.4 der Spezifikation).

### Server-Handshakantwort

Wenn der **Server** die Handshake-Anforderung empfängt, sollte er eine spezielle Antwort zurücksenden, die anzeigt, dass sich das Protokoll von HTTP auf WebSocket ändert. Dieser Header sieht in etwa wie folgt aus (denken Sie daran, dass jede Headerzeile mit `\r\n` endet und setzen Sie ein zusätzliches `\r\n` nach der letzten Zeile, um das Ende des Headers anzuzeigen):

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Darüber hinaus kann der Server hier über Erweiterungs-/Subprotokollanforderungen entscheiden; siehe [Verschiedenes](#verschiedenes) für Details. Der `Sec-WebSocket-Accept`-Header ist wichtig, da der Server ihn aus dem vom Client gesendeten {{HTTPHeader("Sec-WebSocket-Key")}} ableiten muss. Um ihn zu erhalten, fügen Sie den `Sec-WebSocket-Key` des Clients und die Zeichenfolge `"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"` zusammen (es ist ein "[magic string](https://en.wikipedia.org/wiki/Magic_string)"), nehmen Sie den [SHA-1 Hash](https://en.wikipedia.org/wiki/SHA-1) des Ergebnisses und geben Sie die [base64](https://en.wikipedia.org/wiki/Base64)-Codierung dieses Hashes zurück.

> [!NOTE]
> Dieser scheinbar überkomplizierte Prozess existiert, um es dem Client offensichtlich zu machen, ob der Server WebSockets unterstützt. Dies ist wichtig, da Sicherheitsprobleme auftreten könnten, wenn der Server eine WebSockets-Verbindung akzeptiert, aber die Daten als HTTP-Anfrage interpretiert.

Wenn der Schlüssel also `"dGhlIHNhbXBsZSBub25jZQ=="` war, ist der Wert des `Sec-WebSocket-Accept`-Headers `"s3pPLMBiTxaQ9kYGzzhZRbK+xOo="`. Sobald der Server diese Header sendet, ist der Handshake abgeschlossen und Sie können anfangen, Daten auszutauschen!

> [!NOTE]
> Der Server kann andere Header wie {{HTTPHeader("Set-Cookie")}} senden oder um Authentifizierung oder Umleitungen über andere Statuscodes bitten, bevor die Antwort auf den Handshake gesendet wird.

### Verfolgung von Clients

Dies bezieht sich nicht direkt auf das WebSocket-Protokoll, ist aber erwähnenswert: Ihr Server muss die Sockets der Clients verfolgen, damit Sie nicht immer wieder mit Clients handshaken, die den Handshake bereits abgeschlossen haben. Dieselbe Client-IP-Adresse kann versuchen, sich mehrmals zu verbinden. Der Server kann ihnen jedoch den Zugang verweigern, wenn sie zu viele Verbindungen versuchen, um sich vor [Denial-of-Service-Attacken](https://en.wikipedia.org/wiki/Denial_of_service) zu schützen.

Zum Beispiel könnten Sie eine Tabelle von Benutzernamen oder ID-Nummern zusammen mit dem entsprechenden [`WebSocket`](/de/docs/Web/API/WebSocket) und anderen Daten, die Sie mit dieser Verbindung verknüpfen müssen, führen.

## Austausch von Datenrahmen

Entweder der Client oder der Server kann jederzeit eine Nachricht senden — das ist das Magische an WebSockets. Das Extrahieren von Informationen aus diesen so genannten "Frames" von Daten ist jedoch kein magisches Erlebnis. Obwohl alle Frames demselben spezifischen Format folgen, werden Daten, die vom Client zum Server fließen, mit [XOR-Verschlüsselung](https://en.wikipedia.org/wiki/XOR_cipher) (mit einem 32-Bit-Schlüssel) maskiert. Abschnitt 5 der Spezifikation beschreibt dies im Detail.

### Format

Jeder Datenrahmen (vom Client zum Server oder umgekehrt) folgt diesem Format:

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

Das bedeutet, dass ein Rahmen die folgenden Bytes enthält:

- Erstes Byte:
  - Bit 0: FIN
  - Bit 1: RSV1
  - Bit 2: RSV2
  - Bit 3: RSV3
  - Bits 4-7: OPCODE
- Bytes 2-10: Nutzlastlänge (siehe [Entschlüsselung der Nutzlastlänge](#entschlüsselung_der_nutzlastlänge))
- Wenn Maskierung verwendet wird, enthalten die nächsten 4 Bytes den Maskierungsschlüssel (siehe [Lesen und Entmaskieren der Daten](#lesen_und_entmaskieren_der_daten))
- Alle nachfolgenden Bytes sind Nutzlast

Das MASK-Bit gibt an, ob die Nachricht codiert ist. Nachrichten vom Client müssen maskiert sein, also muss Ihr Server erwarten, dass dies auf 1 steht. (Tatsächlich besagt [Abschnitt 5.1 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.1), dass Ihr Server die Verbindung zu einem Client trennen muss, wenn dieser eine nicht maskierte Nachricht sendet.) Wenn Sie einen Rahmen zurück an den Client senden, maskieren Sie ihn nicht und setzen Sie das Maskenbit nicht. Wir werden die Maskierung später erklären. _Hinweis: Sie müssen Nachrichten maskieren, auch wenn Sie eine sichere Verbindung verwenden._ RSV1-3 können ignoriert werden, sie sind für Erweiterungen.

Das Opcode-Feld definiert, wie die Nutzlastdaten interpretiert werden: `0x0` für Fortsetzung, `0x1` für Text (der immer in UTF-8 kodiert ist), `0x2` für Binärdaten und andere sogenannte "Kontrollcodes", die später besprochen werden. In dieser Version von WebSockets haben `0x3` bis `0x7` und `0xB` bis `0xF` keine Bedeutung.

Das FIN-Bit gibt an, ob dies die letzte Nachricht in einer Serie ist. Wenn es 0 ist, hört der Server weiterhin auf weitere Teile der Nachricht; andernfalls sollte der Server die Nachricht als zugestellt betrachten. Mehr dazu später.

### Entschlüsselung der Nutzlastlänge

Um die Nutzlastdaten zu lesen, müssen Sie wissen, wann Sie mit dem Lesen aufhören müssen. Deshalb ist es wichtig, die Nutzlastlänge zu kennen. Leider ist dies etwas kompliziert. Um sie zu lesen, befolgen Sie diese Schritte:

1. Lesen Sie die Bits 9-15 (einschließlich) und interpretieren Sie sie als eine ganze Zahl ohne Vorzeichen. Wenn es 125 oder weniger ist, dann ist das die Länge; Sie sind **fertig**. Wenn es 126 ist, gehen Sie zu Schritt 2. Wenn es 127 ist, gehen Sie zu Schritt 3.
2. Lesen Sie die nächsten 16 Bits und interpretieren Sie sie als eine ganze Zahl ohne Vorzeichen. Sie sind **fertig**.
3. Lesen Sie die nächsten 64 Bits und interpretieren Sie sie als eine ganze Zahl ohne Vorzeichen. (Das bedeutendste Bit _muss_ 0 sein.) Sie sind **fertig**.

### Lesen und Entmaskieren der Daten

Wenn das MASK-Bit gesetzt war (und das sollte es für Nachrichten vom Client zum Server sein), lesen Sie die nächsten 4 Oktetten (32 Bits); dies ist der Maskierungsschlüssel. Sobald die Nutzlastlänge und der Maskierungsschlüssel entschlüsselt sind, können Sie diese Anzahl von Bytes aus dem Socket lesen. Nennen wir die Daten `ENCODED` und den Schlüssel `MASK`. Um `DECODED` zu erhalten, durchlaufen Sie die Oktetten (Bytes, auch als Zeichen für Textdaten bezeichnet) von `ENCODED` und XOR-en Sie das Oktett mit dem (i modulo 4)ten Oktett von `MASK`. In Pseudocode (der zufällig gültiges JavaScript ist):

```js
const MASK = [1, 2, 3, 4]; // 4-byte mask
const ENCODED = [105, 103, 111, 104, 110]; // encoded string "hello"

// Create the byte Array of decoded payload
const DECODED = Uint8Array.from(ENCODED, (elt, i) => elt ^ MASK[i % 4]); // Perform an XOR on the mask
```

Jetzt können Sie herausfinden, was **DECODED** bedeutet, abhängig von Ihrer Anwendung.

### Nachrichtenfragmentierung

Die FIN- und Opcode-Felder arbeiten zusammen, um eine Nachricht aufgeteilt in separate Frames zu senden. Dies wird Nachrichtenfragmentierung genannt. Fragmentierung ist nur bei den Opcodes `0x0` bis `0x2` verfügbar.

Erinnern Sie sich daran, dass das Opcode angibt, wofür ein Rahmen gedacht ist. Wenn es `0x1` ist, ist die Nutzlast ein Text. Wenn es `0x2` ist, ist die Nutzlast Binärdaten. Wenn es jedoch `0x0` ist, ist der Rahmen ein Fortsetzungsrahmen; das bedeutet, dass der Server die Nutzlast des Rahmens an den letzten Rahmen anhängen soll, den er von diesem Client erhalten hat. Hier ist eine grobe Skizze, in der ein Server reagiert, wenn ein Client Textnachrichten sendet. Die erste Nachricht wird in einem einzigen Frame gesendet, während die zweite Nachricht über drei Frames gesendet wird. FIN- und Opcode-Details werden nur für den Client angezeigt:

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

Beachten Sie, dass der erste Frame eine ganze Nachricht enthält (`FIN=1` und `opcode!=0x0`), sodass der Server sie nach Belieben verarbeiten oder darauf reagieren kann. Der zweite vom Client gesendete Frame hat eine Textnutzlast (`opcode=0x1`), aber die gesamte Nachricht ist noch nicht eingetroffen (`FIN=0`). Alle verbleibenden Teile dieser Nachricht werden mit Fortsetzungsframes (`opcode=0x0`) gesendet, und der letzte Frame der Nachricht wird durch `FIN=1` markiert. [Abschnitt 5.4 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.4) beschreibt die Nachrichtenfragmentierung.

## Pings und Pongs: Der Herzschlag von WebSockets

Zu jedem Zeitpunkt nach dem Handshake kann entweder der Client oder der Server einen Ping an die andere Partei senden. Wenn der Ping empfangen wird, muss der Empfänger so schnell wie möglich ein Pong zurücksenden. Sie können dies beispielsweise verwenden, um sicherzustellen, dass der Client noch verbunden ist.

Ein Ping oder Pong ist nur ein regulärer Frame, jedoch ein **Kontrollframe**. Pings haben einen Opcode von `0x9`, und Pongs haben einen Opcode von `0xA`. Wenn Sie einen Ping erhalten, senden Sie ein Pong mit denselben Nutzlastdaten wie der Ping zurück (für Pings und Pongs beträgt die maximale Nutzlastlänge 125). Sie könnten auch ein Pong erhalten, ohne jemals einen Ping zu senden; ignorieren Sie dies, wenn es passiert.

> [!NOTE]
> Wenn Sie mehr als einen Ping erhalten haben, bevor Sie die Möglichkeit haben, ein Pong zu senden, senden Sie nur ein Pong.

## Schließen der Verbindung

Um eine Verbindung zu schließen, kann entweder der Client oder der Server einen Kontrollframe mit Daten senden, der eine bestimmte Steuersequenz enthält, um den Schließungshandshake zu beginnen (detailliert in [Abschnitt 5.5.1](https://datatracker.ietf.org/doc/html/rfc6455#section-5.5.1)). Beim Empfang eines solchen Frames sendet der andere Teilnehmer einen Schließungs-Frame als Antwort. Der erste Teilnehmer schließt dann die Verbindung. Alle weiteren Daten, die nach dem Schließen der Verbindung empfangen werden, werden dann verworfen.

## Verschiedenes

> [!NOTE]
> WebSocket-Codes, -Erweiterungen, -Subprotokolle usw. sind im [IANA WebSocket Protocol Registry](https://www.iana.org/assignments/websocket/websocket.xml) registriert.

WebSocket-Erweiterungen und Subprotokolle werden über Header während [des Handshakes](#der_websocket-handshake) ausgehandelt. Manchmal sind Erweiterungen und Subprotokolle sehr ähnlich, aber es gibt einen klaren Unterschied. Erweiterungen steuern den WebSocket-_Frame_ und _modifizieren_ die Nutzlast, während Subprotokolle die WebSocket-_Nutzlast_ strukturieren und _niemals_ etwas modifizieren. Erweiterungen sind optional und generalisiert (wie Komprimierung); Subprotokolle sind obligatorisch und lokalisiert (wie für Chats und MMORPG-Spiele).

### Erweiterungen

Betrachten Sie eine Erweiterung als das Komprimieren einer Datei, bevor Sie sie an jemanden per E-Mail senden. Was auch immer Sie tun, Sie senden die _gleichen_ Daten in unterschiedlichen Formen. Der Empfänger wird schließlich in der Lage sein, dieselben Daten wie Ihre lokale Kopie zu erhalten, aber sie wird unterschiedlich gesendet. Das ist, was eine Erweiterung tut. WebSockets definiert ein Protokoll und eine einfache Möglichkeit, Daten zu senden, aber eine Erweiterung wie Kompression könnte das Senden derselben Daten in einem kürzeren Format ermöglichen.

> [!NOTE]
> Erweiterungen werden in den Abschnitten 5.8, 9, 11.3.2 und 11.4 der Spezifikation erklärt.

### Subprotokolle

Betrachten Sie ein Subprotokoll als ein benutzerdefiniertes [XML-Schema](https://en.wikipedia.org/wiki/XML_schema) oder [DOCTYPE-Deklaration](https://en.wikipedia.org/wiki/Document_Type_Definition). Sie verwenden immer noch XML und dessen Syntax, aber Sie sind zusätzlich durch eine Struktur eingeschränkt, auf die Sie sich geeinigt haben. WebSocket-Subprotokolle sind genau so. Sie führen nichts Besonderes ein, sie etablieren nur Struktur. Wie ein DOCTYPE oder Schema müssen sich beide Parteien auf das Subprotokoll einigen; im Gegensatz zu einem DOCTYPE oder Schema wird das Subprotokoll auf dem Server implementiert und kann vom Client nicht extern referenziert werden.

> [!NOTE]
> Subprotokolle werden in den Abschnitten 1.9, 4.2, 11.3.4 und 11.5 der Spezifikation erklärt.

Ein Client muss nach einem bestimmten Subprotokoll fragen. Dazu sendet er etwas wie dies _als Teil des ursprünglichen Handshakes_:

```http
GET /chat HTTP/1.1
...
Sec-WebSocket-Protocol: soap, wamp
```

oder gleichwertig:

```http
...
Sec-WebSocket-Protocol: soap
Sec-WebSocket-Protocol: wamp
```

Jetzt muss der Server eines der vom Client vorgeschlagenen Protokolle auswählen, das er unterstützt. Wenn es mehr als eines gibt, senden Sie das erste, das der Client gesendet hat. Stellen wir uns vor, unser Server kann sowohl `soap` als auch `wamp` verwenden. Dann sendet er im Antwort-Handshake:

```http
Sec-WebSocket-Protocol: soap
```

> [!WARNING]
> Der Server kann nicht mehr als einen `Sec-WebSocket-Protocol`-Header senden.
> Wenn der Server kein Subprotokoll verwenden möchte, **_sollte er keinen `Sec-WebSocket-Protocol`-Header senden_**. Einen leeren Header zu senden ist inkorrekt. Der Client kann die Verbindung schließen, wenn er nicht das gewünschte Subprotokoll erhält.

Wenn Sie möchten, dass Ihr Server bestimmte Subprotokolle befolgt, benötigen Sie natürlich zusätzlichen Code auf dem Server. Stellen wir uns vor, wir verwenden ein Subprotokoll `json`. In diesem Subprotokoll werden alle Daten als [JSON](https://en.wikipedia.org/wiki/JSON) übermittelt. Wenn der Client dieses Protokoll beantragt und der Server es verwenden möchte, muss der Server einen JSON-Parser verwenden. Praktisch wird dies Teil einer Bibliothek sein, aber der Server muss die Daten weitergeben.

> [!NOTE]
> Um Namenskonflikte zu vermeiden, wird empfohlen, den Namen Ihres Subprotokolls Teil einer Domain-Zeichenfolge zu machen. Wenn Sie eine benutzerdefinierte Chat-App erstellen, die ein proprietäres Format verwendet, das nur für Example Inc. exklusiv ist, könnten Sie dies verwenden: `Sec-WebSocket-Protocol: chat.example.com`. Beachten Sie, dass dies nicht erforderlich ist, es ist nur eine optionale Konvention, und Sie können jede beliebige Zeichenfolge verwenden.

## Verwandtes

- [Schreiben von WebSocket-Clientanwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Anleitung: WebSocket-Server in C#](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Anleitung: WebSocket-Server in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
