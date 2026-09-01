---
title: "WebTransport: createSendGroup() Methode"
short-title: createSendGroup()
slug: Web/API/WebTransport/createSendGroup
l10n:
  sourceCommit: c4ced66f871dd67ff683526ecc38e9eb7ebb5c9a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`createSendGroup()`** Methode der [`WebTransport`](/de/docs/Web/API/WebTransport) Schnittstelle erzeugt und gibt eine [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup) zurück.

## Syntax

```js-nolint
createSendGroup()
```

### Parameter

Keine.

### Rückgabewert

Ein [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup)-Objekt.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Zustand des Transports `"closed"` oder `"failed"` ist.

## Beschreibung

Die **`createSendGroup()`** Methode erstellt eine neue `WebTransportSendGroup`, die mit dem `WebTransport`-Objekt verknüpft ist, auf dem sie aufgerufen wird.

Das `WebTransportSendGroup`-Objekt wird verwendet, um Streams und/oder Datagramme zu gruppieren, die auf demselben `WebTransport` erstellt wurden, um ihre relative Priorität für das Senden von wartenden Bytes zu steuern. Innerhalb derselben Gruppe werden Bytes aus Streams und Datagrammen mit höherer Priorität vor Bytes aus solchen mit niedrigerer Priorität gesendet.

Die zurückgegebene `WebTransportSendGroup` ist anfänglich nicht mit irgendwelchen Streams oder Datagrammen verknüpft.
Sie können sie mit einem [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable) oder [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Objekt auf verschiedene Weise verknüpfen:

- Indem Sie sie als `sendGroup`-Option beim Erstellen des Objekts angeben — siehe [`WebTransport.createUnidirectionalStream()`](/de/docs/Web/API/WebTransport/createUnidirectionalStream), [`WebTransport.createBidirectionalStream()`](/de/docs/Web/API/WebTransport/createBidirectionalStream) und [`WebTransportDatagramDuplexStream.createWritable()`](/de/docs/Web/API/WebTransportDatagramDuplexStream/createWritable).
- Indem Sie die `sendGroup`-Eigenschaft des Objekts danach setzen — siehe [`WebTransportSendStream.sendGroup`](/de/docs/Web/API/WebTransportSendStream/sendGroup) und [`WebTransportDatagramsWritable.sendGroup`](/de/docs/Web/API/WebTransportDatagramsWritable/sendGroup).

Verschiedene Gruppen sollen für die Zwecke der Bandbreitenverteilung als gleichrangig behandelt werden — obwohl die genaue Art und Weise, wie die Bandbreite zwischen den Gruppen aufgeteilt wird, implementationsbedingt ist.

## Beispiele

### Grundlegende Verwendung

Dieses Beispiel erstellt eine Send-Gruppe und verknüpft dann einen unidirektionalen Stream und den ausgehenden Datagramm-Stream der Verbindung mit ihr, wobei jedem eine `sendOrder` zugewiesen wird, die ihre relative Priorität definiert.

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

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams API](/de/docs/Web/API/Streams_API)
