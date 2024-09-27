---
title: WebTransport
slug: Web/API/WebTransport
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`WebTransport`**-Schnittstelle der [WebTransport API](/de/docs/Web/API/WebTransport_API) bietet Funktionalität, die es einem User Agent ermöglicht, eine Verbindung zu einem HTTP/3-Server herzustellen, zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen zu initiieren und die Verbindung zu schließen, wenn sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)
  - : Erstellt eine neue `WebTransport`-Objektinstanz.

## Instanz-Eigenschaften

- [`closed`](/de/docs/Web/API/WebTransport/closed) {{ReadOnlyInline}}
  - : Gibt ein Promise zurück, das aufgelöst wird, wenn der Transport geschlossen ist.
- [`datagrams`](/de/docs/Web/API/WebTransport/datagrams) {{ReadOnlyInline}}
  - : Gibt eine Instanz von [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) zurück, die verwendet werden kann, um Datagramme zu senden und zu empfangen.
- [`congestionControl`](/de/docs/Web/API/WebTransport/congestionControl) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der die Präferenz der Anwendung für entweder hohen Durchsatz oder geringe Latenz beim Senden von Daten angibt.
- [`incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) {{ReadOnlyInline}}
  - : Repräsentiert einen oder mehrere bidirektionale Streams, die vom Server geöffnet wurden. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekten zurück. Jeder davon kann verwendet werden, um Daten vom Server zu lesen und Daten zurück zu schreiben.
- [`incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) {{ReadOnlyInline}}
  - : Repräsentiert einen oder mehrere unidirektionale Streams, die vom Server geöffnet wurden. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurück. Jeder davon kann verwendet werden, um Daten vom Server zu lesen.
- [`ready`](/de/docs/Web/API/WebTransport/ready) {{ReadOnlyInline}}
  - : Gibt ein Promise zurück, das aufgelöst wird, wenn der Transport einsatzbereit ist.
- [`reliability`](/de/docs/Web/API/WebTransport/reliability) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der angibt, ob die Verbindung nur zuverlässigen Transport unterstützt oder auch unzuverlässigen Transport (wie UDP).

## Instanz-Methoden

- [`close()`](/de/docs/Web/API/WebTransport/close)
  - : Schließt eine laufende WebTransport-Sitzung.
- [`createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream)
  - : Öffnet asynchron einen bidirektionalen Stream ([`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)), der verwendet werden kann, um vom Server zu lesen und zu ihm zu schreiben.
- [`createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream)
  - : Öffnet asynchron einen unidirektionalen Stream ([`WritableStream`](/de/docs/Web/API/WritableStream)), der verwendet werden kann, um zum Server zu schreiben.
- [`getStats()`](/de/docs/Web/API/WebTransport/getStats) {{Experimental_Inline}}
  - : Gibt asynchron ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, das HTTP/3-Verbindungsstatistiken enthält.

## Beispiele

Der untenstehende Beispielcode zeigt, wie Sie eine Verbindung zu einem HTTP/3-Server herstellen, indem Sie dessen URL dem [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)-Konstruktor übergeben.
Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer ausdrücklich angegeben werden muss.
Sobald das Promise [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) erfüllt ist, können Sie die Verbindung verwenden.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie darauf warten, dass das Promise [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) erfüllt wird.
Fehler, die von `WebTransport`-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten neben dem Standard-Set von [`DOMException`](/de/docs/Web/API/DOMException).

Die Methode `closeTransport()` unten zeigt eine mögliche Implementierung.
In einem `try...catch`-Block wird `await` verwendet, um auf die Erfüllung oder Ablehnung des `closed`-Promise zu warten, und es wird berichtet, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
