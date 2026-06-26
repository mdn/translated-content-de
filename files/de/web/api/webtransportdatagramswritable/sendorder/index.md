---
title: "WebTransportDatagramsWritable: sendOrder-Eigenschaft"
short-title: sendOrder
slug: Web/API/WebTransportDatagramsWritable/sendOrder
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

Die **`sendOrder`**-Eigenschaft des [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Interfaces ruft eine Ganzzahl ab oder setzt sie, die die Priorität der Datagramme dieses Streams relativ zu anderen Streams und Datagrammen in derselben [`sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup) angibt.

Innerhalb einer `sendGroup` werden die zum Senden in die Warteschlange gestellten Bytes auf Streams und Datagrammen mit einer höheren `sendOrder` vor jeglichen Bytes von niedriger priorisierten gesendet.
Verschiedene Gruppen sollten für die Zwecke der Bandbreitenzuweisung gleich behandelt werden — wobei die genaue Art und Weise, wie die Bandbreite zwischen Gruppen aufgeteilt wird, implementierungsspezifisch ist.

## Wert

Eine Ganzzahl, die die relative Priorität der Datagramme dieses Streams beim Senden von Bytes angibt.
Der Standardwert ist `0`.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie Sie die anfängliche `sendOrder` festlegen können, wenn Sie [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) aufrufen, um den beschreibbaren Stream zu erstellen, den Wert aus dem Stream auszulesen und ihn dann zu ändern:

```js
const writable = transport.datagrams.createWritable({
  sendOrder: 1, // Set initial send order
});

console.log(`Send order: ${writable.sendOrder}`); // Send order: 1

const writer = writable.getWriter();
const data = new Uint8Array([65, 66, 67]);
await writer.ready;
writer.write(data).catch(() => {});

// Increase the priority of this stream's datagrams
writable.sendOrder = 2;
console.log(`Send order: ${writable.sendOrder}`); // Send order: 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams API](/de/docs/Web/API/Streams_API)
