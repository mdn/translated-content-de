---
title: WebTransport
slug: Web/API/WebTransport
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`WebTransport`**-Schnittstelle der [WebTransport API](/de/docs/Web/API/WebTransport_API) bietet Funktionen, mit denen ein User Agent eine Verbindung zu einem HTTP/3-Server herstellen, eine zuverlässige oder unzuverlässige Datenübertragung in eine oder beide Richtungen initiieren und die Verbindung schließen kann, sobald sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)
  - : Erstellt eine neue `WebTransport`-Objektinstanz.

## Statische Eigenschaften

- [`supportsReliableOnly`](/de/docs/Web/API/WebTransport/supportsReliableOnly_static) {{ReadOnlyInline}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob der Browser WebTransport-Sitzungen ausschließlich über zuverlässige Transportprotokolle unterstützt.

## Instanzeigenschaften

- [`anticipatedConcurrentIncomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingBidirectionalStreams)
  - : Gibt die Anzahl eingehender bidirektionaler Streams an, die der Server nach Erwartung der Anwendung gleichzeitig geöffnet haben wird.
- [`anticipatedConcurrentIncomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/anticipatedConcurrentIncomingUnidirectionalStreams)
  - : Gibt die Anzahl eingehender unidirektionaler Streams an, die der Server nach Erwartung der Anwendung gleichzeitig geöffnet haben wird.
- [`closed`](/de/docs/Web/API/WebTransport/closed) {{ReadOnlyInline}}
  - : Gibt eine {{jsxref("Promise")}} zurück, die erfüllt wird, wenn die Verbindung geschlossen wird.
- [`congestionControl`](/de/docs/Web/API/WebTransport/congestionControl) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die angibt, ob die Anwendung beim Senden von Daten einen hohen Durchsatz oder eine geringe Latenz bevorzugt.
- [`datagrams`](/de/docs/Web/API/WebTransport/datagrams) {{ReadOnlyInline}}
  - : Gibt eine [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Instanz zurück, mit der Datagramme gesendet und empfangen werden können.
- [`draining`](/de/docs/Web/API/WebTransport/draining) {{ReadOnlyInline}}
  - : Gibt eine {{jsxref("Promise")}} zurück, die erfüllt wird, wenn die Transportsitzung beginnt, auszulaufen.
- [`incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) {{ReadOnlyInline}}
  - : Repräsentiert einen oder mehrere vom Server geöffnete bidirektionale Streams. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekten zurück. Jeder dieser Streams kann verwendet werden, um Daten vom Server zu lesen und Daten an ihn zu schreiben.
- [`incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) {{ReadOnlyInline}}
  - : Repräsentiert einen oder mehrere vom Server geöffnete unidirektionale Streams. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) mit [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurück. Jeder dieser Streams kann verwendet werden, um Daten vom Server zu lesen.
- [`protocol`](/de/docs/Web/API/WebTransport/protocol) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die das vom Server ausgewählte anwendungsspezifische Protokoll angibt, oder `""`, wenn keines ausgewählt wurde.
    Die Protokollpräferenzen des Clients werden dem Konstruktor über die Konstruktoroption [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols) übergeben.
- [`ready`](/de/docs/Web/API/WebTransport/ready) {{ReadOnlyInline}}
  - : Gibt eine {{jsxref("Promise")}} zurück, die erfüllt wird, wenn die Verbindung einsatzbereit ist.
- [`reliability`](/de/docs/Web/API/WebTransport/reliability) {{ReadOnlyInline}}
  - : Gibt eine Zeichenfolge zurück, die angibt, ob die Verbindung nur zuverlässige Transportprotokolle oder auch unzuverlässige Transportprotokolle (wie UDP) unterstützt.
- [`responseHeaders`](/de/docs/Web/API/WebTransport/responseHeaders) {{ReadOnlyInline}}
  - : Gibt ein [`Headers`](/de/docs/Web/API/Headers)-Objekt mit den HTTP-Headern aus der Antwort des Servers auf die Anfrage zum Aufbau der Sitzung zurück oder `null`, wenn die Sitzung noch nicht hergestellt wurde.

## Instanzmethoden

- [`close()`](/de/docs/Web/API/WebTransport/close)
  - : Schließt eine laufende WebTransport-Sitzung.
- [`createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream)
  - : Öffnet asynchron einen bidirektionalen Stream ([`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)), mit dem Daten vom Server gelesen und an ihn geschrieben werden können.
- [`createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup)
  - : Gibt eine [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) zurück, mit der Streams und Datagramme gruppiert werden können, sodass ihre relative Sendepriorität gemeinsam gesteuert werden kann.
- [`createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream)
  - : Öffnet asynchron einen unidirektionalen Stream ([`WritableStream`](/de/docs/Web/API/WritableStream)), mit dem Daten an den Server geschrieben werden können.
- [`exportKeyingMaterial()`](/de/docs/Web/API/WebTransport/exportKeyingMaterial)
  - : Gibt eine {{jsxref("Promise")}} zurück, die mit Schlüsselmaterial erfüllt wird, das aus der TLS-Sitzung abgeleitet wurde, auf der die Verbindung basiert.
- [`getStats()`](/de/docs/Web/API/WebTransport/getStats)
  - : Gibt eine {{jsxref("Promise")}} zurück, die mit einem Objekt erfüllt wird, das Statistiken zur zugrunde liegenden Verbindung des Transports enthält.

## Beispiele

Der folgende Beispielcode zeigt, wie Sie eine Verbindung zu einem HTTP/3-Server herstellen, indem Sie dessen URL an den Konstruktor [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport) übergeben.
Beachten Sie, dass das Schema HTTPS sein und die Portnummer ausdrücklich angegeben werden muss.
Sobald die [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Promise erfüllt ist, können Sie die Verbindung verwenden.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie warten, bis die [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed)-Promise erfüllt wird.
Fehler, die von `WebTransport`-Operationen zurückgegeben werden, sind vom Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzlich zu den Standardinformationen einer [`DOMException`](/de/docs/Web/API/DOMException) weitere Daten.

Die folgende Methode `closeTransport()` zeigt eine mögliche Implementierung.
In einem `try...catch`-Block wartet sie mit `await` darauf, dass die `closed`-Promise erfüllt oder zurückgewiesen wird, und meldet anschließend, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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

Wie unten gezeigt, können wir die obigen asynchronen Funktionen innerhalb einer eigenen asynchronen Funktion aufrufen.

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

Weitere Codebeispiele finden Sie auf den Seiten der einzelnen Eigenschaften und Methoden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
