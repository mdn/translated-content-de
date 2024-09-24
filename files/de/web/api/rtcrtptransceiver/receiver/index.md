---
title: "RTCRtpTransceiver: receiver-Eigenschaft"
short-title: receiver
slug: Web/API/RTCRtpTransceiver/receiver
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`receiver`**-Eigenschaft der WebRTC-{{domxref("RTCRtpTransceiver")}}-Schnittstelle gibt den {{domxref("RTCRtpReceiver")}} an, der für den Empfang und die Dekodierung eingehender Mediendaten für den Stream des Transceivers verantwortlich ist.

## Wert

Ein {{domxref("RTCRtpReceiver")}}-Objekt, das für den Empfang und die Dekodierung eingehender Mediendaten verantwortlich ist, deren Medien-ID mit dem aktuellen Wert von {{domxref("RTCRtpTransceiver.mid", "mid")}} identisch ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
- {{domxref("RTCRtpReceiver")}}
