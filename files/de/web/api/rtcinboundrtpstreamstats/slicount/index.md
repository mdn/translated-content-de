---
title: "RTCInboundRtpStreamStats: sliCount-Eigenschaft"
short-title: sliCount
slug: Web/API/RTCInboundRtpStreamStats/sliCount
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`sliCount`**-Eigenschaft des {{domxref("RTCInboundRtpStreamStats")}}-Wörterbuchs gibt an, wie viele **Slice Loss Indication** (**SLI**)-Pakete der {{domxref("RTCRtpReceiver")}}, für den dieses Objekt Statistiken liefert, an den entfernten {{domxref("RTCRtpSender")}} gesendet hat.

Ein SLI-Paket wird von einem Decoder verwendet, um den Encoder darüber zu informieren, dass es Beschädigungen von einem oder mehreren aufeinanderfolgenden Makroblöcken (in Abtastreihenfolge) in den empfangenen Medien erkannt hat.

Im Allgemeinen ist von Interesse, dass je höher diese Zahl ist, desto mehr werden die Daten des Streams zwischen Sender und Empfänger beschädigt, was erneutes Senden oder das Verwerfen von Frames erfordert.

## Wert

Eine nicht signierte Ganzzahl, die die Anzahl der SLI-Pakete angibt, die dieser Empfänger aufgrund von verlorenen Makroblockserien an den entfernten Sender gesendet hat. Ein hoher Wert von `sliCount` kann ein Hinweis auf ein unzuverlässiges Netzwerk sein.

Dies ist ein sehr technischer Teil der Funktionsweise von Videocodecs. Für Einzelheiten siehe {{RFC(4585, "6.3.2")}}.

> [!NOTE]
> Dieser Wert ist nur für Videomedien vorhanden.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.2")}}: Definition von "Slice Loss Indication" im Dokument _Extended RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback (RTP/AVPF)_.
