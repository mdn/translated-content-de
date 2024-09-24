---
title: "RTCRtpStreamStats: nackCount-Eigenschaft"
short-title: nackCount
slug: Web/API/RTCRtpStreamStats/nackCount
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`nackCount`**-Eigenschaft des
{{domxref("RTCRtpStreamStats")}}-Wörterbuchs ist ein numerischer Wert, der angibt, wie oft der Empfänger ein **NACK-Paket** an den Sender gesendet hat.

Ein NACK
(Negative ACKnowledgement, auch "Generic NACK" genannt) Paket teilt dem Sender mit, dass eines oder mehrere der {{Glossary("RTP")}}-Pakete, die er gesendet hat, während des Transports verloren gegangen sind.

## Wert

Ein Ganzzahlwert, der angibt, wie oft der Empfänger ein NACK-Paket an den
Sender gesendet hat, nachdem festgestellt wurde, dass eines oder mehrere Pakete während des Transports verloren gegangen sind.

> [!NOTE]
> Dieser Wert ist nur auf der Empfängerseite verfügbar.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
