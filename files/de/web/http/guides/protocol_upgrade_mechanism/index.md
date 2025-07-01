---
title: Mechanismus zur Protokollaktualisierung
slug: Web/HTTP/Guides/Protocol_upgrade_mechanism
l10n:
  sourceCommit: f8593e5f704847dc9915692a5d535637cfc6cb84
---

{{HTTPSidebar}}

Das [HTTP/1.1-Protokoll](/de/docs/Web/HTTP) bietet einen speziellen Mechanismus, der verwendet werden kann, um eine bereits bestehende Verbindung über das {{HTTPHeader("Upgrade")}} Header-Feld zu einem anderen Protokoll zu aktualisieren.

Dieser Mechanismus ist optional; er kann nicht verwendet werden, um auf einen Protokollwechsel zu bestehen. Implementierungen können sich entscheiden, ein Upgrade nicht zu nutzen, selbst wenn sie das neue Protokoll unterstützen, und in der Praxis wird dieser Mechanismus hauptsächlich verwendet, um eine WebSockets-Verbindung zu starten.

Beachten Sie auch, dass HTTP/2 die Nutzung dieses Mechanismus ausdrücklich verbietet; er ist spezifisch für HTTP/1.1.

## Upgrade von HTTP/1.1-Verbindungen

Das {{HTTPHeader("Upgrade")}} Header-Feld wird von Clients verwendet, um den Server einzuladen, zu einem der aufgelisteten Protokolle zu wechseln, in absteigender Präferenzreihenfolge.

Da `Upgrade` ein Hop-by-Hop-Header ist, muss er auch im {{HTTPHeader("Connection")}} Header-Feld aufgelistet werden. Dies bedeutet, dass eine typische Anfrage, die ein Upgrade enthält, etwa folgendermaßen aussieht:

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

Andere Header können je nach gewünschtem Protokoll erforderlich sein; beispielsweise ermöglichen [WebSocket](/de/docs/Web/API/WebSocket)-Upgrades zusätzliche Header, um Details über die WebSocket-Verbindung zu konfigurieren sowie ein gewisses Maß an Sicherheit beim Öffnen der Verbindung zu bieten. Weitere Einzelheiten finden Sie unter [Upgrade zu einer WebSocket-Verbindung](#upgrade_zu_einer_websocket-verbindung).

Wenn der Server beschließt, die Verbindung zu aktualisieren, sendet er einen {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus mit einem Upgrade-Header zurück, der die Protokolle angibt, zu denen gewechselt wird. Wenn er die Verbindung nicht aktualisiert (oder nicht aktualisieren kann), ignoriert er den `Upgrade`-Header und sendet eine reguläre Antwort zurück (zum Beispiel ein {{HTTPStatus(200, "200 OK")}}).

Unmittelbar nach dem Senden des `101`-Statuscodes kann der Server beginnen, das neue Protokoll zu sprechen und alle notwendigen zusätzlichen protokollspezifischen Handshakes durchzuführen. Effektiv wird die Verbindung zu einer Zwei-Wege-Leitung, sobald die aktualisierte Antwort abgeschlossen ist, und die Anfrage, die das Upgrade initiiert hat, kann über das neue Protokoll abgeschlossen werden.

## Allgemeine Verwendungsmöglichkeiten für diesen Mechanismus

Hier betrachten wir die gebräuchlichsten Anwendungsfälle für den {{HTTPHeader("Upgrade")}} Header.

### Upgrade zu einer WebSocket-Verbindung

Bei weitem der häufigste Anwendungsfall für das Upgrade einer HTTP-Verbindung ist die Nutzung von WebSockets, die immer durch das Upgrade einer HTTP- oder HTTPS-Verbindung implementiert werden. Beachten Sie, dass wenn Sie eine neue Verbindung mithilfe der [WebSocket-API](/de/docs/Web/API/WebSocket) oder einer Bibliothek, die WebSockets nutzt, öffnen, die meisten oder alle dieser Schritte für Sie erledigt werden. Zum Beispiel ist das Öffnen einer WebSocket-Verbindung eine Einzelmethode:

```js
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

Der [`WebSocket()`](/de/docs/Web/API/WebSocket/WebSocket) Konstruktor übernimmt die gesamte Arbeit, eine anfängliche HTTP/1.1-Verbindung zu erstellen, und kümmert sich dann um den Handshake- und Upgrade-Prozess.

> [!NOTE]
> Sie können auch das `"wss://"` URL-Schema verwenden, um eine sichere WebSocket-Verbindung zu öffnen.

Wenn Sie eine WebSocket-Verbindung von Grund auf neu erstellen müssen, müssen Sie den Handshake-Prozess selbst durchführen. Nachdem Sie die anfängliche HTTP/1.1-Sitzung erstellt haben, müssen Sie das Upgrade anfordern, indem Sie zu einer Standardanfrage die {{HTTPHeader("Upgrade")}} und {{HTTPHeader("Connection")}} Header hinzufügen, wie folgt:

```http
Connection: Upgrade
Upgrade: websocket
```

### WebSocket-spezifische Header

Die folgenden Header sind am WebSocket-Upgrade-Prozess beteiligt. Abgesehen von den {{HTTPHeader("Upgrade")}} und {{HTTPHeader("Connection")}}-Headern sind die übrigen im Allgemeinen optional oder werden für Sie vom Browser und Server gehandhabt, wenn sie miteinander kommunizieren.

#### {{HTTPHeader("Sec-WebSocket-Extensions")}}

Dieser Header gibt eine oder mehrere WebSocket-Protokollerweiterungen an, die der Server verwenden soll. Das Verwenden von mehr als einem `Sec-WebSocket-Extension`-Header in einer Anfrage ist erlaubt; das Ergebnis ist dasselbe, als wenn Sie alle aufgelisteten Erweiterungen in einem solchen Header angegeben hätten.

```http
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : Eine durch Kommas getrennte Liste der anzufordernden Erweiterungen (oder der Unterstützung zuzustimmen). Diese sollten aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden. Erweiterungen, die Parameter verwenden, tun dies durch die Verwendung von Semikolon-Abgrenzungen.

Zum Beispiel gibt dieser Header zwei benutzerdefinierte Erweiterungen an: `superspeed` und `colormode` (die zusätzlich den Parameter `depth=16` hat):

```http
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

#### {{HTTPHeader("Sec-WebSocket-Key")}}

Dieser Header stellt dem Server die Informationen zur Verfügung, die benötigt werden, um zu bestätigen, dass der Client berechtigt ist, ein Upgrade auf WebSocket anzufordern. Dieser Header kann von unsicheren (HTTP-) Clients verwendet werden, die ein Upgrade wünschen, um einen gewissen Schutz vor Missbrauch zu bieten. Der Wert des Schlüssels wird unter Verwendung eines im WebSocket-Spezifikationsalgorithmus definierten Verfahrens berechnet, sodass dies _keine Sicherheit bietet_. Stattdessen verhindert es, dass Nicht-WebSocket-Clients versehentlich oder durch Missbrauch eine WebSocket-Verbindung anfordern. Im Wesentlichen bestätigt dieser Schlüssel, dass "Ja, ich möchte wirklich eine WebSocket-Verbindung öffnen."

Dieser Header wird automatisch von Clients hinzugefügt, die ihn verwenden möchten; er kann nicht mit den Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

```http
Sec-WebSocket-Key: key
```

- `key`
  - : Der Schlüssel für diese Anforderung eines Upgrades. Der Client fügt dies hinzu, wenn er es wünscht, und der Server wird in der Antwort einen eigenen Schlüssel enthalten, den der Client validieren wird, bevor er Ihnen die Upgrade-Antwort liefert.

Der {{HTTPHeader("Sec-WebSocket-Accept")}}-Header in der Antwort des Servers wird einen Wert besitzen, der basierend auf dem angegebenen `key` berechnet wurde.

#### {{HTTPHeader("Sec-WebSocket-Protocol")}}

Der `Sec-WebSocket-Protocol`-Header gibt ein oder mehrere WebSocket-Protokolle an, die Sie verwenden möchten, in Präferenzreihenfolge. Das erste, das vom Server unterstützt wird, wird ausgewählt und vom Server in einem `Sec-WebSocket-Protocol`-Header in der Antwort zurückgesendet. Sie können dies auch mehrmals im Header verwenden; das Ergebnis ist dasselbe, als wenn Sie eine durch Kommas getrennte Liste von Subprotokoll-Identifikatoren in einem einzigen Header verwendet hätten.

```http
Sec-WebSocket-Protocol: subprotocols
```

- `subprotocols`
  - : Eine durch Kommas getrennte Liste von Subprotokollnamen, in Reihenfolge der Präferenz. Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder können ein benutzerdefinierter Name sein, der dem Client und dem Server gemeinsam bekannt ist.

#### {{HTTPHeader("Sec-WebSocket-Version")}}

##### Anfrage-Header

Dieser Header spezifiziert die WebSocket-Protokollversion, die der Client verwenden möchte, damit der Server bestätigen kann, ob diese Version auf seiner Seite unterstützt wird.

```http
Sec-WebSocket-Version: version
```

- `version`
  - : Die WebSocket-Protokollversion, die der Client bei der Kommunikation mit dem Server verwenden möchte. Diese Zahl sollte die aktuellste mögliche Version im [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) sein. Die neueste finale Version des WebSocket-Protokolls ist Version 13.

##### Antwort-Header

Wenn der Server nicht mit der angegebenen Version des WebSocket-Protokolls kommunizieren kann, antwortet er mit einem Fehler (wie 426 Upgrade Required), der in seinen Headern einen `Sec-WebSocket-Version`-Header mit einer durch Kommas getrennten Liste der unterstützten Protokollversionen enthält. Wenn der Server die angeforderte Protokollversion unterstützt, wird kein `Sec-WebSocket-Version`-Header in der Antwort enthalten sein.

```http
Sec-WebSocket-Version: supportedVersions
```

- `supportedVersions`
  - : Eine durch Kommas abgegrenzte Liste der vom Server unterstützten WebSocket-Protokollversionen.

### Nur-Antwort-Header

Die Antwort des Servers kann diese enthalten.

#### {{HTTPHeader("Sec-WebSocket-Accept")}}

Dieser Header ist im Antwortnachricht vom Server während des Eröffnungs-Handshake-Prozesses enthalten, wenn der Server bereit ist, eine WebSocket-Verbindung zu initiieren. Er wird nicht mehr als einmal in den Antwortheadern erscheinen.

```http
Sec-WebSocket-Accept: hash
```

- `hash`
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}}-Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen, die Zeichenfolge "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" daran angehängt und der [SHA-1](https://en.wikipedia.org/wiki/SHA-1)-Hash dieser verketteten Zeichenfolge genommen wird, was einen 20-Byte-Wert ergibt. Dieser Wert wird dann {{Glossary("Base64", "base64")}}-codiert, um den Wert dieser Eigenschaft zu erhalten.

## Spezifikationen

{{specifications}}

## Siehe auch

- [WebSocket API](/de/docs/Web/API/WebSocket)
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
