---
title: "WebTransport: getStats()-Methode"
short-title: getStats()
slug: Web/API/WebTransport/getStats
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle gibt asynchron ein Objekt mit Statistiken zur HTTP/3-Verbindung zurück.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, welches Statistiken zur HTTP/3-Verbindung enthält.
Das zurückgegebene Objekt kann die folgenden Eigenschaften/Statistiken enthalten:

- `timestamp`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das den Zeitpunkt angibt, zu dem die Statistiken gesammelt wurden, relativ zum 1. Januar 1970, UTC.
- `bytesSent`
  - : Eine positive Ganzzahl, die die Anzahl der über die QUIC-Verbindung gesendeten Bytes angibt, einschließlich der erneuten Übertragungen.
    Beachten Sie, dass diese Zahl keine zusätzlichen Daten aus Protokollen beinhaltet, die von QUIC wie UDP verwendet werden, oder andere äußerer Einrahmungen.
- `packetsSent`
  - : Eine positive Ganzzahl, die die Anzahl der über die QUIC-Verbindung gesendeten Pakete angibt, einschließlich derer, die als verloren bekannt sind.
- `packetsLost`
  - : Eine positive Ganzzahl, die die Anzahl der Pakete angibt, die über die QUIC-Verbindung verloren gegangen sind.
    Dieser Wert erhöht sich, wenn Pakete als verloren erklärt werden, und verringert sich, wenn sie anschließend empfangen werden.
- `numOutgoingStreamsCreated`
  - : Eine positive Ganzzahl, die die Anzahl der über die QUIC-Verbindung erstellten ausgehenden QUIC-Streams angibt.
- `numIncomingStreamsCreated`
  - : Eine positive Ganzzahl, die die Anzahl der über die QUIC-Verbindung erstellten eingehenden QUIC-Streams angibt.
- `bytesReceived`
  - : Eine positive Ganzzahl, die die gesamte Anzahl der über die QUIC-Verbindung empfangenen Bytes angibt.
    Dieser Wert schließt doppelte Daten von Streams ein, aber keine zusätzlichen Daten für von QUIC verwendete Protokolle wie UDP oder andere äußere Einrahmungen.
- `packetsReceived`
  - : Eine positive Ganzzahl, die die Gesamtzahl der über die QUIC-Verbindung empfangenen Pakete angibt, einschließlich Pakete, die nicht verarbeitbar waren.
- `smoothedRtt`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die geglättete [Rundlaufzeit (RTT)](/de/docs/Glossary/Round_Trip_Time) enthält, die derzeit auf der Verbindung beobachtet wird. Diese wird als exponentiell gewichteter gleitender Durchschnitt der RTT-Proben eines Endpunkts berechnet, nachdem Verzögerungen bei Bestätigungen berücksichtigt wurden.
- `rttVariation`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die mittlere Schwankung der derzeit auf der Verbindung beobachteten Rundlaufzeitproben enthält.
- `minRtt`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die minimale auf der gesamten Verbindung beobachtete Rundlaufzeit enthält.
- `datagrams`

  - : Ein Objekt mit Statistiken für die Datagrammübertragung über die Verbindung.
    Das Objekt hat die folgenden Eigenschaften:

    - `timestamp`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das den Zeitpunkt angibt, zu dem die Statistiken gesammelt wurden, relativ zum 1. Januar 1970, UTC.
    - `expiredOutgoing`
      - : Eine positive Ganzzahl, die die Anzahl der Datagramme angibt, die aus der Sende-Warteschlange entfernt wurden, weil sie abgelaufen sind.
        Beachten Sie, dass das maximale Alter, bevor ein Datagramm in der Sendewarteschlange abläuft, in [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge) zu finden ist.
    - `droppedIncoming`
      - : Eine positive Ganzzahl, die die Anzahl der eingehenden Datagramme angibt, die verworfen wurden.
        Eingehende Datagramme werden verworfen, wenn die Anwendung sie nicht liest, bevor neue Datagramme die Empfangswarteschlange des [`readable` stream](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) überlaufen.
    - `lostOutgoing`
      - : Eine positive Ganzzahl, die die Anzahl der gesendeten Datagramme angibt, die als verloren erklärt wurden.
        Beachten Sie, dass ein Datagramm als verloren erklärt werden kann, wenn beispielsweise keine Quittung innerhalb eines Zeitlimits eingetroffen ist oder eine Quittung für ein späteres Datagramm zuerst empfangen wurde.

## Beispiele

Das folgende Beispiel verwendet `await`, um auf das von `getStats()` zurückgegebene {{jsxref("Promise")}} zu warten.
Wenn das Versprechen erfüllt ist, wird das Ergebnis der Eigenschaft `bytesSent` im Statistik-Objekt in der Konsole protokolliert.

```js
const stats = await transport.getStats();
console.log(`Bytes send: ${stats.bytesSent}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
