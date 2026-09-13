---
title: WebTransportSendGroup
slug: Web/API/WebTransportSendGroup
l10n:
  sourceCommit: c4ced66f871dd67ff683526ecc38e9eb7ebb5c9a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`WebTransportSendGroup`**-Schnittstelle der [WebTransport API](/de/docs/Web/API/WebTransport_API) repräsentiert eine Gruppe von Streams und Datagrammen, innerhalb derer die relative Sendpriorität durch den `sendOrder`-Wert jedes Mitglieds bestimmt wird.

`WebTransportSendGroup` ist ein [Transferobjekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzmethoden

- [`getStats()`](/de/docs/Web/API/WebTransportSendGroup/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das Statistiken enthält, die über alle derzeit mit dieser Gruppe verbundenen [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)- und [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Objekte aggregiert sind.

## Beschreibung

Im Gegensatz zu [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanzen, bei denen die Priorität, mit der Bytes auf verschiedenen Streams gesendet werden, von der Implementierung abhängt, ermöglicht ein [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) oder [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream), dass Sie die Priorität festlegen können, mit der Bytes auf jeder Instanz relativ zu anderen im gleichen `sendGroup` gesendet werden. Eine Sendgruppe wird mit der [`createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup)-Methode erstellt, und die relative Priorität wird durch die `sendOrder`-Eigenschaft der `WebTransportDatagramsWritable`- oder `WebTransportSendStream`-Instanzen definiert. Unterschiedliche Gruppen sollten im Hinblick auf die Bandbreitenzuweisung gleich behandelt werden — obwohl die genaue Art, wie die Bandbreite zwischen Gruppen aufgeteilt wird, von der Implementierung abhängt.

Eine `WebTransportSendGroup` wird mit der `createSendGroup()`-Methode der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle erstellt. Sie können sie dann mit einem `WebTransportDatagramsWritable` oder `WebTransportSendStream` verbinden, indem Sie:

- sie als `sendGroup`-Option beim Erstellen des Objekts übergeben — siehe [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable).
- die `sendGroup`-Eigenschaft des Objekts später setzen — siehe [`WebTransportSendStream.sendGroup`](/de/docs/Web/API/WebTransportSendStream/sendGroup) und [`WebTransportDatagramsWritable.sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup).

## Beispiele

### Grundlegende Verwendung

Das untenstehende Beispiel erstellt eine Sendgruppe, dann wird ein unidirektionaler Stream und der ausgehende Datagramm-Stream der Verbindung mit der Gruppe verbunden, wobei jedem ein `sendOrder` zugewiesen wird. Bytes auf dem Datagramm-Stream werden vor allen Bytes auf dem unidirektionalen Stream priorisiert, da sie beide in derselben `sendGroup` und der Datagramm-Stream eine höhere `sendOrder` hat.

```js
const sendGroup = transport.createSendGroup();

const stream = await transport.createUnidirectionalStream({
  sendGroup,
  sendOrder: 1,
});

const datagrams = transport.datagrams.createWritable({
  sendGroup,
  sendOrder: 2,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams API](/de/docs/Web/API/Streams_API)
