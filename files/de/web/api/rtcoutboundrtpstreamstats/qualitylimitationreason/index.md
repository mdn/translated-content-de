---
title: "RTCOutboundRtpStreamStats: qualityLimitationReason-Eigenschaft"
short-title: qualityLimitationReason
slug: Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`qualityLimitationReason`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein String, der den Grund angibt, warum die Medienqualität im Stream derzeit während der Kodierung vom Codec reduziert wird, oder `none`, wenn keine Qualitätsreduktion erfolgt.

Diese Qualitätsreduktion kann Veränderungen wie eine verringerte Bildrate oder Auflösung oder eine Erhöhung des Kompressionsfaktors umfassen. Beachten Sie, dass der User-Agent den am meisten einschränkenden Faktor meldet. Wenn der am meisten einschränkende Faktor nicht bestimmt werden kann, wird das Ergebnis in der Prioritätsreihenfolge "bandwidth", "cpu", "other" gemeldet.

Die Menge an Zeit, in der die kodierten Medien in jeder der möglichen Weisen, in denen dies geschehen kann, in ihrer Qualität reduziert wurden, kann in [`qualityLimitationDurations`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations) gefunden werden.

> [!NOTE]
> Die Eigenschaft ist für Audio-Streams undefiniert.

## Wert

Ein String mit einem der folgenden Werte:

- `none`
  - : Die Qualität ist nicht begrenzt.
- `cpu`
  - : Die Qualität ist hauptsächlich aufgrund der CPU-Auslastung begrenzt.
- `bandwidth`
  - : Die Qualität ist hauptsächlich aufgrund von Stausignalen während der Bandbreitenschätzung begrenzt, wie z.B. Ankunftszeiten und Round-Trip-Zeiten.
- `other`
  - : Die Qualität ist hauptsächlich aus einem anderen als den oben genannten Gründen begrenzt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
