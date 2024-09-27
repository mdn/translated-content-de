---
title: WebTransportSendStream
slug: Web/API/WebTransportSendStream
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{securecontext_header}} {{AvailableInWorkers}}

Das `WebTransportSendStream`-Interface der [WebTransport API](/de/docs/Web/API/WebTransport_API) ist ein spezialisiertes [`WritableStream`](/de/docs/Web/API/WritableStream), das verwendet wird, um ausgehende Daten in sowohl unidirektionalen als auch bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Streams zu senden.

Der Sendestream ist ein [writable stream](/de/docs/Web/API/Streams_API/Using_writable_streams) von [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), in den geschrieben werden kann, um Daten an einen Server zu senden.
Er bietet zusätzlich Streaming-Funktionen wie das Festlegen der Sende-Reihenfolge und das Abrufen von Stream-Statistiken.

Objekte dieses Typs werden nicht direkt konstruiert.
Beim Erstellen eines unidirektionalen Streams gibt die Methode [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) ein Objekt dieses Typs zurück, um Daten zu senden.
Beim Erstellen eines bidirektionalen Streams mit der Methode [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) wird ein [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) zurückgegeben, und das Sendestream-Objekt kann über dessen [`writable`](/de/docs/Web/API/WebTransportBidirectionalStream/writable)-Eigenschaft abgerufen werden.
Wenn ein bidirektionaler Stream von der Gegenstelle initiiert wird, kann ein Objekt dieses Typs ähnlich mit [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) abgerufen werden.

`WebTransportSendStream` ist ein [transferable object](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`WritableStream`](/de/docs/Web/API/WritableStream)._

- [`WebTransportSendStream.getStats()`](/de/docs/Web/API/WebTransportSendStream/getStats) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Statistiken zu diesem Stream aufgelöst wird.

## Instanzmethoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`WritableStream`](/de/docs/Web/API/WritableStream)._

<!-- WebTransportSendStream.sendGroup not implemented in any browser -->

- [`WebTransportSendStream.sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder) {{Experimental_Inline}}
  - : Gibt die Sendpriorität dieses Streams relativ zu anderen Streams an, für die der Wert festgelegt wurde.

## Beispiele

Sehen Sie sich [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) für ein Beispiel an, wie man einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportSendStream`-Objekten erhält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
