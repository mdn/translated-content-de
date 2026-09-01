---
title: WebTransport
slug: Web/API/WebTransport
l10n:
  sourceCommit: 32cd941db59154bdcd9cff0c9989f5b7ae7de91d
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`WebTransport`** Interface der [WebTransport-API](/de/docs/Web/API/WebTransport_API) bietet Funktionen, die es einem User Agent ermöglichen, eine Verbindung zu einem HTTP/3-Server herzustellen, zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen einzuleiten und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)
  - : Erstellt eine neue `WebTransport` Objektinstanz.

## Instanzeigenschaften

- [`closed`](/de/docs/Web/API/WebTransport/closed) {{ReadOnlyInline}}
  - : Gibt ein Promise zurück, das aufgelöst wird, wenn der Transport geschlossen ist.
- [`datagrams`](/de/docs/Web/API/WebTransport/datagrams) {{ReadOnlyInline}}
  - : Gibt eine Instanz von [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) zurück, die zum Senden und Empfangen von Datagrammen verwendet werden kann.
- [`congestionControl`](/de/docs/Web/API/WebTransport/congestionControl) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Anwendungsvorliebe für entweder hohen Durchsatz oder niedrige Latenz beim Senden von Daten angibt.
- [`incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) {{ReadOnlyInline}}
  - : Repräsentiert ein oder mehrere bidirektionale Streams, die vom Server geöffnet wurden. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekten zurück. Jeder kann verwendet werden, um Daten vom Server zu lesen und zurückzuschreiben.
- [`incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) {{ReadOnlyInline}}
  - : Repräsentiert ein oder mehrere unidirektionale Streams, die vom Server geöffnet wurden. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurück. Jeder kann verwendet werden, um Daten vom Server zu lesen.
- [`protocol`](/de/docs/Web/API/WebTransport/protocol) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der das anwendungsspezifische Protokoll angibt, das vom Server ausgewählt wurde, oder `""`, wenn keines ausgewählt wurde.
    Die Präferenzen des Clients für das Protokoll werden als Konstruktoroption in [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols) übergeben.
- [`ready`](/de/docs/Web/API/WebTransport/ready) {{ReadOnlyInline}}
  - : Gibt ein Promise zurück, das aufgelöst wird, wenn der Transport einsatzbereit ist.
- [`reliability`](/de/docs/Web/API/WebTransport/reliability) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der angibt, ob die Verbindung nur zuverlässige Transports unterstützt oder ob sie auch unzuverlässige Transports (wie UDP) unterstützt.

## Instanzmethoden

- [`close()`](/de/docs/Web/API/WebTransport/close)
  - : Schließt eine laufende WebTransport-Sitzung.
- [`createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream)
  - : Öffnet asynchron einen bidirektionalen Stream ([`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)), der zum Lesen und Schreiben an den Server verwendet werden kann.
- [`createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup)
  - : Gibt eine [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) zurück, die verwendet werden kann, um Streams und Datagramme zu gruppieren, sodass ihre relative Sendpriorität als ein Satz gesteuert werden kann.
- [`createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream)
  - : Öffnet asynchron einen unidirektionalen Stream ([`WritableStream`](/de/docs/Web/API/WritableStream)), der zum Schreiben an den Server verwendet werden kann.
- [`exportKeyingMaterial()`](/de/docs/Web/API/WebTransport/exportKeyingMaterial)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Schlüsselmaterie aufgelöst wird, das aus der TLS-Sitzung, die der Verbindung zugrunde liegt, abgeleitet ist.
- [`getStats()`](/de/docs/Web/API/WebTransport/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das HTTP/3-Verbindungsstatistiken enthält.

## Beispiele

Der folgende Beispielcode zeigt, wie Sie eine Verbindung zu einem HTTP/3-Server herstellen, indem Sie dessen URL an den [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) Konstruktor übergeben.
Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer ausdrücklich angegeben werden muss.
Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready) Promise erfüllt ist, können Sie die Verbindung nutzen.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie auf das [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) Promise warten, um erfüllt zu werden.
Fehler, die durch `WebTransport`-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzliche Daten, die über den Standard-`[`DOMException`](/de/docs/Web/API/DOMException)`-Satz hinausgehen.

Die `closeTransport()` Methode unten zeigt eine mögliche Implementierung.
Innerhalb eines `try...catch` Blocks wird `await` verwendet, um auf die Erfüllung oder Ablehnung des `closed` Promises zu warten, und anschließend wird berichtet, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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

Wir könnten die asynchronen Funktionen oben in ihrer eigenen asynchronen Funktion aufrufen, wie unten gezeigt.

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

Für weiteren Beispielcode siehe die individuellen Eigenschaften- und Methodenseiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
