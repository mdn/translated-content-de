---
title: "RTCOutboundRtpStreamStats: nackCount-Eigenschaft"
short-title: nackCount
slug: Web/API/RTCOutboundRtpStreamStats/nackCount
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`nackCount`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein numerischer Wert, der angibt, wie oft der durch dieses Objekt beschriebene [`RTCRtpSender`](/de/docs/Web/API/RTCRtpSender) ein **NACK**-Paket vom entfernten Empfänger erhalten hat.

Ein NACK (Negative ACKnowledgement, auch "Generic NACK" genannt) Paket wird vom [`RTCRtpReceiver`](/de/docs/Web/API/RTCRtpReceiver) verwendet, um den Sender darüber zu informieren, dass eines oder mehrere [RTP](/de/docs/Glossary/RTP)-Pakete, die es gesendet hat, beim Transport verloren gegangen sind.

## Wert

Ein ganzzahliger Wert, der angibt, wie oft der Sender ein NACK-Paket vom Empfänger erhalten hat, was auf den Verlust eines oder mehrerer Pakete hinweist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
