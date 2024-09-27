---
title: "RTCOutboundRtpStreamStats: qualityLimitationReason-Eigenschaft"
short-title: qualityLimitationReason
slug: Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`qualityLimitationReason`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein String, der den Grund angibt, warum die Medienqualität im Stream derzeit vom Codec während der Kodierung reduziert wird oder `none`, wenn keine Qualitätsreduzierung vorgenommen wird.

Diese Qualitätsreduzierung kann Änderungen wie eine reduzierte Bildrate oder Auflösung oder eine Erhöhung des Kompressionsfaktors beinhalten.

Die Dauer der Zeit, in der die kodierten Medien in jeder der möglichen Weisen, die durchgeführt werden können, in ihrer Qualität reduziert wurden, kann in [`qualityLimitationDurations`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations) gefunden werden.

## Wert

Ein {{jsxref("Map")}}, dessen Schlüssel Strings sind und deren Werte `none`, `cpu`, `bandwidth` oder `other` sind, und dessen Werte die Dauer der Medien in Sekunden sind, deren Qualität aus diesem Grund reduziert wurde.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
