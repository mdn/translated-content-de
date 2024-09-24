---
title: Ersatz-Ausrichtung
slug: Glossary/Fallback_Alignment
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Bei der [CSS-Box-Ausrichtung](/de/docs/Web/CSS/CSS_box_alignment) wird eine Ersatz-Ausrichtung angegeben, um mit Fällen umzugehen, in denen die angeforderte Ausrichtung nicht erfüllt werden kann. Wenn Sie beispielsweise `justify-content: space-between` angeben, muss es mehr als ein {{Glossary("alignment subject")}} geben. Wenn dies nicht der Fall ist, wird die Ersatz-Ausrichtung verwendet. Diese wird pro Ausrichtungsmethode angegeben, wie unten beschrieben.

- Erste Basislinie
  - : `start`
- Letzte Basislinie
  - : `safe end`
- Basislinie
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
