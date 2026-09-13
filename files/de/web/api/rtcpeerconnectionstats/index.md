---
title: RTCPeerConnectionStats
slug: Web/API/RTCPeerConnectionStats
l10n:
  sourceCommit: 6397f5a304fc4f2a470d73dba9937ea1aabc1229
---

{{APIRef("WebRTC")}}

Das **`RTCPeerConnectionStats`** Wörterbuch der [WebRTC API](/de/docs/Web/API/WebRTC_API) liefert Informationen über die hochrangige Peer-Verbindung ([`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)).

Insbesondere bietet es die Anzahl der eindeutigen Datenkanäle, die geöffnet wurden, und die Anzahl der geöffneten Kanäle, die geschlossen wurden.
Dies ermöglicht die Berechnung der aktuellen Anzahl der offenen Kanäle.

Diese Statistiken können gewonnen werden, indem der [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport) durchlaufen wird, der von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) zurückgegeben wird, bis ein Bericht mit dem [`type`](/de/docs/Web/API/RTCPeerConnectionStats/type) von `peer-connection` gefunden wird.

## Instanzeigenschaften

- [`dataChannelsOpened`](/de/docs/Web/API/RTCPeerConnectionStats/dataChannelsOpened)
  - : Ein positiver ganzzahliger Wert, der die Anzahl der eindeutigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Objekte angibt, die während ihrer Lebensdauer in den [`open`](/de/docs/Web/API/RTCDataChannel/readyState#open) Zustand eingetreten sind.
- [`dataChannelsClosed`](/de/docs/Web/API/RTCPeerConnectionStats/dataChannelsClosed)
  - : Ein positiver ganzzahliger Wert, der die Anzahl der eindeutigen [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel) Objekte angibt, die während ihrer Lebensdauer den [`open`](/de/docs/Web/API/RTCDataChannel/readyState#open) Zustand verlassen haben (Kanäle, die in den [`closing`](/de/docs/Web/API/RTCDataChannel/readyState#closing) oder [`closed`](/de/docs/Web/API/RTCDataChannel/readyState#closed) Zustand wechseln, ohne jemals `open` gewesen zu sein, werden in dieser Zahl nicht gezählt).
    Ein Kanal verlässt den `open` Zustand, wenn entweder das Ende der Verbindung oder das zugrundeliegende Transport geschlossen wird.

### Allgemeine Instanzeigenschaften

Die folgenden Eigenschaften sind allen WebRTC-Statistikobjekten gemeinsam.

<!-- RTCStats -->

- [`id`](/de/docs/Web/API/RTCPeerConnectionStats/id)
  - : Ein String, der das Objekt, das überwacht wird, um diese Gruppe von Statistiken zu erzeugen, eindeutig identifiziert.
- [`timestamp`](/de/docs/Web/API/RTCPeerConnectionStats/timestamp)
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) Objekt, das die Zeit angibt, zu der das Sample für dieses Statistikobjekt genommen wurde.
- [`type`](/de/docs/Web/API/RTCPeerConnectionStats/type)
  - : Ein String mit dem Wert `"peer-connection"`, der den Typ der Statistiken anzeigt, den das Objekt enthält.

## Beispiele

Dieses Beispiel zeigt eine Funktion, die die Gesamtzahl der offenen Verbindungen zurückgibt, oder `null`, wenn keine Statistiken bereitgestellt werden.
Dies könnte in einer Schleife aufgerufen werden, ähnlich der Vorgehensweise im [`RTCPeerConnection.getStats()` Beispiel](/de/docs/Web/API/RTCPeerConnection/getStats#examples).

Die Funktion wartet auf das Ergebnis eines Aufrufs von [`RTCPeerConnection.getStats()`](/de/docs/Web/API/RTCPeerConnection/getStats) und durchläuft dann den zurückgegebenen [`RTCStatsReport`](/de/docs/Web/API/RTCStatsReport), um nur die Statistiken des Typs `"peer-connection"` zu erhalten.
Sie gibt dann die Gesamtzahl der offenen Kanäle oder `null` zurück, basierend auf den Daten im Bericht.

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
