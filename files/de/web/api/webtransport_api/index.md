---
title: WebTransport API
slug: Web/API/WebTransport_API
l10n:
  sourceCommit: 8413520d9fd826c98db89ff8165408139635d454
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **WebTransport-API** bietet eine moderne Aktualisierung der [WebSockets](/de/docs/Web/API/WebSockets_API), um Daten zwischen Client und Server über [HTTP/3 Transport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/) zu übertragen. WebTransport unterstützt mehrere Streams, unidirektionale Streams und eine nicht-sequenzielle Lieferung. Es ermöglicht einen zuverlässigen Transport über [Streams](/de/docs/Web/API/Streams_API) und einen unzuverlässigen Transport über UDP-ähnliche Datagramme.

## Konzepte und Nutzung

[HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) ist seit 2018 in Entwicklung. Es basiert auf dem QUIC-Protokoll von Google (welches selbst auf UDP basiert) und behebt mehrere Probleme des klassischen TCP-Protokolls, auf dem HTTP und WebSockets basieren.

Diese Probleme umfassen:

- **{{Glossary("head_of_line_blocking", "Head-of-line blocking")}}**
  - : HTTP/2 ermöglicht Multiplexing, sodass eine einzige Verbindung mehrere Ressourcen gleichzeitig streamen kann. Wenn jedoch eine einzelne Ressource fehlschlägt, werden alle anderen Ressourcen auf dieser Verbindung aufgehalten, bis fehlende Pakete erneut übertragen werden. Mit QUIC ist nur die fehlschlagende Ressource betroffen.
- **Schnellere Leistung**
  - : QUIC ist in vielerlei Hinsicht performanter als TCP. QUIC kann Sicherheitsfunktionen selbst handhaben, anstatt die Verantwortung an andere Protokolle wie TLS abzugeben — was zu weniger Round-Trips führt. Und Streams bieten eine bessere Transporteffizienz als der ältere Paketmechanismus. Das kann einen erheblichen Unterschied machen, insbesondere in Netzwerken mit hoher Latenz.
- **Bessere Netzwerkübergänge**
  - : QUIC verwendet eine eindeutige Verbindungs-ID, um die Quelle und das Ziel jeder Anfrage zu verwalten und sicherzustellen, dass Pakete korrekt geliefert werden. Diese ID kann über verschiedene Netzwerke hinweg bestehen bleiben, was bedeutet, dass zum Beispiel ein Download ohne Unterbrechung fortgesetzt werden kann, wenn Sie von einem WLAN zu einem Mobilfunknetz wechseln. HTTP/2 verwendet hingegen IP-Adressen als Bezeichner, wodurch Netzwerkübergänge problematisch sein können.
- **Unzuverlässiger Transport**
  - : HTTP/3 unterstützt unzuverlässige Datenübertragung über Datagramme.

Die WebTransport-API bietet direkten Zugriff auf die bidirektionale Kommunikation über HTTP/3, nutzt die oben genannten Vorteile und unterstützt sowohl zuverlässige als auch unzuverlässige Datenübertragung.

### Erstverbindung

Um eine Verbindung zu einem HTTP/3-Server herzustellen, übergeben Sie dessen URL dem [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)-Konstruktor. Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer ausdrücklich angegeben werden muss. Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Versprechen erfüllt ist, können Sie mit der Nutzung der Verbindung beginnen.

Beachten Sie auch, dass Sie auf das Schließen der Verbindung reagieren können, indem Sie auf die Erfüllung des [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed)-Versprechens warten. Fehler, die durch WebTransport-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten über den Standard-Satz von [`DOMException`](/de/docs/Web/API/DOMException) hinaus.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  // …
}

// …

async function closeTransport(transport) {
  // Respond to connection closing
  try {
    await transport.closed;
    console.log(`The HTTP/3 connection to ${url} closed gracefully.`);
  } catch (error) {
    console.error(`The HTTP/3 connection to ${url} closed due to ${error}.`);
  }
}
```

### Aushandlung eines Anwendungsprotokolls

Ein WebTransport-Server kann mehrere Anwendungen unterstützen, die jeweils ihr eigenes „benutzerdefiniertes“ Kommunikationsprotokoll verwenden.
Um dies zu unterstützen, kann der Client eine Liste von Protokollnamen in Präferenzreihenfolge über die [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols)-Option des `WebTransport()`-Konstruktors anbieten.
Der Server kann dann während der Verbindungseinrichtung eines dieser Protokolle auswählen.

Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Versprechen erfüllt ist, ist das ausgehandelte Protokoll (falls vorhanden) über die [`WebTransport.protocol`](/de/docs/Web/API/WebTransport/protocol)-Eigenschaft verfügbar.
Dies ist der leere String, wenn `protocols` nicht verwendet wurde oder der Server keines der angebotenen Protokolle ausgewählt hat.
Ein Server, der keines der angebotenen Protokolle unterstützt, kann stattdessen die Verbindung insgesamt ablehnen, was dazu führt, dass `ready` abgelehnt wird.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  const transport = new WebTransport(url, {
    protocols: ["chat", "file-transfer"],
  });

  try {
    await transport.ready;
    console.log(transport.protocol); // e.g. "chat", or "" if none was selected
    return transport;
  } catch (error) {
    console.error(`Connection failed: ${error}`);
  }
}
```

### Unzuverlässige Übertragung über Datagramme

„Unzuverlässig“ bedeutet, dass die Übertragung von Daten nicht garantiert ist, noch deren Ankunft in einer bestimmten Reihenfolge. Dies ist in einigen Situationen in Ordnung und bietet eine sehr schnelle Lieferung. Zum Beispiel möchten Sie möglicherweise regelmäßig Spielstatus-Aktualisierungen übertragen, bei denen jede Nachricht die letzte überschreibt und die Reihenfolge nicht wichtig ist.

Die unzuverlässige Datenübertragung wird über die [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams)-Eigenschaft gehandhabt — dies gibt ein [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Objekt zurück, das alles enthält, was Sie benötigen, um Datagramme an den Server zu senden und zurück zu empfangen.

Die [`WebTransportDatagramDuplexStream.writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable)-Eigenschaft gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurück, in das Sie Daten zur Übermittlung an den Server schreiben können:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

Die [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable)-Eigenschaft gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, das Sie verwenden können, um Daten vom Server zu empfangen:

```js
async function readData() {
  const reader = transport.datagrams.readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array.
    console.log(value);
  }
}
```

### Zuverlässige Übertragung über Streams

„Zuverlässig“ bedeutet, dass die Übertragung und Reihenfolge der Daten garantiert sind. Dies bietet eine langsamere Lieferung (wenn auch schneller als bei WebSockets) und ist in Situationen erforderlich, in denen Zuverlässigkeit und Reihenfolge wichtig sind (wie z. B. bei Chat-Anwendungen).

Beim Verwenden der zuverlässigen Übertragung über Streams können Sie auch die relative Priorität verschiedener Streams über denselben Transportweg festlegen.

### Unidirektionale Übertragung

Um einen unidirektionalen Stream von einem Benutzeragenten zu öffnen, verwenden Sie die Methode [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), um eine Referenz zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Aus diesem können Sie [einen Writer erhalten](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

```js
async function writeData() {
  const stream = await transport.createUnidirectionalStream();
  const writer = stream.writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);

  try {
    await writer.close();
    console.log("All data has been sent.");
  } catch (error) {
    console.error(`An error occurred: ${error}`);
  }
}
```

Beachten Sie auch die Verwendung der Methode [`WritableStreamDefaultWriter.close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close), um die zugehörige HTTP/3-Verbindung zu schließen, sobald alle Daten gesendet wurden.

Wenn der Server einen unidirektionalen Stream öffnet, um Daten an den Client zu übertragen, kann dieser auf dem Client über die [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams)-Eigenschaft aufgerufen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurückgibt. Diese können verwendet werden, um {{jsxref("Uint8Array")}}-Instanzen zu lesen, die vom Server gesendet werden.

In diesem Fall ist das erste, was zu tun ist, eine Funktion einzurichten, um einen `WebTransportReceiveStream` zu lesen. Diese Objekte erben von der `ReadableStream`-Klasse, sodass sie auf die gleiche Weise verwendet werden können:

```js
async function readData(receiveStream) {
  const reader = receiveStream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array
    console.log(value);
  }
}
```

Rufen Sie anschließend [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) auf und erhalten Sie eine Referenz zu dem Leser, der auf dem von ihm zurückgegebenen `ReadableStream` verfügbar ist, und verwenden Sie dann den Leser, um die Daten vom Server zu lesen. Jeder Chunk ist ein `WebTransportReceiveStream`, und wir verwenden das zuvor eingerichtete `readFrom()`, um diese zu lesen:

```js
async function receiveUnidirectional() {
  const uds = transport.incomingUnidirectionalStreams;
  const reader = uds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is an instance of WebTransportReceiveStream
    await readData(value);
  }
}
```

#### Bidirektionale Übertragung

Um einen bidirektionalen Stream von einem Benutzeragenten zu öffnen, verwenden Sie die Methode [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream), um eine Referenz zu einem [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) zu erhalten.
Dieses enthält `readable`- und `writable`-Eigenschaften, die Referenzen zu `WebTransportReceiveStream`- und `WebTransportSendStream`-Instanzen enthalten, die zum Lesen und Schreiben zum bzw. vom Server verwendet werden können.

> [!NOTE]
> `WebTransportBidirectionalStream` ist ähnlich wie [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), außer dass in dieser Schnittstelle die `readable`- und `writable`-Eigenschaften `ReadableStream` und `WritableStream` sind.

```js
async function setUpBidirectional() {
  const stream = await transport.createBidirectionalStream();
  // stream is a WebTransportBidirectionalStream
  // stream.readable is a WebTransportReceiveStream
  const readable = stream.readable;
  // stream.writable is a WebTransportSendStream
  const writable = stream.writable;

  // …
}
```

Das Lesen von dem `WebTransportReceiveStream` kann dann wie folgt erfolgen:

```js
async function readData(readable) {
  const reader = readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value is a Uint8Array.
    console.log(value);
  }
}
```

Und das Schreiben in den `WebTransportSendStream` kann so erfolgen:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

Falls der Server einen bidirektionalen Stream öffnet, um Daten zum Client zu übertragen und zu empfangen, kann dieser über die [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams)-Eigenschaft aufgerufen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportBidirectionalStream`-Objekten zurückgibt. Jedes dieser Objekte kann verwendet werden, um {{jsxref("Uint8Array")}}-Instanzen wie oben gezeigt zu lesen und zu schreiben. Sie benötigen jedoch, wie im unidirektionalen Beispiel, eine Anfangsfunktion, um den bidirektionalen Stream überhaupt lesen zu können:

```js
async function receiveBidirectional() {
  const bds = transport.incomingBidirectionalStreams;
  const reader = bds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value is an instance of WebTransportBidirectionalStream
    await readData(value.readable);
    await writeData(value.writable);
  }
}
```

## Schnittstellen

- [`WebTransport`](/de/docs/Web/API/WebTransport)
  - : Bietet Funktionalitäten, die es einem Benutzeragenten ermöglichen, sich mit einem HTTP/3-Server zu verbinden, zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen zu initiieren und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.
- [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)
  - : Repräsentiert einen bidirektionalen Stream, der von einem Server oder einem Client erstellt wurde und für den zuverlässigen Transport verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Daten und einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Daten.
- [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)
  - : Repräsentiert einen Duplex-Stream, der für den unzuverlässigen Transport von Datagrammen zwischen Client und Server verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datagramme, einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datagramme und verschiedene Einstellungen und Statistiken im Zusammenhang mit dem Stream.
- [`WebTransportError`](/de/docs/Web/API/WebTransportError)
  - : Repräsentiert einen Fehler im Zusammenhang mit der WebTransport-API, der durch Serverfehler, Netzwerkverbindungsprobleme oder vom Client initiierte Abbruchvorgänge (zum Beispiel hervorgerufen durch einen Aufruf von [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)) entstehen kann.
- [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)
  - : Bietet Streaming-Funktionen für einen eingehenden unidirektionalen oder bidirektionalen WebTransport-Stream.
- [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)
  - : Bietet Streaming-Funktionen für einen ausgehenden unidirektionalen oder bidirektionalen WebTransport-Stream.

## Beispiele

Für vollständige Beispiele siehe:

- [WebTransport over HTTP/3 client](https://webtransport.day/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets-API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
