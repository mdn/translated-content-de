---
title: "RTCPeerConnection: iceGatheringState-Eigenschaft"
short-title: iceGatheringState
slug: Web/API/RTCPeerConnection/iceGatheringState
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`iceGatheringState`**-Eigenschaft der [`RTCPeerConnection`](/de/docs/Web/API/RTCPeerConnection)-Schnittstelle gibt einen String zurück, der den allgemeinen ICE-Sammlungssstatus für diese Verbindung beschreibt. Dies ermöglicht Ihnen zum Beispiel zu erkennen, wann die Sammlung der ICE-Kandidaten abgeschlossen ist.

Sie können erkennen, wann sich der Wert dieser Eigenschaft ändert, indem Sie auf ein Ereignis des Typs [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event) achten.

Beachten Sie, dass **`iceGatheringState`** den allgemeinen Sammlungssstatus der Verbindung darstellt, einschließlich jedes [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport), das von jedem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und jedem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) der gesamten Verbindung verwendet wird. Dies steht im Gegensatz zu [`RTCIceTransport.gatheringState`](/de/docs/Web/API/RTCIceTransport/gatheringState), das den Sammlungssstatus für einen einzelnen Transport darstellt.

## Wert

Die möglichen Werte sind:

- `new`
  - : Die Peer-Verbindung wurde gerade erstellt und hat noch keine Netzwerkaktivitäten durchgeführt.
- `gathering`
  - : Der ICE-Agent sammelt gerade Kandidaten für die Verbindung.
- `complete`
  - : Der ICE-Agent hat die Kandidatensammlung abgeschlossen.
    Wenn etwas passiert, das das Sammeln neuer Kandidaten erfordert, wie das Hinzufügen einer neuen Schnittstelle oder eines neuen ICE-Servers, wird der Status auf `gathering` zurückgesetzt, um diese Kandidaten zu sammeln.

## Beispiel

```js
const pc = new RTCPeerConnection();
const state = pc.iceGatheringState;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`icegatheringstatechange`](/de/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
- [WebRTC](/de/docs/Web/API/WebRTC_API)
