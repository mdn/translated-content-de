---
title: RTCPeerConnectionStats
slug: Web/API/RTCPeerConnectionStats
l10n:
  sourceCommit: f11f0a8b40d9c41eeff21a88d6af00420808cbe6
---

{{APIRef("WebRTC")}}

Das **`RTCPeerConnectionStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Informationen über die high-level Peer-Verbindung ([`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)).

Insbesondere liefert es die Anzahl der einzigartigen Datenkanäle, die geöffnet wurden, sowie die Anzahl der geöffneten Kanäle, die geschlossen wurden. Dadurch kann die aktuelle Anzahl der offenen Kanäle berechnet werden.

Diese Statistiken können durch Iterieren des [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), das von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, erhalten werden, bis Sie einen Bericht mit dem [`type`](#type) `peer-connection` finden.

## Instanzeigenschaften

- [`dataChannelsOpened`](/de/docs/Web/API/RTCPeerConnectionStats/dataChannelsOpened)
  - : Ein positiver Integer-Wert, der die Anzahl der einzigartigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Objekte angibt, die während ihrer Lebenszeit in den [`open`](/de/docs/Web/API/RTCDataChannel/readyState#open) Zustand gewechselt sind.
- [`dataChannelsClosed`](/de/docs/Web/API/RTCPeerConnectionStats/dataChannelsClosed)
  - : Ein positiver Integer-Wert, der die Anzahl der einzigartigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Objekte angibt, die den [`open`](/de/docs/Web/API/RTCDataChannel/readyState#open) Zustand während ihrer Lebenszeit verlassen haben (Kanäle, die in den Zustand [`closing`](/de/docs/Web/API/RTCDataChannel/readyState#closing) oder [`closed`](/de/docs/Web/API/RTCDataChannel/readyState#closed) übergehen, ohne jemals `open` gewesen zu sein, werden in dieser Zahl nicht berücksichtigt). Ein Kanal verlässt den `open` Zustand, wenn entweder das Ende der Verbindung oder das zugrunde liegende Transport geschlossen wird.

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCPeerConnectionStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erstellen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCPeerConnectionStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCPeerConnectionStats/type)
  - : Ein String mit dem Wert `"peer-connection"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Dieses Beispiel zeigt eine Funktion, die die Gesamtzahl der offenen Verbindungen zurückgibt oder `null`, wenn keine Statistiken bereitgestellt werden. Dies könnte in einer Schleife aufgerufen werden, ähnlich wie in dem Ansatz, der im [`RTCPeerConnection.getStats()` Beispiel](/de/docs/Web/API/RTCPeerConnection/getStats#examples) verwendet wird.

Die Funktion wartet auf das Ergebnis eines Aufrufs von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) und iteriert dann über den zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), um nur die Statistiken vom Typ `"peer-connection"` zu erhalten. Anschließend gibt sie die Gesamtzahl der offenen Kanäle oder `null` anhand der im Bericht enthaltenen Daten zurück.

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
