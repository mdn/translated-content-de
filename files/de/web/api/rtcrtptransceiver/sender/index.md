---
title: "RTCRtpTransceiver: sender-Eigenschaft"
short-title: sender
slug: Web/API/RTCRtpTransceiver/sender
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`sender`**-Eigenschaft
der [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Schnittstelle von WebRTC zeigt den
[`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) an, der für das Kodieren und Senden ausgehender Mediendaten
für den Stream des Transceivers verantwortlich ist.

## Wert

Ein [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)-Objekt, das zum Kodieren und Senden von Medien verwendet wird, deren Medien-ID
mit dem aktuellen Wert von [`mid`](/de/docs/Web/API/RTCRtpTransceiver/mid) übereinstimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das Echtzeit-Transportprotokoll (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender)
