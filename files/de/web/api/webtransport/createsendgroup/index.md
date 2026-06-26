---
title: "WebTransport: createSendGroup() Methode"
short-title: createSendGroup()
slug: Web/API/WebTransport/createSendGroup
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

Die **`createSendGroup()`** Methode der [`WebTransport`](/de/docs/Web/API/WebTransport) Schnittstelle erstellt und gibt eine [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) zurück.

## Syntax

```js-nolint
createSendGroup()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) Objekt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zustand des Transports `"closed"` oder `"failed"` ist.

## Beschreibung

Die **`createSendGroup()`** Methode erstellt eine neue `WebTransportSendGroup`, die mit dem `WebTransport` Objekt, auf dem sie aufgerufen wird, verknüpft ist.

Das `WebTransportSendGroup` Objekt wird verwendet, um Streams und/oder Datagramme, die auf demselben `WebTransport` erstellt wurden, zu gruppieren und deren relative Priorität für das Senden von wartenden Bytes zu steuern. Innerhalb derselben Gruppe werden Bytes auf Streams und Datagrammen mit höherer Priorität vor denen aus Streams und Datagrammen mit niedrigerer Priorität gesendet.

Die zurückgegebene `WebTransportSendGroup` ist anfangs nicht mit Streams oder Datagrammen verknüpft. Sie können es auf verschiedene Arten mit einem [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) oder [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) Objekt verknüpfen:

- Indem Sie es als `sendGroup` Option übergeben, wenn das Objekt erstellt wird — siehe [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable).
- Indem Sie die `sendGroup` Eigenschaft des Objekts danach setzen — siehe `WebTransportSendStream.sendGroup` und [`WebTransportDatagramsWritable.sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup).

Verschiedene Gruppen sollten bei der Bandbreitenzuweisung als gleichwertig behandelt werden — obwohl die genaue Methode der Bandbreitenteilung zwischen Gruppen durch die Implementierung definiert wird.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel erstellt eine Sendgruppe und verknüpft dann einen unidirektionalen Stream und den ausgehenden Datagramm-Stream der Verbindung mit ihr. Jeder erhält eine `sendOrder`, die ihre relative Priorität definiert.

```js
const sendGroup = transport.createSendGroup();

const stream = await transport.createUnidirectionalStream({
  sendGroup,
  sendOrder: 1,
});

// Higher sendOrder: queued bytes on this stream are sent first
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
