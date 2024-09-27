---
title: "WebTransportReceiveStream: getStats()-Methode"
short-title: getStats()
slug: Web/API/WebTransportReceiveStream/getStats
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode der [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Schnittstelle gibt asynchron ein Objekt zurück, das Statistiken für den aktuellen Stream enthält.

Die Statistiken beinhalten die Gesamtanzahl der geordneten Bytes, die auf diesem Stream angekommen sind (ohne Netzwerk-Overhead, bis zum ersten fehlenden Byte) und die Gesamtanzahl, die von der Anwendung gelesen wurden.
Dies bietet somit eine Maßnahme, wie schnell die Anwendung Bytes vom Server auf diesem bestimmten Stream konsumiert.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein Objekt mit Statistiken über den aktuellen Stream auflöst.
Das zurückgegebene Objekt hat folgende Eigenschaften:

- `timestamp`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitstempel angibt, zu dem die Statistiken gesammelt wurden, relativ zum 1. Januar 1970, UTC.
- `bytesReceived`
  - : Eine positive Ganzzahl, die die Anzahl der von diesem Stream empfangenen Bytes bis zum ersten fehlenden Byte angibt.
    Die Zahl enthält keinen Netzwerk-Overhead und kann nur zunehmen.
- `bytesRead`
  - : Eine positive Ganzzahl, die die Anzahl der Bytes angibt, die die Anwendung von diesem `WebTransportReceiveStream`-Stream gelesen hat.
    Diese Zahl kann nur zunehmen und ist immer kleiner oder gleich `bytesReceived`.

## Beispiele

Der untenstehende Code-Schnipsel verwendet `await`, um auf das von `getStats()` zurückgegebene {{jsxref("Promise")}} zu warten.
Sobald das Versprechen erfüllt ist, wird die Anzahl der Bytes, die noch nicht gelesen wurden, in die Konsole protokolliert.

```js
const stats = await stream.getStats();
const unConsumedBytes = stats.bytesReceived - stats.bytesRead;
console.log(`Bytes in reader queue: ${unConsumedBytes}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
