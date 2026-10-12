---
title: WebTransport
slug: Web/API/WebTransport
l10n:
  sourceCommit: f91fc65d574ad719b1a23e975c4b8e904e1fc4da
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`WebTransport`**-Schnittstelle der [WebTransport API](/de/docs/Web/API/WebTransport_API) ermöglicht es einem User Agent, eine Verbindung zu einem HTTP/3-Server herzustellen, zuverlässige und unzuverlässige Datenübertragungen in eine oder beide Richtungen zu initiieren und die Verbindung zu schließen, sobald sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)
  - : Erstellt eine neue `WebTransport`-Objektinstanz.

## Statische Eigenschaften

- [`supportsReliableOnly`](/de/docs/Web/API/WebTransport/supportsReliableOnly_static) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Browser WebTransport-Sitzungen ausschließlich über zuverlässige Transportwege unterstützt.

## Instanzeigenschaften

- [`closed`](/de/docs/Web/API/WebTransport/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die Verbindung geschlossen ist.
- [`datagrams`](/de/docs/Web/API/WebTransport/datagrams) {{ReadOnlyInline}}
  - : Gibt eine [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Instanz zurück, mit der Datagramme gesendet und empfangen werden können.
- [`congestionControl`](/de/docs/Web/API/WebTransport/congestionControl) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der angibt, ob die Anwendung beim Senden von Daten einen hohen Durchsatz oder eine geringe Latenz bevorzugt.
- [`draining`](/de/docs/Web/API/WebTransport/draining) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die Transportsitzung beginnt, bestehende Übertragungen abzuschließen.
- [`incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) {{ReadOnlyInline}}
  - : Repräsentiert einen oder mehrere vom Server geöffnete bidirektionale Streams. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekten zurück. Jeder davon kann verwendet werden, um Daten vom Server zu lesen und Daten an ihn zurückzuschreiben.
- [`incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) {{ReadOnlyInline}}
  - : Repräsentiert einen oder mehrere vom Server geöffnete unidirektionale Streams. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurück. Jeder davon kann verwendet werden, um Daten vom Server zu lesen.
- [`protocol`](/de/docs/Web/API/WebTransport/protocol) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der das vom Server ausgewählte anwendungsspezifische Protokoll angibt, oder `""`, wenn keines ausgewählt wurde.
    Die Protokollpräferenzen des Clients werden dem Konstruktor über die Konstruktoroption [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols) übergeben.
- [`ready`](/de/docs/Web/API/WebTransport/ready) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das erfüllt wird, wenn die Verbindung einsatzbereit ist.
- [`reliability`](/de/docs/Web/API/WebTransport/reliability) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der angibt, ob die Verbindung nur zuverlässige Transportwege oder auch unzuverlässige Transportwege (wie UDP) unterstützt.

## Instanzmethoden

- [`close()`](/de/docs/Web/API/WebTransport/close)
  - : Schließt eine laufende WebTransport-Sitzung.
- [`createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream)
  - : Öffnet asynchron einen bidirektionalen Stream ([`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)), mit dem Daten vom Server gelesen und an ihn geschrieben werden können.
- [`createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup)
  - : Gibt eine [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) zurück, mit der Streams und Datagramme gruppiert werden können, sodass ihre relative Sendepriorität gemeinsam gesteuert werden kann.
- [`createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream)
  - : Öffnet asynchron einen unidirektionalen Stream ([`WritableStream`](/de/docs/Web/API/WritableStream)), mit dem Daten an den Server geschrieben werden können.
- [`exportKeyingMaterial()`](/de/docs/Web/API/WebTransport/exportKeyingMaterial) {{experimental_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Schlüsselmaterial erfüllt wird, das aus der TLS-Sitzung abgeleitet wird, die der Verbindung zugrunde liegt.
- [`getStats()`](/de/docs/Web/API/WebTransport/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, das Statistiken zur HTTP/3-Verbindung enthält.

## Beispiele

Der folgende Beispielcode zeigt, wie Sie eine Verbindung zu einem HTTP/3-Server herstellen, indem Sie dessen URL an den Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) übergeben.
Beachten Sie, dass als Schema HTTPS verwendet und die Portnummer ausdrücklich angegeben werden muss.
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

Sie können auf das Schließen der Verbindung reagieren, indem Sie warten, bis das Promise [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed) erfüllt wird.
Fehler, die von `WebTransport`-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzlich zu den standardmäßigen [`DOMException`](/de/docs/Web/API/DOMException)-Daten weitere Informationen.

Die folgende Methode `closeTransport()` zeigt eine mögliche Implementierung.
Innerhalb eines `try...catch`-Blocks wartet sie mit `await` darauf, dass das Promise `closed` erfüllt oder zurückgewiesen wird, und meldet anschließend, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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

Wir könnten die obigen asynchronen Funktionen in einer eigenen asynchronen Funktion aufrufen, wie im Folgenden gezeigt.

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

Weitere Codebeispiele finden Sie auf den Seiten der jeweiligen Eigenschaften und Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
