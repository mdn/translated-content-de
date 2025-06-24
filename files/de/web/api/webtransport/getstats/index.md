---
title: "WebTransport: getStats()-Methode"
short-title: getStats()
slug: Web/API/WebTransport/getStats
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode der [`WebTransport`](/de/docs/Web/API/WebTransport)-Schnittstelle gibt asynchron ein Objekt zurück, das HTTP/3-Verbindungsstatistiken enthält.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu einem Objekt aufgelöst wird, das HTTP/3-Verbindungsstatistiken enthält. Das zurückgegebene Objekt kann die folgenden Eigenschaften/Statistiken aufweisen:

- `timestamp`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem die Statistiken gesammelt wurden, relativ zum 1. Januar 1970, UTC.
- `bytesSent`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung gesendeten Bytes angibt, einschließlich der erneuten Übertragungen. Beachten Sie, dass diese Zählung keine zusätzlichen Daten von Protokollen umfasst, die von QUIC verwendet werden, wie z.B. UDP, oder andere äußere Rahmungen.
- `packetsSent`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung gesendeten Pakete angibt, einschließlich derjenigen, von denen bekannt ist, dass sie verloren gegangen sind.
- `packetsLost`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung verlorenen Pakete angibt. Dieser Wert wird steigen, wenn Pakete als verloren erklärt werden, und sinken, wenn sie anschließend empfangen werden.
- `numOutgoingStreamsCreated`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung erstellten ausgehenden QUIC-Streams angibt.
- `numIncomingStreamsCreated`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung erstellten eingehenden QUIC-Streams angibt.
- `bytesReceived`
  - : Eine positive Ganzzahl, die die Gesamtanzahl der auf der QUIC-Verbindung empfangenen Bytes angibt. Diese Zählung umfasst Duplikate von Daten aus Streams, jedoch nicht zusätzliche Daten für von QUIC verwendete Protokolle, wie z.B. UDP, oder andere äußere Rahmungen.
- `packetsReceived`
  - : Eine positive Ganzzahl, die die Gesamtanzahl der auf der QUIC-Verbindung empfangenen Pakete angibt, einschließlich Paketen, die nicht verarbeitet werden konnten.
- `smoothedRtt`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die geglättete {{Glossary("Round_Trip_Time", "Round-Trip Time (RTT)")}} enthält, die derzeit auf der Verbindung beobachtet wird. Diese wird als exponentiell gewichteter gleitender Durchschnitt von RTT-Messungen eines Endpunkts berechnet, wobei Verzögerungen bei Bestätigungen berücksichtigt werden.
- `rttVariation`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die mittlere Variation der Round-Trip Time-Messungen enthält, die derzeit auf der Verbindung beobachtet werden.
- `minRtt`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die minimale Round-Trip Time enthält, die auf der gesamten Verbindung beobachtet wurde.
- `datagrams`
  - : Ein Objekt, das Statistiken für die Datagrammübertragung über die Verbindung enthält. Das Objekt hat die folgenden Eigenschaften:
    - `timestamp`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem die Statistiken gesammelt wurden, relativ zum 1. Januar 1970, UTC.
    - `expiredOutgoing`
      - : Eine positive Ganzzahl, die die Anzahl der Datagramme angibt, die aus der Warteschlange zum Senden entfernt wurden, weil sie abgelaufen sind. Beachten Sie, dass das maximale Alter, bevor ein Datagramm in der Sendewarteschlange abläuft, in [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge) gefunden werden kann.
    - `droppedIncoming`
      - : Eine positive Ganzzahl, die die Anzahl der eingehenden Datagramme angibt, die verworfen wurden. Eingehende Datagramme werden verworfen, wenn die Anwendung sie nicht liest, bevor neue Datagramme die Empfangswarteschlange des [`readable`-Streams](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) überladen.
    - `lostOutgoing`
      - : Eine positive Ganzzahl, die die Anzahl der gesendeten Datagramme angibt, die als verloren erklärt wurden. Beachten Sie, dass ein Datagramm als verloren erklärt werden kann, wenn z.B. keine Bestätigung innerhalb eines Zeitlimits eingetroffen ist oder eine Bestätigung für ein späteres Datagramm zuerst empfangen wurde.

<!-- Hinweis: Dies ist nicht in Firefox IDL vorhanden, und die Methode wird noch nicht von anderen implementiert gemäß https://searchfox.org/mozilla-central/commit/4e6970cd336f1b642c0be6c9b697b4db5f7b6aeb
- `estimatedSendRate`
  - : Eine positive Ganzzahl, die die geschätzte Rate angibt, mit der die vom Benutzer-Agenten in der Warteschlange befindlichen Daten gesendet werden, in Bits pro Sekunde. Diese Rate gilt für alle Streams und Datagramme, die eine `WebTransport`-Sitzung teilen. Das Mitglied ist nicht vorhanden, wenn die Sitzung mit anderen in einer gemeinsamen Verbindung gepoolt ist (siehe [`allowPooling`](/de/docs/Web/API/WebTransport/WebTransport#allowpooling) im `WebTransport`-Konstruktor) oder wenn der Benutzer-Agent noch keine Schätzung hat.
-->

## Beispiele

Das folgende Beispiel verwendet `await`, um auf das {{jsxref("Promise")}} zu warten, das von `getStats()` zurückgegeben wird. Wenn das Versprechen erfüllt wird, wird das Ergebnis für die Eigenschaft `bytesSent` im Statistikobjekt in die Konsole protokolliert.

```js
const stats = await transport.getStats();
console.log(`Bytes send: ${stats.bytesSent}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
