---
title: Mechanismus zum Protokollwechsel
slug: Web/HTTP/Protocol_upgrade_mechanism
l10n:
  sourceCommit: ef46a4ac6bfec3e33c9209244e7cb1a9206165d6
---

{{HTTPSidebar}}

Das [HTTP/1.1-Protokoll](/de/docs/Web/HTTP) bietet einen speziellen Mechanismus, der verwendet werden kann, um eine bereits etablierte Verbindung auf ein anderes Protokoll umzustellen, indem das {{HTTPHeader("Upgrade")}}-Header-Feld genutzt wird.

Dieser Mechanismus ist optional; er kann nicht verwendet werden, um auf einen Protokollwechsel zu bestehen. Implementierungen können sich dafür entscheiden, kein Upgrade zu nutzen, selbst wenn sie das neue Protokoll unterstützen, und in der Praxis wird dieser Mechanismus hauptsächlich verwendet, um eine WebSocket-Verbindung zu starten.

Beachten Sie auch, dass HTTP/2 die Verwendung dieses Mechanismus ausdrücklich verbietet; er ist spezifisch für HTTP/1.1.

## Upgraden von HTTP/1.1-Verbindungen

Das {{HTTPHeader("Upgrade")}}-Header-Feld wird von Clients verwendet, um den Server einzuladen, zu einem der aufgelisteten Protokolle zu wechseln, in absteigender Präferenz.

Da `Upgrade` ein Hop-by-Hop-Header ist, muss es auch im {{HTTPHeader("Connection")}}-Header-Feld aufgeführt werden. Dies bedeutet, dass eine typische Anfrage, die ein Upgrade enthält, folgendermaßen aussieht:

```http
GET /index.html HTTP/1.1
Host: www.example.com
Connection: upgrade
Upgrade: example/1, foo/2
```

Andere Header können je nach angefordertem Protokoll erforderlich sein; zum Beispiel ermöglichen WebSocket-Upgrades zusätzliche Header, um Details zur WebSocket-Verbindung zu konfigurieren und ein gewisses Maß an Sicherheit beim Öffnen der Verbindung bereitzustellen. Weitere Einzelheiten finden Sie unter [Upgrade zu einer WebSocket-Verbindung](#upgrade_zu_einer_websocket-verbindung).

Wenn der Server beschließt, die Verbindung zu upgraden, sendet er einen {{HTTPStatus(101, "101 Switching Protocols")}}-Antwortstatus mit einem Upgrade-Header zurück, der das oder die Protokolle angibt, zu denen gewechselt wird. Wenn der Server dies nicht tut (oder nicht tun kann), ignoriert er den `Upgrade`-Header und sendet eine reguläre Antwort zurück (zum Beispiel ein {{HTTPStatus(200, "200 OK")}}).

Unmittelbar nach dem Senden des `101`-Statuscodes kann der Server mit dem neuen Protokoll kommunizieren und gegebenenfalls zusätzliche protokollspezifische Handshakes durchführen. Effektiv wird die Verbindung zu einer Zwei-Wege-Leitung, sobald die Upgraded-Antwort abgeschlossen ist, und die Anfrage, die das Upgrade initiiert hat, kann über das neue Protokoll abgeschlossen werden.

## Häufige Verwendungen für diesen Mechanismus

Hier betrachten wir die häufigsten Anwendungsfälle für den {{HTTPHeader("Upgrade")}}-Header.

### Upgrade zu einer WebSocket-Verbindung

Bei weitem der häufigste Anwendungsfall für das Upgrade einer HTTP-Verbindung ist die Verwendung von WebSockets, die immer durch das Upgrade einer HTTP- oder HTTPS-Verbindung implementiert werden. Beachten Sie, dass, wenn Sie eine neue Verbindung mit der [WebSocket-API](/de/docs/Web/API/WebSocket) oder einer beliebigen Bibliothek, die WebSockets verwendet, öffnen, die meisten oder alle dieser Schritte für Sie erledigt werden. Zum Beispiel ist das Öffnen einer WebSocket-Verbindung so einfach wie:

```js
webSocket = new WebSocket("ws://destination.server.ext", "optionalProtocol");
```

Der [`WebSocket()`](/de/docs/Web/API/WebSocket/WebSocket)-Konstruktor erledigt die gesamte Arbeit, um eine anfängliche HTTP/1.1-Verbindung zu erstellen und dann den Handshake und den Upgrade-Prozess für Sie durchzuführen.

> [!NOTE]
> Sie können auch das URL-Schema `"wss://"` verwenden, um eine sichere WebSocket-Verbindung zu öffnen.

Wenn Sie eine WebSocket-Verbindung von Grund auf neu erstellen müssen, müssen Sie den Handshake-Prozess selbst durchführen. Nachdem Sie die anfängliche HTTP/1.1-Sitzung erstellt haben, müssen Sie das Upgrade anfordern, indem Sie den {{HTTPHeader("Upgrade")}}- und {{HTTPHeader("Connection")}}-Header zu einer Standardanforderung hinzufügen, wie folgt:

```http
Connection: Upgrade
Upgrade: websocket
```

### WebSocket-spezifische Header

Die folgenden Header sind am WebSocket-Upgrade-Prozess beteiligt. Abgesehen von den {{HTTPHeader("Upgrade")}}- und {{HTTPHeader("Connection")}}-Headern sind die restlichen im Allgemeinen optional oder werden vom Browser und Server für Sie gehandhabt, wenn diese miteinander kommunizieren.

#### {{HTTPHeader("Sec-WebSocket-Extensions")}}

Bezeichnet eine oder mehrere Protokoll-Erweiterungen auf WebSocket-Ebene, die der Server verwenden soll. Die Verwendung von mehr als einem `Sec-WebSocket-Extension`-Header in einer Anfrage ist zulässig; das Ergebnis ist dasselbe, als ob Sie alle aufgeführten Erweiterungen in einem solchen Header eingetragen hätten.

```http
Sec-WebSocket-Extensions: extensions
```

- `extensions`
  - : Eine durch Kommata getrennte Liste von Erweiterungen, die angefordert werden (oder zu deren Unterstützung Sie sich bereit erklären). Diese sollten aus dem [IANA WebSocket Extension Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#extension-name) ausgewählt werden. Erweiterungen, die Parameter verwenden, tun dies durch die Verwendung von Semikolon-Trennung.

Zum Beispiel:

```http
Sec-WebSocket-Extensions: superspeed, colormode; depth=16
```

#### {{HTTPHeader("Sec-WebSocket-Key")}}

Liefert dem Server Informationen, die benötigt werden, um zu bestätigen, dass der Client berechtigt ist, ein Upgrade zu WebSocket anzufordern. Dieser Header kann verwendet werden, wenn unsichere (HTTP) Clients ein Upgrade durchführen möchten, um einen gewissen Schutz vor Missbrauch zu bieten. Der Wert des Schlüssels wird mithilfe eines im WebSocket-Spezifikation definierten Algorithmus berechnet, sodass dies _keine Sicherheit bietet_. Stattdessen hilft es zu verhindern, dass Nicht-WebSocket-Clients versehentlich oder durch Missbrauch eine WebSocket-Verbindung anfordern. Im Wesentlichen bestätigt dieser Schlüssel also: "Ja, ich möchte wirklich eine WebSocket-Verbindung öffnen."

Dieser Header wird automatisch von Clients hinzugefügt, die ihn nutzen möchten; er kann nicht mittels der Methoden [`fetch()`](/de/docs/Web/API/Window/fetch) oder [`XMLHttpRequest.setRequestHeader()`](/de/docs/Web/API/XMLHttpRequest/setRequestHeader) hinzugefügt werden.

```http
Sec-WebSocket-Key: key
```

- `key`
  - : Der Schlüssel für diese Upgrade-Anforderung. Der Client fügt diesen hinzu, wenn er dies wünscht, und der Server wird in der Antwort einen eigenen Schlüssel einfügen, den der Client validieren wird, bevor er die Upgrade-Antwort an Sie liefert.

Der {{HTTPHeader("Sec-WebSocket-Accept")}}-Header der Antwort des Servers wird einen Wert haben, der auf dem angegebenen `key` basiert.

#### {{HTTPHeader("Sec-WebSocket-Protocol")}}

Der `Sec-WebSocket-Protocol`-Header gibt ein oder mehrere WebSocket-Protokolle an, die Sie verwenden möchten, in der Reihenfolge der Präferenz. Das erste, das vom Server unterstützt wird, wird ausgewählt und vom Server in einem `Sec-WebSocket-Protocol`-Header in der Antwort zurückgegeben. Sie können diesen Header auch mehrmals verwenden; das Ergebnis ist dasselbe, als wenn Sie eine durch Kommata getrennte Liste von Subprotokollkennungen in einem einzelnen Header verwendet hätten.

```http
Sec-WebSocket-Protocol: subprotocols
```

- `subprotocols`
  - : Eine durch Kommata getrennte Liste von Subprotokollnamen, in der Reihenfolge der Präferenz. Die Subprotokolle können aus dem [IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) ausgewählt werden oder einen benutzerdefinierten Namen darstellen, der vom Client und Server gemeinsam verstanden wird.

#### {{HTTPHeader("Sec-WebSocket-Version")}}

##### Anfrage-Header

Gibt die WebSocket-Protokollversion an, die der Client verwenden möchte, damit der Server bestätigen kann, ob diese Version von seiner Seite unterstützt wird.

```http
Sec-WebSocket-Version: version
```

- `version`
  - : Die WebSocket-Protokollversion, die der Client bei der Kommunikation mit dem Server verwenden möchte. Diese Zahl sollte die aktuellste mögliche Version sein, die im [IANA WebSocket Version Number Registry](https://www.iana.org/assignments/websocket/websocket.xml#version-number) aufgeführt ist. Die aktuellste endgültige Version des WebSocket-Protokolls ist Version 13.

##### Antwort-Header

Wenn der Server nicht mit der angegebenen Version des WebSocket-Protokolls kommunizieren kann, antwortet er mit einem Fehler (wie z.B. 426 Upgrade Required), der in seinen Headern einen `Sec-WebSocket-Version`-Header mit einer durch Kommata getrennten Liste der unterstützten Protokollversionen enthält. Wenn der Server die angeforderte Protokollversion unterstützt, enthält die Antwort keinen `Sec-WebSocket-Version`-Header.

```http
Sec-WebSocket-Version: supportedVersions
```

- `supportedVersions`
  - : Eine durch Kommata getrennte Liste der WebSocket-Protokollversionen, die vom Server unterstützt werden.

### Antwort-Only-Header

Die Antwort vom Server kann diese enthalten.

#### {{HTTPHeader("Sec-WebSocket-Accept")}}

Wird in der Antwortnachricht des Servers während des Eröffnungs-Handshakes-Prozesses enthalten, wenn der Server bereit ist, eine WebSocket-Verbindung zu starten. Es wird nicht mehr als einmal in den Antwort-Headern erscheinen.

```http
Sec-WebSocket-Accept: hash
```

- `hash`
  - : Wenn ein {{HTTPHeader("Sec-WebSocket-Key")}}-Header bereitgestellt wurde, wird der Wert dieses Headers berechnet, indem der Wert des Schlüssels genommen, die Zeichenkette "258EAFA5-E914-47DA-95CA-C5AB0DC85B11" daran angehängt, der [SHA-1](https://en.wikipedia.org/wiki/SHA-1)-Hash dieser zusammengefügten Zeichenkette genommen wird, was zu einem 20-Byte-Wert führt. Dieser Wert wird dann [base64](/de/docs/Glossary/Base64) kodiert, um den Wert dieser Eigenschaft zu erhalten.

## Referenzen

- [WebSocket API](/de/docs/Web/API/WebSocket)
- [HTTP](/de/docs/Web/HTTP)
- Spezifikationen und RFCs:

  - {{RFC(7230)}}
  - {{RFC(6455)}}
  - {{RFC(7540)}}
