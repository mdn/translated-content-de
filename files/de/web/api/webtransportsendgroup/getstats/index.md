---
title: "WebTransportSendGroup: getStats()-Methode"
short-title: getStats()
slug: Web/API/WebTransportSendGroup/getStats
l10n:
  sourceCommit: c4ced66f871dd67ff683526ecc38e9eb7ebb5c9a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode der [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das ein Objekt enthält, welches Statistiken aggregiert über alle aktuell mit dieser Gruppe assoziierten [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Objekte auflöst.
Das heißt, jeder Stream, dessen `sendGroup` auf diese `WebTransportSendGroup` gesetzt ist.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein Objekt mit aggregierten Statistiken für die Streams der Gruppe auflöst.
Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `bytesAcknowledged`
  - : Eine nicht negative Ganzzahl, die die Anzahl der Bytes angibt, die in den Streams der Gruppe geschrieben wurden und deren Empfang durch den Server mit QUICs ACK-Mechanismus bestätigt wurde.
    Gezählt werden nur sequenzielle Bytes bis, aber nicht einschließlich, dem ersten nicht bestätigten Byte jedes Streams.
    Diese Zahl kann nur steigen und ist immer kleiner als oder gleich `bytesSent`.
- `bytesSent`
  - : Eine nicht negative Ganzzahl, die die Anzahl der Bytes angibt, die in den Streams der Gruppe geschrieben und mindestens einmal gesendet wurden (aber nicht unbedingt bestätigt).
    Diese Zahl kann nur steigen und ist immer kleiner als oder gleich `bytesWritten`.
    Beachten Sie, dass diese Zählung keine als Netzwerkoverhead gesendeten Bytes (wie Paket-Header) einschließt.
- `bytesWritten`
  - : Eine nicht negative Ganzzahl, die die Anzahl der Bytes angibt, die erfolgreich in den Streams der Gruppe geschrieben wurden.
    Diese Zahl kann nur steigen.

## Beispiele

### Grundlegende Verwendung

Das folgende Code-Snippet verwendet [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf das von `getStats()` zurückgegebene {{jsxref("Promise")}} zu warten und protokolliert dann die Anzahl der Bytes, die über die Streams der Gruppe gesendet, aber noch nicht bestätigt wurden:

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
