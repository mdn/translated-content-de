---
title: "RTCTrackEvent: receiver-Eigenschaft"
short-title: receiver
slug: Web/API/RTCTrackEvent/receiver
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`receiver`**-Eigenschaft
des {{domxref("RTCTrackEvent")}}-Interfaces zeigt den
{{domxref("RTCRtpReceiver")}}, der verwendet wird, um Daten mit Medien für den
{{domxref("RTCTrackEvent.track", "track")}} zu empfangen, auf den sich das Ereignis bezieht.

## Wert

Der {{domxref("RTCRtpTransceiver")}}, der den `receiver` mit einem
Sender und anderen Eigenschaften koppelt, die einen einzelnen bidirektionalen {{Glossary("RTP", "SRTP")}}
Stream für den mit dem `RTCTrackEvent` assoziierten
{{domxref("RTCTrackEvent.track", "track")}} einrichten.

> [!NOTE]
> Der {{domxref("RTCTrackEvent.transceiver", "transceiver")}}
> beinhaltet seine eigene {{domxref("RTCRtpTransceiver.receiver", "receiver")}}-Eigenschaft, die
> immer derselbe {{domxref("RTCRtpReceiver")}} wie dieser sein wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
