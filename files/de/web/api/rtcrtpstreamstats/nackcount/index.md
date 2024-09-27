---
title: "RTCRtpStreamStats: nackCount-Eigenschaft"
short-title: nackCount
slug: Web/API/RTCRtpStreamStats/nackCount
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`nackCount`**-Eigenschaft des
[`RTCRtpStreamStats`](/de/docs/Web/API/RTCRtpStreamStats)-Wörterbuchs ist ein numerischer Wert, der angibt, wie oft der Empfänger ein **NACK-Paket** an den Sender gesendet hat.

Ein NACK
(Negative ACKnowledgement, auch "Generic NACK" genannt) Paket teilt dem Absender mit, dass eines oder mehrere der [RTP](/de/docs/Glossary/RTP)-Pakete während des Transports verloren gingen.

## Wert

Ein ganzzahliger Wert, der angibt, wie oft der Empfänger ein NACK-Paket an den
Absender gesendet hat, nachdem er festgestellt hat, dass während des Transports eines oder mehrere Pakete verloren gingen.

> [!NOTE]
> Dieser Wert ist nur beim Empfänger verfügbar.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
