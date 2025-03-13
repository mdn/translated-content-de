---
title: Protokoll-Upgrade-Mechanismus
slug: Web/HTTP/Guides/Protocol_upgrade_mechanism
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}}

Das [HTTP/1.1-Protokoll](/de/docs/Web/HTTP) bietet einen speziellen Mechanismus, der verwendet werden kann, um eine bereits etablierte Verbindung auf ein anderes Protokoll umzustellen, indem das {{HTTPHeader("Upgrade")}}-Headerfeld genutzt wird.

Dieser Mechanismus ist optional; er kann nicht genutzt werden, um auf einen Protokollwechsel zu bestehen. Implementierungen können sich entscheiden, ein Upgrade nicht zu nutzen, selbst wenn sie das neue Protokoll unterstützen, und in der Praxis wird dieser Mechanismus hauptsächlich dazu verwendet, eine WebSockets-Verbindung zu initiieren.

Beachten Sie auch, dass HTTP/2 die Nutzung dieses Mechanismus ausdrücklich verbietet; er ist spezifisch für HTTP/1.1.

## Upgrade von HTTP/1.1-Verbindungen

Das {{HTTPHeader("Upgrade")}}-Headerfeld wird von Clients verwendet, um den Server einzuladen, zu einem der aufgelisteten Protokolle in absteigender Präferenzordnung zu wechseln.

Da `Upgrade` ein hop-by-hop-Header ist, muss es auch im {{HTTPHeader("Connection")}}-Headerfeld aufgeführt werden. Das bedeutet, dass eine typische Anfrage, die ein Upgrade enthält, ungefähr so aussehen würde:

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

Andere Header könnten erforderlich sein, abhängig von dem angeforderten Protokoll; zum Beispiel erlauben [WebSocket](/de/docs/Web/API/WebSocket)-Upgrades zusätzliche Header, um Details über die WebSocket-Verbindung zu konfigurieren sowie ein gewisses Maß an Sicherheit beim Öffnen der Verbindung zu bieten. Weitere Details finden Sie unter [Upgrade zu einer WebSocket-Verbindung](#upgrade_zu_einer_websocket-verbindung).

Wenn der Server sich entscheidet, die Verbindung zu upgraden, sendet er eine {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus mit einem Upgrade-Header zurück, der das/die Protokoll(e) angibt, zu dem/denen gewechselt wird. Wenn er die Verbindung nicht (oder nicht kann) upgradet, ignoriert er den `Upgrade`-Header und sendet eine normale Antwort zurück (zum Beispiel ein {{HTTPStatus(200, "200 OK")}}).

Sofort nach dem Senden des `101`-Statuscodes kann der Server beginnen, das neue Protokoll zu sprechen und dabei alle zusätzlichen protokollspezifischen Handshakes auszuführen, die notwendig sind. Effektiv wird die Verbindung zu einer Zwei-Wege-Leitung, sobald die aktualisierte Antwort abgeschlossen ist, und die Anfrage, die das Upgrade initiiert hat, kann über das neue Protokoll abgeschlossen werden.

## Häufige Verwendungen für diesen Mechanismus

Hier schauen wir uns die häufigsten Anwendungsfälle für das {{HTTPHeader("Upgrade")}}-Header an.

### Upgrade zu einer WebSocket-Verbindung

Bei weitem der häufigste Anwendungsfall für das Upgraden einer HTTP-Verbindung ist die Nutzung von WebSockets, die immer durch Upgraden einer HTTP- oder HTTPS-Verbindung implementiert werden. Beachten Sie, dass, wenn Sie eine neue Verbindung mit der [WebSocket-API](/de/docs/Web/API/WebSocket) oder einer beliebigen Bibliothek, die WebSockets nutzt, öffnen, das meiste oder alles davon für Sie gemacht wird. Zum Beispiel ist das Öffnen einer WebSocket-Verbindung so einfach wie:

```js
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

Der [`WebSocket()`](/de/docs/Web/API/WebSocket/WebSocket)-Konstruktor erledigt die gesamte Arbeit, eine anfängliche HTTP/1.1-Verbindung zu erstellen und dann den Handshake- und Upgrade-Prozess für Sie zu handhaben.

> [!NOTE]
> Sie können auch das `"wss://"` URL-Schema verwenden, um eine sichere WebSocket-Verbindung zu öffnen.

Wenn Sie eine WebSocket-Verbindung von Grund auf neu erstellen müssen, müssen Sie den Handshake-Prozess selbst handhaben. Nach dem Erstellen der anfänglichen HTTP/1.1-Sitzung müssen Sie das Upgrade anfordern, indem Sie zu einer Standardanfrage die {{HTTPHeader("Upgrade")}}- und {{HTTPHeader("Connection")}}-Header hinzufügen, wie folgt:

```http
Connection: Upgrade
Upgrade: websocket
```

### WebSocket-spezifische Header

Die folgenden Header sind im WebSocket-Upgrade-Prozess involviert. Abgesehen von den {{HTTPHeader("Upgrade")}}- und {{HTTPHeader("Connection")}}-Headern sind die restlichen meist optional oder werden für Sie vom Browser und Server behandelt, wenn sie miteinander sprechen.

#### {{HTTPHeader("Sec-WebSocket-Extensions")}}

Spezifiziert eine oder mehrere Protokoll-Ebenen WebSocket-Erweiterungen, die der Server verwenden soll. Es ist erlaubt, mehr als einen `Sec-WebSocket-Extension`-Header in einer Anfrage zu verwenden; das Ergebnis ist dasselbe, als ob Sie alle aufgelisteten Erweiterungen in einem solchen Header aufgenommen hätten.

```http
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : Eine durch Kommas getrennte Liste von Erweiterungen, die angefordert (oder unterstützt werden sollen). Diese sollten aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden. Erweiterungen, die Parameter benötigen, tun dies durch die Verwendung von Semikolon-Abgrenzung.

Beispiel:

```http
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

#### {{HTTPHeader("Sec-WebSocket-Key")}}

Liefert Informationen an den Server, die benötigt werden, um zu bestätigen, dass der Client berechtigt ist, ein Upgrade auf WebSocket anzufordern. Dieser Header kann verwendet werden, wenn unsichere (HTTP) Clients ein Upgrade wünschen, um ein gewisses Maß an Missbrauchsschutz zu bieten. Der Wert des Schlüssels wird mithilfe eines im WebSocket-Spezifikation definierten Algorithmus berechnet, daher bietet dies _keine Sicherheit_. Stattdessen hilft es zu verhindern, dass Nicht-WebSocket-Clients unbeabsichtigt oder durch Missbrauch eine WebSocket-Verbindung anfordern. Im Wesentlichen bestätigt dieser Schlüssel dann: "Ja, ich meine es wirklich, eine WebSocket-Verbindung zu öffnen."

Dieser Header wird automatisch hinzugefügt von Clients, die sich dafür entscheiden, ihn zu verwenden; er kann nicht mit den Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

```http
Sec-WebSocket-Key: key
```

- `key`
  - : Der Schlüssel für diese Anfrage zum Upgrade. Der Client fügt diesen hinzu, wenn er es wünscht, und der Server wird in der Antwort einen eigenen Schlüssel einfügen, den der Client validieren wird, bevor er die Upgrade-Antwort an Sie liefert.

Der {{HTTPHeader("Sec-WebSocket-Accept")}}-Header der Serverantwort wird einen Wert haben, der auf der Grundlage des angegebenen `key` berechnet wird.

#### {{HTTPHeader("Sec-WebSocket-Protocol")}}

Der `Sec-WebSocket-Protocol`-Header spezifiziert ein oder mehrere WebSocket-Protokolle, die Sie verwenden möchten, in der Reihenfolge der Präferenz. Das erste, das vom Server unterstützt wird, wird ausgewählt und in einem `Sec-WebSocket-Protocol`-Header zurückgegeben, der in der Antwort enthalten ist. Sie können diesen auch mehrmals im Header verwenden; das Ergebnis ist dasselbe, wie wenn Sie eine durch Kommas abgegrenzte Liste von Subprotokoll-Identifikatoren in einem einzigen Header verwenden.

```http
Sec-WebSocket-Protocol: subprotocols
```

- `subprotocols`
  - : Eine durch Kommas getrennte Liste von Subprotokollnamen in der Reihenfolge der Präferenz. Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder ein benutzerdefinierter Name sein, den der Client und der Server gemeinsam verstehen.

#### {{HTTPHeader("Sec-WebSocket-Version")}}

##### Anfrage-Header

Spezifiziert die Version des WebSocket-Protokolls, die der Client verwenden möchte, damit der Server bestätigen kann, ob diese Version auf seiner Seite unterstützt wird.

```http
Sec-WebSocket-Version: version
```

- `version`
  - : Die Version des WebSocket-Protokolls, die der Client verwenden möchte, wenn er mit dem Server kommuniziert. Diese Zahl sollte die aktuellste mögliche Version sein, die in der [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) aufgeführt ist. Die aktuellste finale Version des WebSocket-Protokolls ist Version 13.

##### Antwort-Header

Wenn der Server nicht mit der angegebenen Version des WebSocket-Protokolls kommunizieren kann, antwortet er mit einem Fehler (wie zum Beispiel 426 Upgrade Required), der in seinen Headern einen `Sec-WebSocket-Version`-Header mit einer durch Kommas getrennten Liste der unterstützten Protokollversionen enthält. Wenn der Server die angeforderte Protokollversion unterstützt, ist kein `Sec-WebSocket-Version`-Header in der Antwort enthalten.

```http
Sec-WebSocket-Version: supportedVersions
```

- `supportedVersions`
  - : Eine durch Kommas abgegrenzte Liste der WebSocket-Protokollversionen, die der Server unterstützt.

### Nur-Antwort-Header

Die Antwort des Servers kann diese beinhalten.

#### {{HTTPHeader("Sec-WebSocket-Accept")}}

Wird in der Antwortnachricht des Servers während des Eröffnungshandshake-Prozesses einbezogen, wenn der Server bereit ist, eine WebSocket-Verbindung zu initiieren. Es wird nicht mehr als einmal in den Antwort-Headern erscheinen.

```http
Sec-WebSocket-Accept: hash
```

- `hash`
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}}-Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen, die Zeichenfolge "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" daran angehängt wird und dann der [SHA-1](https://en.wikipedia.org/wiki/SHA-1)-Hash dieser verketteten Zeichenfolge ermittelt wird, was zu einem 20-Byte-Wert führt. Dieser Wert wird dann {{Glossary("Base64", "base64")}}-codiert, um den Wert dieser Eigenschaft zu erhalten.

## Spezifikationen

{{specifications}}

## Siehe auch

- [WebSocket API](/de/docs/Web/API/WebSocket)
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
