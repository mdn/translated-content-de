---
title: Fallback-Ausrichtung
slug: Glossary/Fallback_Alignment
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

In der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) wird eine Fallback-Ausrichtung angegeben, um Fälle zu behandeln, in denen die angeforderte Ausrichtung nicht erfüllt werden kann. Wenn Sie beispielsweise `justify-content: space-between` angeben, muss es mehr als ein {{Glossary("alignment_subject", "Ausrichtungsobjekt")}} geben. Falls nicht, wird die Fallback-Ausrichtung verwendet. Diese wird je nach Ausrichtungsmethode spezifiziert, wie unten beschrieben.

- Erste Grundlinie
  - : `start`
- Letzte Grundlinie
  - : `safe end`
- Grundlinie
  - : `start`
- Space-between
  - : `flex-start` (Anfang)
- Space-around
  - : `center`
- Space-evenly
  - : `center`
- Stretch
  - : `flex-start` (Anfang)

## Siehe auch

- [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment)
