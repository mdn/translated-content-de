---
title: "WebTransport: getStats()-Methode"
short-title: getStats()
slug: Web/API/WebTransport/getStats
l10n:
  sourceCommit: 581fd2ecfa9a6a5fb6d2b9d0085a089213e168fa
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode des [`WebTransport`](/de/docs/Web/API/WebTransport)-Interfaces gibt asynchron ein Objekt zurück, das HTTP/3-Verbindungsstatistiken enthält.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem Objekt auflöst, das HTTP/3-Verbindungsstatistiken enthält.
Das zurückgegebene Objekt kann folgende Eigenschaften/Statistiken haben:

- `timestamp`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das den Zeitpunkt angibt, zu dem die Statistiken gesammelt wurden, relativ zu dem 1. Januar 1970, UTC.
- `bytesSent`
  - : Eine positive ganze Zahl, die die Anzahl der auf der QUIC-Verbindung gesendeten Bytes angibt, einschließlich Retransmissionen.
    Beachten Sie, dass diese Anzahl keine zusätzlichen Daten von Protokollen umfasst, die von QUIC verwendet werden, wie z.B. UDP, oder jede andere äußere Rahmung.
- `packetsSent`
  - : Eine positive ganze Zahl, die die Anzahl der auf der QUIC-Verbindung gesendeten Pakete angibt, einschließlich derjenigen, von denen bekannt ist, dass sie verloren gegangen sind.
- `packetsLost`
  - : Eine positive ganze Zahl, die die Anzahl der auf der QUIC-Verbindung verlorenen Pakete angibt.
    Dieser Wert erhöht sich, wenn Pakete als verloren erklärt werden, und verringert sich, wenn sie anschließend empfangen werden.
- `numOutgoingStreamsCreated`
  - : Eine positive ganze Zahl, die die Anzahl der auf der QUIC-Verbindung erstellten ausgehenden QUIC-Streams angibt.
- `numIncomingStreamsCreated`
  - : Eine positive ganze Zahl, die die Anzahl der auf der QUIC-Verbindung erstellten eingehenden QUIC-Streams angibt.
- `bytesReceived`
  - : Eine positive ganze Zahl, die die Gesamtzahl der auf der QUIC-Verbindung empfangenen Bytes angibt.
    Diese Zahl umfasst doppelte Daten von Streams, jedoch keine zusätzlichen Daten für Protokolle, die von QUIC verwendet werden, wie z.B. UDP, oder jede andere äußere Rahmung.
- `packetsReceived`
  - : Eine positive ganze Zahl, die die Gesamtzahl der auf der QUIC-Verbindung empfangenen Pakete angibt, einschließlich Paketen, die nicht verarbeitet werden konnten.
- `smoothedRtt`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die geglättete {{Glossary("Round_Trip_Time", "Round-Trip-Zeit (RTT)")}} enthält, die derzeit auf der Verbindung beobachtet wird, berechnet als exponentiell gewichteter gleitender Durchschnitt der RTT-Messwerte eines Endpunkts nach Berücksichtigung der Bestätigungsverzögerungen.
- `rttVariation`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die mittlere Variation der aktuell auf der Verbindung beobachteten Round-Trip-Zeit-Messwerte enthält.
- `minRtt`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die minimale Round-Trip-Zeit enthält, die auf der gesamten Verbindung beobachtet wurde.
- `datagrams`
  - : Ein Objekt, das Statistiken für Datagrammübertragungen über die Verbindung enthält. Das Objekt besitzt folgende Eigenschaften:
    - `timestamp`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das den Zeitpunkt angibt, zu dem die Statistiken gesammelt wurden, relativ zu dem 1. Januar 1970, UTC.
    - `expiredOutgoing`
      - : Eine positive ganze Zahl, die die Anzahl der Datagramme angibt, die aus der Warteschlange für das Senden entfernt wurden, weil sie abgelaufen sind.
        Beachten Sie, dass das maximale Alter, bevor ein Datagramm in der Sendewarteschlange abläuft, in [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge) gefunden werden kann.
    - `droppedIncoming`
      - : Eine positive ganze Zahl, die die Anzahl der eingehenden Datagramme angibt, die verworfen wurden.
        Eingehende Datagramme werden gelöscht, wenn die Anwendung sie nicht liest, bevor neue Datagramme die Empfangswarteschlange des [`readable`-Streams](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) überlaufen.
    - `lostOutgoing`
      - : Eine positive ganze Zahl, die die Anzahl der gesendeten Datagramme angibt, die als verloren erklärt wurden.
        Beachten Sie, dass ein Datagramm als verloren erklärt werden kann, wenn z.B. keine Bestätigung innerhalb eines Timeouts eingetroffen ist oder eine Bestätigung für ein späteres Datagramm zuerst empfangen wurde.

<!-- Hinweis: Dies ist nicht in Firefox IDL enthalten, und die Methode wurde noch nicht von anderen in https://searchfox.org/firefox-main/commit/4e6970cd336f1b642c0be6c9b697b4db5f7b6aeb implementiert.
- `estimatedSendRate`
  - : Eine positive ganze Zahl, die die geschätzte Rate angibt, mit der Daten in der Warteschlange vom Benutzeragenten gesendet werden, in Bit pro Sekunde.
    Diese Rate bezieht sich auf alle Streams und Datagramme, die eine `WebTransport`-Sitzung teilen.
    Das Mitglied ist nicht vorhanden, wenn die Sitzung mit anderen in einer gemeinsamen Verbindung gepoolt wird (siehe [`allowPooling`](/de/docs/Web/API/WebTransport/WebTransport#allowpooling) im `WebTransport`-Konstruktor), oder wenn der Benutzeragent noch keine Schätzung hat.
-->

## Beispiele

Das folgende Beispiel verwendet `await`, um auf das {{jsxref("Promise")}} zu warten, das von `getStats()` zurückgegeben wird.
Wenn das Versprechen erfüllt ist, wird das Ergebnis für die Eigenschaft `bytesSent` im Statistik-Objekt in die Konsole protokolliert.

```js
const stats = await transport.getStats();
console.log(`Bytes send: ${stats.bytesSent}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
