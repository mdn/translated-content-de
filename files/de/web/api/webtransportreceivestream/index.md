---
title: WebTransportReceiveStream
slug: Web/API/WebTransportReceiveStream
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{securecontext_header}} {{AvailableInWorkers}}

Die `WebTransportReceiveStream`-Schnittstelle der {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} ist ein {{domxref("ReadableStream")}}, der zum Lesen von einem eingehenden unidirektionalen oder bidirektionalen {{domxref("WebTransport")}}-Stream verwendet werden kann.

Der Stream ist ein [lesbarer Bytestrom](/de/docs/Web/API/Streams_API/Using_readable_byte_streams) von [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) und kann entweder mit einem BYOB-Leser ([`ReadableStreamBYOBReader`](/de/docs/Web/API/ReadableStreamBYOBReader)) oder dem Standardleser ([`ReadableStreamDefaultReader`](/de/docs/Web/API/ReadableStreamDefaultReader)) konsumiert werden.

Objekte dieses Typs werden nicht direkt erstellt.
Stattdessen werden sie über die Eigenschaft [`WebTransport.incomingUnidirectionalStream`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) erhalten.

`WebTransportReceiveStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seiner Elternschnittstelle, {{domxref("ReadableStream")}}._

## Instanz-Methoden

_Erbt auch Eigenschaften von seiner Elternschnittstelle, {{domxref("ReadableStream")}}._

- {{domxref("WebTransportReceiveStream.getStats()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Statistiken zu diesem Stream aufgelöst wird.

## Beispiele

Sehen Sie sich [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) an, um ein Beispiel dafür zu erhalten, wie man einen {{domxref("ReadableStream")}} von `WebTransportReceiveStream`-Objekten erhält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
