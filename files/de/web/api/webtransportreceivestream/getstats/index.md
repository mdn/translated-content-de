---
title: "WebTransportReceiveStream: getStats()-Methode"
short-title: getStats()
slug: Web/API/WebTransportReceiveStream/getStats
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode der [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Schnittstelle gibt asynchron ein Objekt mit Statistiken für den aktuellen Stream zurück.

Zu den Statistiken gehören die Gesamtzahl der geordneten Bytes, die auf diesem Stream angekommen sind (ohne Berücksichtigung des Netzwerk-Overheads, bis zum ersten fehlenden Byte) und die Gesamtzahl, die von der Anwendung gelesen wurden. Sie bietet somit ein Maß dafür, wie schnell die Anwendung Bytes vom Server auf diesem bestimmten Stream konsumiert.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem Objekt auflöst, das Statistiken über den aktuellen Stream enthält. Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `timestamp`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das den Zeitpunkt angibt, zu dem die Statistiken erfasst wurden, relativ zum 1. Januar 1970, UTC.
- `bytesReceived`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die von diesem Stream bis zum ersten fehlenden Byte empfangen wurden. Die Zahl umfasst keinen Netzwerk-Overhead und kann nur steigen.
- `bytesRead`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die die Anwendung aus diesem `WebTransportReceiveStream`-Stream gelesen hat. Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesReceived`.

## Beispiele

Der folgende Codeausschnitt verwendet `await`, um auf das von `getStats()` zurückgegebene {{jsxref("Promise")}} zu warten. Wenn das Versprechen erfüllt wird, wird die Anzahl der Bytes, die noch nicht gelesen wurden, in die Konsole protokolliert.

```js
const stats = await stream.getStats();
const unConsumedBytes = stats.bytesReceived - stats.bytesRead;
console.log(`Bytes in reader queue: ${unConsumedBytes}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
