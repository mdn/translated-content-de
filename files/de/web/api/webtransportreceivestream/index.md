---
title: WebTransportReceiveStream
slug: Web/API/WebTransportReceiveStream
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("WebTransport API")}}{{securecontext_header}} {{AvailableInWorkers}}

Das `WebTransportReceiveStream`-Interface der [WebTransport API](/de/docs/Web/API/WebTransport_API) ist ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), der zum Lesen von eingehenden unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Streams verwendet werden kann.

Der Stream ist ein [lesbarer Byte-Stream](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) von [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) und kann entweder mit einem BYOB-Reader ([`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)) oder dem Standard-Reader ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) konsumiert werden.

Objekte dieses Typs werden nicht direkt erstellt. Stattdessen werden sie über die Eigenschaft [`WebTransport.incomingUnidirectionalStream`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) erhalten.

`WebTransportReceiveStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erhält Eigenschaften von seinem übergeordneten Interface, [`ReadableStream`](/de/docs/Web/API/ReadableStream)._

## Instanzmethoden

_Erhält ebenfalls Eigenschaften von seinem übergeordneten Interface, [`ReadableStream`](/de/docs/Web/API/ReadableStream)._

- [`WebTransportReceiveStream.getStats()`](/de/docs/Web/API/WebTransportReceiveStream/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Statistiken zu diesem Stream aufgelöst wird.

## Beispiele

Siehe [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) für ein Beispiel, wie Sie einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportReceiveStream`-Objekten erhalten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
