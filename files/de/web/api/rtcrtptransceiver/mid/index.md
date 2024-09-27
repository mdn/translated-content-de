---
title: "RTCRtpTransceiver: mid-Eigenschaft"
short-title: mid
slug: Web/API/RTCRtpTransceiver/mid
l10n:
  sourceCommit: f2f9346c0c0e9f6676f2df9f1850933e274401de
---

{{APIRef("WebRTC")}}

Die schreibgeschützte Eigenschaft **`mid`** des [`RTCRtpTransceiver`](/de/docs/Web/API/RTCRtpTransceiver)-Interfaces gibt die vereinbarte Medien-ID (`mid`) an, die die lokalen und entfernten Peers zur eindeutigen Identifizierung der Verknüpfung von Sender und Empfänger des Streams ausgehandelt haben.

## Wert

Ein String, der die Verknüpfung von Quelle und Ziel des Streams des Transceivers eindeutig identifiziert. Sein Wert stammt aus der Medien-ID der SDP m-line. Dieser Wert ist `null`, wenn die Verhandlung nicht abgeschlossen ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Einführung in das Echtzeit-Transportprotokoll (RTP)](/de/docs/Web/API/WebRTC_API/Intro_to_RTP)
