---
title: Schreiben von WebSocket-Servern
slug: Web/API/WebSockets_API/Writing_WebSocket_servers
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{DefaultAPISidebar("WebSockets API")}}

Ein WebSocket-Server ist nichts anderes als eine Anwendung, die auf einem beliebigen Port eines TCP-Servers horcht und einem bestimmten Protokoll folgt. Einen eigenen Server zu erstellen, kann überwältigend erscheinen, wenn Sie es noch nie zuvor gemacht haben. Es kann jedoch recht einfach sein, einen grundlegenden WebSocket-Server auf Ihrer bevorzugten Plattform zu implementieren.

Ein WebSocket-Server kann in jeder serverseitigen Programmiersprache geschrieben werden, die in der Lage ist, [Berkeley-Sockets](https://en.wikipedia.org/wiki/Berkeley_sockets) zu verwenden, wie C(++), Python, {{Glossary("PHP", "PHP")}} oder [serverseitiges JavaScript](/de/docs/Learn_web_development/Extensions/Server-side/Node_server_without_framework). Dies ist kein Tutorial in einer bestimmten Sprache, sondern dient als Leitfaden, um Ihnen das Schreiben Ihres eigenen Servers zu erleichtern.

Dieser Artikel setzt voraus, dass Sie bereits wissen, wie {{Glossary("HTTP", "HTTP")}} funktioniert, und dass Sie ein mittleres Niveau an Programmiererfahrung haben. Abhängig von der Unterstützung der Sprache kann Wissen über TCP-Sockets erforderlich sein. Der Umfang dieses Leitfadens besteht darin, das Mindestwissen zu präsentieren, das Sie zum Schreiben eines WebSocket-Servers benötigen.

> [!NOTE]
> Lesen Sie die neueste offizielle WebSockets-Spezifikation, [RFC 6455](https://datatracker.ietf.org/doc/rfc6455/?include_text=1). Die Abschnitte 1 und 4-7 sind insbesondere für Server-Implementierer interessant. Abschnitt 10 behandelt Sicherheitsfragen, und Sie sollten ihn unbedingt durchlesen, bevor Sie Ihren Server freigeben.

Ein WebSocket-Server wird hier auf sehr niedriger Ebene erklärt. WebSocket-Server sind oft separate und spezialisierte Server (aus Gründen des Lastausgleichs oder aus anderen praktischen Gründen), sodass Sie oft einen [Reverse-Proxy](https://en.wikipedia.org/wiki/Reverse_proxy) (wie einen regulären HTTP-Server) verwenden werden, um WebSocket-Handshakes zu erkennen, sie vorzuverarbeiten und diese Clients an einen echten WebSocket-Server zu senden. Das bedeutet, dass Sie Ihren Servercode nicht mit Cookie- und Authentifizierungs-Handlern aufblähen müssen (zum Beispiel).

## Der WebSocket-Handshake

Zuerst muss der Server mit einem Standard-TCP-Socket auf eingehende Socket-Verbindungen warten. Abhängig von Ihrer Plattform kann dies automatisch für Sie erledigt werden. Zum Beispiel nehmen wir an, dass Ihr Server auf `example.com` Port 8000 hört und Ihr Socket-Server auf {{HTTPMethod("GET")}}-Anfragen an `example.com/chat` reagiert.

> [!WARNING]
> Der Server kann auf jedem gewünschten Port horchen, aber wenn er einen anderen Port als 80 oder 443 wählt, kann es Probleme mit Firewalls und/oder Proxies geben. Browser erfordern im Allgemeinen eine sichere Verbindung für WebSockets, obwohl sie möglicherweise eine Ausnahme für lokale Geräte anbieten.

Der Handshake ist das "Web" in WebSockets. Es ist die Brücke von HTTP zu WebSockets. Im Handshake werden die Details der Verbindung ausgehandelt, und jede Partei kann sich zurückziehen, bevor die Verbindung vollständig ist, wenn die Bedingungen ungünstig sind. Der Server muss darauf achten, alles zu verstehen, was der Client anfragt, da sonst Sicherheitsprobleme auftreten können.

> [!NOTE]
> Die Anforderungs-URI (`/chat` hier) hat in der Spezifikation keine definierte Bedeutung. Daher verwenden viele Menschen sie, um einen Server mit mehreren WebSocket-Anwendungen zu betreiben. Zum Beispiel könnte `example.com/chat` eine Mehrbenutzer-Chat-App aufrufen, während `/game` auf demselben Server ein Multiplayer-Spiel aufrufen könnte.

### Client-Handshake-Anfrage

Auch wenn Sie einen Server erstellen, muss ein Client den WebSocket-Handshake-Prozess starten, indem er den Server kontaktiert und eine WebSocket-Verbindung anfordert. Daher müssen Sie wissen, wie Sie die Clientanfrage interpretieren. Der **Client** sendet eine ziemlich standardmäßige HTTP-Anfrage mit Headern, die folgendermaßen aussieht (die HTTP-Version **muss** 1.1 oder höher sein, und die Methode **muss** `GET` sein):

```http
GET /chat HTTP/1.1
Host: example.com:8000
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key: dGhlIHNhbXBsZSBub25jZQ==
Sec-WebSocket-Version: 13
```

Der Client kann hier Erweiterungen und/oder Subprotokolle anfordern; siehe [Verschiedenes](#verschiedenes) für Details. Außerdem können gängige Header wie {{HTTPHeader("User-Agent")}}, {{HTTPHeader("Referer")}}, {{HTTPHeader("Cookie")}} oder Authentifizierungs-Header ebenfalls vorhanden sein. Machen Sie mit diesen, was Sie wollen; sie betreffen nicht direkt das WebSocket. Es ist auch sicher, sie zu ignorieren. In vielen gängigen Setups hat sich bereits ein Reverse-Proxy um sie gekümmert.

> [!NOTE]
> Alle **Browser** senden einen [`Origin`-Header](/de/docs/Web/HTTP/Guides/CORS#origin). Sie können diesen Header für Sicherheitszwecke verwenden (Überprüfung auf gleiche Herkunft, automatische Zulassung oder Ablehnung usw.) und einen [403 Forbidden](/de/docs/Web/HTTP/Reference/Status/403) senden, wenn Ihnen nicht gefällt, was Sie sehen. Dies ist wirksam gegen [Cross Site WebSocket Hijacking (CSWH)](https://cwe.mitre.org/data/definitions/1385.html). Beachten Sie jedoch, dass nicht-browserbasierte Agents einen gefälschten `Origin` senden können. Die meisten Anwendungen lehnen Anfragen ohne diesen Header ab.

Wenn ein Header nicht verstanden wird oder einen falschen Wert hat, sollte der Server eine {{HTTPStatus("400")}} ("Bad Request") Antwort senden und die Verbindung sofort schließen. Wie üblich kann auch der Grund für das Scheitern des Handshakes im HTTP-Antwortkörper gegeben werden, aber die Nachricht wird möglicherweise nie angezeigt (Browser zeigen sie nicht an). Wenn der Server diese Version von WebSockets nicht versteht, sollte er einen {{HTTPHeader("Sec-WebSocket-Version")}} Header zurücksenden, der die Version(en) enthält, die er versteht. Im obigen Beispiel weist er auf Version 13 des WebSocket-Protokolls hin.

Der interessanteste Header hier ist {{HTTPHeader("Sec-WebSocket-Key")}}. Schauen wir uns das als nächstes an.

> [!NOTE] > [Reguläre HTTP-Statuscodes](/de/docs/Web/HTTP/Reference/Status) können nur vor dem Handshake verwendet werden. Nachdem der Handshake erfolgreich ist, müssen Sie einen anderen Satz von Codes verwenden (definiert in Abschnitt 7.4 der Spezifikation).

### Server-Handshake-Antwort

Wenn der **Server** die Handshake-Anfrage erhält, sollte er eine spezielle Antwort zurücksenden, die anzeigt, dass das Protokoll von HTTP auf WebSocket geändert wird. Dieser Header sieht ungefähr wie folgt aus (denken Sie daran, dass jede Header-Zeile mit `\r\n` endet und ein zusätzliches `\r\n` nach der letzten Zeile gesetzt wird, um das Ende des Headers anzuzeigen):

```http
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
```

Darüber hinaus kann der Server hier über Erweiterungs-/Subprotokollanforderungen entscheiden; siehe [Verschiedenes](#verschiedenes) für Details. Der `Sec-WebSocket-Accept` Header ist wichtig, da der Server ihn aus dem {{HTTPHeader("Sec-WebSocket-Key")}} ableiten muss, das der Client ihm gesendet hat. Um ihn zu erhalten, fügen Sie den `Sec-WebSocket-Key` des Clients und die Zeichenkette `"258EAFA5-E914-47DA-95CA-C5AB0DC85B11"` zusammen (es ist eine "[magische Zeichenkette](https://en.wikipedia.org/wiki/Magic_string)"), nehmen Sie den [SHA-1 Hash](https://en.wikipedia.org/wiki/SHA-1) des Ergebnisses und geben die [base64](https://en.wikipedia.org/wiki/Base64) Codierung dieses Hashs zurück.

> [!NOTE]
> Dieser scheinbar überkomplizierte Prozess existiert, damit es für den Client offensichtlich ist, ob der Server WebSockets unterstützt. Dies ist wichtig, da Sicherheitsprobleme auftreten können, wenn der Server eine WebSockets-Verbindung akzeptiert, die Daten jedoch als HTTP-Anfrage interpretiert.

Wenn der Key also `"dGhlIHNhbXBsZSBub25jZQ=="` war, ist der Wert des `Sec-WebSocket-Accept` Headers `"s3pPLMBiTxaQ9kYGzzhZRbK+xOo="`. Sobald der Server diese Header gesendet hat, ist der Handshake abgeschlossen und Sie können beginnen, Daten auszutauschen!

> [!NOTE]
> Der Server kann andere Header wie {{HTTPHeader("Set-Cookie")}} senden oder nach Authentifizierung oder Weiterleitungen über andere Statuscodes fragen, bevor er den Antwort-Handshake sendet.

### Verfolgen von Clients

Dies bezieht sich nicht direkt auf das WebSocket-Protokoll, aber es ist erwähnenswert: Ihr Server muss die Sockets der Clients verfolgen, damit Sie nicht erneut mit Clients, die den Handshake bereits abgeschlossen haben, handshaken. Dieselbe Client-IP-Adresse kann mehrfach versuchen, sich zu verbinden. Der Server kann sie jedoch ablehnen, wenn sie zu viele Verbindungen versuchen, um sich vor [Denial-of-Service-Angriffen](https://en.wikipedia.org/wiki/Denial_of_service) zu schützen.

Sie könnten zum Beispiel eine Tabelle mit Benutzernamen oder ID-Nummern zusammen mit der entsprechenden [`WebSocket`](/de/docs/Web/API/WebSocket) und anderen Daten, die Sie mit dieser Verbindung in Verbindung bringen müssen, führen.

## Austausch von Datenrahmen

Der Client oder der Server kann jederzeit eine Nachricht senden – das ist die Magie der WebSockets. Das Extrahieren von Informationen aus diesen sogenannten "Frames" von Daten ist jedoch keine so magische Erfahrung. Obwohl alle Frames demselben spezifischen Format folgen, sind Daten, die vom Client zum Server gehen, mit [XOR-Verschlüsselung](https://en.wikipedia.org/wiki/XOR_cipher) (mit einem 32-Bit-Schlüssel) maskiert. Abschnitt 5 der Spezifikation beschreibt dies im Detail.

### Format

Jeder Datenrahmen (vom Client zum Server oder umgekehrt) folgt diesem Format:

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
  - Bit 0 FIN: Gibt an, ob dies die letzte Nachricht in einer Serie ist. Wenn es 0 ist, lauscht der Server weiter auf weitere Teile der Nachricht; andernfalls sollte der Server die Nachricht als geliefert betrachten. Mehr dazu später.
  - Bit 1–3 RSV1, RSV2, RSV3: können ignoriert werden, sie sind für Erweiterungen.
  - Bits 4–7 OPCODE: Definiert, wie die Nutzdaten interpretiert werden sollen: `0x0` für Fortsetzung, `0x1` für Text (der immer in UTF-8 kodiert ist), `0x2` für Binär und andere sogenannte "Kontrollcodes", die später besprochen werden. In dieser Version von WebSockets haben `0x3` bis `0x7` und `0xB` bis `0xF` keine Bedeutung.
- Bit 8 MASK: Gibt an, ob die Nachricht codiert ist. Nachrichten, die vom Client kommen, müssen maskiert sein, sodass Ihr Server erwarten muss, dass dies 1 ist. (Tatsächlich sagt [Abschnitt 5.1 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.1), dass Ihr Server die Verbindung zu einem Client trennen muss, wenn dieser Client eine unmaskierte Nachricht sendet.) Vom Server zum Client gesendete Nachrichten sind nicht maskiert und haben dieses Bit auf 0 gesetzt. Wir erklären das Maskieren später im Abschnitt [Lesen und Entmaskieren der Daten](#lesen_und_entmaskieren_der_daten). _Hinweis: Sie müssen Nachrichten maskieren, auch wenn Sie eine sichere Verbindung verwenden._
- Bits 9–15: Nutzdatenlänge. Kann auch die nächsten 2 Bytes oder 8 Bytes enthalten; siehe [Decoding Payload Length](#decoding_payload_length).
- Wenn Maskierung verwendet wird (immer wahr für Nachrichten vom Client zum Server), enthalten die nächsten 4 Bytes den Maskierungsschlüssel; siehe [Lesen und Entmaskieren der Daten](#lesen_und_entmaskieren_der_daten).
- Alle nachfolgenden Bytes sind Nutzdaten.

### Decoding Payload Length

Um die Nutzdaten zu lesen, müssen Sie wissen, wann Sie aufhören müssen zu lesen. Deshalb ist es wichtig, die Nutzdatenlänge zu kennen. Leider ist dies etwas kompliziert. Um es zu lesen, befolgen Sie die folgenden Schritte:

1. Lesen Sie die Bits 9–15 (einschließlich) und interpretieren Sie dies als eine ohne Vorzeichen versehene Ganzzahl. Wenn es 125 oder weniger ist, dann ist das die Länge; Sie sind **fertig**. Wenn es 126 ist, gehen Sie zu Schritt 2. Wenn es 127 ist, gehen Sie zu Schritt 3.
2. Lesen Sie die nächsten 16 Bits und interpretieren Sie diese als eine ohne Vorzeichen versehene Ganzzahl. Sie sind **fertig**.
3. Lesen Sie die nächsten 64 Bits und interpretieren Sie diese als eine ohne Vorzeichen versehene Ganzzahl. (Das höchstwertige Bit **muss** 0 sein.) Sie sind **fertig**.

### Lesen und Entmaskieren der Daten

Wenn das MASK-Bit gesetzt war (und es sollte dies sein, für Nachrichten vom Client zum Server), lesen Sie die nächsten 4 Oktette (32 Bits); dies ist der Maskierungsschlüssel. Sobald die Nutzdatenlänge und der Maskierungsschlüssel dekodiert sind, können Sie diese Anzahl von Bytes von der Verbindung lesen. Nennen wir die Daten `ENCODED`, und den Schlüssel `MASK`. Um `DECODED` zu erhalten, durchlaufen Sie die Oktette von `ENCODED` und XORieren Sie das Oktett mit dem (i modulo 4)ten Oktett von `MASK`. Verwenden Sie JavaScript als Beispiel:

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

Nun können Sie herausfinden, was `decoded` bedeutet, abhängig von Ihrer Anwendung. Beispielsweise können Sie es als UTF-8 [dekodieren](/de/docs/Web/API/TextDecoder), wenn es sich um eine Textnachricht handelt.

```js
console.log(new TextDecoder().decode(decoded)); // "hello"
```

Maskierung ist eine Sicherheitsmaßnahme, um zu verhindern, dass böswillige Parteien die Daten vorhersagen können, die an den Server gesendet werden. Der Client generiert einen kryptographisch zufälligen Maskierungsschlüssel für jede Nachricht.

### Nachrichtenfragmentierung

Die FIN- und Opcode-Felder arbeiten zusammen, um eine Nachricht aufgeteilt in separate Frames zu senden. Dies wird Nachrichtenfragmentierung genannt. Fragmentierung ist nur bei den Opcodes `0x0` bis `0x2` verfügbar.

Erinnern Sie sich daran, dass der Opcode angibt, was ein Frame bewirken soll. Wenn es `0x1` ist, sind die Nutzdaten Text. Wenn es `0x2` ist, sind die Nutzdaten Binärdaten. Wenn es jedoch `0x0` ist, ist der Frame ein Fortsetzungs-Frame; dies bedeutet, dass der Server die Nutzdaten des Frames mit den Nutzdaten des letzten vom Client empfangenen Frames verketten soll. Hier ist eine grobe Skizze, in der ein Server reagiert, wenn ein Client Textnachrichten sendet. Die erste Nachricht wird in einem einzigen Frame gesendet, während die zweite Nachricht über drei Frames gesendet wird. FIN- und Opcode-Details werden nur für den Client angezeigt:

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

Beachten Sie, dass der erste Frame eine gesamte Nachricht enthält (hat `FIN=1` und `opcode!=0x0`), sodass der Server nach Bedarf reagieren oder antworten kann. Der zweite vom Client gesendete Frame hat eine Textnutzlast (`opcode=0x1`), aber die gesamte Nachricht ist noch nicht angekommen (`FIN=0`). Alle weiteren Teile dieser Nachricht werden mit Fortsetzungs-Frames (`opcode=0x0`) gesendet, und der letzte Frame der Nachricht wird durch `FIN=1` gekennzeichnet. [Abschnitt 5.4 der Spezifikation](https://datatracker.ietf.org/doc/html/rfc6455#section-5.4) beschreibt die Nachrichtenfragmentierung.

## Pings und Pongs: Der Herzschlag von WebSockets

Zu jedem beliebigen Zeitpunkt nach dem Handshake kann entweder der Client oder der Server wählen, einen Ping an die andere Partei zu senden. Wenn der Ping empfangen wird, muss der Empfänger so schnell wie möglich einen Pong zurücksenden. Sie können dies verwenden, um sicherzustellen, dass der Client noch verbunden ist, zum Beispiel.

Ein Ping oder Pong ist einfach ein regulärer Frame, aber es handelt sich um einen **Kontrollframe**. Pings haben einen Opcode von `0x9`, und Pongs haben einen Opcode von `0xA`. Wenn Sie einen Ping erhalten, senden Sie einen Pong mit denselben Nutzdaten zurück wie der Ping (bei Pings und Pongs beträgt die maximale Nutzdatenlänge 125). Möglicherweise erhalten Sie auch einen Pong, ohne jemals einen Ping gesendet zu haben; ignorieren Sie dies, wenn es passiert.

> [!NOTE]
> Wenn Sie mehr als einen Ping erhalten haben, bevor Sie die Chance haben, einen Pong zu senden, senden Sie nur einen Pong.

## Die Verbindung schließen

Um eine Verbindung zu schließen, kann entweder der Client oder der Server einen Kontrollframe mit Daten senden, die eine spezifizierte Kontrollsequenz enthalten, um den Schließhandshake zu starten (detailliert in [Abschnitt 5.5.1](https://datatracker.ietf.org/doc/html/rfc6455#section-5.5.1)). Nach Empfang eines solchen Frames sendet das andere Gegenüber einen Close-Frame als Antwort. Das erste Gegenüber schließt dann die Verbindung. Alle weiteren Daten, die nach dem Schließen der Verbindung empfangen werden, werden dann verworfen.

## Verschiedenes

> [!NOTE]
> WebSocket-Codes, -Erweiterungen, -Subprotokolle usw. werden im [IANA WebSocket Protocol Registry](https://www.iana.org/assignments/websocket/websocket.xml) registriert.

WebSocket-Erweiterungen und -Subprotokolle werden über Header während [des Handshakes](#der_websocket-handshake) ausgehandelt. Manchmal sind Erweiterungen und Subprotokolle sehr ähnlich, aber es gibt einen klaren Unterschied. Erweiterungen steuern den WebSocket-_Frame_ und _verändern_ die Nutzlast, während Subprotokolle die WebSocket-_Nutzlast_ strukturieren und _niemals etwas verändern_. Erweiterungen sind optional und generalisiert (wie Komprimierung); Subprotokolle sind obligatorisch und lokalisiert (wie solche für Chat und für MMORPG-Spiele).

### Erweiterungen

Denken Sie an eine Erweiterung, als würden Sie eine Datei komprimieren, bevor Sie sie jemandem per E-Mail senden. Was auch immer Sie tun, Sie senden dieselben Daten in anderer Form. Der Empfänger wird schließlich in der Lage sein, dieselben Daten wie Ihre lokale Kopie zu erhalten, aber sie werden unterschiedlich gesendet. Genau das macht eine Erweiterung. WebSockets definiert ein Protokoll und eine einfache Möglichkeit, Daten zu senden, aber eine Erweiterung wie die Komprimierung könnte es ermöglichen, dieselben Daten in einem kürzeren Format zu senden.

> [!NOTE]
> Erweiterungen werden in den Abschnitten 5.8, 9, 11.3.2 und 11.4 der Spezifikation erklärt.

### Subprotokolle

Denken Sie an ein Subprotokoll wie an ein benutzerdefiniertes [XML-Schema](https://de.wikipedia.org/wiki/XML-Schema) oder eine [Doctype-Deklaration](https://de.wikipedia.org/wiki/Document_Type_Definition). Sie verwenden weiterhin XML und seine Syntax, sind jedoch zusätzlich durch eine Struktur eingeschränkt, auf die Sie sich geeinigt haben. WebSocket-Subprotokolle sind genau so. Sie führen nichts Besonderes ein, sie schaffen nur Struktur. Wie ein Doctype oder Schema müssen sich beide Parteien auf das Subprotokoll einigen; im Gegensatz zu einem Doctype oder Schema wird das Subprotokoll auf dem Server implementiert und kann nicht extern vom Client referenziert werden.

> [!NOTE]
> Subprotokolle werden in den Abschnitten 1.9, 4.2, 11.3.4 und 11.5 der Spezifikation erklärt.

Ein Client muss ein spezifisches Subprotokoll anfordern. Dazu sendet er etwas wie folgt _als Teil des ursprünglichen Handshakes_:

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

Nun muss der Server eines der Protokolle auswählen, die der Client vorgeschlagen hat und die er unterstützt. Wenn es mehr als eines gibt, senden Sie das erste, das der Client gesendet hat. Stellen Sie sich vor, unser Server kann sowohl `soap` als auch `wamp` verwenden. Dann sendet er im Antwort-Handshake:

```http
Sec-WebSocket-Protocol: soap
```

> [!WARNING]
> Der Server kann nicht mehr als einen `Sec-WebSocket-Protocol` Header senden.
> Wenn der Server kein Subprotokoll verwenden möchte, **sollte er keinen `Sec-WebSocket-Protocol` Header senden**. Das Senden eines leeren Headers ist falsch. Der Client kann die Verbindung schließen, wenn er das gewünschte Subprotokoll nicht erhält.

Wenn Sie möchten, dass Ihr Server bestimmten Subprotokollen folgt, benötigen Sie selbstverständlich zusätzlichen Code auf dem Server. Nehmen wir an, wir verwenden ein Subprotokoll `json`. In diesem Subprotokoll werden alle Daten als [JSON](https://de.wikipedia.org/wiki/JSON) übermittelt. Wenn der Client dieses Protokoll anfordert und der Server es verwenden möchte, muss der Server über einen JSON-Parser verfügen. Praktisch gesehen wird dies Teil einer Bibliothek sein, aber der Server muss die Daten herumreichen.

> [!NOTE]
> Um Namenskonflikte zu vermeiden, wird empfohlen, den Namen Ihres Subprotokolls Teil einer Domänenzeichenfolge zu machen. Wenn Sie eine benutzerdefinierte Chat-App erstellen, die ein proprietäres Format verwendet, das exklusiv für Example Inc. ist, könnten Sie Folgendes verwenden: `Sec-WebSocket-Protocol: chat.example.com`. Beachten Sie, dass dies nicht erforderlich ist, es ist nur eine optionale Konvention, und Sie können jede beliebige Zeichenkette verwenden.

## Verwandte Themen

- [Schreiben von WebSocket-Client-Anwendungen](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
- [Tutorial: WebSocket-Server in C#](/de/docs/Web/API/WebSockets_API/Writing_WebSocket_server)
- [Tutorial: WebSocket-Server in Java](/de/docs/Web/API/WebSockets_API/Writing_a_WebSocket_server_in_Java)
