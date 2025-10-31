---
title: "WebTransportSendStream: Methode getStats()"
short-title: getStats()
slug: Web/API/WebTransportSendStream/getStats
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{securecontext_header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode der Schnittstelle [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream) gibt asynchron ein Objekt zurück, das Statistiken für den aktuellen Stream enthält.

Die Statistiken umfassen die Gesamtzahl der in den Stream geschriebenen Bytes, die Anzahl der gesendeten Bytes (ohne Paket-Overhead) und die Anzahl der Bytes, die mindestens einmal gesendet wurden, sowie die Anzahl der bestätigten Bytes (bis zum ersten in Reihenfolge nicht bestätigten Byte).
Sie bietet daher eine Messung, wie schnell die Anwendung Bytes zu diesem bestimmten Stream an den Server sendet.

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
  - : Eine positive Ganzzahl, die die Anzahl der Bytes angibt, die in diesen Stream geschrieben wurden und die vom Server als empfangen bestätigt wurden, unter Verwendung von QUICs ACK-Mechanismus.
    Nur sequentielle Bytes bis, aber ohne das erste nicht bestätigte Byte, werden gezählt.
    Diese Zahl kann nur zunehmen und ist immer kleiner oder gleich `bytesSent`.
    Wenn die Verbindung über HTTP/2 läuft, entspricht der Wert `bytesSent`.
- `bytesSent`
  - : Eine positive Ganzzahl, die die Anzahl der Bytes angibt, die in diesen Stream geschrieben und mindestens einmal gesendet wurden (aber nicht unbedingt bestätigt).
    Diese Zahl kann nur zunehmen und ist immer kleiner oder gleich `bytesWritten`.
    Beachten Sie, dass diese Zählung keine als Netzwerk-Overhead gesendeten Bytes (wie Paket-Header) beinhaltet.
- `bytesWritten`
  - : Eine positive Ganzzahl, die die Anzahl der erfolgreich in diesen Stream geschriebenen Bytes angibt.
    Diese Zahl kann nur zunehmen.

## Beispiele

Der untenstehende Codeausschnitt verwendet `await`, um auf das vom `getStats()` zurückgegebene {{jsxref("Promise")}} zu warten.
Wenn das Promise erfüllt wird, wird die Anzahl der gesendeten, aber nicht bestätigten Bytes im Konsolenprotokoll aufgezeichnet.

```js
const stats = await stream.getStats();
const bytesNotReceived = stats.bytesWritten - stats.bytesAcknowledged;
console.log(`Bytes still successfully sent: ${bytesNotReceived}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
