---
title: "WebTransportDatagramsWritable: sendGroup-Eigenschaft"
short-title: sendGroup
slug: Web/API/WebTransportDatagramsWritable/sendGroup
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

Die **`sendGroup`**-Eigenschaft des [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Interfaces erhält oder setzt die [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup), unter der diese `WebTransportDatagramsWritable` für die Zwecke der [`sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder)-Priorisierung gruppiert ist.

Innerhalb einer Gruppe werden die an den Streams und Datagrams zum Senden eingereihten Bytes mit einer höheren `sendOrder` vor jeglichen Bytes von weniger priorisierten gesendet. Unterschiedliche Gruppen werden im Hinblick auf die Bandbreitenzuteilung als gleichwertig angesehen — obwohl die genaue Weise, wie die Bandbreite zwischen Gruppen aufgeteilt wird, durch die Implementierung definiert ist.

## Wert

Ein `WebTransportSendGroup`-Objekt oder `null`, um die Standard-Sendegruppe anzugeben.

## Beispiele

### Grundlegende Verwendung

Im folgenden Beispiel wird eine Sendegruppe mit der Methode [`WebTransport.createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup) erstellt und dann mit einem `sendOrder`-Wert verwendet, um die Datagramme, die in den Stream geschrieben werden, relativ zu anderen Streams und Datagrammen, die Teil derselben Gruppe sind, zu priorisieren:

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

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams API](/de/docs/Web/API/Streams_API)
