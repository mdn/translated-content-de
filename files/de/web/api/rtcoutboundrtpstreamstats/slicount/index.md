---
title: "RTCOutboundRtpStreamStats: sliCount-Eigenschaft"
short-title: sliCount
slug: Web/API/RTCOutboundRtpStreamStats/sliCount
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`sliCount`**-Eigenschaft des {{domxref("RTCOutboundRtpStreamStats")}}-Wörterbuchs gibt an, wie viele **Slice Loss Indication** (**SLI**)-Pakete der {{domxref("RTCRtpSender")}} vom entfernten {{domxref("RTCRtpReceiver")}} für den durch dieses Objekt beschriebenen RTP-Stream erhalten hat.

Ein SLI-Paket wird von einem Decoder verwendet, um dem Encoder (dem Sender) mitzuteilen, dass er eine Beschädigung eines oder mehrerer aufeinanderfolgender Makroblöcke in Scan-Reihenfolge im empfangenen Medium festgestellt hat. Im Allgemeinen ist von Interesse, dass je höher diese Zahl ist, desto mehr Daten des Streams zwischen Sender und Empfänger beschädigt werden, was dazu führt, dass der Empfänger erneute Übertragungen anfordert oder Frames vollständig verwirft.

## Wert

Eine positive ganze Zahl, die die Anzahl der SLI-Pakete angibt, die der Sender vom Empfänger aufgrund verlorener Makroblock-Reihen erhalten hat. Ein hoher `sliCount`-Wert kann ein Anzeichen für ein unzuverlässiges Netzwerk sein.

Dies ist ein sehr technischer Teil, wie Videocodecs funktionieren. Für Details siehe {{RFC(4585, "6.3.2")}}.

> [!NOTE]
> Dieser Wert ist nur für Videomedien vorhanden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.2")}}: Definition von "Slice Loss Indication" im Dokument _Extended RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback (RTP/AVPF)_.
