---
title: "WebTransportReceiveStream: Methode getStats()"
short-title: getStats()
slug: Web/API/WebTransportReceiveStream/getStats
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode der [`WebTransportReceiveStream`](/de/docs/Web/API/WebTransportReceiveStream)-Schnittstelle gibt asynchron ein Objekt mit Statistiken für den aktuellen Stream zurück.

Die Statistiken beinhalten die Gesamtzahl der geordneten Bytes, die auf diesem Stream eingetroffen sind (ohne Netzwerk-Overhead, bis zum ersten fehlenden Byte) und die Gesamtzahl, die von der Anwendung gelesen wurde. Dadurch wird gemessen, wie schnell die Anwendung Bytes von dem Server auf diesem speziellen Stream konsumiert.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich in ein Objekt auflöst, das Statistiken über den aktuellen Stream enthält. Das zurückgegebene Objekt hat folgende Eigenschaften:

- `timestamp`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das den Zeitpunkt angibt, zu dem die Statistiken erfasst wurden, relativ zum 1. Januar 1970, UTC.
- `bytesReceived`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die bis zum ersten fehlenden Byte von diesem Stream empfangen wurden. Die Zahl beinhaltet keinen Netzwerk-Overhead und kann nur steigen.
- `bytesRead`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die die Anwendung aus diesem `WebTransportReceiveStream`-Stream gelesen hat. Diese Zahl kann nur steigen und ist immer kleiner als oder gleich `bytesReceived`.

## Beispiele

Der folgende Codeausschnitt verwendet `await`, um auf das {{jsxref("Promise")}} zu warten, das von `getStats()` zurückgegeben wird. Wenn das Versprechen erfüllt ist, wird die Anzahl der Bytes, die noch nicht gelesen wurden, in der Konsole protokolliert.

```js
const stats = await stream.getStats();
const unConsumedBytes = stats.bytesReceived - stats.bytesRead;
console.log(`Bytes in reader queue: ${unConsumedBytes}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
