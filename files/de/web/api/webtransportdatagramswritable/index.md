---
title: WebTransportDatagramsWritable
slug: Web/API/WebTransportDatagramsWritable
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

Das **`WebTransportDatagramsWritable`** Interface der [WebTransport-API](/de/docs/Web/API/WebTransport_API) ist ein spezialisiertes [`WritableStream`](/de/docs/Web/API/WritableStream), das verwendet werden kann, um ausgehende Datagramme zu einer [`WebTransport`](/de/docs/Web/API/WebTransport)-Verbindung zu schreiben.

`WebTransportDatagramsWritable` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`WritableStream`](/de/docs/Web/API/WritableStream)._

- [`WebTransportDatagramsWritable.sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup) {{experimental_inline}}
  - : Ruft eine [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) ab oder legt diese fest, unter der die Datagramme des Streams für die Priorisierung des `sendOrder` gruppiert werden.
- [`WebTransportDatagramsWritable.sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder) {{experimental_inline}}
  - : Ruft eine Ganzzahl ab oder legt diese fest, die die Priorität dieses Streams relativ zu anderen Streams und Datagrammen in derselben `sendGroup` angibt.

## Instanzmethoden

_Erbt Methoden von seinem Eltern-Interface, [`WritableStream`](/de/docs/Web/API/WritableStream)._

## Beschreibung

Zusätzlich zur Funktionalität eines standardmäßigen `WritableStream` bietet das `WebTransportDatagramsWritable`-Interface die `sendGroup`-Eigenschaft, die die Gruppe von Streams und Datagrammen angibt, zu der dieser Stream gehört, und die `sendOrder`-Eigenschaft, die die relative Priorität dieses Streams innerhalb dieser Gruppe angibt.
Innerhalb einer Gruppe werden Bytes, die bei Streams und Datagrammen mit höherer Priorität eingereiht sind, vor allen Bytes von niedrigeren Prioritäten gesendet.
Verschiedene Gruppen sollen für die Zwecke der Bandbreitenverteilung als gleichwertig behandelt werden — obgleich die genaue Art und Weise, wie die Bandbreite zwischen Gruppen aufgeteilt wird, implementierungsdefiniert ist.

Objekte dieses Typs werden nicht direkt konstruiert.
Stattdessen wird eine Instanz durch die [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable)-Methode von [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) zurückgegeben, auf die über die [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams)-Eigenschaft zugegriffen werden kann.

Die Übertragung ist unzuverlässig, was bedeutet, dass, obwohl Sie die Prioritätenreihenfolge festlegen können, es keine Garantie gibt, dass jedes Datagramm gesendet oder in einem bestimmten Auftrag angekommen wird.

## Beispiele

Sehen Sie sich [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) für ein Beispiel an, das zeigt, wie man ein `WebTransportDatagramsWritable` erstellt und es verwendet, um ausgehende Datagramme zu schreiben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams-API](/de/docs/Web/API/Streams_API)
