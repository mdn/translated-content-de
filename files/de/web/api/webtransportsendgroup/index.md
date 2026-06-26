---
title: WebTransportSendGroup
slug: Web/API/WebTransportSendGroup
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

Das **`WebTransportSendGroup`** Interface der [WebTransport API](/de/docs/Web/API/WebTransport_API) repräsentiert eine Gruppe von Streams und Datagrammen, innerhalb derer die relative Sendepriorität durch den `sendOrder` Wert jedes Mitglieds bestimmt wird.

`WebTransportSendGroup` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

{{InheritanceDiagram}}

## Instanzmethoden

- [`getStats()`](/de/docs/Web/API/WebTransportSendGroup/getStats) {{experimental_inline}}
  - : Gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt aufgelöst wird, das Statistiken enthält, die über alle aktuellen [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)- und [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Objekte, die derzeit mit dieser Gruppe assoziiert sind, aggregiert sind.

## Beschreibung

Anders als bei [`WritableStream`](/de/docs/Web/API/WritableStream)-Instanzen, bei denen die Priorität, mit der Bytes auf verschiedenen Streams gesendet werden, von der Implementierung abhängt, ermöglicht ein [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) oder [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream), die Priorität einzustellen, mit der Bytes relativ zu anderen Instanzen in derselben `sendGroup` gesendet werden.
Eine Sendegruppe wird mit der Methode [`createSendGroup()`](/de/docs/Web/API/WebTransport/createSendGroup) erstellt und die relative Priorität wird durch die `sendOrder`-Eigenschaft von `WebTransportDatagramsWritable` oder `WebTransportSendStream`-Instanzen definiert.
Verschiedene Gruppen sollen für die Zwecke der Bandbreitenzuweisung als gleichwertig behandelt werden, obwohl die genaue Art und Weise, wie die Bandbreite zwischen Gruppen aufgeteilt wird, von der Implementierung abhängt.

Ein `WebTransportSendGroup` wird mithilfe der `createSendGroup()`-Methode des [`WebTransport`](/de/docs/Web/API/WebTransport)-Interfaces erstellt.
Sie können es dann mit einem `WebTransportDatagramsWritable` oder `WebTransportSendStream` assoziieren, indem Sie:

- Es als `sendGroup`-Option übergeben, wenn das Objekt erstellt wird — siehe [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable).
- Die `sendGroup`-Eigenschaft des Objekts anschließend setzen, zum Beispiel mit [`WebTransportDatagramsWritable.sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup).

## Beispiele

### Grundlegende Verwendung

Im folgenden Beispiel wird eine Sendegruppe erstellt, dann assoziiert sie einen unidirektionalen Stream und den ausgehenden Datagramm-Stream der Verbindung mit ihr und gibt jedem einen `sendOrder`.
Bytes im Datagramm-Stream werden gegenüber allen Bytes im unidirektionalen Stream priorisiert, da sie beide in derselben `sendGroup` sind und der Datagramm-Stream eine höhere `sendOrder` hat.

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
