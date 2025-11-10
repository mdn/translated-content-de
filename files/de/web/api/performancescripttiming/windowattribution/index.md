---
title: "PerformanceScriptTiming: windowAttribution-Eigenschaft"
short-title: windowAttribution
slug: Web/API/PerformanceScriptTiming/windowAttribution
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte Eigenschaft **`windowAttribution`** der [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Schnittstelle gibt einen enumerierten Wert zurück, der die Beziehung des Containers (d.h. entweder des Top-Level-Dokuments oder eines {{htmlelement("iframe")}}), in dem das lang andauernde Animationsrahmen (LoAF) verursachende Skript ausgeführt wurde, relativ zum Fenster des aktuellen Dokuments beschreibt.

## Wert

Ein enumerierter Wert, der einer der folgenden sein kann:

- `"ancestor"`
  - : Das aktuelle Dokument ist ein Nachkommen des Dokuments, in dem das Skript ausgeführt wurde, und ist innerhalb eines `<iframe>` eingebettet.
- `"descendant"`
  - : Das Skript wurde in einem Nachkommen-Dokument ausgeführt, das innerhalb des aktuellen Dokuments in einem `<iframe>` eingebettet ist.
- `"other"`
  - : Der Ort des Dokuments, in dem das Skript ausgeführt wurde, konnte nicht bestimmt werden.
- `"same-page"`
  - : Das Skript wurde in einer Version des aktuellen Dokuments ausgeführt, die innerhalb des aktuellen Dokuments in einem `<iframe>` eingebettet ist.
- `"self"`
  - : Das Skript wurde im aktuellen Dokument ausgeführt.

## Beispiele

Siehe [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Long animation frame timing](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
