---
title: WebTransportReceiveStream
slug: Web/API/WebTransportReceiveStream
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{securecontext_header}} {{AvailableInWorkers}}

Das `WebTransportReceiveStream`-Interface der [WebTransport-API](/de/docs/Web/API/WebTransport_API) ist ein [`ReadableStream`](/de/docs/Web/API/ReadableStream), der verwendet werden kann, um aus einem eingehenden unidirektionalen oder bidirektionalen [`WebTransport`](/de/docs/Web/API/WebTransport)-Stream zu lesen.

Der Stream ist ein [lesbarer Bytestrom](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) von [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) und kann entweder mit einem BYOB-Leser ([`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)) oder dem Standardleser ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) konsumiert werden.

Objekte dieses Typs werden nicht direkt konstruiert. Stattdessen werden sie unter Verwendung der [`WebTransport.incomingUnidirectionalStream`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams)-Eigenschaft erhalten.

`WebTransportReceiveStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten Interface, [`ReadableStream`](/de/docs/Web/API/ReadableStream)._

## Instanzmethoden

_Erbt ebenfalls Eigenschaften von seinem übergeordneten Interface, [`ReadableStream`](/de/docs/Web/API/ReadableStream)._

- [`WebTransportReceiveStream.getStats()`](/de/docs/Web/API/WebTransportReceiveStream/getStats) {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Statistiken zu diesem Stream aufgelöst wird.

## Beispiele

Siehe [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) für ein Beispiel, wie man einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) von `WebTransportReceiveStream`-Objekten erhält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams-API](/de/docs/Web/API/Streams_API)
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
