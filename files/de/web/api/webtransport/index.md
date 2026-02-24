---
title: WebTransport
slug: Web/API/WebTransport
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`WebTransport`**-Interface der [WebTransport API](/de/docs/Web/API/WebTransport_API) bietet Funktionalitäten, die es einem Benutzeragenten ermöglichen, eine Verbindung zu einem HTTP/3-Server herzustellen, zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen zu initiieren und die Verbindung zu schließen, wenn sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)
  - : Erstellt eine neue Instanz eines `WebTransport`-Objekts.

## Instanz-Eigenschaften

- [`closed`](/de/docs/Web/API/WebTransport/closed) {{ReadOnlyInline}}
  - : Gibt ein Promise zurück, das erfüllt wird, wenn der Transport geschlossen ist.
- [`datagrams`](/de/docs/Web/API/WebTransport/datagrams) {{ReadOnlyInline}}
  - : Gibt eine Instanz von [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) zurück, die zum Senden und Empfangen von Datagrammen verwendet werden kann.
- [`congestionControl`](/de/docs/Web/API/WebTransport/congestionControl) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Vorliebe der Anwendung entweder für hohen Durchsatz oder geringe Latenz beim Senden von Daten angibt.
- [`incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) {{ReadOnlyInline}}
  - : Stellt einen oder mehrere vom Server geöffnete bidirektionale Streams dar. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekten zurück. Jeder kann verwendet werden, um Daten vom Server zu lesen und Daten zurück an ihn zu schreiben.
- [`incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) {{ReadOnlyInline}}
  - : Stellt einen oder mehrere vom Server geöffnete unidirektionale Streams dar. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurück. Jeder kann verwendet werden, um Daten vom Server zu lesen.
- [`ready`](/de/docs/Web/API/WebTransport/ready) {{ReadOnlyInline}}
  - : Gibt ein Promise zurück, das erfüllt wird, wenn der Transport bereit zur Nutzung ist.
- [`reliability`](/de/docs/Web/API/WebTransport/reliability) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der angibt, ob die Verbindung nur zuverlässige Transporte unterstützt oder auch unzuverlässige Transporte (wie UDP).

## Instanz-Methoden

- [`close()`](/de/docs/Web/API/WebTransport/close)
  - : Schließt eine laufende WebTransport-Sitzung.
- [`createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream)
  - : Öffnet asynchron einen bidirektionalen Stream ([`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)), der zum Lesen vom und Schreiben an den Server verwendet werden kann.
- [`createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream)
  - : Öffnet asynchron einen unidirektionalen Stream ([`WritableStream`](/de/docs/Web/API/WritableStream)), der zum Schreiben an den Server verwendet werden kann.
- [`getStats()`](/de/docs/Web/API/WebTransport/getStats)
  - : Gibt asynchron ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, das Statistiken zur HTTP/3-Verbindung enthält.

## Beispiele

Das untenstehende Beispiel zeigt, wie Sie durch Übergeben der URL an den [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)-Konstruktor eine Verbindung zu einem HTTP/3-Server herstellen würden.
Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss.
Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Promise erfüllt ist, können Sie die Verbindung nutzen.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie warten, bis das [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed)-Promise erfüllt ist.
Fehler, die von `WebTransport`-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten zusätzlich zu den Standard-Set von [`DOMException`](/de/docs/Web/API/DOMException).

Die Methode `closeTransport()` unten zeigt eine mögliche Implementierung.
Innerhalb eines `try...catch`-Blocks wird `await` verwendet, um zu warten, bis das `closed`-Promise erfüllt oder abgelehnt wird, und dann wird berichtet, ob die Verbindung beabsichtigt oder aufgrund eines Fehlers geschlossen wurde.

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

Wir könnten die oben genannten asynchronen Funktionen innerhalb ihrer eigenen asynchronen Funktion aufrufen, wie unten gezeigt.

```js
// Use the transport
async function useTransport(url) {
  const transport = await initTransport(url);

  // Use the transport object to send and receive data
  // …

  // When done, close the transport
  await closeTransport(transport);
}

const url = "https://example.com:4999/wt";
useTransport(url);
```

Für weiteren Beispielcode, siehe die einzelnen Eigenschafts- und Methoden-Seiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
