---
title: "RTCInboundRtpStreamStats: Eigenschaft lastPacketReceivedTimestamp"
short-title: lastPacketReceivedTimestamp
slug: Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`lastPacketReceivedTimestamp`**-Eigenschaft des {{domxref("RTCInboundRtpStreamStats")}}-Wörterbuchs gibt die Zeit an, zu der das zuletzt empfangene Paket von dieser Quelle eingetroffen ist.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}, der die Zeit angibt, zu der das zuletzt empfangene Paket auf diesem RTP-Stream eingetroffen ist.

> [!NOTE]
> Dieser Wert unterscheidet sich vom {{domxref("RTCInboundRtpStreamStats.timestamp", "timestamp")}},
> der die Zeit darstellt, zu der das Statistikobjekt erstellt wurde.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
