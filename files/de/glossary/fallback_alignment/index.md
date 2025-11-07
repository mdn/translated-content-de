---
title: Fallback-Ausrichtung
slug: Glossary/Fallback_Alignment
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Im [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment) wird eine Fallback-Ausrichtung angegeben, um Fälle zu behandeln, in denen die gewünschte Ausrichtung nicht erfüllt werden kann. Wenn Sie zum Beispiel `justify-content: space-between` angeben, muss es mehr als ein {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} geben. Falls nicht, wird die Fallback-Ausrichtung verwendet. Diese wird für jede Ausrichtungsmethode wie unten beschrieben festgelegt.

- Erste Baseline
  - : `start`
- Letzte Baseline
  - : `safe end`
- Baseline
  - : `start`
- Space-between
  - : `flex-start` (start)
- Space-around
  - : `center`
- Space-evenly
  - : `center`
- Stretch
  - : `flex-start` (start)

## Siehe auch

- [CSS Box Alignment](/de/docs/Web/CSS/Guides/Box_alignment)
