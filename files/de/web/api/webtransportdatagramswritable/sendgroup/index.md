---
title: "WebTransportDatagramsWritable: sendGroup Eigenschaft"
short-title: sendGroup
slug: Web/API/WebTransportDatagramsWritable/sendGroup
l10n:
  sourceCommit: c4ced66f871dd67ff683526ecc38e9eb7ebb5c9a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`sendGroup`**-Eigenschaft der [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Schnittstelle repräsentiert die [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup), zu der dieses `WebTransportDatagramsWritable` für die Zwecke der Priorisierung der [`sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder) gruppiert ist.

Innerhalb einer Gruppe werden die für das Senden auf Streams und Datagrammen angezeigten Bytes mit einer höheren `sendOrder` vor allen Bytes aus solchen mit niedrigerer Priorität gesendet. Verschiedene Gruppen sollen gleich behandelt werden, um die Bandbreitenzuteilung zu gewährleisten – wobei die genaue Art und Weise, wie die Bandbreite zwischen den Gruppen aufgeteilt wird, von der Implementierung definiert wird.

## Wert

Ein `WebTransportSendGroup`-Objekt oder `null`, um die Standard-Sendegruppe anzugeben.
Der Standardwert ist `null`.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn eine `WebTransportSendGroup` gesetzt wird, die mit einem anderen `WebTransport`-Objekt als diesem Stream verbunden ist.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel erstellt eine Sendegruppe mit der Methode [`WebTransport.createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup) und verwendet diese dann mit einem `sendOrder`-Wert, um die Datagramme, die in den Stream geschrieben werden, im Vergleich zu anderen Streams und Datagrammen, die Teil derselben Gruppe sind, zu priorisieren:

```js
const sendGroup = transport.createSendGroup();

const writable = transport.datagrams.createWritable({
  sendGroup,
  sendOrder: 1,
});

console.log(writable.sendGroup === sendGroup); // true

const writer = writable.getWriter();
const data = new Uint8Array([65, 66, 67]);
await writer.ready;
writer.write(data).catch(() => {});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Streams API](/de/docs/Web/API/Streams_API)
- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
