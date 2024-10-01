---
title: "RTCTrackEvent: Transceiver-Eigenschaft"
short-title: transceiver
slug: Web/API/RTCTrackEvent/transceiver
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die WebRTC API-Schnittstelle [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent) hat die schreibgeschützte **`transceiver`**-Eigenschaft, die den [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) anzeigt, der mit dem [`track`](/de/docs/Web/API/RTCTrackEvent/track) des Ereignisses verbunden ist.

Der Transceiver koppelt den [`receiver`](/de/docs/Web/API/RTCTrackEvent/receiver) des Tracks mit einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender).

## Wert

Der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), der den `receiver` mit einem Sender und anderen Eigenschaften koppelt, die einen einzelnen bidirektionalen {{Glossary("RTP", "SRTP")}}-Stream zur Nutzung durch den [`track`](/de/docs/Web/API/RTCTrackEvent/track) zu verwenden, der mit dem `RTCTrackEvent` verbunden ist.

> [!NOTE]
> Der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), auf den durch die [`receiver`](/de/docs/Web/API/RTCRtpTransceiver/receiver) Eigenschaft dieses `RTCRtpReceiver`s verwiesen wird, wird immer derselbe sein wie die [`receiver`](/de/docs/Web/API/RTCTrackEvent/receiver) Eigenschaft des [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
