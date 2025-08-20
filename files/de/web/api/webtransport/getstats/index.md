---
title: "WebTransport: getStats() Methode"
short-title: getStats()
slug: Web/API/WebTransport/getStats
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getStats()`** Methode der [`WebTransport`](/de/docs/Web/API/WebTransport) Schnittstelle gibt asynchron ein Objekt zurück, das HTTP/3-Verbindungsstatistiken enthält.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem Objekt auflöst, das HTTP/3-Verbindungsstatistiken enthält. Das zurückgegebene Objekt kann die folgenden Eigenschaften/Statistiken haben:

- `timestamp`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem die Statistiken gesammelt wurden, relativ zum 1. Januar 1970, UTC.
- `bytesSent`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung gesendeten Bytes einschließlich erneuter Übertragungen angibt.
    Beachten Sie, dass diese Zählung keine zusätzlichen Daten aus von QUIC verwendeten Protokollen wie UDP oder anderen äußeren Rahmen enthält.
- `packetsSent`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung gesendeten Pakete angibt, einschließlich derer, die als verloren bekannt sind.
- `packetsLost`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung verlorenen Pakete angibt.
    Dieser Wert erhöht sich, wenn Pakete als verloren erklärt werden, und verringert sich, wenn sie später empfangen werden.
- `numOutgoingStreamsCreated`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung erstellten ausgehenden QUIC-Streams angibt.
- `numIncomingStreamsCreated`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung erstellten eingehenden QUIC-Streams angibt.
- `bytesReceived`
  - : Eine positive Ganzzahl, die die Gesamtanzahl der auf der QUIC-Verbindung empfangenen Bytes angibt.
    Diese Zählung umfasst doppelte Daten von Streams, aber keine zusätzlichen Daten für von QUIC verwendete Protokolle wie UDP oder andere äußere Rahmen.
- `packetsReceived`
  - : Eine positive Ganzzahl, die die Gesamtanzahl der auf der QUIC-Verbindung empfangenen Pakete angibt, einschließlich derer, die nicht verarbeitbar waren.
- `smoothedRtt`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die geglättete {{Glossary("Round_Trip_Time", "Round-Trip-Zeit (RTT)")}} enthält, die derzeit auf der Verbindung beobachtet wird, berechnet als exponentiell gewichteter gleitender Durchschnitt der RTT-Beispiele eines Endpunkts unter Berücksichtigung von Bestätigungs-Verzögerungen.
- `rttVariation`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die mittlere Variation in Round-Trip-Zeit-Beispielen enthält, die derzeit auf der Verbindung beobachtet wird.
- `minRtt`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die minimale Round-Trip-Zeit auf der gesamten Verbindung enthält.
- `datagrams`
  - : Ein Objekt, das Statistiken zur Datagrammübertragung über die Verbindung enthält.
    Das Objekt hat die folgenden Eigenschaften:
    - `timestamp`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem die Statistiken gesammelt wurden, relativ zum 1. Januar 1970, UTC.
    - `expiredOutgoing`
      - : Eine positive Ganzzahl, die die Anzahl der Datagramme angibt, die aus der Sendewarteschlange entfernt wurden, weil sie abgelaufen sind.
        Beachten Sie, dass das maximale Alter, bevor ein Datagramm in der Sendewarteschlange abläuft, im [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge) zu finden ist.
    - `droppedIncoming`
      - : Eine positive Ganzzahl, die die Anzahl der empfangenen Datagramme angibt, die verworfen wurden.
        Eingehende Datagramme werden verworfen, wenn die Anwendung sie nicht liest, bevor neue Datagramme die Empfangswarteschlange des [`readable` stream](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) überlaufen.
    - `lostOutgoing`
      - : Eine positive Ganzzahl, die die Anzahl der gesendeten Datagramme angibt, die als verloren erklärt wurden.
        Beachten Sie, dass ein Datagramm als verloren erklärt werden kann, wenn z. B. keine Bestätigung innerhalb einer Zeitüberschreitung eintraf oder eine Bestätigung für ein späteres Datagramm zuerst empfangen wurde.

<!-- Hinweis: Dies ist nicht in Firefox IDL und die Methode wurde noch nicht von anderen unter https://searchfox.org/firefox-main/commit/4e6970cd336f1b642c0be6c9b697b4db5f7b6aeb implementiert
- `estimatedSendRate`
  - : Eine positive Ganzzahl, die die geschätzte Rate angibt, mit der die im Benutzeragenten zur Warteschlange hinzugefügten Daten gesendet werden, in Bit pro Sekunde.
    Diese Rate gilt für alle Streams und Datagramme, die eine `WebTransport` Sitzung teilen.
    Das Mitglied ist nicht vorhanden, wenn die Sitzung mit anderen in einer gemeinsamen Verbindung gebündelt wird (siehe [`allowPooling`](/de/docs/Web/API/WebTransport/WebTransport#allowpooling) im `WebTransport` Konstruktor), oder wenn der Benutzeragent noch keine Schätzung hat.
-->

## Beispiele

Das folgende Beispiel verwendet `await`, um auf das {{jsxref("Promise")}} zu warten, das von `getStats()` zurückgegeben wird. Wenn das Versprechen erfüllt wird, wird das Ergebnis für die `bytesSent` Eigenschaft im Statistiken-Objekt in die Konsole protokolliert.

```js
const stats = await transport.getStats();
console.log(`Bytes send: ${stats.bytesSent}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
