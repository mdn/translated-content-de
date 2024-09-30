---
title: "RTCOutboundRtpStreamStats: sliCount-Eigenschaft"
short-title: sliCount
slug: Web/API/RTCOutboundRtpStreamStats/sliCount
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`sliCount`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs gibt an, wie viele **Slice Loss Indication** (**SLI**)-Pakete der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) vom entfernten [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) für den RTP-Stream erhalten hat, der durch dieses Objekt beschrieben wird.

Ein SLI-Paket wird von einem Decoder verwendet, um dem Encoder (dem Sender) mitzuteilen, dass es eine Beschädigung von einem oder mehreren aufeinanderfolgenden Makroblöcken, in Scan-Reihenfolge, im empfangenen Medium festgestellt hat. Im Allgemeinen ist von Interesse, dass je höher diese Zahl ist, desto mehr werden die Streamdaten zwischen dem Sender und dem Empfänger beschädigt, was den Empfänger dazu veranlasst, Übertragungen erneut anzufordern oder Frames vollständig zu verwerfen.

## Wert

Eine positive ganze Zahl, die die Anzahl der SLI-Pakete angibt, die der Sender vom Empfänger aufgrund verlorener Makroblock-Runs erhalten hat. Ein hoher Wert von `sliCount` kann ein Hinweis auf ein unzuverlässiges Netzwerk sein.

Dies ist ein sehr technischer Teil davon, wie Videocodecs funktionieren. Für Details siehe {{RFC(4585, "6.3.2")}}.

> [!NOTE]
> Dieser Wert ist nur für Videomedien vorhanden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.2")}}: Definition von "Slice Loss Indication" im Dokument _Extended RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback (RTP/AVPF)_.
