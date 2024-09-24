---
title: "PerformanceScriptTiming: windowAttribution-Eigenschaft"
short-title: windowAttribution
slug: Web/API/PerformanceScriptTiming/windowAttribution
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

{{SeeCompatTable}}{{APIRef("Performance API")}}

Die schreibgeschützte **`windowAttribution`**-Eigenschaft des {{domxref("PerformanceScriptTiming")}}-Interfaces gibt einen enumerierten Wert zurück, der die Beziehung der Umgebung (d. h. entweder des Top-Level-Dokuments oder eines {{htmlelement("iframe")}}), in der das Skript ausgeführt wurde, das einen langen Animationsrahmen (LoAF) verursacht hat, relativ zum Fenster des aktuellen Dokuments beschreibt.

## Wert

Ein enumerierter Wert, der einer der folgenden sein kann:

- `"ancestor"`
  - : Das aktuelle Dokument ist ein Nachfahre des Dokuments, in dem das Skript ausgeführt wurde, eingebettet in einem `<iframe>`.
- `"descendant"`
  - : Das Skript wurde in einem Nachfahrendokument ausgeführt, das in das aktuelle Dokument in einem `<iframe>` eingebettet ist.
- `"other"`
  - : Der Ort des Dokuments, in dem das Skript ausgeführt wurde, konnte nicht bestimmt werden.
- `"same-page"`
  - : Das Skript wurde in einer Version des aktuellen Dokuments ausgeführt, die innerhalb des aktuellen Dokuments in einem `<iframe>` eingebettet ist.
- `"self"`
  - : Das Skript wurde im aktuellen Dokument ausgeführt.

## Beispiele

Sehen Sie sich [Timing langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing#examples) für Beispiele im Zusammenhang mit der Long Animation Frames API an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Timing langer Animationsrahmen](/de/docs/Web/API/Performance_API/Long_animation_frame_timing)
- {{domxref("PerformanceLongAnimationFrameTiming")}}
