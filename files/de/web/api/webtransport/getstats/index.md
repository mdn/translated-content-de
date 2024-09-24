---
title: "WebTransport: getStats()-Methode"
short-title: getStats()
slug: Web/API/WebTransport/getStats
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SeeCompatTable}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die **`getStats()`**-Methode der {{domxref("WebTransport")}}-Schnittstelle gibt asynchron ein Objekt zurück, das HTTP/3-Verbindungsstatistiken enthält.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich zu einem Objekt auflöst, das HTTP/3-Verbindungsstatistiken enthält.
Das zurückgegebene Objekt kann die folgenden Eigenschaften/Statistiken aufweisen:

- `timestamp`
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der den Zeitpunkt angibt, zu dem die Statistiken gesammelt wurden, relativ zum 1. Jan. 1970, UTC.
- `bytesSent`
  - : Eine positive Ganzzahl, die angibt, wie viele Bytes über die QUIC-Verbindung gesendet wurden, einschließlich erneuter Übertragungen.
    Beachten Sie, dass diese Anzahl keine zusätzlichen Daten von Protokollen enthält, die von QUIC verwendet werden, wie zum Beispiel UDP, oder andere äußere Rahmenstrukturen.
- `packetsSent`
  - : Eine positive Ganzzahl, die angibt, wie viele Pakete über die QUIC-Verbindung gesendet wurden, einschließlich solcher, von denen bekannt ist, dass sie verloren gegangen sind.
- `packetsLost`
  - : Eine positive Ganzzahl, die angibt, wie viele Pakete über die QUIC-Verbindung verloren gegangen sind.
    Dieser Wert erhöht sich, wenn Pakete als verloren erklärt werden, und verringert sich, falls sie später empfangen werden.
- `numOutgoingStreamsCreated`
  - : Eine positive Ganzzahl, die angibt, wie viele ausgehende QUIC-Streams über die QUIC-Verbindung erstellt wurden.
- `numIncomingStreamsCreated`
  - : Eine positive Ganzzahl, die angibt, wie viele eingehende QUIC-Streams über die QUIC-Verbindung erstellt wurden.
- `bytesReceived`
  - : Eine positive Ganzzahl, die die Gesamtzahl der über die QUIC-Verbindung empfangenen Bytes angibt.
    Diese Anzahl enthält doppelte Daten von Streams, aber keine zusätzlichen Daten für Protokolle, die von QUIC verwendet werden, wie zum Beispiel UDP, oder andere äußere Rahmenstrukturen.
- `packetsReceived`
  - : Eine positive Ganzzahl, die die Gesamtzahl der über die QUIC-Verbindung empfangenen Pakete angibt, einschließlich Paketen, die nicht verarbeitbar waren.
- `smoothedRtt`
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der die geglättete [Round-Trip-Time (RTT)](/de/docs/Glossary/Round_Trip_Time) enthält, die derzeit auf der Verbindung beobachtet wird, berechnet als exponentiell gewichteter gleitender Durchschnitt der RTT-Muster eines Endpunkts nach Berücksichtigung von Bestätigungsverzögerungen.
- `rttVariation`
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der die durchschnittliche Variation der Round-Trip-Time-Muster enthält, die derzeit auf der Verbindung beobachtet wird.
- `minRtt`
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der die minimale Round-Trip-Time enthält, die über die gesamte Verbindung beobachtet wurde.
- `datagrams`

  - : Ein Objekt, das Statistiken zur Datagrammübertragung über die Verbindung enthält.
    Das Objekt hat die folgenden Eigenschaften:

    - `timestamp`
      - : Ein {{domxref("DOMHighResTimeStamp")}}, der den Zeitpunkt angibt, zu dem die Statistiken gesammelt wurden, relativ zum 1. Jan. 1970, UTC.
    - `expiredOutgoing`
      - : Eine positive Ganzzahl, die angibt, wie viele Datagramme aus der Warteschlange zum Senden entfernt wurden, weil sie abgelaufen sind.
        Beachten Sie, dass das maximale Alter, bevor ein Datagramm in der Sende-Warteschlange abläuft, unter [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge) zu finden ist.
    - `droppedIncoming`
      - : Eine positive Ganzzahl, die angibt, wie viele eingehende Datagramme verworfen wurden.
        Eingehende Datagramme werden verworfen, wenn die Anwendung sie nicht liest, bevor neue Datagramme die Empfangswarteschlange des [`readable` streams](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) überfüllen.
    - `lostOutgoing`
      - : Eine positive Ganzzahl, die angibt, wie viele gesendete Datagramme als verloren erklärt wurden.
        Beachten Sie, dass ein Datagramm als verloren erklärt werden kann, wenn beispielsweise keine Bestätigung innerhalb eines Zeitlimits eingetroffen ist oder zuerst eine Bestätigung für ein späteres Datagramm eingetroffen ist.

<!-- Hinweis: Dies ist nicht in Firefox IDL und Methode noch nicht von anderen in https://searchfox.org/mozilla-central/commit/4e6970cd336f1b642c0be6c9b697b4db5f7b6aeb implementiert
- `estimatedSendRate`
  - : Eine positive Ganzzahl, die die geschätzte Rate angibt, mit der die in der Warteschlange stehenden Daten vom Benutzeragenten gesendet werden, in Bit pro Sekunde.
    Diese Rate gilt für alle Streams und Datagramme, die eine `WebTransport`-Sitzung teilen.
    Das Mitglied ist nicht vorhanden, wenn die Sitzung mit anderen in einer gemeinsamen Verbindung gepoolt wird (siehe [`allowPooling`](/de/docs/Web/API/WebTransport/WebTransport#allowpooling) im `WebTransport`-Konstruktor), oder wenn der Benutzeragent noch keine Schätzung hat.
-->

## Beispiele

Im folgenden Beispiel wird `await` verwendet, um auf das {{jsxref("Promise")}} zu warten, das von `getStats()` zurückgegeben wird.
Sobald das Versprechen erfüllt ist, wird das Ergebnis der `bytesSent`-Eigenschaft im Statistikenobjekt in der Konsole protokolliert.

```js
const stats = await transport.getStats();
console.log(`Bytes send: ${stats.bytesSent}`);
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
