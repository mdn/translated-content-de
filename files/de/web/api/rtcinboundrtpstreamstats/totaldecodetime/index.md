---
title: "RTCInboundRtpStreamStats: totalDecodeTime-Eigenschaft"
short-title: totalDecodeTime
slug: Web/API/RTCInboundRtpStreamStats/totalDecodeTime
l10n:
  sourceCommit: 9dd28ca3964213e0564c80db0a7c39d8ad73ed72
---

{{APIRef("WebRTC")}}

Die **`totalDecodeTime`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die gesamte Zeit an, die mit dem Dekodieren von Frames für diese Medienquelle/diesen Stream verbracht wurde, in Sekunden.

Die Zeit, die benötigt wird, um einen Frame zu dekodieren, ist die Zeit, die zwischen dem Zuführen eines Frames an den Decoder und der Rückgabe der dekodierten Daten für diesen Frame durch den Decoder vergeht.

Die Anzahl der dekodierten Frames wird in [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) angegeben, und die durchschnittliche Dekodierzeit ist `totalDecodeTime / framesDecoded`.

> [!NOTE]
> Die Eigenschaft ist für Audio-Streams undefiniert.

## Wert

Eine positive Zahl in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded)
