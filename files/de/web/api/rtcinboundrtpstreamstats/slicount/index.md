---
title: "RTCInboundRtpStreamStats: sliCount Eigenschaft"
short-title: sliCount
slug: Web/API/RTCInboundRtpStreamStats/sliCount
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`sliCount`**-Eigenschaft des
[`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt an, wie viele **Slice
Loss Indication** (**SLI**)-Pakete der
[`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver), für den dieses Objekt Statistiken bereitstellt, an den
entfernten [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) gesendet hat.

Ein SLI-Paket wird von einem Decoder verwendet, um
dem Encoder mitzuteilen, dass es die Beschädigung von einem oder mehreren aufeinanderfolgenden Makroblöcken
(in Scan-Reihenfolge) im empfangenen Medium erkannt hat.

Im Allgemeinen ist von Interesse, dass je höher diese Zahl ist, desto mehr werden die
Stromdaten zwischen Sender und Empfänger beschädigt, was erneutes Senden
oder das Verwerfen von Frames erfordert.

## Wert

Ein vorzeichenloser Integer, der die Anzahl der SLI-Pakete angibt, die dieser Empfänger an den
entfernten Sender aufgrund verlorener Makroblock-Läufe gesendet hat. Ein hoher `sliCount`-Wert kann
ein Hinweis auf ein unzuverlässiges Netzwerk sein.

Dies ist ein sehr technischer Teil der Funktionsweise von Videocodecs. Für Details siehe {{RFC(4585, "6.3.2")}}.

> [!NOTE]
> Dieser Wert ist nur für Videomedien vorhanden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{RFC(4585, "", "6.3.2")}}: Definition von "Slice Loss Indication" im Dokument
  _Extended RTP Profile for Real-time Transport Control Protocol (RTCP)-Based
  Feedback (RTP/AVPF)_.
