---
title: WebTransport
slug: Web/API/WebTransport
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`WebTransport`**-Interface der [WebTransport-API](/de/docs/Web/API/WebTransport_API) bietet Funktionalität, die es einem User-Agent ermöglicht, eine Verbindung zu einem HTTP/3-Server herzustellen, einen zuverlässigen und/oder unzuverlässigen Transport in eine oder beide Richtungen zu initiieren und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)
  - : Erstellt eine neue Instanz eines `WebTransport`-Objekts.

## Instanz-Eigenschaften

- [`closed`](/de/docs/Web/API/WebTransport/closed) {{ReadOnlyInline}}
  - : Gibt ein Promise zurück, das aufgelöst wird, wenn der Transport geschlossen wird.
- [`datagrams`](/de/docs/Web/API/WebTransport/datagrams) {{ReadOnlyInline}}
  - : Gibt eine Instanz von [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) zurück, die zum Senden und Empfangen von Datagrammen verwendet werden kann.
- [`congestionControl`](/de/docs/Web/API/WebTransport/congestionControl) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der die Anwendungsvorliebe für entweder hohen Durchsatz oder niedrige Latenz beim Senden von Daten angibt.
- [`incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) {{ReadOnlyInline}}
  - : Stellt einen oder mehrere vom Server geöffnete bidirektionale Streams dar. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekten zurück. Jeder kann verwendet werden, um Daten vom Server zu lesen und Daten zurück zu senden.
- [`incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) {{ReadOnlyInline}}
  - : Stellt einen oder mehrere vom Server geöffnete unidirektionale Streams dar. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurück. Jeder kann verwendet werden, um Daten vom Server zu lesen.
- [`ready`](/de/docs/Web/API/WebTransport/ready) {{ReadOnlyInline}}
  - : Gibt ein Promise zurück, das aufgelöst wird, wenn der Transport bereit zur Nutzung ist.
- [`reliability`](/de/docs/Web/API/WebTransport/reliability) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der angibt, ob die Verbindung nur zuverlässige Transporte unterstützt oder ob sie auch unzuverlässige Transporte (wie UDP) unterstützt.

## Instanz-Methoden

- [`close()`](/de/docs/Web/API/WebTransport/close)
  - : Schließt eine laufende WebTransport-Sitzung.
- [`createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream)
  - : Öffnet asynchron einen bidirektionalen Stream ([`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)), der zum Lesen vom und Schreiben zum Server verwendet werden kann.
- [`createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream)
  - : Öffnet asynchron einen unidirektionalen Stream ([`WritableStream`](/de/docs/Web/API/WritableStream)), der zum Schreiben zum Server verwendet werden kann.
- [`getStats()`](/de/docs/Web/API/WebTransport/getStats) {{Experimental_Inline}}
  - : Gibt asynchron ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, das HTTP/3-Verbindungsstatistiken enthält.

## Beispiele

Das untenstehende Beispiel zeigt, wie Sie eine Verbindung zu einem HTTP/3-Server herstellen, indem Sie dessen URL dem [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)-Konstruktor übergeben. Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss. Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Promise erfüllt ist, können Sie die Verbindung nutzen.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie darauf warten, dass das [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed)-Promise erfüllt wird. Fehler, die von `WebTransport`-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten zusätzlich zu den Standardsätzen von [`DOMException`](/de/docs/Web/API/DOMException).

Die `closeTransport()`-Methode unten zeigt eine mögliche Implementierung. Innerhalb eines `try...catch`-Blocks wird `await` verwendet, um auf die Erfüllung oder Ablehnung des `closed`-Promises zu warten und dann zu berichten, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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

Wir könnten die oben genannten asynchronen Funktionen in ihrer eigenen asynchronen Funktion aufrufen, wie unten gezeigt.

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

Weitere Beispielcodes finden Sie auf den einzelnen Seiten zu Eigenschaften und Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets-API](/de/docs/Web/API/WebSockets_API)
- [Streams-API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
