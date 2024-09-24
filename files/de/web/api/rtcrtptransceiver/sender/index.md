---
title: "RTCRtpTransceiver: sender-Eigenschaft"
short-title: sender
slug: Web/API/RTCRtpTransceiver/sender
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`sender`**-Eigenschaft der WebRTC-Schnittstelle {{domxref("RTCRtpTransceiver")}} gibt den {{domxref("RTCRtpSender")}} an, der für das Kodieren und Senden ausgehender Mediendaten für den Stream des Transceivers verantwortlich ist.

## Wert

Ein {{domxref("RTCRtpSender")}}-Objekt, das verwendet wird, um Medien zu kodieren und zu senden, deren Medien-ID mit dem aktuellen Wert von {{domxref("RTCRtpTransceiver.mid", "mid")}} übereinstimmt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("RTCRtpSender")}}
