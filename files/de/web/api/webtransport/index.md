---
title: WebTransport
slug: Web/API/WebTransport
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`WebTransport`**-Schnittstelle der [WebTransport API](/de/docs/Web/API/WebTransport_API) bietet Funktionalität, um einem Benutzeragenten zu ermöglichen, eine Verbindung zu einem HTTP/3-Server herzustellen, zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen zu initiieren und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)
  - : Erstellt eine neue `WebTransport`-Objektinstanz.

## Instanzeigenschaften

- [`closed`](/de/docs/Web/API/WebTransport/closed) {{ReadOnlyInline}}
  - : Gibt ein Promise zurück, das aufgelöst wird, wenn der Transport geschlossen ist.
- [`datagrams`](/de/docs/Web/API/WebTransport/datagrams) {{ReadOnlyInline}}
  - : Gibt eine [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Instanz zurück, die zum Senden und Empfangen von Datagrammen verwendet werden kann.
- [`congestionControl`](/de/docs/Web/API/WebTransport/congestionControl) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der die Anwendungsvorliebe für entweder hohe Durchsatzrate oder niedrige Latenz beim Senden von Daten angibt.
- [`incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) {{ReadOnlyInline}}
  - : Stellt einen oder mehrere vom Server geöffnete bidirektionale Streams dar. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekten zurück. Jeder kann verwendet werden, um Daten vom Server zu lesen und zurück zu ihm zu schreiben.
- [`incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) {{ReadOnlyInline}}
  - : Stellt einen oder mehrere vom Server geöffnete unidirektionale Streams dar. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurück. Jeder kann verwendet werden, um Daten vom Server zu lesen.
- [`ready`](/de/docs/Web/API/WebTransport/ready) {{ReadOnlyInline}}
  - : Gibt ein Promise zurück, das aufgelöst wird, wenn der Transport einsatzbereit ist.
- [`reliability`](/de/docs/Web/API/WebTransport/reliability) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der angibt, ob die Verbindung nur zuverlässige Transporte unterstützt oder ob sie auch unzuverlässige Transporte (wie UDP) unterstützt.

## Instanzmethoden

- [`close()`](/de/docs/Web/API/WebTransport/close)
  - : Schließt eine laufende WebTransport-Sitzung.
- [`createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream)
  - : Öffnet asynchron einen bidirektionalen Stream ([`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)), der zum Lesen vom und Schreiben zum Server verwendet werden kann.
- [`createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream)
  - : Öffnet asynchron einen unidirektionalen Stream ([`WritableStream`](/de/docs/Web/API/WritableStream)), der zum Schreiben zum Server verwendet werden kann.
- [`getStats()`](/de/docs/Web/API/WebTransport/getStats) {{Experimental_Inline}}
  - : Gibt asynchron ein {{jsxref("Promise")}} zurück, das mit einem Objekt mit HTTP/3-Verbindungsstatistiken erfüllt wird.

## Beispiele

Der unten stehende Beispielcode zeigt, wie Sie durch Übergabe der URL eines HTTP/3-Servers an den [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)-Konstruktor eine Verbindung herstellen würden. Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss. Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Promise erfüllt ist, können Sie die Verbindung nutzen.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie darauf warten, dass das [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed)-Promise erfüllt wird. Fehler, die durch `WebTransport`-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten über den Standard-[`DOMException`](/de/docs/Web/API/DOMException)-Satz hinaus.

Die Methode `closeTransport()` unten zeigt eine mögliche Implementierung. Innerhalb eines `try...catch`-Blocks wird `await` verwendet, um auf die Erfüllung oder Ablehnung des `closed`-Promises zu warten, und es wird anschließend berichtet, ob die Verbindung beabsichtigt oder aufgrund eines Fehlers geschlossen wurde.

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

Wir könnten die obigen asynchronen Funktionen in ihrer eigenen asynchronen Funktion aufrufen, wie unten gezeigt.

```js
// Use the transport
async function useTransport(url) {
  const transport = await initTransport(url);

  // Use the transport object to send and receive data
  // ...

  // When done, close the transport
  await closeTransport(transport);
}

const url = "https://example.com:4999/wt";
useTransport(url);
```

Für weiteren Beispielcode siehe die einzelnen Eigenschafts- und Methodenseiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
