---
title: "RTCOutboundRtpStreamStats: nackCount-Eigenschaft"
short-title: nackCount
slug: Web/API/RTCOutboundRtpStreamStats/nackCount
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`nackCount`**-Eigenschaft des
{{domxref("RTCOutboundRtpStreamStats")}}-Wörterbuchs ist ein numerischer Wert, der die
Anzahl der Male angibt, dass der durch dieses Objekt beschriebene {{domxref("RTCRtpSender")}}
ein **NACK**-Paket vom entfernten Empfänger erhalten hat.

Ein NACK (Negative
ACKnowledgement, auch "Generic NACK" genannt) Paket wird vom
{{domxref("RTCRtpReceiver")}} verwendet, um den Sender darüber zu informieren, dass ein oder mehrere {{Glossary("RTP")}}-Pakete, die er gesendet hat, beim Transport verloren gegangen sind.

## Wert

Ein ganzzahliger Wert, der angibt, wie oft der Sender ein NACK-Paket vom
Empfänger erhalten hat, was den Verlust von einem oder mehreren Paketen anzeigt.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
