---
title: "RTCIceTransport: gatheringState-Eigenschaft"
short-title: gatheringState
slug: Web/API/RTCIceTransport/gatheringState
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`gatheringState`** der Schnittstelle {{domxref("RTCIceTransport")}} gibt einen String zurück, der den aktuellen Sammelstatus des ICE-Agenten für diesen Transport angibt: `"new"`, `"gathering"` oder `"complete"`.

Sie können erkennen, wann sich der Wert dieser Eigenschaft ändert, indem Sie auf ein Ereignis vom Typ {{domxref("RTCIceTransport/gatheringstatechange_event", "gatheringstatechange")}} achten.

Beachten Sie, dass **`gatheringState`** den Sammelstatus nur dieses Transports darstellt, während {{domxref("RTCPeerConnection.iceGatheringState")}} den gesamten Sammelstatus der Verbindung repräsentiert, einschließlich aller {{domxref("RTCIceTransport")}}, die von jedem {{domxref("RTCRtpSender")}} und jedem {{domxref("RTCRtpReceiver")}} in der gesamten Verbindung verwendet werden.

## Wert

Ein String, der den aktuellen Status des Kandidatensammelprozesses des ICE-Agenten angibt:

- `"new"`
  - : Die {{domxref("RTCIceTransport")}} ist neu erstellt und hat noch nicht begonnen, ICE-Kandidaten zu sammeln.
- `"gathering"`
  - : Der Transport befindet sich im Prozess des Sammelns von Kandidaten.
- `"complete"`
  - : Der Transport hat das Sammeln von ICE-Kandidaten abgeschlossen und den End-of-Candidates-Indikator an das Remote-Gerät gesendet. Der Transport wird keine weiteren Kandidaten sammeln, es sei denn, ein [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) tritt auf, bei dem der Sammelprozess von vorne beginnt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
