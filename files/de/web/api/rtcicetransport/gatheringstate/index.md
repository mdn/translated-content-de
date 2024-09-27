---
title: "RTCIceTransport: gatheringState-Eigenschaft"
short-title: gatheringState
slug: Web/API/RTCIceTransport/gatheringState
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`gatheringState`** des [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Interfaces gibt einen String zurück, der den aktuellen Sammlungsstatus des ICE-Agenten für diesen Transport angibt: `"new"`, `"gathering"` oder `"complete"`.

Sie können erkennen, wann sich der Wert dieser Eigenschaft ändert, indem Sie auf ein Ereignis vom Typ [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event) achten.

Beachten Sie, dass **`gatheringState`** nur den Sammlungsstatus dieses Transports darstellt, während [`RTCPeerConnection.iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) den allgemeinen Sammlungsstatus der gesamten Verbindung darstellt, einschließlich aller [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport), die von jedem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und jedem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) in der gesamten Verbindung verwendet werden.

## Wert

Ein String, der den aktuellen Status des Kandidatensammlungsprozesses des ICE-Agenten angibt:

- `"new"`
  - : Der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) ist neu erstellt und hat noch nicht begonnen, ICE-Kandidaten zu sammeln.
- `"gathering"`
  - : Der Transport ist dabei, Kandidaten zu sammeln.
- `"complete"`
  - : Der Transport hat das Sammeln von ICE-Kandidaten abgeschlossen und hat den End-of-Candidates-Indikator an das entfernte Gerät gesendet. Der Transport wird keine weiteren Kandidaten sammeln, es sei denn, ein [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) tritt auf, woraufhin der Sammlungsprozess von vorne beginnt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
