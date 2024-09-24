---
title: WebTransportSendStream
slug: Web/API/WebTransportSendStream
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{securecontext_header}} {{AvailableInWorkers}}

Die `WebTransportSendStream`-Schnittstelle der {{domxref("WebTransport API", "WebTransport API", "", "nocode")}} ist ein spezialisierter {{domxref("WritableStream")}}, der zum Senden ausgehender Daten in unidirektionalen oder bidirektionalen {{domxref("WebTransport")}}-Streams verwendet wird.

Der Sendestream ist ein [writable stream](/de/docs/Web/API/Streams_API/Using_writable_streams) von [`Uint8Array`](/de/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array), auf den geschrieben werden kann, um Daten an einen Server zu senden. Er bietet zusätzlich Streaming-Funktionen wie das Festlegen der Sendeordnung und das Abrufen von Stream-Statistiken.

Objekte dieses Typs werden nicht direkt konstruiert. Beim Erstellen eines unidirektionalen Streams gibt die Methode {{domxref("WebTransport.createUnidirectionalStream()")}} ein Objekt dieses Typs zum Senden von Daten zurück. Beim Erstellen eines bidirektionalen Streams mit {{domxref("WebTransport.createBidirectionalStream()")}} gibt die Methode einen {{domxref("WebTransportBidirectionalStream")}} zurück, und das Sendestream-Objekt kann über seine {{domxref("WebTransportBidirectionalStream.writable", "writable")}}-Eigenschaft abgerufen werden. Wenn ein bidirektionaler Stream vom entfernten Ende initiiert wird, kann ein Objekt dieses Typs ebenfalls mit {{domxref("WebTransport.incomingBidirectionalStreams")}} abgerufen werden.

`WebTransportSendStream` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt außerdem Eigenschaften von seiner Elternschnittstelle, {{domxref("WritableStream")}}._

- {{domxref("WebTransportSendStream.getStats()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit Statistiken zu diesem Stream aufgelöst wird.

## Instanz-Methoden

_Erbt außerdem Methoden von seiner Elternschnittstelle, {{domxref("WritableStream")}}._

<!-- WebTransportSendStream.sendGroup not implemented in any browser -->

- {{domxref("WebTransportSendStream.sendOrder")}} {{Experimental_Inline}}
  - : Gibt die Sendepriorität dieses Streams im Vergleich zu anderen Streams an, für die der Wert festgelegt wurde.

## Beispiele

Siehe [`WebTransport.incomingUnidirectionalStreams`](/de/docs/Web/API/WebTransport/incomingUnidirectionalStreams) für ein Beispiel, wie man einen {{domxref("ReadableStream")}} von `WebTransportSendStream`-Objekten erhält.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- {{domxref("Streams API", "Streams API", "", "nocode")}}
- [WebTransport über HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)
