---
title: WebTransport
slug: Web/API/WebTransport
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`WebTransport`**-Interface der {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} bietet Funktionen, die es einem Benutzeragenten ermöglichen, sich mit einem HTTP/3-Server zu verbinden, zuverlässigen und unzuverlässigen Transport in eine oder beide Richtungen zu initiieren und die Verbindung zu schließen, wenn sie nicht mehr benötigt wird.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("WebTransport.WebTransport", "WebTransport()")}}
  - : Erstellt eine neue Instanz des `WebTransport`-Objekts.

## Instanz-Eigenschaften

- {{domxref("WebTransport.closed", "closed")}} {{ReadOnlyInline}}
  - : Gibt ein Versprechen zurück, das aufgelöst wird, wenn der Transport geschlossen wird.
- {{domxref("WebTransport.datagrams", "datagrams")}} {{ReadOnlyInline}}
  - : Gibt eine Instanz von {{domxref("WebTransportDatagramDuplexStream")}} zurück, die verwendet werden kann, um Datagramme zu senden und zu empfangen.
- {{domxref("WebTransport.congestionControl", "congestionControl")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der die Anwendungsvorliebe für entweder hohen Durchsatz oder niedrige Latenz bei der Datenübertragung anzeigt.
- {{domxref("WebTransport.incomingBidirectionalStreams", "incomingBidirectionalStreams")}} {{ReadOnlyInline}}
  - : Repräsentiert einen oder mehrere bidirektionale Streams, die vom Server geöffnet wurden. Gibt einen {{domxref("ReadableStream")}} von {{domxref("WebTransportBidirectionalStream")}}-Objekten zurück. Jedes kann verwendet werden, um Daten vom Server zu lesen und Daten zurück an den Server zu schreiben.
- {{domxref("WebTransport.incomingUnidirectionalStreams", "incomingUnidirectionalStreams")}} {{ReadOnlyInline}}
  - : Repräsentiert einen oder mehrere unidirektionale Streams, die vom Server geöffnet wurden. Gibt einen {{domxref("ReadableStream")}} von {{domxref("WebTransportReceiveStream")}}-Objekten zurück. Jedes kann verwendet werden, um Daten vom Server zu lesen.
- {{domxref("WebTransport.ready", "ready")}} {{ReadOnlyInline}}
  - : Gibt ein Versprechen zurück, das aufgelöst wird, wenn der Transport einsatzbereit ist.
- {{domxref("WebTransport.reliability", "reliability")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen String zurück, der anzeigt, ob die Verbindung nur zuverlässige Transporte unterstützt oder ob sie auch unzuverlässige Transporte (wie UDP) unterstützt.

## Instanz-Methoden

- {{domxref("WebTransport.close", "close()")}}
  - : Schließt eine laufende WebTransport-Sitzung.
- {{domxref("WebTransport.createBidirectionalStream", "createBidirectionalStream()")}}
  - : Öffnet asynchron einen bidirektionalen Stream ({{domxref("WebTransportBidirectionalStream")}}), der verwendet werden kann, um vom Server zu lesen und zum Server zu schreiben.
- {{domxref("WebTransport.createUnidirectionalStream", "createUnidirectionalStream()")}}
  - : Öffnet asynchron einen unidirektionalen Stream ({{domxref("WritableStream")}}), der verwendet werden kann, um zum Server zu schreiben.
- {{domxref("WebTransport.getStats", "getStats()")}} {{Experimental_Inline}}
  - : Gibt asynchron ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, das HTTP/3-Verbindungsstatistiken enthält.

## Beispiele

Der folgende Beispielcode zeigt, wie Sie sich mit einem HTTP/3-Server verbinden, indem Sie seine URL an den {{domxref("WebTransport.WebTransport", "WebTransport()")}}-Konstruktor übergeben. Beachten Sie, dass das Schema HTTPS sein muss und die Portnummer explizit angegeben werden muss. Sobald das {{domxref("WebTransport.ready")}}-Versprechen erfüllt ist, können Sie die Verbindung nutzen.

```js
async function initTransport(url) {
  // Initialize transport connection
  const transport = new WebTransport(url);

  // The connection can be used once ready fulfills
  await transport.ready;
  return transport;
}
```

Sie können auf das Schließen der Verbindung reagieren, indem Sie darauf warten, dass das {{domxref("WebTransport.closed")}}-Versprechen erfüllt wird. Fehler, die von `WebTransport`-Operationen zurückgegeben werden, sind vom Typ {{domxref("WebTransportError")}} und enthalten zusätzliche Daten neben der Standardmenge von {{domxref("DOMException")}}.

Die `closeTransport()`-Methode unten zeigt eine mögliche Implementierung. Innerhalb eines `try...catch`-Blocks wird `await` verwendet, um auf die Erfüllung oder Ablehnung des `closed`-Versprechens zu warten, und es wird berichtet, ob die Verbindung absichtlich oder aufgrund eines Fehlers geschlossen wurde.

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
  // ...

  // When done, close the transport
  await closeTransport(transport);
}

const url = "https://example.com:4999/wt";
useTransport(url);
```

Für weiteren Beispielcode siehe die einzelnen Eigen- und Methodenseiten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
