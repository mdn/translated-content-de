---
title: "RTCInboundRtpStreamStats: nackCount-Eigenschaft"
short-title: nackCount
slug: Web/API/RTCInboundRtpStreamStats/nackCount
l10n:
  sourceCommit: 73e4dcc6b6ab8840537340bc80df947886bc5ef5
---

{{APIRef("WebRTC")}}

Die **`nackCount`**-Eigenschaft des
[`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Dictionaries ist ein numerischer Wert, der angibt, wie oft der Empfänger ein **NACK**-Paket an den Sender gesendet hat.

Ein NACK (Negative ACKnowledgement, auch "Generic NACK" genannt) Paket teilt dem Sender mit, dass eines oder mehrere der {{Glossary("RTP", "RTP")}}-Pakete, die es gesendet hat, während des Transports verloren gegangen sind.

## Wert

Ein ganzzahliger Wert, der angibt, wie oft der Empfänger ein NACK-Paket an den Sender gesendet hat, nachdem festgestellt wurde, dass ein oder mehrere Pakete während des Transports verloren gegangen sind.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
