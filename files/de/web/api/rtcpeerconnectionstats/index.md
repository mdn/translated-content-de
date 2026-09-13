---
title: RTCPeerConnectionStats
slug: Web/API/RTCPeerConnectionStats
l10n:
  sourceCommit: 964ab8ae30c5ce0a343cc6d0f28c1b94389bae89
---

{{APIRef("WebRTC")}}

Das Dictionary **`RTCPeerConnectionStats`** der [WebRTC API](/de/docs/Web/API/WebRTC_API) stellt Informationen über die übergeordnete Peer-Verbindung ([`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)) bereit.

Insbesondere stellt es die Anzahl eindeutiger Datenkanäle bereit, die geöffnet wurden, sowie die Anzahl geöffneter Kanäle, die geschlossen wurden.
Dadurch kann die aktuelle Anzahl offener Kanäle berechnet werden.

Diese Statistiken können abgerufen werden, indem Sie den von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen, bis Sie einen Bericht mit dem [`type`](/de/docs/Web/API/RTCPeerConnectionStats/type) `peer-connection` finden.

## Instanzeigenschaften

- [`dataChannelsOpened`](/de/docs/Web/API/RTCPeerConnectionStats/dataChannelsOpened)
  - : Ein positiver ganzzahliger Wert, der die Anzahl eindeutiger [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekte angibt, die während ihrer Lebensdauer in den Zustand [`open`](/de/docs/Web/API/RTCDataChannel/readyState#open) eingetreten sind.
- [`dataChannelsClosed`](/de/docs/Web/API/RTCPeerConnectionStats/dataChannelsClosed)
  - : Ein positiver ganzzahliger Wert, der die Anzahl eindeutiger [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Objekte angibt, die während ihrer Lebensdauer den Zustand [`open`](/de/docs/Web/API/RTCDataChannel/readyState#open) verlassen haben (Kanäle, die in [`closing`](/de/docs/Web/API/RTCDataChannel/readyState#closing) oder [`closed`](/de/docs/Web/API/RTCDataChannel/readyState#closed) übergehen, ohne jemals `open` gewesen zu sein, werden bei dieser Zahl nicht gezählt).
    Ein Kanal verlässt den Zustand `open`, wenn entweder ein Ende der Verbindung oder der zugrunde liegende Transport geschlossen wird.

### Gemeinsame Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCPeerConnectionStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diesen Satz von Statistiken zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCPeerConnectionStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das den Zeitpunkt angibt, zu dem die Stichprobe für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCPeerConnectionStats/type)
  - : Ein String mit dem Wert `"peer-connection"`, der den Typ der Statistiken angibt, die das Objekt enthält.

## Beispiele

Dieses Beispiel zeigt eine Funktion, die die Gesamtzahl offener Verbindungen oder `null` zurückgibt, wenn keine Statistiken bereitgestellt werden.
Sie könnte in einer Schleife aufgerufen werden, ähnlich dem Ansatz im [Beispiel zu `RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats#examples).

Die Funktion wartet auf das Ergebnis eines Aufrufs von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) und durchläuft anschließend den zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), um nur die Statistiken vom Typ `"peer-connection"` abzurufen.
Anschließend gibt sie anhand der Daten im Bericht die Gesamtzahl offener Kanäle oder `null` zurück.

```js
async function numberOpenConnections(peerConnection) {
  const stats = await peerConnection.getStats();
  let peerConnectionStats = null;

  for (const report of stats.values()) {
    if (report.type === "peer-connection") {
      peerConnectionStats = report;
      break;
    }
  }

  if (
    peerConnectionStats === null ||
    typeof peerConnectionStats.dataChannelsOpened === "undefined" ||
    typeof peerConnectionStats.dataChannelsClosed === "undefined"
  ) {
    return null;
  }

  return (
    peerConnectionStats.dataChannelsOpened -
    peerConnectionStats.dataChannelsClosed
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
