---
title: "RTCRtpTransceiver: mid-Eigenschaft"
short-title: mid
slug: Web/API/RTCRtpTransceiver/mid
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die schreibgeschützte **`mid`**-Eigenschaft der {{domxref("RTCRtpTransceiver")}}-Schnittstelle gibt die ausgehandelte Medien-ID (`mid`) an, auf die sich die lokalen und entfernten Peers geeinigt haben, um die Zuordnung von Sender und Empfänger des Streams eindeutig zu identifizieren.

## Wert

Ein String, der die Zuordnung von Quelle und Ziel des Transceiver-Streams eindeutig identifiziert. Sein Wert wird von der Medien-ID der SDP m-line übernommen. Dieser Wert ist `null`, wenn die Verhandlung noch nicht abgeschlossen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das Real-time Transport Protocol (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
