---
title: WebTransportSendGroup
slug: Web/API/WebTransportSendGroup
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Das **`WebTransportSendGroup`** Interface der [WebTransport API](/de/docs/Web/API/WebTransport_API) repräsentiert eine Gruppe von Streams und Datagrammen, innerhalb derer die relative Sendepriorität durch den `sendOrder`-Wert jedes Mitglieds bestimmt wird.

`WebTransportSendGroup` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzmethoden

- [`getStats()`](/de/docs/Web/API/WebTransportSendGroup/getStats)
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das Statistiken enthält, die über alle derzeit mit dieser Gruppe assoziierten [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) und [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) Objekte aggregiert wurden.

## Beschreibung

Anders als bei [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanzen, bei denen die Priorität, mit der Bytes auf verschiedenen Streams gesendet werden, von der Implementierung abhängt, ermöglicht ein [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) oder [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream), die Priorität festzulegen, mit der Bytes auf jeder Instanz relativ zu anderen in derselben `sendGroup` gesendet werden.
Eine Sendegruppe wird mit der [`createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup)-Methode erstellt, und die relative Priorität wird durch die `sendOrder`-Eigenschaft der `WebTransportDatagramsWritable`- oder `WebTransportSendStream`-Instanzen definiert.
Verschiedene Gruppen werden in Bezug auf die Bandbreitenzuweisung gleich behandelt — die genaue Art und Weise, wie Bandbreite zwischen Gruppen aufgeteilt wird, ist jedoch implementationsabhängig.

Eine `WebTransportSendGroup` wird mit der `createSendGroup()`-Methode des [`WebTransport`](/de/docs/Web/API/WebTransport)-Interfaces erstellt.
Sie können es dann mit einem `WebTransportDatagramsWritable` oder `WebTransportSendStream` assoziieren, indem:

- Sie es als `sendGroup`-Option übergeben, wenn das Objekt erstellt wird — siehe [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable).
- Sie die `sendGroup`-Eigenschaft des Objekts danach setzen, zum Beispiel mit [`WebTransportDatagramsWritable.sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup).

## Beispiele

### Grundlegende Verwendung

Das folgende Beispiel erstellt eine Sendegruppe, dann wird ein unidirektionaler Stream und der ausgehende Datagramm-Stream der Verbindung damit assoziiert, wobei jedem ein `sendOrder` zugewiesen wird.
Bytes auf dem Datagramm-Stream werden vor allen Bytes auf dem unidirektionalen Stream priorisiert, weil sie beide in derselben `sendGroup` sind und der Datagramm-Stream eine höhere `sendOrder` hat.

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

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams API](/de/docs/Web/API/Streams_API)
