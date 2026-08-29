---
title: "WebTransportDatagramsWritable: sendOrder-Eigenschaft"
short-title: sendOrder
slug: Web/API/WebTransportDatagramsWritable/sendOrder
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`sendOrder`**-Eigenschaft des [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Interfaces gibt eine ganze Zahl zurück oder legt sie fest, die die Priorität der Datagramme dieses Streams im Verhältnis zu anderen Streams und Datagrammen in derselben [`sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup) angibt.

Innerhalb einer `sendGroup` werden die zum Versand in die Warteschlange gestellten Bytes von Streams und Datagrammen mit einer höheren `sendOrder`-Priorität vor allen Bytes von niedrigeren Prioritäten gesendet.
Verschiedene Gruppen werden in Bezug auf die Bandbreitenzuweisung als gleich behandelt — obwohl die genaue Art und Weise, wie die Bandbreite zwischen Gruppen aufgeteilt wird, von der Implementierung abhängt.

## Wert

Eine ganze Zahl, die die relative Priorität der Datagramme dieses Streams beim Senden von Bytes angibt.
Der Standardwert ist `0`.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel zeigt, wie Sie die anfängliche `sendOrder` festlegen können, wenn Sie [`createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable) aufrufen, um den beschreibbaren Stream zu erstellen, wie Sie den Wert aus dem Stream zurücklesen und dann ändern können:

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
- [Streams-API](/de/docs/Web/API/Streams_API)
