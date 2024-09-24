---
title: WebTransport-API
slug: Web/API/WebTransport_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **WebTransport-API** bietet ein modernes Update zur {{domxref("WebSockets API", "WebSockets", "", "nocode")}}, indem Daten zwischen Client und Server unter Verwendung von [HTTP/3 Transport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/) übertragen werden. WebTransport unterstützt dabei mehrere Streams, unidirektionale Streams und die außergeschaltete Zustellung. Es ermöglicht zuverlässigen Transport über die {{domxref("Streams API", "streams", "", "nocode")}} und unzuverlässigen Transport über UDP-ähnliche Datagramme.

## Konzepte und Verwendung

[HTTP/3](https://de.wikipedia.org/wiki/HTTP/3) ist seit 2018 in Arbeit. Es basiert auf dem QUIC-Protokoll von Google (das seinerseits auf UDP basiert) und behebt mehrere Probleme rund um das klassische TCP-Protokoll, auf dem HTTP und WebSockets basieren.

Diese beinhalten:

- **Head-of-line Blocking**
  - : HTTP/2 erlaubt Multiplizierung, sodass eine einzige Verbindung mehrere Ressourcen gleichzeitig streamen kann. Wenn jedoch eine einzelne Ressource fehlschlägt, werden alle anderen Ressourcen dieser Verbindung aufgehalten, bis fehlende Pakete erneut übertragen werden. Mit QUIC ist nur die fehlschlagende Ressource betroffen.
- **Schnellere Leistung**
  - : QUIC ist in vielerlei Hinsicht leistungsfähiger als TCP. QUIC kann Sicherheitsfunktionen selbst verwalten, anstatt die Verantwortung an andere Protokolle wie TLS abzugeben – was weniger Round Trips bedeutet. Und Streams bieten eine bessere Transporteffizienz als der ältere Paketmechanismus. Auf Netzwerken mit hoher Latenz kann dies einen signifikanten Unterschied machen.
- **Bessere Netzwerkübergänge**
  - : QUIC verwendet eine einzigartige Verbindungs-ID, um die Quelle und das Ziel jeder Anfrage zu verwalten und sicherzustellen, dass Pakete korrekt zugestellt werden. Diese ID kann zwischen verschiedenen Netzwerken bestehen bleiben, was bedeutet, dass etwa ein Download fortgesetzt werden kann, ohne unterbrochen zu werden, wenn Sie von Wi-Fi zu einem mobilen Netzwerk wechseln. HTTP/2 hingegen verwendet IP-Adressen als Identifikatoren, daher können Netzwerkübergänge problematisch sein.
- **Unzuverlässiger Transport**
  - : HTTP/3 unterstützt unzuverlässige Datenübertragung über Datagramme.

Die WebTransport-API bietet einen Low-Level-Zugriff auf die zweiseitige Kommunikation über HTTP/3, wobei die oben genannten Vorteile genutzt werden und sowohl zuverlässige als auch unzuverlässige Datenübertragungen unterstützt werden.

### Initiale Verbindung

Um eine Verbindung zu einem HTTP/3-Server zu öffnen, übergeben Sie dessen URL dem Konstruktor {{domxref("WebTransport.WebTransport", "WebTransport()")}}. Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss. Sobald das Versprechen {{domxref("WebTransport.ready")}} erfüllt ist, können Sie die Verbindung nutzen.

Beachten Sie auch, dass Sie auf das Schließen der Verbindung reagieren können, indem Sie warten, bis das Versprechen {{domxref("WebTransport.closed")}} erfüllt ist. Fehler, die bei WebTransport-Operationen zurückgegeben werden, sind vom Typ {{domxref("WebTransportError")}} und enthalten zusätzliche Daten gegenüber dem Standard {{domxref("DOMException")}}-Satz.

```js
const url = "https://example.com:4999/wt";

async function initTransport(url) {
  // Transportverbindung initialisieren
  const transport = new WebTransport(url);

  // Die Verbindung kann genutzt werden, sobald das Versprechen erfüllt ist
  await transport.ready;

  // ...
}

// ...

async function closeTransport(transport) {
  // Auf das Schließen der Verbindung reagieren
  try {
    await transport.closed;
    console.log(`Die HTTP/3-Verbindung zu ${url} wurde ordnungsgemäß geschlossen.`);
  } catch (error) {
    console.error(`Die HTTP/3-Verbindung zu ${url} wurde aufgrund von ${error} geschlossen.`);
  }
}
```

### Unzuverlässige Übertragung über Datagramme

"Unzuverlässig" bedeutet, dass die Übertragung von Daten nicht garantiert ist, noch deren Eintreffen in einer bestimmten Reihenfolge. Dies ist in einigen Situationen in Ordnung und ermöglicht eine sehr schnelle Zustellung. Beispielsweise möchten Sie möglicherweise regelmäßige Spielstatusaktualisierungen übertragen, bei denen jede Nachricht die letzte überschreibt, die ankommt, und die Reihenfolge nicht wichtig ist.

Unzuverlässige Datenübertragung wird über die Eigenschaft {{domxref("WebTransport.datagrams")}} verwaltet – diese gibt ein {{domxref("WebTransportDatagramDuplexStream")}}-Objekt zurück, das alles enthält, was Sie benötigen, um Datagramme an den Server zu senden und zurückzuempfangen.

Die Eigenschaft {{domxref("WebTransportDatagramDuplexStream.writable")}} gibt ein {{domxref("WritableStream")}}-Objekt zurück, an das Sie Daten unter Verwendung eines Writers zum Übertragen an den Server schreiben können:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

Die Eigenschaft {{domxref("WebTransportDatagramDuplexStream.readable")}} gibt ein {{domxref("ReadableStream")}}-Objekt zurück, das Sie verwenden können, um Daten vom Server zu empfangen:

```js
async function readData() {
  const reader = transport.datagrams.readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value ist ein Uint8Array.
    console.log(value);
  }
}
```

### Zuverlässige Übertragung über Streams

"Zuverlässig" bedeutet, dass die Übertragung und Reihenfolge der Daten garantiert ist. Dies führt zu einer langsameren Zustellung (wenn auch schneller als mit WebSockets) und wird in Situationen benötigt, in denen Zuverlässigkeit und Reihenfolge wichtig sind (wie beispielsweise bei Chat-Anwendungen).

Bei der Verwendung zuverlässiger Übertragung über Streams können Sie auch die relative Priorität verschiedener Streams über denselben Transport festlegen.

### Unidirektionale Übertragung

Um einen unidirektionalen Stream von einem User-Agent zu öffnen, verwenden Sie die Methode {{domxref("WebTransport.createUnidirectionalStream()")}}, um eine Referenz auf einen {{domxref("WritableStream")}} zu erhalten. Von diesem können Sie [einen Writer erhalten](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

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
    console.log("Alle Daten wurden gesendet.");
  } catch (error) {
    console.error(`Ein Fehler ist aufgetreten: ${error}`);
  }
}
```

Beachten Sie auch die Verwendung der Methode {{domxref("WritableStreamDefaultWriter.close()")}}, um die zugehörige HTTP/3-Verbindung zu schließen, sobald alle Daten gesendet wurden.

Wenn der Server einen unidirektionalen Stream öffnet, um Daten an den Client zu übertragen, kann darauf beim Client über die Eigenschaft {{domxref("WebTransport.incomingUnidirectionalStreams")}} zugegriffen werden, die einen {{domxref("ReadableStream")}} aus {{domxref("WebTransportReceiveStream")}}-Objekten zurückgibt. Diese können verwendet werden, um vom Server gesendete {{jsxref("Uint8Array")}}-Instanzen zu lesen.

In diesem Fall ist das erste, was zu tun ist, das Einrichten einer Funktion zum Lesen eines `WebTransportReceiveStream`. Diese Objekte erben von der Klasse `ReadableStream`, sodass sie auf die gleiche Weise verwendet werden können:

```js
async function readData(receiveStream) {
  const reader = receiveStream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value ist ein Uint8Array
    console.log(value);
  }
}
```

Rufen Sie anschließend {{domxref("WebTransport.incomingUnidirectionalStreams")}} auf und erhalten Sie eine Referenz auf den Leser, der auf dem von ihm zurückgegebenen `ReadableStream` verfügbar ist, und verwenden Sie dann den Leser, um die Daten vom Server zu lesen. Jeder Chunk ist ein `WebTransportReceiveStream`, und wir verwenden das zuvor eingerichtete `readData()`, um sie zu lesen:

```js
async function receiveUnidirectional() {
  const uds = transport.incomingUnidirectionalStreams;
  const reader = uds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value ist eine Instanz von WebTransportReceiveStream
    await readData(value);
  }
}
```

#### Bidirektionale Übertragung

Um einen bidirektionalen Stream von einem User-Agent zu öffnen, verwenden Sie die Methode {{domxref("WebTransport.createBidirectionalStream()")}}", um eine Referenz auf einen {{domxref("WebTransportBidirectionalStream")}} zu erhalten. Dieses enthält `readable`- und `writable`-Eigenschaften, die Referenzen auf `WebTransportReceiveStream`- und `WebTransportSendStream`-Instanzen zurückgeben, die verwendet werden können, um vom Server zu lesen und zu schreiben.

> **Note:** `WebTransportBidirectionalStream` ist ähnlich wie {{domxref("WebTransportDatagramDuplexStream")}}, außer dass in dieser Schnittstelle die `readable`- und `writable`-Eigenschaften `ReadableStream` bzw. `WritableStream` sind.

```js
async function setUpBidirectional() {
  const stream = await transport.createBidirectionalStream();
  // stream ist ein WebTransportBidirectionalStream
  // stream.readable ist ein WebTransportReceiveStream
  const readable = stream.readable;
  // stream.writable ist ein WebTransportSendStream
  const writable = stream.writable;

  ...
}
```

Lesen von `WebTransportReceiveStream` kann dann wie folgt durchgeführt werden:

```js
async function readData(readable) {
  const reader = readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value ist ein Uint8Array.
    console.log(value);
  }
}
```

Und Schreiben in den `WebTransportSendStream` kann folgendermaßen durchgeführt werden:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

Wenn der Server einen bidirektionalen Stream öffnet, um Daten zu übertragen und vom Client zu empfangen, kann darauf über die Eigenschaft {{domxref("WebTransport.incomingBidirectionalStreams")}} zugegriffen werden, die einen {{domxref("ReadableStream")}} von `WebTransportBidirectionalStream`-Objekten zurückgibt. Jedes davon kann verwendet werden, um {{jsxref("Uint8Array")}}-Instanzen wie oben gezeigt zu lesen und zu schreiben. Wie beim unidirektionalen Beispiel benötigen Sie jedoch eine Anfangsfunktion, um den bidirektionalen Stream überhaupt erst zu lesen:

```js
async function receiveBidirectional() {
  const bds = transport.incomingBidirectionalStreams;
  const reader = bds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value ist eine Instanz von WebTransportBidirectionalStream
    await readData(value.readable);
    await writeData(value.writable);
  }
}
```

## Schnittstellen

- {{domxref("WebTransport")}}
  - : Bietet Funktionalität, damit ein User-Agent eine Verbindung zu einem HTTP/3-Server herstellen, zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen initiieren und die Verbindung schließen kann, sobald sie nicht mehr benötigt wird.
- {{domxref("WebTransportBidirectionalStream")}}
  - : Stellt einen bidirektionalen Stream dar, der von einem Server oder Client erstellt wurde und für zuverlässigen Transport verwendet werden kann. Bietet Zugriff auf einen {{domxref("ReadableStream")}} zum Lesen eingehender Daten und einen {{domxref("WritableStream")}} zum Schreiben ausgehender Daten.
- {{domxref("WebTransportDatagramDuplexStream")}}
  - : Stellt einen Duplexstream dar, der für den unzuverlässigen Transport von Datagrammen zwischen Client und Server verwendet werden kann. Bietet Zugriff auf einen {{domxref("ReadableStream")}} für eingehende Datagramme, einen {{domxref("WritableStream")}} für ausgehende Datagramme sowie verschiedene Einstellungen und Statistiken zu dem Stream.
- {{domxref("WebTransportError")}}
  - : Stellt einen Fehler im Zusammenhang mit der WebTransport-API dar, der aus Serverfehlern, Netzwerkverbindungsproblemen oder vom Client initiierten Abbruchvorgängen (zum Beispiel durch einen {{domxref("WritableStream.abort()")}}-Aufruf) resultieren kann.
- {{domxref("WebTransportReceiveStream")}}
  - : Bietet Streaming-Funktionen für einen eingehenden unidirektionalen oder bidirektionalen {{domxref("WebTransport")}}-Stream.
- {{domxref("WebTransportSendStream")}}
  - : Bietet Streaming-Funktionen für einen ausgehenden unidirektionalen oder bidirektionalen {{domxref("WebTransport")}}-Stream.

## Beispiele

Für vollständige Beispiele siehe:

- [WebTransport über HTTP/3-Client](https://webtransport.day/)
- [WebTransport (BYOB) Echo mit WebCodecs im Worker](https://webrtc.internaut.com/wc/wtSender4/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
