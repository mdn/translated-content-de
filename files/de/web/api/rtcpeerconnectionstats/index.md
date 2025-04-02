---
title: RTCPeerConnectionStats
slug: Web/API/RTCPeerConnectionStats
l10n:
  sourceCommit: 848771d9efdc57ad84d643081cf91e89355c751b
---

{{APIRef("WebRTC")}}

Das **`RTCPeerConnectionStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Informationen über die hochrangige Peer-Verbindung ([`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)).

Insbesondere gibt es die Anzahl der einzigartigen Datenkanäle an, die geöffnet wurden, sowie die Anzahl der geöffneten Kanäle, die geschlossen wurden.
Dies ermöglicht die Berechnung der aktuellen Anzahl der offenen Kanäle.

Diese Statistiken können erhalten werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, durchlaufen wird, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCPeerConnectionStats/type) `peer-connection` finden.

## Instanzeigenschaften

- [`dataChannelsOpened`](/de/docs/Web/API/RTCPeerConnectionStats/dataChannelsOpened)
  - : Ein positiver ganzzahliger Wert, der die Anzahl der einzigartigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekte angibt, die in ihren Lebenszyklen in den [`open`](/de/docs/Web/API/RTCDataChannel/readyState#open)-Zustand übergegangen sind.
- [`dataChannelsClosed`](/de/docs/Web/API/RTCPeerConnectionStats/dataChannelsClosed)
  - : Ein positiver ganzzahliger Wert, der die Anzahl der einzigartigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekte angibt, die den [`open`](/de/docs/Web/API/RTCDataChannel/readyState#open)-Zustand in ihrem Lebenszyklus verlassen haben (Kanäle, die in den Zustand [`closing`](/de/docs/Web/API/RTCDataChannel/readyState#closing) oder [`closed`](/de/docs/Web/API/RTCDataChannel/readyState#closed) übergehen, ohne jemals `open` gewesen zu sein, werden in dieser Zahl nicht berücksichtigt).
    Ein Kanal verlässt den `open`-Zustand, wenn entweder ein Ende der Verbindung oder das zugrundeliegende Transportmittel geschlossen wird.

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCPeerConnectionStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCPeerConnectionStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCPeerConnectionStats/type)
  - : Ein String mit dem Wert `"peer-connection"`, der den Typ der Statistik angibt, die das Objekt enthält.

## Beispiele

Dieses Beispiel zeigt eine Funktion, die die Gesamtanzahl der offenen Verbindungen zurückgibt oder `null`, wenn keine Statistiken bereitgestellt werden.
Dies könnte in einer Schleife aufgerufen werden, ähnlich dem Ansatz, der im [`RTCPeerConnection.getStats()`-Beispiel](/de/docs/Web/API/RTCPeerConnection/getStats#examples) verwendet wird.

Die Funktion wartet auf das Ergebnis eines Aufrufs von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) und durchläuft dann den zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), um nur die Statistiken des Typs `"peer-connection"` zu erhalten.
Anschließend gibt sie die Gesamtanzahl der offenen Kanäle oder `null` mit den Daten im Bericht zurück.

```js
async function numberOpenConnections (peerConnection) {
  const stats = await peerConnection.getStats();
  let peerConnectionStats = null;

  stats.forEach((report) => {
    if (report.type === "peer-connection") {
      peerConnectionStats = report;
      break;
    }
  });

result = (typeof peerConnectionStats.dataChannelsOpened === 'undefined' || typeof peerConnectionStats.dataChannelsClosed=== 'undefined') ? null : peerConnectionStats.dataChannelsOpened - peerConnectionStats.dataChannelsClosed;
return result
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
