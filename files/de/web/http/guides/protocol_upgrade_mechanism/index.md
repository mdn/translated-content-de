---
title: Mechanismus zur Protokollaktualisierung
slug: Web/HTTP/Guides/Protocol_upgrade_mechanism
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

Das [HTTP/1.1-Protokoll](/de/docs/Web/HTTP) bietet einen speziellen Mechanismus, der verwendet werden kann, um eine bereits bestehende Verbindung auf ein anderes Protokoll zu upgraden, indem das {{HTTPHeader("Upgrade")}}-Headerfeld genutzt wird.

Dieser Mechanismus ist optional; er kann nicht verwendet werden, um auf einem Protokollwechsel zu bestehen. Implementierungen können sich dafür entscheiden, kein Upgrade zu nutzen, selbst wenn sie das neue Protokoll unterstützen. In der Praxis wird dieser Mechanismus hauptsächlich verwendet, um eine WebSockets-Verbindung zu starten.

Beachten Sie auch, dass HTTP/2 die Verwendung dieses Mechanismus ausdrücklich verbietet; er ist HTTP/1.1 vorbehalten.

## Upgrade von HTTP/1.1-Verbindungen

Das {{HTTPHeader("Upgrade")}}-Headerfeld wird von Clients verwendet, um den Server einzuladen, auf eines der aufgelisteten Protokolle in absteigender Präferenzreihenfolge umzuschalten.

Da `Upgrade` ein hop-by-hop-Header ist, muss er auch im {{HTTPHeader("Connection")}}-Headerfeld aufgeführt werden. Dies bedeutet, dass eine typische Anfrage, die ein Upgrade enthält, folgendermaßen aussehen könnte:

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

Je nach dem angeforderten Protokoll können weitere Header erforderlich sein; zum Beispiel erlauben WebSocket-Upgrades zusätzliche Header, um Details zur WebSocket-Verbindung zu konfigurieren sowie ein gewisses Maß an Sicherheit beim Öffnen der Verbindung zu bieten. Weitere Informationen finden Sie unter [Upgraden zu einer WebSocket-Verbindung](#upgrade_zu_einer_websocket-verbindung).

Wenn der Server entscheidet, die Verbindung zu upgraden, sendet er einen {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus mit einem Upgrade-Header zurück, der das Protokoll bzw. die Protokolle angibt, auf die gewechselt wird. Wenn er die Verbindung nicht upgraden kann oder möchte, ignoriert er den `Upgrade`-Header und sendet eine normale Antwort zurück (zum Beispiel ein {{HTTPStatus(200, "200 OK")}}).

Unmittelbar nach dem Senden des `101`-Statuscodes kann der Server das neue Protokoll sprechen, indem er gegebenenfalls zusätzliche protokollspezifische Handshakes durchführt. Effektiv wird die Verbindung zu einer Zweiwege-Kommunikationsleitung, sobald die Upgrade-Antwort abgeschlossen ist, und die Anfrage, die das Upgrade initiiert hat, kann über das neue Protokoll abgeschlossen werden.

## Häufige Verwendungen dieses Mechanismus

Hier betrachten wir die häufigsten Anwendungsfälle für den {{HTTPHeader("Upgrade")}}-Header.

### Upgrade zu einer WebSocket-Verbindung

Der bei weitem häufigste Anwendungsfall für das Upgraden einer HTTP-Verbindung ist die Verwendung von WebSockets, die immer durch Upgraden einer HTTP- oder HTTPS-Verbindung implementiert werden. Beachten Sie, dass, wenn Sie eine neue Verbindung mit der [WebSocket-API](/de/docs/Web/API/WebSocket) oder einer beliebigen Bibliothek eröffnen, die WebSockets verwendet, die meisten oder alle Schritte dafür für Sie durchgeführt werden. Das Öffnen einer WebSocket-Verbindung ist zum Beispiel eine einzelne Methode:

```js
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

Der [`WebSocket()`](/de/docs/Web/API/WebSocket/WebSocket)-Konstruktor übernimmt die gesamte Arbeit des Erstellens einer initialen HTTP/1.1-Verbindung, des Handlings des Handshakes und des Upgrade-Prozesses für Sie.

> [!NOTE]
> Sie können auch das URL-Schema `"wss://"` verwenden, um eine sichere WebSocket-Verbindung zu öffnen.

Wenn Sie eine WebSocket-Verbindung von Grund auf neu erstellen müssen, müssen Sie den Handshake-Prozess selbst übernehmen. Nach dem Erstellen der initialen HTTP/1.1-Sitzung müssen Sie das Upgrade anfordern, indem Sie zu einer Standardanfrage die {{HTTPHeader("Upgrade")}}- und {{HTTPHeader("Connection")}}-Header hinzufügen, wie folgt:

```http
Connection: Upgrade
Upgrade: websocket
```

### WebSocket-spezifische Header

Die folgenden Header sind im WebSocket-Upgrade-Prozess involviert. Abgesehen von den {{HTTPHeader("Upgrade")}}- und {{HTTPHeader("Connection")}}-Headern sind die restlichen in der Regel optional oder werden für Sie vom Browser und Server, wenn sie miteinander kommunizieren, übernommen.

#### {{HTTPHeader("Sec-WebSocket-Extensions")}}

Gibt eine oder mehrere Protokollstufen-WebSocket-Erweiterungen an, die der Server verwenden soll. Die Verwendung mehrerer `Sec-WebSocket-Extension`-Header in einer Anfrage ist erlaubt; das Ergebnis ist das gleiche, als ob Sie alle aufgelisteten Erweiterungen in einem solchen Header eingeschlossen hätten.

```http
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : Eine kommagetrennte Liste von Erweiterungen, die angefordert (oder deren Unterstützung akzeptiert) werden. Diese sollten aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden. Erweiterungen, die Parameter verwenden, tun dies durch die Verwendung von Semikolonskuelungen.

Zum Beispiel zeigt dieser Header zwei benutzerdefinierte Erweiterungen an: `superspeed` und `colormode` (die zusätzlich den Parameter `depth=16` hat):

```http
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

#### {{HTTPHeader("Sec-WebSocket-Key")}}

Stellt dem Server Informationen zur Verfügung, die benötigt werden, um zu bestätigen, dass der Client berechtigt ist, ein Upgrade auf WebSocket anzufordern. Dieser Header kann verwendet werden, wenn unsichere (HTTP)-Clients ein Upgrade wünschen, um einen gewissen Schutz gegen Missbrauch zu bieten. Der Wert des Schlüssels wird mithilfe eines im WebSocket-Spezifikation definierten Algorithmus berechnet, daher _bietet er keine Sicherheit_. Stattdessen hilft er, zu verhindern, dass Nicht-WebSocket-Clients unbeabsichtigt oder durch Missbrauch eine WebSocket-Verbindung anfordern. Im Wesentlichen bestätigt dieser Schlüssel: "Ja, ich möchte wirklich eine WebSocket-Verbindung öffnen."

Dieser Header wird automatisch von Clients hinzugefügt, die sich entscheiden, ihn zu verwenden; er kann nicht mit den Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

```http
Sec-WebSocket-Key: key
```

- `key`
  - : Der Schlüssel für diese Anfrage zum Upgrade. Der Client fügt dies hinzu, wenn er es wünscht, und der Server wird in der Antwort einen eigenen Schlüssel enthalten, den der Client validiert, bevor er das Upgrade an Sie ausliefert.

Der {{HTTPHeader("Sec-WebSocket-Accept")}}-Header in der Serverantwort wird einen Wert enthalten, der basierend auf dem spezifizierten `key` berechnet wurde.

#### {{HTTPHeader("Sec-WebSocket-Protocol")}}

Der `Sec-WebSocket-Protocol`-Header spezifiziert eines oder mehrere WebSocket-Protokolle, die Sie in Präferenzreihenfolge verwenden möchten. Das erste, das vom Server unterstützt wird, wird ausgewählt und vom Server in einem `Sec-WebSocket-Protocol`-Header in der Antwort zurückgegeben. Sie können dies auch mehrmals im Header verwenden; das Ergebnis entspricht dem, als ob Sie eine kommagetrennte Liste von Subprotokoll-Bezeichnern in einem einzelnen Header verwendeten.

```http
Sec-WebSocket-Protocol: subprotocols
```

- `subprotocols`
  - : Eine kommagetrennte Liste von Subprotokollnamen in der Reihenfolge der Präferenz. Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder ein benutzerdefinierter Name sein, der vom Client und Server gemeinsam verstanden wird.

#### {{HTTPHeader("Sec-WebSocket-Version")}}

##### Anfrage-Header

Gibt die WebSocket-Protokollversion an, die der Client verwenden möchte, damit der Server bestätigen kann, ob diese Version von seiner Seite aus unterstützt wird.

```http
Sec-WebSocket-Version: version
```

- `version`
  - : Die WebSocket-Protokollversion, die der Client verwenden möchte, wenn er mit dem Server kommuniziert. Diese Nummer sollte die neueste mögliche Version sein, die im [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) aufgeführt ist. Die neueste endgültige Version des WebSocket-Protokolls ist Version 13.

##### Antwort-Header

Wenn der Server nicht mit der angegebenen Version des WebSocket-Protokolls kommunizieren kann, wird er mit einem Fehler (zum Beispiel 426 Upgrade Required) antworten, der in seinen Headern einen `Sec-WebSocket-Version`-Header mit einer kommagetrennten Liste der unterstützten Protokollversionen enthält. Wenn der Server die angeforderte Protokollversion unterstützt, ist im Antwortheader kein `Sec-WebSocket-Version`-Header enthalten.

```http
Sec-WebSocket-Version: supportedVersions
```

- `supportedVersions`
  - : Eine kommagetrennte Liste der von dem Server unterstützten WebSocket-Protokollversionen.

### Nur-Antwort-Header

Die Antwort vom Server kann diese enthalten.

#### {{HTTPHeader("Sec-WebSocket-Accept")}}

Wird in der Antwortnachricht vom Server während des Eröffnungshandshake-Prozesses enthalten sein, wenn der Server bereit ist, eine WebSocket-Verbindung zu initiieren. Es wird höchstens einmal in den Antwortheadern auftauchen.

```http
Sec-WebSocket-Accept: hash
```

- `hash`
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}}-Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen wird, die Zeichenfolge "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" damit verkettet wird und der [SHA-1](https://en.wikipedia.org/wiki/SHA-1)-Hash dieser verketteten Zeichenfolge genommen wird, was zu einem 20-Byte-Wert führt. Dieser Wert wird dann {{Glossary("Base64", "base64")}} kodiert, um den Wert dieser Eigenschaft zu erhalten.

## Spezifikationen

{{specifications}}

## Siehe auch

- [WebSocket API](/de/docs/Web/API/WebSocket)
- [Evolution von HTTP](/de/docs/Web/HTTP/Guides/Evolution_of_HTTP)
- Glossarbegriffe:
  - {{Glossary("HTTP", "HTTP")}}
  - {{Glossary("HTTP_2", "HTTP/2")}}
  - {{Glossary("QUIC", "QUIC")}}
