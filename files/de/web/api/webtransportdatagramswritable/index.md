---
title: WebTransportDatagramsWritable
slug: Web/API/WebTransportDatagramsWritable
l10n:
  sourceCommit: c4ced66f871dd67ff683526ecc38e9eb7ebb5c9a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`WebTransportDatagramsWritable`**-Interface der [WebTransport-API](/de/docs/Web/API/WebTransport_API) ist ein spezialisiertes [`WritableStream`](/de/docs/Web/API/WritableStream), das verwendet werden kann, um ausgehende Datagramme über eine [`WebTransport`](/de/docs/Web/API/WebTransport)-Verbindung zu schreiben.

`WebTransportDatagramsWritable` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Eltern-Interface, [`WritableStream`](/de/docs/Web/API/WritableStream)._

- [`WebTransportDatagramsWritable.sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup)
  - : Ruft eine [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) ab oder setzt diese, unter der die Datagramme des Streams für die `sendOrder`-Priorisierung gruppiert werden.
- [`WebTransportDatagramsWritable.sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder)
  - : Ruft eine Ganzzahl ab oder setzt diese, die die Priorität dieses Streams relativ zu anderen Streams und Datagrammen in derselben `sendGroup` angibt.

## Instanz-Methoden

_Erbt Methoden von seinem Eltern-Interface, [`WritableStream`](/de/docs/Web/API/WritableStream)._

## Beschreibung

Zusätzlich zur Funktionalität eines standardmäßigen `WritableStream` bietet das `WebTransportDatagramsWritable`-Interface die `sendGroup`-Eigenschaft, die die Gruppe von Streams und Datagrammen angibt, zu der dieser Stream gehört, und die `sendOrder`-Eigenschaft, die die relative Priorität dieses Streams innerhalb dieser Gruppe angibt.
Innerhalb einer Gruppe werden Bytes, die in Streams und Datagrammen mit höherer Priorität eingereiht sind, vor den Bytes aus solchen mit niedrigerer Priorität gesendet.
Verschiedene Gruppen sollen bei der Bandbreitenzuteilung als gleich betrachtet werden — obwohl die genaue Art und Weise, wie Bandbreite zwischen Gruppen aufgeteilt wird, implementierungsdefiniert ist.

Objekte dieses Typs werden nicht direkt konstruiert.
Stattdessen wird eine Instanz von der [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable)-Methode von [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) zurückgegeben, die über die [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams)-Eigenschaft zugänglich ist.

Die Übertragung ist unzuverlässig, was bedeutet, dass, obwohl Sie die Prioritätsreihenfolge definieren können, keine Garantie besteht, dass jedes Datagramm gesendet wird oder dass sie in einer bestimmten Reihenfolge ankommen.

## Beispiele

Siehe [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) für ein Beispiel, das zeigt, wie ein `WebTransportDatagramsWritable` erstellt wird und wie es verwendet wird, um ausgehende Datagramme zu schreiben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams-API](/de/docs/Web/API/Streams_API)
- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
