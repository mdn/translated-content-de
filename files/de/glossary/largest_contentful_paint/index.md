---
title: Größte inhaltliche Darstellung
slug: Glossary/Largest_contentful_paint
l10n:
  sourceCommit: 50e5edd07155de2eec2a8b6b2ad95820748cfec7
---

{{GlossarySidebar}}

Das **Largest Contentful Paint** (LCP) Leistungsmerkmal liefert die Renderzeit des größten Bilds oder Textblocks, der innerhalb des Ansichtsfensters sichtbar ist, und wird ab dem Zeitpunkt aufgezeichnet, an dem die Seite mit dem Laden beginnt.

Die folgenden Elemente werden bei der Bestimmung des LCP berücksichtigt:

- {{HTMLElement("img")}} Elemente.
- [`<image>`](/de/docs/Web/SVG/Element/image) Elemente innerhalb eines SVG.
- Die Posterbilder von {{HTMLElement("video")}} Elementen.
- Elemente mit einem {{cssxref("background-image")}}.
- Gruppen von Textknoten, wie z. B. {{HTMLElement("p")}}.

## Siehe auch

- [`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint)
- Verwandte Glossareinträge:
  - {{Glossary("First contentful paint")}}
  - {{Glossary("First paint")}}
