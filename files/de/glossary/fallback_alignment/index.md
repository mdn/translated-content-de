---
title: Fallback-Ausrichtung
slug: Glossary/Fallback_Alignment
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

In der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) wird eine Fallback-Ausrichtung angegeben, um Fälle zu behandeln, in denen die gewünschte Ausrichtung nicht erfüllt werden kann. Wenn Sie beispielsweise `justify-content: space-between` angeben, muss es mehr als ein [alignment subject](/de/docs/Glossary/alignment_subject) geben. Wenn dies nicht der Fall ist, wird die Fallback-Ausrichtung verwendet. Diese wird pro Ausrichtungsmethode angegeben, wie unten detailliert beschrieben.

- Erste Grundlinie
  - : `start`
- Letzte Grundlinie
  - : `safe end`
- Grundlinie
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

- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
