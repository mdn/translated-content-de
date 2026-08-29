---
title: "WebTransport: createSendGroup() Methode"
short-title: createSendGroup()
slug: Web/API/WebTransport/createSendGroup
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

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

Die **`createSendGroup()`** Methode erstellt eine neue `WebTransportSendGroup`, die mit dem `WebTransport` Objekt verknüpft ist, auf dem sie aufgerufen wird.

Das `WebTransportSendGroup` Objekt wird verwendet, um Streams und/oder Datagramme zu gruppieren, die auf dem gleichen `WebTransport` erstellt wurden, um ihre relative Priorität beim Senden der wartenden Bytes zu steuern.
Innerhalb derselben Gruppe werden Bytes in Streams und Datagrammen mit höherer Priorität vor Bytes aus solchen mit niedrigerer Priorität gesendet.

Die zurückgegebene `WebTransportSendGroup` ist anfänglich nicht mit irgendeinem Stream oder Datagramm verknüpft.
Sie können es mit einem [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) oder [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) Objekt auf verschiedene Arten verknüpfen:

- Indem Sie es als `sendGroup` Option angeben, wenn das Objekt erstellt wird — siehe [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable).
- Indem Sie die `sendGroup` Eigenschaft des Objekts im Nachhinein festlegen — siehe `WebTransportSendStream.sendGroup` und [`WebTransportDatagramsWritable.sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup).

Verschiedene Gruppen werden voraussichtlich gleich behandelt, was die Zwecke der Bandbreitenzuweisung betrifft — obwohl die genaue Art und Weise, wie die Bandbreite zwischen Gruppen aufgeteilt wird, implementierungsdefiniert ist.

## Beispiele

### Grundlegende Nutzung

Dieses Beispiel erstellt eine Sendgruppe und verknüpft dann einen unidirektionalen Stream und den ausgehenden Datagramm-Stream der Verbindung damit, wobei jedem eine `sendOrder` gegeben wird, die ihre relative Priorität bestimmt.

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
