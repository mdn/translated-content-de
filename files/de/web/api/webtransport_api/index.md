---
title: WebTransport API
slug: Web/API/WebTransport_API
l10n:
  sourceCommit: 64685d67035fa6c3ad63a36e89ce8f59d670c3ac
---

{{DefaultAPISidebar("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **WebTransport API** ist eine moderne Weiterentwicklung von [WebSockets](/de/docs/Web/API/WebSockets_API). Sie überträgt Daten zwischen Client und Server mithilfe von [HTTP/3 Transport](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/). WebTransport unterstützt mehrere Streams, unidirektionale Streams und die Zustellung außerhalb der ursprünglichen Reihenfolge. Es ermöglicht zuverlässige Übertragung über [Streams](/de/docs/Web/API/Streams_API) und unzuverlässige Übertragung über UDP-ähnliche Datagramme.

## Konzepte und Verwendung

[HTTP/3](https://en.wikipedia.org/wiki/HTTP/3) wurde 2022 nach mehrjähriger Entwicklung standardisiert.
Es basiert auf dem {{Glossary("QUIC", "QUIC")}}-Protokoll, das seinerseits auf UDP basiert und 2021 standardisiert wurde. HTTP/3 behebt mehrere Probleme des klassischen TCP-Protokolls, auf dem HTTP und WebSockets basieren.

Dazu gehören:

- **{{Glossary("head_of_line_blocking", "Head-of-Line-Blocking")}}**
  - : HTTP/2 ermöglicht Multiplexing, sodass über eine einzelne Verbindung mehrere Ressourcen gleichzeitig übertragen werden können. Wenn jedoch die Übertragung einer einzelnen Ressource scheitert, werden alle anderen Ressourcen auf dieser Verbindung aufgehalten, bis fehlende Pakete erneut übertragen wurden. Bei QUIC ist nur die betroffene Ressource beeinträchtigt.
- **Höhere Leistung**
  - : QUIC ist in vielerlei Hinsicht leistungsfähiger als TCP. QUIC kann Sicherheitsfunktionen selbst übernehmen, statt die Verantwortung an andere Protokolle wie TLS abzugeben – dadurch sind weniger Hin- und Rückübertragungen nötig. Außerdem bieten Streams eine höhere Übertragungseffizienz als der ältere paketbasierte Mechanismus. Das kann insbesondere in Netzwerken mit hoher Latenz einen erheblichen Unterschied machen.
- **Bessere Netzwerkwechsel**
  - : QUIC verwendet eine eindeutige Verbindungs-ID, um Quelle und Ziel jeder Anfrage zuzuordnen und sicherzustellen, dass Pakete korrekt zugestellt werden. Diese ID kann beim Wechsel zwischen verschiedenen Netzwerken bestehen bleiben. So kann beispielsweise ein Download ohne Unterbrechung fortgesetzt werden, wenn Sie von WLAN zu einem Mobilfunknetz wechseln. HTTP/2 verwendet dagegen IP-Adressen als Kennungen, weshalb Netzwerkwechsel problematisch sein können.
- **Unzuverlässige Übertragung**
  - : HTTP/3 unterstützt die unzuverlässige Datenübertragung über Datagramme.

Die WebTransport API bietet direkten Zugriff auf die bidirektionale Kommunikation über HTTP/3. Sie nutzt die genannten Vorteile und unterstützt sowohl zuverlässige als auch unzuverlässige Datenübertragung.

### Verbindungsaufbau

Um eine Verbindung zu einem HTTP/3-Server herzustellen, übergeben Sie dessen URL an den Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport). Beachten Sie, dass das URL-Schema HTTPS sein muss und die Portnummer ausdrücklich angegeben werden muss. Sobald das Promise [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt ist, können Sie die Verbindung verwenden.

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

### Serverimplementierung

Für eine WebTransport-Verbindung ist ein Server mit entsprechender Unterstützung erforderlich. Um eine Sitzung aufzubauen, sendet der Client eine erweiterte `CONNECT`-Anfrage mit einem `:protocol`-Pseudo-Header, der WebTransport angibt. Bei Browser-Clients enthält die Anfrage außerdem einen `Origin`-Header, den der Server prüfen muss, bevor er die Sitzung akzeptiert. (Der Konstruktor `WebTransport()` übernimmt dies automatisch auf Client-Seite.) Der Server akzeptiert die Sitzung, indem er eine erfolgreiche Antwort (2xx) sendet. Anschließend können Client und Server über mehrere bidirektionale Streams, unidirektionale Streams und Datagramme, die dieser Sitzung zugeordnet sind, Daten austauschen.

Die [Spezifikation für WebTransport über HTTP/3](https://datatracker.ietf.org/doc/draft-ietf-webtrans-http3/) beschreibt das Protokoll und die Anforderungen an den Server ausführlicher.

Sie sollten eine WebTransport-Bibliothek verwenden, um die serverseitigen Protokolldetails zu handhaben. Zum Beispiel:

- **Go**: [`webtransport-go`](https://github.com/quic-go/webtransport-go)
- **Python**: [`aioquic`](https://github.com/aiortc/aioquic); siehe auch [Googles Chrome-Beispiel für einen WebTransport-Server](https://github.com/GoogleChrome/samples/blob/gh-pages/webtransport/webtransport_server.py)
- **Rust**: [`wtransport`](https://github.com/BiagioFesta/wtransport)
- **Node.js**: [`@fails-components/webtransport`](https://github.com/fails-components/webtransport)
- **Deno**: [integrierte WebTransport-Unterstützung](https://docs.deno.com/examples/web_transport/) (instabil)

Für alle Client-Beispiele stellen wir minimale Serverbeispiele bereit, die das Node.js-Paket `@fails-components/webtransport` verwenden. Code, der mit anderen Bibliotheken oder in anderen Sprachen geschrieben wurde, kann deutlich anders aussehen.

> [!NOTE]
> Serverseitige JavaScript-Beispiele sind mit `// -- server.js --` gekennzeichnet. JavaScript-Beispiele ohne diesen Kommentar sind clientseitiger Code.

Hier ist ein Beispielserver für das Beispiel zum [Verbindungsaufbau](#verbindungsaufbau):

```js
// -- server.js --
import { randomBytes } from "node:crypto";
import { readFileSync } from "node:fs";
import { Http3Server } from "@fails-components/webtransport";

const allowedOrigin = "https://example.com";
const server = new Http3Server({
  host: "0.0.0.0",
  port: 4999,
  secret: randomBytes(32).toString("hex"),
  cert: readFileSync("certificate.pem", "utf8"),
  privKey: readFileSync("private-key.pem", "utf8"),
});

async function acceptRequest({ header }) {
  const path = header[":path"];
  if (path !== "/wt") {
    return { status: 404, path };
  }
  if (header.origin !== allowedOrigin) {
    return { status: 403, path };
  }
  return { status: 200, path };
}

server.setRequestCallback(acceptRequest);
const sessions = server.sessionStream("/wt");
server.startServer();
await server.ready;

async function handleSession(session) {
  // Add one of the server-side examples below here.
}

for await (const session of sessions) {
  session.closed.catch(console.error);
  session.ready.then(() => handleSession(session)).catch(console.error);
}
```

Wenn Sie den Code ausführen möchten, müssen Sie alle Vorkommen von `example.com` im Client- und Servercode durch die jeweiligen tatsächlichen Endpunkte ersetzen. Außerdem müssen Sie `certificate.pem` und `private-key.pem` bereitstellen. Diese enthalten ein vom Browser als vertrauenswürdig eingestuftes TLS-Zertifikat und dessen privaten Schlüssel.

Sofern nicht anders angegeben, ersetzt jedes der folgenden serverseitigen Beispiele den Rumpf von `handleSession()`. Das Objekt `session` repräsentiert eine akzeptierte Client-Sitzung.

### Verbindung schließen

Sie können auf das Schließen der Verbindung reagieren, indem Sie warten, bis das Promise [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) erfüllt ist. Fehler, die von WebTransport-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten über die Standarddaten von [`DOMException`](/de/docs/Web/API/DOMException) hinaus.

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

Rufen Sie in `@fails-components/webtransport` `session.close()` auf, um die Sitzung zu schließen:

```js
// -- server.js --
session.close({ closeCode: 0, reason: "Work complete" });
await session.closed;
```

Der Server kann auch signalisieren, dass er die Verbindung vor dem Schließen auslaufen lassen möchte, etwa um die zugrunde liegende Übertragung zu verwalten.
In `@fails-components/webtransport` geschieht dies beispielsweise mit `session.notifySessionDraining()`.
In diesem Fall sollte der Client beginnen, Streams zu schließen, und eine neue Sitzung erstellen, wenn er seine Arbeit fortsetzen muss.
Sie können dies über das Promise [`WebTransport.draining`](/de/docs/Web/API/WebTransport/draining) erkennen. Es wird erfüllt, sobald der Server signalisiert, dass die Sitzung in den Auslaufzustand übergeht:

```js
async function watchForDraining(transport) {
  // Fulfills when the server signals that the session is draining
  await transport.draining;

  console.log("The session is draining: avoid opening new streams.");
}
```

### Ein Anwendungsprotokoll aushandeln

Ein WebTransport-Server kann mehrere Anwendungen unterstützen, die jeweils ein eigenes, benutzerdefiniertes Kommunikationsprotokoll verwenden.
Dazu kann der Client über die Option [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols) des Konstruktors `WebTransport()` eine nach Präferenz geordnete Liste möglicher Protokollnamen anbieten.
Der Server kann beim Verbindungsaufbau eines dieser Protokolle auswählen.

Sobald das Promise [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt ist, ist das ausgehandelte Protokoll (falls vorhanden) über die Eigenschaft [`WebTransport.protocol`](/de/docs/Web/API/WebTransport/protocol) verfügbar.
Wenn `protocols` nicht verwendet wurde oder der Server keines der angebotenen Protokolle ausgewählt hat, ist der Wert eine leere Zeichenfolge.
Ein Server, der keines der angebotenen Protokolle unterstützt, kann die Verbindung stattdessen vollständig ablehnen, wodurch `ready` zurückgewiesen wird.

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

Wenn die Bibliothek `@fails-components/webtransport` die Header verarbeitet, behandelt sie `header["wt-available-protocols"]` gesondert und wandelt den Wert in ein Array um. Sie können beispielsweise `server.setRequestCallback(acceptRequest)` durch Folgendes ersetzen, um fehlerhafte Werte abzulehnen und das erste vom Server unterstützte Protokoll auszuwählen:

```js
// -- server.js --
const supportedProtocols = new Set(["chat", "file-transfer"]);

server.setRequestCallback(async (request) => {
  const response = await acceptRequest(request);
  if (response.status !== 200) {
    return response;
  }

  const offeredProtocols = request.header["wt-available-protocols"] ?? [];
  if (!Array.isArray(offeredProtocols)) {
    return { ...response, status: 400 };
  }
  const selectedProtocol = offeredProtocols.find((protocol) =>
    supportedProtocols.has(protocol),
  );
  return { ...response, selectedProtocol };
});
```

### Unzuverlässige Übertragung über Datagramme

„Unzuverlässig“ bedeutet, dass weder die Übertragung der Daten noch deren Eintreffen in einer bestimmten Reihenfolge garantiert ist. In manchen Situationen ist das unproblematisch und ermöglicht eine sehr schnelle Zustellung. Beispielsweise möchten Sie möglicherweise regelmäßige Aktualisierungen eines Spielzustands übertragen, bei denen jede Nachricht die zuletzt eingetroffene ersetzt und die Reihenfolge unwichtig ist.

Die unzuverlässige Datenübertragung erfolgt über die Eigenschaft [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams). Sie gibt ein [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Objekt zurück, das alles enthält, was Sie benötigen, um Datagramme an den Server zu senden und von ihm zu empfangen.

Die Eigenschaft [`WebTransportDatagramDuplexStream.writable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/writable) gibt ein [`WritableStream`](/de/docs/Web/API/WritableStream)-Objekt zurück. Mit einem Writer können Sie Daten hineinschreiben, die an den Server übertragen werden:

```js
const writer = transport.datagrams.writable.getWriter();
const data1 = new Uint8Array([65, 66, 67]);
const data2 = new Uint8Array([68, 69, 70]);
writer.write(data1);
writer.write(data2);
```

Lesen Sie diese Datagramme in `@fails-components/webtransport` aus `session.datagrams.readable`:

```js
// -- server.js --
for await (const data of session.datagrams.readable) {
  console.log(data); // A Uint8Array sent by the client.
}
```

Die Eigenschaft [`WebTransportDatagramDuplexStream.readable`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) gibt ein [`ReadableStream`](/de/docs/Web/API/ReadableStream)-Objekt zurück, mit dem Sie Daten vom Server empfangen können:

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

Um in `@fails-components/webtransport` Datagramme zu senden, die dieser Clientcode lesen kann, holen Sie sich einen Writer:

```js
// -- server.js --
const writer = session.datagrams.createWritable().getWriter();
try {
  await writer.write(new Uint8Array([65, 66, 67]));
  await writer.write(new Uint8Array([68, 69, 70]));
} finally {
  writer.releaseLock();
}
```

### Zuverlässige Übertragung über Streams

„Zuverlässig“ bedeutet, dass die Übertragung und die Reihenfolge der Daten garantiert sind. Dies führt zu einer langsameren Zustellung (wenngleich sie schneller als bei WebSockets ist) und ist dort erforderlich, wo Zuverlässigkeit und Reihenfolge wichtig sind, beispielsweise bei Chat-Anwendungen.

Bei der zuverlässigen Übertragung über Streams können Sie außerdem die relative Priorität verschiedener Streams festlegen, die dieselbe Verbindung verwenden.

### Unidirektionale Übertragung

Um einen unidirektionalen Stream von einem User Agent aus zu öffnen, verwenden Sie die Methode [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream). Sie erhalten damit eine Referenz auf einen [`WritableStream`](/de/docs/Web/API/WritableStream). Von diesem können Sie [einen Writer abrufen](/de/docs/Web/API/WritableStream/getWriter), um Daten in den Stream zu schreiben und an den Server zu senden.

```js
async function writeData() {
  const stream = await transport.createUnidirectionalStream();
  const writer = stream.getWriter();
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

Beachten Sie auch die Verwendung der Methode [`WritableStreamDefaultWriter.close()`](/de/docs/Web/API/WritableStreamDefaultWriter/close), um den Stream zu schließen, sobald alle Daten gesendet wurden.

In `@fails-components/webtransport` ist jeder Eintrag in `session.incomingUnidirectionalStreams` ein lesbarer Stream, der Daten vom Client enthält. Starten Sie für jeden Stream einen eigenen Reader, damit ein auf Daten wartender Stream den Server nicht daran hindert, einen weiteren anzunehmen:

```js
// -- server.js --
async function receiveStream(stream) {
  for await (const data of stream) {
    console.log(data); // A Uint8Array sent by the client.
  }
}

for await (const stream of session.incomingUnidirectionalStreams) {
  receiveStream(stream).catch(console.error);
}
```

Wenn der Server einen unidirektionalen Stream öffnet, um Daten an den Client zu übertragen, kann der Client über die Eigenschaft [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) darauf zugreifen. Sie gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurück. Mit diesen können vom Server gesendete {{jsxref("Uint8Array")}}-Instanzen gelesen werden.

In diesem Fall richten Sie zunächst eine Funktion zum Lesen eines `WebTransportReceiveStream` ein. Diese Objekte erben von der Klasse `ReadableStream` und können daher genauso verwendet werden:

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

Greifen Sie anschließend auf [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) zu und holen Sie sich eine Referenz auf den Reader des zurückgegebenen `ReadableStream`. Verwenden Sie den Reader dann, um die Daten vom Server zu lesen. Jeder Datenblock ist ein `WebTransportReceiveStream`, den wir mit der zuvor eingerichteten Funktion `readData()` lesen:

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

Um in `@fails-components/webtransport` einen Stream für die Clientfunktionen `receiveUnidirectional()` und `readData()` bereitzustellen, erstellen Sie einen unidirektionalen Stream und schreiben Sie Daten hinein:

```js
// -- server.js --
const stream = await session.createUnidirectionalStream();
const writer = stream.getWriter();
await writer.write(new Uint8Array([65, 66, 67]));
await writer.write(new Uint8Array([68, 69, 70]));
await writer.close();
```

#### Bidirektionale Übertragung

Um einen bidirektionalen Stream von einem User Agent aus zu öffnen, verwenden Sie die Methode [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream). Sie erhalten damit eine Referenz auf einen [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream).
Dieser besitzt die Eigenschaften `readable` und `writable`, die Referenzen auf `WebTransportReceiveStream`- beziehungsweise `WebTransportSendStream`-Instanzen zurückgeben. Damit können Daten vom Server gelesen und an ihn geschrieben werden.

> [!NOTE]
> `WebTransportBidirectionalStream` ähnelt [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream). Bei letzterem sind die Eigenschaften `readable` und `writable` jedoch ein `ReadableStream` beziehungsweise ein `WritableStream`.

```js
async function setUpBidirectional() {
  const stream = await transport.createBidirectionalStream();
  // stream is a WebTransportBidirectionalStream
  // stream.readable is a WebTransportReceiveStream
  const readable = stream.readable;
  // stream.writable is a WebTransportSendStream
  const writable = stream.writable;

  // …
  return stream;
}
```

Aus dem `WebTransportReceiveStream` können Sie anschließend wie folgt lesen:

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

Und in den `WebTransportSendStream` können Sie so schreiben:

```js
async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  await writer.write(data1);
  await writer.write(data2);
  await writer.close();
}
```

Führen Sie die Clientfunktionen gleichzeitig aus, damit während des Schreibens weitergelesen werden kann:

```js
const stream = await setUpBidirectional();
await Promise.all([readData(stream.readable), writeData(stream.writable)]);
```

Nehmen Sie in `@fails-components/webtransport` die vom Client erstellten Streams aus `session.incomingBidirectionalStreams` an. Jeder besitzt eine `readable`-Seite für Daten vom Client und eine `writable`-Seite für Daten an den Client:

```js
// -- server.js --
for await (const stream of session.incomingBidirectionalStreams) {
  // Echo received bytes back to the client. Each stream is handled separately.
  stream.readable.pipeTo(stream.writable).catch(console.error);
}
```

Dieser Handler arbeitet mit beiden Funktionen zusammen: `pipeTo()` liest die von `writeData()` gesendeten Bytes und schreibt sie zurück, damit `readData()` sie lesen kann.

Wenn der Server einen bidirektionalen Stream öffnet, um Daten an den Client zu senden und von ihm zu empfangen, kann der Client über die Eigenschaft [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) darauf zugreifen. Sie gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportBidirectionalStream`-Objekten zurück. Mit jedem davon können {{jsxref("Uint8Array")}}-Instanzen wie oben gezeigt gelesen und geschrieben werden. Wie beim unidirektionalen Beispiel benötigen Sie jedoch zunächst eine Funktion, um den bidirektionalen Stream zu lesen:

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

Als Gegenstück zu `receiveBidirectional()` erstellt der Server einen Stream, sendet Daten und schließt seine sendende Seite, bevor er die Antwort des Clients liest. Durch das Schließen der sendenden Seite kann der Aufruf von `readData()` auf dem Client abgeschlossen werden, sodass anschließend `writeData()` aufgerufen werden kann:

```js
// -- server.js --
const stream = await session.createBidirectionalStream();
const writer = stream.writable.getWriter();
await writer.write(new Uint8Array([65, 66, 67]));
await writer.close();

for await (const data of stream.readable) {
  console.log(data); // The client's reply.
}
```

## Schnittstellen

- [`WebTransport`](/de/docs/Web/API/WebTransport)
  - : Bietet Funktionen, mit denen ein User Agent eine Verbindung zu einem HTTP/3-Server herstellen, zuverlässige und unzuverlässige Übertragungen in eine oder beide Richtungen beginnen und die Verbindung schließen kann, sobald sie nicht mehr benötigt wird.
- [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)
  - : Repräsentiert einen von einem Server oder Client erstellten bidirektionalen Stream, der für zuverlässige Übertragung verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Daten und einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Daten.
- [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)
  - : Repräsentiert einen Duplex-Stream, der für die unzuverlässige Übertragung von Datagrammen zwischen Client und Server verwendet werden kann. Bietet Zugriff auf einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zum Lesen eingehender Datagramme, einen [`WritableStream`](/de/docs/Web/API/WritableStream) zum Schreiben ausgehender Datagramme sowie auf verschiedene Einstellungen und Statistiken zum Stream.
- [`WebTransportError`](/de/docs/Web/API/WebTransportError)
  - : Repräsentiert einen Fehler im Zusammenhang mit der WebTransport API, der durch Serverfehler, Probleme mit der Netzwerkverbindung oder vom Client ausgelöste Abbruchvorgänge entstehen kann, beispielsweise durch einen Aufruf von [`WritableStream.abort()`](/de/docs/Web/API/WritableStream/abort).
- [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)
  - : Bietet Streaming-Funktionen für einen eingehenden unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Stream.
- [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)
  - : Bietet Streaming-Funktionen für einen ausgehenden unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Stream.

## Beispiele

Vollständige Beispiele finden Sie unter:

- [WebTransport über HTTP/3: Client](https://webtransport.day/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
