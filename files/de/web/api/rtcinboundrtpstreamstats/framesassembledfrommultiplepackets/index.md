---
title: "RTCInboundRtpStreamStats: framesAssembledFromMultiplePackets Eigenschaft"
short-title: framesAssembledFromMultiplePackets
slug: Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets
l10n:
  sourceCommit: 5f8f306587fbe25beac0d0e9c9fbda366e372f14
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`framesAssembledFromMultiplePackets`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtzahl der korrekt decodierten Frames für diesen RTP-Stream an, die aus mehr als einem RTP-Paket zusammengesetzt wurden.

Diese Eigenschaft kann zusammen mit [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime) verwendet werden, um die durchschnittliche Montagedauer zu berechnen: `totalAssemblyTime / framesAssembledFromMultiplePacket`.
Eine höhere durchschnittliche Montagedauer könnte auf Netzwerkprobleme oder Ineffizienzen in der Empfangs-Pipeline hinweisen.

> [!NOTE]
> Der Wert ist für Audiostreams nicht definiert.

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
