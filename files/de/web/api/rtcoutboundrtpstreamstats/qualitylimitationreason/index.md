---
title: "RTCOutboundRtpStreamStats: qualityLimitationReason-Eigenschaft"
short-title: qualityLimitationReason
slug: Web/API/RTCOutboundRtpStreamStats/qualityLimitationReason
l10n:
  sourceCommit: 4627deeb339b4d86fadc01199014f0c5385fb851
---

{{APIRef("WebRTC")}}{{SeeCompatTable}}

Die **`qualityLimitationReason`**-Eigenschaft des [`RTCOutboundRtpStreamStats`](/de/docs/Web/API/RTCOutboundRtpStreamStats)-Wörterbuchs ist ein String, der den Grund angibt, warum die Medienqualität im Stream derzeit vom Codec während der Kodierung reduziert wird, oder `none`, wenn keine Qualitätsreduktion erfolgt.

Diese Qualitätsreduktion kann Änderungen wie eine verringerte Bildrate oder Auflösung oder eine erhöhte Kompressionsrate beinhalten.

Die Zeit, in der das kodierte Medium auf jede der möglichen Arten in seiner Qualität reduziert wurde, kann in [`qualityLimitationDurations`](/de/docs/Web/API/RTCOutboundRtpStreamStats/qualityLimitationDurations) gefunden werden.

## Wert

Eine {{jsxref("Map")}}, deren Schlüssel Strings sind, deren Werte `none`, `cpu`, `bandwidth` oder `other` sind, und deren Werte die Dauer des Mediums in Sekunden angeben, dessen Qualität aus diesem Grund reduziert wurde.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
