---
title: "RTCTrackEvent: transceiver-Eigenschaft"
short-title: transceiver
slug: Web/API/RTCTrackEvent/transceiver
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die WebRTC API-Schnittstelle [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)'s
schreibgeschützte **`transceiver`** Eigenschaft gibt den
[`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) an, der mit dem Event's
[`track`](/de/docs/Web/API/RTCTrackEvent/track) verbunden ist.

Der Transceiver koppelt den [`receiver`](/de/docs/Web/API/RTCTrackEvent/receiver) der Spur mit einem [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender).

## Wert

Der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver), der den `receiver` mit einem
Sender und anderen Eigenschaften kombiniert, um einen einzelnen bidirektionalen [SRTP](/de/docs/Glossary/RTP)
Stream für die Verwendung durch die [`track`](/de/docs/Web/API/RTCTrackEvent/track), die mit dem
`RTCTrackEvent` verbunden ist, zu erstellen.

> [!NOTE]
> Der [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), auf den durch die
> Eigenschaft `receiver` dieses `RTCRtpReceiver`'s [`receiver`](/de/docs/Web/API/RTCRtpTransceiver/receiver)
> verwiesen wird, ist immer derselbe wie die [`RTCTrackEvent`](/de/docs/Web/API/RTCTrackEvent)'s
> [`receiver`](/de/docs/Web/API/RTCTrackEvent/receiver) Eigenschaft.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
