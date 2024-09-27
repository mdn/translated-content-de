---
title: "WebTransportSendStream: getStats()-Methode"
short-title: getStats()
slug: Web/API/WebTransportSendStream/getStats
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode der [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)-Schnittstelle gibt asynchron ein Objekt zurück, das Statistiken für den aktuellen Stream enthält.

Die Statistiken umfassen die Gesamtanzahl der in den Stream geschriebenen Bytes, die Anzahl der gesendeten Bytes (ohne Paket-Overhead), die Anzahl der mindestens einmal gesetzten Bytes und die Anzahl der bestätigten Bytes (bis zum ersten sequentiell geordneten nicht bestätigten Byte). Sie bietet somit eine Messung dafür, wie schnell die Anwendung Bytes an den Server über diesen bestimmten Stream sendet.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das ein Objekt zurückgibt, das Statistiken über den aktuellen Stream enthält.
Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `bytesAcknowledged`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die in diesen Stream geschrieben und vom Server als empfangen bestätigt wurden, mittels des ACK-Mechanismus von QUIC.
    Es werden nur sequentielle Bytes bis, aber nicht einschließlich, des ersten nicht bestätigten Bytes gezählt.
    Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesSent`.
    Wenn die Verbindung über HTTP/2 erfolgt, entspricht der Wert `bytesSent`.
- `bytesSent`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die in diesen Stream geschrieben und mindestens einmal gesendet wurden (nicht notwendigerweise bestätigt).
    Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesWritten`.
    Beachten Sie, dass diese Zählung keine als Netzwerk-Overhead gesendeten Bytes umfasst (wie z.B. Paket-Header).
- `bytesWritten`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die erfolgreich in diesen Stream geschrieben wurden.
    Diese Zahl kann nur steigen.

## Beispiele

Der untenstehende Code-Schnipsel verwendet `await`, um auf das {{jsxref("Promise")}} zu warten, das von `getStats()` zurückgegeben wird.
Wenn das Versprechen eingelöst wird, wird die Anzahl der gesendeten, aber nicht bestätigten Bytes in der Konsole protokolliert.

```js
const stats = await stream.getStats();
const bytesNotReceived = stats.bytesWritten - stats.bytesAcknowledged;
console.log(`Bytes still successfully sent: ${bytesNotReceived}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
