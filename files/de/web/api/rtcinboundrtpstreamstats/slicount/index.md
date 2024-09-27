---
title: "RTCInboundRtpStreamStats: sliCount-Eigenschaft"
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
dem Encoder mitzuteilen, dass es die Beschädigung eines oder mehrerer aufeinanderfolgender Makroblöcke
(in Scan-Reihenfolge) in den empfangenen Medien erkannt hat.

Im Allgemeinen ist von Interesse, dass je höher dieser Wert ist, desto stärker werden die
Stromdaten zwischen Sender und Empfänger beschädigt, was das erneute Senden
oder das Verwerfen von Frames erforderlich macht.

## Wert

Ein vorzeichenloser Integer, der die Anzahl der SLI-Pakete angibt, die dieser Empfänger an den
entfernten Sender aufgrund verlorener Läufe von Makroblöcken gesendet hat. Ein hoher Wert von `sliCount` könnte
ein Hinweis auf ein unzuverlässiges Netzwerk sein.

Dies ist ein sehr technischer Teil, wie Videocodecs funktionieren. Für Details siehe {{RFC(4585, "6.3.2")}}.

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
