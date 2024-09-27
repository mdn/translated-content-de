---
title: "WebTransport: getStats(): Methode"
short-title: getStats()
slug: Web/API/WebTransport/getStats
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode des [`WebTransport`](/de/docs/Web/API/WebTransport)-Interfaces gibt asynchron ein Objekt zurück, das HTTP/3-Verbindungsstatistiken enthält.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf ein Objekt mit HTTP/3-Verbindungsstatistiken aufgelöst wird. Das zurückgegebene Objekt kann die folgenden Eigenschaften/Statistiken haben:

- `timestamp`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem die Statistiken erfasst wurden, relativ zum 1. Januar 1970, UTC.
- `bytesSent`
  - : Eine positive ganze Zahl, die die Anzahl der auf der QUIC-Verbindung gesendeten Bytes angibt, einschließlich erneuter Übertragungen.
    Beachten Sie, dass diese Zahl keine zusätzlichen Daten aus von QUIC verwendeten Protokollen wie UDP oder anderer äußerer Rahmen umfasst.
- `packetsSent`
  - : Eine positive ganze Zahl, die die Anzahl der auf der QUIC-Verbindung gesendeten Pakete angibt, einschließlich derer, die als verloren bekannt sind.
- `packetsLost`
  - : Eine positive ganze Zahl, die die Anzahl der auf der QUIC-Verbindung verlorenen Pakete angibt.
    Dieser Wert erhöht sich, wenn Pakete als verloren erklärt werden, und verringert sich, wenn sie anschließend empfangen werden.
- `numOutgoingStreamsCreated`
  - : Eine positive ganze Zahl, die die Anzahl der auf der QUIC-Verbindung erstellten ausgehenden QUIC-Streams angibt.
- `numIncomingStreamsCreated`
  - : Eine positive ganze Zahl, die die Anzahl der auf der QUIC-Verbindung erstellten eingehenden QUIC-Streams angibt.
- `bytesReceived`
  - : Eine positive ganze Zahl, die die Gesamtanzahl der auf der QUIC-Verbindung empfangenen Bytes angibt.
    Diese Zahl umfasst doppelte Daten aus Streams, jedoch keine zusätzlichen Daten für von QUIC verwendete Protokolle wie UDP oder anderer äußerer Rahmen.
- `packetsReceived`
  - : Eine positive ganze Zahl, die die Gesamtanzahl der auf der QUIC-Verbindung empfangenen Pakete angibt, einschließlich Paketen, die nicht verarbeitbar waren.
- `smoothedRtt`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die geglättete [Round-Trip-Time (RTT)](/de/docs/Glossary/Round_Trip_Time) enthält, die derzeit auf der Verbindung beobachtet wird, berechnet als exponentiell gewichteter gleitender Durchschnitt der RTT-Proben eines Endpunkts unter Berücksichtigung von Bestätigungsverzögerungen.
- `rttVariation`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die mittlere Variation der RTT-Proben enthält, die derzeit auf der Verbindung beobachtet wird.
- `minRtt`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die minimale auf der gesamten Verbindung beobachtete Round-Trip-Time enthält.
- `datagrams`

  - : Ein Objekt, das Statistiken zur Datagramm-Übertragung über die Verbindung enthält.
    Das Objekt hat die folgenden Eigenschaften:

    - `timestamp`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem die Statistiken erfasst wurden, relativ zum 1. Januar 1970, UTC.
    - `expiredOutgoing`
      - : Eine positive ganze Zahl, die die Anzahl der Datagramme angibt, die aufgrund ihres Ablaufs aus der Warteschlange zum Senden entfernt wurden.
        Beachten Sie, dass das maximale Alter eines Datagramms in der Sende-Warteschlange, bevor es abläuft, in [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge) zu finden ist.
    - `droppedIncoming`
      - : Eine positive ganze Zahl, die die Anzahl der eingehenden Datagramme angibt, die verworfen wurden.
        Eingehende Datagramme werden verworfen, wenn die Anwendung sie nicht liest, bevor neue Datagramme die Empfangswarteschlange des [`readable`-Streams](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) überlaufen.
    - `lostOutgoing`
      - : Eine positive ganze Zahl, die die Anzahl der gesendeten Datagramme angibt, die als verloren erklärt wurden.
        Beachten Sie, dass ein Datagramm als verloren erklärt werden kann, wenn beispielsweise innerhalb eines Zeitlimits keine Bestätigung eingegangen ist oder eine Bestätigung für ein späteres Datagramm zuerst empfangen wurde.

## Beispiele

Das untenstehende Beispiel verwendet `await`, um auf das von `getStats()` zurückgegebene {{jsxref("Promise")}} zu warten.
Wenn das Versprechen erfüllt ist, wird das Ergebnis der Eigenschaft `bytesSent` im Stats-Objekt in der Konsole protokolliert.

```js
const stats = await transport.getStats();
console.log(`Bytes send: ${stats.bytesSent}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
