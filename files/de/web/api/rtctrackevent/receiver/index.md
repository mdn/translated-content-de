---
title: "RTCTrackEvent: receiver-Eigenschaft"
short-title: receiver
slug: Web/API/RTCTrackEvent/receiver
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`receiver`**-Eigenschaft des [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)-Interfaces gibt den [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) an, der verwendet wird, um Daten zu empfangen, die Medien für das [`track`](/de/docs/Web/API/RTCTrackEvent/track) enthalten, auf das sich das Ereignis bezieht.

## Wert

Der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), der den `receiver` mit einem Sender und anderen Eigenschaften verbindet, die einen einzelnen bidirektionalen [SRTP](/de/docs/Glossary/RTP)-Stream für die Verwendung durch das mit dem `RTCTrackEvent` assoziierte [`track`](/de/docs/Web/API/RTCTrackEvent/track) etablieren.

> [!NOTE]
> Der [`transceiver`](/de/docs/Web/API/RTCTrackEvent/transceiver) enthält seine eigene [`receiver`](/de/docs/Web/API/RTCRtpTransceiver/receiver)-Eigenschaft, die immer derselbe [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) wie dieser hier sein wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
