---
title: "PerformanceScriptTiming: windowAttribution-Eigenschaft"
short-title: windowAttribution
slug: Web/API/PerformanceScriptTiming/windowAttribution
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte **`windowAttribution`**-Eigenschaft des [`PerformanceScriptTiming`](/de/docs/Web/API/PerformanceScriptTiming)-Interfaces liefert einen enumerierten Wert, der das Verhältnis des Containers (d.h. entweder das oberste Dokument oder ein {{htmlelement("iframe")}}), in dem das Skript, das den langen Animationsrahmen (LoAF) verursacht hat, ausgeführt wurde, relativ zum Fenster beschreibt, in dem das aktuelle Dokument läuft.

## Wert

Ein enumerierter Wert, der einer der folgenden sein kann:

- `"ancestor"`
  - : Das aktuelle Dokument ist ein Nachkomme des Dokuments, in dem das Skript ausgeführt wurde, eingebettet in einem `<iframe>`.
- `"descendant"`
  - : Das Skript wurde in einem Nachkomme-Dokument ausgeführt, das im aktuellen Dokument in einem `<iframe>` eingebettet ist.
- `"other"`
  - : Der Speicherort des Dokuments, in dem das Skript ausgeführt wurde, konnte nicht bestimmt werden.
- `"same-page"`
  - : Das Skript wurde in einer Version des aktuellen Dokuments ausgeführt, die innerhalb des aktuellen Dokuments in einem `<iframe>` eingebettet ist.
- `"self"`
  - : Das Skript wurde im aktuellen Dokument ausgeführt.

## Beispiele

Siehe [Timing von langen Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing von langen Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [`PerformanceLongAnimationFrameTiming`](/de/docs/Web/API/PerformanceLongAnimationFrameTiming)
