---
title: Protokoll-Upgrade-Mechanismus
slug: Web/HTTP/Guides/Protocol_upgrade_mechanism
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Das [HTTP/1.1-Protokoll](/de/docs/Web/HTTP) bietet einen speziellen Mechanismus, der verwendet werden kann, um eine bereits bestehende Verbindung mit dem {{HTTPHeader("Upgrade")}}-Header-Feld auf ein anderes Protokoll zu aktualisieren.

Dieser Mechanismus ist optional; er kann nicht verwendet werden, um auf einem Protokollwechsel zu bestehen. Implementierungen können sich entscheiden, kein Upgrade zu nutzen, selbst wenn sie das neue Protokoll unterstützen, und in der Praxis wird dieser Mechanismus hauptsächlich dafür genutzt, eine WebSockets-Verbindung zu initialisieren.

Beachten Sie auch, dass HTTP/2 die Nutzung dieses Mechanismus ausdrücklich untersagt; er ist spezifisch für HTTP/1.1.

## Upgrade von HTTP/1.1-Verbindungen

Das {{HTTPHeader("Upgrade")}}-Header-Feld wird von Clients verwendet, um den Server einzuladen, zu einem der aufgelisteten Protokolle zu wechseln, in absteigender Präferenzreihenfolge.

Da `Upgrade` ein hop-by-hop-Header ist, muss er auch im {{HTTPHeader("Connection")}}-Header-Feld aufgeführt werden. Dies bedeutet, dass eine typische Anfrage, die ein Upgrade enthält, folgendermaßen aussieht:

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

Je nach angeforderten Protokoll können weitere Header erforderlich sein; zum Beispiel erlauben [WebSocket](/de/docs/Web/API/WebSocket)-Upgrades zusätzliche Header, um Details zur WebSocket-Verbindung zu konfigurieren sowie ein gewisses Maß an Sicherheit beim Öffnen der Verbindung zu bieten. Weitere Details finden Sie unter [Upgrade zu einer WebSocket-Verbindung](#upgrade_zu_einer_websocket-verbindung).

Wenn der Server beschließt, die Verbindung zu aktualisieren, sendet er einen {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus mit einem Upgrade-Header zurück, der die Protokolle angibt, zu denen gewechselt wird. Wenn er dies nicht tut (oder nicht kann), ignoriert er den `Upgrade`-Header und sendet eine normale Antwort zurück (zum Beispiel ein {{HTTPStatus(200, "200 OK")}}).

Unmittelbar nachdem der `101`-Statuscode gesendet wurde, kann der Server mit dem neuen Protokoll sprechen und gegebenenfalls zusätzliche protokollspezifische Handshakes durchführen. Effektiv wird die Verbindung zu einem Zwei-Wege-Rohr, sobald die aktualisierte Antwort abgeschlossen ist, und die Anfrage, die das Upgrade initiiert hat, kann über das neue Protokoll abgeschlossen werden.

## Häufige Verwendungen für diesen Mechanismus

Hier betrachten wir die häufigsten Anwendungsfälle für den {{HTTPHeader("Upgrade")}}-Header.

### Upgrade zu einer WebSocket-Verbindung

Mit Abstand der häufigste Anwendungsfall für den Upgrade einer HTTP-Verbindung ist die Verwendung von WebSockets, die immer durch das Upgrade einer HTTP- oder HTTPS-Verbindung implementiert werden. Beachten Sie, dass wenn Sie eine neue Verbindung unter Verwendung der [WebSocket-API](/de/docs/Web/API/WebSocket) oder einer Bibliothek, die WebSockets verarbeitet, öffnen, das meiste oder alles davon für Sie erledigt wird. Zum Beispiel ist das Öffnen einer WebSocket-Verbindung eine einzelne Methode:

```js
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

Der [`WebSocket()`](/de/docs/Web/API/WebSocket/WebSocket)-Konstruktor erledigt die gesamte Arbeit, eine initiale HTTP/1.1-Verbindung zu erstellen, dann die Handshaking- und Upgrade-Prozesse für Sie zu übernehmen.

> [!NOTE]
> Sie können auch das `"wss://"` URL-Schema verwenden, um eine sichere WebSocket-Verbindung zu öffnen.

Wenn Sie eine WebSocket-Verbindung von Grund auf neu erstellen müssen, müssen Sie den Handshake-Prozess selbst handhaben. Nach der Erstellung der initialen HTTP/1.1-Sitzung müssen Sie das Upgrade anfordern, indem Sie zu einer Standardanfrage die {{HTTPHeader("Upgrade")}}- und {{HTTPHeader("Connection")}}-Header hinzufügen, wie folgt:

```http
Connection: Upgrade
Upgrade: websocket
```

### WebSocket-spezifische Header

Die folgenden Header sind im WebSocket-Upgrade-Prozess involviert. Abgesehen von den {{HTTPHeader("Upgrade")}}- und {{HTTPHeader("Connection")}}-Headern sind die restlichen in der Regel optional oder werden für Sie vom Browser und Server behandelt, wenn sie miteinander kommunizieren.

#### {{HTTPHeader("Sec-WebSocket-Extensions")}}

Gibt an, eine oder mehrere protokollbezogene WebSocket-Erweiterungen zu verwenden, die der Server verwenden soll. Die Verwendung mehrerer `Sec-WebSocket-Extension`-Header in einer Anfrage ist zulässig; das Ergebnis ist dasselbe, als wenn Sie alle aufgelisteten Erweiterungen in einem solchen Header enthalten hätten.

```http
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : Eine durch Kommas getrennte Liste von Erweiterungen, die angefordert werden sollen (oder die unterstützt werden sollen). Diese sollten aus dem [IANA WebSocket-Erweiterungsnamen-Register](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden. Erweiterungen, die Parameter erfordern, tun dies, indem sie Semikolon-Abgrenzungen verwenden.

Zum Beispiel zeigt dieser Header zwei benutzerdefinierte Erweiterungen: `superspeed` und `colormode` (die zusätzlich den Parameter `depth=16` hat):

```http
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

#### {{HTTPHeader("Sec-WebSocket-Key")}}

Liefert Informationen an den Server, die benötigt werden, um zu bestätigen, dass der Client berechtigt ist, ein Upgrade auf WebSocket anzufordern. Dieser Header kann verwendet werden, wenn unsichere (HTTP) Clients ein Upgrade wünschen, um einen gewissen Schutz gegen Missbrauch zu bieten. Der Wert des Schlüssels wird unter Verwendung eines im WebSocket-Spezifikation definierten Algorithmus berechnet, daher bietet dies _keine Sicherheit_. Stattdessen hilft es, zu verhindern, dass Nicht-WebSocket-Clients versehentlich oder durch Missbrauch eine WebSocket-Verbindung anfordern. Im Wesentlichen bestätigt dieser Schlüssel also: "Ja, ich meine wirklich, eine WebSocket-Verbindung zu öffnen."

Dieser Header wird automatisch von Clients hinzugefügt, die sich entscheiden, ihn zu verwenden; er kann nicht mit den Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

```http
Sec-WebSocket-Key: key
```

- `key`
  - : Der Schlüssel für diese Anfrage, um ein Upgrade durchzuführen. Der Client fügt diesen hinzu, wenn er dies wünscht, und der Server wird in der Antwort einen Schlüssel seinerseits enthalten, den der Client validieren wird, bevor er die Upgrade-Antwort Ihnen übermittelt.

Der {{HTTPHeader("Sec-WebSocket-Accept")}}-Header der Antwort des Servers wird einen Wert enthalten, der basierend auf dem angegebenen `key` berechnet wird.

#### {{HTTPHeader("Sec-WebSocket-Protocol")}}

Der `Sec-WebSocket-Protocol`-Header gibt ein oder mehrere WebSocket-Protokolle an, die Sie verwenden möchten, in der Reihenfolge der Präferenz. Das erste, das vom Server unterstützt wird, wird ausgewählt und vom Server in einem `Sec-WebSocket-Protocol`-Header in der Antwort zurückgegeben. Sie können dies auch mehrmals im Header verwenden; das Ergebnis ist dasselbe, als wenn Sie eine durch Kommas getrennte Liste von Subprotokoll-Bezeichnern in einem einzigen Header verwendet hätten.

```http
Sec-WebSocket-Protocol: subprotocols
```

- `subprotocols`
  - : Eine durch Kommas getrennte Liste von Subprotokollnamen, in der Reihenfolge der Präferenz. Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder können ein benutzerdefinierter Name sein, der vom Client und Server gemeinsam verstanden wird.

#### {{HTTPHeader("Sec-WebSocket-Version")}}

##### Anfrage-Header

Gibt die WebSocket-Protokollversion an, die der Client verwenden möchte, damit der Server bestätigen kann, ob diese Version bei ihm unterstützt wird.

```http
Sec-WebSocket-Version: version
```

- `version`
  - : Die WebSocket-Protokollversion, die der Client beim Kommunizieren mit dem Server verwenden möchte. Diese Nummer sollte die aktuellste mögliche Version sein, die im [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) aufgeführt ist. Die aktuellste endgültige Version des WebSocket-Protokolls ist Version 13.

##### Antwort-Header

Wenn der Server nicht mit der angegebenen Version des WebSocket-Protokolls kommunizieren kann, wird er mit einem Fehler antworten (wie 426 Upgrade Required), der in seinen Headern einen `Sec-WebSocket-Version`-Header mit einer durch Kommas getrennten Liste der unterstützten Protokollversionen enthält. Wenn der Server die angeforderte Protokollversion unterstützt, wird kein `Sec-WebSocket-Version`-Header in der Antwort enthalten sein.

```http
Sec-WebSocket-Version: supportedVersions
```

- `supportedVersions`
  - : Eine durch Kommas abgegrenzte Liste der vom Server unterstützten WebSocket-Protokollversionen.

### Antwort-spezifische Header

Die Antwort vom Server kann diese enthalten.

#### {{HTTPHeader("Sec-WebSocket-Accept")}}

In die Antwortnachricht des Servers während des Öffnungshandshake-Prozesses aufgenommen, wenn der Server bereit ist, eine WebSocket-Verbindung zu initiieren. Er wird in den Antwort-Headern nicht mehr als einmal erscheinen.

```http
Sec-WebSocket-Accept: hash
```

- `hash`
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}}-Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen, die Zeichenfolge "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" daran angehängt wird, der [SHA-1](https://en.wikipedia.org/wiki/SHA-1) Hash dieser verketteten Zeichenkette genommen wird, was zu einem 20-Byte-Wert führt. Dieser Wert wird dann {{Glossary("Base64", "base64")}} codiert, um den Wert dieses Attributs zu erhalten.

## Spezifikationen

{{specifications}}

## Siehe auch

- [WebSocket-API](/de/docs/Web/API/WebSocket)
- [Entwicklung von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
