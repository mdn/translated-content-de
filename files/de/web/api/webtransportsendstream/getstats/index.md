---
title: "WebTransportSendStream: getStats() Methode"
short-title: getStats()
slug: Web/API/WebTransportSendStream/getStats
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Schnittstelle gibt asynchron ein Objekt zurück, das Statistiken für den aktuellen Stream enthält.

Die Statistiken umfassen die Gesamtanzahl der Bytes, die in den Stream geschrieben wurden, die Anzahl der gesendeten Bytes (ohne Paket-Overhead) sowie die Anzahl der Bytes, die mindestens einmal gesetzt wurden, und die Anzahl der bestätigten Bytes (bis zum ersten sequenziell geordneten, nicht bestätigten Byte).
Daher bietet sie eine Maßnahme dafür, wie schnell die Anwendung Bytes über diesen bestimmten Stream an den Server sendet.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, das Statistiken über den aktuellen Stream enthält.
Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `bytesAcknowledged`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die in diesen Stream geschrieben, gesendet und vom Server als empfangen bestätigt wurden, unter Verwendung von QUICs ACK-Mechanismus.
    Es werden nur sequenzielle Bytes bis einschließlich des ersten nicht bestätigten Bytes gezählt.
    Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesSent`.
    Wenn die Verbindung über HTTP/2 erfolgt, entspricht der Wert `bytesSent`.
- `bytesSent`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die in diesen Stream geschrieben und mindestens einmal gesendet wurden (aber nicht unbedingt bestätigt).
    Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesWritten`.
    Beachten Sie, dass diese Zählung keine Bytes umfasst, die als Netzwerk-Overhead gesendet werden (z. B. Paket-Header).
- `bytesWritten`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die erfolgreich in diesen Stream geschrieben wurden.
    Diese Zahl kann nur steigen.

## Beispiele

Der folgende Code-Schnipsel verwendet `await`, um auf das {{jsxref("Promise")}} zu warten, das von `getStats()` zurückgegeben wird.
Wenn das Versprechen erfüllt wird, wird das Ergebnis für die Anzahl der gesendeten, aber nicht bestätigten Bytes in die Konsole protokolliert.

```js
const stats = await stream.getStats();
const bytesNotReceived = stats.bytesWritten - stats.bytesAcknowledged;
console.log(`Bytes still successfully sent: ${bytesNotReceived}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
