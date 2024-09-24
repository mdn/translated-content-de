---
title: "RTCTrackEvent: transceiver-Eigenschaft"
short-title: transceiver
slug: Web/API/RTCTrackEvent/transceiver
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`transceiver`**-Eigenschaft der WebRTC-API-Schnittstelle {{domxref("RTCTrackEvent")}} gibt den mit dem Ereignis verknüpften {{domxref("RTCRtpTransceiver")}} an, der mit dem {{domxref("RTCTrackEvent.track", "Track")}} verbunden ist.

Der Transceiver paart den {{domxref("RTCTrackEvent.receiver", "Empfänger")}} des Tracks mit einem {{domxref("RTCRtpSender")}}.

## Wert

Der {{domxref("RTCRtpTransceiver")}}, der den `receiver` mit einem Sender und anderen Eigenschaften paart, welche einen einzelnen bidirektionalen {{Glossary("RTP", "SRTP")}}-Stream für die Nutzung durch den mit dem `RTCTrackEvent` verbundenen {{domxref("RTCTrackEvent.track", "Track")}} etabliert.

> [!NOTE]
> Der {{domxref("RTCRtpReceiver")}}, auf den dieser verwiesen wird, ist immer derselbe wie die {{domxref("RTCTrackEvent")}}-Eigenschaft des {{domxref("RTCTrackEvent.receiver", "Empfängers")}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
