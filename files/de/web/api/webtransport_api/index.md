---
title: WebTransport API
slug: Web/API/WebTransport_API
l10n:
  sourceCommit: 0323d4059df0e5645b22afbc32c2d343660e01c6
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **WebTransport API** bietet ein modernes Update zu [WebSockets](/de/docs/Web/API/WebSockets_API) und überträgt Daten zwischen Client und Server unter Verwendung von [HTTP/3 Transport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/). WebTransport unterstützt mehrere Streams, unidirektionale Streams und die Lieferung in beliebiger Reihenfolge. Sie ermöglicht den zuverlässigen Transport über [Streams](/de/docs/Web/API/Streams_API) und unzuverlässigen Transport über UDP-ähnliche Datagramme.

## Konzepte und Verwendung

[HTTP/3](https://de.wikipedia.org/wiki/HTTP/3) ist seit 2018 in Arbeit. Es basiert auf dem von Google entwickelten {{Glossary("QUIC", "QUIC")}}-Protokoll (das selbst auf UDP basiert) und behebt mehrere Probleme des klassischen TCP-Protokolls, auf dem HTTP und WebSockets basieren.

Dazu gehören:

- **{{Glossary("head_of_line_blocking", "Head-of-line blocking")}}**
  - : HTTP/2 erlaubt Multiplexing, sodass eine einzelne Verbindung mehrere Ressourcen gleichzeitig streamen kann. Wenn jedoch eine einzelne Ressource fehlschlägt, werden alle anderen Ressourcen dieser Verbindung zurückgehalten, bis fehlende Pakete erneut übertragen werden. Bei QUIC wird nur die fehlerhafte Ressource beeinflusst.
- **Schnellere Leistung**
  - : QUIC ist in vielerlei Hinsicht leistungsfähiger als TCP. Es kann Sicherheitsfunktionen selbst verwalten, anstatt die Verantwortung an andere Protokolle wie TLS zu übergeben, was weniger Round-Trips bedeutet. Und Streams bieten bessere Transporteffizienz als der ältere Paketmechanismus. Das kann einen erheblichen Unterschied machen, insbesondere in Hochlatenz-Netzwerken.
- **Bessere Netzwerkübergänge**
  - : QUIC verwendet eine einzigartige Verbindungs-ID, um die Quelle und das Ziel jeder Anfrage zu verwalten - um sicherzustellen, dass Pakete korrekt zugestellt werden. Diese ID kann zwischen verschiedenen Netzwerken bestehen bleiben, was bedeutet, dass ein Download zum Beispiel fortgesetzt werden kann, ohne unterbrochen zu werden, wenn Sie von einem Wi-Fi- zu einem Mobilnetzwerk wechseln. HTTP/2 hingegen verwendet IP-Adressen als Bezeichner, sodass Netzwerkübergänge problematisch sein können.
- **Unzuverlässiger Transport**
  - : HTTP/3 unterstützt die unzuverlässige Datenübertragung über Datagramme.

Die WebTransport API bietet einen Low-Level-Zugang zu einer bidirektionalen Kommunikation über HTTP/3, nutzt die oben genannten Vorteile und unterstützt sowohl zuverlässige als auch unzuverlässige Datenübertragung.

### Initiale Verbindung

Um eine Verbindung zu einem HTTP/3-Server herzustellen, übergeben Sie seine URL an den [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)-Konstruktor. Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss. Sobald das Versprechen [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt ist, können Sie die Verbindung nutzen.

Außerdem können Sie auf das Schließen der Verbindung reagieren, indem Sie auf das Erfüllen des Versprechens [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) warten. Fehler, die durch WebTransport-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten über den Standard-Datensatz [`DOMException`](/de/docs/Web/API/DOMException) hinaus.

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
Der Server kann dann während der Verbindungsherstellung eines dieser Protokolle auswählen.

Sobald das Versprechen [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt ist, ist das ausgehandelte Protokoll (falls vorhanden) über die Eigenschaft [`WebTransport.protocol`](/de/docs/Web/API/WebTransport/protocol) verfügbar.
Dies ist der leere String, wenn `protocols` nicht verwendet wurde oder der Server keines der angebotenen Protokolle ausgewählt hat.
Ein Server, der keines der angebotenen Protokolle unterstützt, kann stattdessen die Verbindung ablehnen, wodurch `ready` zurückgewiesen wird.

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

„Unzuverlässig“ bedeutet, dass die Übertragung von Daten nicht garantiert wird, noch ihre Ankunft in einer bestimmten Reihenfolge. Dies ist in manchen Situationen in Ordnung und liefert sehr schnelle Ergebnisse. Zum Beispiel könnten Sie regelmäßige Aktualisierungen des Spielstatus übertragen wollen, bei denen jede Nachricht die letzte, die ankommt, überschreibt und die Reihenfolge nicht wichtig ist.

Die unzuverlässige Datenübertragung wird über die Eigenschaft [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams) gehandhabt — dies gibt ein [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Objekt zurück, das alles enthält, was Sie benötigen, um Datagramme an den Server zu senden und zurück zu empfangen.

Die Eigenschaft [`WebTransportDatagramDuplexStream.writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurück, in das Sie Daten zum Senden an den Server schreiben können:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

Die Eigenschaft [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, das Sie verwenden können, um Daten vom Server zu empfangen:

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

„Zuverlässig“ bedeutet, dass Übertragung und Reihenfolge der Daten garantiert sind. Dies bietet eine langsamere Lieferung (wenngleich schneller als mit WebSockets) und ist in Situationen erforderlich, in denen Zuverlässigkeit und Reihenfolge wichtig sind (wie beispielsweise bei Chat-Anwendungen).

Bei der Verwendung von zuverlässiger Übertragung über Streams können Sie außerdem die relative Priorität verschiedener Streams über den gleichen Transport festlegen.

### Unidirektionale Übertragung

Um einen unidirektionalen Stream von einem User-Agent zu öffnen, verwenden Sie die Methode [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), um eine Referenz zu einem [`WritableStream`](/de/docs/Web/API/WritableStream) zu erhalten. Von diesem aus können Sie [einen Writer erhalten](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

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

Beachten Sie auch die Nutzung der Methode [`WritableStreamDefaultWriter.close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close), um die zugehörige HTTP/3-Verbindung zu schließen, sobald alle Daten gesendet wurden.

Wenn der Server einen unidirektionalen Stream öffnet, um Daten an den Client zu übertragen, kann dieser auf dem Client über die Eigenschaft [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurückgibt. Diese können verwendet werden, um {{jsxref("Uint8Array")}}-Instanzen zu lesen, die vom Server gesendet werden.

In diesem Fall ist der erste Schritt, eine Funktion einzurichten, um einen `WebTransportReceiveStream` zu lesen. Diese Objekte erben von der `ReadableStream`-Klasse, sodass sie auf die gleiche Weise verwendet werden können:

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

Als nächstes rufen Sie [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) auf und erhalten eine Referenz auf den Leser, der auf dem `ReadableStream`, den es zurückgibt, verfügbar ist, und verwenden dann den Leser, um die Daten vom Server zu lesen. Jeder Chunk ist ein `WebTransportReceiveStream` und wir nutzen das zuvor eingerichtete `readFrom()`, um sie zu lesen:

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

Um einen bidirektionalen Stream von einem User-Agent zu öffnen, verwenden Sie die Methode [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream), um eine Referenz zu einem [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) zu erhalten.
Dieses enthält `readable` und `writable` Eigenschaften, die Referenzen zu `WebTransportReceiveStream` und `WebTransportSendStream` Instanzen zurückgeben, die verwendet werden können, um Daten vom und zum Server zu lesen und zu schreiben.

> [!NOTE]
> `WebTransportBidirectionalStream` ist ähnlich wie [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream), außer dass in dieser Schnittstelle die Eigenschaften `readable` und `writable` `ReadableStream` und `WritableStream` sind.

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

Lesen vom `WebTransportReceiveStream` kann dann wie folgt durchgeführt werden:

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

Und das Schreiben in den `WebTransportSendStream` kann so gemacht werden:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

Wenn der Server einen bidirektionalen Stream öffnet, um Daten zu übertragen und vom Client zu empfangen, kann darauf über die Eigenschaft [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) zugegriffen werden, die einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportBidirectionalStream`-Objekten zurückgibt. Jede kann verwendet werden, um {{jsxref("Uint8Array")}}-Instanzen wie oben gezeigt zu lesen und zu schreiben. Allerdings benötigen Sie, wie im unidirektionalen Beispiel, eine anfängliche Funktion, um den bidirektionalen Stream zunächst zu lesen:

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
  - : Bietet Funktionalität, um einem User-Agent zu ermöglichen, eine Verbindung zu einem HTTP/3-Server herzustellen, zuverlässige und unzuverlässige Transporte in eine oder beide Richtungen zu initiieren und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.
- [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)
  - : Stellt einen bidirektionalen Stream dar, der von einem Server oder Client erstellt wurde, der für den zuverlässigen Transport verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) für das Lesen eingehender Daten und einen [`WritableStream`](/de/docs/Web/API/WritableStream) für das Schreiben ausgehender Daten.
- [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)
  - : Stellt einen Duplex-Stream dar, der für den unzuverlässigen Transport von Datagrammen zwischen Client und Server verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) für das Lesen eingehender Datagramme, einen [`WritableStream`](/de/docs/Web/API/WritableStream) für das Schreiben ausgehender Datagramme sowie verschiedene Einstellungen und Statistiken, die den Stream betreffen.
- [`WebTransportError`](/de/docs/Web/API/WebTransportError)
  - : Stellt einen Fehler dar, der mit der WebTransport API verbunden ist und durch Serverfehler, Netzwerkverbindungsprobleme oder vom Client initiierte Abbruchvorgänge (zum Beispiel durch einen Aufruf von [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort)) hervorgerufen werden kann.
- [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)
  - : Bietet Streaming-Features für einen eingehenden unidirektionalen oder bidirektionalen WebTransport-Stream des [`WebTransport`](/de/docs/Web/API/WebTransport).
- [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)
  - : Bietet Streaming-Features für einen ausgehenden unidirektionalen oder bidirektionalen WebTransport-Stream des [`WebTransport`](/de/docs/Web/API/WebTransport).

## Beispiele

Für vollständige Beispiele siehe:

- [WebTransport über HTTP/3 Client](https://webtransport.day/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
