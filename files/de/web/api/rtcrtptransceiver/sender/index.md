---
title: "RTCRtpTransceiver: sender-Eigenschaft"
short-title: sender
slug: Web/API/RTCRtpTransceiver/sender
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`sender`**-Eigenschaft der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Schnittstelle von WebRTC gibt den [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) an, der für das Kodieren und Senden von ausgehenden Mediendaten des Streams des Transceivers verantwortlich ist.

## Wert

Ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekt, das verwendet wird, um Medien zu kodieren und zu senden, deren Medien-ID mit dem aktuellen Wert von [`mid`](/de/docs/Web/API/RTCRtpTransceiver/mid) übereinstimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
