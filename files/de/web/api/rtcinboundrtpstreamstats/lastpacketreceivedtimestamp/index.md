---
title: "RTCInboundRtpStreamStats: Eigenschaft lastPacketReceivedTimestamp"
short-title: lastPacketReceivedTimestamp
slug: Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`lastPacketReceivedTimestamp`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Zeit an, zu der das zuletzt empfangene Paket von dieser Quelle angekommen ist.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das zuletzt empfangene Paket auf diesem RTP-Strom angekommen ist.

> [!NOTE]
> Dieser Wert unterscheidet sich vom [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp),
> welcher die Zeit angibt, zu der das Statistikobjekt erstellt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
