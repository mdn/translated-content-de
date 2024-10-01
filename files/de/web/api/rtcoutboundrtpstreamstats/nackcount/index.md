---
title: "RTCOutboundRtpStreamStats: nackCount-Eigenschaft"
short-title: nackCount
slug: Web/API/RTCOutboundRtpStreamStats/nackCount
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`nackCount`**-Eigenschaft des
[`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein numerischer Wert, der angibt, wie oft der [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender), der durch dieses Objekt beschrieben wird, ein **NACK**-Paket vom entfernten Empfänger erhalten hat.

Ein NACK (Negative
ACKnowledgement, auch "Generic NACK" genannt) Paket wird vom [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) verwendet, um den Sender darüber zu informieren, dass ein oder mehrere {{Glossary("RTP", "RTP")}}-Pakete, die er gesendet hat, während des Transports verloren gegangen sind.

## Wert

Ein Ganzzahlwert, der angibt, wie oft der Sender ein NACK-Paket vom Empfänger erhalten hat, was den Verlust von einem oder mehreren Paketen anzeigt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
