---
title: "RTCOutboundRtpStreamStats: totalEncodedBytesTarget-Eigenschaft"
short-title: totalEncodedBytesTarget
slug: Web/API/RTCOutboundRtpStreamStats/totalEncodedBytesTarget
l10n:
  sourceCommit: 7f29fefe27ee8362a8b5f36255f942a2358cc8f8
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`totalEncodedBytesTarget`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs repräsentiert die Summe der Ziel-Frame-Größen für alle bisher enkodierten Frames.

Der Codec hat eine Ziel-Maximalgröße für jedes Frame, das er komprimieren soll, angegeben in Byte.
Diese Eigenschaft zeigt die kumulative Gesamtsumme der Zielgrößen für jedes Frame zu einem bestimmten Zeitpunkt an.
Sie wird wahrscheinlich von der Summe der tatsächlichen Frame-Größen abweichen.
Sie können dies mit [`bytesSent`](/de/docs/Web/API/RTCOutboundRtpStreamStats/bytesSent) vergleichen, um abzuschätzen, wie genau der Codec seine Zielvorgaben einhält.

Der Wert erhöht sich jedes Mal, wenn [`framesEncoded`](/de/docs/Web/API/RTCOutboundRtpStreamStats/framesEncoded) zunimmt.

> [!NOTE]
> Die Eigenschaft ist für Audio-Streams nicht definiert.

## Wert

Die Summe der Ziel-Frame-Größen in Byte, dargestellt als positive Ganzzahl.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
