---
title: "WebTransportSendGroup: Methode getStats()"
short-title: getStats()
slug: Web/API/WebTransportSendGroup/getStats
l10n:
  sourceCommit: f8759faac983abbcd8276fd45ae881bb39efdf7a
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode der [`WebTransportSendGroup`](/de/docs/Web/API/WebTransportSendGroup)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt auflöst, welches Statistiken enthält, die über alle mit dieser Gruppe derzeit verbundenen [`WebTransportSendStream`](/de/docs/Web/API/WebTransportSendStream)- und [`WebTransportDatagramsWritable`](/de/docs/Web/API/WebTransportDatagramsWritable)-Objekte aggregiert wurden.
Das heißt, jeder Stream und jedes datagramm-schreibbare Objekt, dessen `sendGroup` auf diese `WebTransportSendGroup` gesetzt ist.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem Objekt auflöst, das aggregierte Statistiken für die Mitglieder der Gruppe enthält.
Das zurückgegebene Objekt hat die folgenden Eigenschaften:

- `bytesAcknowledged`
  - : Eine positive ganze Zahl, die die Anzahl von Bytes angibt, die an die Mitglieder der Gruppe geschrieben wurden, die gesendet und vom Server als empfangen bestätigt wurden, unter Verwendung des ACK-Mechanismus von QUIC.
    Nur sequentielle Bytes bis, aber nicht einschließlich, dem ersten unbeantworteten Byte jedes Mitglieds werden gezählt.
    Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesSent`.
- `bytesSent`
  - : Eine positive ganze Zahl, die die Anzahl von Bytes angibt, die an die Mitglieder der Gruppe geschrieben und mindestens einmal gesendet wurden (aber nicht unbedingt bestätigt).
    Diese Zahl kann nur steigen und ist immer kleiner oder gleich `bytesWritten`.
    Beachten Sie, dass diese Zählung keine als Netzwerkausgaben gesendeten Bytes umfasst (wie Paket-Header).
- `bytesWritten`
  - : Eine positive ganze Zahl, die die Anzahl der Bytes angibt, die erfolgreich an die Mitglieder der Gruppe geschrieben wurden.
    Diese Zahl kann nur steigen.

## Beispiele

### Grundlegende Verwendung

Das folgende Codebeispiel verwendet [`await`](/de/docs/Web/JavaScript/Reference/Operators/await), um auf das von `getStats()` zurückgegebene {{jsxref("Promise")}} zu warten, und gibt dann die Anzahl der Bytes aus, die über die Mitglieder der Gruppe gesendet wurden, aber noch nicht bestätigt sind:

```js
const stats = await sendGroup.getStats();
const bytesNotAcknowledged = stats.bytesSent - stats.bytesAcknowledged;
console.log(`Bytes sent but not yet acknowledged: ${bytesNotAcknowledged}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)
- [Streams API](/de/docs/Web/API/Streams_API)
