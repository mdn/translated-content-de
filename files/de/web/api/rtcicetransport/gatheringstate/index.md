---
title: "RTCIceTransport: gatheringState-Eigenschaft"
short-title: gatheringState
slug: Web/API/RTCIceTransport/gatheringState
l10n:
  sourceCommit: 8f3daa06271fa91d351d40ee59c2f07377025108
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`gatheringState`**-Eigenschaft der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport)-Schnittstelle gibt einen String zurück, der den aktuellen Sammelstatus des ICE-Agenten für diesen Transport angibt: `"new"`, `"gathering"` oder `"complete"`.

Sie können erkennen, wann sich der Wert dieser Eigenschaft ändert, indem Sie auf ein Ereignis des Typs [`gatheringstatechange`](/de/docs/Web/API/RTCIceTransport/gatheringstatechange_event) achten.

Beachten Sie, dass **`gatheringState`** nur den Sammelstatus dieses Transports darstellt, während [`RTCPeerConnection.iceGatheringState`](/de/docs/Web/API/RTCPeerConnection/iceGatheringState) den gesamten Sammelstatus der gesamten Verbindung darstellt, einschließlich jedes [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport), das von jedem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) und jedem [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) in der gesamten Verbindung verwendet wird.

## Wert

Ein String, der den aktuellen Status des Kandidaten-Sammelprozesses des ICE-Agenten angibt:

- `"new"`
  - : Der [`RTCIceTransport`](/de/docs/Web/API/RTCIceTransport) ist neu erstellt und hat noch nicht begonnen, ICE-Kandidaten zu sammeln.
- `"gathering"`
  - : Der Transport befindet sich im Prozess des Sammelns von Kandidaten.
- `"complete"`
  - : Der Transport hat das Sammeln von ICE-Kandidaten abgeschlossen und das End-der-Kandidaten-Indikator an das entfernte Gerät gesendet. Der Transport wird keine weiteren Kandidaten sammeln, es sei denn, es tritt ein [ICE-Neustart](/de/docs/Web/API/WebRTC_API/Session_lifetime#ice_restart) auf, woraufhin der Sammelprozess von vorne beginnt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
