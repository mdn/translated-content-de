---
title: "RTCInboundRtpStreamStats: sliCount Eigenschaft"
short-title: sliCount
slug: Web/API/RTCInboundRtpStreamStats/sliCount
l10n:
  sourceCommit: 7c03abf6c6abaf0013f6606cae9cb97717415cce
---

{{APIRef("WebRTC")}}

Die **`sliCount`**-Eigenschaft des
[`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt an, wie viele **Slice Loss Indication** (**SLI**)-Pakete der
[`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), für den dieses Objekt Statistiken bereitstellt, an den entfernten [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet hat.

Ein SLI-Paket wird von einem Decoder verwendet, um dem Encoder mitzuteilen, dass eine Beschädigung von einem oder mehreren aufeinanderfolgenden Makroblöcken (in Scan-Reihenfolge) im empfangenen Medium festgestellt wurde.

Im Allgemeinen ist von Interesse, dass je höher diese Zahl ist, desto mehr werden die Datenströme zwischen Sender und Empfänger beschädigt, was erneutes Senden oder das Verwerfen von Frames erforderlich macht.

## Wert

Ein vorzeichenloser Integer, der die Anzahl der SLI-Pakete angibt, die dieser Empfänger aufgrund verlorener Makroblockserien an den entfernten Sender gesendet hat. Ein hoher Wert von `sliCount` kann auf ein unzuverlässiges Netzwerk hinweisen.

Dies ist ein sehr technischer Teil der Funktionsweise von Videocodecs. Für Details siehe {{RFC(4585, "6.3.2")}}.

> [!NOTE]
> Dieser Wert ist nur für Videomedien vorhanden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.2")}}: Definition von "Slice Loss Indication" im Dokument
  _Extended RTP Profile for Real-time Transport Control Protocol (RTCP)-Based Feedback (RTP/AVPF)_.
