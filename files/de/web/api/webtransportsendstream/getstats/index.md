---
title: "WebTransportSendStream: getStats()-Methode"
short-title: getStats()
slug: Web/API/WebTransportSendStream/getStats
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("WebTransport API")}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode des [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Interfaces gibt asynchron ein Objekt zurück, das Statistiken für den aktuellen Stream enthält.

Die Statistiken umfassen die Gesamtzahl der in den Stream geschriebenen Bytes, die Anzahl der gesendeten Bytes (ohne Paket-Overhead) und die Anzahl der Bytes, die mindestens einmal gesetzt wurden, sowie die Anzahl der anerkannten Bytes (bis zum ersten sequenziell geordneten nicht anerkannten Byte).
Sie bietet daher eine Messung, wie schnell die Anwendung Bytes zu diesem speziellen Stream an den Server sendet.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auf ein Objekt auflöst, das Statistiken über den aktuellen Stream enthält.
Das zurückgegebene Objekt hat folgende Eigenschaften:

- `bytesAcknowledged`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die in diesen Stream geschrieben und vom Server als empfangen anerkannt wurden, unter Verwendung des ACK-Mechanismus von QUIC.
    Nur fortlaufende Bytes bis, aber nicht einschließlich, dem ersten nicht anerkannten Byte werden gezählt.
    Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesSent`.
    Wenn die Verbindung über HTTP/2 besteht, wird der Wert `bytesSent` entsprechen.
- `bytesSent`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die in diesen Stream geschrieben und mindestens einmal gesendet wurden (aber nicht unbedingt anerkannt).
    Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesWritten`.
    Beachten Sie, dass diese Anzahl keine als Netzwerk-Overhead gesendeten Bytes (wie Paket-Header) umfasst.
- `bytesWritten`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die erfolgreich in diesen Stream geschrieben wurden.
    Diese Zahl kann nur steigen.

## Beispiele

Der untenstehende Code-Snippet verwendet `await`, um auf das {{jsxref("Promise")}} zu warten, das von `getStats()` zurückgegeben wird.
Wenn das Promise erfüllt wird, wird das Ergebnis für die Anzahl der Bytes, die gesendet, aber nicht anerkannt wurden, in der Konsole protokolliert.

```js
const stats = await stream.getStats();
const bytesNotReceived = stats.bytesSent - stats.bytesAcknowledged;
console.log(`Bytes sent but not acknowledged: ${bytesNotReceived}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
