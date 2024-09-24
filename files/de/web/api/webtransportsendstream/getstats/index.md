---
title: "WebTransportSendStream: getStats() Methode"
short-title: getStats()
slug: Web/API/WebTransportSendStream/getStats
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode der {{domxref("WebTransportSendStream")}}-Schnittstelle gibt asynchron ein Objekt zurück, das Statistiken für den aktuellen Stream enthält.

Die Statistiken umfassen die Gesamtzahl der in den Stream geschriebenen Bytes, die Anzahl der gesendeten Bytes (unter Ignorierung des Paket-Overheads) sowie die Anzahl der Bytes, die mindestens einmal gesetzt wurden, und die Anzahl der bestätigten Bytes (bis zum ersten sequenziell geordneten nicht bestätigten Byte).
Sie liefert somit eine Maßnahme dafür, wie schnell die Anwendung Bytes an den Server über diesen speziellen Stream sendet.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein Objekt mit Statistiken über den aktuellen Stream auflöst.
Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `bytesAcknowledged`
  - : Eine positive Ganzzahl, die die Anzahl der an diesen Stream geschriebenen Bytes angibt, die gesendet und vom Server als empfangen bestätigt wurden, unter Verwendung des ACK-Mechanismus von QUIC.
    Es werden nur sequenzielle Bytes bis, aber nicht einschließlich, des ersten nicht bestätigten Bytes gezählt.
    Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesSent`.
    Wenn die Verbindung über HTTP/2 läuft, entspricht der Wert `bytesSent`.
- `bytesSent`
  - : Eine positive Ganzzahl, die die Anzahl der an diesen Stream geschriebenen Bytes angibt, die mindestens einmal (aber nicht notwendigerweise bestätigt) gesendet wurden.
    Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesWritten`.
    Beachten Sie, dass diese Zählung keine Bytes umfasst, die als Netzwerk-Overhead gesendet werden (wie zum Beispiel Paket-Header).
- `bytesWritten`
  - : Eine positive Ganzzahl, die die Anzahl der erfolgreich an diesen Stream geschriebenen Bytes angibt.
    Diese Zahl kann nur steigen.

## Beispiele

Im folgenden Code-Beispiel wird `await` verwendet, um auf das {{jsxref("Promise")}} zu warten, das von `getStats()` zurückgegeben wird.
Wenn das Versprechen erfüllt wird, wird das Ergebnis für die Anzahl der gesendeten, aber nicht bestätigten Bytes in der Konsole protokolliert.

```js
const stats = await stream.getStats();
const bytesNotReceived = stats.bytesWritten - stats.bytesAcknowledged;
console.log(`Bytes still successfully sent: ${bytesNotReceived}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
