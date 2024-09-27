---
title: "RTCInboundRtpStreamStats: nackCount-Eigenschaft"
short-title: nackCount
slug: Web/API/RTCInboundRtpStreamStats/nackCount
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`nackCount`**-Eigenschaft des
[`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs ist ein numerischer Wert, der die Anzahl der Male angibt, die der Empfänger ein **NACK**-Paket an den Sender gesendet hat.

Ein NACK (Negative ACKnowledgement, auch "Generic NACK" genannt) Paket informiert den Sender,
dass ein oder mehrere der von ihm gesendeten [RTP](/de/docs/Glossary/RTP)-Pakete während des Transports verloren gegangen sind.

## Wert

Ein ganzzahliger Wert, der angibt, wie oft der Empfänger ein NACK-Paket an den
Sender gesendet hat, nachdem festgestellt wurde, dass ein oder mehrere Pakete während des Transports verloren gegangen sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
