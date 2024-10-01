---
title: Fallback-Alignment
slug: Glossary/Fallback_Alignment
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Im [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment) wird ein Fallback-Alignment angegeben, um Fälle zu behandeln, in denen das gewünschte Alignment nicht erfüllt werden kann. Wenn Sie beispielsweise `justify-content: space-between` angeben, müssen mehr als ein {{Glossary("alignment_subject", "Alignment-Objekt")}} vorhanden sein. Falls nicht, wird das Fallback-Alignment verwendet. Dies wird pro Alignment-Methode spezifiziert, wie unten detailliert beschrieben.

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

- [CSS Box Alignment](/de/docs/Web/CSS/CSS_box_alignment)
