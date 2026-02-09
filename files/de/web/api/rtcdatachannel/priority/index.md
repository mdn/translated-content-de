---
title: "RTCDataChannel: priority-Eigenschaft"
short-title: priority
slug: Web/API/RTCDataChannel/priority
l10n:
  sourceCommit: edfa7accf30f93ad25735fee3bffd118f107bea9
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`priority`**-Eigenschaft des [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)-Interfaces gibt einen String zurück, der die Priorität des Datenkanals angibt. Die Priorität wird vom Benutzeragenten bei der Erstellung des Kanals basierend auf der `priority`-Option im `dataChannelDict`-Parameter zugewiesen, der an [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel) übergeben wird, oder von der entfernten Gegenstelle für eingehende Datenkanäle.

## Wert

Ein String, der die Priorität des Datenkanals angibt. Mögliche Werte, in der Reihenfolge von der niedrigsten zur höchsten Priorität, sind:

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

- [WebRTC-API](/de/docs/Web/API/WebRTC_API)
- [Verwendung von WebRTC-Datenkanälen](/de/docs/Web/API/WebRTC_API/Using_data_channels)
- [`RTCDataChannel`](/de/docs/Web/API/RTCDataChannel)
- [`RTCPeerConnection.createDataChannel()`](/de/docs/Web/API/RTCPeerConnection/createDataChannel)
