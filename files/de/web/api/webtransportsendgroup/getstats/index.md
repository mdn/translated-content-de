---
title: "WebTransportSendGroup: getStats() Methode"
short-title: getStats()
slug: Web/API/WebTransportSendGroup/getStats
l10n:
  sourceCommit: 361dd9caf4ac5db8a73cc33e4d8ee43fa2e35fcc
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}{{SeeCompatTable}}

Die **`getStats()`** Methode der [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt auflöst, das Statistiken enthält, die über alle derzeit mit dieser Gruppe verbundenen [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)- und [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Objekte aggregiert werden.
Das heißt, jeder Stream und jedes Datagramm, dessen `sendGroup` auf diese `WebTransportSendGroup` gesetzt ist.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem Objekt auflöst, das aggregierte Statistiken für die Mitglieder der Gruppe enthält.
Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `bytesAcknowledged`
  - : Eine positive Ganzzahl, die die Anzahl der Bytes angibt, die an die Mitglieder der Gruppe geschrieben, gesendet und vom Server als empfangen bestätigt wurden, unter Verwendung des QUIC-ACK-Mechanismus.
    Nur aufeinanderfolgende Bytes bis, aber nicht einschließlich, dem ersten nicht bestätigten Byte jedes Mitglieds werden gezählt.
    Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesSent`.
- `bytesSent`
  - : Eine positive Ganzzahl, die angibt, wie viele Bytes mindestens einmal (aber nicht unbedingt bestätigt) an die Mitglieder der Gruppe gesendet wurden.
    Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesWritten`.
    Beachten Sie, dass diese Zählung keine Bytes umfasst, die als Netzwerk-Overhead gesendet wurden (wie Paket-Header).
- `bytesWritten`
  - : Eine positive Ganzzahl, die die Anzahl der Bytes angibt, die erfolgreich an die Mitglieder der Gruppe geschrieben wurden.
    Diese Zahl kann nur steigen.

## Beispiele

### Grundlegende Verwendung

Der folgende Codeausschnitt verwendet [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf das von `getStats()` zurückgegebene {{jsxref("Promise")}} zu warten, und gibt dann die Anzahl der Bytes aus, die über die Mitglieder der Gruppe gesendet, aber noch nicht bestätigt wurden:

```js
const stats = await sendGroup.getStats();
const bytesNotAcknowledged = stats.bytesSent - stats.bytesAcknowledged;
console.log(`Bytes sent but not yet acknowledged: ${bytesNotAcknowledged}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams API](/de/docs/Web/API/Streams_API)
