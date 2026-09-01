---
title: "WebTransportDatagramsWritable: sendOrder-Eigenschaft"
short-title: sendOrder
slug: Web/API/WebTransportDatagramsWritable/sendOrder
l10n:
  sourceCommit: c4ced66f871dd67ff683526ecc38e9eb7ebb5c9a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`sendOrder`**-Eigenschaft der [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Schnittstelle repräsentiert die Priorität von Datagrammen dieses Streams relativ zu anderen Streams und Datagrammen in derselben [`sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup), als Ganzzahl.

Innerhalb einer `sendGroup` werden Bytes, die zum Senden auf Streams und Datagrammen mit einer höheren `sendOrder`-Priorität eingereiht sind, vor allen Bytes mit niedrigerer Priorität gesendet.
Verschiedene Gruppen werden gleich behandelt, was die Zuweisung von Bandbreite betrifft — obwohl die genaue Art und Weise, wie Bandbreite zwischen Gruppen aufgeteilt wird, von der Implementierung definiert ist.

## Wert

Eine Ganzzahl, die die relative Priorität der Datagramme dieses Streams beim Senden von Bytes angibt.
Der Standardwert ist `0`.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie Sie die anfängliche `sendOrder`-Priorität festlegen können, wenn [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) aufgerufen wird, um den schreibbaren Stream zu erstellen, den Wert vom Stream zurücklesen und ihn dann ändern:

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

- [Streams API](/de/docs/Web/API/Streams_API)
- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
