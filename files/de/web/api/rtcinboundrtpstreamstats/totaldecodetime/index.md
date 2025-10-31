---
title: "RTCInboundRtpStreamStats: totalDecodeTime-Eigenschaft"
short-title: totalDecodeTime
slug: Web/API/RTCInboundRtpStreamStats/totalDecodeTime
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebRTC")}}

Die **`totalDecodeTime`**-Eigenschaft des [`RTCInboundRtpStreamStats`](/de/docs/Web/API/RTCInboundRtpStreamStats)-Wörterbuchs gibt die Gesamtzeit an, die für das Dekodieren von Frames dieser Medienquelle/-stream in Sekunden benötigt wird.

Die Zeit, die für das Dekodieren eines Frames benötigt wird, ist die Zeit, die zwischen dem Zuführen eines Frames an den Decoder und der Rückgabe dekodierter Daten für diesen Frame vergeht.

Die Anzahl der dekodierten Frames ist in [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded) angegeben, und die durchschnittliche Dekodierzeit ist `totalDecodeTime / framesDecoded`.

> [!NOTE]
> Die Eigenschaft ist für Audioströme nicht definiert.

## Wert

Eine positive Zahl, in Sekunden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`framesDecoded`](/de/docs/Web/API/RTCInboundRtpStreamStats/framesDecoded)
