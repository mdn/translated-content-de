---
title: WebTransport API
slug: Web/API/WebTransport_API
l10n:
  sourceCommit: 9fac65196ac2b9a26afabbcb7f14fd58621916ae
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **WebTransport API** bietet eine moderne Weiterentwicklung von [WebSockets](/de/docs/Web/API/WebSockets_API), die Daten zwischen Client und Server über [HTTP/3 Transport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/) überträgt. WebTransport unterstützt mehrere Streams, unidirektionale Streams und die Übermittlung außerhalb der Reihenfolge. Sie ermöglicht zuverlässigen Transport über [Streams](/de/docs/Web/API/Streams_API) und unzuverlässigen Transport über UDP-ähnliche Datagramme.

## Konzepte und Verwendung

[HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) wurde 2022 nach mehreren Jahren Entwicklung standardisiert.
Es basiert auf dem {{Glossary("QUIC", "QUIC")}}-Protokoll (das seinerseits auf UDP basiert und 2021 standardisiert wurde) und behebt mehrere Probleme des klassischen TCP-Protokolls, auf dem HTTP und WebSockets basieren.

Dazu gehören:

- **{{Glossary("head_of_line_blocking", "Head-of-line blocking")}}**
  - : HTTP/2 ermöglicht Multiplexing, sodass eine einzelne Verbindung mehrere Ressourcen gleichzeitig streamen kann. Wenn jedoch eine einzelne Ressource fehlschlägt, werden alle anderen Ressourcen auf dieser Verbindung aufgehalten, bis fehlende Pakete erneut übertragen wurden. Mit QUIC ist nur die fehlschlagende Ressource betroffen.
- **Schnellere Leistung**
  - : QUIC ist TCP in vielerlei Hinsicht leistungsfähiger. QUIC kann Sicherheitsfunktionen selbst handhaben, anstatt die Verantwortung an andere Protokolle wie TLS zu übergeben — was weniger Roundtrips bedeutet. Und Streams bieten eine bessere Transporteffizienz als der ältere Paketmechanismus. Das kann insbesondere in Netzwerken mit hoher Latenz einen erheblichen Unterschied ausmachen.
- **Bessere Netzwerkübergänge**
  - : QUIC verwendet eine eindeutige Verbindungs-ID, um Quelle und Ziel jeder Anfrage zu handhaben — und sicherzustellen, dass Pakete korrekt zugestellt werden. Diese ID kann zwischen verschiedenen Netzwerken bestehen bleiben, was bedeutet, dass beispielsweise ein Download fortgesetzt werden kann, ohne unterbrochen zu werden, wenn Sie von Wi-Fi zu einem Mobilfunknetz wechseln. HTTP/2 hingegen verwendet IP-Adressen als Identifikatoren, sodass Netzwerkübergänge problematisch sein können.
- **Unzuverlässiger Transport**
  - : HTTP/3 unterstützt unzuverlässige Datenübertragung über Datagramme.

Die WebTransport API bietet Low-Level-Zugriff auf bidirektionale Kommunikation über HTTP/3, nutzt die oben genannten Vorteile und unterstützt sowohl zuverlässige als auch unzuverlässige Datenübertragung.

### Anfängliche Verbindung

Um eine Verbindung zu einem HTTP/3-Server zu öffnen, übergeben Sie dessen URL an den Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport). Beachten Sie, dass das Schema HTTPS sein und die Portnummer ausdrücklich angegeben werden muss. Sobald das Promise [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt ist, können Sie die Verbindung verwenden.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;

  // …
}
```

### Schließen der Verbindung

Sie können auf das Schließen der Verbindung reagieren, indem Sie darauf warten, dass das Promise [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) erfüllt wird. Von WebTransport-Operationen zurückgegebene Fehler haben den Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzlich zu den Standardinformationen von [`DOMException`](/de/docs/Web/API/DOMException) weitere Daten.

```js
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

Der Server kann auch angeben, dass er die Verbindung vor dem Schließen leeren möchte, etwa aufgrund der Verwaltung des zugrunde liegenden Transports.
Wenn dies geschieht, sollte der Client beginnen, Streams zu schließen, und eine neue Sitzung erstellen, falls er seine Arbeit fortsetzen muss.
Sie können dies mithilfe des Promise [`WebTransport.draining`](/de/docs/Web/API/WebTransport/draining) erkennen, das erfüllt wird, sobald der Server signalisiert, dass die Sitzung in den Leerungszustand übergeht:

```js
async function watchForDraining(transport) {
  // Fulfills when the server signals that the session is draining
  await transport.draining;

  console.log("The session is draining: avoid opening new streams.");
}
```

### Aushandeln eines Anwendungsprotokolls

Ein WebTransport-Server kann mehrere Anwendungen unterstützen, die jeweils ein eigenes „benutzerdefiniertes“ Kommunikationsprotokoll verwenden.
Um dies zu unterstützen, kann der Client über die Option [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols) des `WebTransport()`-Konstruktors eine Liste möglicher Protokollnamen in bevorzugter Reihenfolge anbieten.
Der Server kann dann während des Verbindungsaufbaus eines davon auswählen.

Sobald das Promise [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt ist, ist das ausgehandelte Protokoll, falls vorhanden, über die Eigenschaft [`WebTransport.protocol`](/de/docs/Web/API/WebTransport/protocol) verfügbar.
Dies ist die leere Zeichenfolge, wenn `protocols` nicht verwendet wurde oder wenn der Server keines der angebotenen Protokolle ausgewählt hat.
Ein Server, der keines der angebotenen Protokolle unterstützt, kann die Verbindung stattdessen direkt ablehnen, wodurch `ready` abgelehnt wird.

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

„Unzuverlässig“ bedeutet, dass die Übertragung von Daten nicht garantiert ist und auch nicht ihre Ankunft in einer bestimmten Reihenfolge. Dies ist in einigen Situationen ausreichend und ermöglicht eine sehr schnelle Zustellung. Beispielsweise möchten Sie möglicherweise regelmäßige Aktualisierungen des Spielzustands übertragen, bei denen jede Nachricht die zuletzt eingetroffene ersetzt und die Reihenfolge nicht wichtig ist.

Die unzuverlässige Datenübertragung wird über die Eigenschaft [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams) gehandhabt — diese gibt ein Objekt vom Typ [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) zurück, das alles enthält, was Sie benötigen, um Datagramme an den Server zu senden und sie von ihm zu empfangen.

Die Eigenschaft [`WebTransportDatagramDuplexStream.writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurück, in das Sie mithilfe eines Writers Daten zur Übertragung an den Server schreiben können:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

Die Eigenschaft [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, das Sie zum Empfangen von Daten vom Server verwenden können:

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

„Zuverlässig“ bedeutet, dass die Übertragung und die Reihenfolge der Daten garantiert sind. Dies ermöglicht eine langsamere Zustellung, wenn auch schneller als mit WebSockets, und wird in Situationen benötigt, in denen Zuverlässigkeit und Reihenfolge wichtig sind, beispielsweise in Chat-Anwendungen.

Bei der Verwendung zuverlässiger Übertragung über Streams können Sie außerdem die relative Priorität verschiedener Streams über denselben Transport festlegen.

### Unidirektionale Übertragung

Um einen unidirektionalen Stream von einem User Agent aus zu öffnen, verwenden Sie die Methode [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), um eine Referenz auf einen [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Daraus können Sie [einen Writer abrufen](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

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

Wenn der Server einen unidirektionalen Stream öffnet, um Daten an den Client zu übertragen, kann auf diesen beim Client über die Eigenschaft [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurückgibt. Diese können verwendet werden, um vom Server gesendete {{jsxref("Uint8Array")}}-Instanzen zu lesen.

In diesem Fall müssen Sie zunächst eine Funktion einrichten, um einen `WebTransportReceiveStream` zu lesen. Diese Objekte erben von der Klasse `ReadableStream` und können daher auf genau dieselbe Weise verwendet werden:

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

Rufen Sie als Nächstes [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) auf, holen Sie eine Referenz auf den Reader, der im zurückgegebenen `ReadableStream` verfügbar ist, und verwenden Sie den Reader anschließend, um die Daten vom Server zu lesen. Jeder Chunk ist ein `WebTransportReceiveStream`, und wir verwenden das zuvor eingerichtete `readFrom()`, um sie zu lesen:

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

Um einen bidirektionalen Stream von einem User Agent aus zu öffnen, verwenden Sie die Methode [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream), um eine Referenz auf einen [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) zu erhalten.
Dieser enthält die Eigenschaften `readable` und `writable`, die Referenzen auf `WebTransportReceiveStream`- bzw. `WebTransportSendStream`-Instanzen zurückgeben, die zum Lesen vom und Schreiben auf den Server verwendet werden können.

> [!NOTE]
> `WebTransportBidirectionalStream` ähnelt [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), mit der Ausnahme, dass die Eigenschaften `readable` und `writable` in dieser Schnittstelle jeweils `ReadableStream` und `WritableStream` sind.

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

Das Lesen aus dem `WebTransportReceiveStream` kann dann wie folgt erfolgen:

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

Das Schreiben in den `WebTransportSendStream` kann folgendermaßen erfolgen:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

Wenn der Server einen bidirektionalen Stream öffnet, um Daten an den Client zu übertragen und Daten von ihm zu empfangen, kann auf diesen über die Eigenschaft [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportBidirectionalStream`-Objekten zurückgibt. Jedes davon kann verwendet werden, um {{jsxref("Uint8Array")}}-Instanzen zu lesen und zu schreiben, wie oben gezeigt. Wie beim unidirektionalen Beispiel benötigen Sie jedoch zunächst eine Funktion zum Lesen des bidirektionalen Streams:

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
  - : Stellt Funktionen bereit, mit denen ein User Agent eine Verbindung zu einem HTTP/3-Server herstellen, zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen initiieren und die Verbindung schließen kann, sobald sie nicht mehr benötigt wird.
- [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)
  - : Repräsentiert einen von einem Server oder Client erstellten bidirektionalen Stream, der für zuverlässigen Transport verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Daten und einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Daten.
- [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)
  - : Repräsentiert einen Duplex-Stream, der für den unzuverlässigen Transport von Datagrammen zwischen Client und Server verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datagramme, einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datagramme sowie verschiedene Einstellungen und Statistiken zum Stream.
- [`WebTransportError`](/de/docs/Web/API/WebTransportError)
  - : Repräsentiert einen Fehler im Zusammenhang mit der WebTransport API, der durch Serverfehler, Probleme mit der Netzwerkverbindung oder vom Client initiierte Abbruchoperationen entstehen kann, beispielsweise durch einen Aufruf von [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort).
- [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)
  - : Bietet Streaming-Funktionen für einen eingehenden unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Stream.
- [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)
  - : Bietet Streaming-Funktionen für einen ausgehenden unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Stream.

## Beispiele

Vollständige Beispiele finden Sie unter:

- [WebTransport über HTTP/3-Client](https://webtransport.day/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
