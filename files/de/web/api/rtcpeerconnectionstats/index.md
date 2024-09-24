---
title: RTCPeerConnectionStats
slug: Web/API/RTCPeerConnectionStats
l10n:
  sourceCommit: f11f0a8b40d9c41eeff21a88d6af00420808cbe6
---

{{APIRef("WebRTC")}}

Das **`RTCPeerConnectionStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Informationen über die hochstufige Peer-Verbindung ({{domxref("RTCPeerConnection")}}).

Insbesondere gibt es die Anzahl der eindeutigen Datenkanäle an, die geöffnet wurden, sowie die Anzahl der geöffneten Kanäle, die geschlossen wurden.
Dies ermöglicht die Berechnung der aktuellen Anzahl geöffneter Kanäle.

Diese Statistiken können erhalten werden, indem Sie den {{domxref("RTCStatsReport")}} durchlaufen, der von {{domxref("RTCPeerConnection.getStats()")}} zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) von `peer-connection` finden.

## Instanz-Eigenschaften

- {{domxref("RTCPeerConnectionStats.dataChannelsOpened", "dataChannelsOpened")}}
  - : Ein positiver ganzzahliger Wert, der die Anzahl der eindeutigen {{domxref("RTCDataChannel")}}-Objekte angibt, die während ihrer Lebensdauer in den [`open`](/de/docs/Web/API/RTCDataChannel/readyState#open)-Zustand eingetreten sind.
- {{domxref("RTCPeerConnectionStats.dataChannelsClosed", "dataChannelsClosed")}}
  - : Ein positiver ganzzahliger Wert, der die Anzahl der eindeutigen {{domxref("RTCDataChannel")}}-Objekte angibt, die während ihrer Lebensdauer den [`open`](/de/docs/Web/API/RTCDataChannel/readyState#open)-Zustand verlassen haben (Kanäle, die in den [`closing`](/de/docs/Web/API/RTCDataChannel/readyState#closing)- oder [`closed`](/de/docs/Web/API/RTCDataChannel/readyState#closed)-Zustand übergehen, ohne jemals `open` zu sein, werden in dieser Zahl nicht erfasst).
    Ein Kanal verlässt den `open`-Zustand, wenn entweder das Ende der Verbindung oder der zugrunde liegende Transport geschlossen wird.

### Gemeinsame Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- {{domxref("RTCPeerConnectionStats.id", "id")}}
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- {{domxref("RTCPeerConnectionStats.timestamp", "timestamp")}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Zeit angibt, zu der die Probe für dieses Statistikobjekt entnommen wurde.
- {{domxref("RTCPeerConnectionStats.type", "type")}}
  - : Ein String mit dem Wert `"peer-connection"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Dieses Beispiel zeigt eine Funktion, um die Gesamtzahl der offenen Verbindungen zurückzugeben, oder `null`, wenn keine Statistiken bereitgestellt werden.
Dies könnte in einer Schleife aufgerufen werden, ähnlich dem Ansatz, der im [`RTCPeerConnection.getStats()`-Beispiel](/de/docs/Web/API/RTCPeerConnection/getStats#examples) verwendet wird.

Die Funktion wartet auf das Ergebnis eines Aufrufs von {{domxref("RTCPeerConnection.getStats()")}} und durchläuft dann den zurückgegebenen {{domxref("RTCStatsReport")}}, um nur die Statistiken des Typs `"peer-connection"` zu erhalten.
Anschließend gibt sie unter Verwendung der im Bericht enthaltenen Daten die Gesamtzahl der offenen Kanäle oder `null` zurück.

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
