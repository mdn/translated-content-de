---
title: RTCPeerConnectionStats
slug: Web/API/RTCPeerConnectionStats
l10n:
  sourceCommit: f11f0a8b40d9c41eeff21a88d6af00420808cbe6
---

{{APIRef("WebRTC")}}

Das **`RTCPeerConnectionStats`**-Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) bietet Informationen über die Peer-Verbindung auf hoher Ebene ([`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)).

Insbesondere stellt es die Anzahl der eindeutigen Datenkanäle bereit, die geöffnet wurden, sowie die Anzahl der geöffneten Kanäle, die geschlossen wurden.
Dies ermöglicht die Berechnung der aktuellen Anzahl der offenen Kanäle.

Diese Statistiken können durch Iterieren des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) erhalten werden, das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis Sie einen Bericht mit dem [`type`](#type) von `peer-connection` finden.

## Instanz-Eigenschaften

- [`dataChannelsOpened`](/de/docs/Web/API/RTCPeerConnectionStats/dataChannelsOpened)
  - : Ein positiver Ganzzahlwert, der die Anzahl der eindeutigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekte angibt, die während ihrer Lebensdauer den [`open`](/de/docs/Web/API/RTCDataChannel/readyState#open)-Zustand erreicht haben.
- [`dataChannelsClosed`](/de/docs/Web/API/RTCPeerConnectionStats/dataChannelsClosed)
  - : Ein positiver Ganzzahlwert, der die Anzahl der eindeutigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekte angibt, die während ihrer Lebensdauer den [`open`](/de/docs/Web/API/RTCDataChannel/readyState#open)-Zustand verlassen haben (Kanäle, die in den Zustand [`closing`](/de/docs/Web/API/RTCDataChannel/readyState#closing) oder [`closed`](/de/docs/Web/API/RTCDataChannel/readyState#closed) wechseln, ohne jemals `open` gewesen zu sein, werden in dieser Zahl nicht gezählt).
    Ein Kanal verlässt den `open`-Zustand, wenn entweder das Ende der Verbindung oder das zugrunde liegende Transportmittel geschlossen wird.

### Allgemeine Instanz-Eigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCPeerConnectionStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um dieses Set von Statistiken zu erstellen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCPeerConnectionStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das angibt, zu welchem Zeitpunkt die Probe für dieses Statistikobjekt entnommen wurde.
- [`type`](/de/docs/Web/API/RTCPeerConnectionStats/type)
  - : Ein String mit dem Wert `"peer-connection"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Dieses Beispiel zeigt eine Funktion, die die Gesamtanzahl der offenen Verbindungen zurückgibt oder `null`, wenn keine Statistiken bereitgestellt werden.
Dies könnte in einer Schleife aufgerufen werden, ähnlich dem Ansatz, der im Beispiel von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats#examples) verwendet wird.

Die Funktion wartet auf das Ergebnis eines Aufrufs von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) und iteriert dann den zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), um nur die Statistiken des Typs `"peer-connection"` zu erhalten.
Anschließend gibt sie die Gesamtanzahl der offenen Kanäle oder `null` zurück, unter Verwendung der Daten im Bericht.

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
