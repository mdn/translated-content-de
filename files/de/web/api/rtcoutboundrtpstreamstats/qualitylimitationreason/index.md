---
title: "RTCOutboundRtpStreamStats: qualityLimitationReason-Eigenschaft"
short-title: qualityLimitationReason
slug: Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason
l10n:
  sourceCommit: ae2ce98063b729ec0a21687642c0a4d06b8e7f69
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`qualityLimitationReason`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein String, der den Grund angibt, warum die Medienqualität im Stream derzeit durch den Codec während der Kodierung reduziert wird, oder `none`, wenn keine Qualitätsreduzierung durchgeführt wird.

Diese Qualitätsreduzierung kann Änderungen wie reduzierte Bildrate oder Auflösung oder eine Erhöhung des Kompressionsfaktors umfassen. Beachten Sie, dass der User-Agent den stärksten einschränkenden Faktor meldet. Wenn der stärkste einschränkende Faktor nicht bestimmt werden kann, wird das Ergebnis in der folgenden Prioritätsreihenfolge gemeldet: "bandwidth", "cpu", "other".

Die Zeitspanne, in der die kodierten Medien in jeder der möglichen Arten in ihrer Qualität reduziert wurden, finden Sie in [`qualityLimitationDurations`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations).

> [!NOTE]
> Die Eigenschaft ist für Audio-Streams nicht definiert.

## Wert

Ein String mit einem der folgenden Werte:

- `none`
  - : Die Qualität ist nicht begrenzt.
- `cpu`
  - : Die Qualität ist hauptsächlich aufgrund der CPU-Auslastung begrenzt.
- `bandwidth`
  - : Die Qualität ist hauptsächlich aufgrund von Stausignalen während der Bandbreitenschätzung begrenzt, wie z. B. Inter-Arrival-Zeit und Round-Trip-Zeit.
- `other`
  - : Die Qualität ist hauptsächlich aus einem anderen als den oben genannten Gründen begrenzt.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
