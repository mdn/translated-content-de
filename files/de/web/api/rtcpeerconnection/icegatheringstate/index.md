---
title: "RTCPeerConnection: iceGatheringState-Eigenschaft"
short-title: iceGatheringState
slug: Web/API/RTCPeerConnection/iceGatheringState
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`iceGatheringState`** der {{domxref("RTCPeerConnection")}}-Schnittstelle gibt einen String zurück, der den aktuellen ICE-Sammelstatus dieser Verbindung beschreibt. Dadurch können Sie beispielsweise erkennen, wann das Sammeln von ICE-Kandidaten abgeschlossen ist.

Sie können erkennen, wann sich der Wert dieser Eigenschaft ändert, indem Sie auf ein Ereignis vom Typ {{domxref("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}} achten.

Beachten Sie, dass **`iceGatheringState`** den gesamten Sammelstatus der Verbindung repräsentiert, einschließlich jedes verwendeten {{domxref("RTCIceTransport")}} durch jeden {{domxref("RTCRtpSender")}} und jede {{domxref("RTCRtpReceiver")}} in der gesamten Verbindung. Dies steht im Gegensatz zu {{domxref("RTCIceTransport.gatheringState")}}, das den Sammelstatus für einen einzelnen Transport darstellt.

## Wert

Die möglichen Werte sind:

- `new`
  - : Die Peer-Verbindung wurde gerade erstellt und hat noch keine Netzwerkaktivitäten durchgeführt.
- `gathering`
  - : Der ICE-Agent sammelt derzeit Kandidaten für die Verbindung.
- `complete`
  - : Der ICE-Agent hat das Sammeln von Kandidaten abgeschlossen.
    Wenn etwas passiert, das das Sammeln neuer Kandidaten erfordert, wie das Hinzufügen einer neuen Schnittstelle oder eines neuen ICE-Servers, wechselt der Status wieder zu `gathering`, um diese Kandidaten zu sammeln.

## Beispiel

```js
const pc = new RTCPeerConnection();
const state = pc.iceGatheringState;
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}

## Siehe auch

- {{DOMxRef("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}}
- [WebRTC](/de/docs/Web/API/WebRTC_API)
