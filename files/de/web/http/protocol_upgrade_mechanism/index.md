---
title: Mechanismus zum Protokoll-Upgrade
slug: Web/HTTP/Protocol_upgrade_mechanism
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

Das [HTTP/1.1-Protokoll](/de/docs/Web/HTTP) bietet einen speziellen Mechanismus, der verwendet werden kann, um eine bereits bestehende Verbindung mithilfe des {{HTTPHeader("Upgrade")}}-Headerfelds auf ein anderes Protokoll zu aktualisieren.

Dieser Mechanismus ist optional; er kann nicht verwendet werden, um auf einem Protokollwechsel zu bestehen. Implementierungen können sich entscheiden, von einem Upgrade keinen Gebrauch zu machen, selbst wenn sie das neue Protokoll unterstützen, und in der Praxis wird dieser Mechanismus hauptsächlich verwendet, um eine WebSockets-Verbindung zu initiieren.

Beachten Sie auch, dass HTTP/2 die Verwendung dieses Mechanismus ausdrücklich verbietet; er ist spezifisch für HTTP/1.1.

## Upgrade von HTTP/1.1-Verbindungen

Das {{HTTPHeader("Upgrade")}}-Headerfeld wird von Clients verwendet, um den Server einzuladen, zu einem der aufgelisteten Protokolle zu wechseln, in absteigender Prioritätsreihenfolge.

Da `Upgrade` ein Hop-by-Hop-Header ist, muss er auch im {{HTTPHeader("Connection")}}-Headerfeld aufgeführt sein. Das bedeutet, dass eine typische Anfrage, die ein Upgrade enthält, folgendermaßen aussieht:

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

Andere Header können abhängig von dem angeforderten Protokoll erforderlich sein; zum Beispiel erlauben [WebSocket](/de/docs/Web/API/WebSocket)-Upgrades zusätzliche Header, um Details über die WebSocket-Verbindung zu konfigurieren sowie einen gewissen Grad an Sicherheit beim Öffnen der Verbindung zu bieten. Siehe [Upgrade zu einer WebSocket-Verbindung](#upgrade_zu_einer_websocket-verbindung) für weitere Details.

Wenn der Server die Verbindung aktualisieren möchte, sendet er den {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus mit einem Upgrade-Header zurück, der die (die) Protokoll(e) angibt, zu denen gewechselt wird. Wenn er die Verbindung nicht (oder nicht auf) das neue Protokoll aktualisieren kann, ignoriert er den `Upgrade`-Header und sendet eine normale Antwort zurück (zum Beispiel ein {{HTTPStatus(200, "200 OK")}}).

Direkt nach dem Senden des `101`-Statuscodes kann der Server das neue Protokoll sprechen und alle zusätzlichen spezifischen Handshakes des neuen Protokolls durchführen, falls erforderlich. Tatsächlich wird die Verbindung zu einer Zwei-Wege-Leitung, sobald die aktualisierte Antwort abgeschlossen ist, und die Anfrage, die das Upgrade initiiert hat, kann über das neue Protokoll abgeschlossen werden.

## Häufige Verwendungen dieses Mechanismus

Hier betrachten wir die häufigsten Anwendungsfälle für den {{HTTPHeader("Upgrade")}}-Header.

### Upgrade zu einer WebSocket-Verbindung

Der bei weitem häufigste Anwendungsfall für das Upgrade einer HTTP-Verbindung ist die Verwendung von WebSockets, die immer durch ein Upgrade einer HTTP- oder HTTPS-Verbindung implementiert werden. Beachten Sie, dass, wenn Sie eine neue Verbindung mit der [WebSocket API](/de/docs/Web/API/WebSocket) oder einer Bibliothek, die WebSockets verwendet, öffnen, die meisten oder alle Prozesse für Sie durchgeführt werden. Zum Beispiel ist das Öffnen einer WebSocket-Verbindung so einfach wie:

```js
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

Der {{domxref("WebSocket.WebSocket", "WebSocket()")}}-Konstruktor erledigt die gesamte Arbeit zur Erstellung einer initialen HTTP/1.1-Verbindung und der Handhabung des Handshakes und des Upgrade-Prozesses für Sie.

> [!NOTE]
> Sie können auch das `"wss://"`-URL-Schema verwenden, um eine sichere WebSocket-Verbindung zu öffnen.

Falls Sie eine WebSocket-Verbindung von Grund auf neu erstellen müssen, müssen Sie den Handshake-Prozess selbst durchführen. Nach der Erstellung der initialen HTTP/1.1-Sitzung müssen Sie das Upgrade anfordern, indem Sie zu einer Standardanfrage die Header {{HTTPHeader("Upgrade")}} und {{HTTPHeader("Connection")}} hinzufügen, wie folgt:

```http
Connection: Upgrade
Upgrade: websocket
```

### WebSocket-spezifische Header

Die folgenden Header sind am WebSocket-Upgrade-Prozess beteiligt. Abgesehen von den {{HTTPHeader("Upgrade")}}- und {{HTTPHeader("Connection")}}-Headern sind die restlichen in der Regel optional oder werden für Sie vom Browser und Server gehandhabt, wenn diese miteinander kommunizieren.

#### {{HTTPHeader("Sec-WebSocket-Extensions")}}

Gibt an, welche WebSocket-Erweiterungen auf Protokollebene der Server verwenden soll. Es ist erlaubt, mehr als einen `Sec-WebSocket-Extension`-Header in einer Anfrage zu verwenden; das Ergebnis ist dasselbe, als wenn Sie alle aufgelisteten Erweiterungen in einen solchen Header einfügen.

```http
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : Eine durch Kommas getrennte Liste der anzufordernden (oder zu unterstützenden) Erweiterungen. Diese sollten aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden. Erweiterungen, die Parameter haben, werden durch Semikolon-Abgrenzung spezifiziert.

Zum Beispiel:

```http
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

#### {{HTTPHeader("Sec-WebSocket-Key")}}

Bietet dem Server Informationen, die benötigt werden, um zu bestätigen, dass der Client berechtigt ist, ein WebSocket-Upgrade anzufordern. Dieser Header kann verwendet werden, wenn unsichere (HTTP) Clients ein Upgrade wünschen, um gegen Missbrauch einen gewissen Schutz zu bieten. Der Wert des Schlüssels wird mit einem im WebSocket-Spezifikations beschriebenen Algorithmus berechnet, sodass dies _keine Sicherheit bietet_. Stattdessen hilft es zu verhindern, dass Nicht-WebSocket-Clients versehentlich oder durch Fehlgebrauch eine WebSocket-Verbindung anfordern. Im Wesentlichen bestätigt dieser Schlüssel dann: „Ja, ich möchte wirklich eine WebSocket-Verbindung öffnen.“

Dieser Header wird automatisch von Clients hinzugefügt, die ihn verwenden möchten; er kann nicht mit den Methoden {{domxref("Window/fetch", "fetch()")}} oder {{domxref("XMLHttpRequest.setRequestHeader()")}} hinzugefügt werden.

```http
Sec-WebSocket-Key: key
```

- `key`
  - : Der Schlüssel für diese Anfrage zum Upgrade. Der Client fügt ihn hinzu, wenn er dies wünscht, und der Server wird in der Antwort einen eigenen Schlüssel enthalten, den der Client validiert, bevor die Upgrade-Antwort an Sie übermittelt wird.

Der {{HTTPHeader("Sec-WebSocket-Accept")}}-Header der Antwort des Servers enthält einen Wert, der basierend auf dem angegebenen `key` berechnet wurde.

#### {{HTTPHeader("Sec-WebSocket-Protocol")}}

Der `Sec-WebSocket-Protocol`-Header spezifiziert ein oder mehrere WebSocket-Protokolle, die Sie verwenden möchten, in der Reihenfolge der Präferenz. Das erste, das vom Server unterstützt wird, wird ausgewählt und in einem im Header der Antwort enthaltenen `Sec-WebSocket-Protocol`-Header zurückgegeben. Sie können dies auch mehrmals im Header verwenden; das Ergebnis ist dasselbe, als wenn Sie eine durch Kommas getrennte Liste von Subprotokollbezeichnern in einem einzigen Header verwendeten.

```http
Sec-WebSocket-Protocol: subprotocols
```

- `subprotocols`
  - : Eine durch Kommas getrennte Liste von Subprotokollnamen in der Reihenfolge der Präferenz. Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder ein benutzerdefinierter Name sein, den sowohl der Client als auch der Server verstehen.

#### {{HTTPHeader("Sec-WebSocket-Version")}}

##### Anfrage-Header

Gibt die WebSocket-Protokollversion an, die der Client verwenden möchte, damit der Server bestätigen kann, ob diese Version auf seiner Seite unterstützt wird.

```http
Sec-WebSocket-Version: version
```

- `version`
  - : Die WebSocket-Protokollversion, die der Client bei der Kommunikation mit dem Server verwenden möchte. Diese Zahl sollte die jüngstmögliche in der [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) aufgeführte Version sein. Die jüngste endgültige Version des WebSocket-Protokolls ist Version 13.

##### Antwort-Header

Wenn der Server nicht mit der angegebenen Version des WebSocket-Protokolls kommunizieren kann, antwortet er mit einem Fehler (wie 426 Upgrade Required), der in seinen Headern einen `Sec-WebSocket-Version`-Header mit einer durch Kommas getrennten Liste der unterstützten Protokollversionen enthält. Wenn der Server die angeforderte Protokollversion unterstützt, wird in der Antwort kein `Sec-WebSocket-Version`-Header enthalten sein.

```http
Sec-WebSocket-Version: supportedVersions
```

- `supportedVersions`
  - : Eine durch Kommas getrennte Liste der WebSocket-Protokollversionen, die der Server unterstützt.

### Nur-Antwort-Header

Die Antwort des Servers kann diese enthalten.

#### {{HTTPHeader("Sec-WebSocket-Accept")}}

In der Antwortnachricht vom Server während des Eröffnungs-Handshake-Prozesses enthalten, wenn der Server bereit ist, eine WebSocket-Verbindung einzuleiten. Er wird nicht öfter als einmal in den Antwort-Headern erscheinen.

```http
Sec-WebSocket-Accept: hash
```

- `hash`
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}}-Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen, die Zeichenkette "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" an ihn angehängt und der [SHA-1](https://en.wikipedia.org/wiki/SHA-1)-Hash dieser angehängten Zeichenkette erzeugt wird, was zu einem 20-Byte-Wert führt. Dieser Wert wird dann [base64](/de/docs/Glossary/Base64) codiert, um den Wert dieser Eigenschaft zu erhalten.

## Referenzen

- [WebSocket API](/de/docs/Web/API/WebSocket)
- [HTTP](/de/docs/Web/HTTP)
- Spezifikationen und RFCs:

  - {{RFC(7230)}}
  - {{RFC(6455)}}
  - {{RFC(7540)}}
