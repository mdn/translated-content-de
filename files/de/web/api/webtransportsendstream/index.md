---
title: WebTransportSendStream
slug: Web/API/WebTransportSendStream
l10n:
  sourceCommit: 8f5f505dfb5c7907fb21f18efd03e07a2cd7b3c6
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das `WebTransportSendStream`-Interface der [WebTransport API](/de/docs/Web/API/WebTransport_API) ist ein spezialisiertes [`WritableStream`](/de/docs/Web/API/WritableStream), das zum Senden ausgehender Daten in sowohl unidirektionalen als auch bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Streams verwendet wird.

Der Sendestream ist ein [beschreibbarer Stream](/de/docs/Web/API/Streams_API/Using_writable_streams) von [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), in den geschrieben werden kann, um Daten an einen Server zu senden. Er bietet zusätzlich Streaming-Funktionen wie das Setzen der Sendepriorität und das Abrufen von Stream-Statistiken.

Objekte dieses Typs werden nicht direkt konstruiert. Beim Erstellen eines unidirektionalen Streams gibt der Aufruf von [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) ein Objekt dieses Typs zum Senden von Daten zurück. Bei der Erstellung eines bidirektionalen Streams mithilfe von [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) gibt die Methode einen [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) zurück, und das Sendestream-Objekt kann aus seiner [`writable`](/de/docs/Web/API/WebTransportBidirectionalStream/writable)-Eigenschaft erhalten werden. Wenn ein bidirektionaler Stream von der Gegenstelle initiiert wird, kann ein Objekt dieses Typs ebenfalls über [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) bezogen werden.

`WebTransportSendStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seiner Elternschnittstelle, [`WritableStream`](/de/docs/Web/API/WritableStream)._

- [`WebTransportSendStream.sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder)
  - : Gibt die Sendepriorität dieses Streams im Vergleich zu anderen Streams an, für die der Wert festgelegt wurde.

## Instanzmethoden

_Erbt auch Methoden von seiner Elternschnittstelle, [`WritableStream`](/de/docs/Web/API/WritableStream)._

- [`WebTransportSendStream.getStats()`](/de/docs/Web/API/WebTransportSendStream/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Statistiken zu diesem Stream erfüllt wird.
- [`WebTransportSendStream.getWriter()`](/de/docs/Web/API/WebTransportSendStream/getWriter)
  - : Gibt ein neues `WebTransportWriter`-Objekt zurück und sperrt den Stream darauf. Solange der Stream gesperrt ist, kann kein anderer Writer erworben werden, bis dieser freigegeben wird.

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
