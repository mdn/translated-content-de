---
title: "RTCTrackEvent: receiver-Eigenschaft"
short-title: receiver
slug: Web/API/RTCTrackEvent/receiver
l10n:
  sourceCommit: 7782020d48b20a95fab6767f574cddda8ff59b86
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`receiver`**-Eigenschaft der [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)-Schnittstelle gibt den [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) an, der verwendet wird, um Daten mit Medien für den [`track`](/de/docs/Web/API/RTCTrackEvent/track) zu empfangen, auf den sich das Ereignis bezieht.

## Wert

Der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), der den `receiver` mit einem Sender und anderen Eigenschaften kombiniert, um einen einzelnen bidirektionalen {{Glossary("RTP", "SRTP")}}-Stream für die Verwendung durch den [`track`](/de/docs/Web/API/RTCTrackEvent/track) zu etablieren, der mit dem `RTCTrackEvent` verbunden ist.

> [!NOTE]
> Der [`transceiver`](/de/docs/Web/API/RTCTrackEvent/transceiver) enthält seine eigene [`receiver`](/de/docs/Web/API/RTCRtpTransceiver/receiver)-Eigenschaft, welche immer der gleiche [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) wie dieser sein wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
