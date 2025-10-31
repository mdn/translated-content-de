---
title: "WebTransport: getStats()-Methode"
short-title: getStats()
slug: Web/API/WebTransport/getStats
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
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

Ein {{jsxref("Promise")}}, das in ein Objekt aufgelöst wird, das HTTP/3-Verbindungsstatistiken enthält. Das zurückgegebene Objekt kann die folgenden Eigenschaften/Statistiken aufweisen:

- `timestamp`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem die Statistiken erfasst wurden, relativ zum 1. Januar 1970, UTC.
- `bytesSent`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung gesendeten Bytes angibt, einschließlich erneuter Übertragungen. Beachten Sie, dass diese Anzahl keine zusätzlichen Daten aus Protokollen umfasst, die von QUIC verwendet werden, wie UDP oder andere äußere Rahmen.
- `packetsSent`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung gesendeten Pakete angibt, einschließlich derjenigen, von denen bekannt ist, dass sie verloren gegangen sind.
- `packetsLost`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung verlorenen Pakete angibt. Dieser Wert erhöht sich, wenn Pakete als verloren erklärt werden, und verringert sich, wenn sie anschließend empfangen werden.
- `numOutgoingStreamsCreated`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung erstellten ausgehenden QUIC-Streams angibt.
- `numIncomingStreamsCreated`
  - : Eine positive Ganzzahl, die die Anzahl der auf der QUIC-Verbindung erstellten eingehenden QUIC-Streams angibt.
- `bytesReceived`
  - : Eine positive Ganzzahl, die die Gesamtanzahl der auf der QUIC-Verbindung empfangenen Bytes angibt. Diese Anzahl umfasst doppelte Daten von Streams, jedoch keine zusätzlichen Daten für Protokolle, die von QUIC verwendet werden, wie UDP oder andere äußere Rahmen.
- `packetsReceived`
  - : Eine positive Ganzzahl, die die Gesamtanzahl der auf der QUIC-Verbindung empfangenen Pakete angibt, einschließlich der Pakete, die nicht verarbeitbar waren.
- `smoothedRtt`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die geglättete {{Glossary("Round_Trip_Time", "Round-Trip-Zeit (RTT)")}} enthält, die derzeit auf der Verbindung beobachtet wird, berechnet als exponentiell gewichteter gleitender Durchschnitt der RTT-Proben eines Endpunkts nach Berücksichtigung der Bestätigungsverzögerungen.
- `rttVariation`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die mittlere Varianz in den Round-Trip-Zeitproben enthält, die derzeit auf der Verbindung beobachtet wird.
- `minRtt`
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die minimale Round-Trip-Zeit enthält, die auf der gesamten Verbindung beobachtet wurde.
- `datagrams`
  - : Ein Objekt, das Statistiken zur Datagrammübertragung über die Verbindung enthält. Das Objekt hat die folgenden Eigenschaften:
    - `timestamp`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem die Statistiken erfasst wurden, relativ zum 1. Januar 1970, UTC.
    - `expiredOutgoing`
      - : Eine positive Ganzzahl, die die Anzahl der Datagramme angibt, die aus der Sendewarteschlange entfernt wurden, weil sie abgelaufen sind. Beachten Sie, dass das maximale Alter, bevor ein Datagramm in der Sendewarteschlange abläuft, in [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge) gefunden werden kann.
    - `droppedIncoming`
      - : Eine positive Ganzzahl, die die Anzahl der eingehenden Datagramme angibt, die verworfen wurden. Eingehende Datagramme werden verworfen, wenn die Anwendung sie nicht liest, bevor neue Datagramme die Empfangswarteschlange des [`lesbaren Streams`](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) überfüllen.
    - `lostOutgoing`
      - : Eine positive Ganzzahl, die die Anzahl der gesendeten Datagramme angibt, die als verloren erklärt wurden. Beachten Sie, dass ein Datagramm als verloren erklärt werden kann, wenn beispielsweise keine Bestätigung innerhalb eines Timeouts eingetroffen ist oder eine Bestätigung für ein späteres Datagramm zuerst empfangen wurde.

<!-- Hinweis, dies ist nicht in Firefox IDL, und die Methode wurde noch nicht von anderen in https://searchfox.org/firefox-main/commit/4e6970cd336f1b642c0be6c9b697b4db5f7b6aeb implementiert
- `estimatedSendRate`
  - : Eine positive Ganzzahl, die die geschätzte Rate angibt, mit der Daten in der Warteschlange vom Benutzeragenten gesendet werden, in Bit pro Sekunde. Diese Rate gilt für alle Streams und Datagramme, die eine `WebTransport`-Sitzung teilen. Das Mitglied ist nicht vorhanden, wenn die Sitzung mit anderen in einer gemeinsamen Verbindung zusammengefasst ist (siehe [`allowPooling`](/de/docs/Web/API/WebTransport/WebTransport#allowpooling) im `WebTransport`-Konstruktor) oder wenn der Benutzeragent noch keine Schätzung hat.
-->

## Beispiele

Das folgende Beispiel verwendet `await`, um auf das {{jsxref("Promise")}} zu warten, das von `getStats()` zurückgegeben wird. Wenn das Versprechen erfüllt wird, wird das Ergebnis für die `bytesSent`-Eigenschaft des Statistikobjekts in der Konsole protokolliert.

```js
const stats = await transport.getStats();
console.log(`Bytes send: ${stats.bytesSent}`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
