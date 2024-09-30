---
title: "RTCRtpTransceiver: receiver-Eigenschaft"
short-title: receiver
slug: Web/API/RTCRtpTransceiver/receiver
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`receiver`**-Eigenschaft
der WebRTC-Schnittstelle [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver) gibt den
[`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) an, der für den Empfang und die Dekodierung eingehender Mediadaten
für den Stream des Transceivers verantwortlich ist.

## Wert

Ein [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)-Objekt, das für den Empfang und die Dekodierung
eingehender Mediadaten verantwortlich ist, deren Medien-ID identisch mit dem aktuellen Wert von
[`mid`](/de/docs/Web/API/RTCRtpTransceiver/mid) ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver)
