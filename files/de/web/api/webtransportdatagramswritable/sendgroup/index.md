---
title: "WebTransportDatagramsWritable: sendGroup-Eigenschaft"
short-title: sendGroup
slug: Web/API/WebTransportDatagramsWritable/sendGroup
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`sendGroup`**-Eigenschaft der Schnittstelle [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) ruft die [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) ab oder legt sie fest, unter der diese `WebTransportDatagramsWritable` für die Zwecke der Priorisierung von [`sendOrder`](/de/docs/Web/API/WebTransportDatagramsWritable/sendOrder) gruppiert ist.

Innerhalb einer Gruppe werden Bytes, die zum Senden in Streams und Datagrammen mit einer höheren `sendOrder`-Priorität anstehen, vor allen Bytes von niedriger priorisierten gesendet. Verschiedene Gruppen werden für die Zwecke der Bandbreitenzuweisung als gleichwertig behandelt — wie genau die Bandbreite zwischen den Gruppen aufgeteilt wird, ist jedoch implementationsdefiniert.

## Wert

Ein `WebTransportSendGroup`-Objekt oder `null`, um die Standard-Sendegruppe festzulegen.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel erstellt eine Sendegruppe mithilfe der Methode [`WebTransport.createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup) und verwendet diese dann mit einem `sendOrder`-Wert, um die Datagramme, die in den Stream geschrieben werden, im Verhältnis zu anderen Streams und Datagrammen derselben Gruppe zu priorisieren:

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
