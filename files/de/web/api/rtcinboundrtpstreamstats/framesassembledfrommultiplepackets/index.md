---
title: "RTCInboundRtpStreamStats: framesAssembledFromMultiplePackets-Eigenschaft"
short-title: framesAssembledFromMultiplePackets
slug: Web/API/RTCInboundRtpStreamStats/framesAssembledFromMultiplePackets
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`framesAssembledFromMultiplePackets`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtzahl der für diesen RTP-Stream korrekt decodierten Frames an, die aus mehr als einem RTP-Paket zusammengesetzt wurden.

Diese Eigenschaft kann zusammen mit [`totalAssemblyTime`](/de/docs/Web/API/RTCInboundRtpStreamStats/totalAssemblyTime) verwendet werden, um die durchschnittliche Montagezeit zu bestimmen: `totalAssemblyTime / framesAssembledFromMultiplePacket`.
Eine höhere durchschnittliche Montagezeit könnte auf Netzwerkprobleme oder Ineffizienzen in der Empfangspipeline hinweisen.

> [!NOTE]
> Der Wert ist für Audio-Streams undefiniert.

## Wert

Eine positive ganze Zahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
