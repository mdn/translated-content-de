---
title: "WebTransportSendStream: sendGroup-Eigenschaft"
short-title: sendGroup
slug: Web/API/WebTransportSendStream/sendGroup
l10n:
  sourceCommit: c4ced66f871dd67ff683526ecc38e9eb7ebb5c9a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`sendGroup`**-Eigenschaft der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Schnittstelle repräsentiert die [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup), unter der dieser Stream für die Zwecke der Priorisierung der [`sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder) gruppiert ist.

Innerhalb einer Gruppe werden Bytes, die zum Senden auf Streams und Datagrams mit einer höheren `sendOrder`-Priorität vorgesehen sind, vor allen Bytes von niedrigeren Prioritäten gesendet.
Verschiedene Gruppen sollen für die Zwecke der Bandbreitenzuweisung als gleichwertig betrachtet werden – die genaue Art und Weise, wie die Bandbreite zwischen den Gruppen aufgeteilt wird, ist jedoch implementierungsabhängig.

## Wert

Ein `WebTransportSendGroup`-Objekt oder `null`, um die Standard-Sendegruppe anzugeben.
Der Standardwert ist `null`.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn auf eine `WebTransportSendGroup` gesetzt wird, die mit einem anderen `WebTransport`-Objekt als diesem Stream verbunden ist.

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel erstellt eine Sendegruppe mithilfe der [`WebTransport.createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup)-Methode und verwendet sie dann mit einem `sendOrder`-Wert, um den Stream relativ zu anderen Streams und Datagrams, die Teil derselben Gruppe sind, zu priorisieren:

```js
const sendGroup = transport.createSendGroup();

const stream = await transport.createUnidirectionalStream({
  sendGroup,
  sendOrder: 1,
});

console.log(stream.sendGroup === sendGroup); // true
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup)
- [`WebTransportSendStream.sendOrder`](/de/docs/Web/API/WebTransportSendStream/sendOrder)
- [Streams API](/de/docs/Web/API/Streams_API)
- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
