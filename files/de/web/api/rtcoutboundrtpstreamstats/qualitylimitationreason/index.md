---
title: "RTCOutboundRtpStreamStats: qualityLimitationReason-Eigenschaft"
short-title: qualityLimitationReason
slug: Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`qualityLimitationReason`**-Eigenschaft des {{domxref("RTCOutboundRtpStreamStats")}} Wörterbuchs ist ein String, der den Grund angibt, warum die Medienqualität im Stream derzeit während der Kodierung durch den Codec reduziert wird, oder `none`, wenn keine Qualitätsreduzierung durchgeführt wird.

Diese Qualitätsreduzierung kann Änderungen wie eine Verringerung der Bildrate oder Auflösung oder eine Erhöhung des Kompressionsfaktors umfassen.

Die Dauer, in der die kodierten Medien in jeder der möglichen Weisen, wie die Qualität reduziert werden kann, ihre Qualität reduziert haben, kann in {{domxref("RTCOutboundRtpStreamStats.qualityLimitationDurations", "qualityLimitationDurations")}} gefunden werden.

## Wert

Eine {{jsxref("Map")}}, deren Schlüssel Strings sind, deren Werte `none`, `cpu`, `bandwidth` oder `other` sind, und deren Werte die Dauer der Medien in Sekunden sind, deren Qualität aus diesem Grund reduziert wurde.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
