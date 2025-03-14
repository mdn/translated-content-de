---
title: Mechanismus zur Protokollaktualisierung
slug: Web/HTTP/Guides/Protocol_upgrade_mechanism
l10n:
  sourceCommit: cb8143261f5cd54788285574ab0c427ba3f01a04
---

{{HTTPSidebar}}

Das [HTTP/1.1 Protokoll](/de/docs/Web/HTTP) bietet einen speziellen Mechanismus, der verwendet werden kann, um eine bereits hergestellte Verbindung auf ein anderes Protokoll umzustellen, indem das {{HTTPHeader("Upgrade")}}-Header-Feld verwendet wird.

Dieser Mechanismus ist optional; er kann nicht verwendet werden, um auf eine Protokolländerung zu bestehen. Implementierungen können entscheiden, einen Upgrade nicht zu nutzen, selbst wenn sie das neue Protokoll unterstützen, und in der Praxis wird dieser Mechanismus hauptsächlich genutzt, um eine WebSockets-Verbindung zu starten.

Beachten Sie auch, dass HTTP/2 die Verwendung dieses Mechanismus ausdrücklich verbietet; er ist spezifisch für HTTP/1.1.

## Upgraden von HTTP/1.1-Verbindungen

Das {{HTTPHeader("Upgrade")}}-Header-Feld wird von Clients verwendet, um den Server einzuladen, auf eines der gelisteten Protokolle umzuschalten, in absteigender Prioritätsreihenfolge.

Da `Upgrade` ein Hop-by-Hop-Header ist, muss es auch im {{HTTPHeader("Connection")}}-Header-Feld aufgelistet werden. Das bedeutet, dass eine typische Anfrage, die Upgrade umfasst, in etwa so aussehen würde:

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

Je nach angefordertem Protokoll können weitere Header erforderlich sein; zum Beispiel erlauben [WebSocket](/de/docs/Web/API/WebSocket)-Upgrades zusätzliche Header, um Details über die WebSocket-Verbindung zu konfigurieren sowie um ein gewisses Maß an Sicherheit bei der Öffnung der Verbindung zu bieten. Siehe [Upgraden zu einer WebSocket-Verbindung](#upgraden_zu_einer_websocket-verbindung) für weitere Einzelheiten.

Wenn der Server sich entscheidet, die Verbindung zu upgraden, sendet er einen {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus mit einem Upgrade-Header zurück, der die Protokolle angibt, auf die umgeschaltet wird. Wenn er die Verbindung nicht upgraden kann (oder nicht will), ignoriert er den `Upgrade`-Header und sendet eine normale Antwort zurück (zum Beispiel ein {{HTTPStatus(200, "200 OK")}}).

Unmittelbar nach dem Senden des `101`-Statuscodes kann der Server beginnen, das neue Protokoll zu sprechen, und dabei alle zusätzlichen protokollspezifischen Handshakes durchführen, die erforderlich sind. Effektiv wird die Verbindung zu einem Zwei-Wege-Pipe, sobald die aktualisierte Antwort abgeschlossen ist, und die Anfrage, die das Upgrade initiiert hat, kann über das neue Protokoll abgeschlossen werden.

## Häufige Verwendungen dieses Mechanismus

Hier betrachten wir die häufigsten Anwendungsfälle für den {{HTTPHeader("Upgrade")}}-Header.

### Upgraden zu einer WebSocket-Verbindung

Bei weitem der häufigste Anwendungsfall für das Upgraden einer HTTP-Verbindung ist die Verwendung von WebSockets, die immer durch das Upgraden einer HTTP- oder HTTPS-Verbindung implementiert werden. Beachten Sie, dass, wenn Sie eine neue Verbindung mit der [WebSocket-API](/de/docs/Web/API/WebSocket) öffnen oder eine beliebige Bibliothek verwenden, die WebSockets unterstützt, dies meist oder vollständig für Sie erledigt wird. Zum Beispiel ist das Öffnen einer WebSocket-Verbindung eine einzelne Methode:

```js
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

Der [`WebSocket()`](/de/docs/Web/API/WebSocket/WebSocket)-Konstruktor erledigt die gesamte Arbeit, eine anfängliche HTTP/1.1-Verbindung zu erstellen und dann den Handshake- und Upgrade-Prozess für Sie zu handhaben.

> [!NOTE]
> Sie können auch das URL-Schema `"wss://"` verwenden, um eine sichere WebSocket-Verbindung zu öffnen.

Wenn Sie eine WebSocket-Verbindung von Grund auf erstellen müssen, müssen Sie den Handshake-Prozess selbst handhaben. Nachdem Sie die anfängliche HTTP/1.1-Sitzung erstellt haben, müssen Sie das Upgrade anfordern, indem Sie einem Standardanfrage die {{HTTPHeader("Upgrade")}}- und {{HTTPHeader("Connection")}}-Header hinzufügen, wie folgt:

```http
Connection: Upgrade
Upgrade: websocket
```

### WebSocket-spezifische Header

Die folgenden Header sind im WebSocket-Upgrade-Prozess involviert. Abgesehen von den {{HTTPHeader("Upgrade")}}- und {{HTTPHeader("Connection")}}-Headern sind die restlichen im Allgemeinen optional oder werden vom Browser und Server für Sie gehandhabt, wenn sie miteinander kommunizieren.

#### {{HTTPHeader("Sec-WebSocket-Extensions")}}

Gibt an, dass der Server gebeten wird, eine oder mehrere WebSocket-Erweiterungen auf Protokollebene zu verwenden. Mehr als einen `Sec-WebSocket-Extension`-Header in einer Anfrage zu verwenden, ist erlaubt; das Ergebnis ist dasselbe, als wenn Sie alle aufgeführten Erweiterungen in einem solchen Header enthalten würden.

```http
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : Eine durch Kommas getrennte Liste von Erweiterungen, die angefordert werden sollen (oder deren Unterstützung zugesagt wird). Diese sollten aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden. Erweiterungen, die Parameter verwenden, tun dies mittels Semikolon-Abtrennung.

Beispielsweise:

```http
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

#### {{HTTPHeader("Sec-WebSocket-Key")}}

Stellt dem Server Informationen zur Verfügung, die benötigt werden, um zu bestätigen, dass der Client berechtigt ist, ein Upgrade auf WebSocket zu beantragen. Dieser Header kann verwendet werden, wenn unsichere (HTTP) Clients ein Upgrade wünschen, um einen gewissen Schutz gegen Missbrauch zu bieten. Der Wert des Schlüssels wird unter Verwendung eines im WebSocket-Spezifikation definierten Algorithmus berechnet, so dass dies _keine Sicherheit bietet_. Es hilft vielmehr dabei, zu verhindern, dass Nicht-WebSocket-Clients versehentlich oder durch Missbrauch eine WebSocket-Verbindung anfordern. Im Wesentlichen bestätigt dann dieser Schlüssel, dass "Ja, ich möchte wirklich eine WebSocket-Verbindung eröffnen."

Dieser Header wird automatisch von Clients hinzugefügt, die ihn verwenden möchten; er kann nicht mit den Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

```http
Sec-WebSocket-Key: key
```

- `key`
  - : Der Schlüssel für dieses Upgrade-Anforderung. Der Client fügt diesen hinzu, wenn er es wünscht, und der Server wird in der Antwort einen eigenen Schlüssel enthalten, den der Client validiert, bevor er Ihnen die Upgrade-Antwort liefert.

Der {{HTTPHeader("Sec-WebSocket-Accept")}}-Header der Serverantwort enthält einen Wert, der auf dem angegebenen `key`-Wert berechnet wird.

#### {{HTTPHeader("Sec-WebSocket-Protocol")}}

Der `Sec-WebSocket-Protocol`-Header gibt an, welche WebSocket-Protokolle Sie verwenden möchten, in der Reihenfolge der Präferenz. Das erste, das vom Server unterstützt wird, wird ausgewählt und vom Server in einem `Sec-WebSocket-Protocol`-Header in der Antwort zurückgegeben. Sie können dies auch mehr als einmal im Header verwenden; das Ergebnis ist dasselbe, als wenn Sie eine durch Kommas getrennte Liste von Subprotokoll-IDs in einem einzelnen Header verwendet hätten.

```http
Sec-WebSocket-Protocol: subprotocols
```

- `subprotocols`
  - : Eine durch Kommas getrennte Liste von Subprotokollnamen, in der Reihenfolge der Präferenz. Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt oder eine benutzerdefinierte Bezeichnung sein, die vom Client und Server gemeinsam verstanden wird.

#### {{HTTPHeader("Sec-WebSocket-Version")}}

##### Anfrage-Header

Gibt an, welche WebSocket-Protokollversion der Client verwenden möchte, damit der Server bestätigen kann, ob diese Version unterstützt wird.

```http
Sec-WebSocket-Version: version
```

- `version`
  - : Die WebSocket-Protokollversion, die der Client verwenden möchte, wenn er mit dem Server kommuniziert. Diese Zahl sollte die neueste mögliche Version sein, die im [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) gelistet ist. Die neueste finale Version des WebSocket-Protokolls ist Version 13.

##### Antwort-Header

Wenn der Server nicht mit der angegebenen Version des WebSocket-Protokolls kommunizieren kann, antwortet er mit einem Fehler (wie 426 Upgrade Required), der in seinen Headern ein `Sec-WebSocket-Version`-Header mit einer durch Kommas getrennten Liste der unterstützten Protokollversionen enthält. Wenn der Server die angeforderte Protokollversion unterstützt, wird in der Antwort kein `Sec-WebSocket-Version`-Header enthalten sein.

```http
Sec-WebSocket-Version: supportedVersions
```

- `supportedVersions`
  - : Eine durch Kommas getrennte Liste der WebSocket-Protokollversionen, die vom Server unterstützt werden.

### Nur Antwort-Header

Die Antwort vom Server kann diese enthalten.

#### {{HTTPHeader("Sec-WebSocket-Accept")}}

Wird in der Antwortnachricht vom Server während des Eröffnungs-Handshakes-Prozesses enthalten, wenn der Server bereit ist, eine WebSocket-Verbindung zu initiieren. Es wird nicht mehr als einmal in den Antwortheadern erscheinen.

```http
Sec-WebSocket-Accept: hash
```

- `hash`
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}}-Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem Sie den Wert des Schlüssels nehmen, den String "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" daran anfügen, den [SHA-1](https://en.wikipedia.org/wiki/SHA-1)-Hash dieses angefügten Strings nehmen, was zu einem 20-Byte-Wert führt. Dieser Wert wird dann {{Glossary("Base64", "base64")}} codiert, um den Wert dieser Eigenschaft zu erhalten.

## Spezifikationen

{{specifications}}

## Siehe auch

- [WebSocket API](/de/docs/Web/API/WebSocket)
- [Evolution von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
