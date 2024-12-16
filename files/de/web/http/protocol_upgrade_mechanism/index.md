---
title: Protokoll-Upgrade-Mechanismus
slug: Web/HTTP/Protocol_upgrade_mechanism
l10n:
  sourceCommit: ab1bf2c5955c1bfa4d96d779f701ab22f3870d43
---

{{HTTPSidebar}}

Das [HTTP/1.1-Protokoll](/de/docs/Web/HTTP) bietet einen speziellen Mechanismus, der verwendet werden kann, um eine bereits etablierte Verbindung auf ein anderes Protokoll umzurüsten, indem das {{HTTPHeader("Upgrade")}}-Headerfeld genutzt wird.

Dieser Mechanismus ist optional; er kann nicht verwendet werden, um auf einem Protokollwechsel zu bestehen. Implementierungen können sich dafür entscheiden, kein Upgrade zu nutzen, selbst wenn sie das neue Protokoll unterstützen, und in der Praxis wird dieser Mechanismus hauptsächlich zum Umschalten auf eine WebSockets-Verbindung verwendet.

Beachten Sie auch, dass HTTP/2 die Nutzung dieses Mechanismus ausdrücklich ausschließt; er ist spezifisch für HTTP/1.1.

## Upgrade von HTTP/1.1-Verbindungen

Das {{HTTPHeader("Upgrade")}}-Headerfeld wird von Clients verwendet, um den Server einzuladen, auf eines der aufgelisteten Protokolle in absteigender Präferenz zu wechseln.

Da `Upgrade` ein Hop-by-Hop-Header ist, muss es auch im {{HTTPHeader("Connection")}}-Headerfeld aufgelistet werden. Das bedeutet, dass eine typische Anfrage, die ein Upgrade einschließt, in etwa so aussehen würde:

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

Je nach angefordertem Protokoll können weitere Header erforderlich sein; beispielsweise erlauben [WebSocket](/de/docs/Web/API/WebSocket)-Upgrades zusätzliche Header, um Details über die WebSocket-Verbindung zu konfigurieren sowie ein gewisses Maß an Sicherheit beim Öffnen der Verbindung zu bieten. Siehe [Upgrade auf eine WebSocket-Verbindung](#upgrade_auf_eine_websocket-verbindung) für weitere Details.

Wenn der Server entscheidet, die Verbindung aufzurüsten, sendet er einen {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus mit einem Upgrade-Header zurück, der das oder die Protokolle spezifiziert, zu denen gewechselt wird. Wenn er das nicht tut (oder nicht kann), ignoriert er das `Upgrade`-Headerfeld und sendet eine reguläre Antwort zurück (zum Beispiel ein {{HTTPStatus(200, "200 OK")}}).

Unmittelbar nach dem Senden des `101`-Statuscodes kann der Server beginnen, das neue Protokoll zu sprechen und alle zusätzlichen protokollspezifischen Handshakes durchzuführen, falls erforderlich. Effektiv wird die Verbindung zu einer Zwei-Wege-Leitung, sobald die aktualisierte Antwort abgeschlossen ist, und die Anfrage, die das Upgrade initiiert hat, kann über das neue Protokoll abgeschlossen werden.

## Häufige Verwendungen dieses Mechanismus

Hier betrachten wir die häufigsten Anwendungsfälle für das {{HTTPHeader("Upgrade")}}-Headerfeld.

### Upgrade auf eine WebSocket-Verbindung

Bei weitem der häufigste Anwendungsfall für das Upgrade einer HTTP-Verbindung ist die Verwendung von WebSockets, die immer durch das Upgrade einer HTTP- oder HTTPS-Verbindung implementiert werden. Beachten Sie, dass, wenn Sie eine neue Verbindung über die [WebSocket-API](/de/docs/Web/API/WebSocket) oder eine beliebige Bibliothek, die WebSockets verwendet, öffnen, die meisten oder alle dieser Schritte für Sie ausgeführt werden. Zum Beispiel ist das Öffnen einer WebSocket-Verbindung so einfach wie:

```js
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

Der [`WebSocket()`](/de/docs/Web/API/WebSocket/WebSocket)-Konstruktor übernimmt die gesamte Arbeit, eine initiale HTTP/1.1-Verbindung zu erstellen und anschließend den Handshake und den Upgrade-Prozess für Sie durchzuführen.

> [!NOTE]
> Sie können auch das URL-Schema `"wss://"` verwenden, um eine sichere WebSocket-Verbindung zu öffnen.

Wenn Sie eine WebSocket-Verbindung von Grund auf neu erstellen müssen, müssen Sie den Handshake-Prozess selbst durchführen. Nach der Erstellung der initialen HTTP/1.1-Sitzung müssen Sie das Upgrade anfordern, indem Sie zu einer standardmäßigen Anfrage die {{HTTPHeader("Upgrade")}}- und {{HTTPHeader("Connection")}}-Header hinzufügen, wie folgt:

```http
Connection: Upgrade
Upgrade: websocket
```

### WebSocket-spezifische Header

Die folgenden Header sind in den WebSocket-Upgrade-Prozess involviert. Abgesehen von den {{HTTPHeader("Upgrade")}}- und {{HTTPHeader("Connection")}}-Headern sind die restlichen im Allgemeinen optional oder werden für Sie vom Browser und Server gehandhabt, wenn sie miteinander kommunizieren.

#### {{HTTPHeader("Sec-WebSocket-Extensions")}}

Gibt eine oder mehrere auf Protokollebene befindliche WebSocket-Erweiterungen an, die der Server verwenden soll. Die Verwendung von mehr als einem `Sec-WebSocket-Extension`-Header in einer Anfrage ist erlaubt; das Ergebnis ist dasselbe, als wenn Sie alle gelisteten Erweiterungen in einem solchen Header enthalten hätten.

```http
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : Eine durch Kommas getrennte Liste von Erweiterungen, die angefordert werden (oder zu unterstützen sein sollen). Diese sollten aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden. Erweiterungen, die Parameter haben, tun dies durch Verwendung von Semikolon-Trennung.

Zum Beispiel:

```http
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

#### {{HTTPHeader("Sec-WebSocket-Key")}}

Stellt dem Server Informationen bereit, die benötigt werden, um zu bestätigen, dass der Client berechtigt ist, ein Upgrade auf WebSocket anzufordern. Dieser Header kann verwendet werden, wenn unsichere (HTTP) Clients ein Upgrade wünschen, um ein gewisses Maß an Schutz gegen Missbrauch zu bieten. Der Wert des Schlüssels wird gemäß einem im WebSocket-Spezifikation definierten Algorithmus berechnet, sodass dies _keine Sicherheit bietet_. Stattdessen hilft es, unbeabsichtigte oder missbräuchliche Anfragen nach einer WebSocket-Verbindung von Nicht-WebSocket-Clients zu verhindern. Im Wesentlichen bestätigt dieser Schlüssel dann, dass "Ja, ich möchte wirklich eine WebSocket-Verbindung öffnen."

Dieser Header wird automatisch von Clients hinzugefügt, die sich entscheiden, ihn zu verwenden; er kann nicht über die Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

```http
Sec-WebSocket-Key: key
```

- `key`
  - : Der Schlüssel für diese Upgrade-Anforderung. Der Client fügt dies hinzu, wenn er dies wünscht, und der Server wird in der Antwort einen eigenen Schlüssel enthalten, den der Client validieren wird, bevor er die Upgrade-Antwort an Sie liefert.

Der {{HTTPHeader("Sec-WebSocket-Accept")}}-Header der Serverantwort wird einen basierend auf dem angegebenen `key` berechneten Wert enthalten.

#### {{HTTPHeader("Sec-WebSocket-Protocol")}}

Der `Sec-WebSocket-Protocol`-Header spezifiziert ein oder mehrere WebSocket-Protokolle, die Sie verwenden möchten, in bevorzugter Reihenfolge. Das erste, das vom Server unterstützt wird, wird ausgewählt und vom Server in einem `Sec-WebSocket-Protocol`-Header in der Antwort zurückgegeben. Sie können dies auch mehrfach im Header verwenden; das Ergebnis ist dasselbe, als ob Sie eine durch Kommas getrennte Liste von Subprotokollkennungen in einem einzigen Header verwendet hätten.

```http
Sec-WebSocket-Protocol: subprotocols
```

- `subprotocols`
  - : Eine durch Kommas getrennte Liste von Subprotokollnamen in der Reihenfolge der Präferenz. Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder können ein benutzerdefinierter Name sein, der vom Client und Server gemeinsam verstanden wird.

#### {{HTTPHeader("Sec-WebSocket-Version")}}

##### Anfrage-Header

Gibt die WebSocket-Protokollversion an, die der Client verwenden möchte, sodass der Server bestätigen kann, ob diese Version auf seiner Seite unterstützt wird.

```http
Sec-WebSocket-Version: version
```

- `version`
  - : Die WebSocket-Protokollversion, die der Client im Kommunikationsprozess mit dem Server verwenden möchte. Diese Nummer sollte die neueste mögliche Version sein, die im [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) gelistet ist. Die neueste endgültige Version des WebSocket-Protokolls ist Version 13.

##### Antwort-Header

Wenn der Server nicht mit der angegebenen Version des WebSocket-Protokolls kommunizieren kann, wird er mit einem Fehler antworten (wie 426 Upgrade Required), der in seinen Headern einen `Sec-WebSocket-Version`-Header mit einer durch Kommas getrennten Liste der unterstützten Protokollversionen enthält. Wenn der Server die angeforderte Protokollversion unterstützt, wird kein `Sec-WebSocket-Version`-Header in die Antwort aufgenommen.

```http
Sec-WebSocket-Version: supportedVersions
```

- `supportedVersions`
  - : Eine durch Kommas getrennte Liste der von dem Server unterstützten WebSocket-Protokollversionen.

### Nur Antwort-Header

Die Antwort vom Server kann diese einschließen.

#### {{HTTPHeader("Sec-WebSocket-Accept")}}

In der Antwortnachricht vom Server während des Eröffnungshandshake-Prozesses enthalten, wenn der Server bereit ist, eine WebSocket-Verbindung zu initiieren. Es wird nicht mehr als einmal in den Antwortheadern erscheinen.

```http
Sec-WebSocket-Accept: hash
```

- `hash`
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}}-Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen wird, die Zeichenfolge "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" daran angehängt wird, den [SHA-1](https://en.wikipedia.org/wiki/SHA-1)-Hash dieses zusammengefügten Strings ermittelt wird, was in einem 20-Byte-Wert resultiert. Dieser Wert wird dann {{Glossary("Base64", "base64")}} kodiert, um den Wert dieses Attributs zu erhalten.

## Spezifikationen

{{specifications}}

## Siehe auch

- [WebSocket-API](/de/docs/Web/API/WebSocket)
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
