---
title: "RTCDataChannel: priority-Eigenschaft"
short-title: priority
slug: Web/API/RTCDataChannel/priority
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die schreibgeschützte **`priority`**-Eigenschaft der [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Schnittstelle gibt einen String zurück, der die Priorität des Datenkanals angibt. Die Priorität wird vom User-Agent zum Zeitpunkt der Kanalerstellung basierend auf der `priority`-Option im `dataChannelDict`-Parameter zugewiesen, der an [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) übergeben wird, oder vom entfernten Peer für eingehende Datenkanäle.

## Wert

Ein String, der die Priorität des Datenkanals angibt. Mögliche Werte sind in der Reihenfolge von der niedrigsten bis zur höchsten Priorität:

- `"very-low"`
  - : Der Datenkanal hat eine sehr niedrige Priorität.
- `"low"`
  - : Der Datenkanal hat eine niedrige Priorität. Dies ist der Standardwert.
- `"medium"`
  - : Der Datenkanal hat eine mittlere Priorität.
- `"high"`
  - : Der Datenkanal hat eine hohe Priorität.

## Beispiele

### Überprüfen der Priorität eines Datenkanals

```js
const pc = new RTCPeerConnection();
const dc = pc.createDataChannel("my channel", { priority: "high" });

console.log(dc.priority); // "high"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebRTC API](/de/docs/Web/API/WebRTC_API)
- [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
