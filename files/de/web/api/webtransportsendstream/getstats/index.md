---
title: "WebTransportSendStream: Methode getStats()"
short-title: getStats()
slug: Web/API/WebTransportSendStream/getStats
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("WebTransport API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode des [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Interfaces gibt asynchron ein Objekt zurück, das Statistiken für den aktuellen Stream enthält.

Die Statistiken umfassen die Gesamtanzahl der in den Stream geschriebenen Bytes, die Anzahl, die gesendet wurden (ohne Netzwerk-Overhead zu berücksichtigen), und die Anzahl der Bytes, die mindestens einmal gesetzt wurden, sowie die Anzahl, die bestätigt wurden (bis zum ersten sequentiell geordneten nicht bestätigten Byte).
Dies bietet somit ein Maß dafür, wie schnell die Anwendung Bytes an den Server in diesem speziellen Stream sendet.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, der sich zu einem Objekt auflöst, das Statistiken über den aktuellen Stream enthält.
Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `bytesAcknowledged`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die in diesen Stream geschrieben wurden und die als empfangen vom Server bestätigt wurden, unter Verwendung des QUIC-ACK-Mechanismus.
    Nur sequentielle Bytes bis, aber nicht einschließlich, des ersten nicht bestätigten Bytes werden gezählt.
    Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesSent`.
    Wenn die Verbindung über HTTP/2 erfolgt, wird der Wert `bytesSent` entsprechen.
- `bytesSent`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die in diesen Stream geschrieben und mindestens einmal gesendet wurden (aber nicht unbedingt bestätigt).
    Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesWritten`.
    Beachten Sie, dass diese Zahl keine Bytes zählt, die als Netzwerk-Overhead (wie Paket-Header) gesendet werden.
- `bytesWritten`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die erfolgreich in diesen Stream geschrieben wurden.
    Diese Zahl kann nur steigen.

## Beispiele

Der folgende Codeausschnitt verwendet `await`, um auf das {{jsxref("Promise")}} zu warten, das von `getStats()` zurückgegeben wird.
Wenn das Promise erfüllt ist, wird das Ergebnis für die Anzahl der Bytes, die gesendet, aber nicht bestätigt wurden, in der Konsole protokolliert.

```js
const stats = await stream.getStats();
const bytesNotReceived = stats.bytesWritten - stats.bytesAcknowledged;
console.log(`Bytes still successfully sent: ${bytesNotReceived}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
