---
title: "RTCInboundRtpStreamStats: lastPacketReceivedTimestamp-Eigenschaft"
short-title: lastPacketReceivedTimestamp
slug: Web/API/RTCInboundRtpStreamStats/lastPacketReceivedTimestamp
l10n:
  sourceCommit: 4f35a8237ee0842beb9cfef3354e05464ad7ce1a
---

{{APIRef("WebRTC")}}

Die **`lastPacketReceivedTimestamp`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt den Zeitpunkt an, zu dem das zuletzt empfangene Paket von dieser Quelle eingetroffen ist.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem das zuletzt empfangene Paket in diesem RTP-Strom eingetroffen ist.

> [!NOTE]
> Dieser Wert unterscheidet sich vom [`timestamp`](/de/docs/Web/API/RTCInboundRtpStreamStats/timestamp),
> der den Zeitpunkt repräsentiert, an dem das Statistikobjekt erstellt wurde.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
