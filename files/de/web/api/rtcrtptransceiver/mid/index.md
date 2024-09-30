---
title: "RTCRtpTransceiver: mid-Eigenschaft"
short-title: mid
slug: Web/API/RTCRtpTransceiver/mid
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die schreibgeschützte [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Schnittstelle hat die **`mid`**-Eigenschaft, die die ausgehandelte Medien-ID (`mid`) angibt, auf die sich die lokalen und entfernten Peers geeinigt haben, um das Sende- und Empfangspaar des Streams eindeutig zu identifizieren.

## Wert

Ein String, der das Paar von Quelle und Ziel des Streams des Transceivers eindeutig identifiziert. Sein Wert wird aus der Medien-ID der SDP m-line übernommen. Dieser Wert ist `null`, wenn die Verhandlung noch nicht abgeschlossen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das Echtzeit-Transportprotokoll (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
