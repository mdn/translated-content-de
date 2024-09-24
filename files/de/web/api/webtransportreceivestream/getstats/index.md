---
title: "WebTransportReceiveStream: getStats()-Methode"
short-title: getStats()
slug: Web/API/WebTransportReceiveStream/getStats
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode der {{domxref("WebTransportReceiveStream")}}-Schnittstelle gibt asynchron ein Objekt zurück, das Statistiken für den aktuellen Stream enthält.

Die Statistiken umfassen die Gesamtzahl der geordneten Bytes, die in diesem Stream angekommen sind (ohne Netzwerk-Overhead, bis zum ersten fehlenden Byte), und die Gesamtzahl, die von der Anwendung gelesen wurde.
Sie bietet daher eine Messgröße dafür, wie schnell die Anwendung Bytes vom Server auf diesem bestimmten Stream konsumiert.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein Objekt zurückgibt, das Statistiken über den aktuellen Stream enthält.
Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `timestamp`
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der den Zeitpunkt angibt, zu dem die Statistiken erhoben wurden, relativ zu 1. Januar 1970, UTC.
- `bytesReceived`
  - : Eine positive Ganzzahl, die die Anzahl der Bytes angibt, die von diesem Stream empfangen wurden, bis zum ersten fehlenden Byte.
    Die Zahl enthält keinen Netzwerk-Overhead und kann nur zunehmen.
- `bytesRead`
  - : Eine positive Ganzzahl, die die Anzahl der Bytes angibt, die die Anwendung aus diesem `WebTransportReceiveStream`-Stream gelesen hat.
    Diese Zahl kann nur zunehmen und ist immer kleiner oder gleich `bytesReceived`.

## Beispiele

Der untenstehende Codeausschnitt verwendet `await`, um auf das {{jsxref("Promise")}}, das von `getStats()` zurückgegeben wird, zu warten.
Wenn das Versprechen erfüllt wird, wird die Anzahl der Bytes, die noch nicht gelesen wurden, in der Konsole protokolliert.

```js
const stats = await stream.getStats();
const unConsumedBytes = stats.bytesReceived - stats.bytesRead;
console.log(`Bytes in reader queue: ${unConsumedBytes}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
