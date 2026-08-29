---
title: WebTransportDatagramsWritable
slug: Web/API/WebTransportDatagramsWritable
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`WebTransportDatagramsWritable`**-Schnittstelle der [WebTransport-API](/de/docs/Web/API/WebTransport_API) ist ein spezialisierter [`WritableStream`](/de/docs/Web/API/WritableStream), der verwendet werden kann, um ausgehende Datagramme zu einer [`WebTransport`](/de/docs/Web/API/WebTransport)-Verbindung zu schreiben.

`WebTransportDatagramsWritable` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seiner übergeordneten Schnittstelle, [`WritableStream`](/de/docs/Web/API/WritableStream)._

- [`WebTransportDatagramsWritable.sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup)
  - : Ruft eine [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) ab oder setzt diese, unter der die Datagramme des Streams zur Priorisierung von `sendOrder` gruppiert werden.
- [`WebTransportDatagramsWritable.sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder)
  - : Ruft eine Ganzzahl ab oder setzt diese, die die Priorität dieses Streams relativ zu anderen Streams und Datagrammen in derselben `sendGroup` angibt.

## Instanz-Methoden

_Erbt Methoden von seiner übergeordneten Schnittstelle, [`WritableStream`](/de/docs/Web/API/WritableStream)._

## Beschreibung

Zusätzlich zur Funktionalität eines standardmäßigen `WritableStream` bietet die `WebTransportDatagramsWritable`-Schnittstelle die Eigenschaft `sendGroup`, die die Gruppe von Streams und Datagrammen angibt, zu der dieser Stream gehört, sowie die Eigenschaft `sendOrder`, die die relative Priorität dieses Streams innerhalb dieser Gruppe angibt. Innerhalb einer Gruppe werden Bytes in Streams und Datagrammen mit höherer Priorität gesendet, bevor irgendwelche Bytes von Streams mit niedrigerer Priorität gesendet werden. Unterschiedliche Gruppen sollen im Hinblick auf die Bandbreitenzuweisung gleich behandelt werden – wobei die genaue Art und Weise, wie die Bandbreite zwischen Gruppen aufgeteilt wird, implementationsabhängig ist.

Objekte dieses Typs werden nicht direkt konstruiert. Stattdessen wird eine Instanz von der [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable)-Methode von [`WebTransportDatagramDuplexStream`](/de/docs/Web/API/WebTransportDatagramDuplexStream) zurückgegeben, welche über die [`WebTransport.datagrams`](/de/docs/Web/API/WebTransport/datagrams)-Eigenschaft zugänglich ist.

Die Übertragung ist unzuverlässig, was bedeutet, dass es trotz der Möglichkeit, die Prioritätsreihenfolge festzulegen, keine Garantie dafür gibt, dass jedes Datagramm gesendet wird oder dass sie in einer bestimmten Reihenfolge ankommen.

## Beispiele

Siehe [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) für ein Beispiel, das zeigt, wie ein `WebTransportDatagramsWritable` erstellt und verwendet wird, um ausgehende Datagramme zu schreiben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams-API](/de/docs/Web/API/Streams_API)
