---
title: "WebTransportReceiveStream: getStats()-Methode"
short-title: getStats()
slug: Web/API/WebTransportReceiveStream/getStats
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode der [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Schnittstelle gibt asynchron ein Objekt zurück, das Statistiken für den aktuellen Stream enthält.

Die Statistiken umfassen die Gesamtzahl der geordneten Bytes, die in diesem Stream angekommen sind (unter Vernachlässigung des Netzwerk-Traffics, bis zum ersten fehlenden Byte) und die Gesamtzahl, die von der Anwendung gelesen wurden.
Daher bietet es eine Messung dafür, wie schnell die Anwendung Bytes von dem Server in diesem speziellen Stream konsumiert.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein Objekt enthält, das Statistiken über den aktuellen Stream zurückgibt.
Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `timestamp`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitstempel angibt, zu dem die Statistiken erfasst wurden, relativ zum 1. Jan 1970, UTC.
- `bytesReceived`
  - : Eine positive Ganzzahl, die die Anzahl der Bytes angibt, die von diesem Stream empfangen wurden, bis zum ersten fehlenden Byte.
    Die Zahl beinhaltet keinen Netzwerk-Overhead und kann nur zunehmen.
- `bytesRead`
  - : Eine positive Ganzzahl, die die Anzahl der Bytes angibt, die die Anwendung von diesem `WebTransportReceiveStream`-Stream gelesen hat.
    Diese Zahl kann nur zunehmen und ist immer kleiner oder gleich `bytesReceived`.

## Beispiele

Das folgende Codebeispiel verwendet `await`, um auf das von `getStats()` zurückgegebene {{jsxref("Promise")}} zu warten.
Wenn das Versprechen erfüllt ist, wird die Anzahl der noch nicht gelesenen Bytes in die Konsole protokolliert.

```js
const stats = await stream.getStats();
const unConsumedBytes = stats.bytesReceived - stats.bytesRead;
console.log(`Bytes in reader queue: ${unConsumedBytes}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
