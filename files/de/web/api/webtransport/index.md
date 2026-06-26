---
title: WebTransport
slug: Web/API/WebTransport
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`WebTransport`**-Interface der [WebTransport API](/de/docs/Web/API/WebTransport_API) bietet Funktionen, die es einem User Agent ermöglichen, eine Verbindung zu einem HTTP/3-Server herzustellen, zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen einzuleiten und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)
  - : Erstellt eine neue Instanz des `WebTransport`-Objekts.

## Instanz-Eigenschaften

- [`closed`](/de/docs/Web/API/WebTransport/closed) {{ReadOnlyInline}}
  - : Gibt ein Versprechen zurück, das aufgelöst wird, wenn der Transport geschlossen wird.
- [`datagrams`](/de/docs/Web/API/WebTransport/datagrams) {{ReadOnlyInline}}
  - : Gibt eine Instanz von [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) zurück, die verwendet werden kann, um Datagramme zu senden und zu empfangen.
- [`congestionControl`](/de/docs/Web/API/WebTransport/congestionControl) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Anwendungsvorliebe für entweder hohen Durchsatz oder niedrige Latenz beim Senden von Daten anzeigt.
- [`incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) {{ReadOnlyInline}}
  - : Repräsentiert einen oder mehrere vom Server geöffnete bidirektionale Streams. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekten zurück. Jeder kann verwendet werden, um Daten vom Server zu lesen und Daten zurückzuschreiben.
- [`incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) {{ReadOnlyInline}}
  - : Repräsentiert einen oder mehrere vom Server geöffnete unidirektionale Streams. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurück. Jeder kann verwendet werden, um Daten vom Server zu lesen.
- [`ready`](/de/docs/Web/API/WebTransport/ready) {{ReadOnlyInline}}
  - : Gibt ein Versprechen zurück, das aufgelöst wird, wenn der Transport bereit zur Nutzung ist.
- [`reliability`](/de/docs/Web/API/WebTransport/reliability) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der anzeigt, ob die Verbindung nur zuverlässige Transporte unterstützt oder auch unzuverlässige Transporte (wie UDP).

## Instanz-Methoden

- [`close()`](/de/docs/Web/API/WebTransport/close)
  - : Schließt eine laufende WebTransport-Sitzung.
- [`createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream)
  - : Öffnet asynchron einen bidirektionalen Stream ([`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)), der verwendet werden kann, um Daten von und zum Server zu lesen und zu schreiben.
- [`createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup) {{experimental_inline}}
  - : Gibt eine [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) zurück, die verwendet werden kann, um Streams und Datagramme zu gruppieren, sodass ihre relative Sendepriorität als Satz gesteuert werden kann.
- [`createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream)
  - : Öffnet asynchron einen unidirektionalen Stream ([`WritableStream`](/de/docs/Web/API/WritableStream)), der verwendet werden kann, um an den Server zu schreiben.
- [`getStats()`](/de/docs/Web/API/WebTransport/getStats)
  - : Gibt asynchron ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, das HTTP/3-Verbindungsstatistiken enthält.

## Beispiele

Der unten stehende Beispielcode zeigt, wie Sie durch Übergeben der URL eines HTTP/3-Servers an den [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)-Konstruktor eine Verbindung herstellen können.
Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss.
Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Versprechen erfüllt wird, können Sie die Verbindung nutzen.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie auf das Erfüllen des [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed)-Versprechens warten. Fehler, die während `WebTransport`-Operationen auftreten, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten über den üblichen [`DOMException`](/de/docs/Web/API/DOMException)-Satz hinaus.

Die unten stehende `closeTransport()`-Methode zeigt eine mögliche Implementierung.
In einem `try...catch`-Block wird `await` verwendet, um auf das Erfüllen oder Ablehnen des `closed`-Versprechens zu warten und dann zu berichten, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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

Wir könnten die oben aufgeführten asynchronen Funktionen in ihrer eigenen asynchronen Funktion aufrufen, wie unten gezeigt.

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
