---
title: WebTransportSendStream
slug: Web/API/WebTransportSendStream
l10n:
  sourceCommit: c4ced66f871dd67ff683526ecc38e9eb7ebb5c9a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das `WebTransportSendStream`-Interface der [WebTransport API](/de/docs/Web/API/WebTransport_API) ist ein spezialisierter [`WritableStream`](/de/docs/Web/API/WritableStream), der verwendet wird, um ausgehende Daten in unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Streams zu senden.

Der Sendestream ist ein [WritableStream](/de/docs/Web/API/Streams_API/Using_writable_streams) von [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), der beschrieben werden kann, um Daten an einen Server zu senden. Darüber hinaus bietet er Streaming-Funktionen wie das Festlegen der Sende-Reihenfolge und das Abrufen von Stream-Statistiken.

Objekte dieses Typs werden nicht direkt konstruiert. Beim Erstellen eines unidirektionalen Streams gibt die Methode [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream) ein Objekt dieses Typs zurück, um Daten zu senden. Beim Erstellen eines bidirektionalen Streams mit [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream), gibt die Methode einen [`WebTransportBidirectionalStream`](/de/docs/Web/API/WebTransportBidirectionalStream) zurück, und das Sendestream-Objekt kann über seine [`writable`](/de/docs/Web/API/WebTransportBidirectionalStream/writable)-Eigenschaft abgerufen werden. Wenn ein bidirektionaler Stream vom entfernten Ende initiiert wird, kann ein Objekt dieses Typs ebenfalls über [`WebTransport.incomingBidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingBidirectionalStreams) abgerufen werden.

`WebTransportSendStream` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`WritableStream`](/de/docs/Web/API/WritableStream)._

- [`WebTransportSendStream.sendGroup`](/de/docs/Web/API/WebTransportSendStream/sendGroup)
  - : Die [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup), unter der dieser Stream für Priorisierungszwecke der `sendOrder` gruppiert ist.
- [`WebTransportSendStream.sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder)
  - : Gibt die Sendepriorität dieses Streams im Verhältnis zu anderen Streams an, für die der Wert festgelegt wurde.

## Instanzmethoden

_Erbt auch Methoden von seinem Eltern-Interface, [`WritableStream`](/de/docs/Web/API/WritableStream)._

- [`WebTransportSendStream.getStats()`](/de/docs/Web/API/WebTransportSendStream/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Statistiken zu diesem Stream erfüllt wird.
- [`WebTransportSendStream.getWriter()`](/de/docs/Web/API/WebTransportSendStream/getWriter)
  - : Gibt ein neues `WebTransportWriter`-Objekt zurück und sperrt den Stream für dieses Objekt. Solange der Stream gesperrt ist, kann kein anderer Writer erworben werden, bis dieser freigegeben wird.

## Beispiele

Sehen Sie sich [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) für ein Beispiel an, wie Sie einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportSendStream`-Objekten erhalten können.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
