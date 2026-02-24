---
title: WebTransportSendStream
slug: Web/API/WebTransportSendStream
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("WebTransport API")}}{{securecontext_header}} {{AvailableInWorkers}}

Das `WebTransportSendStream`-Interface der [WebTransport-API](/de/docs/Web/API/WebTransport_API) ist ein spezialisiertes [`WritableStream`](/de/docs/Web/API/WritableStream), das verwendet wird, um ausgehende Daten in sowohl unidirektionalen als auch bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Streams zu senden.

Der Sendestream ist ein [schreibbarer Stream](/de/docs/Web/API/Streams_API/Using_writable_streams) von [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), in den geschrieben werden kann, um Daten an einen Server zu senden. Zusätzlich bietet er Streaming-Funktionen wie das Setzen der Sendereihenfolge und das Abrufen von Stream-Statistiken.

Objekte dieses Typs werden nicht direkt konstruiert. Beim Erstellen eines unidirektionalen Streams gibt [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) ein Objekt dieses Typs zurück, um Daten zu senden. Beim Erstellen eines bidirektionalen Streams mit [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) gibt die Methode einen [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) zurück, und das Sendestream-Objekt kann von dessen [`writable`](/de/docs/Web/API/WebTransportBidirectionalStream/writable)-Eigenschaft abgerufen werden. Wenn ein bidirektionaler Stream vom entfernten Ende initiiert wird, kann ein Objekt dieses Typs ähnlich mit Hilfe von [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) abgerufen werden.

`WebTransportSendStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface, [`WritableStream`](/de/docs/Web/API/WritableStream)._

- [`WebTransportSendStream.getStats()`](/de/docs/Web/API/WebTransportSendStream/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Statistiken in Bezug auf diesen Stream aufgelöst wird.

## Instanzmethoden

_Erbt auch Methoden von seinem übergeordneten Interface, [`WritableStream`](/de/docs/Web/API/WritableStream)._

<!-- WebTransportSendStream.sendGroup not implemented in any browser -->

- [`WebTransportSendStream.sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder)
  - : Gibt die Sendepriorität dieses Streams relativ zu anderen Streams an, für die der Wert gesetzt wurde.

## Beispiele

Siehe [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) für ein Beispiel, wie man einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportSendStream`-Objekten erhält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
