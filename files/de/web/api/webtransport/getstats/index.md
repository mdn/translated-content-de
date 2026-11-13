---
title: "WebTransport: Methode getStats()"
short-title: getStats()
slug: Web/API/WebTransport/getStats
l10n:
  sourceCommit: edda2779693c1c669caff48cde40359018fb7a92
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

Die Methode **`getStats()`** der Schnittstelle [`WebTransport`](/de/docs/Web/API/WebTransport) gibt ein {{jsxref("Promise")}} zurück, das mit einem Objekt erfüllt wird, das Statistiken zur zugrunde liegenden Verbindung des Transports enthält.

Diese Statistiken können verwendet werden, um die Qualität der Verbindung zu überwachen oder die von der Anwendung gesendete Datenmenge an die geschätzte verfügbare Senderate anzupassen.
Wenn der Transport geschlossen wurde, wird das Promise mit den zuletzt verfügbaren Statistiken für die Verbindung erfüllt.

## Syntax

```js-nolint
getStats()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt erfüllt wird, das Statistiken zur zugrunde liegenden Verbindung enthält.

Nicht verfügbare Statistiken fehlen im zurückgegebenen Objekt.
Wenn der Transport mit [`allowPooling`](/de/docs/Web/API/WebTransport/WebTransport#allowpooling) auf `true` gesetzt erstellt wurde, können nur die Eigenschaften `atSendCapacity`, `estimatedSendRate`, `minRtt`, `rttVariation` und `smoothedRtt` vorhanden sein.
Das Objekt `datagrams` ist weiterhin vorhanden, hat aber keine Eigenschaften.

Das zurückgegebene Objekt kann die folgenden Eigenschaften haben:

- `atSendCapacity`
  - : Ein boolescher Wert, der angibt, ob die Anwendung Daten mit der Kapazität des Netzwerks sendet.
    Bei `true` spiegelt ein nicht auf `null` gesetzter Wert von `estimatedSendRate` die für die Anwendung verfügbare Netzwerkkapazität wider.
    Bei `false` sendet die Anwendung möglicherweise deutlich weniger Daten, als die Überlastungssteuerung zulässt, und `estimatedSendRate` ist möglicherweise eine ungenaue Schätzung der verfügbaren Netzwerkkapazität.
- `bytesAcknowledged` {{optional_inline}}
  - : Eine nicht negative Ganzzahl, die angibt, wie viele Nutzdaten-Bytes der Server auf der Verbindung als empfangen bestätigt hat (mithilfe des ACK-Mechanismus von QUIC).
    Diese Anzahl schließt jeglichen Framing-Overhead aus.
    Sie liegt in der Regel unter `bytesSent`, kann aufgrund von Paketverlusten aber dauerhaft niedriger bleiben.
- `bytesLost` {{optional_inline}}
  - : Eine nicht negative Ganzzahl, die angibt, wie viele Bytes auf der Verbindung verloren gegangen sind.
    Dieser Wert steigt, wenn Pakete als verloren eingestuft werden, und sinkt, wenn sie anschließend empfangen werden.
    Diese Anzahl schließt UDP und jegliches andere äußere Framing aus.
- `bytesReceived` {{optional_inline}}
  - : Eine nicht negative Ganzzahl, die angibt, wie viele Bytes insgesamt auf der Verbindung empfangen wurden.
    Diese Anzahl schließt doppelt empfangene Daten aus Streams ein, aber UDP und jegliches andere äußere Framing aus.
- `bytesSent` {{optional_inline}}
  - : Eine nicht negative Ganzzahl, die angibt, wie viele Nutzdaten-Bytes auf der Verbindung gesendet wurden.
    Diese Anzahl schließt jeglichen Framing-Overhead und erneute Übertragungen aus.
- `datagrams`
  - : Ein Objekt mit Statistiken zur Übertragung von Datagrammen über die Verbindung.
    Das Objekt kann die folgenden Eigenschaften haben:
    - `droppedIncoming` {{optional_inline}}
      - : Eine nicht negative Ganzzahl, die angibt, wie viele eingehende Datagramme verworfen wurden.
        Eingehende Datagramme werden verworfen, wenn die Anwendung sie nicht liest, bevor neue Datagramme die Empfangswarteschlange des [`readable`-Streams](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) überfüllen.
    - `expiredIncoming` {{optional_inline}}
      - : Eine nicht negative Ganzzahl, die angibt, wie viele eingehende Datagramme verworfen wurden, weil sie abgelaufen waren, bevor sie aus dem [`readable`-Stream](/de/docs/Web/API/WebTransportDatagramDuplexStream/readable) gelesen wurden.
        Das Höchstalter eines eingehenden Datagramms wird durch [`incomingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/incomingMaxAge) festgelegt.
    - `expiredOutgoing` {{optional_inline}}
      - : Eine nicht negative Ganzzahl, die angibt, wie viele Datagramme aus der Sendewarteschlange verworfen wurden, weil sie abgelaufen waren.
        Das Höchstalter eines zum Senden eingereihten Datagramms wird durch [`outgoingMaxAge`](/de/docs/Web/API/WebTransportDatagramDuplexStream/outgoingMaxAge) festgelegt.
    - `lostOutgoing` {{optional_inline}}
      - : Eine nicht negative Ganzzahl, die angibt, wie viele gesendete Datagramme als verloren eingestuft wurden.
        Ein Datagramm kann beispielsweise als verloren eingestuft werden, wenn innerhalb einer bestimmten Zeitspanne keine Bestätigung eingeht oder die Bestätigung für ein späteres Datagramm zuerst empfangen wird.
- `estimatedSendRate`
  - : Eine nicht negative Ganzzahl, die die geschätzte Rate in Bit pro Sekunde angibt, mit der der User Agent in die Warteschlange eingereihte Daten sendet.
    Der Wert ist `null`, wenn dem User Agent derzeit keine Schätzung vorliegt.
    Diese Rate gilt für alle Streams und Datagramme, die sich eine `WebTransport`-Sitzung teilen.
    Sie wird vom Algorithmus zur Überlastungssteuerung berechnet (siehe [`congestionControl`](/de/docs/Web/API/WebTransport/congestionControl)).
    Sie schließt jeglichen Framing-Overhead aus und gibt die Rate an, mit der Nutzdaten einer Anwendung gesendet werden könnten.
    Beachten Sie, dass der Wert `null` sein kann, selbst wenn er im Ergebnis eines vorherigen Aufrufs von `getStats()` nicht `null` war.
- `minRtt` {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die kürzeste auf der gesamten Verbindung beobachtete Umlaufzeit enthält.
- `packetsLost` {{optional_inline}}
  - : Eine nicht negative Ganzzahl, die angibt, wie viele Pakete auf der Verbindung verloren gegangen sind.
    Dieser Wert steigt, wenn Pakete als verloren eingestuft werden, und sinkt, wenn sie anschließend empfangen werden.
- `packetsReceived` {{optional_inline}}
  - : Eine nicht negative Ganzzahl, die angibt, wie viele Pakete insgesamt auf der Verbindung empfangen wurden, einschließlich Paketen, die nicht verarbeitet werden konnten.
- `packetsSent` {{optional_inline}}
  - : Eine nicht negative Ganzzahl, die angibt, wie viele Pakete auf der Verbindung gesendet wurden, einschließlich derjenigen, von denen bekannt ist, dass sie verloren gegangen sind.
- `rttVariation` {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die mittlere Variation der derzeit auf der Verbindung beobachteten Umlaufzeitmessungen enthält.
- `smoothedRtt` {{optional_inline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die derzeit auf der Verbindung beobachtete geglättete {{Glossary("Round_Trip_Time", "Umlaufzeit (RTT)")}} enthält. Sie wird unter Berücksichtigung von Bestätigungsverzögerungen als exponentiell gewichteter gleitender Durchschnitt der RTT-Messungen eines Endpunkts berechnet.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das zurückgegebene Promise wird mit dieser Ausnahme zurückgewiesen, wenn die Verbindung des Transports beim Aufruf der Methode bereits fehlgeschlagen ist oder wenn die Verbindung fehlschlägt, bevor sie hergestellt wurde.

## Beispiele

### Protokollieren der auf einer Verbindung gesendeten Bytes

Das folgende Beispiel verwendet `await`, um auf das von `getStats()` zurückgegebene {{jsxref("Promise")}} zu warten.
Wenn das Promise erfüllt wird, wird der Wert der Eigenschaft `bytesSent` im Statistikobjekt in der Konsole ausgegeben, sofern die Eigenschaft vorhanden ist.

```js
const stats = await transport.getStats();
if (stats.bytesSent !== undefined) {
  console.log(`Bytes sent: ${stats.bytesSent}`);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
