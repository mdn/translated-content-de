---
title: Protocol upgrade mechanism
slug: Web/HTTP/Protocol_upgrade_mechanism
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

Das [HTTP/1.1-Protokoll](/de/docs/Web/HTTP) bietet einen speziellen Mechanismus, der genutzt werden kann, um eine bereits etablierte Verbindung auf ein anderes Protokoll umzustellen, indem das {{HTTPHeader("Upgrade")}} Header-Feld verwendet wird.

Dieser Mechanismus ist optional; er kann nicht verwendet werden, um auf einem Protokollwechsel zu bestehen. Implementierungen können sich dafür entscheiden, ein Upgrade nicht zu nutzen, selbst wenn sie das neue Protokoll unterstützen. In der Praxis wird dieser Mechanismus hauptsächlich verwendet, um eine WebSockets-Verbindung zu starten.

Es ist auch zu beachten, dass HTTP/2 die Verwendung dieses Mechanismus ausdrücklich untersagt; er ist spezifisch für HTTP/1.1.

## Upgraden von HTTP/1.1-Verbindungen

Das {{HTTPHeader("Upgrade")}} Header-Feld wird von Clients verwendet, um den Server einzuladen, auf eines der aufgelisteten Protokolle umzuschalten, in absteigender Präferenzreihenfolge.

Da `Upgrade` ein Hop-by-Hop-Header ist, muss es auch im {{HTTPHeader("Connection")}} Header-Feld aufgelistet werden. Dies bedeutet, dass eine typische Anfrage, die ein Upgrade enthält, etwa so aussieht:

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

Abhängig vom angeforderten Protokoll können weitere Header erforderlich sein; zum Beispiel erlauben [WebSocket](/de/docs/Web/API/WebSocket)-Upgrades zusätzliche Header, um Details über die WebSocket-Verbindung zu konfigurieren und um ein gewisses Maß an Sicherheit beim Öffnen der Verbindung zu bieten. Weitere Einzelheiten finden Sie unter [Upgrade zu einer WebSocket-Verbindung](#upgrade_zu_einer_websocket-verbindung).

Wenn der Server entscheidet, die Verbindung zu upgraden, sendet er einen Rückmeldestatus von {{HTTPStatus(101, "101 Switching Protocols")}} mit einem Upgrade-Header zurück, der das/ die Protokoll(e) angibt, zu dem/denen gewechselt wird. Wenn das Upgrade nicht (oder nicht sofort) durchgeführt wird, ignoriert der Server den `Upgrade`-Header und sendet eine normale Antwort zurück (zum Beispiel ein {{HTTPStatus(200, "200 OK")}}).

Direkt nach dem Senden des `101`-Statuscodes kann der Server beginnen, das neue Protokoll zu sprechen und alle weiteren, prokollspezifischen Handshakes durchzuführen. Effektiv wird die Verbindung zu einem Zwei-Wege-Kanal, sobald die aktualisierte Antwort abgeschlossen ist, und die Anfrage, die das Upgrade initiiert hat, kann über das neue Protokoll abgeschlossen werden.

## Häufige Verwendungen für diesen Mechanismus

Hier betrachten wir die häufigsten Anwendungsfälle für den {{HTTPHeader("Upgrade")}} Header.

### Upgrade zu einer WebSocket-Verbindung

Bei weitem der häufigste Anwendungsfall für das Upgrade einer HTTP-Verbindung ist die Verwendung von WebSockets, die immer durch ein Upgrade einer HTTP- oder HTTPS-Verbindung implementiert werden. Beachten Sie, dass, wenn Sie eine neue Verbindung unter Verwendung der [WebSocket-API](/de/docs/Web/API/WebSocket) oder einer beliebigen Bibliothek, die WebSockets implementiert, öffnen, das meiste davon für Sie erledigt wird. Zum Beispiel ist das Öffnen einer WebSocket-Verbindung so einfach wie:

```js
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

Der [`WebSocket()`](/de/docs/Web/API/WebSocket/WebSocket)-Konstruktor erledigt die gesamte Arbeit, eine initiale HTTP/1.1-Verbindung zu erstellen und dann den Handshake- und Upgrade-Prozess für Sie abzuwickeln.

> [!NOTE]
> Sie können auch das `"wss://"` URL-Schema verwenden, um eine sichere WebSocket-Verbindung zu öffnen.

Wenn Sie eine WebSocket-Verbindung von Grund auf erstellen müssen, müssen Sie den Handshaking-Prozess selbst handhaben. Nach dem Erstellen der initialen HTTP/1.1-Sitzung müssen Sie das Upgrade anfordern, indem Sie in einer Standardanfrage die Header {{HTTPHeader("Upgrade")}} und {{HTTPHeader("Connection")}} hinzufügen, wie folgt:

```http
Connection: Upgrade
Upgrade: websocket
```

### WebSocket-spezifische Header

Die folgenden Header sind im WebSocket-Upgrade-Prozess involviert. Abgesehen von den Headern {{HTTPHeader("Upgrade")}} und {{HTTPHeader("Connection")}}, sind die anderen generell optional oder werden von dem Browser und Server automatisch gehandhabt, wenn sie miteinander kommunizieren.

#### {{HTTPHeader("Sec-WebSocket-Extensions")}}

Spezifiziert eine oder mehrere Protokoll-Level WebSocket-Erweiterungen, die der Server verwenden soll. Die Verwendung von mehr als einem `Sec-WebSocket-Extension` Header in einer Anfrage ist erlaubt; das Ergebnis ist dasselbe, als ob Sie alle aufgelisteten Erweiterungen in einem solchen Header enthalten hätten.

```http
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : Eine durch Kommas getrennte Liste von Erweiterungen, die angefordert (oder zu unterstützen vereinbart) werden. Diese sollten aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden. Erweiterungen, die Parameter annehmen, tun dies durch Verwenden von Semikolon-Abgrenzungen.

Beispiel:

```http
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

#### {{HTTPHeader("Sec-WebSocket-Key")}}

Stellt dem Server Informationen zur Verfügung, die erforderlich sind, um zu bestätigen, dass der Client berechtigt ist, ein Upgrade zu WebSocket anzufordern. Dieser Header kann verwendet werden, wenn unsichere (HTTP) Clients ein Upgrade anstreben, um einen gewissen Schutz gegen Missbrauch zu bieten. Der Wert des Schlüssels wird mit einem im WebSocket-Standard definierten Algorithmus berechnet, sodass dies _keine Sicherheit_ bietet. Stattdessen hilft es zu verhindern, dass Nicht-WebSocket-Clients versehentlich oder durch Missbrauch eine WebSocket-Verbindung anfordern. Im Wesentlichen bestätigt dieser Schlüssel dann: „Ja, ich möchte wirklich eine WebSocket-Verbindung öffnen.“

Dieser Header wird automatisch von Clients hinzugefügt, die sich entscheiden, ihn zu verwenden; er kann nicht mit den Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

```http
Sec-WebSocket-Key: key
```

- `key`
  - : Der Schlüssel für diese Upgrade-Anforderung. Der Client fügt dies hinzu, wenn er es wünscht, und der Server wird in der Antwort einen eigenen Schlüssel einschließen, den der Client validieren wird, bevor er die Upgrade-Antwort an Sie liefert.

Der {{HTTPHeader("Sec-WebSocket-Accept")}} Header der Serverantwort wird einen Wert haben, der basierend auf dem angegebenen `key` berechnet wird.

#### {{HTTPHeader("Sec-WebSocket-Protocol")}}

Der `Sec-WebSocket-Protocol` Header gibt ein oder mehrere WebSocket-Protokolle an, die Sie verwenden möchten, in der Reihenfolge der Präferenz. Der erste, der vom Server unterstützt wird, wird ausgewählt und vom Server in einem `Sec-WebSocket-Protocol` Header in der Antwort zurückgesandt. Sie können dies auch mehrmals im Header verwenden; das Ergebnis ist dasselbe wie bei einer durch Kommas getrennten Liste von Subprotokoll-Bezeichnern in einem einzelnen Header.

```http
Sec-WebSocket-Protocol: subprotocols
```

- `subprotocols`
  - : Eine durch Kommas getrennte Liste von Subprotokollnamen, in der Reihenfolge der Präferenz. Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder ein benutzerdefinierter Name sein, der vom Client und Server gemeinsam verstanden wird.

#### {{HTTPHeader("Sec-WebSocket-Version")}}

##### Anfrageheader

Spezifiziert die Version des WebSocket-Protokolls, die der Client verwenden möchte, damit der Server bestätigen kann, ob diese Version auf seiner Seite unterstützt wird.

```http
Sec-WebSocket-Version: version
```

- `version`
  - : Die Version des WebSocket-Protokolls, die der Client verwenden möchte, wenn er mit dem Server kommuniziert. Diese Zahl sollte die aktuellste mögliche Version sein, die im [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) aufgelistet ist. Die neueste finale Version des WebSocket-Protokolls ist Version 13.

##### Antwortheader

Wenn der Server nicht mit der angegebenen Version des WebSocket-Protokolls kommunizieren kann, wird er mit einem Fehler (wie zum Beispiel 426 Upgrade Required) antworten, das in seinen Headers einen `Sec-WebSocket-Version` Header mit einer durch Kommas getrennten Liste der unterstützten Protokollversionen enthält. Wenn der Server die angeforderte Protokollversion unterstützt, wird kein `Sec-WebSocket-Version` Header in der Antwort enthalten.

```http
Sec-WebSocket-Version: supportedVersions
```

- `supportedVersions`
  - : Eine durch Kommas getrennte Liste der vom Server unterstützten WebSocket-Protokollversionen.

### Nur Antwort-Header

Die Antwort des Servers kann diese enthalten.

#### {{HTTPHeader("Sec-WebSocket-Accept")}}

Wird in der Antwortnachricht des Servers während des Eröffnungs-Handshake-Prozesses enthalten sein, wenn der Server bereit ist, eine WebSocket-Verbindung zu initiieren. Es wird nicht öfter als einmal in den Antwort-Headern erscheinen.

```http
Sec-WebSocket-Accept: hash
```

- `hash`
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}} Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen und die Zeichenkette "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" daran angehängt wird. Dann wird der [SHA-1](https://en.wikipedia.org/wiki/SHA-1)-Hash dieser verketteten Zeichenkette genommen, was zu einem 20-Byte-Wert führt. Dieser Wert wird dann {{Glossary("Base64", "base64")}} kodiert, um den Wert dieser Eigenschaft zu erhalten.

## Referenzen

- [WebSocket-API](/de/docs/Web/API/WebSocket)
- [HTTP](/de/docs/Web/HTTP)
- Spezifikationen und RFCs:

  - {{RFC(7230)}}
  - {{RFC(6455)}}
  - {{RFC(7540)}}
