---
title: "PerformanceTimingConfidence: randomizedTriggerRate-Eigenschaft"
short-title: randomizedTriggerRate
slug: Web/API/PerformanceTimingConfidence/randomizedTriggerRate
l10n:
  sourceCommit: 464ec9b1e43bf8a87ffe83abf2832e10739e2fb3
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

Die **`randomizedTriggerRate`**-Eigenschaft der [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence)-Schnittstelle ist schreibgeschützt und gibt an, wie oft Rauschen angewendet wird, wenn der [`PerformanceTimingConfidence.value`](/de/docs/Web/API/PerformanceTimingConfidence/value) offengelegt wird.

Rauschen wird hinzugefügt, um die Privatsphäre zu verbessern (damit jedes Datenelement weniger leicht identifizierbar ist). Wenn Rauschen hinzugefügt wird, wird mit gleicher Wahrscheinlichkeit ein `low`- oder `high`-Confidence-`value` zurückgegeben, anstatt des echten `value`, um die Ergebnisse zu verschleiern.

## Wert

Eine Zahl zwischen `0` und `1`, einschließlich, die einen Prozentwert repräsentiert. Ein Wert von `0` entspricht `0%`, was bedeutet, dass niemals Rauschen hinzugefügt wird, während `1` `100%` entspricht, was bedeutet, dass immer Rauschen hinzugefügt wird.

## Beispiele

Sehen Sie sich die Hauptseite [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`PerformanceTimingConfidence`](/de/docs/Web/API/PerformanceTimingConfidence)
