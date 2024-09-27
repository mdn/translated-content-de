---
title: "RTCOutboundRtpStreamStats: sliCount-Eigenschaft"
short-title: sliCount
slug: Web/API/RTCOutboundRtpStreamStats/sliCount
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`sliCount`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Verzeichnisses gibt an, wie viele **Slice Loss Indication** (**SLI**)-Pakete der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) vom entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) für den durch dieses Objekt beschriebenen RTP-Stream empfangen hat.

Ein SLI-Paket wird von einem Decoder verwendet, um dem Encoder (dem Sender) mitzuteilen, dass er eine Korruption eines oder mehrerer aufeinanderfolgender Makroblöcke, in Scan-Reihenfolge, in den empfangenen Medien erkannt hat. Im Allgemeinen ist es von Interesse, dass je höher diese Zahl ist, desto mehr werden die Stream-Daten zwischen dem Sender und dem Empfänger beschädigt, was dazu führt, dass der Empfänger erneute Übertragungen anfordert oder Frames vollständig verwirft.

## Wert

Eine vorzeichenlose ganze Zahl, die die Anzahl der SLI-Pakete angibt, die der Sender vom Empfänger aufgrund verlorener Läufe von Makroblöcken erhalten hat. Ein hoher Wert von `sliCount` kann auf ein unzuverlässiges Netzwerk hinweisen.

Dies ist ein sehr technischer Teil der Funktionsweise von Videocodecs. Für Details siehe {{RFC(4585, "6.3.2")}}.

> [!NOTE]
> Dieser Wert ist nur für Videomedien vorhanden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.2")}}: Definition von "Slice Loss Indication" im Dokument _Extended RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback (RTP/AVPF)_.
