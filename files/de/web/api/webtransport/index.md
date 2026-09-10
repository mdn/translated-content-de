---
title: WebTransport
slug: Web/API/WebTransport
l10n:
  sourceCommit: 3100645fa08ae52995bb32423088433cfa6d9cca
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`WebTransport`**-Schnittstelle der [WebTransport API](/de/docs/Web/API/WebTransport_API) stellt Funktionen bereit, mit denen ein User-Agent eine Verbindung zu einem HTTP/3-Server herstellen, zuverlässige und unzuverlässige Übertragungen in eine oder beide Richtungen initiieren und die Verbindung schließen kann, sobald sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)
  - : Erstellt eine neue `WebTransport`-Objektinstanz.

## Instanzeigenschaften

- [`closed`](/de/docs/Web/API/WebTransport/closed) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Transport geschlossen wird.
- [`datagrams`](/de/docs/Web/API/WebTransport/datagrams) {{ReadOnlyInline}}
  - : Gibt eine [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream)-Instanz zurück, die zum Senden und Empfangen von Datagrammen verwendet werden kann.
- [`congestionControl`](/de/docs/Web/API/WebTransport/congestionControl) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der die Anwendungspräferenz für entweder hohen Durchsatz oder geringe Latenz beim Senden von Daten angibt.
- [`draining`](/de/docs/Web/API/WebTransport/draining) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn die Transportsitzung mit dem Leeren beginnt.
- [`incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) {{ReadOnlyInline}}
  - : Repräsentiert einen oder mehrere vom Server geöffnete bidirektionale Streams. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)-Objekten zurück. Jeder davon kann verwendet werden, um Daten vom Server zu lesen und Daten an ihn zurückzuschreiben.
- [`incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) {{ReadOnlyInline}}
  - : Repräsentiert einen oder mehrere vom Server geöffnete unidirektionale Streams. Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Objekten zurück. Jeder davon kann verwendet werden, um Daten vom Server zu lesen.
- [`protocol`](/de/docs/Web/API/WebTransport/protocol) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der das vom Server ausgewählte anwendungsspezifische Protokoll repräsentiert, oder `""`, wenn keines ausgewählt wurde.
    Client-Präferenzen für das Protokoll werden in der Konstruktoroption [`protocols`](/de/docs/Web/API/WebTransport/WebTransport#protocols) an den Konstruktor übergeben.
- [`ready`](/de/docs/Web/API/WebTransport/ready) {{ReadOnlyInline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Transport einsatzbereit ist.
- [`reliability`](/de/docs/Web/API/WebTransport/reliability) {{ReadOnlyInline}}
  - : Gibt einen String zurück, der angibt, ob die Verbindung nur zuverlässige Übertragungen unterstützt oder auch unzuverlässige Übertragungen (wie UDP).

## Instanzmethoden

- [`close()`](/de/docs/Web/API/WebTransport/close)
  - : Schließt eine laufende WebTransport-Sitzung.
- [`createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream)
  - : Öffnet asynchron einen bidirektionalen Stream ([`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream)), der zum Lesen vom und Schreiben auf den Server verwendet werden kann.
- [`createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup)
  - : Gibt eine [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) zurück, die verwendet werden kann, um Streams und Datagramme zu gruppieren, sodass ihre relative Sendepriorität als Gruppe gesteuert werden kann.
- [`createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream)
  - : Öffnet asynchron einen unidirektionalen Stream ([`WritableStream`](/de/docs/Web/API/WritableStream)), der zum Schreiben auf den Server verwendet werden kann.
- [`exportKeyingMaterial()`](/de/docs/Web/API/WebTransport/exportKeyingMaterial) {{experimental_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Schlüsselmaterial erfüllt wird, das aus der der Verbindung zugrunde liegenden TLS-Sitzung abgeleitet wurde.
- [`getStats()`](/de/docs/Web/API/WebTransport/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, das HTTP/3-Verbindungsstatistiken enthält.

## Beispiele

Der folgende Beispielcode zeigt, wie Sie eine Verbindung zu einem HTTP/3-Server herstellen, indem Sie dessen URL an den [`WebTransport()`](/de/docs/Web/API/WebTransport/WebTransport)-Konstruktor übergeben.
Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss.
Sobald das [`WebTransport.ready`](/de/docs/Web/API/WebTransport/ready)-Promise erfüllt wird, können Sie die Verbindung verwenden.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie darauf warten, dass das [`WebTransport.closed`](/de/docs/Web/API/WebTransport/closed)-Promise erfüllt wird.
Von `WebTransport`-Operationen zurückgegebene Fehler haben den Typ [`WebTransportError`](/de/docs/Web/API/WebTransportError) und enthalten zusätzlich zum Standardumfang von [`DOMException`](/de/docs/Web/API/DOMException) weitere Daten.

Die untenstehende Methode `closeTransport()` zeigt eine mögliche Implementierung.
Innerhalb eines `try...catch`-Blocks verwendet sie `await`, um darauf zu warten, dass das `closed`-Promise erfüllt oder abgelehnt wird, und meldet dann, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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

- [WebTransport verwenden](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [WebSockets API](/de/docs/Web/API/WebSockets_API)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
